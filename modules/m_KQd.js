// Module: KQd (lines 590998-591027)
  var KQd = S(() => {
    pt();
    tUo();
    si();
    ((HVs = {
      type: "local",
      name: "model",
      supportsNonInteractive: !0,
      description: "Set the AI model for Claude Code",
      argumentHint: "<model>",
      isEnabled: () => yn(),
      get isHidden() {
        return !yn();
      },
      load: () => Promise.resolve().then(() => (zQd(), qQd)),
    }),
      (kVs = {
        type: "local-jsx",
        name: "model",
        get description() {
          return `Set the AI model for Claude Code (currently ${rm(Oi())})`;
        },
        argumentHint: "[model]",
        get immediate() {
          return c_r();
        },
        requires: { ink: !0 },
        thinClientDispatch: "control-request",
      }));
  });
