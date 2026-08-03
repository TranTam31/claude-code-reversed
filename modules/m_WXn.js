// Module: WXn (lines 138349-138367)
  var WXn = S(() => {
    IT();
    TD();
    $M();
    o$c = x(li(), 1);
    d5r = class d5r extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            o$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "ListIdentityPools", {})
        .n("CognitoIdentityClient", "ListIdentityPoolsCommand")
        .sc(LNc)
        .build()
    ) {};
  });
