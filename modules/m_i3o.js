// Module: i3o (lines 644048-644069)
  var i3o = S(() => {
    dB();
    Vn();
    mSe();
    zt();
    jA();
    q9s();
    HYs = Se(() =>
      v
        .object({
          dir: v.string(),
          name: v.string().optional(),
          spawnMode: v.enum(["same-dir", "worktree"]).default("same-dir"),
          capacity: v.number().int().positive().default(32),
          permissionMode: v.preprocess(_D, v.enum(Qye)).optional(),
          sandbox: v.boolean().default(!1),
          sessionTimeoutSeconds: v.number().int().positive().optional(),
          createSessionOnStart: v.boolean().default(!1),
        })
        .strict(),
    );
  });
