// Module: bor (lines 254273-254316)
  var bor = S(() => {
    pt();
    ky();
    Un();
    aSe();
    WCu = require("path");
    Las = {
      userSettings: {
        description: "User settings (~/.claude/settings.json)",
        header: "User Settings",
        inline: "User",
      },
      projectSettings: {
        description: "Project settings (.claude/settings.json)",
        header: "Project Settings",
        inline: "Project",
      },
      localSettings: {
        description: "Local settings (.claude/settings.local.json)",
        header: "Local Settings",
        inline: "Local",
      },
      policySettings: {
        description: "policySettings",
        header: "policySettings",
        inline: "policySettings",
      },
      pluginHook: {
        description: "Plugin hooks (~/.claude/plugins/*/hooks/hooks.json)",
        header: "Plugin Hooks",
        inline: "Plugin",
      },
      sessionHook: {
        description: "Session hooks (in-memory, temporary)",
        header: "Session Hooks",
        inline: "Session",
      },
      builtinHook: {
        description: "Built-in hooks (registered internally by Claude Code)",
        header: "Built-in Hooks",
        inline: "Built-in",
      },
    };
  });
