// Module: AGi (lines 138369-138387)
  var AGi = S(() => {
    IT();
    TD();
    $M();
    i$c = x(li(), 1);
    vGi = class vGi extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            i$c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "ListTagsForResource", {})
        .n("CognitoIdentityClient", "ListTagsForResourceCommand")
        .sc(ONc)
        .build()
    ) {};
  });
