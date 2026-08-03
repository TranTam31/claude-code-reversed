// Module: CAd (lines 468312-468438)
  var CAd = S(() => {
    Vn();
    vt();
    Ss();
    AKe();
    $ft();
    G$();
    yOs();
    uNt();
    Zt();
    ((s8y = Se(() =>
      v.strictObject({
        task_id: v
          .string()
          .optional()
          .describe(
            "The ID of the background task to stop. Agent-team teammates and named background agents are also accepted by agent ID or name.",
          ),
        shell_id: v
          .string()
          .optional()
          .describe("Deprecated: use task_id instead"),
      }),
    )),
      (a8y = Se(() =>
        v.object({
          message: v.string().describe("Status message about the operation"),
          task_id: v.string().describe("The ID of the task that was stopped"),
          task_type: v
            .string()
            .describe("The type of the task that was stopped"),
          command: v
            .string()
            .optional()
            .describe("The command or description of the stopped task"),
        }),
      )),
      (sko = Ui({
        name: y1,
        searchHint: "kill a running background task",
        aliases: ["KillShell", "KillBash"],
        maxResultSizeChars: 1e5,
        userFacingName: () => "Stop Task",
        get inputSchema() {
          return s8y();
        },
        get outputSchema() {
          return a8y();
        },
        shouldDefer: !0,
        isConcurrencySafe() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return e.task_id ?? e.shell_id ?? "";
        },
        async validateInput({ task_id: e, shell_id: t }, r) {
          if (t !== void 0 && !TAd)
            ((TAd = !0),
              O("tengu_dead_probe_taskstop_shell_id", {
                with_task_id: e !== void 0 ? Ee("true") : Ee("false"),
              }));
          let { taskRegistry: n, getAppState: o } = r,
            i = e ?? t;
          if (!i)
            return {
              result: !1,
              message: "Missing required parameter: task_id",
              errorCode: 1,
            };
          let s = n.get(i),
            a;
          if (!s) {
            let l = oko(i, n, o);
            if (l.status === "ambiguous")
              return { result: !1, message: l.message, errorCode: 1 };
            if (l.status === "found") s = l.task;
            else a = l.suggestion;
          }
          if (!s)
            return {
              result: !1,
              message: bOs(i, n, o, a, aKe(r)),
              errorCode: 1,
            };
          if (s.status !== "running" && !zfe(s) && !Gk(s))
            return {
              result: !1,
              message: `Task ${i} is not running (status: ${s.status})`,
              errorCode: 3,
            };
          return { result: !0 };
        },
        async description() {
          return "Stop a running background task by ID";
        },
        async prompt() {
          return $Pu;
        },
        mapToolResultToToolResultBlockParam(e, t) {
          return { tool_use_id: t, type: "tool_result", content: Ie(e) };
        },
        renderToolUseMessage() {
          return "";
        },
        async call({ task_id: e, shell_id: t }, r) {
          let { taskRegistry: n, setAppState: o, getAppState: i } = r,
            s = e ?? t;
          if (!s) throw Error("Missing required parameter: task_id");
          let a = await L2e(s, {
            taskRegistry: n,
            setAppState: o,
            getAppState: i,
            callerAgentId: aKe(r),
            killedBy: "parent",
          });
          return {
            data: {
              message: `Successfully stopped task: ${a.taskId} (${a.command})`,
              task_id: a.taskId,
              task_type: a.taskType,
              command: a.command,
            },
          };
        },
      })));
  });
