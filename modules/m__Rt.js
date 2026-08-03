// Module: $Rt (lines 196185-196406)
  var $Rt = S(() => {
    Ge();
    Wi();
    trr();
    Pr();
    zC();
    mau = require("fs/promises");
    MT = class MT {
      taskId;
      path;
      stdoutToFile;
      #e = "";
      #t = "";
      #r = null;
      #n = new VZi(1000);
      #o = 0;
      #l = 0;
      #i;
      #s;
      #c = !1;
      #u = 0;
      static #a = new Map();
      static #d = new Map();
      static #p = null;
      constructor(e, t, r = !1, n = f1g) {
        if (
          ((this.taskId = e),
          (this.path = $g(e)),
          (this.stdoutToFile = r),
          (this.#i = n),
          (this.#s = t),
          r && t)
        )
          MT.#a.set(e, this);
      }
      static startPolling(e) {
        let t = MT.#a.get(e);
        if (!t || !t.#s) return;
        if ((MT.#d.set(e, t), !MT.#p))
          ((MT.#p = setInterval(MT.#h, m1g)), MT.#p.unref());
      }
      static stopPolling(e) {
        if ((MT.#d.delete(e), MT.#d.size === 0 && MT.#p))
          (clearInterval(MT.#p), (MT.#p = null));
      }
      static #h() {
        for (let [, e] of MT.#d) {
          if (!e.#s) continue;
          Wx(e.path, h1g).then(
            ({ content: t, bytesRead: r, bytesTotal: n }) => {
              if (!e.#s) return;
              if (!t) {
                e.#s("", "", e.#o, n, !1);
                return;
              }
              let o = t.length,
                i = 0,
                s = 0,
                a = 0;
              while (o > 0) {
                if (
                  ((o = t.lastIndexOf(
                    `
`,
                    o - 1,
                  )),
                  a++,
                  a === 5)
                )
                  i = o <= 0 ? 0 : o + 1;
                if (a === 100) s = o <= 0 ? 0 : o + 1;
              }
              let l = r >= n ? a : Math.max(e.#o, Math.round((n / r) * a));
              ((e.#o = l),
                (e.#l = n),
                e.#s(t.slice(i), t.slice(s), l, n, r < n));
            },
            () => {},
          );
        }
      }
      writeStdout(e) {
        this.#f(e, !1);
      }
      writeStderr(e) {
        this.#f(e, !0);
      }
      #f(e, t) {
        if (((this.#l += e.length), this.#y(e), this.#r)) {
          this.#r.append(t ? `[stderr] ${e}` : e);
          return;
        }
        if (this.#e.length + this.#t.length + e.length > this.#i) {
          this.#m(t ? e : null, t ? null : e);
          return;
        }
        if (t) this.#t += e;
        else this.#e += e;
      }
      #y(e) {
        let n = 0,
          o = [],
          i = 0,
          s = e.length;
        while (s > 0) {
          let a = e.lastIndexOf(
            `
`,
            s - 1,
          );
          if (a === -1) break;
          if ((n++, o.length < 100 && i < 4096)) {
            let l = s - a - 1;
            if (l > 0 && l <= 4096 - i) {
              let c = e.slice(a + 1, s);
              if (c.trim()) (o.push(Buffer.from(c).toString()), (i += l));
            }
          }
          s = a;
        }
        this.#o += n;
        for (let a = o.length - 1; a >= 0; a--) this.#n.add(o[a]);
        if (this.#s && o.length > 0) {
          let a = this.#n.getRecent(5);
          this.#s(
            zBn(
              a,
              `
`,
            ),
            zBn(
              this.#n.getRecent(100),
              `
`,
            ),
            this.#o,
            this.#l,
            this.#r !== null,
          );
        }
      }
      #m(e, t) {
        if (((this.#r = new kzr(this.taskId)), this.#e))
          (this.#r.append(this.#e), (this.#e = ""));
        if (this.#t) (this.#r.append(`[stderr] ${this.#t}`), (this.#t = ""));
        if (t) this.#r.append(t);
        if (e) this.#r.append(`[stderr] ${e}`);
      }
      async getStdout() {
        if (this.stdoutToFile) return this.#_();
        if (this.#r) {
          let e = this.#n.getRecent(5),
            t = zBn(
              e,
              `
`,
            ),
            n = `
Output truncated (${Math.round(this.#l / 1024)}KB total). Full output saved to: ${this.path}`;
          return t ? t + n : n.trimStart();
        }
        return this.#e;
      }
      async #_() {
        let e = Xst();
        try {
          let t = await qtt(this.path, 0, e);
          if (!t) return ((this.#c = !0), "");
          let { content: r, bytesRead: n, bytesTotal: o } = t;
          return ((this.#u = o), (this.#c = o <= n), r);
        } catch (t) {
          let r =
            t instanceof Error && "code" in t ? String(t.code) : "unknown";
          return (
            w(
              `TaskOutput.#readStdoutFromFile: failed to read ${this.path} (${r}): ${t}`,
            ),
            `<bash output unavailable: output file ${this.path} could not be read (${r}). This usually means another Claude Code process in the same project deleted it during startup cleanup.>`
          );
        }
      }
      getStderr() {
        if (this.#r) return "";
        return this.#t;
      }
      get isOverflowed() {
        return this.#r !== null;
      }
      get totalLines() {
        return this.#o;
      }
      get totalBytes() {
        return this.#l;
      }
      get outputFileRedundant() {
        return this.#c;
      }
      get outputFileSize() {
        return this.#u;
      }
      spillToDisk() {
        if (!this.#r) this.#m(null, null);
      }
      async flush() {
        await this.#r?.flush();
      }
      async deleteOutputFile() {
        try {
          await mau.unlink(this.path);
        } catch {}
      }
      clear() {
        ((this.#e = ""),
          (this.#t = ""),
          this.#n.clear(),
          (this.#s = null),
          this.#r?.cancel(),
          MT.stopPolling(this.taskId),
          MT.#a.delete(this.taskId));
      }
    };
  });
