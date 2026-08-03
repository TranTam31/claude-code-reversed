// Module: XUi (lines 110465-110484)
  var XUi = S(() => {
    ha();
    Wa();
    el();
    tpc = x(li(), 1);
    B8n = class B8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            tpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "DeleteCustomModel", {})
        .n("BedrockClient", "DeleteCustomModelCommand")
        .sc(huc)
        .build()
    ) {};
  });
