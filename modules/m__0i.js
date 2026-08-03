// Module: $0i (lines 20792-20866)
  var $0i = S(() => {
    N0i();
    N0i();
    FN();
    pD();
    x9t();
    mB();
    M9t = class M9t extends Hh {
      constructor() {
        super(...arguments);
        this.versions = new yUr(this._client);
      }
      create(e = {}, t) {
        let { betas: r, ...n } = e ?? {};
        return this._client.post(
          "/v1/skills?beta=true",
          C9t(
            {
              body: n,
              ...t,
              headers: Cs([
                {
                  "anthropic-beta": [
                    ...(r ?? []),
                    "skills-2025-10-02",
                  ].toString(),
                },
                t?.headers,
              ]),
            },
            this._client,
            !1,
          ),
        );
      }
      retrieve(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.get(ac`/v1/skills/${e}?beta=true`, {
          ...r,
          headers: Cs([
            {
              "anthropic-beta": [...(n ?? []), "skills-2025-10-02"].toString(),
            },
            r?.headers,
          ]),
        });
      }
      list(e = {}, t) {
        let { betas: r, ...n } = e ?? {};
        return this._client.getAPIList("/v1/skills?beta=true", DC, {
          query: n,
          ...t,
          headers: Cs([
            {
              "anthropic-beta": [...(r ?? []), "skills-2025-10-02"].toString(),
            },
            t?.headers,
          ]),
        });
      }
      delete(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.delete(ac`/v1/skills/${e}?beta=true`, {
          ...r,
          headers: Cs([
            {
              "anthropic-beta": [...(n ?? []), "skills-2025-10-02"].toString(),
            },
            r?.headers,
          ]),
        });
      }
    };
    M9t.Versions = yUr;
  });
