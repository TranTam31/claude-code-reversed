// Module: C0d (lines 477500-477585)
  var C0d = S(() => {
    Vn();
    Ss();
    ESe();
    kpe();
    Ni();
    cZ();
    Rpe();
    ((D9y = Se(() => v.strictObject({}))),
      (P9y = Se(() =>
        v.object({
          jobs: v.array(
            v.object({
              id: v.string(),
              cron: v.string(),
              humanSchedule: v.string(),
              prompt: v.string(),
              recurring: v.boolean().optional(),
              durable: v.boolean().optional(),
            }),
          ),
        }),
      )),
      (M9y = Ui({
        name: pct,
        searchHint: "list active cron jobs",
        maxResultSizeChars: 1e5,
        shouldDefer: !0,
        get inputSchema() {
          return D9y();
        },
        get outputSchema() {
          return P9y();
        },
        isEnabled() {
          return i7();
        },
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        async description() {
          return Kus;
        },
        async prompt() {
          return Yus(sFe());
        },
        async call() {
          let e = await nFe(),
            t = bU();
          return {
            data: {
              jobs: (t ? e.filter((o) => o.agentId === t.agentId) : e).map(
                (o) => ({
                  id: o.id,
                  cron: o.cron,
                  humanSchedule: jj(o.cron),
                  prompt: o.prompt,
                  ...(o.recurring ? { recurring: !0 } : {}),
                  ...(o.durable === !1 ? { durable: !1 } : {}),
                }),
              ),
            },
          };
        },
        mapToolResultToToolResultBlockParam(e, t) {
          return {
            tool_use_id: t,
            type: "tool_result",
            content:
              e.jobs.length > 0
                ? e.jobs.map(
                    (r) =>
                      `${r.id} \u2014 ${r.humanSchedule}${r.recurring ? " (recurring)" : " (one-shot)"}${r.durable === !1 ? " [session-only]" : ""}: ${oa(r.prompt, 80, !0)}`,
                  ).join(`
`)
                : "No scheduled jobs.",
          };
        },
        renderToolUseMessage() {
          return "";
        },
      })));
  });
