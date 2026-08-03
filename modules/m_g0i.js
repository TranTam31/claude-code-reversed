// Module: g0i (lines 18671-18763)
  var g0i = S(() => {
    h0i();
    h0i();
    FN();
    pD();
    mB();
    H9t = class H9t extends Hh {
      constructor() {
        super(...arguments);
        this.versions = new tUr(this._client);
      }
      create(e, t) {
        let { betas: r, ...n } = e;
        return this._client.post("/v1/agents?beta=true", {
          body: n,
          ...t,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(r ?? []),
                "managed-agents-2026-04-01",
              ].toString(),
            },
            t?.headers,
          ]),
        });
      }
      retrieve(e, t = {}, r) {
        let { betas: n, ...o } = t ?? {};
        return this._client.get(ac`/v1/agents/${e}?beta=true`, {
          query: o,
          ...r,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(n ?? []),
                "managed-agents-2026-04-01",
              ].toString(),
            },
            r?.headers,
          ]),
        });
      }
      update(e, t, r) {
        let { betas: n, ...o } = t;
        return this._client.post(ac`/v1/agents/${e}?beta=true`, {
          body: o,
          ...r,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(n ?? []),
                "managed-agents-2026-04-01",
              ].toString(),
            },
            r?.headers,
          ]),
        });
      }
      list(e = {}, t) {
        let { betas: r, ...n } = e ?? {};
        return this._client.getAPIList("/v1/agents?beta=true", DC, {
          query: n,
          ...t,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(r ?? []),
                "managed-agents-2026-04-01",
              ].toString(),
            },
            t?.headers,
          ]),
        });
      }
      archive(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.post(ac`/v1/agents/${e}/archive?beta=true`, {
          ...r,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(n ?? []),
                "managed-agents-2026-04-01",
              ].toString(),
            },
            r?.headers,
          ]),
        });
      }
    };
    H9t.Versions = tUr;
  });
