// Module: Jwu (lines 239248-239410)
  var Jwu = S(() => {
    ((n8e = require("fs/promises")),
      (zwu = require("stream")),
      (o8e = require("path")),
      (mpe = {
        FILE_TYPE: "files",
        DIR_TYPE: "directories",
        FILE_DIR_TYPE: "files_directories",
        EVERYTHING_TYPE: "all",
      }),
      (Zis = {
        root: ".",
        fileFilter: (e) => !0,
        directoryFilter: (e) => !0,
        type: mpe.FILE_TYPE,
        lstat: !1,
        depth: 2147483648,
        alwaysStat: !1,
        highWaterMark: 4096,
      }));
    Object.freeze(Zis);
    ((Pqg = new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", Kwu])),
      (Gwu = [
        mpe.DIR_TYPE,
        mpe.EVERYTHING_TYPE,
        mpe.FILE_DIR_TYPE,
        mpe.FILE_TYPE,
      ]),
      (Mqg = new Set([mpe.DIR_TYPE, mpe.EVERYTHING_TYPE, mpe.FILE_DIR_TYPE])),
      (Lqg = new Set([mpe.EVERYTHING_TYPE, mpe.FILE_DIR_TYPE, mpe.FILE_TYPE])));
    Ywu = class Ywu extends zwu.Readable {
      constructor(e = {}) {
        super({
          objectMode: !0,
          autoDestroy: !0,
          highWaterMark: e.highWaterMark,
        });
        let t = { ...Zis, ...e },
          { root: r, type: n } = t;
        ((this._fileFilter = qwu(t.fileFilter)),
          (this._directoryFilter = qwu(t.directoryFilter)));
        let o = t.lstat ? n8e.lstat : n8e.stat;
        if (Nqg) this._stat = (i) => o(i, { bigint: !0 });
        else this._stat = o;
        ((this._maxDepth = t.depth ?? Zis.depth),
          (this._wantsDir = n ? Mqg.has(n) : !1),
          (this._wantsFile = n ? Lqg.has(n) : !1),
          (this._wantsEverything = n === mpe.EVERYTHING_TYPE),
          (this._root = o8e.resolve(r)),
          (this._isDirent = !t.alwaysStat),
          (this._statsProp = this._isDirent ? "dirent" : "stats"),
          (this._rdOptions = {
            encoding: "utf8",
            withFileTypes: this._isDirent,
          }),
          (this.parents = [this._exploreDir(r, 1)]),
          (this.reading = !1),
          (this.parent = void 0));
      }
      async _read(e) {
        if (this.reading) return;
        this.reading = !0;
        try {
          while (!this.destroyed && e > 0) {
            let t = this.parent,
              r = t && t.files;
            if (r && r.length > 0) {
              let { path: n, depth: o } = t,
                i = r.splice(0, e).map((a) => this._formatEntry(a, n)),
                s = await Promise.all(i);
              for (let a of s) {
                if (!a) continue;
                if (this.destroyed) return;
                let l = await this._getEntryType(a);
                if (l === "directory" && this._directoryFilter(a)) {
                  if (o <= this._maxDepth)
                    this.parents.push(this._exploreDir(a.fullPath, o + 1));
                  if (this._wantsDir) (this.push(a), e--);
                } else if (
                  (l === "file" || this._includeAsFile(a)) &&
                  this._fileFilter(a)
                ) {
                  if (this._wantsFile) (this.push(a), e--);
                }
              }
            } else {
              let n = this.parents.pop();
              if (!n) {
                this.push(null);
                break;
              }
              if (((this.parent = await n), this.destroyed)) return;
            }
          }
        } catch (t) {
          this.destroy(t);
        } finally {
          this.reading = !1;
        }
      }
      async _exploreDir(e, t) {
        let r;
        try {
          r = await n8e.readdir(e, this._rdOptions);
        } catch (n) {
          this._onError(n);
        }
        return { files: r, depth: t, path: e };
      }
      async _formatEntry(e, t) {
        let r,
          n = this._isDirent ? e.name : e;
        try {
          let o = o8e.resolve(o8e.join(t, n));
          ((r = {
            path: o8e.relative(this._root, o),
            fullPath: o,
            basename: n,
          }),
            (r[this._statsProp] = this._isDirent ? e : await this._stat(o)));
        } catch (o) {
          this._onError(o);
          return;
        }
        return r;
      }
      _onError(e) {
        if (Oqg(e) && !this.destroyed) this.emit("warn", e);
        else this.destroy(e);
      }
      async _getEntryType(e) {
        if (!e && this._statsProp in e) return "";
        let t = e[this._statsProp];
        if (!t) return "";
        if (t.isFile()) return "file";
        if (t.isDirectory()) return "directory";
        if (t && t.isSymbolicLink()) {
          let r = e.fullPath;
          try {
            let n = await n8e.realpath(r),
              o = await n8e.lstat(n);
            if (o.isFile()) return "file";
            if (o.isDirectory()) {
              let i = n.length;
              if (r.startsWith(n) && r.substr(i, 1) === o8e.sep) {
                let s = Error(
                  `Circular symlink detected: "${r}" points to "${n}"`,
                );
                return ((s.code = Kwu), this._onError(s));
              }
              return "directory";
            }
          } catch (n) {
            return (this._onError(n), "");
          }
        }
      }
      _includeAsFile(e) {
        let t = e && e[this._statsProp];
        return t && this._wantsEverything && !t.isDirectory();
      }
    };
  });
