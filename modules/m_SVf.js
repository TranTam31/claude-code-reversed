// Module: SVf (lines 883735-884023)
  var SVf = S(() => {
    Da();
    _Oe();
    zl();
    va();
    up();
    ct();
    mut();
    Ps();
    zt();
    iAe();
    Go();
    jS();
    Ck();
    Xi();
    Ago();
    ((yVf = require("path")),
      (_Vf = x(ot(), 1)),
      (qP = x(ot(), 1)),
      (sf = x(ue(), 1)),
      (pDn = x(_e(), 1)));
    ((WMe = Ft(ane)),
      (cPr = MMS + Ft(`${HS}  `)),
      (fVf = Ft(`\u2190/\u2192 to navigate${ane}`)),
      (mVf = Ft("Enter to open")),
      (hVf = Ft(`${ane}x to dismiss`)));
    zZa = qP.memo(function () {
      let $6 = pDn.c(54),
        aDn = qe($MS),
        oge = qe(FMS),
        ilI = qe(UMS),
        lDn = qe(BMS),
        gMS = qe(jMS),
        slI = qe(WMS),
        HZa = bo(),
        lPr = pA("app:openArtifact", "Global", "ctrl+]"),
        { columns: yMS } = Br(),
        [alI, _MS] = qP.useState(!1),
        Y5f = qP.useRef(null),
        cDn = _i(),
        kZa;
      if ($6[0] !== aDn)
        ((kZa = Object.entries(aDn)), ($6[0] = aDn), ($6[1] = kZa));
      else kZa = $6[1];
      let ige = kZa,
        X5f = uPr(ige, ilI),
        bMS;
      if ($6[2] !== cDn)
        ((bMS = () => {
          (_MS(!0),
            Y5f.current?.(),
            (Y5f.current = cDn.setTimeout(() => _MS(!1), dVf)));
        }),
          ($6[2] = cDn),
          ($6[3] = bMS));
      else bMS = $6[3];
      let SMS;
      if ($6[4] !== cDn || $6[5] !== aDn)
        ((SMS = [aDn, cDn]), ($6[4] = cDn), ($6[5] = aDn), ($6[6] = SMS));
      else SMS = $6[6];
      qP.useEffect(bMS, SMS);
      let EMS, vMS;
      if ($6[7] === X)
        ((EMS = () => () => {
          Y5f.current?.();
        }),
          (vMS = []),
          ($6[7] = EMS),
          ($6[8] = vMS));
      else ((EMS = $6[7]), (vMS = $6[8]));
      qP.useEffect(EMS, vMS);
      let [, llI] = qP.useState(0),
        clI = ige.some(GMS),
        AMS;
      if ($6[9] === X) ((AMS = () => llI(VMS)), ($6[9] = AMS));
      else AMS = $6[9];
      Rc(AMS, clI ? pVf : null);
      let lci = gMS != null && slI === !1,
        wMS,
        TMS;
      if ($6[10] !== lci || $6[11] !== lDn || $6[12] !== oge || $6[13] !== HZa)
        ((wMS = () => {
          if ((oge || lDn) && lci) HZa(qMS);
        }),
          (TMS = [oge, lDn, lci, HZa]),
          ($6[10] = lci),
          ($6[11] = lDn),
          ($6[12] = oge),
          ($6[13] = HZa),
          ($6[14] = wMS),
          ($6[15] = TMS));
      else ((wMS = $6[14]), (TMS = $6[15]));
      qP.useEffect(wMS, TMS);
      let plI = lci
          ? ige.findIndex((ulI) => {
              let [dlI] = ulI;
              return dlI === gMS;
            })
          : -1,
        J5f = oge || lDn ? X5f : null,
        cci = lDn ? ige[X5f]?.[1]?.url : void 0,
        Q5f = oge ? `${je.pointer} ` : "  ",
        IZa = !oge && alI && lPr !== "",
        uci = 0;
      if (oge) uci = mVf + hVf + (ige.length > 1 ? fVf : 0);
      else if (IZa) {
        let dci;
        if ($6[16] !== lPr)
          ((dci = RFe([zj(lPr)])), ($6[16] = lPr), ($6[17] = dci));
        else dci = $6[17];
        const uDn = `${dci} to open`;
        let RZa;
        if ($6[18] !== uDn) ((RZa = Ft(uDn)), ($6[18] = uDn), ($6[19] = RZa));
        else RZa = $6[19];
        uci = RZa;
      }
      let pci = J5f ?? ige.length - 1,
        fci = ige[pci],
        dci;
      if ($6[20] !== fci)
        ((dci = fci ? Ft(dDn(fci[0], fci[1])) : 0),
          ($6[20] = fci),
          ($6[21] = dci));
      else dci = $6[21];
      let flI = dci,
        mlI = pci > 0 ? Ft(`+${pci}`) + WMe : 0,
        hlI = pci < ige.length - 1 ? WMe + Ft(`+${ige.length - 1 - pci}`) : 0,
        mci = uci > 0 && yMS - cPr - uci - WMe - mlI - hlI >= Math.min(flI, 16),
        uDn;
      if (
        $6[22] !== lPr ||
        $6[23] !== ige.length ||
        $6[24] !== IZa ||
        $6[25] !== mci ||
        $6[26] !== oge
      )
        ((uDn =
          mci && oge
            ? sf.jsxs(sf.Fragment, {
                children: [
                  ige.length > 1 &&
                    sf.jsx(Ue, {
                      chord: ["left", "right"],
                      action: "navigate",
                    }),
                  ige.length > 1 && ane,
                  sf.jsx(Ue, { chord: "enter", action: "open" }),
                  ane,
                  sf.jsx(Ue, { chord: "x", action: "dismiss" }),
                ],
              })
            : mci && IZa
              ? sf.jsx(Ue, { chord: lPr, action: "open" })
              : null),
          ($6[22] = lPr),
          ($6[23] = ige.length),
          ($6[24] = IZa),
          ($6[25] = mci),
          ($6[26] = oge),
          ($6[27] = uDn));
      else uDn = $6[27];
      let DZa = uDn,
        glI = Math.max(8, yMS - cPr - (mci ? uci + WMe : 0)),
        { visible: ylI, before: PZa, after: MZa } = gVf(ige, glI, J5f);
      const Z5f = H,
        RZa = "column",
        _lI = "100%",
        eVf = H,
        blI = "row",
        tVf = oge ? "claude" : void 0,
        rVf = !oge;
      let LZa;
      if ($6[28] !== Q5f || $6[29] !== tVf || $6[30] !== rVf)
        ((LZa = sf.jsx(h, { color: tVf, dimColor: rVf, children: Q5f })),
          ($6[28] = Q5f),
          ($6[29] = tVf),
          ($6[30] = rVf),
          ($6[31] = LZa));
      else LZa = $6[31];
      let CMS;
      if ($6[32] === X)
        ((CMS = sf.jsxs(h, { color: "claude", children: [HS, "  "] })),
          ($6[32] = CMS));
      else CMS = $6[32];
      let OZa;
      if ($6[33] !== LZa)
        ((OZa = sf.jsxs(H, { flexShrink: 0, children: [LZa, CMS] })),
          ($6[33] = LZa),
          ($6[34] = OZa));
      else OZa = $6[34];
      let NZa;
      if ($6[35] !== PZa)
        ((NZa =
          PZa > 0 &&
          sf.jsx(H, {
            flexShrink: 0,
            children: sf.jsxs(h, { dimColor: !0, children: ["+", PZa, ane] }),
          })),
          ($6[35] = PZa),
          ($6[36] = NZa));
      else NZa = $6[36];
      const oVf = ylI.map((SlI, ElI) => {
        let { idx: nVf, name: vlI, url: AlI, updatedAt: wlI } = SlI;
        return sf.jsxs(sf.Fragment, {
          children: [
            ElI > 0 && sf.jsx(h, { dimColor: !0, children: ane }),
            sf.jsx(KZa, {
              name: vlI,
              url: AlI,
              highlighted: nVf === J5f,
              navSelected: oge && nVf === X5f,
              stale: Date.now() - wlI > gci,
              accent: nVf === plI,
            }),
          ],
        });
      });
      let $Za;
      if ($6[37] !== MZa)
        (($Za =
          MZa > 0 &&
          sf.jsx(H, {
            flexShrink: 0,
            children: sf.jsxs(h, { dimColor: !0, children: [ane, "+", MZa] }),
          })),
          ($6[37] = MZa),
          ($6[38] = $Za));
      else $Za = $6[38];
      let FZa;
      if ($6[39] !== DZa)
        ((FZa =
          DZa &&
          sf.jsx(H, {
            flexShrink: 0,
            children: sf.jsxs(h, { dimColor: !0, children: [ane, DZa] }),
          })),
          ($6[39] = DZa),
          ($6[40] = FZa));
      else FZa = $6[40];
      let UZa;
      if (
        $6[41] !== eVf ||
        $6[42] !== OZa ||
        $6[43] !== NZa ||
        $6[44] !== oVf ||
        $6[45] !== $Za ||
        $6[46] !== FZa
      )
        ((UZa = sf.jsxs(eVf, {
          flexDirection: blI,
          children: [OZa, NZa, oVf, $Za, FZa],
        })),
          ($6[41] = eVf),
          ($6[42] = OZa),
          ($6[43] = NZa),
          ($6[44] = oVf),
          ($6[45] = $Za),
          ($6[46] = FZa),
          ($6[47] = UZa));
      else UZa = $6[47];
      let BZa;
      if ($6[48] !== cci)
        ((BZa =
          cci &&
          sf.jsx(H, {
            paddingLeft: cPr,
            children: sf.jsx(Do, {
              url: cci,
              children: sf.jsx(h, { dimColor: !0, children: cci }),
            }),
          })),
          ($6[48] = cci),
          ($6[49] = BZa));
      else BZa = $6[49];
      let xMS;
      if ($6[50] !== Z5f || $6[51] !== UZa || $6[52] !== BZa)
        ((xMS = sf.jsxs(Z5f, {
          flexDirection: RZa,
          width: _lI,
          children: [UZa, BZa],
        })),
          ($6[50] = Z5f),
          ($6[51] = UZa),
          ($6[52] = BZa),
          ($6[53] = xMS));
      else xMS = $6[53];
      return xMS;
    });
  });
