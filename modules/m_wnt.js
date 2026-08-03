// Module: WNt (lines 450864-450894)
  var WNt = S(() => {
    Vn();
    pt();
    Lm();
    Eo();
    Ge();
    ts();
    Dh();
    Un();
    _v();
    Nfr();
    (($fr = Se(() =>
      v.object({
        method: v.literal("notifications/claude/channel"),
        params: v.object({
          content: v.string(),
          meta: v.record(v.string(), v.string()).optional(),
        }),
      }),
    )),
      (VMs = Se(() =>
        v.object({
          method: v.literal(Pxo),
          params: v.object({
            request_id: v.string(),
            behavior: v.enum(["allow", "deny"]),
          }),
        }),
      )),
      (rSd = /^[a-zA-Z_][a-zA-Z0-9_]*$/));
  });
