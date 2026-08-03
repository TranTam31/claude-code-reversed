// Module: PWi (lines 135236-135254)
  var PWi = S(() => {
    bj();
    Ede();
    R_e();
    eLc = x(li(), 1);
    aXn = class aXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            eLc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {})
        .n("STSClient", "GetCallerIdentityCommand")
        .sc(WMc)
        .build()
    ) {};
  });
