// Module: IWi (lines 135176-135194)
  var IWi = S(() => {
    bj();
    Ede();
    R_e();
    JMc = x(li(), 1);
    oXn = class oXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            JMc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRoot", {})
        .n("STSClient", "AssumeRootCommand")
        .sc(UMc)
        .build()
    ) {};
  });
