// Module: J0i (lines 21740-21781)
  var J0i = S(() => {
    FN();
    pD();
    S0i();
    u5e();
    mB();
    CUr = class CUr extends Hh {
      create(e, t) {
        return this._client.post("/v1/messages/batches", { body: e, ...t });
      }
      retrieve(e, t) {
        return this._client.get(ac`/v1/messages/batches/${e}`, t);
      }
      list(e = {}, t) {
        return this._client.getAPIList("/v1/messages/batches", B0e, {
          query: e,
          ...t,
        });
      }
      delete(e, t) {
        return this._client.delete(ac`/v1/messages/batches/${e}`, t);
      }
      cancel(e, t) {
        return this._client.post(ac`/v1/messages/batches/${e}/cancel`, t);
      }
      async results(e, t) {
        let r = await this.retrieve(e);
        if (!r.results_url)
          throw new js(
            `No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`,
          );
        return this._client
          .get(r.results_url, {
            ...t,
            headers: Cs([{ Accept: "application/binary" }, t?.headers]),
            stream: !0,
            __binaryResponse: !0,
          })
          ._thenUnwrap((n, o) => k9t.fromResponse(o.response, o.controller));
      }
    };
  });
