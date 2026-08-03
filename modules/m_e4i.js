// Module: e4i (lines 118296-118314)
  var e4i = S(() => {
    a5();
    m_e();
    WCe();
    J_c = x(li(), 1);
    O9n = class O9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            J_c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "GetAsyncInvoke", {})
        .n("BedrockRuntimeClient", "GetAsyncInvokeCommand")
        .sc(B_c)
        .build()
    ) {};
  });
