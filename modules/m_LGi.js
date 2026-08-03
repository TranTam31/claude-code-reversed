// Module: LGi (lines 138489-138507)
  var LGi = S(() => {
    IT();
    TD();
    $M();
    d$c = x(li(), 1);
    MGi = class MGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            d$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {})
        .n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand")
        .sc(jNc)
        .build()
    ) {};
  });
