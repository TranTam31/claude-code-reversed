// Module: NGi (lines 138509-138527)
  var NGi = S(() => {
    IT();
    TD();
    $M();
    p$c = x(li(), 1);
    OGi = class OGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            p$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "UnlinkIdentity", {})
        .n("CognitoIdentityClient", "UnlinkIdentityCommand")
        .sc(WNc)
        .build()
    ) {};
  });
