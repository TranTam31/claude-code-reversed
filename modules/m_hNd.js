// Module: hNd (lines 525909-525927)
  var hNd = S(() => {
    pt();
    Vu();
    Eo();
    ((ja_ = {
      type: "local-jsx",
      name: "autofix-pr",
      description: "Monitor and autofix any issues with the current PR",
      argumentHint: void 0,
      isEnabled: () => fNd() && !yn(),
      get isHidden() {
        return !fNd();
      },
      userFacingName() {
        return "autofix-pr";
      },
    }),
      (mNd = ja_));
  });
