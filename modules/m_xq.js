// Module: XQ (lines 75791-75832)
  var XQ = S(() => {
    bl();
    wnt();
    Ge();
    ja();
    Wi();
    d6l = require("https");
    R7t = foe(async () => {
      let e = Z.CLAUDE_CODE_CLIENT_CERT,
        t = Z.CLAUDE_CODE_CLIENT_KEY,
        [r, n] = await Promise.all([
          e ? u6l(e, "client certificate from CLAUDE_CODE_CLIENT_CERT") : null,
          t ? u6l(t, "client key from CLAUDE_CODE_CLIENT_KEY") : null,
        ]),
        o =
          Tnt?.path !== r?.path ||
          Tnt?.content !== r?.content ||
          Cnt?.path !== n?.path ||
          Cnt?.content !== n?.content;
      if (((Tnt = r), (Cnt = n), o)) G5n();
      return o;
    });
    Mq = qr(() => {
      let e = {},
        t = Z.CLAUDE_CODE_CLIENT_CERT;
      if (t) {
        if (Tnt?.path !== t)
          Tnt = c6l(t, "client certificate from CLAUDE_CODE_CLIENT_CERT");
        if (Tnt?.path === t) e.cert = Tnt.content;
      }
      let r = Z.CLAUDE_CODE_CLIENT_KEY;
      if (r) {
        if (Cnt?.path !== r)
          Cnt = c6l(r, "client key from CLAUDE_CODE_CLIENT_KEY");
        if (Cnt?.path === r) e.key = Cnt.content;
      }
      let n = Z.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE;
      if (n) ((e.passphrase = n), w("mTLS: Using client key passphrase"));
      if (Object.keys(e).length === 0) return;
      return e;
    });
  });
