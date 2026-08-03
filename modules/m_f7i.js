// Module: f7i (lines 177153-177249)
  var f7i = S(() => {
    Qne();
    $9t();
    d7i();
    BQc();
    Qne();
    ((jQc = x(der(), 1)),
      (fxg = new Set(["/v1/messages", "/v1/messages?beta=true"])));
    p7i = class p7i extends $b {
      constructor({
        baseURL: e = dro("ANTHROPIC_VERTEX_BASE_URL"),
        region: t = dro("CLOUD_ML_REGION") ?? null,
        projectId: r = dro("ANTHROPIC_VERTEX_PROJECT_ID") ?? null,
        ...n
      } = {}) {
        if (!t)
          throw Error(
            "No region was given. The client should be instantiated with the `region` option or the `CLOUD_ML_REGION` environment variable should be set.",
          );
        if (!e)
          switch (t) {
            case "global":
              e = "https://aiplatform.googleapis.com/v1";
              break;
            case "us":
              e = "https://aiplatform.us.rep.googleapis.com/v1";
              break;
            case "eu":
              e = "https://aiplatform.eu.rep.googleapis.com/v1";
              break;
            default:
              e = `https://${t}-aiplatform.googleapis.com/v1`;
          }
        super({ baseURL: e, ...n });
        if (
          ((this.messages = mxg(this)),
          (this.beta = hxg(this)),
          (this.region = t),
          (this.projectId = r),
          (this.accessToken = n.accessToken ?? null),
          n.authClient && n.googleAuth)
        )
          throw Error(
            "You cannot provide both `authClient` and `googleAuth`. Please provide only one of them.",
          );
        else if (n.authClient)
          this._authClientPromise = Promise.resolve(n.authClient);
        else
          ((this._auth =
            n.googleAuth ??
            new jQc.GoogleAuth({
              scopes: "https://www.googleapis.com/auth/cloud-platform",
            })),
            (this._authClientPromise = this._auth.getClient()));
      }
      validateHeaders() {}
      async prepareOptions(e) {
        let t = await this._authClientPromise,
          r = await t.getRequestHeaders(),
          n = t.projectId ?? r["x-goog-user-project"];
        if (!this.projectId && n) this.projectId = n;
        e.headers = UQc([r, e.headers]);
      }
      async buildRequest(e) {
        if (pro(e.body)) e.body = { ...e.body };
        if (pro(e.body)) {
          if (!e.body.anthropic_version) e.body.anthropic_version = pxg;
        }
        if (fxg.has(e.path) && e.method === "post") {
          if (!this.projectId)
            throw Error(
              "No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.",
            );
          if (!pro(e.body))
            throw Error(
              "Expected request body to be an object for post /v1/messages",
            );
          let t = e.body.model;
          e.body.model = void 0;
          let n = (e.body.stream ?? !1) ? "streamRawPredict" : "rawPredict";
          e.path = `/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/${t}:${n}`;
        }
        if (
          e.path === "/v1/messages/count_tokens" ||
          (e.path == "/v1/messages/count_tokens?beta=true" &&
            e.method === "post")
        ) {
          if (!this.projectId)
            throw Error(
              "No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.",
            );
          e.path = `/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/count-tokens:rawPredict`;
        }
        return super.buildRequest(e);
      }
    };
  });
