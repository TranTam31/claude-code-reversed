// Module: qNd (lines 527300-527325)
  var qNd = S(() => {
    pt();
    GU();
    ((_l_ = {
      type: "local-jsx",
      name: "color",
      description: "Set the prompt bar color for this session",
      immediate: !0,
      argumentHint: `[${[...Ow, "default"].join("|")}]`,
      requires: { ink: !0 },
      load: () => Promise.resolve().then(() => (j2s(), WNd)),
    }),
      (W2s = {
        type: "local",
        name: "color",
        supportsNonInteractive: !0,
        description: "Set the prompt bar color for this session",
        argumentHint: `[${[...Ow, "default"].join("|")}]`,
        isEnabled: () => yn(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (VNd(), GNd)),
      }),
      (G2s = _l_));
  });
