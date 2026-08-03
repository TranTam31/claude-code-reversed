// Module: Pbs (lines 324774-324838)
  var Pbs = S(() => {
    bl();
    zt();
    Cke();
    MZ();
    fEe();
    Ge();
    Wi();
    ZB();
    Zb();
    CVu = require("path");
    jyo = qr(async () => {
      let { enabled: e, errors: t } = await _h(),
        r = [];
      if (t.length > 0)
        w(`Plugin loading errors: ${t.map((o) => Uk(o)).join(", ")}`);
      let n = null;
      for (let o of e) {
        let i = new Set();
        if (o.workflowsPath)
          try {
            let s = await TVu(o.workflowsPath, o.name, o.source, o.manifest, i);
            if ((r.push(...s), s.length > 0))
              w(
                `Loaded ${s.length} workflows from plugin ${o.name} default directory`,
              );
          } catch (s) {
            ((n = "plugin_load_workflows_dir_failed"),
              w(
                `Failed to load workflows from plugin ${o.name} default directory: ${s}`,
                { level: "error" },
              ));
          }
        if (o.workflowsPaths)
          for (let s of o.workflowsPaths)
            try {
              let l = await Xt().stat(s);
              if (l.isDirectory()) {
                let c = await TVu(s, o.name, o.source, o.manifest, i);
                if ((r.push(...c), c.length > 0))
                  w(
                    `Loaded ${c.length} workflows from plugin ${o.name} custom path: ${s}`,
                  );
              } else if (l.isFile() && s.endsWith(".js")) {
                let c = await xVu(s, o.name, o.source, o.manifest, i);
                if (c)
                  (r.push(c),
                    w(
                      `Loaded workflow from plugin ${o.name} custom file: ${s}`,
                    ));
              }
            } catch (a) {
              ((n = "plugin_load_workflows_path_failed"),
                w(
                  `Failed to load workflows from plugin ${o.name} custom path ${s}: ${a}`,
                  { level: "error" },
                ));
            }
      }
      if ((w(`Total plugin workflows loaded: ${r.length}`), n))
        pe("plugin_load_workflows", n);
      else be("plugin_load_workflows");
      return r;
    });
  });
