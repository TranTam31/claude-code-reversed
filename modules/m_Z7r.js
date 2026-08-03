// Module: Z7r (lines 271620-271647)
  var Z7r = S(() => {
    Vn();
    Zr();
    kpe();
    Ley = Se(() =>
      v
        .object({
          recurringFrac: v.number().min(0).max(1),
          recurringCapMs: v.number().int().min(0).max(Cus),
          oneShotMaxMs: v.number().int().min(0).max(Cus),
          oneShotFloorMs: v.number().int().min(0).max(Cus),
          oneShotMinuteMod: v.number().int().min(1).max(60),
          recurringMaxAgeMs: v
            .number()
            .int()
            .min(0)
            .max(Mey)
            .default(Hpe.recurringMaxAgeMs),
          cacheLeadMs: v
            .number()
            .int()
            .min(0)
            .max(60000)
            .default(Hpe.cacheLeadMs),
        })
        .refine((e) => e.oneShotFloorMs <= e.oneShotMaxMs),
    );
  });
