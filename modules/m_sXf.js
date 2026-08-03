// Module: SXf (lines 902190-902212)
  var SXf = S(() => {
    Ir();
    Vn();
    uV();
    ox();
    ((CPn = x(ot(), 1)),
      (TBS = Se(() =>
        v.object({
          method: v.literal("selection_changed"),
          params: v.object({
            selection: v
              .object({
                start: v.object({ line: v.number(), character: v.number() }),
                end: v.object({ line: v.number(), character: v.number() }),
              })
              .nullable()
              .optional(),
            text: v.string().optional(),
            filePath: v.string().optional(),
          }),
        }),
      )));
  });
