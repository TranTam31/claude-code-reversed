// Module: gUo (lines 590519-590543)
  var gUo = S(() => {
    ku();
    hUo = ["exit", "quit", ":q", ":q!", ":wq", ":wq!"];
    ((TP_ = {
      type: "local-jsx",
      name: "exit",
      aliases: ["quit"],
      get description() {
        return kQd();
      },
      immediate: !0,
      requires: { ink: !0 },
      fleetHostCall: async ({ exit: e }) => e(),
    }),
      (IQd = {
        type: "local",
        name: "exit",
        supportsNonInteractive: !0,
        get description() {
          return kQd();
        },
        load: () => Promise.resolve().then(() => (HQd(), xQd)),
      }),
      (SVs = TP_));
  });
