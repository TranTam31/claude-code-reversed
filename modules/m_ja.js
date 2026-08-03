// Module: jA (lines 67582-67622)
  var jA = S(() => {
    ((Qye = [
      "acceptEdits",
      "auto",
      "bypassPermissions",
      "default",
      "dontAsk",
      "plan",
    ]),
      (qGn = [...Qye]),
      (t5 = qGn));
    r1e = `Cannot set permission mode: must be one of ${qGn.join(", ")}`;
    ((qMi = [
      "rule",
      "mode",
      "subcommandResults",
      "permissionPromptTool",
      "hook",
      "asyncAgent",
      "sandboxOverride",
      "workingDir",
      "safetyCheck",
      "classifier",
      "other",
    ]),
      (G4r = { type: "asyncAgent", reason: zGn }),
      (KMi = {
        type: "asyncAgent",
        reason:
          "tool requires user interaction; no prompt available in headless mode",
      }),
      (YMi = {
        type: "other",
        reason:
          "MCP tool requires user interaction; not supported via --permission-prompt-tool",
      }),
      (XMi = { type: "other", reason: KGn }),
      (V4r = { type: "other", reason: YGn }),
      (JMi = { type: "other", reason: XGn }),
      (n7t = { type: "other", reason: r7t }));
  });
