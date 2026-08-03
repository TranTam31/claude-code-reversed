// Module: mRs (lines 410418-410443)
  var mRs = S(() => {
    Zg();
    Mg();
    PEe();
    b1t();
    Ge();
    ja();
    st();
    ts();
    zB();
    oFy = Se(() =>
      Re.object({
        url: Re.string().optional().default(""),
        destination_url: Re.string().nullable().optional(),
        title: Re.string().optional().default(""),
        text: Re.string().optional().default(""),
        content_type: Re.string().nullable().optional(),
        error: Re.object({
          error_type: Re.string(),
          error_message: Re.string(),
        })
          .nullable()
          .optional(),
      }),
    );
  });
