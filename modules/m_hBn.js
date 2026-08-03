// Module: hBn (lines 17860-17907)
  var hBn = S(() => {
    s5e();
    n0i();
    P0t = class P0t extends Promise {
      constructor(e, t, r = mBn) {
        super((n) => {
          n(null);
        });
        ((this.responsePromise = t),
          (this.parseResponse = r),
          zFr.set(this, void 0),
          Ec(this, zFr, e, "f"));
      }
      _thenUnwrap(e) {
        return new P0t(jo(this, zFr, "f"), this.responsePromise, async (t, r) =>
          r0i(e(await this.parseResponse(t, r), r), r.response),
        );
      }
      asResponse() {
        return this.responsePromise.then((e) => e.response);
      }
      async withResponse() {
        let [e, t] = await Promise.all([this.parse(), this.asResponse()]);
        return {
          data: e,
          response: t,
          request_id: t.headers.get("request-id"),
        };
      }
      parse() {
        if (!this.parsedPromise)
          this.parsedPromise = this.responsePromise.then((e) =>
            this.parseResponse(jo(this, zFr, "f"), e),
          );
        return this.parsedPromise;
      }
      then(e, t) {
        return this.parse().then(e, t);
      }
      catch(e) {
        return this.parse().catch(e);
      }
      finally(e) {
        return this.parse().finally(e);
      }
    };
    zFr = new WeakMap();
  });
