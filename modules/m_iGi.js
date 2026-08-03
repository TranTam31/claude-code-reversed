// Module: iGi (lines 138145-138163)
  var iGi = S(() => {
    IT();
    TD();
    $M();
    KNc = x(li(), 1);
    oGi = class oGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            KNc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "DeleteIdentityPool", {})
        .n("CognitoIdentityClient", "DeleteIdentityPoolCommand")
        .sc(TNc)
        .build()
    ) {};
  });
