// Module: m7n (lines 129621-129661)
  var m7n = S(() => {
    _Q();
    bl();
    Vn();
    Eo();
    Ge();
    ja();
    Qr();
    em();
    jp();
    Iy();
    Zt();
    ts();
    ((BIc = require("fs")),
      (f7n = require("fs/promises")),
      (Nji = require("path")),
      (jIc = Se(() =>
        v
          .object({ id: v.string(), display_name: v.string().optional() })
          .strip(),
      )),
      (Mig = Se(() =>
        v.object({
          baseUrl: v.string(),
          fetchedAt: v.number(),
          models: v.array(jIc()),
        }),
      )));
    Oji = qr(
      (e) => {
        try {
          let t = BIc.readFileSync(e, "utf-8"),
            r = Mig().safeParse(Ul(t, !1));
          return r.success ? r.data : null;
        } catch {
          return null;
        }
      },
      (e) => e,
    );
  });
