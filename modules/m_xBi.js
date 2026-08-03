// Module: XBi (lines 118214-118232)
  var XBi = S(() => {
    a5();
    m_e();
    WCe();
    z_c = x(li(), 1);
    D9n = class D9n extends (
      RM.classBuilder()
        .ep(RB)
        .m(function (e, t, r, n) {
          return [
            z_c.getEndpointPlugin(r, e.getEndpointParameterInstructions()),
          ];
        })
        .s("AmazonBedrockFrontendService", "ApplyGuardrail", {})
        .n("BedrockRuntimeClient", "ApplyGuardrailCommand")
        .sc(N_c)
        .build()
    ) {};
  });
