// Module: T_l (lines 986878-986935)
  var T_l = S(() => {
    Vn();
    jl();
    unn();
    Ge();
    Ir();
    mL();
    MYr();
    bh();
    ((f5R = Se(() =>
      tc.object({
        tool_name: tc
          .string()
          .describe("The name of the tool requesting permission"),
        input: tc
          .record(tc.string(), tc.unknown())
          .describe("The input for the tool"),
        tool_use_id: tc
          .string()
          .optional()
          .describe("The unique tool use request ID"),
      }),
    )),
      (vCm = Se(() =>
        tc
          .enum(["user_temporary", "user_permanent", "user_reject"])
          .optional()
          .catch(void 0),
      )),
      (UdE = Se(() =>
        tc.object({
          behavior: tc.literal("allow"),
          updatedInput: tc.record(tc.string(), tc.unknown()).optional(),
          updatedPermissions: tc
            .array(wlt())
            .optional()
            .catch((e) => {
              w(
                `Malformed updatedPermissions from SDK host ignored: ${e.error.issues[0]?.message ?? "unknown"}`,
                { level: "warn" },
              );
              return;
            }),
          toolUseID: tc.string().optional(),
          decisionClassification: vCm(),
        }),
      )),
      (BdE = Se(() =>
        tc.object({
          behavior: tc.literal("deny"),
          message: tc.string(),
          interrupt: tc.boolean().optional(),
          toolUseID: tc.string().optional(),
          decisionClassification: vCm(),
        }),
      )),
      (n1n = Se(() => tc.union([UdE(), BdE()]))));
  });
