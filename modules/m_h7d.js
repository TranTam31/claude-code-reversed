// Module: h7d (lines 584694-584716)
  var h7d = S(() => {
    Mg();
    Ge();
    Zt();
    zt();
    Dy();
    f7d = Se(() =>
      Re.object({
        action: Re.enum(["proceed", "confirm", "blocked"]),
        billing_note: Re.string().nullable().optional(),
        confirm: Re.object({ title: Re.string().optional(), body: Re.string() })
          .nullable()
          .optional(),
        blocked: Re.object({
          message: Re.string(),
          action_url: Re.string().nullable(),
          reason: Re.string().optional(),
        })
          .nullable()
          .optional(),
      }),
    );
  });
