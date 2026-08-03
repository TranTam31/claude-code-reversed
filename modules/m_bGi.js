// Module: BGi (lines 138549-138567)
  var BGi = S(() => {
    IT();
    TD();
    $M();
    m$c = x(li(), 1);
    UGi = class UGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            m$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "UpdateIdentityPool", {})
        .n("CognitoIdentityClient", "UpdateIdentityPoolCommand")
        .sc(VNc)
        .build()
    ) {};
  });
