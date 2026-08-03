// Module: E0i (lines 19084-19197)
  var E0i = S(() => {
    FN();
    pD();
    S0i();
    u5e();
    mB();
    oUr = class oUr extends Hh {
      create(e, t) {
        let { betas: r, ...n } = e;
        return this._client.post("/v1/messages/batches?beta=true", {
          body: n,
          ...t,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(r ?? []),
                "message-batches-2024-09-24",
              ].toString(),
            },
            t?.headers,
          ]),
        });
      }
      retrieve(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.get(ac`/v1/messages/batches/${e}?beta=true`, {
          ...r,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(n ?? []),
                "message-batches-2024-09-24",
              ].toString(),
            },
            r?.headers,
          ]),
        });
      }
      list(e = {}, t) {
        let { betas: r, ...n } = e ?? {};
        return this._client.getAPIList("/v1/messages/batches?beta=true", B0e, {
          query: n,
          ...t,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(r ?? []),
                "message-batches-2024-09-24",
              ].toString(),
            },
            t?.headers,
          ]),
        });
      }
      delete(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.delete(ac`/v1/messages/batches/${e}?beta=true`, {
          ...r,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(n ?? []),
                "message-batches-2024-09-24",
              ].toString(),
            },
            r?.headers,
          ]),
        });
      }
      cancel(e, t = {}, r) {
        let { betas: n } = t ?? {};
        return this._client.post(
          ac`/v1/messages/batches/${e}/cancel?beta=true`,
          {
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(n ?? []),
                  "message-batches-2024-09-24",
                ].toString(),
              },
              r?.headers,
            ]),
          },
        );
      }
      async results(e, t = {}, r) {
        let n = await this.retrieve(e);
        if (!n.results_url)
          throw new js(
            `No batch \`results_url\`; Has it finished processing? ${n.processing_status} - ${n.id}`,
          );
        let { betas: o } = t ?? {};
        return this._client
          .get(n.results_url, {
            ...r,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(o ?? []),
                  "message-batches-2024-09-24",
                ].toString(),
                Accept: "application/binary",
              },
              r?.headers,
            ]),
            stream: !0,
            __binaryResponse: !0,
          })
          ._thenUnwrap((i, s) => k9t.fromResponse(s.response, s.controller));
      }
    };
  });
