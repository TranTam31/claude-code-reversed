// Module: I5l (lines 69854-69963)
  var I5l = S(() => {
    Vn();
    jA();
    ((Wkh = ["autoMode", "deepLink", "voice", "briefView", "screenReader"]),
      (p5n = {
        autoMode: {
          buildGate: () => !0,
          shape: () => ({
            skipAutoPermissionPrompt: v
              .boolean()
              .optional()
              .describe(
                "Whether the user has accepted the auto mode opt-in dialog",
              ),
            useAutoModeDuringPlan: v
              .boolean()
              .optional()
              .describe(
                "Whether plan mode uses auto mode semantics when auto mode is available (default: true)",
              ),
            autoMode: v
              .object({
                allow: v
                  .array(v.string())
                  .optional()
                  .describe(
                    'Rules for the auto mode classifier allow section. Include the literal string "$defaults" to inherit the built-in rules at that position.',
                  ),
                soft_deny: v
                  .array(v.string())
                  .optional()
                  .describe(
                    'Rules for the auto mode classifier SOFT BLOCK section \u2014 destructive/irreversible actions that user intent can clear. Include the literal string "$defaults" to inherit the built-in rules at that position.',
                  ),
                hard_deny: v
                  .array(v.string())
                  .optional()
                  .describe(
                    'Rules for the auto mode classifier HARD BLOCK section \u2014 security boundaries that user intent does NOT clear. Include the literal string "$defaults" to inherit the built-in rules at that position.',
                  ),
                ...!1,
                ...{},
                environment: v
                  .array(v.string())
                  .optional()
                  .describe(
                    'Entries for the auto mode classifier environment section. Include the literal string "$defaults" to inherit the built-in entries at that position.',
                  ),
                classifyAllShell: v
                  .boolean()
                  .optional()
                  .describe(
                    "When true, every Bash/PowerShell allow rule is suspended while auto mode is active so all shell commands are routed through the classifier (higher safety, more classifier calls). Default: false.",
                  ),
              })
              .optional()
              .describe("Auto mode classifier prompt customization"),
          }),
          permissionsShape: () => ({
            disableAutoMode: v
              .enum(["disable"])
              .optional()
              .describe("Disable auto mode"),
          }),
          permissionModes: () => t5.filter((e) => !Qye.includes(e)),
        },
        deepLink: {
          buildGate: () => !0,
          shape: () => ({
            disableDeepLinkRegistration: v
              .enum(["disable"])
              .optional()
              .describe(
                "Prevent claude-cli:// protocol handler registration with the OS",
              ),
          }),
        },
        voice: {
          buildGate: () => !0,
          shape: () => ({
            voiceEnabled: v
              .boolean()
              .optional()
              .describe("Enable voice mode (hold-to-talk dictation)"),
          }),
        },
        briefView: {
          buildGate: () => !0,
          shape: () => ({
            defaultView: v
              .enum(["chat", "transcript"])
              .optional()
              .describe(
                "Default transcript view: chat (SendUserMessage checkpoints only) or transcript (full)",
              ),
          }),
        },
        screenReader: {
          buildGate: () => !0,
          shape: () => ({
            axScreenReader: v
              .boolean()
              .optional()
              .describe(
                "Render screen-reader friendly output (flat text, no decorative borders or animations). Overridden by the CLAUDE_AX_SCREEN_READER env var and the --ax-screen-reader CLI flag.",
              ),
          }),
        },
      }));
  });
