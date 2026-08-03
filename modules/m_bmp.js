// Module: bmp (lines 647364-647587)
  var bmp = S(() => {
    Vn();
    _Ce();
    zt();
    st();
    IYs();
    Zt();
    bct();
    uV_ = Se(() =>
      v.object({
        session_id: v.string(),
        ws_url: v.string(),
        work_dir: v.string().optional(),
        session_key: v.string().optional(),
      }),
    );
    zve = class zve extends Error {
      code;
      constructor(e, t) {
        super(e);
        ((this.name = "DirectConnectError"), (this.code = t));
      }
    };
    qYs = class qYs {
      options;
      ws;
      sessionId;
      workDir;
      abortController;
      readyState = !1;
      closed = !1;
      exitError;
      messages = new Tee();
      readyPromise;
      readyResolve;
      readyReject;
      abortHandler;
      partialChunks = [];
      telemetryEmitted = !1;
      constructor(e) {
        this.options = e;
        ((this.abortController = e.abortController ?? new AbortController()),
          (this.readyPromise = new Promise((t, r) => {
            ((this.readyResolve = t), (this.readyReject = r));
          })),
          this.readyPromise.catch(() => {}),
          this.initialize());
      }
      get ready() {
        return this.readyPromise;
      }
      getSessionId() {
        return this.sessionId;
      }
      getWorkDir() {
        return this.workDir;
      }
      async initialize() {
        if (this.abortController.signal.aborted) {
          this.failInit(new YG("Connection aborted"));
          return;
        }
        ((this.abortHandler = () => {
          (this.close(),
            (this.exitError = new YG("Connection aborted by user")));
        }),
          this.abortController.signal.addEventListener(
            "abort",
            this.abortHandler,
          ));
        let e;
        try {
          let o = await dV_(this.options);
          ((this.sessionId = o.sessionId),
            (this.workDir = o.workDir),
            (e = o.wsUrl));
        } catch (o) {
          let i = _n(o);
          if (!(i instanceof YG)) {
            let s =
              i instanceof zve && i.code ? i.code : "session_create_failed";
            this.emitTelemetry("bad", s);
          }
          this.failInit(i);
          return;
        }
        if (this.closed) {
          if (this.options.deleteSessionOnClose && this.sessionId)
            ymp(this.options.serverUrl, this.sessionId, this.options.authToken);
          return;
        }
        let t = {};
        if (this.options.authToken)
          t.authorization = `Bearer ${this.options.authToken}`;
        let r = new WebSocket(e, { headers: t });
        this.ws = r;
        let n = setTimeout(
          (o, i) => {
            if (!o.readyState) {
              i.close();
              let s = new zve(`WebSocket connection timeout after ${gmp}ms`);
              ((o.exitError = s),
                o.readyReject?.(s),
                o.emitTelemetry("bad", "connect_timeout"));
            }
          },
          gmp,
          this,
          r,
        );
        (r.addEventListener("open", () => {
          (clearTimeout(n),
            (this.readyState = !0),
            e9(
              `[DirectConnectTransport] Connected to ${this.options.serverUrl}, session=${this.sessionId}`,
            ),
            this.readyResolve?.(),
            this.emitTelemetry("ok"));
        }),
          r.addEventListener("message", (o) => {
            let i = typeof o.data === "string" ? o.data : "";
            if (
              i.indexOf(`
`) === -1
            ) {
              if (i) this.partialChunks.push(i);
              return;
            }
            let s = this.partialChunks.join("") + i;
            this.partialChunks.length = 0;
            let a = s.split(`
`),
              l = a.pop() ?? "";
            if (l) this.partialChunks.push(l);
            for (let c of a) {
              if (!c) continue;
              let u;
              try {
                u = Bt(c);
              } catch (d) {
                e9(
                  `DirectConnect: dropped malformed JSON line (${c.length} bytes): ${d}`,
                );
                continue;
              }
              this.messages.enqueue(u);
            }
          }),
          r.addEventListener("error", () => {
            clearTimeout(n);
            let o = new zve("WebSocket connection error");
            if (
              ((this.exitError = o),
              this.readyReject?.(o),
              this.messages.done(),
              !this.readyState)
            )
              this.emitTelemetry("bad", "ws_error");
          }),
          r.addEventListener("close", (o) => {
            let i = this.readyState;
            ((this.readyState = !1), (this.closed = !0));
            let s = o.code !== 1000 && o.code !== 1001;
            if (s && !this.exitError)
              this.exitError = new zve(
                `WebSocket closed abnormally: ${o.code} ${o.reason}`,
              );
            if (
              (this.messages.done(),
              i && s && !this.abortController.signal.aborted)
            )
              this.emitTelemetry("sad", "ws_closed_abnormally");
          }));
      }
      emitTelemetry(e, t) {
        if (this.telemetryEmitted) return;
        if (((this.telemetryEmitted = !0), e === "ok"))
          be("transport_direct_connect");
        else if (e === "bad") pe("transport_direct_connect", t ?? "unknown");
        else Ne("transport_direct_connect", t ?? "unknown");
      }
      failInit(e) {
        ((this.exitError = e),
          (this.closed = !0),
          this.readyReject?.(e),
          this.messages.done());
      }
      async write(e) {
        if (this.abortController.signal.aborted)
          throw new YG("Operation aborted");
        if (!this.readyState) await this.readyPromise;
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN)
          throw new zve("Transport is not ready for writing");
        this.ws.send(e);
      }
      isReady() {
        return this.readyState && this.ws?.readyState === WebSocket.OPEN;
      }
      endInput() {}
      [Symbol.dispose]() {
        this.close();
      }
      close() {
        if (this.closed) return;
        if (((this.closed = !0), (this.readyState = !1), this.abortHandler))
          (this.abortController.signal.removeEventListener(
            "abort",
            this.abortHandler,
          ),
            (this.abortHandler = void 0));
        if (!this.abortController.signal.aborted) this.abortController.abort();
        if (this.ws && this.ws.readyState === WebSocket.OPEN)
          this.ws.close(1000, "Normal closure");
        if (
          (this.messages.done(),
          this.options.deleteSessionOnClose && this.sessionId)
        )
          ymp(this.options.serverUrl, this.sessionId, this.options.authToken);
      }
      async *readMessages() {
        if ((yield* this.messages, this.exitError)) throw this.exitError;
      }
    };
  });
