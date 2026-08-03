// Module: XPl (lines 31095-31114)
  var XPl = S(() => {
    c2r();
    KPl = zPl.prototype;
    KPl.append = function (t, r) {
      this._pairs.push([t, r]);
    };
    KPl.toString = function (t) {
      let r = t
        ? function (n) {
            return t.call(this, n, qPl);
          }
        : qPl;
      return this._pairs
        .map(function (o) {
          return r(o[0]) + "=" + r(o[1]);
        }, "")
        .join("&");
    };
    YPl = zPl;
  });
