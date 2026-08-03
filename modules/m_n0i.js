// Module: N0i (lines 20711-20790)
  var N0i = S(() => {
    FN();
    pD();
    x9t();
    mB();
    yUr = class yUr extends Hh {
      create(e, t = {}, r) {
        let { betas: n, ...o } = t ?? {};
        return this._client.post(
          ac`/v1/skills/${e}/versions?beta=true`,
          C9t(
            {
              body: o,
              ...r,
              headers: Cs([
                {
                  "anthropic-beta": [
                    ...(n ?? []),
                    "skills-2025-10-02",
                  ].toString(),
                },
                r?.headers,
              ]),
            },
            this._client,
          ),
        );
      }
      retrieve(e, t, r) {
        let { skill_id: n, betas: o } = t;
        return this._client.get(ac`/v1/skills/${n}/versions/${e}?beta=true`, {
          ...r,
          headers: Cs([
            {
              "anthropic-beta": [...(o ?? []), "skills-2025-10-02"].toString(),
            },
            r?.headers,
          ]),
        });
      }
      list(e, t = {}, r) {
        let { betas: n, ...o } = t ?? {};
        return this._client.getAPIList(
          ac`/v1/skills/${e}/versions?beta=true`,
          DC,
          {
            query: o,
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(n ?? []),
                  "skills-2025-10-02",
                ].toString(),
              },
              r?.headers,
            ]),
          },
        );
      }
      delete(e, t, r) {
        let { skill_id: n, betas: o } = t;
        return this._client.delete(
          ac`/v1/skills/${n}/versions/${e}?beta=true`,
          {
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(o ?? []),
                  "skills-2025-10-02",
                ].toString(),
              },
              r?.headers,
            ]),
          },
        );
      }
    };
  });
