// Module: PHo (lines 462911-463017)
  var PHo = S(() => {
    Vn();
    Vu();
    Ss();
    Ab();
    eft();
    R2e();
    Afe();
    Qr();
    Ni();
    st();
    mHo();
    uNt();
    eW();
    bb();
    yb();
    x2e();
    Lft();
    FLs();
    dNt();
    vSe();
    pAo();
    Hvd = require("net");
    lqy = { message: `timeout_ms must be \u2264 ${ULs}`, path: ["timeout_ms"] };
    ((dqy = Se(() =>
      v
        .strictObject({
          ...aqy(),
          command: iqy().optional().describe(nqy),
          ws: sqy().optional(),
        })
        .refine((e) => uqy(e.command, e.ws), "exactly one of command or ws")
        .refine(cqy, lqy),
    )),
      (pqy = Se(() =>
        v.object({
          taskId: v.string().describe("ID of the background monitor task."),
          timeoutMs: v
            .number()
            .describe("Timeout deadline in milliseconds (0 when persistent)."),
          persistent: v
            .boolean()
            .optional()
            .describe("No timeout \u2014 runs until TaskStop or session end."),
        }),
      )));
    ((hqy = {
      name: cA,
      maxResultSizeChars: 1e4,
      shouldDefer: !0,
      userFacingName() {
        return "Monitor";
      },
      getToolUseSummary(e) {
        if (!e?.description) return null;
        return oa(e.description, l4);
      },
      getActivityDescription(e) {
        return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
      },
      isEnabled() {
        return rse() && Dp();
      },
      isConcurrencySafe() {
        return !0;
      },
      renderToolUseMessage(e) {
        if (!e.description) return null;
        return e.description;
      },
      get outputSchema() {
        return pqy();
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return {
          tool_use_id: t,
          type: "tool_result",
          content: `Monitor started (task ${e.taskId}, ${e.persistent ? "persistent \u2014 runs until TaskStop or session end" : `timeout ${e.timeoutMs}ms`}). You will be notified on each event. Keep working \u2014 do not poll or sleep. Events may arrive while you are waiting for the user \u2014 an event is not their reply.`,
        };
      },
    }),
      (gqy = Ui({
        ...hqy,
        searchHint:
          "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
        async description() {
          return kus() + Ius + Hus();
        },
        async prompt() {
          return kus() + Ius + Hus();
        },
        get inputSchema() {
          return dqy();
        },
        toAutoClassifierInput(e) {
          return e.ws ? `websocket ${e.ws.url}${Jod(e.ws)}` : (e.command ?? "");
        },
        async checkPermissions(e, t) {
          if (e.ws) return mqy(e.ws);
          return Zsn({ ...e, command: e.command }, t);
        },
        async call(e, t) {
          if (e.ws) return RHo({ ...e, ...BLs(e), ws: e.ws }, tan(t));
          return fqy(e.command, e, t);
        },
      })));
  });
