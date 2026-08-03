// Module: IOe (lines 31536-31706)
  var IOe = S(() => {
    II();
    uMl();
    ((dMl = Symbol("internals")), (JJm = /[^\x09\x20-\x7E\x80-\xFF]/g));
    p2r = class p2r {
      constructor(e) {
        e && this.set(e);
      }
      set(e, t, r) {
        let n = this;
        function o(s, a, l) {
          let c = d2r(a);
          if (!c) throw Error("header name must be a non-empty string");
          let u = Gn.findKey(n, c);
          if (
            !u ||
            n[u] === void 0 ||
            l === !0 ||
            (l === void 0 && n[u] !== !1)
          )
            n[u || a] = D4n(s);
        }
        let i = (s, a) => Gn.forEach(s, (l, c) => o(l, c, a));
        if (Gn.isPlainObject(e) || e instanceof this.constructor) i(e, t);
        else if (Gn.isString(e) && (e = e.trim()) && !tQm(e)) i(cMl(e), t);
        else if (Gn.isObject(e) && Gn.isIterable(e)) {
          let s = {},
            a,
            l;
          for (let c of e) {
            if (!Gn.isArray(c))
              throw TypeError("Object iterator must return a key-value pair");
            s[(l = c[0])] = (a = s[l])
              ? Gn.isArray(a)
                ? [...a, c[1]]
                : [a, c[1]]
              : c[1];
          }
          i(s, t);
        } else e != null && o(t, e, r);
        return this;
      }
      get(e, t) {
        if (((e = d2r(e)), e)) {
          let r = Gn.findKey(this, e);
          if (r) {
            let n = this[r];
            if (!t) return n;
            if (t === !0) return eQm(n);
            if (Gn.isFunction(t)) return t.call(this, n, r);
            if (Gn.isRegExp(t)) return t.exec(n);
            throw TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(e, t) {
        if (((e = d2r(e)), e)) {
          let r = Gn.findKey(this, e);
          return !!(
            r &&
            this[r] !== void 0 &&
            (!t || Exi(this, this[r], r, t))
          );
        }
        return !1;
      }
      delete(e, t) {
        let r = this,
          n = !1;
        function o(i) {
          if (((i = d2r(i)), i)) {
            let s = Gn.findKey(r, i);
            if (s && (!t || Exi(r, r[s], s, t))) (delete r[s], (n = !0));
          }
        }
        if (Gn.isArray(e)) e.forEach(o);
        else o(e);
        return n;
      }
      clear(e) {
        let t = Object.keys(this),
          r = t.length,
          n = !1;
        while (r--) {
          let o = t[r];
          if (!e || Exi(this, this[o], o, e, !0)) (delete this[o], (n = !0));
        }
        return n;
      }
      normalize(e) {
        let t = this,
          r = {};
        return (
          Gn.forEach(this, (n, o) => {
            let i = Gn.findKey(r, o);
            if (i) {
              ((t[i] = D4n(n)), delete t[o]);
              return;
            }
            let s = e ? rQm(o) : String(o).trim();
            if (s !== o) delete t[o];
            ((t[s] = D4n(n)), (r[s] = !0));
          }),
          this
        );
      }
      concat(...e) {
        return this.constructor.concat(this, ...e);
      }
      toJSON(e) {
        let t = Object.create(null);
        return (
          Gn.forEach(this, (r, n) => {
            r != null &&
              r !== !1 &&
              (t[n] = e && Gn.isArray(r) ? r.join(", ") : r);
          }),
          t
        );
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t)
          .join(`
`);
      }
      getSetCookie() {
        return this.get("set-cookie") || [];
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(e) {
        return e instanceof this ? e : new this(e);
      }
      static concat(e, ...t) {
        let r = new this(e);
        return (t.forEach((n) => r.set(n)), r);
      }
      static accessor(e) {
        let r = (this[dMl] = this[dMl] = { accessors: {} }).accessors,
          n = this.prototype;
        function o(i) {
          let s = d2r(i);
          if (!r[s]) (nQm(n, i), (r[s] = !0));
        }
        return (Gn.isArray(e) ? e.forEach(o) : o(e), this);
      }
    };
    p2r.accessor([
      "Content-Type",
      "Content-Length",
      "Accept",
      "Accept-Encoding",
      "User-Agent",
      "Authorization",
    ]);
    Gn.reduceDescriptors(p2r.prototype, ({ value: e }, t) => {
      let r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => e,
        set(n) {
          this[r] = n;
        },
      };
    });
    Gn.freezeMethods(p2r);
    NO = p2r;
  });
