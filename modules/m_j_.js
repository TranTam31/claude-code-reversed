// Module: j$ (lines 389256-389321)
  var j$ = S(() => {
    bl();
    xS();
    Qr();
    st();
    Ei();
    ((Rdr = require("crypto")),
      (WUe = require("fs")),
      (zT = require("fs/promises")),
      (sad = require("net")),
      (vb = require("path")));
    ((QMy = qr(
      () =>
        Rdr.createHash("sha256")
          .update(vb.resolve(pn()))
          .digest("hex")
          .slice(0, 8),
      () => vb.resolve(pn()),
    )),
      (GUe = qr(
        () => {
          let e = process.getuid?.() ?? 0,
            t =
              process.env.TERMUX_VERSION && process.env.PREFIX
                ? vb.join(process.env.PREFIX, "tmp")
                : "/tmp";
          return vb.join(t, `cc-daemon-${e}`, QMy());
        },
        () => pn(),
      )),
      (ZMy = /^[a-f0-9]{16}$/),
      (eLy = qr(
        () => {
          let e = vb.join(tIe(), "pipe.key");
          for (let t = 0; t < 8; t++) {
            let r;
            try {
              let o = WUe.lstatSync(e);
              if (!o.isFile() || o.size > 4096) {
                try {
                  WUe.rmSync(e, { recursive: !0, force: !0 });
                } catch {}
                r = "invalid";
              } else r = WUe.readFileSync(e, "utf8").trim();
            } catch (o) {
              if (!Vt(o)) throw o;
            }
            if (r !== void 0) {
              if (ZMy.test(r)) return r;
              if (r === "" && t < 3) continue;
              let o = Rdr.randomBytes(8).toString("hex");
              return (OQ(e, o, 384), o);
            }
            let n = Rdr.randomBytes(8).toString("hex");
            WUe.mkdirSync(tIe(), { recursive: !0, mode: 448 });
            try {
              return (WUe.writeFileSync(e, n, { flag: "wx", mode: 384 }), n);
            } catch (o) {
              if (Ut(o) !== "EEXIST") throw o;
            }
          }
          throw Error("daemon pipe.key is not a valid nonce");
        },
        () => pn(),
      )));
  });
