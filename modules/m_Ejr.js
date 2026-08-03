// Module: Ejr (lines 97402-97457)
  var Ejr = S(() => {
    c_e();
    F$i();
    cXt();
    erc();
    drc();
    ((eqn = x(oVe(), 1)),
      (prc = x(iVe(), 1)),
      (frc = x(sVe(), 1)),
      (tqn = x(p1e(), 1)),
      (mrc = x(qN(), 1)),
      (dXt = x(Om(), 1)),
      (hrc = x(Qx(), 1)),
      (grc = x(pVe(), 1)),
      (yrc = x(li(), 1)),
      (rqn = x(Oq(), 1)));
    EVe = class EVe extends j6n {
      config;
      constructor(...[e]) {
        let t = Ztc(e || {});
        super(t);
        this.initConfig = t;
        let r = htc(t),
          n = tqn.resolveUserAgentConfig(r),
          o = rqn.resolveRetryConfig(n),
          i = mrc.resolveRegionConfig(o),
          s = eqn.resolveHostHeaderConfig(i),
          a = yrc.resolveEndpointConfig(s),
          l = mtc(a),
          c = urc(l, e?.extensions || []);
        ((this.config = c),
          this.middlewareStack.use(hrc.getSchemaSerdePlugin(this.config)),
          this.middlewareStack.use(tqn.getUserAgentPlugin(this.config)),
          this.middlewareStack.use(rqn.getRetryPlugin(this.config)),
          this.middlewareStack.use(grc.getContentLengthPlugin(this.config)),
          this.middlewareStack.use(eqn.getHostHeaderPlugin(this.config)),
          this.middlewareStack.use(prc.getLoggerPlugin(this.config)),
          this.middlewareStack.use(
            frc.getRecursionDetectionPlugin(this.config),
          ),
          this.middlewareStack.use(
            dXt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
              httpAuthSchemeParametersProvider: ptc,
              identityProviderConfigProvider: async (u) =>
                new dXt.DefaultIdentityProviderConfig({
                  "aws.auth#sigv4": u.credentials,
                }),
            }),
          ),
          this.middlewareStack.use(dXt.getHttpSigningPlugin(this.config)));
      }
      destroy() {
        super.destroy();
      }
    };
  });
