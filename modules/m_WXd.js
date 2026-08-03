// Module: WXd (lines 588415-588450)
  var WXd = S(() => {
    pt();
    qA();
    tUo();
    ((CD_ = {
      type: "local-jsx",
      name: "fast",
      get description() {
        return `Toggle fast mode (${m5()})`;
      },
      get isHidden() {
        return !vl();
      },
      argumentHint: "[on|off]",
      get immediate() {
        return c_r();
      },
      requires: { ink: !0 },
      thinClientDispatch: "control-request",
    }),
      (K5s = {
        type: "local",
        name: "fast",
        supportsNonInteractive: !0,
        get description() {
          return `Toggle fast mode (${m5()})`;
        },
        argumentHint: "[on|off]",
        isEnabled: () => yn(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (jXd(), BXd)),
      }),
      (Y5s = CD_));
  });
