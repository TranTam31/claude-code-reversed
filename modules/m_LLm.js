// Module: LLm (lines 1015044-1015068)
  var LLm = S(() => {
    Mg();
    f0e();
    JEl();
    u_i();
    RLm();
    PLm = require("crypto");
    GyE = Se(() =>
      Re.object({
        scope: Re.discriminatedUnion("type", [
          Re.object({ type: Re.literal("user"), user_id: Re.string().min(1) }),
          Re.object({
            type: Re.literal("rbac_group"),
            rbac_group_id: Re.string().min(1),
          }),
          Re.object({ type: Re.literal("organization") }),
        ]),
        amount: Re.string()
          .regex(/^\d{1,18}$/, "must be a whole-number decimal string of cents")
          .nullable(),
        period: Re.enum(["daily", "weekly", "monthly"]).default("monthly"),
        currency: Re.literal("USD").optional(),
      }),
    );
  });
