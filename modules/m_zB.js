// Module: Zb (lines 331804-331877)
  var Zb = S(() => {
    bl();
    Far();
    pt();
    nlr();
    a3r();
    zt();
    vt();
    hn();
    Ge();
    Ar();
    st();
    Ja();
    vc();
    Wi();
    Qa();
    H0();
    Ir();
    hp();
    Iy();
    d5u();
    Un();
    hM();
    GQ();
    Zt();
    Pr();
    Mk();
    byo();
    Ffo();
    Oze();
    rKr();
    wyo();
    Cqe();
    v1();
    bbs();
    YY();
    zFe();
    sx();
    Xbs();
    Jbs();
    B5();
    Dh();
    JFe();
    XD();
    i_o();
    b6u();
    EZr();
    kM();
    ups();
    nSs();
    Nbs();
    Wut();
    ((C6u = require("fs")),
      (lm = require("fs/promises")),
      (Vs = require("path")),
      (x6u = require("stream")),
      (H6u = require("stream/promises")));
    cyy = new Set(["node_modules", ".orphaned_at", flr]);
    E6u = new Set();
    gyy = Se(() =>
      r5()
        .pick(Object.fromEntries(_6u.map((e) => [e, !0])))
        .strip(),
    );
    F6u = ["agents", "output-styles", "themes", "hooks", "monitors"];
    ((oR = qr(async () => {
      let e = await lSs(() => iSs({ cacheOnly: !1 }));
      return (_h.cache?.set(void 0, Promise.resolve(e)), e);
    })),
      (_h = qr(async () => {
        if (Z.CLAUDE_CODE_SYNC_PLUGIN_INSTALL) return oR();
        return lSs(() => iSs({ cacheOnly: !0 }));
      })));
  });
