// Module: OUi (lines 110140-110163)
  var OUi = S(() => {
    ha();
    Wa();
    el();
    Bdc = x(li(), 1);
    x8n = class x8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Bdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "CreateFoundationModelAgreement",
          {},
        )
        .n("BedrockClient", "CreateFoundationModelAgreementCommand")
        .sc(tuc)
        .build()
    ) {};
  });
