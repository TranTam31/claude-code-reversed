// Module: IUi (lines 109998-110021)
  var IUi = S(() => {
    ha();
    Wa();
    el();
    Ldc = x(li(), 1);
    E8n = class E8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Ldc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "CreateAutomatedReasoningPolicy",
          {},
        )
        .n("BedrockClient", "CreateAutomatedReasoningPolicyCommand")
        .sc(Ycc)
        .build()
    ) {};
  });
