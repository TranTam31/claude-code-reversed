// Module: XLt (lines 334826-334839)
  var XLt = S(() => {
    Vn();
    ((wqu = require("crypto")),
      (g_y = Se(() =>
        v.object({
          projectId: v.string(),
          writes: v.array(v.string()),
          deletes: v.array(v.string()),
          localDir: v.string().optional(),
        }),
      )),
      (OZr = new Map()),
      (y_y = /^plan_[a-z0-9]{1,16}_[a-f0-9]{12}$/));
  });
