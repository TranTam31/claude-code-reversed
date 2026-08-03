// Module: O0i (lines 20599-20709)
  var O0i = S(() => {
    M0i();
    M0i();
    L0i();
    L0i();
    FN();
    pD();
    mB();
    $0t = class $0t extends Hh {
      constructor() {
        super(...arguments);
        ((this.events = new hUr(this._client)),
          (this.resources = new gUr(this._client)));
      }
      create(e, t) {
        let { betas: r, ...n } = e;
        return this._client.post("/v1/sessions?beta=true", {
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
        return this._client.get(ac`/v1/sessions/${e}?beta=true`, {
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
        return this._client.post(ac`/v1/sessions/${e}?beta=true`, {
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
        return this._client.getAPIList("/v1/sessions?beta=true", DC, {
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
        return this._client.delete(ac`/v1/sessions/${e}?beta=true`, {
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
        return this._client.post(ac`/v1/sessions/${e}/archive?beta=true`, {
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
    $0t.Events = hUr;
    $0t.Resources = gUr;
  });
