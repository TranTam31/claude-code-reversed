// Module: G0n (lines 813889-814016)
  var G0n = S(() => {
    gd();
    va();
    Pee();
    ct();
    S1();
    oFe();
    Zr();
    Go();
    Ss();
    _De();
    Q$s();
    pmt();
    Ar();
    Vf();
    fdf();
    Nj();
    vo();
    Vb();
    Pr();
    qas();
    IRa();
    aEe();
    fpf();
    Bpf();
    ZDa();
    eXe();
    _mf();
    ebn();
    Rhf();
    ((lHr = x(ot(), 1)),
      (qy = x(ot(), 1)),
      (Cx = x(ue(), 1)),
      (hLa = x(_e(), 1)),
      (Khf = lHr.memo(function (W9H) {
        let Lhf = hLa.c(8),
          {
            agentDefinitions: Dhf,
            latchAnnouncementSlot: Phf,
            hideWelcomeChrome: Mhf,
          } = W9H,
          lLa;
        if (Lhf[0] !== Mhf)
          ((lLa = !Mhf && Cx.jsx(_Qo, {})), (Lhf[0] = Mhf), (Lhf[1] = lLa));
        else lLa = Lhf[1];
        let cLa;
        if (Lhf[2] !== Dhf || Lhf[3] !== Phf)
          ((cLa = Cx.jsx(lHr.Suspense, {
            fallback: null,
            children: Cx.jsx(VQo, {
              agentDefinitions: Dhf,
              latchAnnouncementSlot: Phf,
            }),
          })),
            (Lhf[2] = Dhf),
            (Lhf[3] = Phf),
            (Lhf[4] = cLa));
        else cLa = Lhf[4];
        let zzb;
        if (Lhf[5] !== lLa || Lhf[6] !== cLa)
          ((zzb = Cx.jsx(uC, {
            children: Cx.jsxs(H, {
              flexDirection: "column",
              gap: 1,
              children: [lLa, null, cLa],
            }),
          })),
            (Lhf[5] = lLa),
            (Lhf[6] = cLa),
            (Lhf[7] = zzb));
        else zzb = Lhf[7];
        return zzb;
      })),
      (Bhf = (A5(), en(hst)).BRIEF_TOOL_NAME),
      (Xzb = en(Yro).SEND_USER_FILE_TOOL_NAME),
      (jhf = (pte(), en(JEe)).isBriefEnabled),
      (Jzb = (Mon(), en(Gcd)).isPewterOwlTool));
    Yhf = [];
    zhf = lHr.memo(n9b, (e, t) => {
      let r = Object.keys(e);
      for (let n of r) {
        if (
          n === "onOpenRateLimitOptions" ||
          n === "scrollRef" ||
          n === "trackStickyPrompt" ||
          n === "jumpRef" ||
          n === "onSearchMatchesChange" ||
          n === "scanElement" ||
          n === "setPositions"
        )
          continue;
        if (e[n] !== t[n]) {
          if (n === "streamingToolUses") {
            let o = e.streamingToolUses,
              i = t.streamingToolUses;
            if (
              o.length === i.length &&
              o.every((s, a) => s.contentBlock === i[a]?.contentBlock)
            )
              continue;
          }
          if (n === "inProgressToolUseIDs") {
            if (o9b(e.inProgressToolUseIDs, t.inProgressToolUseIDs)) continue;
          }
          if (n === "unseenDivider") {
            let o = e.unseenDivider,
              i = t.unseenDivider;
            if (
              o?.firstUnseenUuid === i?.firstUnseenUuid &&
              o?.count === i?.count
            )
              continue;
          }
          if (n === "tools") {
            let o = e.tools,
              i = t.tools;
            if (
              o.length === i.length &&
              o.every((s, a) => s.name === i[a]?.name)
            )
              continue;
          }
          return !1;
        }
      }
      return !0;
    });
  });
