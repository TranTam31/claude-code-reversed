// Module: oAn (lines 768879-769265)
  var oAn = S(() => {
    Da();
    zl();
    va();
    up();
    ct();
    Ni();
    Pr();
    mw();
    ((D_a = x(ot(), 1)), (Vy = x(ue(), 1)), (M_a = x(_e(), 1)), (nAn = /\s+/g));
    OYp = D_a.memo(function (ZiH) {
      let v2 = M_a.c(95),
        {
          item: Pf,
          maxColumnWidth: esH,
          isSelected: w3e,
          allowWrap: qCb,
        } = ZiH,
        xYp = qCb === void 0 ? !0 : qCb,
        q3t = Br().columns;
      if (I_a(Pf.id)) {
        let I9o;
        if (v2[0] !== Pf.id)
          ((I9o = PYp(Pf.id)), (v2[0] = Pf.id), (v2[1] = I9o));
        else I9o = v2[1];
        let zCb = I9o;
        let HYp = w3e ? "suggestion" : void 0;
        let kYp = !w3e;
        let tsH = Pf.id.startsWith("file-");
        let rsH = Pf.id.startsWith("mcp-resource-");
        let z3t;
        if (v2[2] !== Pf.id)
          ((z3t = Pf.id.startsWith("mcp-template-value::")),
            (v2[2] = Pf.id),
            (v2[3] = z3t));
        else z3t = v2[3];
        let w_a = z3t;
        let nsH = Pf.id.startsWith("mcp-template::");
        let KCb = Pf.description ? 3 : 0;
        let tAn;
        if (tsH || nsH || w_a) {
          let Yme;
          if (v2[4] !== Pf.description)
            ((Yme = Pf.description ? Math.min(20, Ft(Pf.description)) : 0),
              (v2[4] = Pf.description),
              (v2[5] = Yme));
          else Yme = v2[5];
          let osH = Yme;
          let T_a = q3t - 2 - 4 - KCb - osH;
          let R9o;
          if (v2[6] !== w_a || v2[7] !== Pf.displayText || v2[8] !== T_a)
            ((R9o = w_a ? I5(Pf.displayText, T_a) : SRt(Pf.displayText, T_a)),
              (v2[6] = w_a),
              (v2[7] = Pf.displayText),
              (v2[8] = T_a),
              (v2[9] = R9o));
          else R9o = v2[9];
          tAn = R9o;
        } else if (rsH) {
          let Yme;
          if (v2[10] !== Pf.displayText)
            ((Yme = gi(Pf.displayText, 30)),
              (v2[10] = Pf.displayText),
              (v2[11] = Yme));
          else Yme = v2[11];
          tAn = Yme;
        } else tAn = Pf.displayText;
        let isH = q3t - 2 - Ft(tAn) - KCb - 4;
        let D9o;
        if (Pf.description) {
          let IYp = Math.max(0, isH);
          let Yme;
          if (v2[12] !== Pf.description || v2[13] !== IYp)
            ((Yme = gi(Pf.description.replace(nAn, " "), IYp)),
              (v2[12] = Pf.description),
              (v2[13] = IYp),
              (v2[14] = Yme));
          else Yme = v2[14];
          let ssH = Yme;
          D9o = `${zCb} ${tAn} \u2013 ${ssH}`;
        } else D9o = `${zCb} ${tAn}`;
        let Yme;
        if (v2[15] !== kYp || v2[16] !== D9o || v2[17] !== HYp)
          ((Yme = Vy.jsx(h, {
            color: HYp,
            dimColor: kYp,
            wrap: "truncate",
            children: D9o,
          })),
            (v2[15] = kYp),
            (v2[16] = D9o),
            (v2[17] = HYp),
            (v2[18] = Yme));
        else Yme = v2[18];
        return Yme;
      }
      let asH =
          Pf.description || Pf.tag || Pf.kind !== void 0 || Pf.sourceTag
            ? Math.floor(q3t * 0.4)
            : q3t - 4,
        PDe = Math.min(esH ?? Ft(Pf.displayText) + 5, asH),
        T3e = Pf.color || (w3e ? "suggestion" : void 0),
        C3e = !w3e,
        I9o;
      if (v2[19] !== Pf.id)
        ((I9o = Pf.id.startsWith("emoji:")), (v2[19] = Pf.id), (v2[20] = I9o));
      else I9o = v2[20];
      let YCb = I9o,
        FTr = YCb ? (w3e ? `${je.pointer} ` : "  ") : "",
        RYp = Ft(FTr),
        wle = YCb && w3e,
        bre = Pf.displayText;
      if (Ft(bre) > PDe - 2) {
        let z3t;
        if (v2[21] !== PDe || v2[22] !== bre)
          ((z3t =
            bre.includes("/") || bre.includes("\\")
              ? I5(bre, PDe - 2)
              : gi(bre, PDe - 2)),
            (v2[21] = PDe),
            (v2[22] = bre),
            (v2[23] = z3t));
        else z3t = v2[23];
        bre = z3t;
      }
      let z3t;
      if (v2[24] !== PDe || v2[25] !== bre || v2[26] !== RYp)
        ((z3t = " ".repeat(Math.max(0, PDe - Ft(bre) - RYp))),
          (v2[24] = PDe),
          (v2[25] = bre),
          (v2[26] = RYp),
          (v2[27] = z3t));
      else z3t = v2[27];
      let P9o = z3t,
        UTr = Pf.tag ? `[${Pf.tag}] ` : "",
        C_a = Ft(UTr),
        BTr,
        K3t,
        Y3t,
        Yme,
        R9o;
      if (v2[28] !== Pf) {
        let { kindLaneText: x_a, kindLabel: XCb, sourceText: M9o } = R_a(Pf);
        K3t = x_a;
        Y3t = M9o;
        BTr =
          XCb === "skill" ? "skill" : XCb === "agent" ? "background" : void 0;
        Yme = Ft(K3t);
        R9o = Ft(Y3t);
        ((v2[28] = Pf),
          (v2[29] = BTr),
          (v2[30] = K3t),
          (v2[31] = Y3t),
          (v2[32] = Yme),
          (v2[33] = R9o));
      } else
        ((BTr = v2[29]),
          (K3t = v2[30]),
          (Y3t = v2[31]),
          (Yme = v2[32]),
          (R9o = v2[33]));
      let H_a = Yme + R9o,
        k_a = Math.max(0, q3t - PDe - C_a - H_a - 4),
        L9o,
        O9o,
        N9o,
        x_a,
        M9o;
      if (
        v2[34] !== xYp ||
        v2[35] !== wle ||
        v2[36] !== q3t ||
        v2[37] !== k_a ||
        v2[38] !== PDe ||
        v2[39] !== bre ||
        v2[40] !== w3e ||
        v2[41] !== Pf.description ||
        v2[42] !== Pf.query ||
        v2[43] !== BTr ||
        v2[44] !== K3t ||
        v2[45] !== H_a ||
        v2[46] !== P9o ||
        v2[47] !== FTr ||
        v2[48] !== C3e ||
        v2[49] !== Y3t ||
        v2[50] !== UTr ||
        v2[51] !== C_a ||
        v2[52] !== T3e
      ) {
        M9o = ta;
        bb0: {
          let JCb = Pf.description
            ? Pf.description.replace(nAn, " ").trim()
            : "";
          let [lsH, QCb] = xYp ? LYp(JCb, k_a) : [gi(JCb, k_a), ""];
          L9o = w3e ? "suggestion" : void 0;
          let jTr;
          if (
            v2[58] !== wle ||
            v2[59] !== FTr ||
            v2[60] !== C3e ||
            v2[61] !== T3e
          )
            ((jTr = FTr
              ? Vy.jsx(h, {
                  color: T3e,
                  dimColor: C3e,
                  bold: wle,
                  children: FTr,
                })
              : null),
              (v2[58] = wle),
              (v2[59] = FTr),
              (v2[60] = C3e),
              (v2[61] = T3e),
              (v2[62] = jTr));
          else jTr = v2[62];
          let rAn;
          if (
            v2[63] !== wle ||
            v2[64] !== bre ||
            v2[65] !== Pf.query ||
            v2[66] !== C3e ||
            v2[67] !== T3e
          )
            ((rAn = Vy.jsx(X3t, {
              text: bre,
              query: Pf.query,
              color: T3e,
              dimColor: C3e,
              bold: wle,
            })),
              (v2[63] = wle),
              (v2[64] = bre),
              (v2[65] = Pf.query),
              (v2[66] = C3e),
              (v2[67] = T3e),
              (v2[68] = rAn));
          else rAn = v2[68];
          let WTr;
          if (
            v2[69] !== wle ||
            v2[70] !== P9o ||
            v2[71] !== C3e ||
            v2[72] !== T3e
          )
            ((WTr = Vy.jsx(h, {
              color: T3e,
              dimColor: C3e,
              bold: wle,
              children: P9o,
            })),
              (v2[69] = wle),
              (v2[70] = P9o),
              (v2[71] = C3e),
              (v2[72] = T3e),
              (v2[73] = WTr));
          else WTr = v2[73];
          let GTr;
          if (v2[74] !== BTr || v2[75] !== K3t)
            ((GTr = K3t
              ? Vy.jsx(h, {
                  color: BTr,
                  dimColor: BTr === void 0,
                  children: K3t,
                })
              : null),
              (v2[74] = BTr),
              (v2[75] = K3t),
              (v2[76] = GTr));
          else GTr = v2[76];
          let $9o;
          if (v2[77] !== UTr)
            (($9o = UTr ? Vy.jsx(h, { dimColor: !0, children: UTr }) : null),
              (v2[77] = UTr),
              (v2[78] = $9o));
          else $9o = v2[78];
          let ZCb;
          if (v2[79] !== Y3t)
            ((ZCb = Y3t ? Vy.jsx(h, { dimColor: !0, children: Y3t }) : null),
              (v2[79] = Y3t),
              (v2[80] = ZCb));
          else ZCb = v2[80];
          O9o = Vy.jsxs(h, {
            wrap: "truncate",
            children: [
              jTr,
              rAn,
              WTr,
              GTr,
              $9o,
              ZCb,
              Vy.jsx(X3t, {
                text: lsH,
                query: Pf.query,
                color: L9o,
                dimColor: !w3e,
                bold: wle,
                contiguousOnly: !0,
              }),
            ],
          });
          if (!QCb) {
            M9o = O9o;
            break bb0;
          }
          N9o = PDe + C_a + H_a;
          x_a = gi(QCb, Math.max(0, q3t - N9o - 4));
        }
        ((v2[34] = xYp),
          (v2[35] = wle),
          (v2[36] = q3t),
          (v2[37] = k_a),
          (v2[38] = PDe),
          (v2[39] = bre),
          (v2[40] = w3e),
          (v2[41] = Pf.description),
          (v2[42] = Pf.query),
          (v2[43] = BTr),
          (v2[44] = K3t),
          (v2[45] = H_a),
          (v2[46] = P9o),
          (v2[47] = FTr),
          (v2[48] = C3e),
          (v2[49] = Y3t),
          (v2[50] = UTr),
          (v2[51] = C_a),
          (v2[52] = T3e),
          (v2[53] = L9o),
          (v2[54] = O9o),
          (v2[55] = N9o),
          (v2[56] = x_a),
          (v2[57] = M9o));
      } else
        ((L9o = v2[53]),
          (O9o = v2[54]),
          (N9o = v2[55]),
          (x_a = v2[56]),
          (M9o = v2[57]));
      if (M9o !== ta) return M9o;
      let DYp = x_a,
        jTr;
      if (v2[81] !== N9o)
        ((jTr = " ".repeat(N9o)), (v2[81] = N9o), (v2[82] = jTr));
      else jTr = v2[82];
      const rAn = !w3e;
      let WTr;
      if (
        v2[83] !== wle ||
        v2[84] !== L9o ||
        v2[85] !== DYp ||
        v2[86] !== Pf.query ||
        v2[87] !== rAn
      )
        ((WTr = Vy.jsx(X3t, {
          text: DYp,
          query: Pf.query,
          color: L9o,
          dimColor: rAn,
          bold: wle,
          contiguousOnly: !0,
        })),
          (v2[83] = wle),
          (v2[84] = L9o),
          (v2[85] = DYp),
          (v2[86] = Pf.query),
          (v2[87] = rAn),
          (v2[88] = WTr));
      else WTr = v2[88];
      let GTr;
      if (v2[89] !== WTr || v2[90] !== jTr)
        ((GTr = Vy.jsxs(h, { wrap: "truncate", children: [jTr, WTr] })),
          (v2[89] = WTr),
          (v2[90] = jTr),
          (v2[91] = GTr));
      else GTr = v2[91];
      let $9o;
      if (v2[92] !== O9o || v2[93] !== GTr)
        (($9o = Vy.jsxs(H, { flexDirection: "column", children: [O9o, GTr] })),
          (v2[92] = O9o),
          (v2[93] = GTr),
          (v2[94] = $9o));
      else $9o = v2[94];
      return $9o;
    });
    P_a = D_a.memo(PXe);
  });
