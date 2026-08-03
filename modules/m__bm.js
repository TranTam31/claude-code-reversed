// Module: _bm (lines 963471-963492)
  var _bm = S(() => {
    Vn();
    pt();
    hbm();
    Tf();
    Ge();
    st();
    Jv();
    em();
    Zt();
    ((SLe = require("fs/promises")),
      (aOn = require("path")),
      (hnE = aOn.join(".claude", "scheduled_tasks.lock")),
      (gnE = Se(() =>
        v.object({
          sessionId: v.string(),
          pid: v.number(),
          procStart: v.string().optional(),
          acquiredAt: v.number(),
        }),
      )));
  });
