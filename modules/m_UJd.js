// Module: UJd (lines 589938-589949)
  var UJd = S(() => {
    ((aP_ = {
      type: "local",
      name: "reload-skills",
      description:
        "Pick up skills added or changed on disk during this session",
      supportsNonInteractive: !0,
      thinClientDispatch: "post-text",
      load: () => Promise.resolve().then(() => (FJd(), $Jd)),
    }),
      (pUo = aP_));
  });
