// Module: Coe (lines 72866-72908)
  var Coe = S(() => {
    bl();
    kWn();
    OMi();
    U4r();
    np();
    Ge();
    qm();
    Ar();
    Qr();
    st();
    XG();
    Wi();
    em();
    Ei();
    Zt();
    ky();
    TCe();
    snt();
    hM();
    GQ();
    y3r();
    ((Z5l = require("os")), (Jx = require("path")));
    cIh = qr((e) => {
      let t = Xt(),
        r = null;
      try {
        r = t.lstatSync(Jx.join(e, ".claude")).uid;
      } catch (n) {
        if (!Vt(n)) throw n;
      }
      return {
        rootUid: t.statSync(e).uid,
        gitEntryUid: t.lstatSync(Jx.join(e, ".git")).uid,
        claudeEntryUid: r,
      };
    });
    dIh = qr(() => {
      let e = Vne(Z5l.homedir());
      if (e === null) throw Error("home directory realpath unavailable");
      return Nd(e);
    });
  });
