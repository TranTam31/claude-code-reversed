// Module: U2i (lines 111865-111884)
  var U2i = S(() => {
    ha();
    Wa();
    el();
    lfc = x(li(), 1);
    Kzn = class Kzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            lfc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "StopEvaluationJob", {})
        .n("BedrockClient", "StopEvaluationJobCommand")
        .sc(vdc)
        .build()
    ) {};
  });
