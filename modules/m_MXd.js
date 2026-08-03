// Module: MXd (lines 588203-588224)
  var MXd = S(() => {
    pt();
    ((G5s = {
      type: "local-jsx",
      name: "skill-doctor",
      description: "Show which loaded skills are unused and costing context",
      immediate: !0,
      thinClientDispatch: "twin",
    }),
      (eUo = {
        type: "local",
        name: "skill-doctor",
        description: "Show which loaded skills are unused and costing context",
        supportsNonInteractive: !0,
        thinClientDispatch: "post-text",
        isEnabled: () => yn(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (W5s(), PXd)),
      }));
  });
