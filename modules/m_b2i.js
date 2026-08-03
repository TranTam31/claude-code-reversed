// Module: B2i (lines 111886-111905)
  var B2i = S(() => {
    ha();
    Wa();
    el();
    cfc = x(li(), 1);
    Yzn = class Yzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            cfc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "StopModelCustomizationJob", {})
        .n("BedrockClient", "StopModelCustomizationJobCommand")
        .sc(Adc)
        .build()
    ) {};
  });
