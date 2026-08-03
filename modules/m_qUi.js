// Module: QUi (lines 110511-110534)
  var QUi = S(() => {
    ha();
    Wa();
    el();
    npc = x(li(), 1);
    W8n = class W8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            npc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "DeleteFoundationModelAgreement",
          {},
        )
        .n("BedrockClient", "DeleteFoundationModelAgreementCommand")
        .sc(yuc)
        .build()
    ) {};
  });
