// Module: N2i (lines 111790-111813)
  var N2i = S(() => {
    ha();
    Wa();
    el();
    ifc = x(li(), 1);
    Vzn = class Vzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            ifc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "RegisterMarketplaceModelEndpoint",
          {},
        )
        .n("BedrockClient", "RegisterMarketplaceModelEndpointCommand")
        .sc(bdc)
        .build()
    ) {};
  });
