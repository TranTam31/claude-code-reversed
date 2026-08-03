// Module: Rfp (lines 644180-644739)
  var Rfp = S(() => {
    _Ce();
    Gp();
    Qr();
    st();
    IYs();
    Zt();
    Pr();
    vfp();
    wfp();
    ((Cfp = require("child_process")),
      (xfp = require("fs")),
      (Hfp = require("readline")),
      (kfp = require("string_decoder")));
    phn = new Set();
    PYs = class PYs {
      options;
      process;
      processStdin;
      processStdout;
      ready = !1;
      abortController;
      exitError;
      exitEventDelivered = !1;
      stderrTail = "";
      exitListeners = [];
      abortHandler;
      forwardedAbort = Lc();
      pendingWrites = [];
      pendingEndInput = !1;
      spawnResolve;
      spawnReject;
      spawnPromise;
      constructor(e) {
        this.options = e;
        if (((this.abortController = e.abortController || Lc()), e.deferSpawn))
          ((this.spawnPromise = new Promise((t, r) => {
            ((this.spawnResolve = t), (this.spawnReject = r));
          })),
            this.spawnPromise.catch(() => {}));
        else this.initialize();
      }
      spawn() {
        try {
          this.initialize();
        } catch (t) {
          throw (this.spawnAbort(_n(t)), t);
        }
        let e = this.pendingWrites;
        if (((this.pendingWrites = []), this.spawnResolve))
          (this.spawnResolve(),
            (this.spawnResolve = void 0),
            (this.spawnReject = void 0));
        for (let t of e) this.write(t);
        if (this.pendingEndInput)
          ((this.pendingEndInput = !1), this.processStdin?.end());
      }
      spawnAbort(e) {
        if (this.spawnReject)
          (this.spawnReject(e),
            (this.spawnReject = void 0),
            (this.spawnResolve = void 0),
            (this.pendingWrites = []));
      }
      updateEnv(e) {
        if (this.options.env) Object.assign(this.options.env, e);
        else this.options.env = { ...e };
      }
      updateResume(e) {
        this.options.resume = e;
      }
      getDefaultExecutable() {
        return toe() ? "bun" : "node";
      }
      spawnLocalProcess(e) {
        let { command: t, args: r, cwd: n, env: o, signal: i } = e,
          s = Cfp.spawn(t, r, {
            cwd: n,
            stdio: ["pipe", "pipe", "pipe"],
            signal: i,
            env: o,
            windowsHide: !0,
          }),
          a = new kfp.StringDecoder("utf8"),
          l = !1,
          c = !1,
          u = !1,
          d,
          p = Yt(o.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr !== void 0;
        (s.stderr.on("data", (g) => {
          if (u) return;
          let y = a.write(g);
          if (((this.stderrTail += y), this.stderrTail.length > 2 * RYs))
            this.stderrTail = yq(this.stderrTail, RYs);
          if (p) (e9(y), this.options.stderr?.(y));
        }),
          s.stderr.on("error", (g) => {
            e9(`[ProcessTransport] stderr read failed: ${g.code ?? g.message}`);
          }));
        let f = () => {
          if (u) return;
          if (((u = !0), d)) clearTimeout(d);
          s.emit(Ifp, s.exitCode, s.signalCode);
          let g = s.stderr;
          if (U5_(g)) g.unref();
          else g.destroy();
        };
        return (
          s.stderr.once("close", () => {
            if (((this.stderrTail += a.end()), (l = !0), c)) f();
          }),
          s.once("exit", () => {
            if (((c = !0), (this.ready = !1), l)) f();
            else d = setTimeout(f, L5_);
          }),
          {
            stdin: s.stdin,
            stdout: s.stdout,
            get killed() {
              return s.killed;
            },
            get exitCode() {
              return s.exitCode;
            },
            get signalCode() {
              return s.signalCode;
            },
            kill: s.kill.bind(s),
            on: (g, y) => s.on(DYs(g), y),
            once: (g, y) => s.once(DYs(g), y),
            off: (g, y) => s.off(DYs(g), y),
          }
        );
      }
      initialize() {
        try {
          let {
              additionalDirectories: e = [],
              agent: t,
              betas: r,
              cwd: n,
              executable: o = this.getDefaultExecutable(),
              executableArgs: i = [],
              extraArgs: s = {},
              pathToClaudeCodeExecutable: a,
              env: l = { ...process.env },
              thinkingConfig: c,
              maxTurns: u,
              maxBudgetUsd: d,
              taskBudget: p,
              model: f,
              fallbackModel: m,
              jsonSchema: g,
              permissionMode: y,
              allowDangerouslySkipPermissions: _,
              permissionPromptToolName: E,
              continueConversation: A,
              resume: b,
              settingSources: T,
              skills: C,
              disallowedTools: I = [],
              tools: R,
              mcpServers: k,
              strictMcpConfig: D,
              canUseTool: M,
              includePartialMessages: L,
              plugins: N,
              sandbox: P,
            } = this.options,
            { allowedTools: B = [] } = this.options;
          if (C !== void 0) {
            let Y = C === "all" ? ["Skill"] : C.map((oe) => `Skill(${oe})`),
              re = new Set(B);
            B = [...B, ...Y.filter((oe) => !re.has(oe))];
          }
          let G = [
            "--output-format",
            "stream-json",
            "--verbose",
            "--input-format",
            "stream-json",
          ];
          if (c) {
            switch (c.type) {
              case "enabled":
                if (c.budgetTokens === void 0) G.push("--thinking", "adaptive");
                else G.push("--max-thinking-tokens", c.budgetTokens.toString());
                break;
              case "disabled":
                G.push("--thinking", "disabled");
                break;
              case "adaptive":
                G.push("--thinking", "adaptive");
                break;
            }
            if (c.type !== "disabled" && c.display)
              G.push("--thinking-display", c.display);
          }
          if (this.options.effort) G.push("--effort", this.options.effort);
          if (u) G.push("--max-turns", u.toString());
          if (d !== void 0) G.push("--max-budget-usd", d.toString());
          if (p) G.push("--task-budget", p.total.toString());
          if (f) G.push("--model", f);
          if (t) G.push("--agent", t);
          if (r && r.length > 0) G.push("--betas", r.join(","));
          if (g) G.push("--json-schema", Ie(g));
          if (this.options.debugFile)
            G.push("--debug-file", this.options.debugFile);
          else if (this.options.debug) G.push("--debug");
          if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
            let Y = Sfp();
            if (Y) G.push("--debug-file", Y);
          }
          if (M) {
            if (E)
              throw Error(
                "canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.",
              );
            G.push("--permission-prompt-tool", "stdio");
          } else if (E) G.push("--permission-prompt-tool", E);
          if (A) G.push("--continue");
          if (b) G.push(`--resume=${b}`);
          if (B.length > 0) G.push("--allowedTools", B.join(","));
          if (I.length > 0) G.push("--disallowedTools", I.join(","));
          if (R !== void 0)
            if (Array.isArray(R))
              if (R.length === 0) G.push("--tools", "");
              else G.push("--tools", R.join(","));
            else G.push("--tools", "default");
          if (k && Object.keys(k).length > 0)
            G.push("--mcp-config", Ie({ mcpServers: k }));
          if (T !== void 0) G.push(`--setting-sources=${T.join(",")}`);
          if (D) G.push("--strict-mcp-config");
          if (y) G.push("--permission-mode", y);
          if (_) G.push("--allow-dangerously-skip-permissions");
          if (m) {
            if (f && m === f)
              throw Error(
                "Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.",
              );
            G.push("--fallback-model", m);
          }
          if (this.options.includeHookEvents) G.push("--include-hook-events");
          if (L) G.push("--include-partial-messages");
          if (this.options.sessionMirror) G.push("--session-mirror");
          for (let Y of e) G.push("--add-dir", Y);
          if (N && N.length > 0)
            for (let Y of N)
              if (Y.type === "local")
                G.push(
                  Y.skipMcpDiscovery ? "--plugin-dir-no-mcp" : "--plugin-dir",
                  Y.path,
                );
              else throw Error(`Unsupported plugin type: ${Y.type}`);
          if (this.options.forkSession) G.push("--fork-session");
          if (this.options.resumeSessionAt)
            G.push(`--resume-session-at=${this.options.resumeSessionAt}`);
          if (this.options.sessionId)
            G.push(`--session-id=${this.options.sessionId}`);
          if (this.options.persistSession === !1)
            G.push("--no-session-persistence");
          if (this.options.managedSettings)
            G.push("--managed-settings", this.options.managedSettings);
          let V = { ...(s ?? {}) };
          if (this.options.settings) V.settings = this.options.settings;
          let F = Efp(V, P);
          for (let [Y, re] of Object.entries(F))
            if (re === null) G.push(`--${Y}`);
            else Afp(G, Y, re);
          if (!l.CLAUDE_CODE_ENTRYPOINT) l.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
          if ((delete l.NODE_OPTIONS, Yt(l.DEBUG_CLAUDE_AGENT_SDK)))
            l.DEBUG = "1";
          else delete l.DEBUG;
          let W = $5_(a),
            j = W ? a : o,
            z = W ? [...i, ...G] : [...i, a, ...G],
            q = {
              command: j,
              args: z,
              cwd: n,
              env: l,
              signal: this.forwardedAbort.signal,
            };
          if (this.options.spawnClaudeCodeProcess)
            (e9(`Spawning Claude Code (custom): ${j} ${z.join(" ")}`),
              (this.process = this.options.spawnClaudeCodeProcess(q)));
          else
            (e9(`Spawning Claude Code: ${j} ${z.join(" ")}`),
              (this.process = this.spawnLocalProcess(q)));
          if (
            ((this.processStdin = this.process.stdin),
            (this.processStdout = this.process.stdout),
            this.processStdin.on("error", (Y) => {
              (e9(
                `[ProcessTransport] stdin write failed (child likely exited): ${Y.code ?? Y.message}`,
              ),
                (this.ready = !1));
            }),
            N5_(this.process),
            (this.abortHandler = () => this.close()),
            this.abortController.signal.addEventListener(
              "abort",
              this.abortHandler,
            ),
            this.abortController.signal.aborted)
          )
            this.close();
          let K = this.process;
          (K.on("error", (Y) => {
            this.ready = !1;
            let re = Y;
            if (
              (re.syscall !== void 0
                ? re.syscall.startsWith("spawn")
                : ti(Y)) &&
              !K.killed
            )
              phn.delete(K);
            if (this.abortController.signal.aborted)
              this.exitError = new YG("Claude Code process aborted by user");
            else if (ti(Y)) {
              let ce = F5_(a, W);
              ((this.exitError = ReferenceError(ce)),
                e9(this.exitError.message));
            } else
              ((this.exitError = Error(
                `Failed to spawn Claude Code process: ${Y.message}`,
              )),
                e9(this.exitError.message));
          }),
            K.on("exit", (Y, re) => {
              if (
                ((this.exitEventDelivered = !0),
                (this.ready = !1),
                this.abortController.signal.aborted)
              )
                this.exitError = new YG("Claude Code process aborted by user");
              else {
                let oe = this.getProcessExitError(Y, re);
                if (oe) ((this.exitError = oe), e9(oe.message));
              }
            }),
            (this.ready = !this.abortController.signal.aborted));
        } catch (e) {
          throw ((this.ready = !1), e);
        }
      }
      getProcessExitError(e, t) {
        if (e !== 0 && e !== null)
          return Error(
            `Claude Code process exited with code ${e}${this.formatStderrTail()}`,
          );
        else if (t)
          return Error(
            `Claude Code process terminated by signal ${t}${this.formatStderrTail()}`,
          );
        return;
      }
      formatStderrTail() {
        let e = yq(this.stderrTail, RYs).trim();
        return e ? `. stderr: ${e}` : "";
      }
      write(e) {
        if (this.abortController.signal.aborted)
          throw new YG("Operation aborted");
        if (this.spawnResolve) {
          this.pendingWrites.push(e);
          return;
        }
        if (!this.ready || !this.processStdin)
          throw Error("ProcessTransport is not ready for writing");
        if (this.processStdin.writableEnded) {
          e9("[ProcessTransport] Dropping write to ended stdin stream");
          return;
        }
        if (this.process?.killed || this.process?.exitCode !== null)
          throw Error("Cannot write to terminated process");
        if (this.exitError)
          throw Error(
            `Cannot write to process that exited with error: ${this.exitError.message}`,
          );
        e9(`[ProcessTransport] Writing to stdin: ${e.substring(0, 100)}`);
        try {
          if (!this.processStdin.write(e))
            e9("[ProcessTransport] Write buffer full, data queued");
        } catch (t) {
          throw (
            (this.ready = !1),
            Error(`Failed to write to process stdin: ${le(t)}`)
          );
        }
      }
      [Symbol.dispose]() {
        this.close();
      }
      close() {
        if (
          (this.spawnAbort(
            this.abortController.signal.aborted
              ? new YG("Claude Code process aborted by user")
              : Error("Query closed before spawn"),
          ),
          this.processStdin)
        )
          (this.processStdin.end(), (this.processStdin = void 0));
        if (this.abortHandler)
          (this.abortController.signal.removeEventListener(
            "abort",
            this.abortHandler,
          ),
            (this.abortHandler = void 0));
        let e = this.process?.exitCode ?? null,
          t = this.process?.signalCode ?? null,
          r =
            !this.exitEventDelivered && ((e !== null && e >= 0) || t !== null),
          n;
        if (r) {
          if (
            ((this.exitEventDelivered = !0),
            (n = this.abortController.signal.aborted
              ? new YG("Claude Code process aborted by user")
              : this.getProcessExitError(e, t)),
            n && !this.exitError)
          )
            this.exitError = n;
        }
        let o = this.exitListeners;
        this.exitListeners = [];
        for (let { callback: a, handler: l } of o)
          if ((this.process?.off("exit", l), r))
            try {
              a(n);
            } catch (c) {
              e9(
                `[ProcessTransport] onExit callback threw during close(): ${le(c)}`,
              );
            }
        let i = () => {
            if (this.abortController.signal.aborted)
              this.forwardedAbort.abort(this.abortController.signal.reason);
          },
          s = this.process;
        if (s && !s.killed && s.exitCode === null && s.signalCode == null)
          (setTimeout(
            (a, l) => {
              if (a.exitCode !== null || a.signalCode != null) {
                l();
                return;
              }
              setTimeout(
                (c, u) => {
                  if (c.exitCode === null) c.kill("SIGKILL");
                  u();
                },
                5000,
                a,
                l,
              ).unref();
              return;
            },
            M5_,
            s,
            i,
          ).unref(),
            s.once("exit", () => phn.delete(s)));
        else if (s) (phn.delete(s), i());
        this.ready = !1;
      }
      isReady() {
        return this.ready;
      }
      async *readMessages() {
        if (this.spawnPromise)
          (await this.spawnPromise, (this.spawnPromise = void 0));
        if (!this.processStdout)
          throw Error("ProcessTransport output stream not available");
        if (this.exitError) throw this.exitError;
        let e = Hfp.createInterface({ input: this.processStdout }),
          t = this.process
            ? (() => {
                let r = this.process,
                  n = () => e.close();
                return (r.on("error", n), () => r.off("error", n));
              })()
            : void 0;
        if (this.exitError) e.close();
        try {
          for await (let r of e)
            if (r.trim()) {
              let n;
              try {
                n = Bt(r);
              } catch (o) {
                e9(`Non-JSON stdout: ${r}`);
                continue;
              }
              yield n;
            }
          if (this.exitError) throw this.exitError;
          await this.waitForExit();
        } finally {
          (t?.(), e.close());
        }
      }
      endInput() {
        if (this.spawnResolve) {
          this.pendingEndInput = !0;
          return;
        }
        if (this.processStdin) this.processStdin.end();
      }
      getInputStream() {
        return this.processStdin;
      }
      onExit(e) {
        if (!this.process) return () => {};
        let t = (r, n) => {
          let o = this.getProcessExitError(r, n);
          e(o);
        };
        return (
          this.process.on("exit", t),
          this.exitListeners.push({ callback: e, handler: t }),
          () => {
            if (this.process) this.process.off("exit", t);
            let r = this.exitListeners.findIndex((n) => n.handler === t);
            if (r !== -1) this.exitListeners.splice(r, 1);
          }
        );
      }
      async waitForExit() {
        if (this.exitError) throw this.exitError;
        if (
          !this.process ||
          this.process.exitCode === 0 ||
          (this.process.killed && this.exitEventDelivered)
        )
          return;
        return new Promise((e, t) => {
          let r = (o, i) => {
            if (this.abortController.signal.aborted) {
              t(new YG("Operation aborted"));
              return;
            }
            let s = this.getProcessExitError(o, i);
            if (s) t(s);
            else e();
          };
          this.process.once("exit", r);
          let n = (o) => {
            (this.process.off("exit", r), t(o));
          };
          (this.process.once("error", n),
            this.process.once("exit", () => {
              this.process.off("error", n);
            }));
        });
      }
    };
  });
