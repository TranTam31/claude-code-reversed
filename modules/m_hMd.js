// Module: hMd (lines 509453-509500)
  var hMd = S(() => {
    Vn();
    Zt();
    ltr();
    ((cMd = require("string_decoder")),
      (uMd = Se(() => v.looseObject({ type: v.string() }))),
      (ht_ = Se(() =>
        v.looseObject({
          type: v.literal("memory"),
          id: atr(),
          path: v.string(),
          content: v.string(),
          content_sha256: v.string(),
          updated_at: v.string(),
        }),
      )),
      (dMd = Se(() =>
        v.looseObject({
          type: v.literal("complete"),
          memory_count: v.number().int().nonnegative(),
          error_count: v.number().int().nonnegative().optional(),
        }),
      )));
    Kln = class Kln extends Error {
      constructor(e) {
        super(`NDJSON line exceeds ${e} bytes`);
        this.name = "LineTooLongError";
      }
    };
    Yln = class Yln extends Error {
      constructor() {
        super("NDJSON stream exceeded its line budget");
        this.name = "TooManyLinesError";
      }
    };
    ((gt_ = Se(() =>
      v.looseObject({ type: v.literal("store"), view: v.string().optional() }),
    )),
      (yt_ = Se(() =>
        v.looseObject({
          type: v.literal("memory"),
          id: atr(),
          path: v.string(),
          content_sha256: v.string(),
          content_size_bytes: v.number().int().nonnegative().optional(),
        }),
      )));
  });
