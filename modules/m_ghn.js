// Module: ghn (lines 648920-648980)
  var ghn = S(() => {
    Vn();
    zt();
    jA();
    xS();
    ESe();
    kpe();
    Qr();
    Jv();
    em();
    E1();
    Y7();
    Zt();
    RHt();
    q9s();
    ((Ump = require("fs/promises")),
      (Bmp = require("path")),
      (J2t = [
        "dontAsk",
        "auto",
        "default",
        "acceptEdits",
        "plan",
        "bypassPermissions",
      ]),
      (XYs = Se(() =>
        v
          .object({
            id: v.string().min(1),
            cron: v
              .string()
              .refine((e) => z8(e) !== null, {
                message: "invalid 5-field cron expression",
              }),
            prompt: v.string().min(1),
            directory: v.string().min(1),
            enabled: v.boolean().default(!0),
            permissionMode: v
              .enum([...J2t, t1e])
              .transform((e) => (e === t1e ? "default" : e))
              .default("dontAsk"),
            model: v.string().optional(),
            runTimeoutMinutes: v.number().positive().max(jmp).default(30),
            maxQueued: v.number().int().positive().default(1),
          })
          .strict(),
      )),
      (JYs = Se(() =>
        v
          .object({
            tasks: v
              .array(XYs())
              .default([])
              .refine((e) => new Set(e.map((t) => t.id)).size === e.length, {
                message: "task ids must be unique",
              }),
            maxConcurrent: v.number().int().positive().default(1),
          })
          .strict(),
      )));
  });
