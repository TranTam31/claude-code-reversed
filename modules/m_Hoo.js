// Module: Hoo (lines 189712-189772)
  var Hoo = S(() => {
    Vn();
    Ge();
    zB();
    Dy();
    ltr();
    ((uQi = Se(() =>
      v.looseObject({
        id: atr(),
        path: v.string(),
        content_sha256: v.string(),
        content_size_bytes: v.number().int().nonnegative().optional(),
      }),
    )),
      (URg = Se(() =>
        v.looseObject({
          data: v.array(v.looseObject({ type: v.string() })),
          next_page: v.string().nullish(),
        }),
      )),
      (BRg = Se(() =>
        uQi().extend({ content: v.string(), updated_at: v.string() }),
      )),
      (_nu = uQi),
      (jRg = Se(() =>
        v.looseObject({
          error: v
            .looseObject({
              type: v.string().optional(),
              conflicting_path: v.string().optional(),
              conflicting_memory_id: atr().optional(),
            })
            .optional(),
        }),
      )));
    ((WRg = Se(() =>
      v.looseObject({
        message: v.string().optional(),
        error: v
          .looseObject({
            type: v.string().optional(),
            message: v.string().optional(),
          })
          .optional(),
      }),
    )),
      (GRg = new Map([
        ["memory store has reached its memory limit", "store_full"],
        ["memory store has reached its size limit", "store_full"],
        ["content must be at most 102400 bytes", "content_too_large"],
        [
          "memory content appears to contain a credential or API key; remove it before writing. If the credential is real, rotate it.",
          "content_secret",
        ],
        ["path must be at most 1024 bytes", "invalid_path"],
        ["path must be at most 20 segments deep", "invalid_path"],
        ["path must not contain . or .. segments", "invalid_path"],
        ["path must not contain control or format characters", "invalid_path"],
        ["path must be NFC-normalized", "invalid_path"],
      ])));
  });
