// Module: S9n (lines 115821-115883)
  var S9n = S(() => {
    tBi();
    vBi();
    ihc();
    a5();
    DBi();
    m_e();
    Qyc();
    c_c();
    ((y9n = x(oVe(), 1)),
      (u_c = x(iVe(), 1)),
      (d_c = x(sVe(), 1)),
      (_9n = x(p1e(), 1)),
      (p_c = x(qN(), 1)),
      (sJt = x(Om(), 1)),
      (f_c = x(Qx(), 1)),
      (m_c = x(pVe(), 1)),
      (h_c = x(li(), 1)),
      (b9n = x(Oq(), 1)));
    aJt = class aJt extends eWr {
      config;
      constructor(...[e]) {
        let t = Jyc(e || {});
        super(t);
        this.initConfig = t;
        let r = Qgc(t),
          n = _9n.resolveUserAgentConfig(r),
          o = b9n.resolveRetryConfig(n),
          i = p_c.resolveRegionConfig(o),
          s = y9n.resolveHostHeaderConfig(i),
          a = h_c.resolveEndpointConfig(s),
          l = ohc(a),
          c = Jgc(l),
          u = omc(c),
          d = thc(u),
          p = l_c(d, e?.extensions || []);
        ((this.config = p),
          this.middlewareStack.use(f_c.getSchemaSerdePlugin(this.config)),
          this.middlewareStack.use(_9n.getUserAgentPlugin(this.config)),
          this.middlewareStack.use(b9n.getRetryPlugin(this.config)),
          this.middlewareStack.use(m_c.getContentLengthPlugin(this.config)),
          this.middlewareStack.use(y9n.getHostHeaderPlugin(this.config)),
          this.middlewareStack.use(u_c.getLoggerPlugin(this.config)),
          this.middlewareStack.use(
            d_c.getRecursionDetectionPlugin(this.config),
          ),
          this.middlewareStack.use(
            sJt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
              httpAuthSchemeParametersProvider: Ygc,
              identityProviderConfigProvider: async (f) =>
                new sJt.DefaultIdentityProviderConfig({
                  "aws.auth#sigv4": f.credentials,
                  "smithy.api#httpBearerAuth": f.token,
                }),
            }),
          ),
          this.middlewareStack.use(sJt.getHttpSigningPlugin(this.config)));
      }
      destroy() {
        super.destroy();
      }
    };
  });
