// Module: j2i (lines 111907-111926)
  var j2i = S(() => {
    ha();
    Wa();
    el();
    ufc = x(li(), 1);
    Xzn = class Xzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            ufc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "StopModelInvocationJob", {})
        .n("BedrockClient", "StopModelInvocationJobCommand")
        .sc(wdc)
        .build()
    ) {};
  });
