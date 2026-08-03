// Module: dAr (lines 744226-744336)
  var dAr = S(() => {
    gd();
    EX();
    ct();
    Vf();
    jct();
    p6o();
    f2p();
    ((w2p = x(ot(), 1)),
      (s6 = x(ue(), 1)),
      (T2p = x(_e(), 1)),
      (v2p = new WeakMap()));
    lre = w2p.memo(function (SNx) {
      let mbn = T2p.c(26),
        {
          patch: pbn,
          dim: fbn,
          filePath: m2p,
          firstLine: h2p,
          fileContent: g2p,
          width: _aa,
          skipHighlighting: ihb,
        } = SNx,
        y2p = ihb === void 0 ? !1 : ihb,
        [_2p] = is(),
        b2p = eg().syntaxHighlightingDisabled ?? !1,
        uAr = Math.max(1, Math.floor(_aa)),
        shb;
      if (
        mbn[0] !== fbn ||
        mbn[1] !== g2p ||
        mbn[2] !== m2p ||
        mbn[3] !== h2p ||
        mbn[4] !== pbn ||
        mbn[5] !== uAr ||
        mbn[6] !== y2p ||
        mbn[7] !== b2p ||
        mbn[8] !== _2p
      ) {
        let ENx = ds();
        shb =
          y2p || b2p
            ? null
            : A2p(pbn, h2p, m2p, g2p ?? null, _2p, uAr, fbn, ENx);
        ((mbn[0] = fbn),
          (mbn[1] = g2p),
          (mbn[2] = m2p),
          (mbn[3] = h2p),
          (mbn[4] = pbn),
          (mbn[5] = uAr),
          (mbn[6] = y2p),
          (mbn[7] = b2p),
          (mbn[8] = _2p),
          (mbn[9] = shb));
      } else shb = mbn[9];
      let ahb = shb;
      if (!ahb) {
        let rXe;
        if (mbn[10] !== fbn || mbn[11] !== pbn || mbn[12] !== _aa)
          ((rXe = s6.jsx(H, {
            children: s6.jsx(f6o, { patch: pbn, dim: fbn, width: _aa }),
          })),
            (mbn[10] = fbn),
            (mbn[11] = pbn),
            (mbn[12] = _aa),
            (mbn[13] = rXe));
        else rXe = mbn[13];
        return rXe;
      }
      let { lines: S2p, gutterWidth: m6o, gutters: baa, contents: Saa } = ahb;
      if (m6o > 0 && baa && Saa) {
        let rXe;
        if (mbn[14] !== m6o || mbn[15] !== baa)
          ((rXe = s6.jsx(BT, {
            fromLeftEdge: !0,
            flexShrink: 0,
            children: s6.jsx(HFe, { lines: baa, width: m6o }),
          })),
            (mbn[14] = m6o),
            (mbn[15] = baa),
            (mbn[16] = rXe));
        else rXe = mbn[16];
        const E2p = uAr - m6o;
        let Eaa;
        if (mbn[17] !== Saa || mbn[18] !== E2p)
          ((Eaa = s6.jsx(HFe, { lines: Saa, width: E2p })),
            (mbn[17] = Saa),
            (mbn[18] = E2p),
            (mbn[19] = Eaa));
        else Eaa = mbn[19];
        let lhb;
        if (mbn[20] !== rXe || mbn[21] !== Eaa)
          ((lhb = s6.jsxs(H, { flexDirection: "row", children: [rXe, Eaa] })),
            (mbn[20] = rXe),
            (mbn[21] = Eaa),
            (mbn[22] = lhb));
        else lhb = mbn[22];
        return lhb;
      }
      let rXe;
      if (mbn[23] !== S2p || mbn[24] !== uAr)
        ((rXe = s6.jsx(H, {
          children: s6.jsx(HFe, { lines: S2p, width: uAr }),
        })),
          (mbn[23] = S2p),
          (mbn[24] = uAr),
          (mbn[25] = rXe));
      else rXe = mbn[25];
      return rXe;
    });
  });
