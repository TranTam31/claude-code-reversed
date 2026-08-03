// Module: $Kr (lines 237315-237402)
  var $Kr = S(() => {
    PDt();
    olt();
    mHe();
    Ais();
    UKr();
    Tis = Symbol.for("@bufbuild/cel/map");
    hAu = class hAu {
      _map;
      [Tis] = {};
      constructor(e) {
        this._map = e;
      }
      get size() {
        return this._map.size;
      }
      get(e) {
        if (O8(e)) e = e.value;
        if (typeof e === "number") {
          if (!Number.isInteger(e)) return;
          e = BigInt(e);
        }
        let t = this._map.get(e);
        if (t !== void 0) return hHe(t);
        if (typeof e === "bigint")
          for (let r of this._map.keys()) {
            if (!O8(r)) continue;
            if (r.value === e) return hHe(this._map.get(r));
          }
        return;
      }
      has(e) {
        return this.get(e) != null;
      }
      forEach(e, t) {
        this._map.forEach((r, n, o) => e.call(t, hHe(r), n, this));
      }
      *entries() {
        for (let [e, t] of this._map.entries()) yield [e, hHe(t)];
      }
      keys() {
        return this._map.keys();
      }
      *values() {
        for (let e of this._map.values()) yield hHe(e);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
    gAu = class gAu {
      _map;
      [Tis] = {};
      constructor(e) {
        this._map = e;
      }
      get size() {
        return this._map.size;
      }
      get(e) {
        let t = this._map.get(mAu(this._map.field(), e));
        if (t === void 0) return;
        return uco(this._map.field(), t);
      }
      has(e) {
        return this._map.has(mAu(this._map.field(), e));
      }
      forEach(e, t) {
        this._map.forEach((r, n, o) =>
          e.call(t, uco(this._map.field(), r), wis(this._map.field(), n), this),
        );
      }
      *entries() {
        for (let [e, t] of this._map.entries())
          yield [wis(this._map.field(), e), uco(this._map.field(), t)];
      }
      *keys() {
        for (let e of this._map.keys()) yield wis(this._map.field(), e);
      }
      *values() {
        for (let e of this._map.keys()) yield uco(this._map.field(), e);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
    yYA = NKr(new Map());
  });
