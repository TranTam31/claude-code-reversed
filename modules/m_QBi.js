// Module: QBi (lines 118254-118274)
  var QBi = S(() => {
    a5();
    m_e();
    WCe();
    Y_c = x(li(), 1);
    M9n = class M9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            Y_c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "ConverseStream", {
          eventStream: { output: !0 },
        })
        .n("BedrockRuntimeClient", "ConverseStreamCommand")
        .sc(F_c)
        .build()
    ) {};
  });
