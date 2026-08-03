// Module: K_o (lines 336032-336054)
  var K_o = S(() => {
    Vn();
    Ge();
    Dh();
    Zr();
    I0();
    ((B_y = Se(() =>
      v.object({
        server_instructions: v.string().optional(),
        server_instructions_by_server: v
          .record(v.string(), v.string())
          .optional(),
        tools: v.record(v.string(), v.string()).optional(),
        search_hints: v.record(v.string(), v.string()).optional(),
        param_descriptions: v
          .record(v.string(), v.record(v.string(), v.string()))
          .optional(),
        prompts: v.record(v.string(), v.string()).optional(),
        skills: v.record(v.string(), v.string()).optional(),
      }),
    )),
      (j_y = Se(() => v.record(v.string(), v.unknown()))));
  });
