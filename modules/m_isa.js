// Module: isa (lines 693756-693861)
  var isa = S(() => {
    Mg();
    Pr();
    wab = Se(() =>
      Re.discriminatedUnion("type", [
        Re.object({
          type: Re.literal("regex"),
          name: Re.string(),
          target: DRp().default("last_message"),
          pattern: Re.string(),
          flags: Re.string()
            .regex(/^[dgimsuvy]*$/, "must be JS RegExp flags (d g i m s u v y)")
            .default(""),
          match: Re.union([
            Re.enum(["contains", "not_contains"]),
            Re.string().regex(
              /^count:\d+$/,
              "must be contains | not_contains | count:N",
            ),
          ]).default("contains"),
          weight: Re.number().positive().default(1),
          arm: jvr(),
        }).strict(),
        Re.object({
          type: Re.literal("tool_order"),
          name: Re.string(),
          before: PRp(),
          after: PRp(),
          weight: Re.number().positive().default(1),
          arm: jvr(),
        }).strict(),
        Re.object({
          type: Re.literal("tool_used"),
          name: Re.string(),
          tool: Re.string(),
          input_match: Re.string().optional(),
          min: Re.number().int().nonnegative().optional(),
          max: Re.number().int().nonnegative().optional(),
          weight: Re.number().positive().default(1),
          arm: jvr(),
        }).strict(),
        Re.object({
          type: Re.literal("file_exists"),
          name: Re.string(),
          path: Re.string(),
          exists: Re.boolean().default(!0),
          weight: Re.number().positive().default(1),
          arm: jvr(),
        }).strict(),
        Re.object({
          type: Re.literal("llm"),
          name: Re.string(),
          criteria: Re.string(),
          focus: DRp().default("last_message"),
          weight: Re.number().positive().default(1),
          arm: jvr(),
        }).strict(),
        Re.object({
          type: Re.literal("baseline"),
          name: Re.string(),
          baseline_file: Re.string(),
          criteria: Re.string(),
          weight: Re.number().positive().default(1),
          arm: jvr(),
        }).strict(),
      ]),
    );
    Tab = Se(() =>
      Re.object({
        schema_version: Re.string(),
        name: Re.string().min(1),
        description: Re.string().optional(),
        tags: Re.array(Re.string()).default([]),
        plugins: Re.array(Re.string()).optional(),
        context: Re.object({
          scaffold_script: Re.string().optional(),
          history_file: Re.string().optional(),
          add_dirs: Re.array(Re.string()).default([]),
        }).default({ add_dirs: [] }),
        execution: Re.object({
          prompt: Re.string().optional(),
          max_turns: Re.number().int().positive().max(200).default(10),
          timeout_seconds: Re.number().int().positive().max(3600).default(300),
          model: Re.string().optional(),
          allowed_tools: Re.array(Re.string()).default([]),
          append_system_prompt: Re.string().optional(),
          env: Re.record(Re.string(), Re.string()).default({}),
        }),
        runs: Re.number().int().positive().max(50).default(3),
        graders: Re.array(wab())
          .min(1)
          .superRefine((e, t) => {
            let r = new Set();
            for (let n of e) {
              if (r.has(n.name))
                t.addIssue({
                  code: Re.ZodIssueCode.custom,
                  message: `duplicate grader name "${n.name}"`,
                });
              r.add(n.name);
            }
          }),
        expected_outcome: Re.string().optional(),
      }),
    );
  });
