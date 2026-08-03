// Module: g$e (lines 240211-240635)
  var g$e = S(() => {
    Jwu();
    nTu();
    ((cTu = require("fs")),
      (Dco = require("fs/promises")),
      (uTu = require("events")),
      (FS = x(require("path"))));
    /*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */ ((Zqg =
      /\\/g),
      (oTu = /\/\//),
      (e8g = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/),
      (t8g = /^\.[/\\]/));
    s8g = Object.freeze(new Set());
    Pco = class Pco extends uTu.EventEmitter {
      constructor(e = {}) {
        super();
        ((this.closed = !1),
          (this._closers = new Map()),
          (this._ignoredPaths = new Set()),
          (this._throttled = new Map()),
          (this._streams = new Set()),
          (this._symlinkPaths = new Map()),
          (this._watched = new Map()),
          (this._pendingWrites = new Map()),
          (this._pendingUnlinks = new Map()),
          (this._readyCount = 0),
          (this._readyEmitted = !1));
        let t = e.awaitWriteFinish,
          r = { stabilityThreshold: 2000, pollInterval: 100 },
          n = {
            persistent: !0,
            ignoreInitial: !1,
            ignorePermissionErrors: !1,
            interval: 100,
            binaryInterval: 300,
            followSymlinks: !0,
            usePolling: !1,
            atomic: !0,
            ...e,
            ignored: e.ignored ? Rco(e.ignored) : Rco([]),
            awaitWriteFinish:
              t === !0 ? r : typeof t === "object" ? { ...r, ...t } : !1,
          };
        if (tTu) n.usePolling = !0;
        if (n.atomic === void 0) n.atomic = !n.usePolling;
        let o = process.env.CHOKIDAR_USEPOLLING;
        if (o !== void 0) {
          let a = o.toLowerCase();
          if (a === "false" || a === "0") n.usePolling = !1;
          else if (a === "true" || a === "1") n.usePolling = !0;
          else n.usePolling = !!a;
        }
        let i = process.env.CHOKIDAR_INTERVAL;
        if (i) n.interval = Number.parseInt(i, 10);
        let s = 0;
        ((this._emitReady = () => {
          if ((s++, s >= this._readyCount))
            ((this._emitReady = kco),
              (this._readyEmitted = !0),
              process.nextTick(() => this.emit(GD.READY)));
        }),
          (this._emitRaw = (...a) => this.emit(GD.RAW, ...a)),
          (this._boundRemove = this._remove.bind(this)),
          (this.options = n),
          (this._nodeFsHandler = new oss(this)),
          Object.freeze(n));
      }
      _addIgnoredPath(e) {
        if (sss(e)) {
          for (let t of this._ignoredPaths)
            if (sss(t) && t.path === e.path && t.recursive === e.recursive)
              return;
        }
        this._ignoredPaths.add(e);
      }
      _removeIgnoredPath(e) {
        if ((this._ignoredPaths.delete(e), typeof e === "string")) {
          for (let t of this._ignoredPaths)
            if (sss(t) && t.path === e) this._ignoredPaths.delete(t);
        }
      }
      add(e, t, r) {
        let { cwd: n } = this.options;
        ((this.closed = !1), (this._closePromise = void 0));
        let o = sTu(e);
        if (n) o = o.map((i) => i8g(i, n));
        if (
          (o.forEach((i) => {
            this._removeIgnoredPath(i);
          }),
          (this._userIgnored = void 0),
          !this._readyCount)
        )
          this._readyCount = 0;
        return (
          (this._readyCount += o.length),
          Promise.all(
            o.map(async (i) => {
              let s = await this._nodeFsHandler._addToNodeFs(
                i,
                !r,
                void 0,
                0,
                t,
              );
              if (s) this._emitReady();
              return s;
            }),
          ).then((i) => {
            if (this.closed) return;
            i.forEach((s) => {
              if (s) this.add(FS.dirname(s), FS.basename(t || s));
            });
          }),
          this
        );
      }
      unwatch(e) {
        if (this.closed) return this;
        let t = sTu(e),
          { cwd: r } = this.options;
        return (
          t.forEach((n) => {
            if (!FS.isAbsolute(n) && !this._closers.has(n)) {
              if (r) n = FS.join(r, n);
              n = FS.resolve(n);
            }
            if (
              (this._closePath(n),
              this._addIgnoredPath(n),
              this._watched.has(n))
            )
              this._addIgnoredPath({ path: n, recursive: !0 });
            this._userIgnored = void 0;
          }),
          this
        );
      }
      close() {
        if (this._closePromise) return this._closePromise;
        ((this.closed = !0), this.removeAllListeners());
        let e = [];
        return (
          this._closers.forEach((t) =>
            t.forEach((r) => {
              let n = r();
              if (n instanceof Promise) e.push(n);
            }),
          ),
          this._streams.forEach((t) => t.destroy()),
          (this._userIgnored = void 0),
          (this._readyCount = 0),
          (this._readyEmitted = !1),
          this._watched.forEach((t) => t.dispose()),
          this._closers.clear(),
          this._watched.clear(),
          this._streams.clear(),
          this._symlinkPaths.clear(),
          this._throttled.clear(),
          (this._closePromise = e.length
            ? Promise.all(e).then(() => {
                return;
              })
            : Promise.resolve()),
          this._closePromise
        );
      }
      getWatched() {
        let e = {};
        return (
          this._watched.forEach((t, r) => {
            let o =
              (this.options.cwd ? FS.relative(this.options.cwd, r) : r) || dTu;
            e[o] = t.getChildren().sort();
          }),
          e
        );
      }
      emitWithAll(e, t) {
        if ((this.emit(e, ...t), e !== GD.ERROR)) this.emit(GD.ALL, e, ...t);
      }
      async _emit(e, t, r) {
        if (this.closed) return;
        let n = this.options;
        if (nss) t = FS.normalize(t);
        if (n.cwd) t = FS.relative(n.cwd, t);
        let o = [t];
        if (r != null) o.push(r);
        let i = n.awaitWriteFinish,
          s;
        if (i && (s = this._pendingWrites.get(t)))
          return ((s.lastChange = new Date()), this);
        if (n.atomic) {
          if (e === GD.UNLINK)
            return (
              this._pendingUnlinks.set(t, [e, ...o]),
              setTimeout(
                () => {
                  this._pendingUnlinks.forEach((a, l) => {
                    (this.emit(...a),
                      this.emit(GD.ALL, ...a),
                      this._pendingUnlinks.delete(l));
                  });
                },
                typeof n.atomic === "number" ? n.atomic : 100,
              ),
              this
            );
          if (e === GD.ADD && this._pendingUnlinks.has(t))
            ((e = GD.CHANGE), this._pendingUnlinks.delete(t));
        }
        if (i && (e === GD.ADD || e === GD.CHANGE) && this._readyEmitted) {
          let a = (l, c) => {
            if (this.closed) return;
            if (l) ((e = GD.ERROR), (o[0] = l), this.emitWithAll(e, o));
            else if (c) {
              if (o.length > 1) o[1] = c;
              else o.push(c);
              this.emitWithAll(e, o);
            }
          };
          return (this._awaitWriteFinish(t, i.stabilityThreshold, e, a), this);
        }
        if (e === GD.CHANGE) {
          if (!this._throttle(GD.CHANGE, t, 50)) return this;
        }
        if (
          n.alwaysStat &&
          r === void 0 &&
          (e === GD.ADD || e === GD.ADD_DIR || e === GD.CHANGE)
        ) {
          let a = n.cwd ? FS.join(n.cwd, t) : t,
            l;
          try {
            l = await Dco.stat(a);
          } catch (c) {}
          if (!l || this.closed) return;
          o.push(l);
        }
        return (this.emitWithAll(e, o), this);
      }
      _handleError(e) {
        let t = e && e.code;
        if (
          e &&
          !this.closed &&
          t !== "ENOENT" &&
          t !== "ENOTDIR" &&
          (!this.options.ignorePermissionErrors ||
            (t !== "EPERM" && t !== "EACCES"))
        )
          this.emit(GD.ERROR, e);
        return e || this.closed;
      }
      _throttle(e, t, r) {
        if (!this._throttled.has(e)) this._throttled.set(e, new Map());
        let n = this._throttled.get(e);
        if (!n) throw Error("invalid throttle");
        let o = n.get(t);
        if (o) return (o.count++, !1);
        let i,
          s = () => {
            let l = n.get(t),
              c = l ? l.count : 0;
            if ((n.delete(t), clearTimeout(i), l))
              clearTimeout(l.timeoutObject);
            return c;
          };
        i = setTimeout(s, r);
        let a = { timeoutObject: i, clear: s, count: 0 };
        return (n.set(t, a), a);
      }
      _incrReadyCount() {
        return this._readyCount++;
      }
      _awaitWriteFinish(e, t, r, n) {
        let o = this.options.awaitWriteFinish;
        if (typeof o !== "object") return;
        let i = o.pollInterval,
          s,
          a = e;
        if (this.options.cwd && !FS.isAbsolute(e))
          a = FS.join(this.options.cwd, e);
        let l = new Date(),
          c = this._pendingWrites;
        function u(d) {
          cTu.stat(a, (p, f) => {
            if (p || !c.has(e)) {
              if (p && p.code !== "ENOENT") n(p);
              return;
            }
            let m = Number(new Date());
            if (d && f.size !== d.size) c.get(e).lastChange = m;
            let g = c.get(e);
            if (m - g.lastChange >= t) (c.delete(e), n(void 0, f));
            else s = setTimeout(u, i, f);
          });
        }
        if (!c.has(e))
          (c.set(e, {
            lastChange: l,
            cancelWait: () => (c.delete(e), clearTimeout(s), r),
          }),
            (s = setTimeout(u, i)));
      }
      _isIgnored(e, t) {
        if (this.options.atomic && e8g.test(e)) return !0;
        if (!this._userIgnored) {
          let { cwd: r } = this.options,
            o = (this.options.ignored || []).map(lTu(r)),
            s = [...[...this._ignoredPaths].map(lTu(r)), ...o];
          this._userIgnored = o8g(s, void 0);
        }
        return this._userIgnored(e, t);
      }
      _isntIgnored(e, t) {
        return !this._isIgnored(e, t);
      }
      _getWatchHelpers(e) {
        return new ass(e, this.options.followSymlinks, this);
      }
      _getWatchedDir(e) {
        let t = FS.resolve(e);
        if (!this._watched.has(t))
          this._watched.set(t, new fTu(t, this._boundRemove));
        return this._watched.get(t);
      }
      _hasReadPermissions(e) {
        if (this.options.ignorePermissionErrors) return !0;
        return Boolean(Number(e.mode) & 256);
      }
      _remove(e, t, r) {
        let n = [
          {
            directory: e,
            item: t,
            isDirectory: r,
            path: "",
            fullPath: "",
            expanded: !1,
          },
        ];
        while (n.length > 0) {
          let o = n[n.length - 1];
          if (!o.expanded) {
            o.expanded = !0;
            let d = FS.join(o.directory, o.item),
              p = FS.resolve(d);
            if (
              ((o.path = d),
              (o.fullPath = p),
              (o.isDirectory =
                o.isDirectory != null
                  ? o.isDirectory
                  : this._watched.has(d) || this._watched.has(p)),
              !this._throttle("remove", d, 100))
            ) {
              n.pop();
              continue;
            }
            if (!o.isDirectory && this._watched.size === 1)
              this.add(o.directory, o.item, !0);
            let m = this._getWatchedDir(d).getChildren();
            for (let g = m.length - 1; g >= 0; g--)
              n.push({
                directory: d,
                item: m[g],
                isDirectory: void 0,
                path: "",
                fullPath: "",
                expanded: !1,
              });
            continue;
          }
          n.pop();
          let { path: i, fullPath: s } = o,
            a = this._getWatchedDir(o.directory),
            l = a.has(o.item);
          if ((a.remove(o.item), this._symlinkPaths.has(s)))
            this._symlinkPaths.delete(s);
          let c = i;
          if (this.options.cwd) c = FS.relative(this.options.cwd, i);
          if (this.options.awaitWriteFinish && this._pendingWrites.has(c)) {
            if (this._pendingWrites.get(c).cancelWait() === GD.ADD) continue;
          }
          (this._watched.delete(i), this._watched.delete(s));
          let u = o.isDirectory ? GD.UNLINK_DIR : GD.UNLINK;
          if (l && !this._isIgnored(i)) this._emit(u, i);
          this._closePath(i);
        }
      }
      _closePath(e) {
        this._closeFile(e);
        let t = FS.dirname(e);
        this._getWatchedDir(t).remove(FS.basename(e));
      }
      _closeFile(e) {
        let t = this._closers.get(e);
        if (!t) return;
        (t.forEach((r) => r()), this._closers.delete(e));
      }
      _addPathCloser(e, t) {
        if (!t) return;
        let r = this._closers.get(e);
        if (!r) ((r = []), this._closers.set(e, r));
        r.push(t);
      }
      _readdirp(e, t) {
        if (this.closed) return;
        let r = { type: GD.ALL, alwaysStat: !0, lstat: !0, ...t, depth: 0 },
          n = Xwu(e, r);
        return (
          this._streams.add(n),
          n.once(eTu, () => {
            n = void 0;
          }),
          n.once(rss, () => {
            if (n) (this._streams.delete(n), (n = void 0));
          }),
          n
        );
      }
    };
    $8 = { watch: mTu, FSWatcher: Pco };
  });
