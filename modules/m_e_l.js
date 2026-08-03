// Module: e_l (lines 980428-980452)
  var e_l = S(() => {
    Mg();
    qm();
    st();
    zt();
    vt();
    Dy();
    ((zlE = Se(() => {
      let e = Re.string()
          .nullish()
          .transform((n) => n ?? ""),
        t = Re.object({
          id: e,
          name: e,
          description: e,
          version: e,
          directory: e,
        }),
        r = Re.array(t)
          .nullish()
          .transform((n) => n ?? []);
      return Re.object({ skills: r, plugins: r }).strict();
    })),
      (xTm = new Set()));
  });
