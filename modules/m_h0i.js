// Module: h0i (lines 18643-18669)
  var h0i = S(() => {
    FN();
    pD();
    mB();
    tUr = class tUr extends Hh {
      list(e, t = {}, r) {
        let { betas: n, ...o } = t ?? {};
        return this._client.getAPIList(
          ac`/v1/agents/${e}/versions?beta=true`,
          DC,
          {
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
          },
        );
      }
    };
  });
