// Module: o3o (lines 643919-643984)
  var o3o = S(() => {
    Bv();
    zt();
    vt();
    IIo();
    jA();
    E1();
    Y7();
    Ge();
    qm();
    Qr();
    st();
    Ni();
    ei();
    Ir();
    ERe();
    jp();
    Lct();
    Pr();
    XC();
    XHt();
    I$();
    W5e();
    Vup();
    mSe();
    Lk();
    vRe();
    tfp();
    PEe();
    kUe();
    uJt();
    mYs();
    CNs();
    S4();
    afp();
    Sfe();
    FIo();
    ((chn = require("crypto")),
      (Ybr = require("os")),
      (agt = require("path")),
      (b5_ = {
        connInitialMs: 2000,
        connCapMs: 120000,
        connGiveUpMs: 600000,
        generalInitialMs: 500,
        generalCapMs: 30000,
        generalGiveUpMs: 600000,
      }));
    v5_ = new Set([
      "ECONNREFUSED",
      "ECONNRESET",
      "ETIMEDOUT",
      "ECONNABORTED",
      "ENETUNREACH",
      "EHOSTUNREACH",
      "ERR_SOCKET_CLOSED",
      "ERR_PROXY_TUNNEL",
    ]);
    A5_ = ["session", "same-dir", "worktree"];
    Y2t = class Y2t extends Error {
      constructor(e) {
        super(e);
        this.name = "BridgeHeadlessPermanentError";
      }
    };
  });
