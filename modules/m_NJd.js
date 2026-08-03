// Module: NJd (lines 589895-589906)
  var NJd = S(() => {
    ((iP_ = {
      type: "local",
      name: "reload-plugins",
      description: "Activate pending plugin changes in the current session",
      argumentHint: "[--force]",
      supportsNonInteractive: !1,
      thinClientDispatch: "control-request",
      load: () => Promise.resolve().then(() => (OJd(), LJd)),
    }),
      (dUo = iP_));
  });
