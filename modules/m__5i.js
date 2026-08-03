// Module: _5i (lines 140809-140835)
  var _5i = S(() => {
    Vn();
    ((uJn = Se(() =>
      v.object({
        restrictions: v.record(v.string(), v.object({ allowed: v.boolean() })),
        compliance_taints: v.array(v.string()).default([]),
        monitoring_notice: v
          .object({
            text: v
              .string()
              .max(500)
              .transform((e) => e.replace(/[\x00-\x1f\x7f-\x9f]/g, "")),
            url: v.string().url().startsWith("https://").nullish().catch(null),
          })
          .nullable()
          .default(null)
          .catch(null),
        defaults: v.record(v.string(), v.unknown()).default({}).catch({}),
      }),
    )),
      (y5i = {
        restrictions: {},
        compliance_taints: [],
        monitoring_notice: null,
        defaults: {},
      }));
  });
