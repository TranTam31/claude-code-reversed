// Module: iTd (lines 473823-473992)
  var iTd = S(() => {
    Vn();
    pt();
    vt();
    zt();
    Zr();
    m$t();
    qft();
    Smr();
    Ss();
    ei();
    Ar();
    ((Gzy = Se(() =>
      v.strictObject({
        type: v.enum(WOs).describe("What kind of feedback this is."),
        title: v
          .string()
          .min(1)
          .describe("Short, specific one-line summary of the issue."),
        details: v
          .string()
          .min(1)
          .describe(
            "Factual, reproducible report: what was attempted, what happened, exact error text if short, repro steps. No speculation, no secrets.",
          ),
        area: v
          .string()
          .optional()
          .describe(
            'Optional short tag naming the part of Claude Code this is about (e.g. "hooks config", "/help", "file editing"). Leave blank if unclear.',
          ),
      }),
    )),
      (Vzy = Se(() => v.object({ success: v.boolean(), message: v.string() }))),
      (oTd = Ui({
        name: tTd,
        maxResultSizeChars: 1000,
        searchHint: "draft product feedback bug report queue",
        async description() {
          let e = FM("tengu_juniper_relay_config", {});
          return typeof e.description === "string" && e.description !== ""
            ? e.description
            : rTd;
        },
        async prompt() {
          return nTd;
        },
        get inputSchema() {
          return Gzy();
        },
        get outputSchema() {
          return Vzy();
        },
        isReadOnly() {
          return !1;
        },
        isConcurrencySafe() {
          return !0;
        },
        isEnabled() {
          return uve();
        },
        async checkPermissions(e, t) {
          return { behavior: "allow", updatedInput: e };
        },
        async call(e, t) {
          if (!uve())
            return {
              data: {
                success: !1,
                message: "SendFeedback is not enabled in this session.",
              },
            };
          if (!Ywd())
            return (
              O("tengu_feedback_draft_call_capped", { cap: wf(Mko) }),
              {
                data: {
                  success: !1,
                  message: `SendFeedback has reached its limit of ${Mko} calls per session. Do not call it again this session; drafts already queued are unaffected and the user can review them with /feedback.`,
                },
              }
            );
          let r = Ht(),
            { getTranscriptPathForSession: n } = await Promise.resolve().then(
              () => (Ga(), I9e),
            ),
            o = t0t(),
            i = [];
          for (let d of t.messages ?? [])
            if (d.type === "assistant" && d.requestId) i.push(d.requestId);
          if (o) i.push(o);
          let s = To(i).slice(-Wzy),
            a = Gwd({
              type: e.type,
              title: e.title,
              details: e.details,
              area: e.area,
              trigger: "model_judgment",
              requestIds: s,
              sessionId: r,
              cwd: kt(),
              model: t.options.mainLoopModel,
              cliVersion: {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.220",
                FEEDBACK_CHANNEL:
                  "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-07-24T22:17:45Z",
                GIT_SHA: "4073f59596e272f39393db4f96abc5f4b10eff21",
                DD_SOURCEMAP_GROUP: "win32",
              }.VERSION,
              os: `${Z.platform} x64`,
              transcriptFile: n(r),
            }),
            l = await Pko(a);
          if (!l.success)
            return (
              pe("feedback_drafts", l.reason),
              {
                data: {
                  success: !1,
                  message:
                    l.reason === "too_large"
                      ? "Draft too large \u2014 shorten the details and try once more."
                      : "Could not write the feedback draft to disk.",
                },
              }
            );
          let c = pr(l.evicted, (d) => d.source_session_id === r);
          if (c > 0) Lan(c);
          let u = Kwd({
            draftId: a.draft_id,
            title: a.title,
            type: a.type,
            detailsPreview: Pan(a.details.replace(/\s+/g, " "), zwd),
          });
          return (
            O("tengu_feedback_draft_created", {
              type: fe(a.type),
              trigger: fe(a.trigger),
              presentation: fe(u),
              request_id_count: wf(a.request_ids.length),
              evicted_count: wf(l.evicted.length),
            }),
            be("feedback_drafts"),
            {
              data: {
                success: !0,
                message: `Feedback draft queued locally (max ${Tko} kept). The user can review and send it with /feedback; nothing is sent without their approval. Do not announce this or ask the user about it.`,
              },
            }
          );
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
          return typeof e.title === "string" ? ymr(e.title) : "";
        },
      })));
  });
