// Module: SQd (lines 590382-590393)
  var SQd = S(() => {
    Zr();
    ((vP_ = {
      type: "local",
      name: "radio",
      description: "Listen to Claude FM lo-fi radio",
      isEnabled: () => Ke("tengu_velvet_static", !1),
      supportsNonInteractive: !1,
      load: () => Promise.resolve().then(() => (_Qd(), yQd)),
    }),
      (bQd = vP_));
  });
