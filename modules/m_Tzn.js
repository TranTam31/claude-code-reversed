// Module: Tzn (lines 111346-111369)
  var Tzn = S(() => {
    ha();
    Wa();
    el();
    Fpc = x(li(), 1);
    FXt = class FXt extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Fpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "ListAutomatedReasoningPolicyTestCases",
          {},
        )
        .n("BedrockClient", "ListAutomatedReasoningPolicyTestCasesCommand")
        .sc(Zuc)
        .build()
    ) {};
  });
