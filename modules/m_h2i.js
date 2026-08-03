// Module: H2i (lines 111204-111227)
  var H2i = S(() => {
    ha();
    Wa();
    el();
    Ppc = x(li(), 1);
    bzn = class bzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Ppc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "GetModelInvocationLoggingConfiguration",
          {},
        )
        .n("BedrockClient", "GetModelInvocationLoggingConfigurationCommand")
        .sc(zuc)
        .build()
    ) {};
  });
