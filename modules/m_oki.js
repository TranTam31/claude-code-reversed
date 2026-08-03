// Module: OKi (lines 168628-168719)
  var OKi = S(() => {
    V7c();
    uqr();
    Y7c();
    Qne();
    Qne();
    eXc();
    LKi = class LKi extends mq {
      constructor({
        awsRegion: e,
        baseURL: t,
        apiKey: r,
        awsAccessKey: n = null,
        awsSecretAccessKey: o = null,
        awsSessionToken: i = null,
        awsProfile: s,
        providerChainResolver: a = null,
        workspaceId: l,
        skipAuth: c = !1,
        ...u
      } = {}) {
        let d = e ?? YZt("AWS_REGION") ?? YZt("AWS_DEFAULT_REGION"),
          p =
            t ??
            YZt("ANTHROPIC_AWS_BASE_URL") ??
            (d ? `https://aws-external-anthropic.${d}.api.aws` : void 0);
        if (!p && !c)
          throw new js(
            "No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, or provide a `baseURL` / `ANTHROPIC_AWS_BASE_URL` environment variable.",
          );
        let f = r != null;
        if ((n != null) !== (o != null))
          throw new js(
            "`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.",
          );
        let g = n != null && o != null,
          y = s != null,
          _;
        if (f) _ = r;
        else if (!g && !y) _ = YZt("ANTHROPIC_AWS_API_KEY") ?? void 0;
        let E = l ?? YZt("ANTHROPIC_AWS_WORKSPACE_ID");
        if (!E && !c)
          throw new js(
            "No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_AWS_WORKSPACE_ID` environment variable.",
          );
        super({
          apiKey: _,
          baseURL: p,
          ...u,
          defaultHeaders: MKi([
            { "anthropic-workspace-id": E },
            u.defaultHeaders,
          ]),
        });
        ((this.skipAuth = !1),
          (this.awsRegion = d),
          (this.awsAccessKey = n),
          (this.awsSecretAccessKey = o),
          (this.awsSessionToken = i),
          (this.awsProfile = s ?? null),
          (this.providerChainResolver = a),
          (this.workspaceId = E),
          (this.skipAuth = c),
          (this._useSigV4 = _ == null));
      }
      async authHeaders(e) {
        if (this.skipAuth) return;
        if (!this._useSigV4) return super.authHeaders(e);
        return;
      }
      validateHeaders() {}
      async prepareRequest(e, { url: t, options: r }) {
        if (this.skipAuth || !this._useSigV4) return;
        let n = this.awsRegion;
        if (!n)
          throw new js(
            "No AWS region found. Set `awsRegion` in the constructor or the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable.",
          );
        let o = await Z7c(e, {
          url: t,
          regionName: n,
          serviceName: Awg,
          awsAccessKey: this.awsAccessKey,
          awsSecretAccessKey: this.awsSecretAccessKey,
          awsSessionToken: this.awsSessionToken,
          awsProfile: this.awsProfile,
          providerChainResolver: this.providerChainResolver,
        });
        e.headers = MKi([o, e.headers]).values;
      }
    };
  });
