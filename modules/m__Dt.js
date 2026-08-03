// Module: $Dt (lines 238066-238130)
  var $Dt = S(() => {
    Lis();
    Pos();
    f$e();
    UKr();
    j6g = Symbol.for("@bufbuild/cel/func");
    Ois = class Ois {
      _name;
      _target;
      _args;
      _result;
      _impl;
      _id;
      [j6g] = {};
      constructor(e, t, r, n, o, i = "") {
        ((this._name = e),
          (this._target = t),
          (this._args = r),
          (this._result = n),
          (this._impl = o),
          (this._id = i));
      }
      get id() {
        if (this._id === "") {
          let e = this.target ? `${this.target.name}.` : "";
          this._id = `${e}${this.name}(${this.arguments.map((t) => t.name).join(",")})`;
        }
        return this._id;
      }
      get name() {
        return this._name;
      }
      get target() {
        return this._target;
      }
      get arguments() {
        return this._args;
      }
      get result() {
        return this._result;
      }
      call(e, t, r) {
        if (r.length != this.arguments.length) return;
        for (let n = 0; n < r.length; n++)
          if (!zAu(r[n], this.arguments[n])) return;
        try {
          return hHe(this._impl.apply(t, r));
        } catch (n) {
          return IDt(n, e);
        }
      }
    };
    VAu = class VAu extends Ois {
      call(e, t, r) {
        if (t !== void 0) return;
        return super.call(e, void 0, r);
      }
    };
    qAu = class qAu extends Ois {
      call(e, t, r) {
        if (t === void 0 || !zAu(t, this.target)) return;
        return super.call(e, t, r);
      }
    };
  });
