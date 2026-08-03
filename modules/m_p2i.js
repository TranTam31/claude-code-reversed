// Module: P2i (lines 111484-111503)
  var P2i = S(() => {
    ha();
    Wa();
    el();
    Vpc = x(li(), 1);
    Rzn = class Rzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Vpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "ListFoundationModels", {})
        .n("BedrockClient", "ListFoundationModelsCommand")
        .sc(idc)
        .build()
    ) {};
  });
