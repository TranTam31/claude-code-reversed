// Module: NWi (lines 135316-135334)
  var NWi = S(() => {
    bj();
    Ede();
    R_e();
    oLc = x(li(), 1);
    dXn = class dXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            oLc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "GetWebIdentityToken", {})
        .n("STSClient", "GetWebIdentityTokenCommand")
        .sc(zMc)
        .build()
    ) {};
  });
