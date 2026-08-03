// Module: K7 (lines 513292-514005)
  var K7 = S(() => {
    Vn();
    pt();
    vt();
    xf();
    cMt();
    Ss();
    R2e();
    Gp();
    tSe();
    S$e();
    X8();
    JPd();
    prr();
    O_o();
    Afe();
    ei();
    Wf();
    tse();
    Qr();
    st();
    vc();
    nte();
    eP();
    Ni();
    Wi();
    pV();
    hp();
    IRo();
    Vln();
    eW();
    bb();
    yv();
    Mdt();
    Fdt();
    Pr();
    zC();
    $Rt();
    Tut();
    gmr();
    p8e();
    W8();
    zws();
    Rh();
    vSe();
    Bze();
    T$s();
    Gdt();
    x2e();
    eMd();
    HPt();
    nMd();
    trr();
    aLd();
    vHo();
    Jrn();
    Lft();
    nvo();
    jl();
    ((hmt = require("fs/promises")),
      (fLd = require("path")),
      (Pr_ = new Set(["command_substitution", "simple_expansion", "string"])),
      (Mr_ = new Set([
        "find",
        "grep",
        "rg",
        "ag",
        "ack",
        "locate",
        "which",
        "whereis",
      ])),
      (Lr_ = new Set([
        "cat",
        "head",
        "tail",
        "less",
        "more",
        "wc",
        "stat",
        "file",
        "strings",
        "jq",
        "awk",
        "cut",
        "sort",
        "uniq",
        "tr",
      ])),
      (Or_ = new Set(["ls", "tree", "du"])),
      (Nr_ = new Set(["echo", "printf", "true", "false", ":"])),
      ($r_ = new Set([
        "mv",
        "cp",
        "rm",
        "mkdir",
        "rmdir",
        "chmod",
        "chown",
        "chgrp",
        "touch",
        "ln",
        "cd",
        "export",
        "unset",
        "wait",
      ])));
    ((Br_ = ["sleep"]),
      (uLd = Se(() =>
        v.strictObject({
          command: v
            .string()
            .refine(Yke, jr_)
            .describe("The command to execute"),
          timeout: I7(v.number().optional()).describe(
            `Optional timeout in milliseconds (max ${Ehr()})`,
          ),
          description: v.string().optional()
            .describe(`Clear, concise description of what this command does in active voice. Never use words like "complex" or "risk" in the description - just describe what it does.

For simple commands (git, npm, standard CLI tools), keep it brief (5-10 words):
- ls \u2192 "List files in current directory"
- git status \u2192 "Show working tree status"
- npm install \u2192 "Install package dependencies"

For commands that are harder to parse at a glance (piped commands, obscure flags, etc.), add enough context to clarify what it does:
- find . -name "*.tmp" -exec rm {} \\; \u2192 "Find and delete all .tmp files recursively"
- git reset --hard origin/main \u2192 "Discard all local changes and match remote main"
- curl -s url | jq '.data[]' \u2192 "Fetch JSON from URL and extract data array elements"`),
          run_in_background: zU(v.boolean().optional()).describe(
            "Set to true to run this command in the background.",
          ),
          dangerouslyDisableSandbox: zU(v.boolean().optional()).describe(
            "Set this to true to dangerously override sandbox mode and run commands without sandboxing.",
          ),
          ...!1,
          _simulatedSedEdit: v
            .object({ filePath: v.string(), newContent: v.string() })
            .optional()
            .describe("Internal: pre-computed sed edit result from preview"),
        }),
      )),
      (dLd = Se(() =>
        (IE()
          ? uLd().omit({ run_in_background: !0, _simulatedSedEdit: !0 })
          : uLd().omit({ _simulatedSedEdit: !0 })
        ).superRefine((e, t) => {}),
      )),
      (Wr_ = [...RRo, "wget"]));
    Gr_ = Se(() =>
      v.object({
        stdout: v.string().describe("The standard output of the command"),
        stderr: v.string().describe("The standard error output of the command"),
        rawOutputPath: v
          .string()
          .optional()
          .describe("Path to raw output file for large MCP tool outputs"),
        interrupted: v
          .boolean()
          .describe("Whether the command was interrupted"),
        isImage: v
          .boolean()
          .optional()
          .describe("Flag to indicate if stdout contains image data"),
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
        backgroundCwdHint: v
          .string()
          .optional()
          .describe(
            "Model-facing note that the session cwd was not changed by a backgrounded command containing a directory-change builtin (cd/pushd/popd/chdir)",
          ),
        dangerouslyDisableSandbox: v
          .boolean()
          .optional()
          .describe("Flag to indicate if sandbox mode was overridden"),
        returnCodeInterpretation: v
          .string()
          .optional()
          .describe(
            "Semantic interpretation for non-error exit codes with special meaning",
          ),
        noOutputExpected: v
          .boolean()
          .optional()
          .describe(
            "Whether the command is expected to produce no output on success",
          ),
        structuredContent: v
          .array(v.any())
          .optional()
          .describe("Structured content blocks"),
        persistedOutputPath: v
          .string()
          .optional()
          .describe(
            "Path to the persisted full output in tool-results dir (set when output is too large for inline)",
          ),
        persistedOutputSize: v
          .number()
          .optional()
          .describe(
            "Total size of the output in bytes (set when output is too large for inline)",
          ),
        staleReadFileStateHint: v
          .string()
          .optional()
          .describe(
            "Model-facing note listing readFileState entries whose mtime bumped during this command (set when WRITE_COMMAND_MARKERS matches)",
          ),
        ghRateLimitHint: v
          .string()
          .optional()
          .describe(
            "Model-facing system-reminder appended when a gh command reports a GitHub API rate-limit error",
          ),
        gitOperation: pvo()
          .optional()
          .describe(
            "@internal Structured classification of git/gh operations detected in this command (commit/push/merge/rebase/PR). Client-facing \u2014 lets clients render git activity without re-parsing stdout; not surfaced to the model.",
          ),
      }),
    );
    Kr_ = new RegExp(
      [
        "--write",
        "--fix",
        "--in-place",
        "--auto-correct",
        "\\brun\\s+format\\b",
        "\\brun\\s+fix\\b",
        "\\b(yarn|pnpm)\\s+format\\b",
        "\\blint:file\\b",
        "\\blint:fix\\b",
        "\\bblack\\b",
        "\\bisort\\b",
        "\\bruff\\s+format\\b",
        "\\bcargo\\s+(fmt|fix)\\b",
        "\\brustfmt\\b",
        "\\bgo\\s+fmt\\b",
        "\\bterraform\\s+fmt\\b",
        "\\bdprint\\s+fmt\\b",
        "\\bswiftformat\\b",
        "\\bphpcbf\\b",
      ].join("|"),
    );
    bu = Ui({
      name: ri,
      ruleContentField: "command",
      searchHint: "execute shell commands",
      maxResultSizeChars: 30000,
      strict: !0,
      async description({ description: e }) {
        return e || "Run shell command";
      },
      async prompt({ model: e, tools: t }) {
        let n = t.some((o) => Va(o, Ph)) ? await rZr(Rl()) : [];
        return sLd(e, cDo(n));
      },
      isConcurrencySafe(e) {
        return this.isReadOnly?.(e) ?? !1;
      },
      isReadOnly(e) {
        let t = tmr(e.command);
        return evd(e, t).behavior === "allow";
      },
      toAutoClassifierInput(e) {
        let t = e.dangerouslyDisableSandbox;
        return e.command;
      },
      async preparePermissionMatcher({ command: e }) {
        let t = await c8e(e),
          r,
          n = !1;
        if (t.kind === "simple") r = t.commands.map((o) => o.argv.join(" "));
        else if (t.differential || !Pr_.has(t.nodeType ?? "")) return () => !0;
        else {
          let o = XPd(e);
          if (o === null || o.length === 0) return () => !0;
          ((r = o), (n = !0));
        }
        return (o) => {
          let i = mvd(o);
          if (n && !(i !== null ? !/\s/.test(i) : /^[^\s*?[]+\s?\*$/.test(o)))
            return !0;
          return r.some((s) => {
            if (i !== null)
              return (
                s === i ||
                s.startsWith(`${i} `) ||
                s === `xargs ${i}` ||
                s.startsWith(`xargs ${i} `)
              );
            return e$t(o, s) || e$t(`xargs ${o}`, s);
          });
        };
      },
      isSearchOrReadCommand(e) {
        let t = dLd().safeParse(e);
        if (!t.success) return { isSearch: !1, isRead: !1, isList: !1 };
        return Fr_(t.data.command);
      },
      get inputSchema() {
        return dLd();
      },
      coerceInput: QPd,
      get outputSchema() {
        return Gr_();
      },
      userFacingName(e) {
        if (!e) return "Bash";
        if (e.command) {
          let t = l1t(e.command);
          if (t) return DEo({ file_path: t.filePath, old_string: "x" });
        }
        return Yt(process.env.CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR) && M4(e)
          ? "SandboxedBash"
          : "Bash";
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
      async validateInput(e) {
        if (rse() && !IE() && !e.run_in_background) {
          let t = qr_(e.command);
          if (t !== null)
            return {
              result: !1,
              message: `Blocked: ${t}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\`). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
              errorCode: 10,
            };
        }
        return { result: !0 };
      },
      async checkPermissions(e, t) {
        let r = await Zsn(e, t);
        if (
          e.dangerouslyDisableSandbox &&
          r.behavior !== "deny" &&
          r.behavior !== "ask" &&
          !San(r.decisionReason) &&
          !M4(e) &&
          M4({ ...e, dangerouslyDisableSandbox: !1 })
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
      extractSearchText({ stdout: e, stderr: t }) {
        return t
          ? `${e}
${t}`
          : e;
      },
      stripForStorage(e, t) {
        if (!t) return e;
        if (
          typeof e !== "object" ||
          e === null ||
          typeof e.stdout !== "string" ||
          typeof e.stderr !== "string"
        )
          return e;
        if (e.stdout === "" && e.stderr === "") return e;
        return { ...e, stdout: "", stderr: "" };
      },
      mapToolResultToToolResultBlockParam(
        {
          interrupted: e,
          stdout: t,
          stderr: r,
          isImage: n,
          backgroundTaskId: o,
          backgroundedByUser: i,
          timedOutAfterMs: s,
          backgroundCwdHint: a,
          structuredContent: l,
          persistedOutputPath: c,
          persistedOutputSize: u,
          staleReadFileStateHint: d,
          ghRateLimitHint: p,
        },
        f,
      ) {
        if (l && l.length > 0)
          return { tool_use_id: f, type: "tool_result", content: l };
        if (n) {
          let _ = ZEo(t, f);
          if (_) return _;
        }
        let m = t;
        if (t) ((m = t.replace(/^(\s*\n)+/, "")), (m = m.trimEnd()));
        if (c) {
          let _ = $Yr(m, yor);
          m = xlt({
            filepath: c,
            originalSize: u ?? 0,
            isJson: !1,
            preview: _.preview,
            hasMore: _.hasMore,
          });
        }
        let g = r.trim();
        if (e) {
          if (r) g += lLd;
          g += "<error>Command was aborted before completion</error>";
        }
        let y = "";
        if (o) {
          let _ = $g(o);
          if (i)
            y = `Command was manually backgrounded by user with ID: ${o}. Output is being written to: ${_}`;
          else if (s !== void 0)
            y = `Command did not complete within its ${Math.max(1, Math.round(s / 1000))}s timeout and was moved to the background (ID: ${o}). Output is being written to: ${_}. You will be notified when it completes. To check interim output, use ${zi} on that file path.`;
          else
            y = `Command running in background with ID: ${o}. Output is being written to: ${_}. You will be notified when it completes. To check interim output, use ${zi} on that file path.`;
          if (a)
            y += `
${a}`;
        }
        return {
          tool_use_id: f,
          type: "tool_result",
          content: [m, g, y, d, p].filter(Boolean).join(`
`),
          is_error: e,
        };
      },
      async call(e, t, r, n, o) {
        if (e._simulatedSedEdit) return zr_(e._simulatedSedEdit, t, n);
        let i = Math.floor(Date.now() / 1000) * 1000,
          {
            abortController: s,
            getAppState: a,
            showBackgroundHint: l,
            clearBackgroundHint: c,
            emitToolProgress: u,
          } = t,
          d = new MUr(),
          p = "",
          f,
          m = 0,
          g = !1,
          y = !1,
          _,
          E,
          A = !t.agentId,
          b = !A,
          T = M4(e),
          C = Ult(e.command),
          I = t.toolUseId?.endsWith(qFs) ? void 0 : wr(t.toolUseId);
        try {
          let q = Xr_({
              input: e,
              abortController: s,
              taskRegistry: t.taskRegistry,
              showBackgroundHint: l,
              emitToolProgress: u,
              preventCwdChanges: b,
              isMainThread: A,
              toolUseId: t.toolUseId,
              agentId: t.agentId,
              agentWorktree: t.agentWorktree,
              sessionEnvVars: t.sessionEnvVars,
              effortLevel: UI(t.options.mainLoopModel)
                ? Ej(t.options.mainLoopModel, Sb(t))
                : void 0,
            }),
            K;
          do
            if (((K = await q.next()), !K.done && o)) {
              let ee = K.value;
              o({
                type: "progress",
                toolUseID: `bash-progress-${m++}`,
                data: {
                  type: "bash_progress",
                  output: ee.output,
                  fullOutput: ee.fullOutput,
                  elapsedTimeSeconds: ee.elapsedTimeSeconds,
                  totalLines: ee.totalLines,
                  totalBytes: ee.totalBytes,
                  taskId: ee.taskId,
                  timeoutMs: ee.timeoutMs,
                },
              });
            }
          while (!K.done);
          if (((_ = K.value), _.intercepted)) T = !1;
          if (
            ((E = await gvo(_.stdout, _.outputFilePath)),
            yvo(e.command, _.code, E).prResolved && !_.backgroundTaskId)
          )
            t.markPrResolvedThisSession();
          let re = Py(s.signal.reason),
            oe = _.interrupted && re === "interrupt",
            ce = _.interrupted && Xtr(re);
          if (_.interrupted && re === "background") throw new tl();
          if (
            (d.append((_.stdout || "").trimEnd() + lLd),
            (f = ZPd(e.command, _.code, _.stdout || "", "")),
            E.includes(".git/index.lock': File exists"))
          )
            O("tengu_git_index_lock_error", {});
          if (f.isError && !oe) {
            if (_.code !== 0) d.append(`Exit code ${_.code}`);
          }
          if (!b) {
            let ee = a();
            if (rvo(ee.toolPermissionContext)) p = tvo("");
          }
          let se = _.stdout || "",
            ne = Oo.annotateStderrWithSandboxFailures(e.command, se);
          if (((y = ne !== se), _.preSpawnError)) {
            if (/null bytes/.test(_.preSpawnError))
              throw new Dr(
                _.preSpawnError,
                "Bash: command contained null bytes (argv echo redacted)",
              );
            throw new Dr(
              _.preSpawnError,
              "Bash: pre-spawn error (cwd/argv redacted)",
            );
          }
          if (f.isError && !oe)
            throw (
              O("tengu_bash_tool_command_failed", {
                command_type: acn(e.command),
                stdout_length: se.length,
                stderr_length: 0,
                exit_code: _.code,
                interrupted: _.interrupted,
                executor_shell: await DTs(),
                executor_shell_overridden: Boolean(
                  process.env.CLAUDE_CODE_SHELL,
                ),
                sandboxed: T,
                sandbox_enabled: Oo.isSandboxingEnabled(),
                dangerously_disable_sandbox: e.dangerouslyDisableSandbox ?? !1,
                filesystem_policy: fe(plt()),
                ...pLd(e),
                had_sandbox_violation: T && y,
                tool_use_id: I,
                destructive_category: fe(C ?? "none"),
                destructive_target_scope: fe(q$e(e.command, kt(), C)),
                git_destructive_target: fe(xPt(e.command, C)),
                permission_mode: fe(En(t).mode),
              }),
              new hq({
                stdout: "",
                stderr: ne,
                code: _.code,
                interrupted: ce,
                hadSandboxViolation: y,
              })
            );
          g = _.interrupted;
        } finally {
          if ((c?.(), t.toolUseId))
            u?.({ kind: "clear", toolUseId: t.toolUseId });
          if (!this.isReadOnly?.(e)) t.applyFileHistoryOp({ kind: "touch" });
        }
        let R = d.toString(),
          k = 67108864,
          D,
          M;
        if (_.outputFilePath && _.outputTaskId)
          try {
            let q = await hmt.stat(_.outputFilePath);
            ((M = q.size), await k$e());
            let K = NYr(_.outputTaskId, !1);
            if (q.size > k) await hmt.truncate(_.outputFilePath, k);
            try {
              await hmt.link(_.outputFilePath, K);
            } catch {
              await hmt.copyFile(_.outputFilePath, K);
            }
            D = K;
          } catch {}
        O("tengu_bash_tool_command_executed", {
          command_type: acn(e.command),
          stdout_length: R.length,
          stderr_length: 0,
          exit_code: _.code,
          interrupted: g,
          executor_shell: await DTs(),
          executor_shell_overridden: Boolean(process.env.CLAUDE_CODE_SHELL),
          sandboxed: T,
          sandbox_enabled: Oo.isSandboxingEnabled(),
          dangerously_disable_sandbox: e.dangerouslyDisableSandbox ?? !1,
          filesystem_policy: fe(plt()),
          ...pLd(e),
          had_sandbox_violation: T && y,
          was_backgrounded: Boolean(_.backgroundTaskId),
          tool_use_id: I,
          destructive_category: fe(C ?? "none"),
          destructive_target_scope: fe(q$e(e.command, kt(), C)),
          git_destructive_target: fe(xPt(e.command, C)),
          permission_mode: fe(En(t).mode),
        });
        let L = Wqu(e.command);
        if (L)
          O("tengu_code_indexing_tool_used", {
            tool: fe(L),
            source: Ee("cli"),
            success: _.code === 0,
          });
        let N = QEo(R),
          P = Yzr(N, e.command);
        if (((N = P.stripped), A && P.hints.length > 0))
          for (let q of P.hints) kln(q);
        let B = Ntn(N),
          G = N;
        if (B) {
          let q = await evo(
            N,
            _.outputFilePath,
            M,
            g_(t.options.mainLoopModel),
          );
          if (q) G = q;
          else B = !1;
        }
        let V = _.backgroundTaskId ? void 0 : lrd(e.command, E),
          F =
            _.backgroundTaskId && tmr(e.command)
              ? `Session cwd remains ${kt()}; directory changes made by the backgrounded command do not apply to subsequent commands.`
              : void 0,
          W;
        if (!_.backgroundTaskId) {
          let q = mur(e.command, E);
          if (Object.keys(q).length > 0) ((W = q), hvo(q));
        }
        let j;
        if (!g && !B && !_.backgroundTaskId) {
          let q = await Yr_(e.command, t.readFileState, i);
          if (q.length > 0) {
            let K = kt(),
              Y = 5,
              re = q
                .slice(0, 5)
                .map((ce) => fLd.relative(K, ce) || ce)
                .join(", "),
              oe = q.length > 5 ? ` and ${q.length - 5} more` : "";
            j = `[This command modified ${q.length} ${Et(q.length, "file")} you've previously read: ${re}${oe}. Call Read before editing.]`;
          }
        }
        if (!g && !B && !_.backgroundTaskId)
          await rMd(
            e.command,
            t.readFileState,
            s.signal,
            _.code,
            D !== void 0 || R.length > Xst(),
          );
        return {
          data: {
            stdout: G,
            stderr: p,
            interrupted: g,
            isImage: B,
            returnCodeInterpretation: f?.message,
            noOutputExpected: Ur_(e.command),
            backgroundTaskId: _.backgroundTaskId,
            backgroundedByUser: _.backgroundedByUser,
            timedOutAfterMs: _.timedOutAfterMs,
            backgroundCwdHint: F,
            dangerouslyDisableSandbox:
              "dangerouslyDisableSandbox" in e
                ? e.dangerouslyDisableSandbox
                : void 0,
            persistedOutputPath: D,
            persistedOutputSize: M,
            staleReadFileStateHint: j,
            ghRateLimitHint: V,
            gitOperation: W,
          },
        };
      },
      isResultTruncated(e, { columns: t }) {
        if (e.isImage) return !1;
        return uz(e.stdout, t) || uz(e.stderr, t);
      },
    });
  });
