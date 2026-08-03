// Module: nDi (lines 55190-55257)
  var nDi = S(() => {
    A2l();
    x2l();
    (({ stdout: I2l, stderr: R2l } = C2l),
      (eDi = Symbol("GENERATOR")),
      (yYt = Symbol("STYLER")),
      (MBr = Symbol("IS_EMPTY")),
      (D2l = ["ansi", "ansi", "ansi256", "ansi16m"]),
      (_Yt = Object.create(null)));
    Object.setPrototypeOf(LBr.prototype, Function.prototype);
    for (let [e, t] of Object.entries(gCe))
      _Yt[e] = {
        get() {
          let r = uWn(this, rDi(t.open, t.close, this[yYt]), this[MBr]);
          return (Object.defineProperty(this, e, { value: r }), r);
        },
      };
    _Yt.visible = {
      get() {
        let e = uWn(this, this[yYt], !0);
        return (Object.defineProperty(this, "visible", { value: e }), e);
      },
    };
    uAh = ["rgb", "hex", "ansi256"];
    for (let e of uAh) {
      _Yt[e] = {
        get() {
          let { level: r } = this;
          return function (...n) {
            let o = rDi(
              tDi(e, D2l[r], "color", ...n),
              gCe.color.close,
              this[yYt],
            );
            return uWn(this, o, this[MBr]);
          };
        },
      };
      let t = "bg" + e[0].toUpperCase() + e.slice(1);
      _Yt[t] = {
        get() {
          let { level: r } = this;
          return function (...n) {
            let o = rDi(
              tDi(e, D2l[r], "bgColor", ...n),
              gCe.bgColor.close,
              this[yYt],
            );
            return uWn(this, o, this[MBr]);
          };
        },
      };
    }
    dAh = Object.defineProperties(() => {}, {
      ..._Yt,
      level: {
        enumerable: !0,
        get() {
          return this[eDi].level;
        },
        set(e) {
          this[eDi].level = e;
        },
      },
    });
    Object.defineProperties(LBr.prototype, _Yt);
    ((fAh = LBr()), (aVE = LBr({ level: R2l ? R2l.level : 0 })), (RQ = fAh));
  });
