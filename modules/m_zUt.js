// Module: zUt (lines 591866-591908)
  var zUt = S(() => {
    pt();
    T1e();
    Eo();
    Ar();
    ((Iae = {
      type: "local-jsx",
      name: "usage-credits",
      description:
        "Configure usage credits or request them from your admin when you hit a limit",
      isEnabled: () => _ht() && !yn(),
      requires: { ink: !0 },
    }),
      ($Vs = {
        type: "local",
        name: "usage-credits",
        supportsNonInteractive: !0,
        description:
          "Configure usage credits or request them from your admin when you hit a limit",
        isEnabled: () => _ht() && yn(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (NVs(), OVs)),
      }),
      (FVs = {
        type: "local-jsx",
        name: "extra-usage",
        description: "Renamed to /usage-credits",
        isHidden: !0,
        isEnabled: () => _ht() && !yn(),
        requires: { ink: !0 },
      }),
      (UVs = {
        type: "local",
        name: "extra-usage",
        supportsNonInteractive: !0,
        description: "Renamed to /usage-credits",
        isHidden: !0,
        isEnabled: () => _ht() && yn(),
        load: () => Promise.resolve().then(() => EZd),
      }));
  });
