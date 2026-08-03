// Module: v0d (lines 477304-477423)
  var v0d = S(() => {
    Vn();
    pt();
    Ss();
    jl();
    ESe();
    kpe();
    Ni();
    Mdt();
    cZ();
    Rpe();
    ((C9y = Se(() =>
      v.strictObject({
        cron: v
          .string()
          .describe(
            'Standard 5-field cron expression in local time: "M H DoM Mon DoW" (e.g. "*/5 * * * *" = every 5 minutes, "30 14 28 2 *" = Feb 28 at 2:30pm local once).',
          ),
        prompt: v.string().describe("The prompt to enqueue at each fire time."),
        recurring: zU(v.boolean().optional()).describe(
          `true (default) = fire on every cron match until deleted or auto-expired after ${zHe} days. false = fire once at the next match, then auto-delete. Use false for "remind me at X" one-shot requests with pinned minute/hour/dom/month.`,
        ),
        durable: zU(v.boolean().optional()).describe(Gus(sFe())),
      }),
    )),
      (x9y = Se(() =>
        v.object({
          id: v.string(),
          humanSchedule: v.string(),
          recurring: v.boolean(),
          durable: v.boolean().optional(),
        }),
      )),
      (H9y = Ui({
        name: W0,
        searchHint: "schedule a recurring or one-shot prompt",
        maxResultSizeChars: 1e5,
        shouldDefer: !0,
        get inputSchema() {
          return C9y();
        },
        get outputSchema() {
          return x9y();
        },
        isEnabled() {
          return i7();
        },
        toAutoClassifierInput(e) {
          return `${e.cron}: ${e.prompt}`;
        },
        async checkPermissions(e, t) {
          if (En(t).mode === "auto")
            return {
              behavior: "passthrough",
              message: "Scheduling a cron prompt requires classifier review.",
            };
          return { behavior: "allow", updatedInput: e };
        },
        async description() {
          return Wus(sFe());
        },
        async prompt() {
          return Vus(sFe());
        },
        getPath() {
          return j8e();
        },
        async validateInput(e) {
          if (!z8(e.cron))
            return {
              result: !1,
              message: `Invalid cron expression '${e.cron}'. Expected 5 fields: M H DoM Mon DoW.`,
              errorCode: 1,
            };
          if (hir(e.cron, Date.now()) === null)
            return {
              result: !1,
              message: `Cron expression '${e.cron}' does not match any calendar date in the next year.`,
              errorCode: 2,
            };
          if ((await nFe()).length >= S0d)
            return {
              result: !1,
              message: `Too many scheduled jobs (max ${S0d}). Cancel one first.`,
              errorCode: 3,
            };
          if (e.durable && bU())
            return {
              result: !1,
              message:
                "durable crons are not supported for teammates (teammates do not persist across sessions)",
              errorCode: 4,
            };
          return { result: !0 };
        },
        async call({ cron: e, prompt: t, recurring: r = !0, durable: n = !1 }) {
          let o = n && sFe(),
            i = await yir(e, t, r, o, bU()?.agentId);
          return (
            M0e(!0),
            { data: { id: i, humanSchedule: jj(e), recurring: r, durable: o } }
          );
        },
        mapToolResultToToolResultBlockParam(e, t) {
          let r = e.durable
            ? "Persisted to .claude/scheduled_tasks.json"
            : "Session-only (not written to disk, dies when Claude exits)";
          return {
            tool_use_id: t,
            type: "tool_result",
            content: e.recurring
              ? `Scheduled recurring job ${e.id} (${e.humanSchedule}). ${r}. Auto-expires after ${zHe} days. Use CronDelete to cancel sooner.`
              : `Scheduled one-shot task ${e.id} (${e.humanSchedule}). ${r}. It will fire once then auto-delete.`,
          };
        },
        renderToolUseMessage(e) {
          return `${e.cron ?? ""}${e.prompt ? `: ${oa(e.prompt, 60, !0)}` : ""}`;
        },
      })));
  });
