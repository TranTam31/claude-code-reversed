// Module: Cln (lines 505517-506018)
  var Cln = S(() => {
    Vn();
    vt();
    zt();
    Z9e();
    Ss();
    R2e();
    Gp();
    prr();
    Afe();
    ei();
    Ge();
    tse();
    st();
    Ni();
    Ir();
    pV();
    LOt();
    Ei();
    IRo();
    Cbe();
    eW();
    bb();
    yv();
    Mdt();
    Fdt();
    Tqe();
    yb();
    Pr();
    zC();
    $Rt();
    Tut();
    gmr();
    p8e();
    W8();
    HPt();
    Lft();
    nvo();
    Rh();
    vSe();
    Gdt();
    eDd();
    sur();
    XDd();
    QDd();
    chr();
    jl();
    ((umt = require("fs/promises")),
      (WZy = new Set([
        "select-string",
        "get-childitem",
        "findstr",
        "where.exe",
      ])),
      (GZy = new Set([
        "get-content",
        "get-item",
        "test-path",
        "resolve-path",
        "get-process",
        "get-service",
        "get-childitem",
        "get-location",
        "get-filehash",
        "get-acl",
        "format-hex",
      ])),
      (VZy = new Set(["write-output", "write-host"])));
    KZy = ["start-sleep", "sleep"];
    ((nPd = Se(() =>
      v.strictObject({
        command: v
          .string()
          .refine(Yke, YZy)
          .describe("The PowerShell command to execute"),
        timeout: I7(v.number().optional()).describe(
          `Optional timeout in milliseconds (max ${Lln()})`,
        ),
        description: v
          .string()
          .optional()
          .describe(
            "Clear, concise description of what this command does in active voice.",
          ),
        run_in_background: zU(v.boolean().optional()).describe(
          "Set to true to run this command in the background.",
        ),
        dangerouslyDisableSandbox: zU(v.boolean().optional()).describe(
          "Set this to true to dangerously override sandbox mode and run commands without sandboxing.",
        ),
      }),
    )),
      (XZy = Se(() => (IE() ? nPd().omit({ run_in_background: !0 }) : nPd()))),
      (JZy = Se(() =>
        v.object({
          stdout: v.string().describe("The standard output of the command"),
          stderr: v
            .string()
            .describe("The standard error output of the command"),
          interrupted: v
            .boolean()
            .describe("Whether the command was interrupted"),
          returnCodeInterpretation: v
            .string()
            .optional()
            .describe(
              "Semantic interpretation for non-error exit codes with special meaning",
            ),
          isImage: v
            .boolean()
            .optional()
            .describe("Flag to indicate if stdout contains image data"),
          persistedOutputPath: v
            .string()
            .optional()
            .describe(
              "Path to persisted full output when too large for inline",
            ),
          persistedOutputSize: v
            .number()
            .optional()
            .describe("Total output size in bytes when persisted"),
          backgroundTaskId: v
            .string()
            .optional()
            .describe(
              "ID of the background task if command is running in background",
            ),
          backgroundedByUser: v
            .boolean()
            .optional()
            .describe(
              "True if the user manually backgrounded the command with Ctrl+B",
            ),
          timedOutAfterMs: v
            .number()
            .optional()
            .describe(
              "Set when the command hit its timeout and was auto-backgrounded; the timeout value in ms",
            ),
          gitOperation: pvo()
            .optional()
            .describe(
              "@internal Structured classification of git/gh operations detected in this command (commit/push/merge/rebase/PR). Client-facing \u2014 lets clients render git activity without re-parsing stdout; not surfaced to the model.",
            ),
        }),
      )),
      (QZy = Ui({
        name: qi,
        ruleContentField: "command",
        searchHint: "execute Windows PowerShell commands",
        maxResultSizeChars: 30000,
        strict: !0,
        async description({ description: e }) {
          return e || "Run PowerShell command";
        },
        async prompt() {
          return JDd();
        },
        isConcurrencySafe(e) {
          return this.isReadOnly?.(e) ?? !1;
        },
        isSearchOrReadCommand(e) {
          if (!e?.command) return { isSearch: !1, isRead: !1 };
          return qZy(e.command);
        },
        isReadOnly(e) {
          if (wDd(e.command)) return !1;
          return $Ro(e.command);
        },
        toAutoClassifierInput(e) {
          let t = e.dangerouslyDisableSandbox;
          return e.command;
        },
        async preparePermissionMatcher({ command: e }) {
          let t = await xqe(e);
          if (!t.valid) return () => !0;
          let r = r4(t).flatMap((n) => {
            let o = [n.name, ...n.args].join(" "),
              i = [Tb(n.name), ...n.args].join(" ");
            return o.toLowerCase() === i ? [o] : [o, i];
          });
          return (n) => {
            let o = wtn(n);
            return r.some((i) => {
              if (o !== null) {
                let s = o.toLowerCase(),
                  a = i.toLowerCase();
                return a === s || a.startsWith(`${s} `);
              }
              return mfe(n, i, !0, !0);
            });
          };
        },
        get inputSchema() {
          return XZy();
        },
        get outputSchema() {
          return JZy();
        },
        userFacingName() {
          return "PowerShell";
        },
        getToolUseSummary(e) {
          if (!e?.command) return null;
          let { command: t, description: r } = e;
          if (r) return r;
          return oa(t, l4);
        },
        getActivityDescription(e) {
          if (!e?.command) return "Running command";
          return `Running ${e.description ?? oa(e.command, l4)}`;
        },
        isEnabled() {
          return !0;
        },
        async validateInput(e) {
          if (rPd(KRo(e), e.command))
            return (
              Ne("sandbox_exec", "windows_policy_refusal"),
              { result: !1, message: tPd, errorCode: 11 }
            );
          if (rse() && Dp() && !IE() && !e.run_in_background) {
            let t = iPd(e.command);
            if (t !== null)
              return {
                result: !1,
                message: `Blocked: ${t}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\` \u2014 Monitor runs bash). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
                errorCode: 10,
              };
          }
          return { result: !0 };
        },
        async checkPermissions(e, t) {
          let r = await YDd(e, t);
          if (
            e.dangerouslyDisableSandbox &&
            r.behavior !== "deny" &&
            r.behavior !== "ask" &&
            !San(r.decisionReason) &&
            !KRo(e) &&
            KRo({ ...e, dangerouslyDisableSandbox: !1 })
          )
            return {
              behavior: "ask",
              decisionReason: {
                type: "sandboxOverride",
                reason: "dangerouslyDisableSandbox",
              },
              message: "Run outside of the sandbox",
            };
          return r;
        },
        mapToolResultToToolResultBlockParam(
          {
            interrupted: e,
            stdout: t,
            stderr: r,
            isImage: n,
            persistedOutputPath: o,
            persistedOutputSize: i,
            backgroundTaskId: s,
            backgroundedByUser: a,
            timedOutAfterMs: l,
          },
          c,
        ) {
          if (n) {
            let f = ZEo(t, c);
            if (f) return f;
          }
          let u = t;
          if (o) {
            let f = t ? t.replace(/^(\s*\n)+/, "").trimEnd() : "",
              m = $Yr(f, yor);
            u = xlt({
              filepath: o,
              originalSize: i ?? 0,
              isJson: !1,
              preview: m.preview,
              hasMore: m.hasMore,
            });
          } else if (t) ((u = t.replace(/^(\s*\n)+/, "")), (u = u.trimEnd()));
          let d = r.trim();
          if (e) {
            if (r) d += ZDd;
            d += "<error>Command was aborted before completion</error>";
          }
          let p = "";
          if (s) {
            let f = $g(s);
            if (a)
              p = `Command was manually backgrounded by user with ID: ${s}. Output is being written to: ${f}`;
            else if (l !== void 0)
              p = `Command did not complete within its ${Math.max(1, Math.round(l / 1000))}s timeout and was moved to the background (ID: ${s}). Output is being written to: ${f}. You will be notified when it completes. To check interim output, use ${zi} on that file path.`;
            else
              p = `Command running in background with ID: ${s}. Output is being written to: ${f}. You will be notified when it completes. To check interim output, use ${zi} on that file path.`;
          }
          return {
            tool_use_id: c,
            type: "tool_result",
            content: [u, d, p].filter(Boolean).join(`
`),
            is_error: e,
          };
        },
        async call(e, t, r, n, o) {
          let i = KRo(e);
          if (rPd(i, e.command))
            throw (Ne("sandbox_exec", "windows_policy_refusal"), new Vco(tPd));
          let {
              abortController: s,
              showBackgroundHint: a,
              clearBackgroundHint: l,
              emitToolProgress: c,
            } = t,
            u = !t.agentId,
            d = 0;
          try {
            let p = ZZy({
                input: e,
                useSandbox: i,
                abortController: s,
                taskRegistry: t.taskRegistry,
                showBackgroundHint: a,
                emitToolProgress: c,
                preventCwdChanges: !u,
                isMainThread: u,
                toolUseId: t.toolUseId,
                agentId: t.agentId,
                agentWorktree: t.agentWorktree,
                sessionEnvVars: t.sessionEnvVars,
              }),
              f;
            do
              if (((f = await p.next()), !f.done && o)) {
                let F = f.value;
                o({
                  type: "progress",
                  toolUseID: `ps-progress-${d++}`,
                  data: {
                    type: "powershell_progress",
                    output: F.output,
                    fullOutput: F.fullOutput,
                    elapsedTimeSeconds: F.elapsedTimeSeconds,
                    totalLines: F.totalLines,
                    totalBytes: F.totalBytes,
                    timeoutMs: F.timeoutMs,
                    taskId: F.taskId,
                  },
                });
              }
            while (!f.done);
            let m = f.value,
              g = m.code === 0 && !m.stdout && m.stderr && !m.backgroundTaskId,
              y = await gvo(m.stdout, m.outputFilePath);
            if (
              !g &&
              yvo(e.command, m.code, y).prResolved &&
              !m.backgroundTaskId
            )
              t.markPrResolvedThisSession();
            let _ = Bdt(e.command),
              E = Py(s.signal.reason),
              A = m.interrupted && E === "interrupt",
              b = m.interrupted && Xtr(E);
            if (m.interrupted && E === "background") throw new tl();
            let T = "";
            if (u) {
              if (rvo(En(t))) T = tvo("");
            }
            if (m.backgroundTaskId) {
              let F = Yzr(m.stdout || "", e.command);
              if (u && F.hints.length > 0) for (let W of F.hints) kln(W);
              return {
                data: {
                  stdout: F.stripped,
                  stderr: [m.stderr || "", T].filter(Boolean).join(`
`),
                  interrupted: !1,
                  backgroundTaskId: m.backgroundTaskId,
                  backgroundedByUser: m.backgroundedByUser,
                  timedOutAfterMs: m.timedOutAfterMs,
                },
              };
            }
            let C = new MUr(),
              I = (m.stdout || "").trimEnd();
            C.append(I + ZDd);
            let R = ZRd(e.command, m.code, I, m.stderr || ""),
              k = QEo(C.toString()),
              D = Yzr(k, e.command);
            if (((k = D.stripped), u && D.hints.length > 0))
              for (let F of D.hints) kln(F);
            if (m.preSpawnError)
              throw new Dr(
                m.preSpawnError,
                "PowerShell: pre-spawn error (cwd/argv redacted)",
              );
            if (R.isError && !A) {
              let F = I.length <= 8192 ? I : I.slice(0, 4096) + I.slice(-4096),
                W = YRd(F, m.code);
              throw (
                O("tengu_powershell_tool_command_failed", {
                  command_type: fe(ahr(e.command)),
                  exit_code: m.code,
                  stdout_length: I.length,
                  error_class: W,
                  not_recognized_kind:
                    W === "not_recognized" || W === "command_not_found"
                      ? fe(XRd(F) ?? "unextracted")
                      : void 0,
                  parser_error_kind:
                    W === "parser_error" || W === "ps5_chain_op"
                      ? fe(JRd(F) ?? "unextracted")
                      : void 0,
                  bash_syntax_shape: fe(QRd(e.command)),
                  powershell_edition: fe((await Qzr()) ?? "unknown"),
                  destructive_category: fe(_ ?? "none"),
                  destructive_target_scope: fe(q$e(e.command, kt(), _)),
                  permission_mode: fe(En(t).mode),
                }),
                new hq({
                  stdout: k,
                  stderr: m.stderr || "",
                  code: m.code,
                  interrupted: b,
                })
              );
            }
            let M = 67108864,
              L,
              N;
            if (m.outputFilePath && m.outputTaskId)
              try {
                let F = await umt.stat(m.outputFilePath);
                ((N = F.size), await k$e());
                let W = NYr(m.outputTaskId, !1);
                if (F.size > M) await umt.truncate(m.outputFilePath, M);
                try {
                  await umt.link(m.outputFilePath, W);
                } catch {
                  await umt.copyFile(m.outputFilePath, W);
                }
                L = W;
              } catch {}
            let P = Ntn(k),
              B = k;
            if (P) {
              let F = await evo(
                k,
                m.outputFilePath,
                N,
                g_(t.options.mainLoopModel),
              );
              if (F) B = F;
              else P = !1;
            }
            let G = [m.stderr || "", T].filter(Boolean).join(`
`),
              V;
            if (!g) {
              let F = mur(e.command, y);
              if (Object.keys(F).length > 0) ((V = F), hvo(F));
            }
            return (
              O("tengu_powershell_tool_command_executed", {
                command_type: fe(ahr(e.command)),
                stdout_length: B.length,
                stderr_length: G.length,
                exit_code: m.code,
                interrupted: m.interrupted,
                powershell_edition: fe((await Qzr()) ?? "unknown"),
                destructive_category: fe(_ ?? "none"),
                destructive_target_scope: fe(q$e(e.command, kt(), _)),
                permission_mode: fe(En(t).mode),
              }),
              {
                data: {
                  stdout: B,
                  stderr: G,
                  interrupted: m.interrupted,
                  returnCodeInterpretation: R.message,
                  isImage: P,
                  persistedOutputPath: L,
                  persistedOutputSize: N,
                  gitOperation: V,
                },
              }
            );
          } finally {
            if ((l?.(), t.toolUseId))
              c?.({ kind: "clear", toolUseId: t.toolUseId });
            if (!this.isReadOnly?.(e)) t.applyFileHistoryOp({ kind: "touch" });
          }
        },
        isResultTruncated(e, { columns: t }) {
          if (e.isImage) return !1;
          return uz(e.stdout, t) || uz(e.stderr, t);
        },
      })));
  });
