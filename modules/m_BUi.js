// Module: BUi (lines 110253-110272)
  var BUi = S(() => {
    ha();
    Wa();
    el();
    qdc = x(li(), 1);
    D8n = class D8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            qdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "CreateModelCopyJob", {})
        .n("BedrockClient", "CreateModelCopyJobCommand")
        .sc(suc)
        .build()
    ) {};
  });
