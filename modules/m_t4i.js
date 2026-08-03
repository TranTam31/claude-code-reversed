// Module: t4i (lines 118316-118334)
  var t4i = S(() => {
    a5();
    m_e();
    WCe();
    Q_c = x(li(), 1);
    N9n = class N9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            Q_c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "InvokeModel", {})
        .n("BedrockRuntimeClient", "InvokeModelCommand")
        .sc(j_c)
        .build()
    ) {};
  });
