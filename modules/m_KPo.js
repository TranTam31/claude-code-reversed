// Module: KPo (lines 528581-528623)
  var KPo = S(() => {
    i_();
    g5();
    ts();
    U8e();
    hB();
    ja();
    y_e();
    bl();
    fB();
    mj();
    rBs = new Map();
    f$d = ["fable", "opus", "sonnet"];
    Ul_ = qr(() =>
      SQ()
        .models.filter((e) => e.fallback_3p !== void 0)
        .sort((e, t) => {
          let r = (o) => {
              let i = f$d.indexOf(o);
              return i === -1 ? f$d.length : i;
            },
            n = (o, i) =>
              o
                .replace(/^claude-/, "")
                .replace(i, "")
                .replace(/^-|-$/g, "");
          return (
            r(e.family) - r(t.family) ||
            (e.family < t.family ? -1 : e.family > t.family ? 1 : 0) ||
            Fl_(n(e.id, e.family), n(t.id, t.family))
          );
        })
        .map((e) => {
          let t = e.id.replace(/^claude-/, "");
          return {
            needle: t,
            needleUnderscore: t.replace(/-/g, "_"),
            fallbackId: e.fallback_3p,
            family: e.family,
          };
        }),
    );
  });
