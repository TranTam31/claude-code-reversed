// Module: Yis (lines 239046-239065)
  var Yis = S(() => {
    vwu();
    Nwu();
    O3r();
    vco();
    Cqg = [
      Ii("hostMatches", [pf.STRING, pf.STRING], pf.BOOL, (e, t) => lOi(e, t)),
      Ii("hostMatchesAny", [pf.STRING, fpe(pf.STRING)], pf.BOOL, (e, t) => {
        let r = [];
        for (let n of t) {
          if (typeof n !== "string")
            throw Error("hostMatchesAny: non-string pattern in list");
          r.push(n);
        }
        return cOi(e, r);
      }),
      Ii("inCIDR", [pf.STRING, pf.STRING], pf.BOOL, (e, t) => k7t(e, t)),
    ];
    Hqg = xqg();
  });
