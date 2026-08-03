// Module: dv (lines 67763-67828)
  var dv = S(() => {
    Vn();
    zl();
    jA();
    ((c5l = Se(() => tc.preprocess(_D, tc.enum(t5)))),
      (o3r = Se(() => tc.preprocess(_D, tc.enum(Qye)))),
      (a5l = {
        plan: 0,
        bubble: 1,
        default: 1,
        dontAsk: 1,
        acceptEdits: 2,
        auto: 3,
        bypassPermissions: 4,
      }));
    l5l = {
      default: {
        title: "Manual",
        shortTitle: "Manual",
        indicator: "manual mode",
        symbol: Q4r,
        color: "inactive",
        external: "default",
      },
      plan: {
        title: "Plan",
        shortTitle: "Plan",
        indicator: "plan mode",
        symbol: Q4r,
        color: "planMode",
        external: "plan",
      },
      acceptEdits: {
        title: "Accept edits",
        shortTitle: "Accept",
        indicator: "accept edits",
        symbol: "\u23F5\u23F5",
        color: "autoAccept",
        external: "acceptEdits",
      },
      bypassPermissions: {
        title: "Bypass Permissions",
        shortTitle: "Bypass",
        indicator: "bypass permissions",
        symbol: "\u23F5\u23F5",
        color: "error",
        external: "bypassPermissions",
      },
      dontAsk: {
        title: "Don't Ask",
        shortTitle: "DontAsk",
        indicator: "don't ask",
        symbol: "\u23F5\u23F5",
        color: "error",
        external: "dontAsk",
      },
      auto: {
        title: "Auto",
        shortTitle: "Auto",
        indicator: "auto mode",
        symbol: "\u23F5\u23F5",
        color: "warning",
        external: "auto",
      },
    };
  });
