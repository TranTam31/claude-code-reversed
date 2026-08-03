// Module: fAd (lines 467544-467608)
  var fAd = S(() => {
    Vn();
    Ss();
    Ar();
    Zt();
    ((Vqy = Se(() => v.strictObject({}))),
      (qqy = Se(() =>
        v.object({
          role: v.string().optional(),
          dismissed: v.boolean().optional(),
        }),
      )));
    pAd = Ui({
      name: umr,
      searchHint: "show the Cowork onboarding role picker",
      maxResultSizeChars: 1e4,
      get inputSchema() {
        return Vqy();
      },
      get outputSchema() {
        return qqy();
      },
      isEnabled: zqy,
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
      },
      requiresUserInteraction() {
        return !0;
      },
      async description() {
        return uAd;
      },
      async prompt() {
        return dAd;
      },
      toAutoClassifierInput() {
        return "show onboarding role picker";
      },
      async checkPermissions(e, t) {
        return {
          behavior: "ask",
          message: "Pick your role?",
          updatedInput: {},
        };
      },
      async call(e, t) {
        let { role: r, dismissed: n } = e;
        return {
          data: {
            ...(typeof r === "string" && r.trim() !== "" && { role: r }),
            ...(typeof n === "boolean" && { dismissed: n }),
          },
        };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return { tool_use_id: t, type: "tool_result", content: Ie(e) };
      },
      renderToolUseMessage() {
        return null;
      },
    });
  });
