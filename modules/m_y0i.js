// Module: y0i (lines 18765-18869)
  var y0i = S(() => {
    FN();
    pD();
    mB();
    rUr = class rUr extends Hh {
      create(e, t, r) {
        let { view: n, betas: o, ...i } = t;
        return this._client.post(
          ac`/v1/memory_stores/${e}/memories?beta=true`,
          {
            query: { view: n },
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
      retrieve(e, t, r) {
        let { memory_store_id: n, betas: o, ...i } = t;
        return this._client.get(
          ac`/v1/memory_stores/${n}/memories/${e}?beta=true`,
          {
            query: i,
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
        let { memory_store_id: n, view: o, betas: i, ...s } = t;
        return this._client.post(
          ac`/v1/memory_stores/${n}/memories/${e}?beta=true`,
          {
            query: { view: o },
            body: s,
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(i ?? []),
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
          ac`/v1/memory_stores/${e}/memories?beta=true`,
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
        let { memory_store_id: n, expected_content_sha256: o, betas: i } = t;
        return this._client.delete(
          ac`/v1/memory_stores/${n}/memories/${e}?beta=true`,
          {
            query: { expected_content_sha256: o },
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(i ?? []),
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
