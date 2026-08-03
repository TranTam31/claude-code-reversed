// Module: s7d (lines 584578-584604)
  var s7d = S(() => {
    pt();
    ((JI_ = {
      type: "local-jsx",
      name: "rename",
      aliases: ["name"],
      description: "Rename the current conversation",
      immediate: !0,
      argumentHint: "[name]",
      requires: { ink: !0 },
      load: () => Promise.resolve().then(() => (NFo(), n7d)),
    }),
      (x5s = {
        type: "local",
        name: "rename",
        aliases: ["name"],
        supportsNonInteractive: !0,
        description: "Rename the current conversation",
        argumentHint: "[name]",
        isEnabled: () => yn(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (i7d(), o7d)),
      }),
      (H5s = JI_));
  });
