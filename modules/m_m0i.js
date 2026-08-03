// Module: M0i (lines 20440-20498)
  var M0i = S(() => {
    FN();
    pD();
    mB();
    hUr = class hUr extends Hh {
      list(e, t = {}, r) {
        let { betas: n, ...o } = t ?? {};
        return this._client.getAPIList(
          ac`/v1/sessions/${e}/events?beta=true`,
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
      send(e, t, r) {
        let { betas: n, ...o } = t;
        return this._client.post(ac`/v1/sessions/${e}/events?beta=true`, {
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
      stream(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.get(ac`/v1/sessions/${e}/events/stream?beta=true`, {
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
          stream: !0,
        });
      }
    };
  });
