// Module: mFc (lines 139549-139606)
  var mFc = S(() => {
    xS();
    st();
    Wi();
    Zt();
    _Y();
    p5r();
    ((pFc = require("fs/promises")), (fFc = require("path")));
    eJn = {
      name: "plaintext",
      read() {
        let { storagePath: e } = ZXn();
        try {
          let t = Xt().readFileSync(e, { encoding: "utf8" });
          return Bt(t);
        } catch {
          return null;
        }
      },
      async readAsync() {
        let { storagePath: e } = ZXn();
        try {
          let t = await Xt().readFile(e, { encoding: "utf8" });
          return Bt(t);
        } catch {
          return null;
        }
      },
      mutate(e) {
        return ikt(eJn, e);
      },
      async update(e) {
        try {
          let { storageDir: t, storagePath: r } = ZXn();
          return (
            await Xt().mkdir(t),
            await ip(r, Ie(e), 384),
            await pFc.chmod(r, 384),
            {
              success: !0,
              warning: "Warning: Storing credentials in plaintext.",
            }
          );
        } catch {
          return { success: !1 };
        }
      },
      async delete() {
        let { storagePath: e } = ZXn();
        try {
          return (await Xt().unlink(e), !0);
        } catch (t) {
          if (Ut(t) === "ENOENT") return !0;
          return !1;
        }
      },
    };
  });
