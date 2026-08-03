// Module: fMo (lines 532672-532698)
  var fMo = S(() => {
    pt();
    Zr();
    ((Nc_ = {
      type: "local-jsx",
      name: "import",
      description: "Import config from another AI coding agent",
      immediate: !0,
      argumentHint: "[codex|gemini] [--dry-run]",
      isEnabled: zIe,
      get isHidden() {
        return !zIe();
      },
    }),
      (_Fd = {
        type: "local",
        name: "import",
        supportsNonInteractive: !0,
        description: "Import config from another AI coding agent",
        get isHidden() {
          return !zIe() || !yn();
        },
        isEnabled: () => zIe() && yn(),
        load: () => Promise.resolve().then(() => (yFd(), gFd)),
      }),
      (bFd = Nc_));
  });
