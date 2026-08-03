// Module: DUi (lines 110048-110071)
  var DUi = S(() => {
    ha();
    Wa();
    el();
    Ndc = x(li(), 1);
    A8n = class A8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Ndc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "CreateAutomatedReasoningPolicyVersion",
          {},
        )
        .n("BedrockClient", "CreateAutomatedReasoningPolicyVersionCommand")
        .sc(Jcc)
        .build()
    ) {};
  });
