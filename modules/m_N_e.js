// Module: N_e (lines 141702-141732)
  var N_e = S(() => {
    Mg();
    pt();
    Zr();
    Eo();
    hn();
    Ge();
    qA();
    PQt();
    ts();
    lug = Se(() =>
      Re.object({
        enabled: Re.boolean().optional(),
        planLimitsEndDate: Re.string().optional(),
        hideRateLimitsDescription: Re.boolean().optional(),
        overageConsentRequired: Re.boolean().optional(),
      }),
    );
    mUc = {};
    ((dug = Se(() => Re.array(Re.string()))), (hUc = ["enterprise"]));
    mug = Se(() =>
      Re.object({
        subline: Re.string().min(1).optional(),
        option: Re.object({
          label: Re.string().min(1),
          message: Re.string().min(1),
        }).optional(),
        dialogNote: Re.string().min(1).optional(),
      }),
    );
  });
