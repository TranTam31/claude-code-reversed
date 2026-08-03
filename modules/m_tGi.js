// Module: TGi (lines 138389-138407)
  var TGi = S(() => {
    IT();
    TD();
    $M();
    s$c = x(li(), 1);
    wGi = class wGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            s$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {})
        .n("CognitoIdentityClient", "LookupDeveloperIdentityCommand")
        .sc(NNc)
        .build()
    ) {};
  });
