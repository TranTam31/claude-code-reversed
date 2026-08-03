// Module: VUi (lines 110341-110360)
  var VUi = S(() => {
    ha();
    Wa();
    el();
    Xdc = x(li(), 1);
    O8n = class O8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Xdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "CreatePromptRouter", {})
        .n("BedrockClient", "CreatePromptRouterCommand")
        .sc(uuc)
        .build()
    ) {};
  });
