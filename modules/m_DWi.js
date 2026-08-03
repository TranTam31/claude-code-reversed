// Module: DWi (lines 135216-135234)
  var DWi = S(() => {
    bj();
    Ede();
    R_e();
    ZMc = x(li(), 1);
    sXn = class sXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            ZMc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {})
        .n("STSClient", "GetAccessKeyInfoCommand")
        .sc(jMc)
        .build()
    ) {};
  });
