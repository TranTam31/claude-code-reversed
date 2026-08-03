// Module: ywu (lines 238602-238632)
  var ywu = S(() => {
    zbe();
    f$e();
    mHe();
    $Dt();
    ({ STRING: sqg, INT: Nnr } = pf);
    gwu = [
      hv(Vis, Dw, [], Nnr, function () {
        return this.message.seconds;
      }),
      hv(Gis, Dw, [], Nnr, function () {
        return this.message.seconds / 60n;
      }),
      hv(jis, Dw, [], Nnr, function () {
        return this.message.seconds / 3600n;
      }),
      hv(Wis, Dw, [], Nnr, function () {
        return BigInt(this.message.nanos) / 1000000n;
      }),
      ...h$e(dwu, (e) => e.getFullYear()),
      ...h$e(pwu, (e) => e.getMonth()),
      ...h$e(awu, (e) => e.getDate()),
      ...h$e(lwu, (e) => e.getDate() - 1),
      ...h$e(cwu, (e) => e.getDay()),
      ...h$e(uwu, (e) => oqg(e)),
      ...h$e(Vis, (e) => e.getSeconds()),
      ...h$e(Gis, (e) => e.getMinutes()),
      ...h$e(jis, (e) => e.getHours()),
      ...h$e(Wis, (e) => e.getMilliseconds()),
    ];
  });
