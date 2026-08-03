// Module: kap (lines 623661-623722)
  var kap = S(() => {
    bl();
    I8r();
    zt();
    Ge();
    Yb();
    Ir();
    Ese();
    Nyo();
    ((xap = require("path")),
      (Hap = qr(async (e) => {
        try {
          let r = (await Ase("output-styles", e))
            .map(
              ({
                filePath: n,
                frontmatter: o,
                content: i,
                source: s,
                baseDir: a,
              }) => {
                try {
                  lRt("output-style", o);
                  let c = xap.basename(n).replace(/\.md$/, ""),
                    u = (o.name != null ? String(o.name) : void 0) || c,
                    d =
                      MY(o.description, c) ??
                      qFe(i, `Custom ${c} output style`),
                    p = Yde(o["keep-coding-instructions"]);
                  if (o["force-for-plugin"] !== void 0)
                    w(
                      `Output style "${u}" has force-for-plugin set, but this option only applies to plugin output styles. Ignoring.`,
                      { level: "warn" },
                    );
                  return {
                    name: u,
                    description: d,
                    prompt: i.trim(),
                    source: s,
                    baseDir: a,
                    keepCodingInstructions: p,
                  };
                } catch (l) {
                  return (xe(l), null);
                }
              },
            )
            .filter((n) => n !== null)
            .sort(dlr);
          return (be("output_style_load"), r);
        } catch (t) {
          return (
            Ne("output_style_load", "output_style_load_failed"),
            w(
              `Failed to load output styles: ${t instanceof Error ? t.message : String(t)}`,
              { level: "error" },
            ),
            []
          );
        }
      })));
  });
