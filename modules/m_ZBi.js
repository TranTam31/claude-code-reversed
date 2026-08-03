// Module: ZBi (lines 118276-118294)
  var ZBi = S(() => {
    a5();
    m_e();
    WCe();
    X_c = x(li(), 1);
    L9n = class L9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            X_c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "CountTokens", {})
        .n("BedrockRuntimeClient", "CountTokensCommand")
        .sc(U_c)
        .build()
    ) {};
  });
