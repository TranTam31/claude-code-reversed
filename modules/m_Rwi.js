// Module: RWi (lines 135196-135214)
  var RWi = S(() => {
    bj();
    Ede();
    R_e();
    QMc = x(li(), 1);
    iXn = class iXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            QMc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {})
        .n("STSClient", "DecodeAuthorizationMessageCommand")
        .sc(BMc)
        .build()
    ) {};
  });
