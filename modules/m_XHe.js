// Module: XHe (lines 282179-282209)
  var XHe = S(() => {
    g$e();
    Vn();
    kee();
    Mw();
    Ge();
    Qr();
    st();
    vDt();
    Zt();
    Z$e();
    ((esr = require("fs/promises")), (eze = require("path")));
    mFe = FT([]);
    ((tsr = foe(async () => {
      let e = fd("themes") ? [] : await NXr(dMt(), "user");
      return (
        (OXr = new Map(e.map((t) => [t.slug, t.base]))),
        Zfo(mFe.getState()),
        e.sort((t, r) => t.name.localeCompare(r.name)),
        (Dps = e),
        e
      );
    })),
      (Piy = Se(() =>
        v.object({
          name: v.string(),
          base: v.string(),
          overrides: v.record(v.string(), v.string()),
        }),
      )));
  });
