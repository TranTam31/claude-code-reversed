// Module: V0l (lines 4631-4646)
  var V0l = S(() => {
    bl();
    W0l = qr((e) => {
      if (!e || e.trim() === "") return null;
      let t = e
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);
      if (t.length === 0) return null;
      let r = t.some((i) => i.startsWith("!")),
        n = t.some((i) => !i.startsWith("!"));
      if (r && n) return null;
      let o = t.map((i) => i.replace(/^!/, "").toLowerCase());
      return { include: r ? [] : o, exclude: r ? o : [], isExclusive: r };
    });
  });
