// Module: L0i (lines 20500-20597)
  var L0i = S(() => {
    FN();
    pD();
    mB();
    gUr = class gUr extends Hh {
      retrieve(e, t, r) {
        let { session_id: n, betas: o } = t;
        return this._client.get(
          ac`/v1/sessions/${n}/resources/${e}?beta=true`,
          {
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(o ?? []),
                  "managed-agents-2026-04-01",
                ].toString(),
              },
              r?.headers,
            ]),
          },
        );
      }
      update(e, t, r) {
        let { session_id: n, betas: o, ...i } = t;
        return this._client.post(
          ac`/v1/sessions/${n}/resources/${e}?beta=true`,
          {
            body: i,
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(o ?? []),
                  "managed-agents-2026-04-01",
                ].toString(),
              },
              r?.headers,
            ]),
          },
        );
      }
      list(e, t = {}, r) {
        let { betas: n, ...o } = t ?? {};
        return this._client.getAPIList(
          ac`/v1/sessions/${e}/resources?beta=true`,
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
      delete(e, t, r) {
        let { session_id: n, betas: o } = t;
        return this._client.delete(
          ac`/v1/sessions/${n}/resources/${e}?beta=true`,
          {
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(o ?? []),
                  "managed-agents-2026-04-01",
                ].toString(),
              },
              r?.headers,
            ]),
          },
        );
      }
      add(e, t, r) {
        let { betas: n, ...o } = t;
        return this._client.post(ac`/v1/sessions/${e}/resources?beta=true`, {
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
    };
  });
