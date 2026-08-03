// Module: Lzn (lines 111568-111591)
  var Lzn = S(() => {
    ha();
    Wa();
    el();
    Ypc = x(li(), 1);
    zXt = class zXt extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Ypc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "ListMarketplaceModelEndpoints",
          {},
        )
        .n("BedrockClient", "ListMarketplaceModelEndpointsCommand")
        .sc(cdc)
        .build()
    ) {};
  });
