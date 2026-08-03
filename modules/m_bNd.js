// Module: BNd (lines 527205-527218)
  var BNd = S(() => {
    ((fl_ = {
      type: "local",
      name: "clear",
      description:
        "Start a new session with empty context; previous session stays on disk (resumable with /resume)",
      argumentHint: "[name]",
      aliases: ["reset", "new"],
      supportsNonInteractive: !0,
      thinClientDispatch: "post-text",
      load: () => Promise.resolve().then(() => (UNd(), FNd)),
    }),
      (BPo = fl_));
  });
