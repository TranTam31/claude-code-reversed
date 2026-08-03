// Module: F$ (lines 384002-384035)
  var F$ = S(() => {
    Vn();
    pt();
    Gb();
    Ge();
    Ar();
    Qr();
    st();
    Ir();
    qh();
    Zt();
    om();
    cZ();
    ((Iid = require("fs/promises")), (tdr = require("path")), (Rid = Rs()));
    Pid = Rid.subscribe;
    ((m1t = Se(() => v.enum(["pending", "in_progress", "completed"]))),
      (NPy = Se(() =>
        v.object({
          id: v.string(),
          subject: v.string(),
          description: v.string(),
          activeForm: v.string().optional(),
          owner: v.string().optional(),
          status: m1t(),
          blocks: v.array(v.string()),
          blockedBy: v.array(v.string()),
          metadata: v.record(v.string(), v.unknown()).optional(),
        }),
      )),
      (fnn = {
        retries: { retries: 30, minTimeout: 5, maxTimeout: 100 },
        onCompromised: (e) => xe(e),
      }));
  });
