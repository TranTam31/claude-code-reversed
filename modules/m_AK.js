// Module: Ak (lines 179308-179353)
  var Ak = S(() => {
    Zg();
    Wu();
    KB();
    PM();
    Vn();
    zt();
    Eo();
    Ge();
    ja();
    Iro();
    DI();
    st();
    Ir();
    ts();
    Zt();
    ((P7i = require("crypto")),
      (xZc = [2000, 4000, 8000, 16000]),
      (D7i = xZc.length));
    Yxg = Se(() =>
      tc.object({
        id: tc.string(),
        title: tc.string(),
        description: tc.string(),
        status: tc.enum([
          "idle",
          "working",
          "waiting",
          "completed",
          "archived",
          "cancelled",
          "rejected",
        ]),
        repo: tc
          .object({
            name: tc.string(),
            owner: tc.object({ login: tc.string() }),
            default_branch: tc.string().optional(),
          })
          .nullable(),
        turns: tc.array(tc.string()),
        created_at: tc.string(),
        updated_at: tc.string(),
      }),
    );
  });
