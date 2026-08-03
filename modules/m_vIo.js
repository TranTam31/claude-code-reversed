// Module: vIo (lines 484637-484661)
  var vIo = S(() => {
    _Q();
    Vn();
    gIo();
    f4();
    ES();
    H4();
    om();
    pNs();
    fmr();
    EIo();
    JYy = Se(() =>
      v.object({
        success: v.literal(!0),
        pin: v.object({
          name: v.string().min(1).max(200),
          id: v
            .string()
            .max(1024)
            .refine((e) => jne(e) !== null),
          ref: v.string().regex(/^[0-9a-f]{6,12}$/),
        }),
      }),
    );
  });
