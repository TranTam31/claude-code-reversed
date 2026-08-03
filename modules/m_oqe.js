// Module: oqe (lines 188500-188533)
  var oqe = S(() => {
    Vn();
    ei();
    Ge();
    Ar();
    hn();
    Eo();
    Qr();
    Qa();
    zB();
    Vu();
    MJi();
    vt();
    Zr();
    zt();
    yRg = Se(() =>
      v.object({
        path: v.string().min(1),
        mode: v.enum(["rw", "ro"]),
        kind: v.string().optional(),
        grouping_id: v.string().optional(),
        visibility: v
          .string()
          .max(64)
          .optional()
          .catch(void 0),
        prompt_index: v
          .string()
          .max(512)
          .optional()
          .catch(void 0),
      }),
    );
  });
