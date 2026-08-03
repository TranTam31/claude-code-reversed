// Module: zGr (lines 134339-134394)
  var zGr = S(() => {
    bj();
    AWi();
    Ede();
    _Mc();
    kMc();
    ((X7n = x(oVe(), 1)),
      (IMc = x(iVe(), 1)),
      (RMc = x(sVe(), 1)),
      (J7n = x(p1e(), 1)),
      (DMc = x(qN(), 1)),
      (cQt = x(Om(), 1)),
      (PMc = x(Qx(), 1)),
      (MMc = x(pVe(), 1)),
      (LMc = x(li(), 1)),
      (Q7n = x(Oq(), 1)));
    XVe = class XVe extends VGr {
      config;
      constructor(...[e]) {
        let t = yMc(e || {});
        super(t);
        this.initConfig = t;
        let r = HPc(t),
          n = J7n.resolveUserAgentConfig(r),
          o = Q7n.resolveRetryConfig(n),
          i = DMc.resolveRegionConfig(o),
          s = X7n.resolveHostHeaderConfig(i),
          a = LMc.resolveEndpointConfig(s),
          l = xPc(a),
          c = HMc(l, e?.extensions || []);
        ((this.config = c),
          this.middlewareStack.use(PMc.getSchemaSerdePlugin(this.config)),
          this.middlewareStack.use(J7n.getUserAgentPlugin(this.config)),
          this.middlewareStack.use(Q7n.getRetryPlugin(this.config)),
          this.middlewareStack.use(MMc.getContentLengthPlugin(this.config)),
          this.middlewareStack.use(X7n.getHostHeaderPlugin(this.config)),
          this.middlewareStack.use(IMc.getLoggerPlugin(this.config)),
          this.middlewareStack.use(
            RMc.getRecursionDetectionPlugin(this.config),
          ),
          this.middlewareStack.use(
            cQt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
              httpAuthSchemeParametersProvider: TPc,
              identityProviderConfigProvider: async (u) =>
                new cQt.DefaultIdentityProviderConfig({
                  "aws.auth#sigv4": u.credentials,
                }),
            }),
          ),
          this.middlewareStack.use(cQt.getHttpSigningPlugin(this.config)));
      }
      destroy() {
        super.destroy();
      }
    };
  });
