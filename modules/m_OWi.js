// Module: OWi (lines 135296-135314)
  var OWi = S(() => {
    bj();
    Ede();
    R_e();
    nLc = x(li(), 1);
    uXn = class uXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            nLc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {})
        .n("STSClient", "GetSessionTokenCommand")
        .sc(qMc)
        .build()
    ) {};
  });
