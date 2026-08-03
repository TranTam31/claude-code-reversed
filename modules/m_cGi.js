// Module: cGi (lines 138185-138203)
  var cGi = S(() => {
    IT();
    TD();
    $M();
    XNc = x(li(), 1);
    lGi = class lGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            XNc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "DescribeIdentityPool", {})
        .n("CognitoIdentityClient", "DescribeIdentityPoolCommand")
        .sc(xNc)
        .build()
    ) {};
  });
