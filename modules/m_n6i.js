// Module: N6i (lines 147729-147799)
  var N6i = S(() => {
    yGc();
    RQn();
    SGc();
    Qne();
    Qne();
    $9t();
    O6i = class O6i extends mq {
      constructor({
        baseURL: e = PQn("ANTHROPIC_FOUNDRY_BASE_URL"),
        apiKey: t = PQn("ANTHROPIC_FOUNDRY_API_KEY"),
        resource: r = PQn("ANTHROPIC_FOUNDRY_RESOURCE"),
        azureADTokenProvider: n,
        dangerouslyAllowBrowser: o,
        ...i
      } = {}) {
        if (typeof n === "function") o = !0;
        if (!n && !t)
          throw new js(
            "Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.",
          );
        if (n && t)
          throw new js(
            "The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.",
          );
        if (!e) {
          if (!r)
            throw new js(
              "Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable",
            );
          e = `https://${r}.services.ai.azure.com/anthropic/`;
        } else if (r)
          throw new js("baseURL and resource are mutually exclusive");
        super({
          apiKey: n ?? t,
          baseURL: e,
          ...i,
          ...(o !== void 0 ? { dangerouslyAllowBrowser: o } : {}),
        });
        ((this.resource = null),
          (this.messages = Kpg(this)),
          (this.beta = Ypg(this)),
          (this.models = void 0));
      }
      async authHeaders() {
        if (typeof this._options.apiKey === "function") {
          let e;
          try {
            e = await this._options.apiKey();
          } catch (t) {
            if (t instanceof js) throw t;
            throw new js(
              `Failed to get token from azureADTokenProvider: ${t.message}`,
              { cause: t },
            );
          }
          if (typeof e !== "string" || !e)
            throw new js(
              `Expected azureADTokenProvider function argument to return a string but it returned ${e}`,
            );
          return L6i([{ Authorization: `Bearer ${e}` }]);
        }
        if (typeof this._options.apiKey === "string")
          return L6i([{ "x-api-key": this.apiKey }]);
        return;
      }
      validateHeaders() {
        return;
      }
    };
  });
