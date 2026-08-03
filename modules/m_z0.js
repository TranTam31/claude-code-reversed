// Module: z0 (lines 621090-621122)
  var z0 = S(() => {
    bl();
    pt();
    Gb();
    np();
    ei();
    Ge();
    Qr();
    st();
    czr();
    Wi();
    Ir();
    Un();
    XHt();
    ((Vsp = require("crypto")),
      (qsp = require("fs/promises")),
      (qV = require("path")),
      (GYe = new Map()));
    y_ = qr(function () {
      let r = eo().plansDirectory;
      if (r) {
        let n = kt(),
          o = qV.resolve(n, r);
        if (l2_(o, n)) return o;
        w(`plansDirectory must be within project root: ${r}`, {
          level: "error",
        });
      }
      return zsp();
    });
    u2_ = /^[a-z0-9][a-z0-9-]{0,119}$/;
    Gsp = Promise.resolve();
  });
