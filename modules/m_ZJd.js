// Module: ZJd (lines 590241-590265)
  var ZJd = S(() => {
    pt();
    ((mP_ = {
      type: "local-jsx",
      name: "version",
      description:
        "Show this session's version (autoupdate may have a newer one)",
      isEnabled: () => !1,
      immediate: !0,
      requires: { ink: !0 },
    }),
      (dVs = {
        type: "local",
        name: "version",
        description:
          "Print the version this session is running (not what autoupdate downloaded)",
        isEnabled: () => !1,
        get isHidden() {
          return !yn();
        },
        supportsNonInteractive: !0,
        load: () => Promise.resolve({ call: hP_ }),
      }),
      (pVs = mP_));
  });
