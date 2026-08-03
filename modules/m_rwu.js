// Module: rwu (lines 238272-238327)
  var rwu = S(() => {
    mHe();
    zbe();
    Uis();
    f$e();
    Dis();
    $Dt();
    dco();
    ((z6g = new TextEncoder()), (K6g = new TextDecoder(void 0, { fatal: !0 })));
    (({
      BOOL: hco,
      BYTES: gco,
      DOUBLE: slt,
      DYN: Bis,
      INT: Ybe,
      STRING: qY,
      TYPE: Z6g,
      UINT: alt,
    } = pf),
      (twu = [
        Ii("int", [Ybe], Ybe, t8e),
        Ii("int", [alt], Ybe, (e) => gHe(e.value)),
        Ii("int", [slt], Ybe, gHe),
        Ii("int", [qY], Ybe, gHe),
        Ii("int", [lH], Ybe, (e) => gHe(e.message.seconds)),
        Ii("int", [Dw], Ybe, (e) => gHe(e.message.seconds)),
        Ii("uint", [alt], alt, t8e),
        Ii("uint", [Ybe], alt, FDt),
        Ii("uint", [slt], alt, FDt),
        Ii("uint", [qY], alt, FDt),
        Ii("double", [slt], slt, t8e),
        Ii("double", [Ybe], slt, (e) => Number(e)),
        Ii("double", [alt], slt, (e) => Number(e.value)),
        Ii("double", [qY], slt, (e) => Number(e)),
        Ii("bool", [hco], hco, t8e),
        Ii("bool", [qY], hco, Y6g),
        Ii("bytes", [gco], gco, t8e),
        Ii("bytes", [qY], gco, (e) => z6g.encode(e)),
        Ii("string", [qY], qY, t8e),
        Ii("string", [hco], qY, (e) => e.toString()),
        Ii("string", [Ybe], qY, (e) => e.toString()),
        Ii("string", [alt], qY, (e) => e.value.toString()),
        Ii("string", [slt], qY, (e) => e.toString()),
        Ii("string", [gco], qY, X6g),
        Ii("string", [lH], qY, (e) => Yqe(L8, e.message)),
        Ii("string", [Dw], qY, (e) => Yqe(qbe, e.message)),
        Ii("timestamp", [lH], lH, t8e),
        Ii("timestamp", [qY], lH, J6g),
        Ii("timestamp", [Ybe], lH, (e) => ovu(Number(e))),
        Ii("duration", [Dw], Dw, t8e),
        Ii("duration", [qY], Dw, WAu),
        Ii("duration", [Ybe], Dw, (e) => IU(qbe, { seconds: e })),
        Ii("type", [Bis], Z6g, Q6g),
        Ii("dyn", [Bis], Bis, t8e),
      ]));
  });
