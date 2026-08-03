// Module: X2i (lines 112091-112114)
  var X2i = S(() => {
    ha();
    Wa();
    el();
    _fc = x(li(), 1);
    o9n = class o9n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            _fc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "UpdateProvisionedModelThroughput",
          {},
        )
        .n("BedrockClient", "UpdateProvisionedModelThroughputCommand")
        .sc(Ddc)
        .build()
    ) {};
  });
