// Module: _0d (lines 477198-477292)
  var _0d = S(() => {
    Vn();
    Ss();
    F$();
    Gft();
    g0d();
    ((w9y = Se(() => v.strictObject({}))),
      (T9y = Se(() =>
        v.object({
          tasks: v.array(
            v.object({
              id: v.string(),
              subject: v.string(),
              status: m1t(),
              owner: v.string().optional(),
              blockedBy: v.array(v.string()),
            }),
          ),
        }),
      )),
      (y0d = Ui({
        name: Q5,
        searchHint: "list all tasks",
        maxResultSizeChars: 1e5,
        async description() {
          return m0d;
        },
        async prompt() {
          return h0d();
        },
        get inputSchema() {
          return w9y();
        },
        get outputSchema() {
          return T9y();
        },
        userFacingName() {
          return "TaskList";
        },
        shouldDefer: !0,
        isEnabled() {
          return nP() && !vte();
        },
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        renderToolUseMessage() {
          return null;
        },
        async call() {
          let e = vV(),
            t = (await ate(e)).filter((o) => !o.metadata?._internal),
            r = new Set(
              t.filter((o) => o.status === "completed").map((o) => o.id),
            );
          return {
            data: {
              tasks: t.map((o) => ({
                id: o.id,
                subject: o.subject,
                status: o.status,
                owner: o.owner,
                blockedBy: o.blockedBy.filter((i) => !r.has(i)),
              })),
            },
          };
        },
        mapToolResultToToolResultBlockParam(e, t) {
          let { tasks: r } = e;
          if (r.length === 0)
            return {
              tool_use_id: t,
              type: "tool_result",
              content: "No tasks found",
            };
          let n = r.map((o) => {
            let i = o.owner ? ` (${o.owner})` : "",
              s =
                o.blockedBy.length > 0
                  ? ` [blocked by ${o.blockedBy.map((a) => `#${a}`).join(", ")}]`
                  : "";
            return `#${o.id} [${o.status}] ${o.subject}${i}${s}`;
          });
          return {
            tool_use_id: t,
            type: "tool_result",
            content: n.join(`
`),
          };
        },
      })));
  });
