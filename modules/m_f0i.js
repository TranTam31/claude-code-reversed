// Module: F0i (lines 20868-20983)
  var F0i = S(() => {
    FN();
    pD();
    mB();
    _Ur = class _Ur extends Hh {
      create(e, t, r) {
        let { betas: n, ...o } = t;
        return this._client.post(ac`/v1/vaults/${e}/credentials?beta=true`, {
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
      retrieve(e, t, r) {
        let { vault_id: n, betas: o } = t;
        return this._client.get(
          ac`/v1/vaults/${n}/credentials/${e}?beta=true`,
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
        let { vault_id: n, betas: o, ...i } = t;
        return this._client.post(
          ac`/v1/vaults/${n}/credentials/${e}?beta=true`,
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
          ac`/v1/vaults/${e}/credentials?beta=true`,
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
        let { vault_id: n, betas: o } = t;
        return this._client.delete(
          ac`/v1/vaults/${n}/credentials/${e}?beta=true`,
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
      archive(e, t, r) {
        let { vault_id: n, betas: o } = t;
        return this._client.post(
          ac`/v1/vaults/${n}/credentials/${e}/archive?beta=true`,
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
    };
  });
