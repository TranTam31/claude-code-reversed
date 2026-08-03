// Module: Y2i (lines 112066-112089)
  var Y2i = S(() => {
    ha();
    Wa();
    el();
    yfc = x(li(), 1);
    n9n = class n9n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            yfc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "UpdateMarketplaceModelEndpoint",
          {},
        )
        .n("BedrockClient", "UpdateMarketplaceModelEndpointCommand")
        .sc(Rdc)
        .build()
    ) {};
  });
