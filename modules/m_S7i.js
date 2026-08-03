// Module: S7i (lines 178114-178155)
  var S7i = S(() => {
    _Q();
    bl();
    Vn();
    Wu();
    ast();
    Yh();
    Eo();
    Ge();
    Qr();
    em();
    jp();
    Zt();
    ts();
    ((eZc = require("fs")),
      (yro = require("fs/promises")),
      (b7i = require("path")),
      (tZc = Se(() =>
        v
          .object({
            id: v.string(),
            max_input_tokens: v.number().optional(),
            max_tokens: v.number().optional(),
          })
          .strip(),
      )),
      (Hxg = Se(() =>
        v.object({ models: v.array(tZc()), timestamp: v.number() }),
      )));
    _7i = qr(
      (e) => {
        try {
          let t = eZc.readFileSync(e, "utf-8"),
            r = Hxg().safeParse(Ul(t, !1));
          return r.success ? r.data.models : null;
        } catch {
          return null;
        }
      },
      (e) => e,
    );
  });
