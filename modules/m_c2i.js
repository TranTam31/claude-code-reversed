// Module: C2i (lines 111162-111181)
  var C2i = S(() => {
    ha();
    Wa();
    el();
    Rpc = x(li(), 1);
    yzn = class yzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Rpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "GetModelImportJob", {})
        .n("BedrockClient", "GetModelImportJobCommand")
        .sc(Vuc)
        .build()
    ) {};
  });
