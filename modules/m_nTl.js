// Module: Ntl (lines 887230-887354)
  var Ntl = S(() => {
    Da();
    Go();
    Lk();
    vRe();
    Lqf();
    XTr();
    Etl();
    va();
    V0();
    ct();
    Zr();
    yYo();
    nPa();
    jdt();
    Ck();
    Xi();
    z8o();
    ((Mtl = require("path")),
      (s8f = x(ot(), 1)),
      (MDn = x(ot(), 1)),
      (bm = x(ue(), 1)),
      (Jci = x(_e(), 1)));
    Ltl = MDn.memo(function (OfI) {
      let o6t = Jci.c(26),
        { bridgeSelected: FPr, leadingSeparator: zqf } = OfI,
        Kqf = qe(P1S),
        Yqf = qe(M1S),
        Xqf = qe(L1S),
        Jqf = qe(O1S),
        Qqf = qe(N1S),
        Ttl = qe($1S),
        b1S;
      if (o6t[0] !== Jqf || o6t[1] !== Qqf)
        ((b1S = !bH() || Qqf || Boolean(Jqf)),
          (o6t[0] = Jqf),
          (o6t[1] = Qqf),
          (o6t[2] = b1S));
      else b1S = o6t[2];
      let Kci = b1S,
        S1S;
      if (o6t[3] !== Kqf || o6t[4] !== Xqf || o6t[5] !== Yqf)
        ((S1S = Obr({ connected: Kqf, sessionActive: Yqf, reconnecting: Xqf })),
          (o6t[3] = Kqf),
          (o6t[4] = Xqf),
          (o6t[5] = Yqf),
          (o6t[6] = S1S));
      else S1S = o6t[6];
      let UPr = S1S,
        NfI = Gci(),
        E1S,
        v1S;
      if (o6t[7] !== Kci || o6t[8] !== UPr.label)
        ((E1S = () => {
          if (!Kci && UPr.label === "/rc active") Stl();
        }),
          (v1S = [Kci, UPr.label]),
          (o6t[7] = Kci),
          (o6t[8] = UPr.label),
          (o6t[9] = E1S),
          (o6t[10] = v1S));
      else ((E1S = o6t[9]), (v1S = o6t[10]));
      if ((MDn.useEffect(E1S, v1S), Kci)) {
        return null;
      }
      let Ctl = UPr.label === "/rc active" && !NfI ? "/rc" : UPr.label,
        A1S;
      if (o6t[11] !== Ctl || o6t[12] !== Ttl)
        ((A1S = Ttl ? bm.jsx(Do, { url: Ttl, children: Ctl }) : Ctl),
          (o6t[11] = Ctl),
          (o6t[12] = Ttl),
          (o6t[13] = A1S));
      else A1S = o6t[13];
      let Zqf = A1S,
        xtl;
      if (o6t[14] !== zqf)
        ((xtl =
          zqf && bm.jsx(h, { dimColor: !0, children: " \xB7 " }, "bridge-sep")),
          (o6t[14] = zqf),
          (o6t[15] = xtl));
      else xtl = o6t[15];
      const e8f = FPr ? "background" : UPr.color;
      let Htl;
      if (o6t[16] !== FPr)
        ((Htl =
          FPr &&
          bm.jsxs(h, {
            dimColor: !0,
            children: [
              " \xB7 ",
              bm.jsx(Ue, { chord: "enter", action: "view" }),
            ],
          })),
          (o6t[16] = FPr),
          (o6t[17] = Htl));
      else Htl = o6t[17];
      let ktl;
      if (
        o6t[18] !== FPr ||
        o6t[19] !== Zqf ||
        o6t[20] !== e8f ||
        o6t[21] !== Htl
      )
        ((ktl = bm.jsxs(h, {
          color: e8f,
          inverse: FPr,
          wrap: "truncate",
          children: [Zqf, Htl],
        })),
          (o6t[18] = FPr),
          (o6t[19] = Zqf),
          (o6t[20] = e8f),
          (o6t[21] = Htl),
          (o6t[22] = ktl));
      else ktl = o6t[22];
      let w1S;
      if (o6t[23] !== xtl || o6t[24] !== ktl)
        ((w1S = bm.jsxs(bm.Fragment, { children: [xtl, ktl] })),
          (o6t[23] = xtl),
          (o6t[24] = ktl),
          (o6t[25] = w1S));
      else w1S = o6t[25];
      return w1S;
    });
  });
