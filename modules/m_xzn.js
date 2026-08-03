// Module: xzn (lines 111396-111415)
  var xzn = S(() => {
    ha();
    Wa();
    el();
    Bpc = x(li(), 1);
    BXt = class BXt extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Bpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "ListCustomModelDeployments", {})
        .n("BedrockClient", "ListCustomModelDeploymentsCommand")
        .sc(tdc)
        .build()
    ) {};
  });
