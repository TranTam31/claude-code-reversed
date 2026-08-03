// Module: hai (lines 869603-869632)
  var hai = S(() => {
    Zg();
    Vn();
    zt();
    Ge();
    CPt();
    y7r();
    mSe();
    odo();
    ((c3f = require("crypto")),
      (_Dr = require("fs/promises")),
      (u3f = require("path")));
    gHS = Se(() =>
      v.object({
        file_uuid: v.string(),
        file_name: v.string(),
        is_image: v.boolean().nullish(),
        sha256: v.string().nullish().catch(null),
        file_size: v
          .number()
          .nullish()
          .catch(void 0),
      }),
    );
    _HS = {
      download: "it could not be downloaded",
      digest_mismatch: "it failed integrity verification",
      write: "it could not be written to the uploads directory",
    };
  });
