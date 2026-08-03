// Module: Iy (lines 101229-101258)
  var Iy = S(() => {
    Zg();
    bl();
    pt();
    wnt();
    O3r();
    Ge();
    ja();
    Qr();
    XQ();
    xq();
    ((Zic = x(M3r(), 1)), (esc = x(nde(), 1)), (BFi = require("net")));
    OWh = ["https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY"];
    jFi = new Set();
    zFi = qr((e) => {
      let t = require("undici"),
        r = Mq(),
        n = YQ(),
        o = { httpProxy: e, httpsProxy: e, noProxy: Z.NO_PROXY || Z.no_proxy };
      if (r || n) {
        let i = {
          ...(r && { cert: r.cert, key: r.key, passphrase: r.passphrase }),
          ...(n && { ca: n }),
        };
        ((o.connect = i), (o.requestTls = i));
      }
      return new t.EnvHttpProxyAgent(o);
    });
    CXt = { helper: void 0, fromProjectOrLocal: !1, trustAccepted: () => !1 };
  });
