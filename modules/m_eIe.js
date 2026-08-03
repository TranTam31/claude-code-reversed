// Module: eIe (lines 518693-518728)
  var eIe = S(() => {
    bl();
    pt();
    ZN();
    Yq();
    Tus();
    vt();
    jQt();
    Ss();
    KHe();
    zDo();
    s$();
    UC();
    Ge();
    Zt();
    gpe();
    XDo();
    lo_ = qr(
      async (e, t, r, n) => {
        let o = e.filter((i) => s7(i));
        if (o.length === 0) return 0;
        try {
          let i = await ymt(o, t, { activeAgents: r, allAgents: r }, n);
          if (i === 0) return null;
          return Math.max(0, i - VDo);
        } catch {
          return null;
        }
      },
      (e) =>
        e
          .filter((t) => s7(t))
          .map((t) => t.name)
          .join(","),
    );
  });
