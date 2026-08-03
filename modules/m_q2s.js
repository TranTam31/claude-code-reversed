// Module: q2s (lines 527344-527358)
  var q2s = S(() => {
    Vu();
    ((El_ = {
      type: "local-jsx",
      name: "desktop",
      aliases: ["app"],
      description: "Continue the current session in Claude Desktop",
      availability: ["claude-ai"],
      isEnabled: Xhr,
      get isHidden() {
        return !Xhr();
      },
    }),
      (KNd = El_));
  });
