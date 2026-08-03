// Module: $qs (lines 609736-609755)
  var $qs = S(() => {
    Vn();
    Z5();
    ix();
    Hfn = Se(() =>
      v.object({
        ok: v.boolean().describe("Whether the condition was met"),
        reason: v
          .string()
          .describe("Reason, if the condition was not met")
          .optional(),
        impossible: v
          .boolean()
          .describe(
            "Whether the condition can never be satisfied (only meaningful when ok is false)",
          )
          .optional(),
      }),
    );
  });
