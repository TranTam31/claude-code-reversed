// Module: nXn (lines 135156-135174)
  var nXn = S(() => {
    bj();
    Ede();
    R_e();
    XMc = x(li(), 1);
    dQt = class dQt extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            XMc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
        .n("STSClient", "AssumeRoleWithWebIdentityCommand")
        .sc(FMc)
        .build()
    ) {};
  });
