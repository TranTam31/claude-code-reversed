// Module: SBp (lines 745936-746002)
  var SBp = S(() => {
    nx();
    va();
    up();
    V0();
    Wct();
    ct();
    _Ar();
    Pr();
    ((w6o = x(ot(), 1)), (O4t = x(ue(), 1)), (Uaa = x(_e(), 1)));
    T6o = w6o.memo(function (gFx) {
      let uBp = Uaa.c(14),
        { token: iBp, highlight: sBp, forceWidth: yFx, linkCap: aBp } = gFx,
        [lBp] = is(),
        { columns: _Fx } = xm(Br()),
        cBp = Ea(),
        Ebn = yFx ?? _Fx,
        qhb;
      if (
        uBp[0] !== sBp ||
        uBp[1] !== cBp ||
        uBp[2] !== aBp ||
        uBp[3] !== Ebn ||
        uBp[4] !== lBp ||
        uBp[5] !== iBp
      )
        ((qhb = bBp(iBp, Ebn, lBp, sBp, aBp, cBp)),
          (uBp[0] = sBp),
          (uBp[1] = cBp),
          (uBp[2] = aBp),
          (uBp[3] = Ebn),
          (uBp[4] = lBp),
          (uBp[5] = iBp),
          (uBp[6] = qhb));
      else qhb = uBp[6];
      let TAe = qhb;
      if (TAe.kind === "ansi") {
        let E6o;
        if (uBp[7] !== TAe.text)
          ((E6o = O4t.jsx(Cc, { children: TAe.text })),
            (uBp[7] = TAe.text),
            (uBp[8] = E6o));
        else E6o = uBp[8];
        return E6o;
      }
      let E6o;
      if (
        uBp[9] !== TAe.headers ||
        uBp[10] !== TAe.rows ||
        uBp[11] !== TAe.truncatedCount ||
        uBp[12] !== Ebn
      )
        ((E6o = O4t.jsx(Faa, {
          headers: TAe.headers,
          rows: TAe.rows,
          terminalWidth: Ebn,
          truncatedCount: TAe.truncatedCount,
        })),
          (uBp[9] = TAe.headers),
          (uBp[10] = TAe.rows),
          (uBp[11] = TAe.truncatedCount),
          (uBp[12] = Ebn),
          (uBp[13] = E6o));
      else E6o = uBp[13];
      return E6o;
    });
  });
