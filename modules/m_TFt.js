// Module: TFt (lines 528307-528434)
  var TFt = S(() => {
    Zg();
    _Q();
    Eo();
    Mg();
    pt();
    Wu();
    s$();
    hn();
    Ge();
    n_();
    Ar();
    st();
    bQt();
    PM();
    Ir();
    mj();
    i_();
    si();
    ts();
    gde();
    jp();
    Oer();
    zt();
    vt();
    FHt();
    fJi();
    ast();
    Ml_ = Se(() =>
      Re.object({
        client_data: Re.record(Re.unknown()).nullish(),
        additional_model_options: Re.array(
          Re.object({
            model: Re.string(),
            name: Re.string(),
            description: Re.string(),
            disabled_reason: Re.string().nullish(),
          }).transform(
            ({ model: e, name: t, description: r, disabled_reason: n }) => {
              let o = rZ(Gu(e)),
                i = o ? mb(e) : null,
                s = r;
              if (o && i && n == null) {
                let a = r ? (r.startsWith(i) ? r : `${i} \xB7 ${r}`) : i,
                  l = UIc(e);
                s =
                  l && !ii() && !a.includes("per Mtok") ? `${a} \xB7 ${l}` : a;
              }
              return {
                value: e,
                label: n != null ? `${t} (disabled)` : t,
                description: n ? (s ? `${s} \xB7 ${n}` : n) : s,
                ...(n != null && { disabled: !0 }),
              };
            },
          ),
        ).nullish(),
        additional_model_costs: Re.record(
          Re.object({
            input_tokens: Re.number(),
            output_tokens: Re.number(),
            prompt_cache_write_tokens: Re.number(),
            prompt_cache_write_1h_tokens: Re.number().nullish(),
            prompt_cache_read_tokens: Re.number(),
            web_search_requests: Re.number().nullish(),
          }).transform((e) => ({
            inputTokens: e.input_tokens,
            outputTokens: e.output_tokens,
            promptCacheWriteTokens: e.prompt_cache_write_tokens,
            ...(e.prompt_cache_write_1h_tokens != null && {
              promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens,
            }),
            promptCacheReadTokens: e.prompt_cache_read_tokens,
            webSearchRequests: e.web_search_requests ?? 0.01,
          })),
        ).nullish(),
        model_access: Re.array(
          Re.object({
            api_name: Re.string(),
            entitled: Re.boolean(),
            max_effort_level: Re.string().nullish(),
          }).transform(({ api_name: e, entitled: t, max_effort_level: r }) => ({
            apiName: e,
            entitled: t,
            ...(r != null && { maxEffortLevel: r }),
          })),
        ).nullish(),
        org_model_default: Re.object({
          name: Re.string(),
          updated_at: Re.string(),
          data_source: Re.string(),
          override_user_selection: Re.boolean(),
        }).nullish(),
        oauth_account: Re.object({
          account_uuid: Re.string().nullish(),
          account_email: Re.string().nullish(),
          organization_uuid: Re.string().nullish(),
          organization_name: Re.string().nullish(),
          organization_type: Re.string().nullish(),
          organization_rate_limit_tier: Re.string().nullish(),
          user_rate_limit_tier: Re.string().nullish(),
          seat_tier: Re.string().nullish(),
        })
          .passthrough()
          .nullish(),
        auto_compact_windows: Re.record(Re.string(), Re.unknown()).nullish(),
        narrowed: Re.boolean().nullish(),
      }),
    );
    J2s(() => {
      try {
        return Zno(qPo());
      } catch (e) {
        return (xe(e), "bi1-key-unavailable");
      }
    });
    Ol_ = Se(() =>
      Re.object({
        data: Re.array(
          Re.object({
            id: Re.string(),
            display_name: Re.string().nullish(),
            description: Re.string().nullish(),
          }),
        ),
      }),
    );
  });
