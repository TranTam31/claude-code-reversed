// Module: l7i (lines 176907-177066)
  var l7i = S(() => {
    rXc();
    gto();
    lXc();
    Qne();
    Qne();
    ((s7i = x(der(), 1)),
      (uxg = ["apiKey", "authToken", "credentials", "config", "profile"]));
    a7i = class a7i extends mq {
      get completions() {
        throw new js(
          "The deprecated text Completions API is not available on Claude Platform on Google Cloud",
        );
      }
      set completions(e) {}
      constructor({
        baseURL: e = kIt("ANTHROPIC_GOOGLE_CLOUD_BASE_URL"),
        project: t = kIt("ANTHROPIC_GOOGLE_CLOUD_PROJECT") ??
          kIt("GOOGLE_CLOUD_PROJECT"),
        location: r = kIt("ANTHROPIC_GOOGLE_CLOUD_LOCATION"),
        workspaceId: n = kIt("ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID"),
        bearerTokenProvider: o,
        googleAuth: i,
        authClient: s,
        skipAuth: a = !1,
        ...l
      } = {}) {
        if (s && i)
          throw new js(
            "The `authClient` and `googleAuth` arguments are mutually exclusive; only one can be passed at a time.",
          );
        if (a && (o || i || s))
          throw new js(
            "The `skipAuth` option is mutually exclusive with `bearerTokenProvider`, `googleAuth`, and `authClient`; `skipAuth` disables authentication entirely.",
          );
        for (let p of uxg)
          if (l[p] != null)
            throw new js(
              `The \`${p}\` option is not supported by AnthropicGoogleCloud; authentication uses a Google bearer token (\`bearerTokenProvider\`, \`googleAuth\`/\`authClient\`, or Application Default Credentials).`,
            );
        if (((r = r || cxg), !n && !(a && e)))
          throw new js(
            "No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID` environment variable.",
          );
        let c = e,
          u = !1;
        if (!c)
          if (t) c = PQc(t, r, n);
          else if (a) throw new js(`No project was given. ${MQc}`);
          else u = !0;
        super({
          baseURL: c ?? null,
          ...l,
          apiKey: null,
          authToken: null,
          ...{
            __auth: {
              provider: null,
              tokenCache: null,
              resolution: null,
              error: null,
              extraHeaders: {},
            },
          },
        });
        (i7i.add(this),
          mer.set(this, void 0),
          lro.set(this, void 0),
          cro.set(this, void 0),
          fer.set(this, void 0),
          uro.set(this, void 0),
          (this.project = t ?? null),
          (this.location = r ?? null),
          (this.workspaceId = n),
          (this.skipAuth = a),
          per(this, mer, o, "f"),
          per(this, lro, i ?? null, "f"),
          per(this, cro, s ?? null, "f"),
          per(this, uro, !!e, "f"));
        let d;
        if (!a && !o)
          if (s) per(this, fer, Promise.resolve(s), "f");
          else
            ((d = i ?? new s7i.GoogleAuth({ scopes: DQc })),
              per(this, fer, d.getClient(), "f"),
              U6e(this, fer, "f").catch(() => {}));
        if (!u) this.ready = Promise.resolve();
        else {
          let p =
              d ??
              i ??
              new s7i.GoogleAuth({
                scopes: DQc,
                ...(s ? { authClient: s } : {}),
              }),
            f = r,
            m = n;
          ((this.baseURL = "https://unresolved.invalid"),
            (this.ready = p.getProjectId().then(
              (g) => {
                ((this.project = g), (this.baseURL = PQc(g, f, m)));
              },
              (g) => {
                let y = new js(
                  `No project was given and it could not be resolved from Google credentials. ${MQc}`,
                );
                throw ((y.cause = g), y);
              },
            )),
            this.ready.catch(() => {}));
        }
      }
      withOptions(e) {
        return super.withOptions({
          project: this.project ?? void 0,
          location: this.location ?? void 0,
          workspaceId: this.workspaceId,
          bearerTokenProvider: U6e(this, mer, "f"),
          googleAuth: U6e(this, lro, "f") ?? void 0,
          authClient: U6e(this, cro, "f") ?? void 0,
          skipAuth: this.skipAuth,
          baseURL: U6e(this, uro, "f") ? this.baseURL : void 0,
          ...e,
        });
      }
      async prepareOptions(e) {
        (await super.prepareOptions(e), await this.ready);
      }
      async buildRequest(e, t = {}) {
        return (await this.ready, await super.buildRequest(e, t));
      }
      async authHeaders(e) {
        if (this.skipAuth) return;
        let t = UKi([this._options.defaultHeaders, e.headers]);
        if (t.values.get("authorization") || t.nulls.has("authorization"))
          return;
        let r = await U6e(this, i7i, "m", LQc).call(this);
        return UKi([{ Authorization: `Bearer ${r}` }]);
      }
      validateHeaders() {
        return;
      }
    };
    ((mer = new WeakMap()),
      (lro = new WeakMap()),
      (cro = new WeakMap()),
      (fer = new WeakMap()),
      (uro = new WeakMap()),
      (i7i = new WeakSet()),
      (LQc = async function () {
        if (U6e(this, mer, "f")) return await U6e(this, mer, "f").call(this);
        let t = await U6e(this, fer, "f"),
          { token: r } = await t.getAccessToken();
        if (!r)
          throw new js(
            "Failed to obtain a Google access token from Application Default Credentials.",
          );
        return r;
      }));
  });
