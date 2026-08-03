// Module: o4i (lines 118406-118424)
  var o4i = S(() => {
    a5();
    m_e();
    WCe();
    rbc = x(li(), 1);
    B9n = class B9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            rbc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "StartAsyncInvoke", {})
        .n("BedrockRuntimeClient", "StartAsyncInvokeCommand")
        .sc(q_c)
        .build()
    ) {};
  });
