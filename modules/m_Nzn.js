// Module: Nzn (lines 111614-111633)
  var Nzn = S(() => {
    ha();
    Wa();
    el();
    Jpc = x(li(), 1);
    YXt = class YXt extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Jpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "ListModelCustomizationJobs", {})
        .n("BedrockClient", "ListModelCustomizationJobsCommand")
        .sc(ddc)
        .build()
    ) {};
  });
