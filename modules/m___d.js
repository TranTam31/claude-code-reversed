// Module: $$d (lines 530798-530821)
  var $$d = S(() => {
    pt();
    ((gBs = {
      name: "context",
      description: "Visualize current context usage as a colored grid",
      argumentHint: "[all]",
      isEnabled: () => !yn(),
      type: "local-jsx",
      thinClientDispatch: "control-request",
    }),
      (yBs = {
        type: "local",
        name: "context",
        supportsNonInteractive: !0,
        description: "Show current context usage",
        get isHidden() {
          return !yn();
        },
        isEnabled() {
          return yn();
        },
        load: () => Promise.resolve().then(() => (eun(), hBs)),
      }));
  });
