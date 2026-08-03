// Module: ZUi (lines 110536-110555)
  var ZUi = S(() => {
    ha();
    Wa();
    el();
    opc = x(li(), 1);
    G8n = class G8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            opc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "DeleteGuardrail", {})
        .n("BedrockClient", "DeleteGuardrailCommand")
        .sc(_uc)
        .build()
    ) {};
  });
