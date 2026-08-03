// Module: b1u (lines 281320-281341)
  var b1u = S(() => {
    ((Yoy = qoy + zoy + Koy),
      (Joy = "[" + p1u + "]"),
      (bps = "[" + Yoy + "]"),
      (Qoy = "(?:" + bps + "|" + Sps + ")"),
      (f1u = "[^" + p1u + "]"),
      (g1u = Qoy + "?"),
      (y1u = "[" + Xoy + "]?"),
      (eiy =
        "(?:" +
        Zoy +
        "(?:" +
        [f1u, m1u, h1u].join("|") +
        ")" +
        y1u +
        g1u +
        ")*"),
      (tiy = y1u + g1u + eiy),
      (riy = "(?:" + [f1u + bps + "?", bps, m1u, h1u, Joy].join("|") + ")"),
      (niy = RegExp(Sps + "(?=" + Sps + ")|" + riy + tiy, "g")));
    _1u = oiy;
  });
