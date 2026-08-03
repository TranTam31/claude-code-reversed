// Module: A2i (lines 111095-111118)
  var A2i = S(() => {
    ha();
    Wa();
    el();
    Hpc = x(li(), 1);
    mzn = class mzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Hpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "GetMarketplaceModelEndpoint",
          {},
        )
        .n("BedrockClient", "GetMarketplaceModelEndpointCommand")
        .sc(juc)
        .build()
    ) {};
  });
