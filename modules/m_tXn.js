// Module: tXn (lines 135116-135134)
  var tXn = S(() => {
    bj();
    Ede();
    R_e();
    KMc = x(li(), 1);
    uQt = class uQt extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            KMc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
        .n("STSClient", "AssumeRoleCommand")
        .sc(NMc)
        .build()
    ) {};
  });
