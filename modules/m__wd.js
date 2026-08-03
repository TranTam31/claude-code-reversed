// Module: _wd (lines 472001-472204)
  var _wd = S(() => {
    Vn();
    oFe();
    dH();
    Ss();
    jl();
    Fdt();
    ASe();
    Ako = class Ako extends Error {
      constructor(e) {
        super(e);
        this.name = "ScheduleWakeupInputError";
      }
    };
    ((OOs = Se(() =>
      v.strictObject({
        delaySeconds: I7(v.number())
          .optional()
          .describe(
            "Seconds from now to wake up. Clamped to [60, 3600] by the runtime. Required unless `stop` is true.",
          ),
        reason: v
          .string()
          .optional()
          .describe(
            "One short sentence explaining the chosen delay. Goes to telemetry and is shown to the user. Be specific. Required unless `stop` is true.",
          ),
        prompt: v
          .string()
          .optional()
          .describe(
            `The /loop input to fire on wake-up. Pass the same /loop input verbatim each turn so the next firing re-enters the skill and continues the loop. For autonomous /loop (no user prompt), pass the literal sentinel \`${cct}\` instead (the dynamic-pacing variant, not the CronCreate-mode \`${_ir}\`). Required unless \`stop\` is true.`,
          ),
        stop: v
          .boolean()
          .optional()
          .describe(
            "Set to true to end the dynamic loop immediately instead of scheduling another wakeup. When true, all other fields are ignored and no further wakeups fire.",
          ),
        ...(Sir() && {
          noop: v
            .boolean()
            .optional()
            .describe(
              "true = nothing changed (you checked and there is nothing to report). false = something happened worth keeping (edited a file, posted a message, advanced state, surfaced a finding). Consecutive noop:true ticks are collapsed in the user's terminal view and tracked as a streak. Required unless `stop` is true.",
            ),
        }),
      }),
    )),
      (dzy = Se(() =>
        v.object({
          scheduledFor: v
            .number()
            .describe("Epoch ms timestamp when the next wakeup will fire"),
          clampedDelaySeconds: v
            .number()
            .describe("Actual delay used after clamping to runtime bounds"),
          wasClamped: v
            .boolean()
            .describe(
              "True if the requested delaySeconds was outside [60, 3600]",
            ),
          stopped: v
            .boolean()
            .optional()
            .describe("True when the model ended the loop via `stop: true`"),
          cancelledWakeups: v
            .number()
            .optional()
            .describe(
              "How many pending dynamic-loop wakeups stop:true cancelled. 0 means nothing was pending \u2014 a recurring /loop cron is not cancelled by stop:true.",
            ),
        }),
      )),
      (ywd = Ui({
        name: Fg,
        searchHint: `self-pace the dynamic /loop: pick a delay before the next tick, or stop/end/cancel the dynamic loop with stop:true (a fixed-interval /loop is a recurring cron \u2014 cancel it with ${$U})`,
        maxResultSizeChars: 1000,
        async description() {
          return NPu;
        },
        async prompt() {
          let e = tFe("repl_main_thread"),
            t = tFe("sdk");
          return OPu("noop" in OOs().shape, e === t ? e : void 0);
        },
        get inputSchema() {
          return OOs();
        },
        get outputSchema() {
          return dzy();
        },
        userFacingName() {
          return "";
        },
        shouldDefer: !0,
        toAutoClassifierInput(e) {
          if (e.stop === !0)
            return "stop the /loop \u2014 cancel pending wakeups, schedule nothing";
          if (e.delaySeconds == null || e.prompt == null)
            return `malformed ${Fg} call missing delaySeconds/prompt \u2014 the tool will reject it`;
          return `wake in ${e.delaySeconds}s: ${e.prompt}`;
        },
        async checkPermissions(e, t) {
          if (En(t).mode === "auto")
            return {
              behavior: "passthrough",
              message: "Scheduling a /loop wakeup requires classifier review.",
            };
          return { behavior: "allow", updatedInput: e };
        },
        renderToolUseMessage() {
          return null;
        },
        async call(e) {
          let { delaySeconds: t, reason: r, prompt: n, stop: o } = e;
          if (o === !0)
            return {
              data: {
                scheduledFor: 0,
                clampedDelaySeconds: 0,
                wasClamped: !1,
                stopped: !0,
                cancelledWakeups: YPu(),
              },
            };
          if (t === void 0 || r === void 0)
            throw new Ako(
              "`delaySeconds` and `reason` are required when `stop` is not true.",
            );
          if (n === void 0)
            throw new Ako("`prompt` is required when `stop` is not true.");
          if ("noop" in OOs().shape && e.noop === void 0)
            throw new Ako("`noop` is required when `stop` is not true.");
          if (!W8e())
            return (
              qPt("gate_off"),
              {
                data: {
                  scheduledFor: 0,
                  clampedDelaySeconds: 0,
                  wasClamped: !1,
                },
              }
            );
          let i = zPu(t, n, r);
          if (i === null)
            return {
              data: { scheduledFor: 0, clampedDelaySeconds: 0, wasClamped: !1 },
            };
          return {
            data: {
              scheduledFor: i.scheduledFor,
              clampedDelaySeconds: i.clampedDelaySeconds,
              wasClamped: i.wasClamped,
            },
          };
        },
        mapToolResultToToolResultBlockParam(
          {
            scheduledFor: e,
            clampedDelaySeconds: t,
            wasClamped: r,
            stopped: n,
            cancelledWakeups: o,
          },
          i,
        ) {
          if (n === !0) {
            let c = `If you armed a ${cA} for this loop, ${y1} it now; otherwise nothing more to do this turn.`;
            if (o === 0)
              return {
                tool_use_id: i,
                type: "tool_result",
                content: `Loop stopped \u2014 any dynamic loop in this session is ended; there was no pending wakeup to cancel. If you are running a fixed-interval /loop (a recurring cron), it is NOT stopped by this call \u2014 cancel it with ${$U}. ${c}`,
              };
            let u =
              o === void 0
                ? "no further wakeups scheduled"
                : `cancelled ${o} pending wakeup(s); no further dynamic-loop wakeups scheduled`;
            return {
              tool_use_id: i,
              type: "tool_result",
              content: `Loop stopped \u2014 ${u}. ${c}`,
            };
          }
          if (e === 0)
            return {
              tool_use_id: i,
              type: "tool_result",
              content:
                "Wakeup not scheduled. Either the /loop dynamic runtime gate is off or the loop reached its maximum duration \u2014 the loop has ended; do not re-issue.",
            };
          let s = new Date(e).toTimeString().slice(0, 8),
            a = Math.max(0, Math.round((e - Date.now()) / 1000)),
            l = r ? ` (clamped to ${t}s from your requested value)` : "";
          return {
            tool_use_id: i,
            type: "tool_result",
            content: `Next wakeup scheduled for ${s} (in ${a}s)${l}. Nothing more to do this turn \u2014 the harness re-invokes you when the wakeup fires or a task-notification arrives.`,
          };
        },
      })));
  });
