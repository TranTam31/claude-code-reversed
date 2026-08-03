// Module: ICm (lines 988061-988396)
  var ICm = S(() => {
    pt();
    kUe();
    mYs();
    Sfe();
    ASe();
    Tf();
    Ge();
    qm();
    Qr();
    st();
    Zm();
    Ir();
    sU();
    Qdt();
    zB();
    Ga();
    k$n();
    _V();
    k_l();
    C_l();
    Joo();
    H_l();
    DNs();
    xCm();
    Zt();
    ((bgi = require("fs")), (HCm = require("stream")), (kCm = require("url")));
    Iet = class Iet extends i1n {
      url;
      transport;
      inputStream;
      isBridge = !1;
      isDebug = !1;
      teeStdout = !1;
      activityFd;
      ccrClient;
      keepAliveTimer = null;
      permanentCloseCode;
      constructor(e, t, r, n) {
        let o = new HCm.PassThrough({ encoding: "utf8" });
        super(o, r, n);
        if (
          ((this.inputStream = o),
          (this.url = new kCm.URL(e)),
          this.url.protocol === "wss:")
        )
          this.url.protocol = "https:";
        else if (this.url.protocol === "ws:") this.url.protocol = "http:";
        let i = { "anthropic-client-platform": mM() },
          s = zb();
        if (s) i.Authorization = `Bearer ${s}`;
        else
          w("[remote-io] No session ingress token available", {
            level: "error",
          });
        let a = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
        if (a) i["x-environment-runner-version"] = a;
        let l = () => {
          let y = {},
            _ = zb();
          if (_) y.Authorization = `Bearer ${_}`;
          let E = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
          if (E) y["x-environment-runner-version"] = E;
          return y;
        };
        ((this.transport = CCm(this.url, i, Ht(), l)),
          (this.isBridge =
            process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge"),
          (this.isDebug = HK()),
          (this.teeStdout = Yt(process.env.CLAUDE_CODE_TEE_SDK_STDOUT)));
        let c = process.env.CLAUDE_RUNNER_ACTIVITY_FD,
          u = c ? Number.parseInt(c, 10) : NaN;
        if (Number.isInteger(u) && u > 2)
          try {
            let y = bgi.fstatSync(u);
            if (!y.isFIFO() && !y.isSocket()) throw Error("not a pipe");
            let _ = bgi.createWriteStream("", { fd: u, autoClose: !1 });
            (_.on("error", (E) => {
              (w(
                `[remote-io] activity fd ${u} write error (${le(E)}); falling back to stdout`,
              ),
                (this.activityFd = void 0));
            }),
              (this.activityFd = _));
          } catch (y) {
            w(
              `[remote-io] activity fd ${u} unavailable (${le(y)}); falling back to stdout`,
            );
          }
        (this.transport.setOnData((y) => {
          if ((this.inputStream.write(y), this.isBridge && this.isDebug))
            Js(
              y.endsWith(`
`)
                ? y
                : y +
                    `
`,
            );
        }),
          this.transport.setOnClose((y) => {
            if (y !== void 0)
              ((this.permanentCloseCode = y),
                process.stderr
                  .write(`RemoteIO: transport closed permanently (code ${y})
`));
            this.inputStream.end();
          }));
        let d = this.isBridge
          ? void 0
          : (y) => {
              process.stderr.write(`SDKStartup: ${y}
`);
            };
        if (d) this.transport.setOnDiagnostic?.(d);
        ((this.ccrClient = new mln(this.transport, this.url, {
          onDiagnostic: d,
        })),
          this.transport.setOnEventVetoed((y) => {
            (this.ccrClient.reportDelivery(y.event_id, "received"),
              this.ccrClient.reportDelivery(y.event_id, "processed"));
          }));
        let p = this.ccrClient.initialize();
        if (
          ((this.restoredWorkerState = p.catch(() => null)),
          p.then(
            () => d?.("worker registered"),
            (y) => {
              let _ = y instanceof nmt ? y.reason : le(y);
              Sr("error", "cli_worker_lifecycle_init_failed", {
                reason: y instanceof nmt ? y.reason : "unknown",
              });
              let E = `CCRClient initialization failed: ${le(y)}`;
              if (FHd(y)) w(E, { level: "error" });
              else xe(Error(E));
              (d?.(`worker registration failed (${_}), exiting`),
                Is(1, "other"));
            },
          ),
          this.ccrClient.registerShutdownCleanup(),
          Ffn((y, _, E) => this.ccrClient.writeInternalEvent(y, _, E)),
          Ufn(
            (y) => this.ccrClient.readInternalEvents(y),
            () => this.ccrClient.readSubagentInternalEvents(),
          ),
          (this.ccrClient.onInternalBatchAcked = $8s),
          ZdE(process.argv))
        ) {
          let y = performance.now(),
            _ = this.ccrClient;
          ((this.hydratePrefetch = (async () => {
            let E = _.readSubagentInternalEvents(),
              A,
              b = DNr();
            if (b) A = await cBo(b, _gi());
            let [T, C] = await Promise.all([
              _.readInternalEvents(A?.eventId),
              E,
            ]);
            return [T, C, A];
          })().catch((E) => (xe(E), null))),
            this.hydratePrefetch.then(() => {
              (Jd("resume_hydrate_fetch_ms", performance.now() - y, y), Rnd());
            }));
        }
        let f = {
          started: "processing",
          completed: "processed",
          cancelled: "processed",
        };
        if (
          ((this.onCommandLifecycle = (y, _) => {
            if (!Object.hasOwn(f, _)) return;
            let E = f[_];
            if (E === void 0) return;
            this.ccrClient.reportDelivery(y, E);
          }),
          this.isBridge)
        )
          (xur(JOt),
            grn((y) => {
              if (
                (process.stderr.write(
                  Hur +
                    yrn(y) +
                    `
`,
                ),
                y.payloadType === "control_request" && y.requestId)
              )
                this.ccrClient
                  .writeEvent({
                    type: "control_response",
                    response: {
                      subtype: "error",
                      request_id: y.requestId,
                      error: Lvo(y),
                    },
                  })
                  .catch((_) => {
                    w(`[remote-io] refusal write failed: ${le(_)}`, {
                      level: "warn",
                    });
                  });
            }),
            this.transport.setEventFilter((y) => {
              let _ = Nvo(y);
              if (_)
                (this.ccrClient.reportDelivery(y.event_id, "received"),
                  this.ccrClient.reportDelivery(y.event_id, "processed"));
              return _;
            }));
        let m = (y) => {
          if (this.teeStdout && !this.isBridge)
            try {
              this.teeActivity(
                zqt({
                  type: "system",
                  subtype: "session_state_changed",
                  state: y,
                  waiting_on_user: this.sessionState.waitingOnUser,
                }) +
                  `
`,
              );
            } catch {}
        };
        ((this.sessionState.onStateChanged = (y, _) => {
          (this.ccrClient.reportState(y, _), m(y));
        }),
          (this.sessionState.onWaitingOnUserChanged = () => {
            m(this.sessionState.getState());
          }),
          (this.sessionState.onTurnStarting = () => {
            if (this.teeStdout && !this.isBridge)
              try {
                this.teeActivity(
                  zqt({ type: "system", subtype: "turn_starting" }) +
                    `
`,
                );
              } catch {}
          }),
          D0s((y) => this.sessionState.setMainLoopRefcount(y)),
          this.sessionState.setMainLoopRefcount(Zrd()),
          P0s((y) => this.sessionState.dropNestedBlockedChain(y)),
          (this.sessionState.onMetadataChanged = (y) => {
            this.ccrClient.reportMetadata(y);
          }),
          (this.sessionState.onInternalMetadataChanged = (y) => {
            this.ccrClient.reportInternalMetadata(y);
          }),
          Hou((y) => this.sessionState.notifyMetadataChanged(y)),
          this.transport.connect());
        let g = igt().session_keepalive_interval_v2_ms;
        if (this.isBridge && g > 0)
          ((this.keepAliveTimer = setInterval(() => {
            (w("[remote-io] keep_alive sent"),
              this.write({ type: "keep_alive" }).catch((y) => {
                w(`[remote-io] keep_alive write failed: ${le(y)}`);
              }));
          }, g)),
            this.keepAliveTimer.unref?.());
        if ((Aa(async () => this.close()), t)) {
          let y = this.inputStream;
          (async () => {
            for await (let _ of t) {
              let E = JdE(String(_).replace(/\n$/, ""));
              if (E !== void 0)
                y.write(
                  E +
                    `
`,
                );
            }
          })();
        }
      }
      flushInternalEvents() {
        return this.ccrClient.flushInternalEvents();
      }
      flushDeliveryAcks() {
        return this.ccrClient.flushDeliveryAcks();
      }
      async flushClientEvents() {
        let e = this.ccrClient.droppedDurableBatches;
        return (
          await this.ccrClient.flush(),
          this.ccrClient.droppedDurableBatches === e
        );
      }
      flushSessionState() {
        return this.ccrClient.flushWorkerState();
      }
      get internalEventsPending() {
        return this.ccrClient.internalEventsPending;
      }
      teeActivity(e) {
        if (this.activityFd !== void 0) {
          this.activityFd.write(e);
          return;
        }
        Js(e);
      }
      writeActivityLine(e) {
        this.teeActivity(e);
      }
      async write(e) {
        if (e.type === "transcript_mirror") return;
        if ((this.trackWrite(e), this.teeStdout && !this.isBridge)) {
          let t = QdE(e);
          if (t !== void 0)
            try {
              this.teeActivity(
                zqt(t) +
                  `
`,
              );
            } catch {}
        }
        if ((await this.ccrClient.writeEvent(e), this.isBridge)) {
          if (e.type === "control_request" || this.isDebug)
            Js(
              zqt(e) +
                `
`,
            );
        }
      }
      close() {
        if ((D0s(null), P0s(null), this.keepAliveTimer))
          (clearInterval(this.keepAliveTimer), (this.keepAliveTimer = null));
        (this.transport.close(), this.inputStream.end());
      }
    };
  });
