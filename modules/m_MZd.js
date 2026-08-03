// Module: MZd (lines 592285-592360)
  var MZd = S(() => {
    zd();
    hn();
    gRt();
    Vf();
    Ir();
    Un();
    ((tM_ = {
      type: "local-jsx",
      name: "focus",
      description: "Toggle focus view: just your prompt, summary, and response",
      immediate: !0,
      requires: { ink: !0 },
      load: () =>
        Promise.resolve({
          async call(e, t) {
            if (!ds()) {
              if (eo().viewMode === "focus")
                return (
                  e(
                    `Focus view is set by "viewMode": "focus" in settings.json \u2014 remove it there and restart Claude Code to turn it off. ${"Focus view needs the fullscreen renderer. Run /tui fullscreen to switch (this restarts and resumes your session), or set CLAUDE_CODE_NO_FLICKER=1 and restart."}`,
                    { display: "system" },
                  ),
                  null
                );
              if (t.getAppState().briefTranscript || xt().briefTranscript) {
                if (
                  (t.onQueryEvent?.({
                    type: "apply_flag_settings",
                    settings: { briefTranscript: !1 },
                  }),
                  xt().briefTranscript)
                )
                  await hr((a) => ({ ...a, briefTranscript: !1 }));
                W8r();
                let s = PZd(!1);
                return (
                  e(
                    `Focus view disabled.${s ?? ""} Focus view needs the fullscreen renderer. Run /tui fullscreen to switch (this restarts and resumes your session), or set CLAUDE_CODE_NO_FLICKER=1 and restart.`,
                    { display: "system" },
                  ),
                  null
                );
              }
              return (
                e(
                  "Focus view needs the fullscreen renderer. Run /tui fullscreen to switch (this restarts and resumes your session), or set CLAUDE_CODE_NO_FLICKER=1 and restart.",
                  { display: "system" },
                ),
                null
              );
            }
            let n = !t.getAppState().briefTranscript;
            if (
              (t.onQueryEvent?.({
                type: "apply_flag_settings",
                settings: { briefTranscript: n },
              }),
              xt().briefTranscript !== n)
            )
              await hr((s) => ({ ...s, briefTranscript: n }));
            W8r();
            let o = eo().viewMode,
              i = PZd(o ? o === "focus" : n);
            return (
              e(
                `${n ? "Focus view enabled" : "Focus view disabled"}${i ?? ""}`,
                { display: "system" },
              ),
              null
            );
          },
        }),
    }),
      (zVs = tM_));
  });
