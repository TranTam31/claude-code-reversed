// Module: hLs (lines 455749-456214)
  var hLs = S(() => {
    Vn();
    zt();
    vt();
    KC();
    Ss();
    Gp();
    hn();
    Afe();
    jl();
    ei();
    Ni();
    bh();
    Pr();
    $sn();
    Hft();
    sHo();
    Cke();
    sEd();
    aEd();
    qNt();
    Wsn();
    _Ke();
    yKe();
    vY();
    MZ();
    pJn();
    ((_Ed = require("crypto")),
      (bEd = require("path")),
      (gVy = Se(() =>
        v
          .strictObject({
            script: v
              .string()
              .max(l1)
              .refine(Yke, hVy)
              .optional()
              .describe(
                "Self-contained workflow script. Must begin with `export const meta = { name, description, phases }` (pure literal, no computed values) followed by the script body using agent()/parallel()/pipeline()/phase().",
              ),
            name: v
              .string()
              .optional()
              .describe(
                "Name of a predefined workflow (built-in or from .claude/workflows/). Resolves to a self-contained script.",
              ),
            description: v
              .string()
              .optional()
              .describe(
                "Ignored \u2014 set the workflow description in the script's `meta` block.",
              ),
            title: v
              .string()
              .optional()
              .describe(
                "Ignored \u2014 set the workflow title in the script's `meta` block.",
              ),
            args: v
              .unknown()
              .optional()
              .describe(
                "Optional input value exposed to the script as the global `args`, verbatim. Pass arrays/objects as actual JSON values, NOT as a " +
                  "JSON-encoded string \u2014 a stringified list breaks `args.filter`/" +
                  "`args.map` in the script. Use for parameterized named workflows (e.g. a research question).",
              ),
            scriptPath: v
              .string()
              .optional()
              .describe(
                "Path to a workflow script file on disk. Every Workflow invocation persists its script under the session directory and returns the path in the tool result. To iterate, edit that file with Write/Edit and re-invoke Workflow with the same `scriptPath` instead of re-sending the full script. Takes precedence over `script` and `name`.",
              ),
            resumeFromRunId: v
              .string()
              .regex(/^wf_[a-z0-9-]{6,}$/)
              .optional()
              .describe(
                `Run ID of a prior Workflow invocation to resume from. Completed agent() calls with unchanged (prompt, opts) return their cached results instantly; only edited or new calls re-run. Same-session only. Stop the prior run first (${y1}) before resuming.`,
              ),
            ...!1,
          })
          .refine((e) => e.script || e.name || e.scriptPath, {
            message: "Must provide script, name, or scriptPath",
          }),
      )),
      (yVy = Se(() =>
        v.object({
          status: v.enum(["async_launched", "remote_launched"]),
          taskId: v.string(),
          taskType: v
            .enum(["local_workflow", "remote_agent"])
            .optional()
            .describe(
              "TaskType of the registered background task \u2014 'local_workflow' for in-process runs, 'remote_agent' when remote:true dispatches to CCR. Set on all new writes; absent only on transcripts written before this field existed.",
            ),
          workflowName: v
            .string()
            .optional()
            .describe(
              "meta.name from the workflow script \u2014 same value as task_started.workflow_name. Set on all new writes; absent only on transcripts written before this field existed.",
            ),
          runId: v
            .string()
            .optional()
            .describe(
              "Local workflow run identifier for resumeFromRunId. Absent for remote_launched (the CCR session URL is the resume handle there) and on transcripts written before this field existed.",
            ),
          summary: v.string().optional(),
          transcriptDir: v
            .string()
            .optional()
            .describe(
              "Directory where subagent transcripts are written during execution",
            ),
          scriptPath: v
            .string()
            .optional()
            .describe(
              "Path to the persisted workflow script for this invocation. Editable via Write/Edit; pass back as `scriptPath` to re-run without resending the script.",
            ),
          sessionUrl: v
            .string()
            .optional()
            .describe("CCR session URL when status is remote_launched"),
          warning: v
            .string()
            .optional()
            .describe(
              "Non-blocking heads-up (e.g. local git state diverges from the pushed branch the cloud session will clone)",
            ),
          error: v.string().optional().describe("Set if syntax check failed"),
        }),
      )));
    cHo = class cHo extends Error {
      constructor(e) {
        super(e);
        this.name = "WorkflowInputError";
      }
    };
    ((yEd = {
      result: !1,
      message:
        "Tool dispatch was retracted by a server fallback; the input may be truncated.",
      errorCode: 7,
    }),
      (_Vy = Ui({
        name: pH,
        aliases: ["RunWorkflow"],
        searchHint:
          "orchestrate subagents with deterministic JavaScript workflow",
        maxResultSizeChars: 1e5,
        isEnabled: () => L0(),
        async prompt() {
          return uLs + fLs(xt().workflowSizeGuideline);
        },
        async description() {
          return uLs + fLs(xt().workflowSizeGuideline);
        },
        get inputSchema() {
          return gVy();
        },
        get outputSchema() {
          return yVy();
        },
        toAutoClassifierInput(e) {
          return e.script || e.scriptPath || e.name || "";
        },
        async validateInput(e, t) {
          if (_qe(t.abortController.signal)) return yEd;
          if (TQt())
            return {
              result: !1,
              message:
                "Dynamic workflows are disabled by managed settings (`disableWorkflows`).",
              errorCode: 5,
            };
          if (!L0())
            return {
              result: !1,
              message:
                'Dynamic workflows are not enabled for this session (org policy, launch gate, or the "Dynamic workflows" setting in /config).',
              errorCode: 6,
            };
          if (VNt()) {
            let o = [
              e.script && "script",
              e.scriptPath && "scriptPath",
              e.resumeFromRunId && "resumeFromRunId",
              e.remote && "remote",
            ].filter((i) => Boolean(i));
            if (o.length > 0)
              return {
                result: !1,
                message: `This session restricts the Workflow tool to named workflows (${RSd} is set). Not allowed here: ${o.join(", ")}. Invoke as {name, args} only.`,
                errorCode: 8,
              };
          }
          let r = await gEd(e);
          if (_qe(t.abortController.signal)) return yEd;
          if ("error" in r) {
            if (e.name && !e.scriptPath) pe("workflow_resolve", "not_found");
            return { result: !1, message: r.error, errorCode: 1 };
          }
          if (e.name && !e.scriptPath) be("workflow_resolve");
          let n = Bk(r.script);
          if ("error" in n)
            return {
              result: !1,
              message: `Invalid workflow script: ${n.error}`,
              errorCode: 2,
            };
          if (e.script && zxo(n.scriptBody))
            return {
              result: !1,
              message:
                "Workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.",
              errorCode: 4,
            };
          if (e.resumeFromRunId) {
            for (let [o, i] of Object.entries(t.taskRegistry.all()))
              if (
                i.type === "local_workflow" &&
                i.status === "running" &&
                i.workflowRunId === e.resumeFromRunId
              )
                return {
                  result: !1,
                  message: `Workflow ${e.resumeFromRunId} is still running (task ${o}). Stop it first with ${y1}({taskId: "${o}"}) before resuming.`,
                  errorCode: 3,
                };
          }
          return { result: !0 };
        },
        async checkPermissions(e, t) {
          let r = En(t),
            n = e.scriptPath ? void 0 : e.name,
            o = (c) => (n ? Bfe(r, pH, c).get(n) : void 0),
            i = o("deny");
          if (i)
            return {
              behavior: "deny",
              message: `Workflow ${n} blocked by permission rules`,
              decisionReason: { type: "rule", rule: i },
            };
          let s = e;
          if (e.scriptPath) {
            let c = await HRt(e.scriptPath);
            if (!("error" in c)) s = { ...e, script: c.script };
          } else if (e.name) {
            let c = await jsn(e.name, kt());
            s = { ...e, script: c?.script };
          }
          let a = o("ask");
          if (a)
            return {
              behavior: "ask",
              message: "Review dynamic workflow before running",
              updatedInput: s,
              decisionReason: { type: "rule", rule: a },
            };
          let l = o("allow");
          if (l)
            return {
              behavior: "allow",
              updatedInput: s,
              decisionReason: { type: "rule", rule: l },
            };
          return {
            behavior: "ask",
            message: "Review dynamic workflow before running",
            updatedInput: s,
            ...(n && {
              suggestions: [
                {
                  type: "addRules",
                  rules: [{ toolName: pH, ruleContent: n }],
                  behavior: "allow",
                  destination: "localSettings",
                },
              ],
            }),
          };
        },
        userFacingName() {
          return "Workflow";
        },
        getToolUseSummary(e) {
          if (e?.name) return `dynamic workflow: ${e.name}`;
          if (!e?.script) return null;
          let t = Bk(e.script);
          if (!("error" in t)) return t.meta.description;
          let r =
            e.script
              .split(
                `
`,
              )
              .find((n) => n.trim()) ?? "";
          return r.length > 50 ? r.slice(0, 49) + "\u2026" : r;
        },
        async call(e, t, r, n, o) {
          let i = await gEd(e);
          if ("error" in i) throw new cHo(i.error);
          let { script: s, source: a, resolvedScriptPath: l } = i,
            c = a === "built-in" && i.scriptMatchesDefinition === !0,
            u = Bk(s);
          if ("error" in u)
            throw new cHo(`Invalid workflow script: ${u.error}`);
          let d = e.resumeFromRunId ?? `wf_${_Ed.randomUUID().slice(0, 12)}`,
            p = u1("local_workflow"),
            f = u.meta.description,
            m = u.meta.name,
            g = xft(u.scriptBody);
          if (!g.ok)
            return (
              pe("task_local_workflow", "compile_failed"),
              {
                data: {
                  status: "async_launched",
                  taskId: p,
                  taskType: "local_workflow",
                  workflowName: m,
                  runId: d,
                  summary: f,
                  error: g.error,
                },
              }
            );
          let y = Ste(d),
            _ = l ?? Uoo(m, d, s),
            E = e.scriptPath ? void 0 : a,
            A = e.scriptPath ? "scriptPath" : (a ?? "inline"),
            b = oHo(m, E, c),
            T = iHo(u.meta.description, E, c);
          return (
            O("tengu_workflow_launched", {
              invocation_mode: Ee(
                e.scriptPath ? "scriptPath" : e.name ? "named" : "inline",
              ),
              workflow_source: fe(A),
              workflow_name: b,
              workflow_description: T,
              phase_count: u.meta.phases?.length ?? 0,
              launched_from_subagent: t.agentId != null,
              has_args: e.args != null,
              is_resume: e.resumeFromRunId != null,
              script_size_chars: s.length,
            }),
            Vsn({
              taskId: p,
              workflowRunId: d,
              script: s,
              scriptPath: _,
              args: e.args,
              meta: u.meta,
              vmScript: g.vmScript,
              toolUseContext: t,
              canUseTool: r,
              toolUseId: t.toolUseId,
              transcriptDir: y,
              telemetry: {
                source: A,
                name: b,
                description: T,
                scriptIsVerbatimBuiltIn: c,
              },
              isResume: e.resumeFromRunId != null,
              invokingRequestId: n?.requestId,
            }),
            {
              data: {
                status: "async_launched",
                taskId: p,
                taskType: "local_workflow",
                workflowName: m,
                runId: d,
                summary: f,
                transcriptDir: y,
                scriptPath: _,
              },
            }
          );
        },
        renderToolUseMessage(e, { verbose: t }) {
          if (e.name) return `dynamic workflow: ${e.name}`;
          if (!e.script) return null;
          if (t) return e.script;
          let r = Bk(e.script);
          if (!("error" in r)) return r.meta.description;
          let n =
              e.script
                .split(
                  `
`,
                )
                .find((a) => a.trim()) ?? e.script.slice(0, 40),
            o = n.length > hEd ? n.slice(0, hEd - 1) + "\u2026" : n,
            i =
              au(
                e.script,
                `
`,
              ) + 1,
            s = Bst(i - 1);
          return s ? `${o} ${s}` : o;
        },
        mapToolResultToToolResultBlockParam(e, t) {
          if (e.error)
            return {
              tool_use_id: t,
              type: "tool_result",
              content: `Workflow script has a syntax error and was not launched:
${e.error}`,
              is_error: !0,
            };
          if (e.status === "remote_launched")
            return {
              tool_use_id: t,
              type: "tool_result",
              content:
                `Workflow launched in a remote CCR session. Task ID: ${e.taskId}
Session: ${e.sessionUrl}
` +
                (e.summary
                  ? `Summary: ${e.summary}
`
                  : "") +
                (e.warning
                  ? `Warning: ${e.warning}
`
                  : "") +
                `
The workflow runs against a fresh clone of the pushed branch; phase progress is visible at the session URL, not in /workflows. You will be notified when it completes.`,
              is_error: !1,
            };
          let r = e.summary
              ? `
Summary: ${e.summary}`
              : "",
            n = e.transcriptDir
              ? `
Transcript dir: ${e.transcriptDir}`
              : "",
            o = e.scriptPath
              ? `
Script file: ${e.scriptPath}
(Edit this file with Write/Edit and re-invoke Workflow with {scriptPath: "${e.scriptPath}"} to iterate without resending the script.)`
              : "",
            i =
              e.scriptPath && e.runId
                ? `
Run ID: ${e.runId}
To resume after editing the script: Workflow({scriptPath: "${e.scriptPath}", resumeFromRunId: "${e.runId}"}) \u2014 completed agents return cached results (cached results may themselves be empty \u2014 inspect journal.jsonl before assuming there is something to recover).`
                : "",
            s = `Workflow launched in background. Task ID: ${e.taskId}${r}${n}${o}${i}

You will be notified when it completes. Use /workflows to watch live progress.`;
          return {
            tool_use_id: t,
            type: "tool_result",
            content: s,
            is_error: !1,
          };
        },
      })));
  });
