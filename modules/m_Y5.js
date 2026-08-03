// Module: Y5 (lines 268587-268690)
  var Y5 = S(() => {
    hB();
    _Q();
    Mg();
    pt();
    ZN();
    Yh();
    Eo();
    s$();
    jq();
    hn();
    Ir();
    N_e();
    si();
    jp();
    zt();
    vt();
    dH();
    ast();
    N7r();
    rir();
    rir();
    ((HZg = [
      {
        rateLimitType: "five_hour",
        claimAbbrev: "5h",
        windowSeconds: 18000,
        thresholds: [{ utilization: 0.9, timePct: 0.72 }],
      },
      {
        rateLimitType: "seven_day",
        claimAbbrev: "7d",
        windowSeconds: 604800,
        thresholds: [
          { utilization: 0.75, timePct: 0.6 },
          { utilization: 0.5, timePct: 0.35 },
          { utilization: 0.25, timePct: 0.15 },
        ],
      },
    ]),
      (kZg = {
        "5h": "five_hour",
        "7d": "seven_day",
        "7d_oi": "seven_day_overage_included",
        overage: "overage",
      }));
    xpe = {
      status: "allowed",
      unifiedRateLimitFallbackAvailable: !1,
      isUsingOverage: !1,
    };
    $Pt = {};
    ((Jlt = new Set()), (oir = new Set()));
    NZg = Se(() => {
      let e = Re.object({
          utilization: Re.number().nullable(),
          resets_at: Re.string().nullable(),
        }).passthrough(),
        t = Re.object({
          five_hour: e.nullish(),
          seven_day: e.nullish(),
          seven_day_oauth_apps: e.nullish(),
          seven_day_opus: e.nullish(),
          seven_day_sonnet: e.nullish(),
          cinder_cove: e.nullish(),
          extra_usage: Re.object({
            is_enabled: Re.boolean(),
            monthly_limit: Re.number().nullable(),
            used_credits: Re.number().nullable(),
            utilization: Re.number().nullable(),
            currency: Re.string().nullish(),
            disabled_reason: Re.string().nullish(),
          })
            .passthrough()
            .nullish(),
          limits: Re.array(
            Re.object({
              kind: Re.string(),
              group: Re.string(),
              percent: Re.number(),
              resets_at: Re.string().nullable(),
              scope: Re.object({
                model: Re.object({ display_name: Re.string() })
                  .passthrough()
                  .nullish(),
                surface: Re.object({ display_name: Re.string() })
                  .passthrough()
                  .nullish(),
              })
                .passthrough()
                .nullish(),
            }).passthrough(),
          ).nullish(),
        }).passthrough();
      return Re.object({
        fetchedAtMs: Re.number(),
        accountUuid: Re.string().optional(),
        utilization: t,
      });
    });
    wDu =
      "[Usage limit reached \u2014 grace window active. Wrap up: finish or " +
      "checkpoint; don't start subagents or long work.]";
  });
