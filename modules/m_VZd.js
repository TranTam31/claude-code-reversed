// Module: VZd (lines 592457-592481)
  var VZd = S(() => {
    pt();
    Lk();
    Eo();
    _Vs();
    ((aM_ = {
      type: "local-jsx",
      name: "remote-control",
      aliases: ["rc"],
      get description() {
        return $x()
          ? "Disconnect Remote Control"
          : "Control this session from your phone or claude.ai/code";
      },
      get argumentHint() {
        return $x() ? void 0 : "[name]";
      },
      isEnabled: sM_,
      get isHidden() {
        return !bH();
      },
      immediate: !0,
    }),
      (lM_ = aM_));
  });
