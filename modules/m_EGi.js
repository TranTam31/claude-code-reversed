// Module: EGi (lines 138329-138347)
  var EGi = S(() => {
    IT();
    TD();
    $M();
    n$c = x(li(), 1);
    SGi = class SGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            n$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "ListIdentities", {})
        .n("CognitoIdentityClient", "ListIdentitiesCommand")
        .sc(MNc)
        .build()
    ) {};
  });
