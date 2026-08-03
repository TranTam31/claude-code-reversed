// Module: Zzs (lines 628746-628777)
  var Zzs = S(() => {
    pt();
    Ge();
    Ar();
    Qr();
    st();
    Jv();
    WK();
    ts();
    Ei();
    Zt();
    Mg();
    ((Hlp = require("fs/promises")),
      (klp = require("path")),
      (Xzs = new Set(QOe)),
      ($B_ = new Set([
        ...Jye,
        ...QOe.filter((e) => e !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL"),
        "ANTHROPIC_CUSTOM_HEADERS",
        "CLAUDE_CODE_SKIP_VERTEX_AUTH",
      ])),
      (FB_ = Se(() => {
        let e = Re.union([Re.number(), Re.string()]).pipe(Re.coerce.number());
        return Re.object({
          env: Re.record(Re.string()),
          expiresAt: e.nullable().default(null),
          pid: Re.number().int(),
          procStart: e,
        });
      })),
      (Tlp = new Set()));
  });
