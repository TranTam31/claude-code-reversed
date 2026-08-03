// Module: y7r (lines 263755-263780)
  var y7r = S(() => {
    Vn();
    odo();
    zt();
    vt();
    g7r();
    Ge();
    st();
    Qr();
    CPt();
    ((Mdo = require("crypto")),
      (qie = require("fs/promises")),
      (V$e = require("path")),
      (SQg = kdo * 24 * 60 * 60 * 1000));
    ((vQg = /^[0-9a-f]{64}$/),
      (AQg = Se(() =>
        v.object({
          path: v.string(),
          file_name: v.string(),
          file_size: v.number().int().nonnegative(),
          sha256: v.string().regex(vQg),
          media_type: v.string().optional(),
        }),
      )),
      (oiw = Se(() => v.array(AQg()))));
  });
