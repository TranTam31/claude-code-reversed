// Module: tep (lines 592993-593016)
  var tep = S(() => {
    pt();
    ((bM_ = {
      type: "local-jsx",
      name: "goal",
      description: "Set a goal Claude checks before stopping",
      argumentHint: "[<condition> | clear]",
      immediate: !0,
    }),
      (SM_ = {
        type: "local",
        name: "goal",
        supportsNonInteractive: !0,
        thinClientDispatch: "post-text",
        description:
          "Set a goal \u2014 keep working until the condition is met",
        get isHidden() {
          return !yn();
        },
        isEnabled: () => yn() || ba(),
        load: () => Promise.resolve().then(() => (ZZd(), QZd)),
      }),
      (EM_ = bM_));
  });
