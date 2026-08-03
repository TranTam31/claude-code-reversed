// Module: WZd (lines 592381-592438)
  var WZd = S(() => {
    Vn();
    pt();
    Zr();
    vt();
    A5();
    pte();
    ((rM_ = Se(() => v.object({ enable_slash_command: v.boolean() }))),
      (BZd = { enable_slash_command: !1 }));
    ((oM_ = {
      type: "local-jsx",
      name: "brief",
      description: "Toggle brief-only mode",
      isEnabled: () => nM_().enable_slash_command,
      immediate: !0,
      load: () =>
        Promise.resolve({
          async call(e, t) {
            let n = !t.getAppState().isBriefOnly;
            if (n && !Lon())
              return (
                O("tengu_brief_mode_toggled", {
                  enabled: !1,
                  gated: !0,
                  source: Ee("slash_command"),
                }),
                e("Brief tool is not enabled for your account", {
                  display: "system",
                }),
                null
              );
            (UGe(n),
              t.onQueryEvent?.({
                type: "apply_flag_settings",
                settings: { isBriefOnly: n },
              }),
              O("tengu_brief_mode_toggled", {
                enabled: n,
                gated: !1,
                source: Ee("slash_command"),
              }));
            let o = [
              `<system-reminder>
${n ? `Brief mode is now enabled. Use the ${wU} tool for all user-facing output \u2014 plain text outside it is hidden from the user's view.` : `Brief mode is now disabled. The ${wU} tool is no longer available \u2014 reply with plain text.`}
</system-reminder>`,
            ];
            return (
              e(n ? "Brief-only mode enabled" : "Brief-only mode disabled", {
                display: "system",
                metaMessages: o,
              }),
              null
            );
          },
        }),
    }),
      (iM_ = oM_));
  });
