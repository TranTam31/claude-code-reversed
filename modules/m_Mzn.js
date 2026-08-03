// Module: Mzn (lines 111547-111566)
  var Mzn = S(() => {
    ha();
    Wa();
    el();
    Kpc = x(li(), 1);
    qXt = class qXt extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Kpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "ListInferenceProfiles", {})
        .n("BedrockClient", "ListInferenceProfilesCommand")
        .sc(ldc)
        .build()
    ) {};
  });
