// Module: q7 (lines 449117-449227)
  var q7 = S(() => {
    Vn();
    zDs();
    PEe();
    QDs();
    _fr();
    eyd();
    RNt();
    Wu();
    zt();
    Zr();
    EM();
    Dy();
    WC();
    Ge();
    n_();
    ja();
    st();
    Zt();
    Pr();
    LCo();
    OCo();
    Uin();
    XDs();
    yfr();
    rMs();
    Ebd = require("crypto");
    TGy = Se(() =>
      v.object({
        version: v.string().regex(_2e),
        capabilities: v.array(v.string().regex(DCo)).max(256),
      }),
    );
    ((RGy = new Set(["remote", "remote_cowork"])),
      (DGy = new Set([403, 407, 451, 502, 503, 504, 511])),
      (MGy = Se(() =>
        v.object({
          contract: v.string().max(64),
          capabilities: v.record(v.string().max(64), v.unknown()).nullish(),
        }),
      )));
    NGy = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8})*$/;
    WGy = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
    Pfr = new Set();
    hMs = /unknown field|not a recognized|not allowlisted/i;
    ((gft = new Set([
      "text/html",
      "text/css",
      "text/plain",
      "text/markdown",
      "text/javascript",
      "application/javascript",
      "application/json",
      "application/manifest+json",
      "application/xml",
      "text/xml",
      "image/svg+xml",
    ])),
      (YGy = new Set([
        ...gft,
        "application/wasm",
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/avif",
        "image/x-icon",
        "image/vnd.microsoft.icon",
        "font/woff",
        "font/woff2",
        "font/ttf",
        "font/otf",
        "application/font-woff",
        "application/font-woff2",
        "audio/mpeg",
        "audio/ogg",
        "audio/wav",
        "audio/webm",
        "video/mp4",
        "video/webm",
        "video/ogg",
        "application/pdf",
      ])),
      (XGy = new Set(["image/svg+xml", "text/xml", "application/xml"])),
      (_bd = /\b(manifest|mode)\b/));
    Sxo = ["mine", "shared"];
    ((CMs = ["mine", "shared", "all"]),
      (r5y = Se(() => v.object({ frames: v.array(v.unknown()).nullable() }))),
      (n5y =
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/),
      (o5y = Se(() =>
        v.object({
          slug: v.string().regex(Fqr),
          title: v.string().max(4000).optional(),
          rel: v.string(),
          updatedAt: v
            .string()
            .regex(n5y)
            .optional()
            .catch(void 0),
          softDeleted: v.boolean().optional(),
        }),
      )));
    c5y = [
      "compliance_restricted",
      "org_mismatch",
      "org_toggle_disabled",
      "user_entitlement_denied",
      "write_gate_disabled",
    ];
  });
