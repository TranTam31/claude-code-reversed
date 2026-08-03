// Module: $N (lines 16449-16512)
  var $N = S(() => {
    js = class js extends Error {};
    hi = class hi extends js {
      constructor(e, t, r, n, o) {
        super(`${hi.makeMessage(e, t, r)}`);
        ((this.status = e),
          (this.headers = n),
          (this.requestID = n?.get("request-id")),
          (this.error = t),
          (this.type = o ?? null));
      }
      static makeMessage(e, t, r) {
        let n = t?.message
          ? typeof t.message === "string"
            ? t.message
            : JSON.stringify(t.message)
          : t
            ? JSON.stringify(t)
            : r;
        if (e && n) return `${e} ${n}`;
        if (e) return `${e} status code (no body)`;
        if (n) return n;
        return "(no status code or body)";
      }
      static generate(e, t, r, n) {
        if (!e || !n) return new MO({ message: r, cause: MFr(t) });
        let o = t,
          i = o?.error?.type;
        if (e === 400) return new LFr(e, o, r, n, i);
        if (e === 401) return new k0t(e, o, r, n, i);
        if (e === 403) return new OFr(e, o, r, n, i);
        if (e === 404) return new I0t(e, o, r, n, i);
        if (e === 409) return new NFr(e, o, r, n, i);
        if (e === 422) return new $Fr(e, o, r, n, i);
        if (e === 429) return new FFr(e, o, r, n, i);
        if (e >= 500) return new UFr(e, o, r, n, i);
        return new hi(e, o, r, n, i);
      }
    };
    Ty = class Ty extends hi {
      constructor({ message: e } = {}) {
        super(void 0, void 0, e || "Request was aborted.", void 0);
      }
    };
    MO = class MO extends hi {
      constructor({ message: e, cause: t }) {
        super(void 0, void 0, e || "Connection error.", void 0);
        if (t) this.cause = t;
      }
    };
    hye = class hye extends MO {
      constructor({ message: e } = {}) {
        super({ message: e ?? "Request timed out." });
      }
    };
    LFr = class LFr extends hi {};
    k0t = class k0t extends hi {};
    OFr = class OFr extends hi {};
    I0t = class I0t extends hi {};
    NFr = class NFr extends hi {};
    $Fr = class $Fr extends hi {};
    FFr = class FFr extends hi {};
    UFr = class UFr extends hi {};
  });
