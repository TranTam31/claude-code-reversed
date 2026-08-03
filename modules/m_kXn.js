// Module: kXn (lines 137023-137078)
  var kXn = S(() => {
    IT();
    XWi();
    TD();
    tNc();
    pNc();
    ((CXn = x(oVe(), 1)),
      (fNc = x(iVe(), 1)),
      (mNc = x(sVe(), 1)),
      (xXn = x(p1e(), 1)),
      (hNc = x(qN(), 1)),
      (mQt = x(Om(), 1)),
      (gNc = x(Qx(), 1)),
      (yNc = x(pVe(), 1)),
      (_Nc = x(li(), 1)),
      (HXn = x(Oq(), 1)));
    okt = class okt extends mXn {
      config;
      constructor(...[e]) {
        let t = eNc(e || {});
        super(t);
        this.initConfig = t;
        let r = g1c(t),
          n = xXn.resolveUserAgentConfig(r),
          o = HXn.resolveRetryConfig(n),
          i = hNc.resolveRegionConfig(o),
          s = CXn.resolveHostHeaderConfig(i),
          a = _Nc.resolveEndpointConfig(s),
          l = h1c(a),
          c = dNc(l, e?.extensions || []);
        ((this.config = c),
          this.middlewareStack.use(gNc.getSchemaSerdePlugin(this.config)),
          this.middlewareStack.use(xXn.getUserAgentPlugin(this.config)),
          this.middlewareStack.use(HXn.getRetryPlugin(this.config)),
          this.middlewareStack.use(yNc.getContentLengthPlugin(this.config)),
          this.middlewareStack.use(CXn.getHostHeaderPlugin(this.config)),
          this.middlewareStack.use(fNc.getLoggerPlugin(this.config)),
          this.middlewareStack.use(
            mNc.getRecursionDetectionPlugin(this.config),
          ),
          this.middlewareStack.use(
            mQt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
              httpAuthSchemeParametersProvider: f1c,
              identityProviderConfigProvider: async (u) =>
                new mQt.DefaultIdentityProviderConfig({
                  "aws.auth#sigv4": u.credentials,
                }),
            }),
          ),
          this.middlewareStack.use(mQt.getHttpSigningPlugin(this.config)));
      }
      destroy() {
        super.destroy();
      }
    };
  });
