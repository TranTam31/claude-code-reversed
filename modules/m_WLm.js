// Module: WLm (lines 1015302-1015338)
  var WLm = S(() => {
    Mg();
    st();
    f0e();
    XyE = /\r?\n\r?\n/;
    ((ivl = Se(() =>
      Re.object({
        input_tokens: Re.number().optional(),
        output_tokens: Re.number().optional(),
        cache_read_input_tokens: Re.number().optional(),
        cache_creation_input_tokens: Re.number().optional(),
        speed: Re.string().nullable().optional(),
        server_tool_use: Re.object({
          web_search_requests: Re.number().optional(),
        })
          .passthrough()
          .optional(),
      }).passthrough(),
    )),
      (t_E = Se(() =>
        Re.object({
          type: Re.string().optional(),
          usage: ivl().optional(),
          message: Re.object({ usage: ivl().optional() })
            .passthrough()
            .optional(),
          delta: Re.object({
            text: Re.string().optional(),
            partial_json: Re.string().optional(),
            thinking: Re.string().optional(),
          })
            .passthrough()
            .optional(),
        }).passthrough(),
      )),
      (r_E = Se(() => Re.object({ usage: ivl().optional() }).passthrough())));
  });
