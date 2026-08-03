// Module: GUi (lines 110320-110339)
  var GUi = S(() => {
    ha();
    Wa();
    el();
    Ydc = x(li(), 1);
    L8n = class L8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Ydc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "CreateModelInvocationJob", {})
        .n("BedrockClient", "CreateModelInvocationJobCommand")
        .sc(cuc)
        .build()
    ) {};
  });
