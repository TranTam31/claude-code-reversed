// Module: RZd (lines 592222-592255)
  var RZd = S(() => {
    pt();
    Wf();
    tUo();
    si();
    ((ZP_ = {
      type: "local-jsx",
      name: "effort",
      description: "Set effort level for model usage",
      get argumentHint() {
        return IZd("[", "]");
      },
      get immediate() {
        return c_r();
      },
      requires: { ink: !0 },
      thinClientDispatch: "control-request",
    }),
      (GVs = {
        type: "local",
        name: "effort",
        supportsNonInteractive: !0,
        description: "Set effort level for model usage",
        get argumentHint() {
          return IZd("<", ">");
        },
        isEnabled: () => yn(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (kZd(), HZd)),
      }),
      (VVs = ZP_));
  });
