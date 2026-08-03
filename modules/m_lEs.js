// Module: LEs (lines 340375-340391)
  var LEs = S(() => {
    Vn();
    Qr();
    vDt();
    Ir();
    ((Dzu = require("crypto")),
      (ybo = require("fs/promises")),
      (o9e = require("path")),
      (tEy = Se(() =>
        v.object({
          uri: v.string().optional(),
          cacheKey: v.string(),
          declaredDigest: v.string().optional(),
          fetchedAt: v.number(),
        }),
      )));
  });
