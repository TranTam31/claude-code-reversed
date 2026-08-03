// Module: Owu (lines 238989-239037)
  var Owu = S(() => {
    mHe();
    zbe();
    f$e();
    Mnr();
    $Kr();
    olt();
    PDt();
    $Dt();
    Hwu = new Set([
      32, 9, 10, 11, 12, 13, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197,
      8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288,
    ]);
    mqg = new Map([
      [0, "\\0"],
      [7, "\\a"],
      [8, "\\b"],
      [9, "\\t"],
      [10, "\\n"],
      [11, "\\v"],
      [12, "\\f"],
      [13, "\\r"],
      [34, '\\"'],
      [92, "\\\\"],
    ]);
    (({ STRING: _b, INT: Xbe, DYN: Lwu } = pf),
      (wqg = fpe(Lwu)),
      (Sco = fpe(Lwu)),
      (Kis = [
        Ii("strings.quote", [_b], _b, hqg),
        hv("charAt", _b, [Xbe], _b, uqg),
        hv("indexOf", _b, [_b], Xbe, Awu),
        hv("indexOf", _b, [_b, Xbe], Xbe, Awu),
        hv("lastIndexOf", _b, [_b], Xbe, wwu),
        hv("lastIndexOf", _b, [_b, Xbe], Xbe, wwu),
        hv("lowerAscii", _b, [], _b, dqg),
        hv("upperAscii", _b, [], _b, pqg),
        hv("replace", _b, [_b, _b], _b, Twu),
        hv("replace", _b, [_b, _b, Xbe], _b, Twu),
        hv("split", _b, [_b], Sco, Cwu),
        hv("split", _b, [_b, Xbe], Sco, Cwu),
        hv("substring", _b, [Xbe], _b, xwu),
        hv("substring", _b, [Xbe, Xbe], _b, xwu),
        hv("trim", _b, [], _b, fqg),
        hv("join", Sco, [], _b, kwu),
        hv("join", Sco, [_b], _b, kwu),
        hv("format", _b, [wqg], _b, vqg),
      ]));
  });
