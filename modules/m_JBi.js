// Module: JBi (lines 118234-118252)
  var JBi = S(() => {
    a5();
    m_e();
    WCe();
    K_c = x(li(), 1);
    P9n = class P9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            K_c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "Converse", {})
        .n("BedrockRuntimeClient", "ConverseCommand")
        .sc($_c)
        .build()
    ) {};
  });
