// Module: MNs (lines 488026-488433)
  var MNs = S(() => {
    Zg();
    PNs();
    Ge();
    qm();
    st();
    zB();
    Zt();
    _V();
    P7y = new Set([401, 403, 404]);
    yln = class yln {
      url;
      state = "idle";
      onData;
      onCloseCallback;
      onEventCallback;
      eventFilter;
      onEventVetoed;
      onDiagnostic;
      headers;
      sessionId;
      refreshHeaders;
      getAuthHeaders;
      abortController = null;
      lastSequenceNum = 0;
      seenSequenceNums = new Set();
      reconnectAttempts = 0;
      reconnectStartTime = null;
      reconnectTimer = null;
      connectErrorsSeen = new Set();
      livenessTimer = null;
      postUrl;
      constructor(e, t = {}, r, n, o, i) {
        this.url = e;
        if (
          ((this.headers = t),
          (this.sessionId = r),
          (this.refreshHeaders = n),
          (this.getAuthHeaders = i ?? wer),
          (this.postUrl = N7y(e)),
          o !== void 0 && o > 0)
        )
          this.lastSequenceNum = o;
        (w(`SSETransport: SSE URL = ${e.href}`),
          w(`SSETransport: POST URL = ${this.postUrl}`),
          Sr("info", "cli_sse_transport_initialized"));
      }
      getLastSequenceNum() {
        return this.lastSequenceNum;
      }
      async connect() {
        if (this.state !== "idle" && this.state !== "reconnecting") {
          (w(`SSETransport: Cannot connect, current state is ${this.state}`, {
            level: "error",
          }),
            Sr("error", "cli_sse_connect_failed"));
          return;
        }
        this.state = "reconnecting";
        let e = Date.now(),
          t = new URL(this.url.href);
        if (this.lastSequenceNum > 0)
          t.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
        let r = this.getAuthHeaders(),
          n = {
            ...this.headers,
            ...r,
            Accept: "text/event-stream",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": mM(),
            "User-Agent": SS(),
          };
        if (r.Cookie) delete n.Authorization;
        if (this.lastSequenceNum > 0)
          n["Last-Event-ID"] = String(this.lastSequenceNum);
        (w(`SSETransport: Opening ${t.href}`),
          Sr("info", "cli_sse_connect_opening"),
          (this.abortController = new AbortController()));
        try {
          let o = await fetch(t.href, {
            headers: n,
            signal: this.abortController.signal,
          });
          if (!o.ok) {
            let s = P7y.has(o.status);
            if (
              (w(`SSETransport: HTTP ${o.status}${s ? " (permanent)" : ""}`, {
                level: "error",
              }),
              Sr("error", "cli_sse_connect_http_error", { status: o.status }),
              this.connectErrorsSeen.add(`http_${o.status}`),
              this.diagConnectFailure(
                `HTTP ${o.status}${s ? " (permanent)" : ""}`,
                e,
              ),
              s)
            ) {
              ((this.state = "closed"), this.onCloseCallback?.(o.status));
              return;
            }
            this.handleConnectionError();
            return;
          }
          if (!o.body) {
            (w("SSETransport: No response body"),
              this.connectErrorsSeen.add("no_response_body"),
              this.diagConnectFailure("no response body", e),
              this.handleConnectionError());
            return;
          }
          let i = Date.now() - e;
          if (
            (w("SSETransport: Connected"),
            Sr("info", "cli_sse_connect_connected", { duration_ms: i }),
            this.reconnectAttempts === 0)
          )
            Jd("sse_connect_ms", i, e - performance.timeOrigin);
          if (this.reconnectAttempts > 0) {
            let s = this.reconnectStartTime
              ? Math.round((Date.now() - this.reconnectStartTime) / 1000)
              : 0;
            this.onDiagnostic?.(
              `SSE reconnected after ${this.reconnectAttempts} attempt(s), ${s}s downtime` +
                (this.connectErrorsSeen.size > 0
                  ? `, errors=[${[...this.connectErrorsSeen].join(",")}]`
                  : ""),
            );
          } else this.onDiagnostic?.(`SSE connected in ${i}ms`);
          (this.connectErrorsSeen.clear(),
            (this.state = "connected"),
            (this.reconnectAttempts = 0),
            (this.reconnectStartTime = null),
            this.resetLivenessTimer(),
            await this.readStream(o.body));
        } catch (o) {
          if (this.abortController?.signal.aborted) return;
          (w(`SSETransport: Connection error: ${le(o)}`, { level: "error" }),
            Sr("error", "cli_sse_connect_error"),
            this.connectErrorsSeen.add("fetch_failed"),
            this.diagConnectFailure(le(o), e),
            this.handleConnectionError());
        }
      }
      diagConnectFailure(e, t) {
        if (!this.onDiagnostic) return;
        let r = this.reconnectAttempts + 1;
        if (r > 3 && r % 10 !== 0) return;
        let n = Date.now() - t,
          o = this.reconnectStartTime
            ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1000)}s reconnecting`
            : "",
          i =
            this.connectErrorsSeen.size > 1
              ? `, errors=[${[...this.connectErrorsSeen].join(",")}]`
              : "";
        this.onDiagnostic(
          `SSE connect failed (${e}) attempt=${r} took=${n}ms${o}${i}`,
        );
      }
      async readStream(e) {
        let t = e.getReader(),
          r = new hln();
        try {
          while (!0) {
            let { done: n, value: o } = await t.read();
            if (n) break;
            for (let i of r.push(o)) {
              if ((this.resetLivenessTimer(), i.id)) {
                let s = parseInt(i.id, 10);
                if (!isNaN(s)) {
                  if (this.seenSequenceNums.has(s))
                    (w(
                      `SSETransport: DUPLICATE frame seq=${s} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`,
                      { level: "warn" },
                    ),
                      Sr("warn", "cli_sse_duplicate_sequence"));
                  else if (
                    (this.seenSequenceNums.add(s),
                    this.seenSequenceNums.size > 1000)
                  ) {
                    let a = this.lastSequenceNum - 200;
                    for (let l of this.seenSequenceNums)
                      if (l < a) this.seenSequenceNums.delete(l);
                  }
                  if (s > this.lastSequenceNum) this.lastSequenceNum = s;
                }
              }
              if (i.event && i.data) this.handleSSEFrame(i.event, i.data);
              else if (i.data)
                (w(
                  "SSETransport: Frame has data: but no event: field \u2014 dropped",
                  { level: "warn" },
                ),
                  Sr("warn", "cli_sse_frame_missing_event_field"));
            }
          }
        } catch (n) {
          if (this.abortController?.signal.aborted) return;
          (w(`SSETransport: Stream read error: ${le(n)}`, { level: "error" }),
            Sr("error", "cli_sse_stream_read_error"));
        } finally {
          t.releaseLock();
        }
        if (this.state !== "closing" && this.state !== "closed") {
          if (
            (w("SSETransport: Stream ended, reconnecting"),
            this.state === "connected")
          )
            (this.connectErrorsSeen.add("stream_ended"),
              this.onDiagnostic?.("SSE stream ended by server, reconnecting"));
          this.handleConnectionError();
        }
      }
      handleSSEFrame(e, t) {
        if (e !== "client_event") {
          (w(
            `SSETransport: Unexpected SSE event type '${e}' on worker stream`,
            { level: "warn" },
          ),
            Sr("warn", "cli_sse_unexpected_event_type", { event_type: e }));
          return;
        }
        let r;
        try {
          r = Bt(t);
        } catch (o) {
          w(`SSETransport: Failed to parse client_event data: ${le(o)}`, {
            level: "error",
          });
          return;
        }
        let n = r.payload;
        if (n && typeof n === "object" && "type" in n) {
          let o = this.sessionId ? ` session=${this.sessionId}` : "",
            i = r.device_attestation_status
              ? ` attestation=${r.device_attestation_status}`
              : "";
          if (
            (w(
              `SSETransport: Event seq=${r.sequence_num} event_id=${r.event_id} event_type=${r.event_type} payload_type=${String(n.type)}${i}${o}`,
            ),
            Sr("info", "cli_sse_message_received"),
            this.eventFilter?.(r))
          )
            Sr("warn", "cli_sse_event_filtered");
          else if (
            n.type === "workflow_launch" &&
            r.event_type !== "workflow_launch"
          )
            (Sr("warn", "cli_sse_workflow_launch_event_type_mismatch", {
              event_type: r.event_type,
            }),
              this.onEventVetoed?.(r));
          else if (n.type === "control_request" && r.source === "worker")
            Sr("warn", "cli_sse_worker_control_request_dropped");
          else
            this.onData?.(
              Ie(n) +
                `
`,
            );
        } else
          w(
            `SSETransport: Ignoring client_event with no type in payload: event_id=${r.event_id}`,
          );
        this.onEventCallback?.(r);
      }
      handleConnectionError() {
        if (
          (this.clearLivenessTimer(),
          this.state === "closing" || this.state === "closed")
        )
          return;
        (this.abortController?.abort(), (this.abortController = null));
        let e = Date.now();
        if (!this.reconnectStartTime) this.reconnectStartTime = e;
        let t = e - this.reconnectStartTime;
        if (this.reconnectTimer)
          (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
        if (this.refreshHeaders) {
          let o = this.refreshHeaders();
          (Object.assign(this.headers, o),
            w("SSETransport: Refreshed headers for reconnect"));
        }
        ((this.state = "reconnecting"), this.reconnectAttempts++);
        let r = Math.min(R7y * Math.pow(2, this.reconnectAttempts - 1), D7y),
          n = Math.max(0, r + r * 0.25 * (2 * Math.random() - 1));
        (w(
          `SSETransport: Reconnecting in ${Math.round(n)}ms (attempt ${this.reconnectAttempts}, ${Math.round(t / 1000)}s elapsed)`,
        ),
          Sr("error", "cli_sse_reconnect_attempt", {
            reconnectAttempts: this.reconnectAttempts,
          }),
          (this.reconnectTimer = setTimeout(() => {
            ((this.reconnectTimer = null), this.connect());
          }, n)));
      }
      onLivenessTimeout = () => {
        ((this.livenessTimer = null),
          w("SSETransport: Liveness timeout, reconnecting", { level: "error" }),
          Sr("error", "cli_sse_liveness_timeout"),
          this.connectErrorsSeen.add("liveness_timeout"),
          this.onDiagnostic?.(
            `SSE liveness timeout \u2014 no frame in ${jHd / 1000}s, reconnecting`,
          ),
          this.abortController?.abort(),
          this.handleConnectionError());
      };
      resetLivenessTimer() {
        (this.clearLivenessTimer(),
          (this.livenessTimer = setTimeout(this.onLivenessTimeout, jHd)));
      }
      clearLivenessTimer() {
        if (this.livenessTimer)
          (clearTimeout(this.livenessTimer), (this.livenessTimer = null));
      }
      async write(e) {
        let t = this.getAuthHeaders();
        if (Object.keys(t).length === 0) {
          (w("SSETransport: No session token available for POST"),
            Sr("warn", "cli_sse_post_no_token"));
          return;
        }
        let r = {
          ...t,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": mM(),
          "User-Agent": SS(),
        };
        w(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
        for (let n = 1; n <= gln; n++) {
          try {
            let i = await Lo.post(this.postUrl, e, {
              headers: r,
              validateStatus: O7y,
            });
            if (i.status === 200 || i.status === 201) {
              w(`SSETransport: POST success type=${e.type}`);
              return;
            }
            if (
              (w(
                `SSETransport: POST ${i.status} body=${Ie(i.data).slice(0, 200)}`,
              ),
              i.status >= 400 && i.status < 500 && i.status !== 429)
            ) {
              (w(
                `SSETransport: POST returned ${i.status} (client error), not retrying`,
              ),
                Sr("warn", "cli_sse_post_client_error", { status: i.status }));
              return;
            }
            (w(`SSETransport: POST returned ${i.status}, attempt ${n}/${gln}`),
              Sr("warn", "cli_sse_post_retryable_error", {
                status: i.status,
                attempt: n,
              }));
          } catch (i) {
            (w(`SSETransport: POST error: ${le(i)}, attempt ${n}/${gln}`),
              Sr("warn", "cli_sse_post_network_error", { attempt: n }));
          }
          if (n === gln) {
            (w(`SSETransport: POST failed after ${gln} attempts, continuing`),
              Sr("warn", "cli_sse_post_retries_exhausted"));
            return;
          }
          let o = Math.min(M7y * Math.pow(2, n - 1), L7y);
          await vr(o);
        }
      }
      isConnectedStatus() {
        return this.state === "connected";
      }
      isClosedStatus() {
        return this.state === "closed";
      }
      setOnData(e) {
        this.onData = e;
      }
      setOnClose(e) {
        this.onCloseCallback = e;
      }
      setOnEvent(e) {
        this.onEventCallback = e;
      }
      setOnDiagnostic(e) {
        this.onDiagnostic = e;
      }
      setEventFilter(e) {
        this.eventFilter = e;
      }
      setOnEventVetoed(e) {
        this.onEventVetoed = e;
      }
      close() {
        if (this.reconnectTimer)
          (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
        (this.clearLivenessTimer(),
          (this.state = "closing"),
          this.abortController?.abort(),
          (this.abortController = null));
      }
      [Symbol.dispose]() {
        this.close();
      }
    };
  });
