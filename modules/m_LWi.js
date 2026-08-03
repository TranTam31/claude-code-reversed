// Module: LWi (lines 135276-135294)
  var LWi = S(() => {
    bj();
    Ede();
    R_e();
    rLc = x(li(), 1);
    cXn = class cXn extends (
      FI.classBuilder()
        .ep(n$)
        .m(function (e, t, r, n) {
          return [
            rLc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {})
        .n("STSClient", "GetFederationTokenCommand")
        .sc(VMc)
        .build()
    ) {};
  });
