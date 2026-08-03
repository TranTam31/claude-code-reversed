// Module: JUi (lines 110486-110509)
  var JUi = S(() => {
    ha();
    Wa();
    el();
    rpc = x(li(), 1);
    j8n = class j8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            rpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "DeleteCustomModelDeployment",
          {},
        )
        .n("BedrockClient", "DeleteCustomModelDeploymentCommand")
        .sc(guc)
        .build()
    ) {};
  });
