// Module: kIa (lines 802295-802351)
  var kIa = S(() => {
    bl();
    zt();
    Ge();
    Yb();
    Ese();
    wJo();
    ((suf = require("path")),
      (GFH = qr(async function (e) {
        let t = await Ase("routines", e),
          r = [
            ...t.filter(
              (i) =>
                i.source !== "projectSettings" && i.source !== "policySettings",
            ),
            ...t.filter((i) => i.source === "projectSettings").sort(dlr),
            ...t.filter((i) => i.source === "policySettings"),
          ],
          n = new Map(),
          o = null;
        for (let i of r) {
          let s = ruf(i.frontmatter);
          for (let u of s.warnings)
            w(`[Routines] ${i.filePath}: ${u}`, { level: "warn" });
          if (s.triggers.length === 0) {
            (w(
              `[Routines] skipping ${i.filePath}: no usable trigger (need at least one of: schedule, on)`,
              { level: "warn" },
            ),
              (o ??= "routine_load_no_trigger"));
            continue;
          }
          let a = suf.basename(i.filePath, ".md"),
            l = i.frontmatter.name,
            c = typeof l === "string" && l.trim() !== "" ? l.trim() : a;
          if (c.startsWith("-")) {
            (w(
              `[Routines] skipping ${i.filePath}: name '${c}' must not start with '-'`,
              { level: "error" },
            ),
              (o = "routine_load_invalid_name"));
            continue;
          }
          n.set(c, {
            name: c,
            description: MY(i.frontmatter.description, c) ?? void 0,
            triggers: s.triggers,
            body: i.content.trim(),
            source: i.source,
            filePath: i.filePath,
          });
        }
        if (o !== null) Ne("routine_load", o);
        else be("routine_load");
        return Array.from(n.values());
      })));
  });
