// Module: Wrt (lines 58308-59220)
  var Wrt = S(() => {
    ((xYt =
      typeof performance === "object" &&
      performance &&
      typeof performance.now === "function"
        ? performance
        : Date),
      (W4l = new Set()),
      (BDi = typeof process === "object" && !!process ? process : {}),
      (NWn = globalThis.AbortController),
      (j4l = globalThis.AbortSignal));
    if (typeof NWn > "u") {
      ((j4l = class {
        onabort;
        _onabort = [];
        reason;
        aborted = !1;
        addEventListener(n, o) {
          this._onabort.push(o);
        }
      }),
        (NWn = class {
          constructor() {
            t();
          }
          signal = new j4l();
          abort(n) {
            if (this.signal.aborted) return;
            ((this.signal.reason = n), (this.signal.aborted = !0));
            for (let o of this.signal._onabort) o(n);
            this.signal.onabort?.(n);
          }
        }));
      let e = BDi.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
        t = () => {
          if (!e) return;
          ((e = !1),
            G4l(
              "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
              "NO_ABORT_CONTROLLER",
              "ENOTSUP",
              t,
            ));
        };
    }
    t8E = Symbol("type");
    JBr = class JBr extends Array {
      constructor(e) {
        super(e);
        this.fill(0);
      }
    };
    JG = class JG {
      #e;
      #t;
      #r;
      #n;
      #o;
      #l;
      ttl;
      ttlResolution;
      ttlAutopurge;
      updateAgeOnGet;
      updateAgeOnHas;
      allowStale;
      noDisposeOnSet;
      noUpdateTTL;
      maxEntrySize;
      sizeCalculation;
      noDeleteOnFetchRejection;
      noDeleteOnStaleGet;
      allowStaleOnFetchAbort;
      allowStaleOnFetchRejection;
      ignoreFetchAbort;
      #i;
      #s;
      #c;
      #u;
      #a;
      #d;
      #p;
      #h;
      #f;
      #y;
      #m;
      #_;
      #v;
      #S;
      #E;
      #w;
      #b;
      static unsafeExposeInternals(e) {
        return {
          starts: e.#v,
          ttls: e.#S,
          sizes: e.#_,
          keyMap: e.#c,
          keyList: e.#u,
          valList: e.#a,
          next: e.#d,
          prev: e.#p,
          get head() {
            return e.#h;
          },
          get tail() {
            return e.#f;
          },
          free: e.#y,
          isBackgroundFetch: (t) => e.#g(t),
          backgroundFetch: (t, r, n, o) => e.#O(t, r, n, o),
          moveToTail: (t) => e.#P(t),
          indexes: (t) => e.#x(t),
          rindexes: (t) => e.#H(t),
          isStale: (t) => e.#A(t),
        };
      }
      get max() {
        return this.#e;
      }
      get maxSize() {
        return this.#t;
      }
      get calculatedSize() {
        return this.#s;
      }
      get size() {
        return this.#i;
      }
      get fetchMethod() {
        return this.#o;
      }
      get memoMethod() {
        return this.#l;
      }
      get dispose() {
        return this.#r;
      }
      get disposeAfter() {
        return this.#n;
      }
      constructor(e) {
        let {
          max: t = 0,
          ttl: r,
          ttlResolution: n = 1,
          ttlAutopurge: o,
          updateAgeOnGet: i,
          updateAgeOnHas: s,
          allowStale: a,
          dispose: l,
          disposeAfter: c,
          noDisposeOnSet: u,
          noUpdateTTL: d,
          maxSize: p = 0,
          maxEntrySize: f = 0,
          sizeCalculation: m,
          fetchMethod: g,
          memoMethod: y,
          noDeleteOnFetchRejection: _,
          noDeleteOnStaleGet: E,
          allowStaleOnFetchRejection: A,
          allowStaleOnFetchAbort: b,
          ignoreFetchAbort: T,
        } = e;
        if (t !== 0 && !jrt(t))
          throw TypeError("max option must be a nonnegative integer");
        let C = t ? V4l(t) : Array;
        if (!C) throw Error("invalid max value: " + t);
        if (
          ((this.#e = t),
          (this.#t = p),
          (this.maxEntrySize = f || this.#t),
          (this.sizeCalculation = m),
          this.sizeCalculation)
        ) {
          if (!this.#t && !this.maxEntrySize)
            throw TypeError(
              "cannot set sizeCalculation without setting maxSize or maxEntrySize",
            );
          if (typeof this.sizeCalculation !== "function")
            throw TypeError("sizeCalculation set to non-function");
        }
        if (y !== void 0 && typeof y !== "function")
          throw TypeError("memoMethod must be a function if defined");
        if (((this.#l = y), g !== void 0 && typeof g !== "function"))
          throw TypeError("fetchMethod must be a function if specified");
        if (
          ((this.#o = g),
          (this.#w = !!g),
          (this.#c = new Map()),
          (this.#u = Array(t).fill(void 0)),
          (this.#a = Array(t).fill(void 0)),
          (this.#d = new C(t)),
          (this.#p = new C(t)),
          (this.#h = 0),
          (this.#f = 0),
          (this.#y = HYt.create(t)),
          (this.#i = 0),
          (this.#s = 0),
          typeof l === "function")
        )
          this.#r = l;
        if (typeof c === "function") ((this.#n = c), (this.#m = []));
        else ((this.#n = void 0), (this.#m = void 0));
        if (
          ((this.#E = !!this.#r),
          (this.#b = !!this.#n),
          (this.noDisposeOnSet = !!u),
          (this.noUpdateTTL = !!d),
          (this.noDeleteOnFetchRejection = !!_),
          (this.allowStaleOnFetchRejection = !!A),
          (this.allowStaleOnFetchAbort = !!b),
          (this.ignoreFetchAbort = !!T),
          this.maxEntrySize !== 0)
        ) {
          if (this.#t !== 0) {
            if (!jrt(this.#t))
              throw TypeError(
                "maxSize must be a positive integer if specified",
              );
          }
          if (!jrt(this.maxEntrySize))
            throw TypeError(
              "maxEntrySize must be a positive integer if specified",
            );
          this.#B();
        }
        if (
          ((this.allowStale = !!a),
          (this.noDeleteOnStaleGet = !!E),
          (this.updateAgeOnGet = !!i),
          (this.updateAgeOnHas = !!s),
          (this.ttlResolution = jrt(n) || n === 0 ? n : 1),
          (this.ttlAutopurge = !!o),
          (this.ttl = r || 0),
          this.ttl)
        ) {
          if (!jrt(this.ttl))
            throw TypeError("ttl must be a positive integer if specified");
          this.#R();
        }
        if (this.#e === 0 && this.ttl === 0 && this.#t === 0)
          throw TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !this.#e && !this.#t) {
          if (B0h("LRU_CACHE_UNBOUNDED"))
            (W4l.add("LRU_CACHE_UNBOUNDED"),
              G4l(
                "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
                "UnboundedCacheWarning",
                "LRU_CACHE_UNBOUNDED",
                JG,
              ));
        }
      }
      getRemainingTTL(e) {
        return this.#c.has(e) ? 1 / 0 : 0;
      }
      #R() {
        let e = new JBr(this.#e),
          t = new JBr(this.#e);
        ((this.#S = e),
          (this.#v = t),
          (this.#C = (o, i, s = xYt.now()) => {
            if (
              ((t[o] = i !== 0 ? s : 0),
              (e[o] = i),
              i !== 0 && this.ttlAutopurge)
            ) {
              let a = setTimeout(() => {
                if (this.#A(o)) this.#k(this.#u[o], "expire");
              }, i + 1);
              if (a.unref) a.unref();
            }
          }),
          (this.#I = (o) => {
            t[o] = e[o] !== 0 ? xYt.now() : 0;
          }),
          (this.#T = (o, i) => {
            if (e[i]) {
              let s = e[i],
                a = t[i];
              if (!s || !a) return;
              ((o.ttl = s), (o.start = a), (o.now = r || n()));
              let l = o.now - a;
              o.remainingTTL = s - l;
            }
          }));
        let r = 0,
          n = () => {
            let o = xYt.now();
            if (this.ttlResolution > 0) {
              r = o;
              let i = setTimeout(() => (r = 0), this.ttlResolution);
              if (i.unref) i.unref();
            }
            return o;
          };
        ((this.getRemainingTTL = (o) => {
          let i = this.#c.get(o);
          if (i === void 0) return 0;
          let s = e[i],
            a = t[i];
          if (!s || !a) return 1 / 0;
          let l = (r || n()) - a;
          return s - l;
        }),
          (this.#A = (o) => {
            let i = t[o],
              s = e[o];
            return !!s && !!i && (r || n()) - i > s;
          }));
      }
      #I = () => {};
      #T = () => {};
      #C = () => {};
      #A = () => !1;
      #B() {
        let e = new JBr(this.#e);
        ((this.#s = 0),
          (this.#_ = e),
          (this.#D = (t) => {
            ((this.#s -= e[t]), (e[t] = 0));
          }),
          (this.#N = (t, r, n, o) => {
            if (this.#g(r)) return 0;
            if (!jrt(n))
              if (o) {
                if (typeof o !== "function")
                  throw TypeError("sizeCalculation must be a function");
                if (((n = o(r, t)), !jrt(n)))
                  throw TypeError(
                    "sizeCalculation return invalid (expect positive integer)",
                  );
              } else
                throw TypeError(
                  "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.",
                );
            return n;
          }),
          (this.#M = (t, r, n) => {
            if (((e[t] = r), this.#t)) {
              let o = this.#t - e[t];
              while (this.#s > o) this.#L(!0);
            }
            if (((this.#s += e[t]), n))
              ((n.entrySize = r), (n.totalCalculatedSize = this.#s));
          }));
      }
      #D = (e) => {};
      #M = (e, t, r) => {};
      #N = (e, t, r, n) => {
        if (r || n)
          throw TypeError(
            "cannot set size without setting maxSize or maxEntrySize on cache",
          );
        return 0;
      };
      *#x({ allowStale: e = this.allowStale } = {}) {
        if (this.#i)
          for (let t = this.#f; ;) {
            if (!this.#$(t)) break;
            if (e || !this.#A(t)) yield t;
            if (t === this.#h) break;
            else t = this.#p[t];
          }
      }
      *#H({ allowStale: e = this.allowStale } = {}) {
        if (this.#i)
          for (let t = this.#h; ;) {
            if (!this.#$(t)) break;
            if (e || !this.#A(t)) yield t;
            if (t === this.#f) break;
            else t = this.#d[t];
          }
      }
      #$(e) {
        return e !== void 0 && this.#c.get(this.#u[e]) === e;
      }
      *entries() {
        for (let e of this.#x())
          if (
            this.#a[e] !== void 0 &&
            this.#u[e] !== void 0 &&
            !this.#g(this.#a[e])
          )
            yield [this.#u[e], this.#a[e]];
      }
      *rentries() {
        for (let e of this.#H())
          if (
            this.#a[e] !== void 0 &&
            this.#u[e] !== void 0 &&
            !this.#g(this.#a[e])
          )
            yield [this.#u[e], this.#a[e]];
      }
      *keys() {
        for (let e of this.#x()) {
          let t = this.#u[e];
          if (t !== void 0 && !this.#g(this.#a[e])) yield t;
        }
      }
      *rkeys() {
        for (let e of this.#H()) {
          let t = this.#u[e];
          if (t !== void 0 && !this.#g(this.#a[e])) yield t;
        }
      }
      *values() {
        for (let e of this.#x())
          if (this.#a[e] !== void 0 && !this.#g(this.#a[e])) yield this.#a[e];
      }
      *rvalues() {
        for (let e of this.#H())
          if (this.#a[e] !== void 0 && !this.#g(this.#a[e])) yield this.#a[e];
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      [Symbol.toStringTag] = "LRUCache";
      find(e, t = {}) {
        for (let r of this.#x()) {
          let n = this.#a[r],
            o = this.#g(n) ? n.__staleWhileFetching : n;
          if (o === void 0) continue;
          if (e(o, this.#u[r], this)) return this.get(this.#u[r], t);
        }
      }
      forEach(e, t = this) {
        for (let r of this.#x()) {
          let n = this.#a[r],
            o = this.#g(n) ? n.__staleWhileFetching : n;
          if (o === void 0) continue;
          e.call(t, o, this.#u[r], this);
        }
      }
      rforEach(e, t = this) {
        for (let r of this.#H()) {
          let n = this.#a[r],
            o = this.#g(n) ? n.__staleWhileFetching : n;
          if (o === void 0) continue;
          e.call(t, o, this.#u[r], this);
        }
      }
      purgeStale() {
        let e = !1;
        for (let t of this.#H({ allowStale: !0 }))
          if (this.#A(t)) (this.#k(this.#u[t], "expire"), (e = !0));
        return e;
      }
      info(e) {
        let t = this.#c.get(e);
        if (t === void 0) return;
        let r = this.#a[t],
          n = this.#g(r) ? r.__staleWhileFetching : r;
        if (n === void 0) return;
        let o = { value: n };
        if (this.#S && this.#v) {
          let i = this.#S[t],
            s = this.#v[t];
          if (i && s) {
            let a = i - (xYt.now() - s);
            ((o.ttl = a), (o.start = Date.now()));
          }
        }
        if (this.#_) o.size = this.#_[t];
        return o;
      }
      dump() {
        let e = [];
        for (let t of this.#x({ allowStale: !0 })) {
          let r = this.#u[t],
            n = this.#a[t],
            o = this.#g(n) ? n.__staleWhileFetching : n;
          if (o === void 0 || r === void 0) continue;
          let i = { value: o };
          if (this.#S && this.#v) {
            i.ttl = this.#S[t];
            let s = xYt.now() - this.#v[t];
            i.start = Math.floor(Date.now() - s);
          }
          if (this.#_) i.size = this.#_[t];
          e.unshift([r, i]);
        }
        return e;
      }
      load(e) {
        this.clear();
        for (let [t, r] of e) {
          if (r.start) {
            let n = Date.now() - r.start;
            r.start = xYt.now() - n;
          }
          this.set(t, r.value, r);
        }
      }
      set(e, t, r = {}) {
        if (t === void 0) return (this.delete(e), this);
        let {
            ttl: n = this.ttl,
            start: o,
            noDisposeOnSet: i = this.noDisposeOnSet,
            sizeCalculation: s = this.sizeCalculation,
            status: a,
          } = r,
          { noUpdateTTL: l = this.noUpdateTTL } = r,
          c = this.#N(e, t, r.size || 0, s);
        if (this.maxEntrySize && c > this.maxEntrySize) {
          if (a) ((a.set = "miss"), (a.maxEntrySizeExceeded = !0));
          return (this.#k(e, "set"), this);
        }
        let u = this.#i === 0 ? void 0 : this.#c.get(e);
        if (u === void 0) {
          if (
            ((u =
              this.#i === 0
                ? this.#f
                : this.#y.length !== 0
                  ? this.#y.pop()
                  : this.#i === this.#e
                    ? this.#L(!1)
                    : this.#i),
            (this.#u[u] = e),
            (this.#a[u] = t),
            this.#c.set(e, u),
            (this.#d[this.#f] = u),
            (this.#p[u] = this.#f),
            (this.#f = u),
            this.#i++,
            this.#M(u, c, a),
            a)
          )
            a.set = "add";
          l = !1;
        } else {
          this.#P(u);
          let d = this.#a[u];
          if (t !== d) {
            if (this.#w && this.#g(d)) {
              d.__abortController.abort(Error("replaced"));
              let { __staleWhileFetching: p } = d;
              if (p !== void 0 && !i) {
                if (this.#E) this.#r?.(p, e, "set");
                if (this.#b) this.#m?.push([p, e, "set"]);
              }
            } else if (!i) {
              if (this.#E) this.#r?.(d, e, "set");
              if (this.#b) this.#m?.push([d, e, "set"]);
            }
            if ((this.#D(u), this.#M(u, c, a), (this.#a[u] = t), a)) {
              a.set = "replace";
              let p = d && this.#g(d) ? d.__staleWhileFetching : d;
              if (p !== void 0) a.oldValue = p;
            }
          } else if (a) a.set = "update";
        }
        if (n !== 0 && !this.#S) this.#R();
        if (this.#S) {
          if (!l) this.#C(u, n, o);
          if (a) this.#T(a, u);
        }
        if (!i && this.#b && this.#m) {
          let d = this.#m,
            p;
          while ((p = d?.shift())) this.#n?.(...p);
        }
        return this;
      }
      pop() {
        try {
          while (this.#i) {
            let e = this.#a[this.#h];
            if ((this.#L(!0), this.#g(e))) {
              if (e.__staleWhileFetching) return e.__staleWhileFetching;
            } else if (e !== void 0) return e;
          }
        } finally {
          if (this.#b && this.#m) {
            let e = this.#m,
              t;
            while ((t = e?.shift())) this.#n?.(...t);
          }
        }
      }
      #L(e) {
        let t = this.#h,
          r = this.#u[t],
          n = this.#a[t];
        if (this.#w && this.#g(n)) n.__abortController.abort(Error("evicted"));
        else if (this.#E || this.#b) {
          if (this.#E) this.#r?.(n, r, "evict");
          if (this.#b) this.#m?.push([n, r, "evict"]);
        }
        if ((this.#D(t), e))
          ((this.#u[t] = void 0), (this.#a[t] = void 0), this.#y.push(t));
        if (this.#i === 1) ((this.#h = this.#f = 0), (this.#y.length = 0));
        else this.#h = this.#d[t];
        return (this.#c.delete(r), this.#i--, t);
      }
      has(e, t = {}) {
        let { updateAgeOnHas: r = this.updateAgeOnHas, status: n } = t,
          o = this.#c.get(e);
        if (o !== void 0) {
          let i = this.#a[o];
          if (this.#g(i) && i.__staleWhileFetching === void 0) return !1;
          if (!this.#A(o)) {
            if (r) this.#I(o);
            if (n) ((n.has = "hit"), this.#T(n, o));
            return !0;
          } else if (n) ((n.has = "stale"), this.#T(n, o));
        } else if (n) n.has = "miss";
        return !1;
      }
      peek(e, t = {}) {
        let { allowStale: r = this.allowStale } = t,
          n = this.#c.get(e);
        if (n === void 0 || (!r && this.#A(n))) return;
        let o = this.#a[n];
        return this.#g(o) ? o.__staleWhileFetching : o;
      }
      #O(e, t, r, n) {
        let o = t === void 0 ? void 0 : this.#a[t];
        if (this.#g(o)) return o;
        let i = new NWn(),
          { signal: s } = r;
        s?.addEventListener("abort", () => i.abort(s.reason), {
          signal: i.signal,
        });
        let a = { signal: i.signal, options: r, context: n },
          l = (m, g = !1) => {
            let { aborted: y } = i.signal,
              _ = r.ignoreFetchAbort && m !== void 0;
            if (r.status)
              if (y && !g) {
                if (
                  ((r.status.fetchAborted = !0),
                  (r.status.fetchError = i.signal.reason),
                  _)
                )
                  r.status.fetchAbortIgnored = !0;
              } else r.status.fetchResolved = !0;
            if (y && !_ && !g) return u(i.signal.reason);
            let E = p;
            if (this.#a[t] === p)
              if (m === void 0)
                if (E.__staleWhileFetching) this.#a[t] = E.__staleWhileFetching;
                else this.#k(e, "fetch");
              else {
                if (r.status) r.status.fetchUpdated = !0;
                this.set(e, m, a.options);
              }
            return m;
          },
          c = (m) => {
            if (r.status)
              ((r.status.fetchRejected = !0), (r.status.fetchError = m));
            return u(m);
          },
          u = (m) => {
            let { aborted: g } = i.signal,
              y = g && r.allowStaleOnFetchAbort,
              _ = y || r.allowStaleOnFetchRejection,
              E = _ || r.noDeleteOnFetchRejection,
              A = p;
            if (this.#a[t] === p) {
              if (!E || A.__staleWhileFetching === void 0) this.#k(e, "fetch");
              else if (!y) this.#a[t] = A.__staleWhileFetching;
            }
            if (_) {
              if (r.status && A.__staleWhileFetching !== void 0)
                r.status.returnedStale = !0;
              return A.__staleWhileFetching;
            } else if (A.__returned === A) throw m;
          },
          d = (m, g) => {
            let y = this.#o?.(e, o, a);
            if (y && y instanceof Promise)
              y.then((_) => m(_ === void 0 ? void 0 : _), g);
            i.signal.addEventListener("abort", () => {
              if (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) {
                if ((m(void 0), r.allowStaleOnFetchAbort)) m = (_) => l(_, !0);
              }
            });
          };
        if (r.status) r.status.fetchDispatched = !0;
        let p = new Promise(d).then(l, c),
          f = Object.assign(p, {
            __abortController: i,
            __staleWhileFetching: o,
            __returned: void 0,
          });
        if (t === void 0)
          (this.set(e, f, { ...a.options, status: void 0 }),
            (t = this.#c.get(e)));
        else this.#a[t] = f;
        return f;
      }
      #g(e) {
        if (!this.#w) return !1;
        let t = e;
        return (
          !!t &&
          t instanceof Promise &&
          t.hasOwnProperty("__staleWhileFetching") &&
          t.__abortController instanceof NWn
        );
      }
      async fetch(e, t = {}) {
        let {
          allowStale: r = this.allowStale,
          updateAgeOnGet: n = this.updateAgeOnGet,
          noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
          ttl: i = this.ttl,
          noDisposeOnSet: s = this.noDisposeOnSet,
          size: a = 0,
          sizeCalculation: l = this.sizeCalculation,
          noUpdateTTL: c = this.noUpdateTTL,
          noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection,
          allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
          ignoreFetchAbort: p = this.ignoreFetchAbort,
          allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
          context: m,
          forceRefresh: g = !1,
          status: y,
          signal: _,
        } = t;
        if (!this.#w) {
          if (y) y.fetch = "get";
          return this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            status: y,
          });
        }
        let E = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            ttl: i,
            noDisposeOnSet: s,
            size: a,
            sizeCalculation: l,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: u,
            allowStaleOnFetchRejection: d,
            allowStaleOnFetchAbort: f,
            ignoreFetchAbort: p,
            status: y,
            signal: _,
          },
          A = this.#c.get(e);
        if (A === void 0) {
          if (y) y.fetch = "miss";
          let b = this.#O(e, A, E, m);
          return (b.__returned = b);
        } else {
          let b = this.#a[A];
          if (this.#g(b)) {
            let k = r && b.__staleWhileFetching !== void 0;
            if (y) {
              if (((y.fetch = "inflight"), k)) y.returnedStale = !0;
            }
            return k ? b.__staleWhileFetching : (b.__returned = b);
          }
          let T = this.#A(A);
          if (!g && !T) {
            if (y) y.fetch = "hit";
            if ((this.#P(A), n)) this.#I(A);
            if (y) this.#T(y, A);
            return b;
          }
          let C = this.#O(e, A, E, m),
            R = C.__staleWhileFetching !== void 0 && r;
          if (y) {
            if (((y.fetch = T ? "stale" : "refresh"), R && T))
              y.returnedStale = !0;
          }
          return R ? C.__staleWhileFetching : (C.__returned = C);
        }
      }
      async forceFetch(e, t = {}) {
        let r = await this.fetch(e, t);
        if (r === void 0) throw Error("fetch() returned undefined");
        return r;
      }
      memo(e, t = {}) {
        let r = this.#l;
        if (!r) throw Error("no memoMethod provided to constructor");
        let { context: n, forceRefresh: o, ...i } = t,
          s = this.get(e, i);
        if (!o && s !== void 0) return s;
        let a = r(e, s, { options: i, context: n });
        return (this.set(e, a, i), a);
      }
      get(e, t = {}) {
        let {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            status: i,
          } = t,
          s = this.#c.get(e);
        if (s !== void 0) {
          let a = this.#a[s],
            l = this.#g(a);
          if (i) this.#T(i, s);
          if (this.#A(s)) {
            if (i) i.get = "stale";
            if (!l) {
              if (!o) this.#k(e, "expire");
              if (i && r) i.returnedStale = !0;
              return r ? a : void 0;
            } else {
              if (i && r && a.__staleWhileFetching !== void 0)
                i.returnedStale = !0;
              return r ? a.__staleWhileFetching : void 0;
            }
          } else {
            if (i) i.get = "hit";
            if (l) return a.__staleWhileFetching;
            if ((this.#P(s), n)) this.#I(s);
            return a;
          }
        } else if (i) i.get = "miss";
      }
      #F(e, t) {
        ((this.#p[t] = e), (this.#d[e] = t));
      }
      #P(e) {
        if (e !== this.#f) {
          if (e === this.#h) this.#h = this.#d[e];
          else this.#F(this.#p[e], this.#d[e]);
          (this.#F(this.#f, e), (this.#f = e));
        }
      }
      delete(e) {
        return this.#k(e, "delete");
      }
      #k(e, t) {
        let r = !1;
        if (this.#i !== 0) {
          let n = this.#c.get(e);
          if (n !== void 0)
            if (((r = !0), this.#i === 1)) this.#U(t);
            else {
              this.#D(n);
              let o = this.#a[n];
              if (this.#g(o)) o.__abortController.abort(Error("deleted"));
              else if (this.#E || this.#b) {
                if (this.#E) this.#r?.(o, e, t);
                if (this.#b) this.#m?.push([o, e, t]);
              }
              if (
                (this.#c.delete(e),
                (this.#u[n] = void 0),
                (this.#a[n] = void 0),
                n === this.#f)
              )
                this.#f = this.#p[n];
              else if (n === this.#h) this.#h = this.#d[n];
              else {
                let i = this.#p[n];
                this.#d[i] = this.#d[n];
                let s = this.#d[n];
                this.#p[s] = this.#p[n];
              }
              (this.#i--, this.#y.push(n));
            }
        }
        if (this.#b && this.#m?.length) {
          let n = this.#m,
            o;
          while ((o = n?.shift())) this.#n?.(...o);
        }
        return r;
      }
      clear() {
        return this.#U("delete");
      }
      #U(e) {
        for (let t of this.#H({ allowStale: !0 })) {
          let r = this.#a[t];
          if (this.#g(r)) r.__abortController.abort(Error("deleted"));
          else {
            let n = this.#u[t];
            if (this.#E) this.#r?.(r, n, e);
            if (this.#b) this.#m?.push([r, n, e]);
          }
        }
        if (
          (this.#c.clear(),
          this.#a.fill(void 0),
          this.#u.fill(void 0),
          this.#S && this.#v)
        )
          (this.#S.fill(0), this.#v.fill(0));
        if (this.#_) this.#_.fill(0);
        if (
          ((this.#h = 0),
          (this.#f = 0),
          (this.#y.length = 0),
          (this.#s = 0),
          (this.#i = 0),
          this.#b && this.#m)
        ) {
          let t = this.#m,
            r;
          while ((r = t?.shift())) this.#n?.(...r);
        }
      }
    };
  });
