// Module: kzn (lines 111438-111457)
  var kzn = S(() => {
    ha();
    Wa();
    el();
    Wpc = x(li(), 1);
    WXt = class WXt extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Wpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "ListEvaluationJobs", {})
        .n("BedrockClient", "ListEvaluationJobsCommand")
        .sc(ndc)
        .build()
    ) {};
  });
