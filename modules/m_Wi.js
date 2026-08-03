// Module: Wi (lines 23321-23505)
  var Wi = S(() => {
    np();
    st();
    Zt();
    ((yE = x(require("fs"))),
      (P_ = require("fs/promises")),
      (iCi = require("os")),
      (ph = x(require("path"))),
      (nCi = /[\\/]+/));
    ezm = Z8m;
    oCi = /(^|[\\/])\.\.([\\/]|$)/;
    ((aCi = {
      cwd() {
        return process.cwd();
      },
      existsSync(e) {
        using t = $A`fs.existsSync(${e})`;
        return yE.existsSync(e);
      },
      async stat(e) {
        return P_.stat(e);
      },
      async lstat(e) {
        return P_.lstat(e);
      },
      async readdir(e) {
        return P_.readdir(e, { withFileTypes: !0 });
      },
      async unlink(e) {
        return P_.unlink(e);
      },
      async rmdir(e) {
        return P_.rmdir(e);
      },
      async rm(e, t) {
        return P_.rm(e, t);
      },
      async mkdir(e, t) {
        try {
          await P_.mkdir(e, { recursive: !0, ...t });
        } catch (r) {
          if (Ut(r) !== "EEXIST") throw r;
        }
      },
      async readFile(e, t) {
        return P_.readFile(e, { encoding: t.encoding });
      },
      async rename(e, t) {
        return P_.rename(e, t);
      },
      async realpath(e) {
        return Nd(await P_.realpath(e));
      },
      async readlink(e) {
        return P_.readlink(e);
      },
      async copyFile(e, t) {
        return P_.copyFile(e, t);
      },
      async appendFile(e, t, r) {
        if (r?.mode !== void 0)
          try {
            let n = await P_.open(e, "ax", r.mode);
            try {
              await n.appendFile(t);
            } finally {
              await n.close();
            }
            return;
          } catch (n) {
            if (Ut(n) !== "EEXIST") throw n;
          }
        return P_.appendFile(e, t);
      },
      async symlink(e, t, r) {
        return P_.symlink(e, t, r);
      },
      async link(e, t) {
        return P_.link(e, t);
      },
      async chmod(e, t) {
        return P_.chmod(e, t);
      },
      statSync(e) {
        using t = $A`fs.statSync(${e})`;
        return yE.statSync(e);
      },
      lstatSync(e) {
        using t = $A`fs.lstatSync(${e})`;
        return yE.lstatSync(e);
      },
      readFileSync(e, t) {
        using r = $A`fs.readFileSync(${e})`;
        return yE.readFileSync(e, { encoding: t.encoding });
      },
      readFileBytesSync(e) {
        using t = $A`fs.readFileBytesSync(${e})`;
        return yE.readFileSync(e);
      },
      readSync(e, t) {
        using r = $A`fs.readSync(${e}, ${t.length} bytes)`;
        let n = void 0;
        try {
          n = yE.openSync(e, "r");
          let o = Buffer.alloc(t.length),
            i = yE.readSync(n, o, 0, t.length, 0);
          return { buffer: o, bytesRead: i };
        } finally {
          if (n) yE.closeSync(n);
        }
      },
      appendFileSync(e, t, r) {
        using n = $A`fs.appendFileSync(${e}, ${t.length} chars)`;
        if (r?.mode !== void 0)
          try {
            let o = yE.openSync(e, "ax", r.mode);
            try {
              yE.appendFileSync(o, t);
            } finally {
              yE.closeSync(o);
            }
            return;
          } catch (o) {
            if (Ut(o) !== "EEXIST") throw o;
          }
        yE.appendFileSync(e, t);
      },
      unlinkSync(e) {
        using t = $A`fs.unlinkSync(${e})`;
        yE.unlinkSync(e);
      },
      renameSync(e, t) {
        using r = $A`fs.renameSync(${e} ${J8m} ${t})`;
        yE.renameSync(e, t);
      },
      readlinkSync(e) {
        using t = $A`fs.readlinkSync(${e})`;
        return yE.readlinkSync(e);
      },
      realpathSync(e) {
        using t = $A`fs.realpathSync(${e})`;
        return Nd(yE.realpathSync(e));
      },
      mkdirSync(e, t) {
        using r = $A`fs.mkdirSync(${e})`;
        let n = { recursive: !0 };
        if (t?.mode !== void 0) n.mode = t.mode;
        try {
          yE.mkdirSync(e, n);
        } catch (o) {
          if (Ut(o) !== "EEXIST") throw o;
        }
      },
      readdirSync(e) {
        using t = $A`fs.readdirSync(${e})`;
        return yE.readdirSync(e, { withFileTypes: !0 });
      },
      rmSync(e, t) {
        using r = $A`fs.rmSync(${e})`;
        yE.rmSync(e, t);
      },
      createWriteStream(e) {
        return yE.createWriteStream(e);
      },
      async readFileBytes(e, t) {
        if (t === void 0) return P_.readFile(e);
        let r = await P_.open(e, "r");
        try {
          let { size: n } = await r.stat(),
            o = Math.min(n, t),
            i = Buffer.allocUnsafe(o),
            s = 0;
          while (s < o) {
            let { bytesRead: a } = await r.read(i, s, o - s, s);
            if (a === 0) break;
            s += a;
          }
          return s < o ? i.subarray(0, s) : i;
        } finally {
          await r.close();
        }
      },
    }),
      (rzm = aCi));
  });
