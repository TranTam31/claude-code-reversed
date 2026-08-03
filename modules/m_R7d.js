// Module: R7d (lines 585935-585953)
  var R7d = S(() => {
    pt();
    f8e();
    Ar();
    Vf();
    ((aR_ = {
      type: "local-jsx",
      name: "scroll-speed",
      description: "Adjust mouse wheel scroll speed",
      isEnabled: () => {
        if (!ds()) return !1;
        let e = AS();
        return !(e
          ? oCe.includes(e.terminal ?? "")
          : MU.isJetBrainsIdeTerminal());
      },
    }),
      (I7d = aR_));
  });
