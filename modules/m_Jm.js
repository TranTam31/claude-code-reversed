// Module: Jm (lines 596437-596926)
  var Jm = S(() => {
    ja();
    Qr();
    Ylt();
    nDu();
    uNd();
    pNd();
    hNd();
    gNd();
    yNd();
    _Nd();
    bNd();
    ENd();
    BNd();
    qNd();
    zNd();
    q2s();
    t$d();
    o$d();
    l$d();
    P$d();
    N$d();
    $$d();
    F$d();
    B$d();
    G$d();
    V$d();
    z$d();
    EFd();
    qFd();
    tUd();
    nUd();
    fMo();
    iUd();
    mYd();
    gYd();
    EYd();
    AYd();
    IYd();
    RYd();
    PYd();
    YYd();
    XYd();
    JYd();
    s7d();
    l7d();
    u7d();
    p7d();
    D5s();
    T7d();
    x7d();
    k7d();
    R7d();
    P7d();
    L7d();
    N7d();
    F7d();
    j7d();
    G7d();
    q7d();
    FUt();
    RXd();
    MXd();
    LXd();
    NXd();
    $0();
    Pse();
    FXd();
    UXd();
    WXd();
    YXd();
    XXd();
    QXd();
    eJd();
    lJd();
    mJd();
    gJd();
    SJd();
    vJd();
    HJd();
    NJd();
    UJd();
    WJd();
    XJd();
    QJd();
    ZJd();
    tQd();
    rQd();
    oQd();
    sQd();
    lQd();
    uQd();
    pQd();
    gQd();
    SQd();
    EQd();
    TQd();
    Ir();
    st();
    $xe();
    Ge();
    _pt();
    Mk();
    zt();
    Bee();
    Rnn();
    _V();
    b_();
    nlr();
    iZr();
    J8();
    bl();
    pt();
    Eo();
    ts();
    CQd();
    gUo();
    WQd();
    GQd();
    KQd();
    XQd();
    oZd();
    hZd();
    MVs();
    zUt();
    AZd();
    TZd();
    xZd();
    RZd();
    DZd();
    MZd();
    OZd();
    $Zd();
    UZd();
    ky();
    _pt();
    Ypr();
    ((bht = require("path")),
      (PL_ = (WZd(), en(jZd)).default),
      (Mep = (VZd(), en(GZd)).default),
      (jUo = (zZd(), en(qZd)).default),
      (tfn = (JZd(), en(XZd)).default),
      (Wep = (tep(), en(eep))),
      (ML_ = Wep.default),
      (c6s = Wep.goalNonInteractive),
      (Lep = (nep(), en(rep)).default),
      (LL_ = (iep(), en(oep)).default),
      (OL_ = []),
      (Oep = (pep(), en(dep)).default),
      (GUo = Gep?.default ?? null),
      (Nep = Gep?.prideNonInteractive ?? null),
      ($ep = (mep(), en(fep)).default),
      (Vep = (_ep(), en(yep))),
      (Fep = Vep?.default ?? null),
      (Uep = Vep?.stopNonInteractive ?? null),
      (NL_ = {
        type: "prompt",
        name: "insights",
        description: "Generate a report analyzing your Claude Code sessions",
        contentLength: 0,
        progressMessage: "analyzing your sessions",
        source: "builtin",
        disableModelInvocation: !0,
        requires: { workspace: !0 },
        async getPromptForCommand(e, t) {
          let r = (await Promise.resolve().then(() => (Rep(), Iep))).default;
          if (r.type !== "prompt") throw Error("unreachable");
          return r.getPromptForCommand(e, t);
        },
      }),
      ($L_ = [
        VPo,
        vYd,
        W7d,
        e$d,
        v2s,
        ...(VUo ? [VUo] : []),
        JJd,
        ...(qUo ? [qUo] : []),
        pVs,
        dVs,
        fVs,
        mUo,
        mVs,
        DYd,
        H7d,
        C7d,
        nQd,
        iQd,
        aQd,
        bVs,
        LZd,
        NZd,
        FZd,
        i6s,
      ].filter(Boolean)),
      (FL_ = [rfn, s6s, a6s, l6s].filter(Boolean)),
      (H_r = qr(() => [
        rDu,
        hVs,
        EJd,
        cNd,
        S2s,
        a$d,
        ...(WM() && !Yt(Z.IS_DEMO) ? [hJd, bJd] : [fJd]),
        aJd,
        E2s,
        SNd,
        dQd,
        BPo,
        G2s,
        W2s,
        ...(GUo ? [GUo] : []),
        GPo,
        D$d,
        pBs,
        L$d,
        O$d,
        V2s,
        KNd,
        gBs,
        yBs,
        _Bs,
        ...($ep && WM() ? [$ep] : []),
        ...(Fep && WM() ? [Fep] : []),
        VVs,
        GVs,
        qVs,
        SVs,
        Y5s,
        K5s,
        zVs,
        YJd,
        SBs,
        q$d,
        SFd,
        VFd,
        hYd,
        SYd,
        kYd,
        g5s,
        U$d,
        bFd,
        _Fd,
        y5s,
        bBs,
        kVs,
        HVs,
        YQd,
        nZd,
        mZd,
        xJd,
        T5s,
        dUo,
        pUo,
        H5s,
        x5s,
        a7d,
        c7d,
        d7d,
        P5s,
        D7d,
        M7d,
        CZd,
        hQd,
        V5s,
        OXd,
        A2s,
        w2s,
        BFo,
        A7d,
        w7d,
        cXd,
        jJd,
        B7d,
        M5s,
        I7d,
        CVs,
        pRe,
        Iae,
        $Vs,
        FVs,
        UVs,
        wZd,
        vZd,
        U5s,
        B5s,
        NL_,
        LL_,
        PL_,
        ...(Mep ? [Mep] : []),
        ...(jUo && PNe() ? [jUo] : []),
        KYd,
        ...(tfn ? [tfn] : []),
        ...(gee() ? [G5s, eUo] : []),
        $Xd,
        q5s,
        w5s,
        Z5s,
        ML_,
        c6s,
        JXd,
        ZXd,
        xVs,
        cQd,
        oUd(),
        rUd(),
        eUd,
        QFd,
        ZFd,
        ...(!w_e() || kn() === "gateway" ? [fYd] : []),
        Q5s,
        ...(WUo ? [WUo] : []),
        O7d,
        mNd,
        ...[],
        ...OL_,
        $7d,
        ...(Lep ? [Lep] : []),
        dNd,
        ...(Oep ? [Oep] : []),
        bQd,
        ...(rfn ? [rfn] : []),
        ...(s6s ? [s6s] : []),
        ...(a6s ? [a6s] : []),
        ...(l6s ? [l6s] : []),
        ...wQd,
        ...[],
      ])),
      (rae = qr(
        () => new Set(H_r().flatMap((e) => [e.name, ...(e.aliases ?? [])])),
      )),
      (p2e = qr(
        () =>
          new Set([
            ...rae(),
            ...jNs().flatMap((e) => [e.name, ...(e.aliases ?? [])]),
          ]),
      )));
    ((Bep = (t6s(), en(e6s)).getWorkflowCommands),
      (BL_ = (t6s(), en(e6s)).invalidateWorkflowCache));
    zUo = qr(async (e) => {
      let t = performance.now(),
        [
          {
            skillDirCommands: r,
            pluginSkills: n,
            bundledSkills: o,
            builtinPluginSkills: i,
          },
          s,
          a,
        ] = await Promise.all([
          UL_(e).then(
            (c) => (Jd("skills_load_ms", performance.now() - t, t), c),
          ),
          DLt(),
          Bep ? Bep(e) : Promise.resolve([]),
        ]),
        l = qL_(F7([...r, ...a, ...s, ...n, ...o, ...i, ...H_r()]));
      return (
        vlt(
          "command",
          l
            .map((c) => ({
              name: c.name,
              source: c.type === "prompt" ? c.source : "builtin",
            }))
            .reverse(),
          { resolves: !0 },
        ),
        l
      );
    }, d6s);
    if (!(zUo.cache instanceof Map)) zUo.cache = new Map();
    GL_ = new Set();
    QD = qr(async (e) => {
      if (OG()) return [];
      return (await ow(e)).filter(iKe);
    }, d6s);
    if (!(QD.cache instanceof Map)) QD.cache = new Map();
    GFe = qr(async (e) => {
      if (OG()) return [];
      try {
        let r = (await ow(e)).filter(
          (n) =>
            n.type === "prompt" &&
            n.source !== "builtin" &&
            !Hz(n) &&
            (n.hasUserSpecifiedDescription || n.whenToUse) &&
            (n.loadedFrom === "skills" ||
              n.loadedFrom === "plugin" ||
              n.loadedFrom === "bundled" ||
              n.disableModelInvocation),
        );
        return (be("cmd_load"), r);
      } catch (t) {
        return (
          xe(_n(t)),
          Ne("cmd_load", "cmd_load_slash_tool_skills_failed"),
          w("Returning empty skills array due to load failure"),
          []
        );
      }
    }, d6s);
    if (!(GFe.cache instanceof Map)) GFe.cache = new Map();
    ((KUo = new Set([
      P5s,
      SVs,
      SBs,
      V5s,
      G2s,
      ...(GUo ? [GUo] : []),
      U5s,
      V2s,
      A2s,
      w2s,
      v2s,
      y5s,
      T5s,
      xVs,
      M5s,
      Z5s,
      zVs,
      qVs,
      w5s,
      Q5s,
      Iae,
      FVs,
      fVs,
      mUo,
      ...(i6s ? [i6s] : []),
      ...(jUo ? [jUo] : []),
      H5s,
      E2s,
      gBs,
      _Bs,
      q5s,
      hVs,
      VVs,
      Y5s,
      kVs,
      pVs,
      BPo,
      GPo,
      VPo,
      c6s,
      bVs,
      tfn,
      pUo,
      bBs,
      dUo,
      ...(VUo ? [VUo] : []),
      G5s,
      eUo,
    ])),
      (f6s = new Set([
        S2s,
        GPo,
        VPo,
        BPo,
        B5s,
        yBs,
        pBs,
        c6s,
        IQd,
        ...(Uep ? [Uep] : []),
        dVs,
        $Vs,
        UVs,
        x5s,
        W2s,
        ...(Nep ? [Nep] : []),
        ...(qUo ? [qUo] : []),
        K5s,
        GVs,
        HVs,
        g5s,
        mUo,
        mVs,
        ...(tfn ? [tfn] : []),
        eUo,
        ...(WUo ? [WUo] : []),
        ...(rfn ? [rfn] : []),
        dUo,
        pUo,
        CVs,
      ])));
    zL_ = qr(() => H_r().filter((e) => e.fleetHostCall !== void 0));
  });
