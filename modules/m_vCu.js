// Module: vCu (lines 253334-253343)
  var vCu = S(() => {
    Vn();
    ((Duo = Se(() => tc.enum(["allow", "deny", "ask"]))),
      (Puo = Se(() =>
        tc.object({
          toolName: tc.string(),
          ruleContent: tc.string().optional(),
        }),
      )));
  });
