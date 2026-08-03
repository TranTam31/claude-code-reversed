// Module: G$d (lines 530871-530889)
  var G$d = S(() => {
    pt();
    DS();
    ((ac_ = {
      type: "local",
      name: "pause-memory",
      aliases: ["memory-pause", "toggle-memory"],
      description: "Pause automemory for this session",
      isEnabled: () => !1,
      isHidden: !1,
      supportsNonInteractive: !0,
      thinClientDispatch: "post-text",
      load: () => Promise.resolve().then(() => (W$d(), j$d)),
      userFacingName() {
        return "pause-memory";
      },
    }),
      (bBs = ac_));
  });
