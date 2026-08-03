// Module: S7r (lines 264417-264445)
  var S7r = S(() => {
    bl();
    vt();
    Ge();
    ((pRu = x(Pst(), 1)),
      (fRu = qr((e) => {
        try {
          return (pRu.default().add([e]).test("probe"), null);
        } catch (t) {
          return t instanceof Error ? t.message : String(t);
        }
      })),
      (jQg = {
        claudemd_rule_globs: Ee("claudemd_rule_globs"),
        skill_paths: Ee("skill_paths"),
        file_suggestions_ignore: Ee("file_suggestions_ignore"),
        worktreeinclude: Ee("worktreeinclude"),
      }),
      (WQg = qr(
        (e, t) => {
          (w(
            `[${e}] gitignore-style pattern failed to compile (${fRu(t)}); treating it as matching nothing: ${t}`,
            { level: "warn" },
          ),
            O("tengu_uncompilable_ignore_pattern", { site: jQg[e] }));
        },
        (e, t) => `${e}\x00${t}`,
      )));
  });
