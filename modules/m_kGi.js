// Module: kGi (lines 138429-138447)
  var kGi = S(() => {
    IT();
    TD();
    $M();
    l$c = x(li(), 1);
    HGi = class HGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            l$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {})
        .n("CognitoIdentityClient", "SetIdentityPoolRolesCommand")
        .sc(FNc)
        .build()
    ) {};
  });
