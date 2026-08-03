// Module: UUi (lines 110228-110251)
  var UUi = S(() => {
    ha();
    Wa();
    el();
    Vdc = x(li(), 1);
    R8n = class R8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Vdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "CreateMarketplaceModelEndpoint",
          {},
        )
        .n("BedrockClient", "CreateMarketplaceModelEndpointCommand")
        .sc(iuc)
        .build()
    ) {};
  });
