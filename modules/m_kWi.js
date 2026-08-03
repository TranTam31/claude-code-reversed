// Module: kWi (lines 135136-135154)
  var kWi = S(() => {
    bj();
    Ede();
    R_e();
    YMc = x(li(), 1);
    rXn = class rXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            YMc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {})
        .n("STSClient", "AssumeRoleWithSAMLCommand")
        .sc($Mc)
        .build()
    ) {};
  });
