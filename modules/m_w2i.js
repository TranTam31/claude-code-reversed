// Module: W2i (lines 111928-111947)
  var W2i = S(() => {
    ha();
    Wa();
    el();
    dfc = x(li(), 1);
    Jzn = class Jzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            dfc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "TagResource", {})
        .n("BedrockClient", "TagResourceCommand")
        .sc(Tdc)
        .build()
    ) {};
  });
