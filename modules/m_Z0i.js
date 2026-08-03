// Module: Z0i (lines 21862-21897)
  var Z0i = S(() => {
    FN();
    pD();
    mB();
    N9t = class N9t extends Hh {
      retrieve(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.get(ac`/v1/models/${e}`, {
          ...r,
          headers: Cs([
            {
              ...(n?.toString() != null
                ? { "anthropic-beta": n?.toString() }
                : void 0),
            },
            r?.headers,
          ]),
        });
      }
      list(e = {}, t) {
        let { betas: r, ...n } = e ?? {};
        return this._client.getAPIList("/v1/models", B0e, {
          query: n,
          ...t,
          headers: Cs([
            {
              ...(r?.toString() != null
                ? { "anthropic-beta": r?.toString() }
                : void 0),
            },
            t?.headers,
          ]),
        });
      }
    };
  });
