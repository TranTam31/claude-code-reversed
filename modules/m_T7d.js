// Module: T7d (lines 585910-585925)
  var T7d = S(() => {
    pt();
    zd();
    ((sR_ = {
      type: "local-jsx",
      name: "session",
      aliases: ["remote"],
      description: "Show cloud session URL and QR code",
      isEnabled: () => ba(),
      get isHidden() {
        return !vB("fanout");
      },
      requires: { ink: !0 },
    }),
      (P5s = sR_));
  });
