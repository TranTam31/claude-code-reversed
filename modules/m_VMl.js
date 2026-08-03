// Module: VMl (lines 33111-33128)
  var VMl = S(() => {
    jMl = x(require("stream"));
    WMl = class WMl extends jMl.default.Transform {
      __transform(e, t, r) {
        (this.push(e), r());
      }
      _transform(e, t, r) {
        if (e.length !== 0) {
          if (((this._transform = this.__transform), e[0] !== 120)) {
            let n = Buffer.alloc(2);
            ((n[0] = 120), (n[1] = 156), this.push(n, t));
          }
        }
        this.__transform(e, t, r);
      }
    };
    GMl = WMl;
  });
