// Module: _ep (lines 593525-593545)
  var _ep = S(() => {
    ku();
    ((QM_ = {
      type: "local-jsx",
      name: "stop",
      description:
        "Stop this background session; transcript and worktree are kept",
      immediate: !0,
      isEnabled: rs,
    }),
      (ZM_ = {
        type: "local",
        name: "stop",
        supportsNonInteractive: !0,
        description:
          "Stop this background session; transcript and worktree are kept",
        isEnabled: rs,
        load: () => Promise.resolve().then(() => (gep(), hep)),
      }),
      (eL_ = QM_));
  });
