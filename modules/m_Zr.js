// Module: Zr (lines 185842-185922)
  var Zr = S(() => {
    Bv();
    GUl();
    dB();
    pt();
    hn();
    Ge();
    n_();
    Ar();
    st();
    Eo();
    PM();
    Ir();
    ts();
    jp();
    QB();
    ube();
    Un();
    qh();
    Zt();
    S_e();
    g8();
    ((Cst = new Map()), (Uno = new Set()), (zde = new Map()));
    Bno = new Map();
    ((Fno = new Set()), (Yer = Rs()));
    ((ZXi = qr(() => {
      if (!die()) return null;
      let e = sJi(),
        t = "sdk-zAZezfDKGoZuXXKe",
        r = "https://api.anthropic.com/",
        o =
          Xd() || L0e() || yn()
            ? Kq()
            : { headers: {}, error: "trust not established" },
        i = !o.error;
      ((jno = i), (tJi = i ? o.headers.Authorization : void 0));
      let s = xt().oauthAccount;
      ((rJi = s?.accountUuid), (nJi = s?.organizationUuid), Ctu());
      let a = new Zjn({
        apiHost: r,
        clientKey: t,
        attributes: e,
        remoteEval: !0,
        cacheKeyAttributes: ["id", "organizationUUID"],
        ...(!o.error && { apiHostRequestHeaders: o.headers }),
        ...!1,
      });
      if (((DNe = a), !i)) return { client: a, initialized: Promise.resolve() };
      let l = a
        .init({ timeout: 5000 })
        .then(async (c) => {
          if (DNe !== a) return;
          let u = await Itu(a);
          if (DNe !== a) return;
          if (u) (ktu(), Rtu(), Yer.emit());
        })
        .catch((c) => {});
      return (
        (b8r = () => DNe?.destroy()),
        (S8r = () => DNe?.destroy()),
        process.on("beforeExit", b8r),
        process.on("exit", S8r),
        { client: a, initialized: l }
      );
    })),
      (p$ = qr(async () => {
        let e = ZXi();
        if (!e) return null;
        if (!jno) {
          if (Xd() || L0e() || yn()) {
            if (!Kq().error) {
              if ((Jer({ preservePendingExposures: !0 }), (e = ZXi()), !e))
                return null;
            }
          }
        }
        return (await e.initialized, Mtu(), e.client);
      })));
    utu(Ke);
    btu(Ke);
  });
