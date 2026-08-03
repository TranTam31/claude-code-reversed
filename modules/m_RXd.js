// Module: RXd (lines 587838-587862)
  var RXd = S(() => {
    pt();
    ((U5s = {
      type: "local-jsx",
      name: "usage",
      aliases: ["cost", "stats"],
      description: "Show session cost, plan usage, and activity stats",
      thinClientDispatch: "control-request",
      immediate: !0,
      requires: { ink: !0 },
    }),
      (B5s = {
        type: "local",
        name: "usage",
        aliases: ["cost", "stats"],
        supportsNonInteractive: !0,
        description:
          "Show session cost, plan usage, and what's contributing to your limits",
        isEnabled: () => yn(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (IXd(), kXd)),
      }));
  });
