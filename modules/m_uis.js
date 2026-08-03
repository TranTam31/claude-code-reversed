// Module: Uis (lines 238194-238232)
  var Uis = S(() => {
    f$e();
    Mnr();
    olt();
    Dis();
    GAu();
    Pos();
    $Dt();
    YAu = -9223372036854775808n;
    ((Nis = fpe(pf.DYN)),
      ({ BYTES: $is, DOUBLE: Mie, INT: Dj, STRING: Fis, UINT: N8 } = pf),
      (ewu = [
        Ii(Kbe, [Dj, Dj], Dj, (e, t) => gHe(e + t, Kbe)),
        Ii(Kbe, [N8, N8], N8, (e, t) => FDt(e.value + t.value, Kbe)),
        Ii(Kbe, [Mie, Mie], Mie, (e, t) => e + t),
        Ii(Kbe, [Dw, Dw], Dw, V6g),
        Ii(Kbe, [lH, Dw], lH, XAu),
        Ii(Kbe, [Dw, lH], lH, XAu),
        Ii(Kbe, [Fis, Fis], Fis, (e, t) => e + t),
        Ii(Kbe, [$is, $is], $is, G6g),
        Ii(Kbe, [Nis, Nis], Nis, wAu),
        Ii(e8e, [Dj, Dj], Dj, (e, t) => gHe(e - t, e8e)),
        Ii(e8e, [N8, N8], N8, (e, t) => FDt(e.value - t.value, e8e)),
        Ii(e8e, [Mie, Mie], Mie, (e, t) => e - t),
        Ii(e8e, [lH, lH], Dw, JAu),
        Ii(e8e, [Dw, Dw], Dw, JAu),
        Ii(e8e, [lH, Dw], lH, q6g),
        Ii(Lnr, [Dj, Dj], Dj, (e, t) => gHe(e * t, Lnr)),
        Ii(Lnr, [N8, N8], N8, (e, t) => FDt(e.value * t.value, Lnr)),
        Ii(Lnr, [Mie, Mie], Mie, (e, t) => e * t),
        Ii(fco, [Dj, Dj], Dj, (e, t) => QAu(Dj, e, t)),
        Ii(fco, [N8, N8], N8, (e, t) => Xqe(QAu(N8, e.value, t.value))),
        Ii(fco, [Mie, Mie], Mie, (e, t) => e / t),
        Ii(His, [Dj, Dj], Dj, (e, t) => ZAu(Dj, e, t)),
        Ii(His, [N8, N8], N8, (e, t) => Xqe(ZAu(N8, e.value, t.value))),
        Ii(kis, [Dj], Dj, (e) => gHe(-e)),
        Ii(kis, [Mie], Mie, (e) => -e),
      ]));
  });
