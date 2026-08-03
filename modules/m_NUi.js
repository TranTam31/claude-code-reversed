// Module: NUi (lines 110165-110184)
  var NUi = S(() => {
    ha();
    Wa();
    el();
    jdc = x(li(), 1);
    H8n = class H8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            jdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "CreateGuardrail", {})
        .n("BedrockClient", "CreateGuardrailCommand")
        .sc(ruc)
        .build()
    ) {};
  });
