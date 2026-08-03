// Module: Twd (lines 472470-472495)
  var Twd = S(() => {
    Mg();
    b1t();
    ja();
    ts();
    mRs();
    hzy = Se(() =>
      Re.object({
        results: Re.array(
          Re.object({
            title: Re.string().optional().default(""),
            url: Re.string().optional().default(""),
            snippet: Re.string().optional().default(""),
          }),
        )
          .optional()
          .default([]),
        error: Re.object({
          error_type: Re.string(),
          error_message: Re.string(),
        })
          .nullable()
          .optional(),
      }),
    );
  });
