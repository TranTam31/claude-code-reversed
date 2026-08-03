// Module: xyo (lines 316243-316354)
  var xyo = S(() => {
    bl();
    DS();
    zt();
    uqe();
    RS();
    Rh();
    g1();
    fEe();
    Ge();
    Wf();
    Yb();
    Wi();
    ZB();
    Ese();
    Zb();
    Nie();
    Tyo();
    ((k5u = require("path")), (x5u = ["user", "project", "local"]));
    XQr = qr(async () => {
      let { enabled: e, errors: t } = await _h();
      if (t.length > 0)
        w(`Plugin loading errors: ${t.map((i) => Uk(i)).join(", ")}`);
      let r = null,
        o = (
          await Promise.all(
            e.map(async (i) => {
              let s = new Set(),
                a = [];
              if (i.agentsPath)
                try {
                  let l = await H5u(
                    i.agentsPath,
                    i.name,
                    i.source,
                    i.path,
                    i.manifest,
                    s,
                  );
                  if ((a.push(...l), l.length > 0))
                    w(
                      `Loaded ${l.length} agents from plugin ${i.name} default directory`,
                    );
                } catch (l) {
                  ((r = "plugin_load_agents_dir_failed"),
                    w(
                      `Failed to load agents from plugin ${i.name} default directory: ${l}`,
                      { level: "error" },
                    ));
                }
              if (i.agentsPaths) {
                let l = await Promise.all(
                  i.agentsPaths.map(async (c) => {
                    try {
                      let d = await Xt().stat(c);
                      if (d.isDirectory()) {
                        let p = await H5u(
                          c,
                          i.name,
                          i.source,
                          i.path,
                          i.manifest,
                          s,
                        );
                        if (p.length > 0)
                          w(
                            `Loaded ${p.length} agents from plugin ${i.name} custom path: ${c}`,
                          );
                        return p;
                      } else if (d.isFile() && c.endsWith(".md")) {
                        let p = await I5u(
                          c,
                          i.name,
                          [],
                          i.source,
                          i.path,
                          i.manifest,
                          s,
                        );
                        if (p)
                          return (
                            w(
                              `Loaded agent from plugin ${i.name} custom file: ${c}`,
                            ),
                            [p]
                          );
                      }
                      return [];
                    } catch (u) {
                      return (
                        (r = "plugin_load_agents_path_failed"),
                        w(
                          `Failed to load agents from plugin ${i.name} custom path ${c}: ${u}`,
                          { level: "error" },
                        ),
                        []
                      );
                    }
                  }),
                );
                for (let c of l) a.push(...c);
              }
              return a;
            }),
          )
        ).flat();
      if ((w(`Total plugin agents loaded: ${o.length}`), r))
        pe("plugin_load_agents", r);
      else be("plugin_load_agents");
      return o;
    });
  });
