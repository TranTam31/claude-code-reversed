// Module: JZd (lines 592929-592944)
  var JZd = S(() => {
    zt();
    Zr();
    YUt();
    vo();
    ((gM_ = {
      type: "local",
      name: "recap",
      description: "Generate a one-line session recap now",
      isEnabled: () => Ke("tengu_sedge_lantern", !0),
      supportsNonInteractive: !0,
      thinClientDispatch: "post-text",
      load: () => Promise.resolve({ call: hM_ }),
    }),
      (yM_ = gM_));
  });
