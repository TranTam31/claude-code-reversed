// Module: qTo (lines 404064-404090)
  var qTo = S(() => {
    Mg();
    ((UNy = ["low", "medium", "high", "xhigh", "max"]),
      (GTo = Se(() =>
        Re.string()
          .min(1)
          .max(256)
          .refine((e) => !/[\r\n]/.test(e), { message: "invalid skill name" }),
      )),
      (Add = Se(() =>
        Re.object({ forkedSkill: Re.literal(!0), skillName: GTo().optional() }),
      )),
      (VTo = Se(() => {
        let e = GTo();
        return Re.object({
          skillName: e,
          attributionName: e,
          effort: Re.union([
            Re.enum(UNy),
            Re.number().int().min(1).max(1000),
          ]).optional(),
          frozenCommandDenies: Re.array(Re.string().max(1024))
            .max(1000)
            .optional(),
        });
      })));
  });
