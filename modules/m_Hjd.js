// Module: HJd (lines 589506-589519)
  var HJd = S(() => {
    ((YD_ = {
      type: "local-jsx",
      name: "plugin",
      aliases: ["plugins", "marketplace"],
      description: "Manage Claude Code plugins",
      immediate: !0,
      getArgumentCompletions: (e, t) =>
        Promise.resolve()
          .then(() => (CJd(), TJd))
          .then((r) => r.getPluginArgumentCompletions(e, t)),
    }),
      (xJd = YD_));
  });
