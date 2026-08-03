// Module: FGi (lines 138529-138547)
  var FGi = S(() => {
    IT();
    TD();
    $M();
    f$c = x(li(), 1);
    $Gi = class $Gi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            f$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "UntagResource", {})
        .n("CognitoIdentityClient", "UntagResourceCommand")
        .sc(GNc)
        .build()
    ) {};
  });
