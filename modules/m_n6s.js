// Module: n6s (lines 595969-595984)
  var n6s = S(() => {
    bl();
    Jm();
    $xe();
    BUo = qr(async (e, t) => {
      let r = await QD(e),
        n = new Set(r.map((s) => s.name)),
        o = (t ?? []).filter((s) => !n.has(s.name));
      return F7([...r, ...o]).map((s) => ({
        name: s.name,
        description: s.description,
        whenToUse: s.whenToUse ?? "",
      }));
    }, Pep);
    if (!(BUo.cache instanceof Map)) BUo.cache = new Map();
  });
