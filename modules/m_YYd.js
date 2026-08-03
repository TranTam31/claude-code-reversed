// Module: YYd (lines 584253-584268)
  var YYd = S(() => {
    wpn();
    ((WI_ = {
      type: "local",
      name: "voice",
      description: "Toggle voice mode",
      argumentHint: "[hold|tap|off]",
      availability: ["claude-ai"],
      get isHidden() {
        return !Zyr();
      },
      supportsNonInteractive: !1,
      load: () => Promise.resolve().then(() => (zYd(), qYd)),
    }),
      (KYd = WI_));
  });
