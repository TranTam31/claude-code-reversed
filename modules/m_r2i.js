// Module: R2i (lines 111275-111294)
  var R2i = S(() => {
    ha();
    Wa();
    el();
    Opc = x(li(), 1);
    vzn = class vzn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Opc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "GetUseCaseForModelAccess", {})
        .n("BedrockClient", "GetUseCaseForModelAccessCommand")
        .sc(Xuc)
        .build()
    ) {};
  });
