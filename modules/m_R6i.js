// Module: R6i (lines 147397-147485)
  var R6i = S(() => {
    Qne();
    $9t();
    djc();
    iGc();
    z5r();
    H6i();
    cGc();
    C6i();
    Qne();
    Upg = new Set(["/v1/complete", "/v1/messages", "/v1/messages?beta=true"]);
    I6i = class I6i extends $b {
      constructor({
        awsRegion: e = s6e("AWS_REGION") ?? "us-east-1",
        baseURL: t = s6e("ANTHROPIC_BEDROCK_BASE_URL") ??
          `https://bedrock-runtime.${e}.amazonaws.com`,
        apiKey: r = s6e("AWS_BEARER_TOKEN_BEDROCK"),
        awsSecretKey: n = null,
        awsAccessKey: o = null,
        awsSessionToken: i = null,
        providerChainResolver: s = null,
        ...a
      } = {}) {
        super({ baseURL: t, authToken: r, ...a });
        ((this.skipAuth = !1),
          (this.messages = Bpg(this)),
          (this.completions = new Gtt(this)),
          (this.beta = jpg(this)));
        let l = o != null,
          c = n != null;
        if (l !== c)
          kQn(this).warn(
            "Warning: Passing only one of `awsAccessKey` or `awsSecretKey` is deprecated. Please provide both keys, or provide neither and rely on the AWS credential provider chain.",
          );
        ((this.awsSecretKey = n),
          (this.awsAccessKey = o),
          (this.awsRegion = e),
          (this.awsSessionToken = i),
          (this.skipAuth = a.skipAuth ?? !1),
          (this.providerChainResolver = s));
      }
      validateHeaders() {}
      async prepareRequest(e, { url: t, options: r }) {
        if (this.skipAuth) {
          e.headers.delete("Authorization");
          return;
        }
        if (this.authToken) return;
        let n = this.awsRegion;
        if (!n)
          throw Error(
            "Expected `awsRegion` option to be passed to the client or the `AWS_REGION` environment variable to be present",
          );
        let o = await ujc(e, {
          url: t,
          regionName: n,
          awsAccessKey: this.awsAccessKey,
          awsSecretKey: this.awsSecretKey,
          awsSessionToken: this.awsSessionToken,
          fetchOptions: this.fetchOptions,
          providerChainResolver: this.providerChainResolver,
        });
        e.headers = tZt([o, e.headers]).values;
      }
      async buildRequest(e) {
        if (((e.__streamClass = IQn), xQn(e.body))) e.body = { ...e.body };
        if (xQn(e.body)) {
          if (!e.body.anthropic_version) e.body.anthropic_version = Fpg;
          if (e.headers && !e.body.anthropic_beta) {
            let t = tZt([e.headers]).values.get("anthropic-beta");
            if (t != null) e.body.anthropic_beta = t.split(",");
          }
        }
        if (Upg.has(e.path) && e.method === "post") {
          if (!xQn(e.body))
            throw Error(
              "Expected request body to be an object for post /v1/messages",
            );
          let t = e.body.model;
          e.body.model = void 0;
          let r = e.body.stream;
          if (((e.body.stream = void 0), r))
            e.path = k6i`/model/${t}/invoke-with-response-stream`;
          else e.path = k6i`/model/${t}/invoke`;
        }
        return super.buildRequest(e);
      }
    };
  });
