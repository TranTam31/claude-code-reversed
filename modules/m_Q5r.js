// Module: Q5r (lines 148282-148317)
  var Q5r = S(() => {
    KGc = class KGc {
      constructor(e) {
        if (((this._headersMap = new Map()), e))
          for (let t of Object.keys(e)) this.set(t, e[t]);
      }
      set(e, t) {
        this._headersMap.set(jQn(e), { name: e, value: String(t).trim() });
      }
      get(e) {
        var t;
        return (t = this._headersMap.get(jQn(e))) === null || t === void 0
          ? void 0
          : t.value;
      }
      has(e) {
        return this._headersMap.has(jQn(e));
      }
      delete(e) {
        this._headersMap.delete(jQn(e));
      }
      toJSON(e = {}) {
        let t = {};
        if (e.preserveCase)
          for (let r of this._headersMap.values()) t[r.name] = r.value;
        else for (let [r, n] of this._headersMap) t[r] = n.value;
        return t;
      }
      toString() {
        return JSON.stringify(this.toJSON({ preserveCase: !0 }));
      }
      [Symbol.iterator]() {
        return rfg(this._headersMap);
      }
    };
  });
