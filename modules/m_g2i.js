// Module: G2i (lines 111949-111968)
  var G2i = S(() => {
    ha();
    Wa();
    el();
    pfc = x(li(), 1);
    Qzn = class Qzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            pfc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "UntagResource", {})
        .n("BedrockClient", "UntagResourceCommand")
        .sc(Cdc)
        .build()
    ) {};
  });
