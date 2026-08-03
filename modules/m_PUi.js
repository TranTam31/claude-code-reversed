// Module: PUi (lines 110073-110092)
  var PUi = S(() => {
    ha();
    Wa();
    el();
    $dc = x(li(), 1);
    w8n = class w8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            $dc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "CreateCustomModel", {})
        .n("BedrockClient", "CreateCustomModelCommand")
        .sc(Qcc)
        .build()
    ) {};
  });
