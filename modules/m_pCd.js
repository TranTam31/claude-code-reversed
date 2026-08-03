// Module: pCd (lines 478725-478773)
  var pCd = S(() => {
    Vn();
    Van();
    x1s();
    H1s();
    Ss();
    zko();
    uKy = Se(() =>
      v.strictObject({
        keywords: v
          .array(v.string().min(1).max(64))
          .max(8)
          .optional()
          .describe("Optional filter; omit to list everything."),
      }),
    );
    ((k1s = dCd({
      name: "ListPlugins",
      noun: "plugin",
      async fetch() {
        let e = await Kan();
        if (!e.success) throw new DIe(e.error);
        return e.plugins.map((t) => ({
          id: t.pluginId,
          name: t.name,
          description: t.description || null,
          enabled: !0,
        }));
      },
      prompt:
        "List the user's enabled claude.ai plugins. Call this when the user asks what plugins they have, or to confirm what was installed after a SuggestPluginInstall card. Pass keywords to filter to a topic; omit to list all. To suggest a plugin they do NOT have yet, use SearchPlugins \u2192 SuggestPluginInstall instead.",
    })),
      (I1s = dCd({
        name: "ListSkills",
        noun: "skill",
        async fetch() {
          let e = await Yan();
          if (!e.success) throw new DIe(e.error);
          return e.skills.map((t) => ({
            id: t.skillId,
            name: t.name,
            description: t.description || null,
            enabled: !0,
          }));
        },
        prompt:
          "List the user's enabled claude.ai skills. Call this when the user asks what skills they have. Pass keywords to filter to a topic; omit to list all. To recommend skills they do NOT have yet, use SuggestSkills instead.",
      })));
  });
