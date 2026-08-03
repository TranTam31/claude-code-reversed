// Module: MLt (lines 318772-318871)
  var MLt = S(() => {
    bl();
    pt();
    zt();
    Ge();
    Qr();
    bHe();
    Un();
    Zt();
    YY();
    Zb();
    uVu = qr(async () => {
      try {
        let { enabled: e, errors: t } = await _h(),
          r = {
            PreToolUse: [],
            PostToolUse: [],
            PostToolUseFailure: [],
            PostToolBatch: [],
            PermissionDenied: [],
            Notification: [],
            UserPromptSubmit: [],
            UserPromptExpansion: [],
            SessionStart: [],
            SessionEnd: [],
            Stop: [],
            StopFailure: [],
            SubagentStart: [],
            SubagentStop: [],
            PreCompact: [],
            PostCompact: [],
            PermissionRequest: [],
            Setup: [],
            TeammateIdle: [],
            TaskCreated: [],
            TaskCompleted: [],
            Elicitation: [],
            ElicitationResult: [],
            ConfigChange: [],
            WorktreeCreate: [],
            WorktreeRemove: [],
            InstructionsLoaded: [],
            CwdChanged: [],
            FileChanged: [],
            DirectoryAdded: [],
            MessageDisplay: [],
          },
          n = nSe(),
          o =
            n === null
              ? e
              : [
                  ...e.filter((u) => n.has(u.source)),
                  ...e.filter((u) => !n.has(u.source)),
                ],
          i = new Set();
        for (let u of o) {
          if (!u.hooksConfig) continue;
          if (i.has(u.name)) {
            w(
              `Skipping duplicate hook registration for plugin "${u.name}" from ${u.source} - already registered from another source`,
            );
            continue;
          }
          (i.add(u.name), w(`Loading hooks from plugin: ${u.name}`));
          let d = tgy(u);
          for (let p of Object.keys(d)) r[p].push(...d[p]);
        }
        (SFn(), zGe(r));
        let s = Object.values(r).reduce(
          (u, d) => u + d.reduce((p, f) => p + f.hooks.length, 0),
          0,
        );
        w(`Registered ${s} hooks from ${e.length} plugins`);
        let a = new Set(e.map((u) => u.name)),
          l = t.filter((u) => u.type === "hook-load-failed" && a.has(u.plugin)),
          c = t.filter(
            (u) =>
              (u.type === "path-traversal" || u.type === "path-not-found") &&
              u.component === "hooks" &&
              u.plugin !== void 0 &&
              a.has(u.plugin),
          );
        if (l.length > 0)
          pe("plugin_load_hooks", "plugin_hooks_file_load_failed", {
            hook_error_count: wf(l.length),
            registered_hooks: wf(s),
            plugin_count: wf(e.length),
          });
        else if (c.length > 0)
          pe("plugin_load_hooks", "plugin_hooks_path_invalid", {
            hook_error_count: wf(c.length),
            registered_hooks: wf(s),
          });
        else be("plugin_load_hooks");
      } catch (e) {
        throw (pe("plugin_load_hooks", "plugin_hooks_register_failed"), e);
      }
    });
  });
