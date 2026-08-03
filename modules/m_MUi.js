// Module: MUi (lines 110094-110117)
  var MUi = S(() => {
    ha();
    Wa();
    el();
    Fdc = x(li(), 1);
    T8n = class T8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Fdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "CreateCustomModelDeployment",
          {},
        )
        .n("BedrockClient", "CreateCustomModelDeploymentCommand")
        .sc(Zcc)
        .build()
    ) {};
  });
