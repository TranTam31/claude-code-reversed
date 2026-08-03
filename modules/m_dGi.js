// Module: dGi (lines 138225-138243)
  var dGi = S(() => {
    IT();
    TD();
    $M();
    QNc = x(li(), 1);
    u5r = class u5r extends (
      Km.classBuilder()
        .ep(Xh)
        .m(function (e, t, r, n) {
          return [
            QNc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSCognitoIdentityService", "GetId", {})
        .n("CognitoIdentityClient", "GetIdCommand")
        .sc(kNc)
        .build()
    ) {};
  });
