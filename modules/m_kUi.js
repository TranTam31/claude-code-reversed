// Module: KUi (lines 110415-110438)
  var KUi = S(() => {
    ha();
    Wa();
    el();
    Zdc = x(li(), 1);
    F8n = class F8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Zdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "DeleteAutomatedReasoningPolicy",
          {},
        )
        .n("BedrockClient", "DeleteAutomatedReasoningPolicyCommand")
        .sc(puc)
        .build()
    ) {};
  });
