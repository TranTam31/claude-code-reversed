// Module: mCd (lines 478814-478849)
  var mCd = S(() => {
    Vn();
    Van();
    Ss();
    st();
    zko();
    pKy = Se(() => v.strictObject({ keywords: lCd() }));
    ((R1s = fCd({
      name: "SearchPlugins",
      noun: "plugin",
      run: q0d,
      description:
        "Search the user's claude.ai plugin catalog by keyword to find plugins that might help complete the task.",
      prompt: `Search the user's claude.ai plugin catalog by keyword. Call this when a plugin (slash command, skill bundle, hook, or agent) from the user's org catalog might help complete the task.

Examples:
- "use the deploy plugin" \u2192 keywords ["deploy"]
- "is there something for linting?" \u2192 keywords ["lint", "format", "code quality"]

Returns a ranked list with id, name, description, and whether the plugin is already enabled. When results fit, call SuggestPluginInstall to render the install card. If nothing relevant, proceed without mentioning that you searched.`,
    })),
      (D1s = fCd({
        name: "SearchSkills",
        noun: "skill",
        run: Vko,
        description:
          "Search the user's claude.ai skills by keyword to find skills that might help complete the task.",
        prompt: `Search the user's claude.ai skills by keyword. Call this when a skill (a reference document or instruction set the user has uploaded or enabled) might help complete the task.

Examples:
- "follow the team's PR guidelines" \u2192 keywords ["pr", "review", "guidelines"]
- "export this as a slide deck" \u2192 keywords ["pptx", "slides", "presentation"]

Returns a ranked list with id, name, description, and whether the skill is enabled. When results fit, call SuggestSkills to render the add card. If nothing relevant, proceed without mentioning that you searched.`,
      })));
  });
