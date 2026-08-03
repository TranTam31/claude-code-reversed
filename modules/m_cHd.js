// Module: cHd (lines 484811-484933)
  var cHd = S(() => {
    Vn();
    bfe();
    pt();
    Ss();
    Ab();
    AKe();
    L9e();
    Jh();
    ((QYy = Se(() =>
      v.strictObject({
        report: v
          .string()
          .min(1)
          .describe(
            "The report to deliver to your report target. Be concise and specific.",
          ),
      }),
    )),
      (lHd = Ui({
        name: AIo,
        maxResultSizeChars: 1000,
        async description() {
          return sHd;
        },
        async prompt() {
          return aHd;
        },
        get inputSchema() {
          return QYy();
        },
        isReadOnly() {
          return !1;
        },
        isEnabled() {
          return !0;
        },
        async checkPermissions(e, t) {
          return { behavior: "allow", updatedInput: e };
        },
        async call(e, t) {
          let r = t.agentId;
          if (r === void 0)
            return {
              data: {
                success: !1,
                message:
                  "ObserverReport is only available to an observer agent; the main session does not have an observed pairing.",
              },
            };
          let n = yrd(r);
          if (!n)
            return {
              data: {
                success: !1,
                message:
                  "Your observer pairing is not armed (stopped, retired, or never installed). The report was not delivered.",
              },
            };
          let {
            reportTargetTaskId: o,
            reportTargetName: i,
            viaWorkerName: s,
          } = n;
          if (o !== void 0) {
            let d = t.taskRegistry.get(o);
            if (!(
              hc(d) &&
              (d.status === "running" ||
                (d.status === "completed" &&
                  [...mte(d)].some((f) => f !== P2e)))
            ))
              return {
                data: {
                  success: !1,
                  message: `The report target (${i}) is not running. The report was not delivered.`,
                },
              };
          }
          let a = `observer:${n.observerAgentType}`,
            l =
              n.observedTaskId === void 0
                ? `"${s}"`
                : `"${s}" [${n.observedTaskId}]`,
            c = xvo(
              a,
              s === void 0
                ? e.report
                : `(observing worker ${l})
${e.report}`,
            ),
            u = { kind: "observer", from: a, senderTaskId: r };
          if (o === void 0)
            HE({
              mode: "prompt",
              agentId: Si(),
              value: c,
              priority: "next",
              origin: u,
              skipSlashCommands: !0,
              isMeta: !0,
            });
          else RKe(o, c, t.taskRegistry, { origin: u, isMeta: !0 });
          return {
            data: {
              success: !0,
              message: `Report queued for ${o === void 0 ? "the main conversation" : i}.`,
            },
          };
        },
        mapToolResultToToolResultBlockParam(e, t) {
          return {
            type: "tool_result",
            tool_use_id: t,
            content: e.message,
            is_error: !e.success,
          };
        },
        renderToolUseMessage(e) {
          return `report: ${e.report}`;
        },
      })));
  });
