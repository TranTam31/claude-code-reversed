// Module: YXd (lines 588642-588658)
  var YXd = S(() => {
    GUt();
    Q5s = {
      type: "local-jsx",
      name: "passes",
      get description() {
        if (WUt())
          return "Share a free week of Claude Code with friends and earn usage credits";
        return "Share a free week of Claude Code with friends";
      },
      get isHidden() {
        let { eligible: e, hasCache: t } = d_r();
        return !e || !t;
      },
      requires: { ink: !0 },
    };
  });
