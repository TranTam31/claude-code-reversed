// Module: LUi (lines 110119-110138)
  var LUi = S(() => {
    ha();
    Wa();
    el();
    Udc = x(li(), 1);
    C8n = class C8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Udc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "CreateEvaluationJob", {})
        .n("BedrockClient", "CreateEvaluationJobCommand")
        .sc(euc)
        .build()
    ) {};
  });
