// Module: U0i (lines 20985-21091)
  var U0i = S(() => {
    F0i();
    F0i();
    FN();
    pD();
    mB();
    L9t = class L9t extends Hh {
      constructor() {
        super(...arguments);
        this.credentials = new _Ur(this._client);
      }
      create(e, t) {
        let { betas: r, ...n } = e;
        return this._client.post("/v1/vaults?beta=true", {
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
        let { betas: n } = t ?? {};
        return this._client.get(ac`/v1/vaults/${e}?beta=true`, {
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
        return this._client.post(ac`/v1/vaults/${e}?beta=true`, {
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
        return this._client.getAPIList("/v1/vaults?beta=true", DC, {
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
      delete(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.delete(ac`/v1/vaults/${e}?beta=true`, {
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
      archive(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.post(ac`/v1/vaults/${e}/archive?beta=true`, {
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
    L9t.Credentials = _Ur;
  });
