// Module: r4i (lines 118336-118362)
  var r4i = S(() => {
    tBi();
    vBi();
    a5();
    m_e();
    WCe();
    Z_c = x(li(), 1);
    $9n = class $9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            Z_c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
            fmc(r),
            Jmc(r, { headerPrefix: "x-amz-bedrock-" }),
          ];
        })
        .s(
          "AmazonBedrockFrontendService",
          "InvokeModelWithBidirectionalStream",
          { eventStream: { input: !0, output: !0 } },
        )
        .n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand")
        .sc(W_c)
        .build()
    ) {};
  });
