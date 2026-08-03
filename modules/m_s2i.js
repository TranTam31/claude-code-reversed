// Module: S2i (lines 111032-111051)
  var S2i = S(() => {
    ha();
    Wa();
    el();
    Tpc = x(li(), 1);
    dzn = class dzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Tpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "GetGuardrail", {})
        .n("BedrockClient", "GetGuardrailCommand")
        .sc(Fuc)
        .build()
    ) {};
  });
