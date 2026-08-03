// Module: n4i (lines 118364-118384)
  var n4i = S(() => {
    a5();
    m_e();
    WCe();
    ebc = x(li(), 1);
    F9n = class F9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            ebc.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
          eventStream: { output: !0 },
        })
        .n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand")
        .sc(G_c)
        .build()
    ) {};
  });
