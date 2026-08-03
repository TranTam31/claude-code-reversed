// Module: hGi (lines 138265-138283)
  var hGi = S(() => {
    IT();
    TD();
    $M();
    e$c = x(li(), 1);
    mGi = class mGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            e$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "GetOpenIdToken", {})
        .n("CognitoIdentityClient", "GetOpenIdTokenCommand")
        .sc(RNc)
        .build()
    ) {};
  });
