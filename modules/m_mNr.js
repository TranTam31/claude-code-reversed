// Module: Mnr (lines 237717-237792)
  var Mnr = S(() => {
    PDt();
    Ais();
    UKr();
    pco = Symbol.for("@bufbuild/cel/list");
    TAu = class TAu {
      _array;
      [pco] = {};
      constructor(e) {
        this._array = e;
      }
      get size() {
        return this._array.length;
      }
      get(e) {
        if (e < 0 || e >= this.size) return;
        return hHe(this._array[e]);
      }
      *values() {
        for (let e of this._array.values()) yield hHe(e);
      }
      [Symbol.iterator]() {
        return this.values();
      }
    };
    CAu = class CAu {
      _list;
      [pco] = {};
      constructor(e) {
        this._list = e;
      }
      get size() {
        return this._list.size;
      }
      get(e) {
        let t = this._list.get(e);
        if (t === void 0) return;
        return AAu(this._list.field(), t);
      }
      *values() {
        for (let e of this._list) yield AAu(this._list.field(), e);
      }
      [Symbol.iterator]() {
        return this.values();
      }
    };
    xAu = class xAu {
      _lists;
      [pco] = {};
      _size;
      constructor(e) {
        this._lists = e;
        let t = 0;
        for (let r of e) t += r.size;
        this._size = t;
      }
      get size() {
        return this._size;
      }
      get(e) {
        if (e < 0 || e >= this.size) return;
        for (let t of this._lists) {
          if (e < t.size) return t.get(e);
          e = e - t.size;
        }
        return;
      }
      *values() {
        for (let e of this._lists) yield* e.values();
      }
      [Symbol.iterator]() {
        return this.values();
      }
    };
    $YA = ODt([]);
  });
