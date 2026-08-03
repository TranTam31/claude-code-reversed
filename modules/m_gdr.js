// Module: gdr (lines 384965-385290)
  var gdr = S(() => {
    Vn();
    pt();
    vt();
    Gb();
    Ss();
    ax();
    jl();
    Ge();
    rxs();
    unn();
    z0();
    Zt();
    om();
    k4();
    fv();
    mh();
    qid();
    Exs();
    ((JPy = Se(() =>
      v.object({
        tool: v.enum(["Bash"]).describe("The tool this prompt applies to"),
        prompt: v
          .string()
          .describe(
            'Semantic description of the action, e.g. "run tests", "install dependencies"',
          ),
      }),
    )),
      (Yid = Se(() =>
        v
          .strictObject({
            allowedPrompts: v
              .array(JPy())
              .optional()
              .describe("Deprecated: no longer used."),
          })
          .passthrough(),
      )),
      (BAT = Se(() =>
        Yid().extend({
          plan: v
            .string()
            .optional()
            .describe(
              "The plan content (injected by normalizeToolInput from disk)",
            ),
          planFilePath: v
            .string()
            .optional()
            .describe("The plan file path (injected by normalizeToolInput)"),
        }),
      )),
      (QPy = Se(() =>
        v.object({
          plan: v
            .string()
            .nullable()
            .describe("The plan that was presented to the user"),
          isAgent: v.boolean(),
          filePath: v
            .string()
            .optional()
            .describe("The file path where the plan was saved"),
          hasTaskTool: v
            .boolean()
            .optional()
            .describe(
              "Whether the Agent tool is available in the current context",
            ),
          planWasEdited: v
            .boolean()
            .optional()
            .describe(
              "True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result",
            ),
          awaitingLeaderApproval: v
            .boolean()
            .optional()
            .describe(
              "When true, the teammate has sent a plan approval request to the team leader",
            ),
          requestId: v
            .string()
            .optional()
            .describe("Unique identifier for the plan approval request"),
        }),
      )),
      (AV = Ui({
        name: qM,
        searchHint:
          "present plan for approval and start coding (plan mode only)",
        maxResultSizeChars: 1e5,
        async description() {
          return "Prompts the user to exit plan mode and start coding";
        },
        async prompt() {
          return zid;
        },
        get inputSchema() {
          return Yid();
        },
        get outputSchema() {
          return QPy();
        },
        userFacingName() {
          return "";
        },
        shouldDefer: !0,
        isEnabled() {
          if (IC().length > 0 && yn()) return !1;
          if (yn() && !vue()) return !1;
          return !0;
        },
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !1;
        },
        requiresUserInteraction() {
          if (oy()) return !1;
          return !0;
        },
        async validateInput(e, t) {
          let { options: r } = t;
          if (oy()) return { result: !0 };
          let n = En(t).mode;
          if (n !== "plan")
            return (
              O("tengu_exit_plan_mode_called_outside_plan", {
                model: r.mainLoopModel,
                mode: fe(n),
                hasExitedPlanModeInSession: d$r(),
              }),
              {
                result: !1,
                message: `You are not in plan mode. To enter plan mode, call the ${Jie} tool first. If your plan was already approved, continue with implementation.`,
                errorCode: 1,
              }
            );
          return { result: !0 };
        },
        async checkPermissions(e, t) {
          if (oy()) return { behavior: "allow", updatedInput: fpt(qM, e) };
          return {
            behavior: "ask",
            message: "Exit plan mode?",
            updatedInput: e,
          };
        },
        renderToolUseMessage() {
          return null;
        },
        async call(e, t, r, n, o) {
          let i = null,
            s = null;
          [i, s] = await Promise.all([
            Promise.resolve().then(() => (lte(), MAo)),
            Promise.resolve().then(() => (nw(), LAo)),
          ]);
          let a = !!t.agentId,
            l = JU(t.agentId),
            c = "plan" in e && typeof e.plan === "string" ? e.plan : void 0,
            u = c ?? x4(t.agentId);
          if (c !== void 0 && l)
            (await ypt(),
              await Vi()
                .write(l, c)
                .catch((m) =>
                  w(
                    `Failed to persist plan to ${l}: ${m instanceof Error ? m.message : String(m)}`,
                    { level: "error" },
                  ),
                ),
              Y9e());
          if (oy() && BGr()) {
            if (!u)
              throw new Sxs(
                `No plan file found at ${l}. Please write your plan to this file before calling ExitPlanMode.`,
              );
            let m = Qv() || "unknown",
              g = nm(),
              y = R7n("plan_approval", QCe(m, g || "default")),
              _ = {
                type: "plan_approval_request",
                from: m,
                timestamp: new Date().toISOString(),
                planFilePath: l,
                planContent: u,
                requestId: y,
              };
            await qT(
              "team-lead",
              { from: m, text: Ie(_), timestamp: new Date().toISOString() },
              g,
            );
            let E = t.getAppState(),
              A = Tid(m, E);
            if (A) exs(A, t.taskRegistry, !0);
            return {
              data: {
                plan: u,
                isAgent: !0,
                filePath: l,
                awaitingLeaderApproval: !0,
                requestId: y,
              },
            };
          }
          let d = null;
          {
            let m = En(t).prePlanMode ?? "default";
            if (m === "auto" && !(s?.isAutoModeGateEnabled() ?? !1)) {
              let g = s?.getAutoModeUnavailableReason() ?? "circuit-breaker";
              ((d =
                s?.getAutoModeUnavailableNotification(g) ??
                "auto mode unavailable"),
                w(
                  `[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${m} but gate is off (reason=${g}) \u2014 falling back to default on plan exit`,
                  { level: "warn" },
                ));
            }
          }
          if (d)
            o?.({
              type: "notification",
              notification: {
                key: "auto-mode-gate-plan-exit-fallback",
                text: `plan exit \u2192 default \xB7 ${d}`,
                priority: "immediate",
                color: "warning",
                timeoutMs: 1e4,
              },
            });
          let p = En(t);
          if (p.mode === "plan") {
            (TK(!0), Tue(!0));
            let m = p.prePlanMode ?? "default";
            {
              if (m === "auto" && !(s?.isAutoModeGateEnabled() ?? !1))
                m = "default";
              let _ = m === "auto",
                E = i?.isAutoModeActive() ?? !1;
              if ((i?.setAutoModeActive(_), E && !_)) pq(!0);
            }
            Abe({ from: "plan", to: m, trigger: "exit_plan_mode" });
            let g = m === "auto",
              y = p.strippedDangerousRules;
            t.setToolPermissionContext((_) => {
              let E = _;
              if (g) E = s?.stripDangerousPermissionsForAutoMode(E) ?? E;
              else if (y) E = s?.restoreDangerousPermissions(E) ?? E;
              return { ...E, mode: m, prePlanMode: void 0 };
            });
          }
          let f = mc() && t.options.tools.some((m) => Va(m, Vo));
          return {
            data: {
              plan: u,
              isAgent: a,
              filePath: l,
              hasTaskTool: f || void 0,
              planWasEdited: c !== void 0 || void 0,
            },
          };
        },
        mapToolResultToToolResultBlockParam(
          {
            isAgent: e,
            plan: t,
            filePath: r,
            hasTaskTool: n,
            planWasEdited: o,
            awaitingLeaderApproval: i,
            requestId: s,
          },
          a,
        ) {
          if (i)
            return {
              type: "tool_result",
              content: `Your plan has been submitted to the team lead for approval.

Plan file: ${r}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${s}`,
              tool_use_id: a,
            };
          if (e)
            return {
              type: "tool_result",
              content:
                'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',
              tool_use_id: a,
            };
          if (!t || t.trim() === "")
            return {
              type: "tool_result",
              content:
                "User has approved exiting plan mode. You can now proceed.",
              tool_use_id: a,
            };
          let l = wnn(Boolean(n));
          return {
            type: "tool_result",
            content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${r}
You can refer back to it if needed during implementation.${l}

## ${o ? "Approved Plan (edited by user)" : "Approved Plan"}:
${t}`,
            tool_use_id: a,
          };
        },
      })));
  });
