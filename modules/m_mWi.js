// Module: MWi (lines 135256-135274)
  var MWi = S(() => {
    bj();
    Ede();
    R_e();
    tLc = x(li(), 1);
    lXn = class lXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            tLc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "GetDelegatedAccessToken", {})
        .n("STSClient", "GetDelegatedAccessTokenCommand")
        .sc(GMc)
        .build()
    ) {};
  });
