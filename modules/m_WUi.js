// Module: WUi (lines 110299-110318)
  var WUi = S(() => {
    ha();
    Wa();
    el();
    Kdc = x(li(), 1);
    M8n = class M8n extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Kdc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockControlPlaneService", "CreateModelImportJob", {})
        .n("BedrockClient", "CreateModelImportJobCommand")
        .sc(luc)
        .build()
    ) {};
  });
