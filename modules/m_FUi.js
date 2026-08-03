// Module: FUi (lines 110207-110226)
  var FUi = S(() => {
    ha();
    Wa();
    el();
    Gdc = x(li(), 1);
    I8n = class I8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Gdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "CreateInferenceProfile", {})
        .n("BedrockClient", "CreateInferenceProfileCommand")
        .sc(ouc)
        .build()
    ) {};
  });
