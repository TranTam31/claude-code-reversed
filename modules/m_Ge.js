// Module: Ge (lines 24577-24638)
  var Ge = S(() => {
    bl();
    pt();
    np();
    Tf();
    V0l();
    Qr();
    st();
    Wi();
    sU();
    Gx();
    Zt();
    ((xK = require("fs/promises")),
      (EOe = require("path")),
      (gCi = { verbose: 0, debug: 1, info: 2, warn: 3, error: 4 }),
      (X0t = qr(() => {
        let e = process.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
        if (e && Object.hasOwn(gCi, e)) return e;
        return "debug";
      })));
    HK = qr(() => {
      let e = JBn();
      return (
        PIl ||
        Yt(process.env.DEBUG) ||
        Yt(process.env.DEBUG_SDK) ||
        e.includes("--debug") ||
        e.includes("-d") ||
        FG() ||
        e.some((t) => t.startsWith("--debug=")) ||
        q9t() !== null
      );
    });
    ((SCi = qr(() => {
      let e = JBn().find((r) => r.startsWith("--debug="));
      if (!e) return null;
      let t = e.substring(8);
      return W0l(t);
    })),
      (FG = qr(() => {
        let e = JBn();
        return e.includes("--debug-to-stderr") || e.includes("-d2e");
      })),
      (q9t = qr(() => {
        let e = JBn();
        for (let t = 0; t < e.length; t++) {
          let r = e[t];
          if (r.startsWith("--debug-file=")) return DIl(r.substring(13));
          if (r === "--debug-file" && t + 1 < e.length) return DIl(e[t + 1]);
        }
        return null;
      })));
    ((YBn = Promise.resolve()), (G9t = []));
    NIl = qr(async () => {
      try {
        let e = vOe(),
          t = EOe.dirname(e),
          r = EOe.join(t, "latest");
        (await xK.unlink(r).catch(() => {}), await xK.symlink(e, r));
      } catch {}
    });
  });
