// Module: D2i (lines 111459-111482)
  var D2i = S(() => {
    ha();
    Wa();
    el();
    Gpc = x(li(), 1);
    Izn = class Izn extends (
      io
        .classBuilder()
        .ep(ao)
        .m(function (e, t, r, n) {
          return [
            Gpc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s(
          "AmazonBedrockControlPlaneService",
          "ListFoundationModelAgreementOffers",
          {},
        )
        .n("BedrockClient", "ListFoundationModelAgreementOffersCommand")
        .sc(odc)
        .build()
    ) {};
  });
