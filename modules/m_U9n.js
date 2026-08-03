// Module: U9n (lines 118386-118404)
  var U9n = S(() => {
    a5();
    m_e();
    WCe();
    tbc = x(li(), 1);
    lJt = class lJt extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            tbc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "ListAsyncInvokes", {})
        .n("BedrockRuntimeClient", "ListAsyncInvokesCommand")
        .sc(V_c)
        .build()
    ) {};
  });
