// Module: mBl (lines 55679-55721)
  var mBl = S(() => {
    ((GAh = BAh + jAh + WAh),
      (oBl = VAh + qAh + zAh + KAh),
      (X2l = "[" + oBl + "]"),
      (XAh = "[" + GAh + "]"),
      (JAh = "[" + tBl + "]"),
      (aBl = "[" + rBl + "]"),
      (lBl = "[^" + eBl + oBl + sBl + tBl + rBl + nBl + "]"),
      (ZAh = "(?:" + XAh + "|" + QAh + ")"),
      (ewh = "[^" + eBl + "]"),
      (SYt = "[" + nBl + "]"),
      (J2l = "(?:" + aBl + "|" + lBl + ")"),
      (rwh = "(?:" + SYt + "|" + lBl + ")"),
      (Q2l = "(?:" + iBl + "(?:d|ll|m|re|s|t|ve))?"),
      (Z2l = "(?:" + iBl + "(?:D|LL|M|RE|S|T|VE))?"),
      (dBl = ZAh + "?"),
      (pBl = "[" + YAh + "]?"),
      (nwh =
        "(?:" +
        twh +
        "(?:" +
        [ewh, cBl, uBl].join("|") +
        ")" +
        pBl +
        dBl +
        ")*"),
      (swh = pBl + dBl + nwh),
      (awh = "(?:" + [JAh, cBl, uBl].join("|") + ")" + swh),
      (lwh = RegExp(
        [
          SYt + "?" + aBl + "+" + Q2l + "(?=" + [X2l, SYt, "$"].join("|") + ")",
          rwh + "+" + Z2l + "(?=" + [X2l, SYt + J2l, "$"].join("|") + ")",
          SYt + "?" + J2l + "+" + Q2l,
          SYt + "+" + Z2l,
          iwh,
          owh,
          sBl,
          awh,
        ].join("|"),
        "g",
      )));
    fBl = cwh;
  });
