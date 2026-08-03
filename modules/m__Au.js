// Module: $Au (lines 237888-237925)
  var $Au = S(() => {
    UKr();
    MAu = Symbol.for("@bufbuild/cel/resolver");
    OAu = class OAu {
      _groups;
      [MAu] = {};
      constructor(e) {
        this._groups = e;
      }
      *[Symbol.iterator]() {
        for (let e of this._groups.values()) yield* e;
      }
      find(e) {
        return this._groups.get(e);
      }
    };
    NAu = class NAu {
      _name;
      _funcs;
      constructor(e, t) {
        ((this._name = e), (this._funcs = t));
      }
      *[Symbol.iterator]() {
        yield* this._funcs;
      }
      get name() {
        return this._name;
      }
      call(e, t, r) {
        r = r.map((n) => bAu(n));
        for (let n of this._funcs) {
          let o = n.call(e, t, r);
          if (o !== void 0) return o;
        }
        return;
      }
    };
  });
