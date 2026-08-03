// Module: hGc (lines 147557-147635)
  var hGc = S(() => {
    H6i();
    CQn();
    Qne();
    $9t();
    mGc();
    D6i = class D6i extends $b {
      constructor({
        awsRegion: e,
        baseURL: t,
        apiKey: r,
        awsAccessKey: n = null,
        awsSecretAccessKey: o = null,
        awsSessionToken: i = null,
        awsProfile: s,
        providerChainResolver: a = null,
        skipAuth: l = !1,
        ...c
      } = {}) {
        let u = e ?? s6e("AWS_REGION") ?? s6e("AWS_DEFAULT_REGION"),
          d =
            t ??
            s6e("ANTHROPIC_BEDROCK_MANTLE_BASE_URL") ??
            (u ? `https://bedrock-mantle.${u}.api.aws/anthropic` : void 0);
        if (!d)
          throw new js(
            "No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, or provide a `baseURL` / `ANTHROPIC_BEDROCK_MANTLE_BASE_URL` environment variable.",
          );
        let p = r != null;
        if ((n != null) !== (o != null))
          throw new js(
            "`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.",
          );
        let m = n != null && o != null,
          g = s != null,
          y;
        if (p) y = r;
        else if (!m && !g) y = s6e("AWS_BEARER_TOKEN_BEDROCK") ?? void 0;
        super({ apiKey: y, baseURL: d, ...c });
        ((this.messages = new vQ(this)),
          (this.beta = Vpg(this)),
          (this.skipAuth = !1),
          (this.awsRegion = u),
          (this.awsAccessKey = n),
          (this.awsSecretAccessKey = o),
          (this.awsSessionToken = i),
          (this.awsProfile = s ?? null),
          (this.providerChainResolver = a),
          (this.skipAuth = l),
          (this._useSigV4 = y == null));
      }
      async authHeaders(e) {
        if (this.skipAuth) return;
        if (!this._useSigV4)
          return tZt([{ Authorization: `Bearer ${this.apiKey}` }]);
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
        let o = await fGc(e, {
          url: t,
          regionName: n,
          serviceName: Gpg,
          awsAccessKey: this.awsAccessKey,
          awsSecretAccessKey: this.awsSecretAccessKey,
          awsSessionToken: this.awsSessionToken,
          awsProfile: this.awsProfile,
          providerChainResolver: this.providerChainResolver,
        });
        e.headers = tZt([o, e.headers]).values;
      }
    };
  });
