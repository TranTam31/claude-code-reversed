// Module: P$d (lines 530548-530575)
  var P$d = S(() => {
    pt();
    ((rc_ = {
      aliases: ["settings"],
      type: "local-jsx",
      name: "config",
      description: "Open settings",
      argumentHint: "[key=value]",
      getArgumentCompletions: (e, t) =>
        Promise.resolve()
          .then(() => (rMo(), k$d))
          .then((r) => r.getConfigArgumentCompletions(e, t)),
    }),
      (pBs = {
        type: "local",
        name: "config",
        aliases: ["settings"],
        supportsNonInteractive: !0,
        description: "Set a setting by key",
        argumentHint: "key=value",
        isEnabled: () => yn(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (R$d(), I$d)),
      }),
      (D$d = rc_));
  });
