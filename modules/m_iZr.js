// Module: iZr (lines 318291-318648)
  var iZr = S(() => {
    bl();
    pt();
    zt();
    Bee();
    Sbs();
    fEe();
    Vir();
    jl();
    Mw();
    Ge();
    Wf();
    st();
    Yb();
    Wi();
    ZB();
    Ese();
    si();
    PLt();
    GQ();
    Ebs();
    Zb();
    Nie();
    Tyo();
    ((aVu = require("fs/promises")), (O$ = require("path")));
    DLt = qr(async () => {
      if (
        fd("plugins", {
          explicitlyRequested:
            aye().length > 0 || lye().length > 0 || uOe().length > 0,
        })
      )
        return [];
      let { enabled: e, errors: t } = await _h();
      if (t.length > 0)
        w(`Plugin loading errors: ${t.map((i) => Uk(i)).join(", ")}`);
      let r = null,
        o = (
          await Promise.all(
            e.map(async (i) => {
              let s = new Set(),
                a = [];
              if (i.commandsPath)
                try {
                  let l = await iVu(
                    i.commandsPath,
                    i.name,
                    i.source,
                    i.manifest,
                    i.path,
                    { isSkillMode: !1 },
                    s,
                  );
                  if ((a.push(...l), l.length > 0))
                    w(
                      `Loaded ${l.length} commands from plugin ${i.name} default directory`,
                    );
                } catch (l) {
                  ((r = "plugin_load_commands_dir_failed"),
                    w(
                      `Failed to load commands from plugin ${i.name} default directory: ${l}`,
                      { level: "error" },
                    ));
                }
              if (i.commandsPaths) {
                w(
                  `Plugin ${i.name} has commandsPaths: ${i.commandsPaths.join(", ")}`,
                );
                let l = await Promise.all(
                  i.commandsPaths.map(async (c) => {
                    try {
                      let u = Xt(),
                        d = await u.stat(c);
                      if (
                        (w(
                          `Checking commandPath ${c} - isDirectory: ${d.isDirectory()}, isFile: ${d.isFile()}`,
                        ),
                        d.isDirectory())
                      ) {
                        let p = await iVu(
                          c,
                          i.name,
                          i.source,
                          i.manifest,
                          i.path,
                          { isSkillMode: !1 },
                          s,
                        );
                        if (p.length > 0)
                          w(
                            `Loaded ${p.length} commands from plugin ${i.name} custom path: ${c}`,
                          );
                        else
                          w(
                            `Warning: No commands found in plugin ${i.name} custom directory: ${c}. Expected .md files or SKILL.md in subdirectories.`,
                            { level: "warn" },
                          );
                        return p;
                      } else if (d.isFile() && c.endsWith(".md")) {
                        if (j0e(u, c, s)) return [];
                        let p = await E8(u, c, But);
                        if (p === null)
                          return (
                            w(
                              `Skipping plugin command ${c}: exceeds ${But} byte limit`,
                              { level: "warn" },
                            ),
                            []
                          );
                        let { frontmatter: f, content: m } = Rp(p, c, {
                            normalizeKeys: !0,
                          }),
                          g,
                          y;
                        if (i.commandsMetadata) {
                          for (let [b, T] of Object.entries(i.commandsMetadata))
                            if (T.source) {
                              let C = O$.join(i.path, T.source);
                              if (c === C) {
                                ((g = `${i.name}:${b}`), (y = T));
                                break;
                              }
                            }
                        }
                        if (!g)
                          g = `${i.name}:${O$.basename(c).replace(/\.md$/, "")}`;
                        let _ = y
                            ? {
                                ...f,
                                ...(y.description && {
                                  description: y.description,
                                }),
                                ...(y.argumentHint && {
                                  "argument-hint": y.argumentHint,
                                }),
                                ...(y.model && { model: y.model }),
                                ...(y.allowedTools && {
                                  "allowed-tools": y.allowedTools.join(","),
                                }),
                              }
                            : f,
                          E = {
                            filePath: c,
                            baseDir: O$.dirname(c),
                            frontmatter: _,
                            content: jze(c, m),
                          },
                          A = oZr(g, E, i.source, i.manifest, i.path, !1);
                        if (A)
                          return (
                            w(
                              `Loaded command from plugin ${i.name} custom file: ${c}${y ? " (with metadata override)" : ""}`,
                            ),
                            [A]
                          );
                      }
                      return [];
                    } catch (u) {
                      return (
                        (r = "plugin_load_commands_path_failed"),
                        w(
                          `Failed to load commands from plugin ${i.name} custom path ${c}: ${u}`,
                          { level: "error" },
                        ),
                        []
                      );
                    }
                  }),
                );
                for (let c of l) a.push(...c);
              }
              if (i.commandsMetadata) {
                for (let [l, c] of Object.entries(i.commandsMetadata))
                  if (c.content && !c.source)
                    try {
                      let { frontmatter: u, content: d } = Rp(
                          c.content,
                          `<inline:${i.name}:${l}>`,
                          { normalizeKeys: !0 },
                        ),
                        p = {
                          ...u,
                          ...(c.description && { description: c.description }),
                          ...(c.argumentHint && {
                            "argument-hint": c.argumentHint,
                          }),
                          ...(c.model && { model: c.model }),
                          ...(c.allowedTools && {
                            "allowed-tools": c.allowedTools.join(","),
                          }),
                        },
                        f = `${i.name}:${l}`,
                        m = `<inline:${f}>`,
                        g = {
                          filePath: m,
                          baseDir: i.path,
                          frontmatter: p,
                          content: jze(m, d),
                        },
                        y = oZr(f, g, i.source, i.manifest, i.path, !1);
                      if (y)
                        (a.push(y),
                          w(
                            `Loaded inline content command from plugin ${i.name}: ${f}`,
                          ));
                    } catch (u) {
                      ((r = "plugin_load_commands_inline_failed"),
                        w(
                          `Failed to load inline content command ${l} from plugin ${i.name}: ${u}`,
                          { level: "error" },
                        ));
                    }
              }
              return a;
            }),
          )
        ).flat();
      if ((w(`Total plugin commands loaded: ${o.length}`), r))
        pe("plugin_load_commands", r);
      else be("plugin_load_commands");
      return o;
    });
    Abs = qr(async () => {
      if (
        fd("plugins", {
          explicitlyRequested:
            aye().length > 0 || lye().length > 0 || uOe().length > 0,
        })
      )
        return [];
      let { enabled: e, errors: t } = await _h();
      if (t.length > 0)
        w(`Plugin loading errors: ${t.map((c) => Uk(c)).join(", ")}`);
      w(`getPluginSkills: Processing ${e.length} enabled plugins`);
      let r = null,
        o = (
          await Promise.all(
            e.map(async (c) => {
              let u = new Set(),
                d = [];
              if (
                (w(
                  `Checking plugin ${c.name}: skillsPath=${c.skillsPath ? "exists" : "none"}, skillsPaths=${c.skillsPaths ? c.skillsPaths.length : 0} paths`,
                ),
                c.skillsPath)
              ) {
                w(
                  `Attempting to load skills from plugin ${c.name} default skillsPath: ${c.skillsPath}`,
                );
                try {
                  let p = await sVu(
                    c.skillsPath,
                    c.name,
                    c.source,
                    c.manifest,
                    c.path,
                    u,
                  );
                  (d.push(...p),
                    w(
                      `Loaded ${p.length} skills from plugin ${c.name} default directory`,
                    ));
                } catch (p) {
                  ((r = "plugin_load_skills_dir_failed"),
                    w(
                      `Failed to load skills from plugin ${c.name} default directory: ${p}`,
                      { level: "error" },
                    ));
                }
              }
              if (c.skillsPaths) {
                w(
                  `Attempting to load skills from plugin ${c.name} skillsPaths: ${c.skillsPaths.join(", ")}`,
                );
                let p = await Promise.all(
                  c.skillsPaths.map(async (f) => {
                    try {
                      w(`Loading from skillPath: ${f} for plugin ${c.name}`);
                      let m = await sVu(
                        f,
                        c.name,
                        c.source,
                        c.manifest,
                        c.path,
                        u,
                      );
                      return (
                        w(
                          `Loaded ${m.length} skills from plugin ${c.name} custom path: ${f}`,
                        ),
                        m
                      );
                    } catch (m) {
                      return (
                        (r = "plugin_load_skills_path_failed"),
                        w(
                          `Failed to load skills from plugin ${c.name} custom path ${f}: ${m}`,
                          { level: "error" },
                        ),
                        []
                      );
                    }
                  }),
                );
                for (let f of p) d.push(...f);
              }
              return d;
            }),
          )
        ).flat(),
        [i, s] = await Promise.all([
          Promise.all(
            o.map(async (c) => {
              try {
                return await aVu.realpath(c.filePath);
              } catch {
                return null;
              }
            }),
          ),
          cVu(),
        ]),
        a = new Map(),
        l = [];
      for (let c = 0; c < o.length; c++) {
        let u = o[c];
        if (u === void 0) continue;
        let d = i[c];
        if (d === null || d === void 0) {
          l.push(u.skill);
          continue;
        }
        if (s !== null && s.has(d)) {
          w(
            `Skipping plugin skill '${u.skill.name}' \u2014 ${d} is a user-level skill already surfaced by the skills directory loader`,
          );
          continue;
        }
        let p = a.get(d);
        if (p !== void 0) {
          w(
            `Skipping duplicate plugin skill '${u.skill.name}' \u2014 ${d} already loaded as '${p}'`,
          );
          continue;
        }
        (a.set(d, u.skill.name), l.push(u.skill));
      }
      if (
        (w(
          `Total plugin skills loaded: ${l.length} (${o.length - l.length} duplicate/user-owned entries skipped)`,
        ),
        r)
      )
        pe("plugin_load_skills", r);
      else be("plugin_load_skills");
      return l;
    });
  });
