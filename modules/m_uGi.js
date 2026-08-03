// Module: uGi (lines 138205-138223)
  var uGi = S(() => {
    IT();
    TD();
    $M();
    JNc = x(li(), 1);
    c5r = class c5r extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            JNc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {})
        .n("CognitoIdentityClient", "GetCredentialsForIdentityCommand")
        .sc(HNc)
        .build()
    ) {};
  });
