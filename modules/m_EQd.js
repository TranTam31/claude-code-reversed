// Module: EQd (lines 590395-590411)
  var EQd = S(() => {
    CEe();
    hVs = {
      type: "local-jsx",
      name: "advisor",
      description: "Let Claude consult a stronger model at key moments",
      requires: { ink: !0 },
      thinClientDispatch: "control-request",
      get argumentHint() {
        return `[${[...IOt(), "off"].join("|")}]`;
      },
      isEnabled: () => H7(),
      get isHidden() {
        return !H7();
      },
    };
  });
