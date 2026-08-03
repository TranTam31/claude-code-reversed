// Module: dRm (lines 1005145-1005172)
  var dRm = S(() => {
    fK();
    bG();
    nb();
    fyi();
    hyi();
    rSl = class rSl extends c8t {
      encode() {
        let e = CC(JSON.stringify({ alg: "none" })),
          t = CC(JSON.stringify(this._payload));
        return `${e}.${t}.`;
      }
      static decode(e, t) {
        if (typeof e !== "string")
          throw new F3("Unsecured JWT must be a string");
        let { 0: r, 1: n, 2: o, length: i } = e.split(".");
        if (i !== 3 || o !== "") throw new F3("Invalid Unsecured JWT");
        let s;
        try {
          if (((s = JSON.parse(vN.decode(QR(r)))), s.alg !== "none"))
            throw Error();
        } catch (l) {
          throw new F3("Invalid Unsecured JWT");
        }
        return { payload: E1r(s, QR(n), t), header: s };
      }
    };
  });
