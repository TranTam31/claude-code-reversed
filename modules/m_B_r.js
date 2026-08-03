// Module: B$r (lines 6724-7995)
  var B$r = S(() => {
    sUn();
    r9t();
    tUn();
    nUn();
    uh();
    FAi();
    uh();
    ((dh = Ro("$ZodType", (e, t) => {
      var r;
      (e ?? (e = {}),
        (e._zod.def = t),
        (e._zod.bag = e._zod.bag || {}),
        (e._zod.version = $Ai));
      let n = [...(e._zod.def.checks ?? [])];
      if (e._zod.traits.has("$ZodCheck")) n.unshift(e);
      for (let o of n) for (let i of o._zod.onattach) i(e);
      if (n.length === 0)
        ((r = e._zod).deferred ?? (r.deferred = []),
          e._zod.deferred?.push(() => {
            e._zod.run = e._zod.parse;
          }));
      else {
        let o = (i, s, a) => {
          let l = b0t(i),
            c;
          for (let u of s) {
            if (u._zod.when) {
              if (!u._zod.when(i)) continue;
            } else if (l) continue;
            let d = i.issues.length,
              p = u._zod.check(i);
            if (p instanceof Promise && a?.async === !1) throw new ZGe();
            if (c || p instanceof Promise)
              c = (c ?? Promise.resolve()).then(async () => {
                if ((await p, i.issues.length === d)) return;
                if (!l) l = b0t(i, d);
              });
            else {
              if (i.issues.length === d) continue;
              if (!l) l = b0t(i, d);
            }
          }
          if (c) return c.then(() => i);
          return i;
        };
        e._zod.run = (i, s) => {
          let a = e._zod.parse(i, s);
          if (a instanceof Promise) {
            if (s.async === !1) throw new ZGe();
            return a.then((l) => o(l, n, s));
          }
          return o(a, n, s);
        };
      }
      e["~standard"] = {
        validate: (o) => {
          try {
            let i = Dtt(e, o);
            return i.success ? { value: i.data } : { issues: i.error?.issues };
          } catch (i) {
            return Ptt(e, o).then((s) =>
              s.success ? { value: s.data } : { issues: s.error?.issues },
            );
          }
        },
        vendor: "zod",
        version: 1,
      };
    })),
      (Ltt = Ro("$ZodString", (e, t) => {
        (dh.init(e, t),
          (e._zod.pattern =
            [...(e?._zod.bag?.patterns ?? [])].pop() ?? dAi(e._zod.bag)),
          (e._zod.parse = (r, n) => {
            if (t.coerce)
              try {
                r.value = String(r.value);
              } catch (o) {}
            if (typeof r.value === "string") return r;
            return (
              r.issues.push({
                expected: "string",
                code: "invalid_type",
                input: r.value,
                inst: e,
              }),
              r
            );
          }));
      })),
      (Ux = Ro("$ZodStringFormat", (e, t) => {
        (l9t.init(e, t), Ltt.init(e, t));
      })),
      (uUn = Ro("$ZodGUID", (e, t) => {
        (t.pattern ?? (t.pattern = Qvi), Ux.init(e, t));
      })),
      (dUn = Ro("$ZodUUID", (e, t) => {
        if (t.version) {
          let n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
            t.version
          ];
          if (n === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ?? (t.pattern = v0t(n));
        } else t.pattern ?? (t.pattern = v0t());
        Ux.init(e, t);
      })),
      (pUn = Ro("$ZodEmail", (e, t) => {
        (t.pattern ?? (t.pattern = Zvi), Ux.init(e, t));
      })),
      (fUn = Ro("$ZodURL", (e, t) => {
        (Ux.init(e, t),
          (e._zod.check = (r) => {
            try {
              let n = r.value,
                o = new URL(n),
                i = o.href;
              if (t.hostname) {
                if (((t.hostname.lastIndex = 0), !t.hostname.test(o.hostname)))
                  r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: sAi.source,
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                  });
              }
              if (t.protocol) {
                if (
                  ((t.protocol.lastIndex = 0),
                  !t.protocol.test(
                    o.protocol.endsWith(":")
                      ? o.protocol.slice(0, -1)
                      : o.protocol,
                  ))
                )
                  r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: t.protocol.source,
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                  });
              }
              if (!n.endsWith("/") && i.endsWith("/")) r.value = i.slice(0, -1);
              else r.value = i;
              return;
            } catch (n) {
              r.issues.push({
                code: "invalid_format",
                format: "url",
                input: r.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })),
      (mUn = Ro("$ZodEmoji", (e, t) => {
        (t.pattern ?? (t.pattern = eAi()), Ux.init(e, t));
      })),
      (hUn = Ro("$ZodNanoID", (e, t) => {
        (t.pattern ?? (t.pattern = Xvi), Ux.init(e, t));
      })),
      (gUn = Ro("$ZodCUID", (e, t) => {
        (t.pattern ?? (t.pattern = Vvi), Ux.init(e, t));
      })),
      (yUn = Ro("$ZodCUID2", (e, t) => {
        (t.pattern ?? (t.pattern = qvi), Ux.init(e, t));
      })),
      (_Un = Ro("$ZodULID", (e, t) => {
        (t.pattern ?? (t.pattern = zvi), Ux.init(e, t));
      })),
      (bUn = Ro("$ZodXID", (e, t) => {
        (t.pattern ?? (t.pattern = Kvi), Ux.init(e, t));
      })),
      (SUn = Ro("$ZodKSUID", (e, t) => {
        (t.pattern ?? (t.pattern = Yvi), Ux.init(e, t));
      })),
      (BAi = Ro("$ZodISODateTime", (e, t) => {
        (t.pattern ?? (t.pattern = uAi(t)), Ux.init(e, t));
      })),
      (jAi = Ro("$ZodISODate", (e, t) => {
        (t.pattern ?? (t.pattern = lAi), Ux.init(e, t));
      })),
      (WAi = Ro("$ZodISOTime", (e, t) => {
        (t.pattern ?? (t.pattern = cAi(t)), Ux.init(e, t));
      })),
      (GAi = Ro("$ZodISODuration", (e, t) => {
        (t.pattern ?? (t.pattern = Jvi), Ux.init(e, t));
      })),
      (EUn = Ro("$ZodIPv4", (e, t) => {
        (t.pattern ?? (t.pattern = tAi),
          Ux.init(e, t),
          e._zod.onattach.push((r) => {
            let n = r._zod.bag;
            n.format = "ipv4";
          }));
      })),
      (vUn = Ro("$ZodIPv6", (e, t) => {
        (t.pattern ?? (t.pattern = rAi),
          Ux.init(e, t),
          e._zod.onattach.push((r) => {
            let n = r._zod.bag;
            n.format = "ipv6";
          }),
          (e._zod.check = (r) => {
            try {
              new URL(`http://[${r.value}]`);
            } catch {
              r.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: r.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })),
      (AUn = Ro("$ZodCIDRv4", (e, t) => {
        (t.pattern ?? (t.pattern = nAi), Ux.init(e, t));
      })),
      (wUn = Ro("$ZodCIDRv6", (e, t) => {
        (t.pattern ?? (t.pattern = oAi),
          Ux.init(e, t),
          (e._zod.check = (r) => {
            let [n, o] = r.value.split("/");
            try {
              if (!o) throw Error();
              let i = Number(o);
              if (`${i}` !== o) throw Error();
              if (i < 0 || i > 128) throw Error();
              new URL(`http://[${n}]`);
            } catch {
              r.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: r.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })));
    TUn = Ro("$ZodBase64", (e, t) => {
      (t.pattern ?? (t.pattern = iAi),
        Ux.init(e, t),
        e._zod.onattach.push((r) => {
          r._zod.bag.contentEncoding = "base64";
        }),
        (e._zod.check = (r) => {
          if (VAi(r.value)) return;
          r.issues.push({
            code: "invalid_format",
            format: "base64",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
        }));
    });
    ((CUn = Ro("$ZodBase64URL", (e, t) => {
      (t.pattern ?? (t.pattern = rUn),
        Ux.init(e, t),
        e._zod.onattach.push((r) => {
          r._zod.bag.contentEncoding = "base64url";
        }),
        (e._zod.check = (r) => {
          if (jCl(r.value)) return;
          r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
        }));
    })),
      (xUn = Ro("$ZodE164", (e, t) => {
        (t.pattern ?? (t.pattern = aAi), Ux.init(e, t));
      })));
    ((HUn = Ro("$ZodJWT", (e, t) => {
      (Ux.init(e, t),
        (e._zod.check = (r) => {
          if (WCl(r.value, t.alg)) return;
          r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
        }));
    })),
      (kUn = Ro("$ZodCustomStringFormat", (e, t) => {
        (Ux.init(e, t),
          (e._zod.check = (r) => {
            if (t.fn(r.value)) return;
            r.issues.push({
              code: "invalid_format",
              format: t.format,
              input: r.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (N$r = Ro("$ZodNumber", (e, t) => {
        (dh.init(e, t),
          (e._zod.pattern = e._zod.bag.pattern ?? mAi),
          (e._zod.parse = (r, n) => {
            if (t.coerce)
              try {
                r.value = Number(r.value);
              } catch (s) {}
            let o = r.value;
            if (typeof o === "number" && !Number.isNaN(o) && Number.isFinite(o))
              return r;
            let i =
              typeof o === "number"
                ? Number.isNaN(o)
                  ? "NaN"
                  : !Number.isFinite(o)
                    ? "Infinity"
                    : void 0
                : void 0;
            return (
              r.issues.push({
                expected: "number",
                code: "invalid_type",
                input: o,
                inst: e,
                ...(i ? { received: i } : {}),
              }),
              r
            );
          }));
      })),
      (IUn = Ro("$ZodNumber", (e, t) => {
        (EAi.init(e, t), N$r.init(e, t));
      })),
      (c9t = Ro("$ZodBoolean", (e, t) => {
        (dh.init(e, t),
          (e._zod.pattern = hAi),
          (e._zod.parse = (r, n) => {
            if (t.coerce)
              try {
                r.value = Boolean(r.value);
              } catch (i) {}
            let o = r.value;
            if (typeof o === "boolean") return r;
            return (
              r.issues.push({
                expected: "boolean",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              r
            );
          }));
      })),
      ($$r = Ro("$ZodBigInt", (e, t) => {
        (dh.init(e, t),
          (e._zod.pattern = pAi),
          (e._zod.parse = (r, n) => {
            if (t.coerce)
              try {
                r.value = BigInt(r.value);
              } catch (o) {}
            if (typeof r.value === "bigint") return r;
            return (
              r.issues.push({
                expected: "bigint",
                code: "invalid_type",
                input: r.value,
                inst: e,
              }),
              r
            );
          }));
      })),
      (RUn = Ro("$ZodBigInt", (e, t) => {
        (vAi.init(e, t), $$r.init(e, t));
      })),
      (DUn = Ro("$ZodSymbol", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => {
            let o = r.value;
            if (typeof o === "symbol") return r;
            return (
              r.issues.push({
                expected: "symbol",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              r
            );
          }));
      })),
      (PUn = Ro("$ZodUndefined", (e, t) => {
        (dh.init(e, t),
          (e._zod.pattern = yAi),
          (e._zod.values = new Set([void 0])),
          (e._zod.optin = "optional"),
          (e._zod.optout = "optional"),
          (e._zod.parse = (r, n) => {
            let o = r.value;
            if (typeof o > "u") return r;
            return (
              r.issues.push({
                expected: "undefined",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              r
            );
          }));
      })),
      (MUn = Ro("$ZodNull", (e, t) => {
        (dh.init(e, t),
          (e._zod.pattern = gAi),
          (e._zod.values = new Set([null])),
          (e._zod.parse = (r, n) => {
            let o = r.value;
            if (o === null) return r;
            return (
              r.issues.push({
                expected: "null",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              r
            );
          }));
      })),
      (LUn = Ro("$ZodAny", (e, t) => {
        (dh.init(e, t), (e._zod.parse = (r) => r));
      })),
      (A0t = Ro("$ZodUnknown", (e, t) => {
        (dh.init(e, t), (e._zod.parse = (r) => r));
      })),
      (OUn = Ro("$ZodNever", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => (
            r.issues.push({
              expected: "never",
              code: "invalid_type",
              input: r.value,
              inst: e,
            }),
            r
          )));
      })),
      (NUn = Ro("$ZodVoid", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => {
            let o = r.value;
            if (typeof o > "u") return r;
            return (
              r.issues.push({
                expected: "void",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              r
            );
          }));
      })),
      ($Un = Ro("$ZodDate", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => {
            if (t.coerce)
              try {
                r.value = new Date(r.value);
              } catch (a) {}
            let o = r.value,
              i = o instanceof Date;
            if (i && !Number.isNaN(o.getTime())) return r;
            return (
              r.issues.push({
                expected: "date",
                code: "invalid_type",
                input: o,
                ...(i ? { received: "Invalid Date" } : {}),
                inst: e,
              }),
              r
            );
          }));
      })));
    u9t = Ro("$ZodArray", (e, t) => {
      (dh.init(e, t),
        (e._zod.parse = (r, n) => {
          let o = r.value;
          if (!Array.isArray(o))
            return (
              r.issues.push({
                expected: "array",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              r
            );
          r.value = Array(o.length);
          let i = [];
          for (let s = 0; s < o.length; s++) {
            let a = o[s],
              l = t.element._zod.run({ value: a, issues: [] }, n);
            if (l instanceof Promise) i.push(l.then((c) => RCl(c, r, s)));
            else RCl(l, r, s);
          }
          if (i.length) return Promise.all(i).then(() => r);
          return r;
        }));
    });
    F$r = Ro("$ZodObject", (e, t) => {
      dh.init(e, t);
      let r = R$r(() => {
        let d = Object.keys(t.shape);
        for (let f of d)
          if (!(t.shape[f] instanceof dh))
            throw Error(`Invalid element at key "${f}": expected a Zod schema`);
        let p = Uvi(t.shape);
        return {
          shape: t.shape,
          keys: d,
          keySet: new Set(d),
          numKeys: d.length,
          optionalKeys: new Set(p),
        };
      });
      bT(e._zod, "propValues", () => {
        let d = t.shape,
          p = {};
        for (let f in d) {
          let m = d[f]._zod;
          if (m.values) {
            p[f] ?? (p[f] = new Set());
            for (let g of m.values) p[f].add(g);
          }
        }
        return p;
      });
      let n = (d) => {
          let p = new aUn(["shape", "payload", "ctx"]),
            f = r.value,
            m = (E) => {
              let A = _0t(E);
              return `shape[${A}]._zod.run({ value: input[${A}], issues: [] }, ctx)`;
            };
          p.write("const input = payload.value;");
          let g = Object.create(null),
            y = 0;
          for (let E of f.keys) g[E] = `key_${y++}`;
          p.write("const newResult = {}");
          for (let E of f.keys)
            if (f.optionalKeys.has(E)) {
              let A = g[E];
              p.write(`const ${A} = ${m(E)};`);
              let b = _0t(E);
              p.write(`
        if (${A}.issues.length) {
          if (input[${b}] === undefined) {
            if (${b} in input) {
              newResult[${b}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${A}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${b}, ...iss.path] : [${b}],
              }))
            );
          }
        } else if (${A}.value === undefined) {
          if (${b} in input) newResult[${b}] = undefined;
        } else {
          newResult[${b}] = ${A}.value;
        }
        `);
            } else {
              let A = g[E];
              (p.write(`const ${A} = ${m(E)};`),
                p.write(`
          if (${A}.issues.length) payload.issues = payload.issues.concat(${A}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${_0t(E)}, ...iss.path] : [${_0t(E)}]
          })));`),
                p.write(`newResult[${_0t(E)}] = ${A}.value`));
            }
          (p.write("payload.value = newResult;"), p.write("return payload;"));
          let _ = p.compile();
          return (E, A) => _(d, E, A);
        },
        o,
        i = n9t,
        s = !H$r.jitless,
        l = s && $vi.value,
        c = t.catchall,
        u;
      e._zod.parse = (d, p) => {
        u ?? (u = r.value);
        let f = d.value;
        if (!i(f))
          return (
            d.issues.push({
              expected: "object",
              code: "invalid_type",
              input: f,
              inst: e,
            }),
            d
          );
        let m = [];
        if (s && l && p?.async === !1 && p.jitless !== !0) {
          if (!o) o = n(t.shape);
          d = o(d, p);
        } else {
          d.value = {};
          let A = u.shape;
          for (let b of u.keys) {
            let T = A[b],
              C = T._zod.run({ value: f[b], issues: [] }, p),
              I = T._zod.optin === "optional" && T._zod.optout === "optional";
            if (C instanceof Promise)
              m.push(C.then((R) => (I ? DCl(R, d, b, f) : lUn(R, d, b))));
            else if (I) DCl(C, d, b, f);
            else lUn(C, d, b);
          }
        }
        if (!c) return m.length ? Promise.all(m).then(() => d) : d;
        let g = [],
          y = u.keySet,
          _ = c._zod,
          E = _.def.type;
        for (let A of Object.keys(f)) {
          if (y.has(A)) continue;
          if (E === "never") {
            g.push(A);
            continue;
          }
          let b = _.run({ value: f[A], issues: [] }, p);
          if (b instanceof Promise) m.push(b.then((T) => lUn(T, d, A)));
          else lUn(b, d, A);
        }
        if (g.length)
          d.issues.push({
            code: "unrecognized_keys",
            keys: g,
            input: f,
            inst: e,
          });
        if (!m.length) return d;
        return Promise.all(m).then(() => d);
      };
    });
    ((U$r = Ro("$ZodUnion", (e, t) => {
      (dh.init(e, t),
        bT(e._zod, "optin", () =>
          t.options.some((r) => r._zod.optin === "optional")
            ? "optional"
            : void 0,
        ),
        bT(e._zod, "optout", () =>
          t.options.some((r) => r._zod.optout === "optional")
            ? "optional"
            : void 0,
        ),
        bT(e._zod, "values", () => {
          if (t.options.every((r) => r._zod.values))
            return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
          return;
        }),
        bT(e._zod, "pattern", () => {
          if (t.options.every((r) => r._zod.pattern)) {
            let r = t.options.map((n) => n._zod.pattern);
            return new RegExp(`^(${r.map((n) => D$r(n.source)).join("|")})$`);
          }
          return;
        }),
        (e._zod.parse = (r, n) => {
          let o = !1,
            i = [];
          for (let s of t.options) {
            let a = s._zod.run({ value: r.value, issues: [] }, n);
            if (a instanceof Promise) (i.push(a), (o = !0));
            else {
              if (a.issues.length === 0) return a;
              i.push(a);
            }
          }
          if (!o) return PCl(i, r, e, n);
          return Promise.all(i).then((s) => PCl(s, r, e, n));
        }));
    })),
      (FUn = Ro("$ZodDiscriminatedUnion", (e, t) => {
        U$r.init(e, t);
        let r = e._zod.parse;
        bT(e._zod, "propValues", () => {
          let o = {};
          for (let i of t.options) {
            let s = i._zod.propValues;
            if (!s || Object.keys(s).length === 0)
              throw Error(
                `Invalid discriminated union option at index "${t.options.indexOf(i)}"`,
              );
            for (let [a, l] of Object.entries(s)) {
              if (!o[a]) o[a] = new Set();
              for (let c of l) o[a].add(c);
            }
          }
          return o;
        });
        let n = R$r(() => {
          let o = t.options,
            i = new Map();
          for (let s of o) {
            let a = s._zod.propValues[t.discriminator];
            if (!a || a.size === 0)
              throw Error(
                `Invalid discriminated union option at index "${t.options.indexOf(s)}"`,
              );
            for (let l of a) {
              if (i.has(l))
                throw Error(`Duplicate discriminator value "${String(l)}"`);
              i.set(l, s);
            }
          }
          return i;
        });
        e._zod.parse = (o, i) => {
          let s = o.value;
          if (!n9t(s))
            return (
              o.issues.push({
                code: "invalid_type",
                expected: "object",
                input: s,
                inst: e,
              }),
              o
            );
          let a = n.value.get(s?.[t.discriminator]);
          if (a) return a._zod.run(o, i);
          if (t.unionFallback) return r(o, i);
          return (
            o.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              input: s,
              path: [t.discriminator],
              inst: e,
            }),
            o
          );
        };
      })),
      (UUn = Ro("$ZodIntersection", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => {
            let o = r.value,
              i = t.left._zod.run({ value: o, issues: [] }, n),
              s = t.right._zod.run({ value: o, issues: [] }, n);
            if (i instanceof Promise || s instanceof Promise)
              return Promise.all([i, s]).then(([l, c]) => MCl(r, l, c));
            return MCl(r, i, s);
          }));
      })));
    Ott = Ro("$ZodTuple", (e, t) => {
      dh.init(e, t);
      let r = t.items,
        n =
          r.length -
          [...r].reverse().findIndex((o) => o._zod.optin !== "optional");
      e._zod.parse = (o, i) => {
        let s = o.value;
        if (!Array.isArray(s))
          return (
            o.issues.push({
              input: s,
              inst: e,
              expected: "tuple",
              code: "invalid_type",
            }),
            o
          );
        o.value = [];
        let a = [];
        if (!t.rest) {
          let c = s.length > r.length,
            u = s.length < n - 1;
          if (c || u)
            return (
              o.issues.push({
                input: s,
                inst: e,
                origin: "array",
                ...(c
                  ? { code: "too_big", maximum: r.length }
                  : { code: "too_small", minimum: r.length }),
              }),
              o
            );
        }
        let l = -1;
        for (let c of r) {
          if ((l++, l >= s.length)) {
            if (l >= n) continue;
          }
          let u = c._zod.run({ value: s[l], issues: [] }, i);
          if (u instanceof Promise) a.push(u.then((d) => cUn(d, o, l)));
          else cUn(u, o, l);
        }
        if (t.rest) {
          let c = s.slice(r.length);
          for (let u of c) {
            l++;
            let d = t.rest._zod.run({ value: u, issues: [] }, i);
            if (d instanceof Promise) a.push(d.then((p) => cUn(p, o, l)));
            else cUn(d, o, l);
          }
        }
        if (a.length) return Promise.all(a).then(() => o);
        return o;
      };
    });
    ((BUn = Ro("$ZodRecord", (e, t) => {
      (dh.init(e, t),
        (e._zod.parse = (r, n) => {
          let o = r.value;
          if (!o9t(o))
            return (
              r.issues.push({
                expected: "record",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              r
            );
          let i = [];
          if (t.keyType._zod.values) {
            let s = t.keyType._zod.values;
            r.value = {};
            for (let l of s)
              if (
                typeof l === "string" ||
                typeof l === "number" ||
                typeof l === "symbol"
              ) {
                let c = t.valueType._zod.run({ value: o[l], issues: [] }, n);
                if (c instanceof Promise)
                  i.push(
                    c.then((u) => {
                      if (u.issues.length) r.issues.push(...qne(l, u.issues));
                      r.value[l] = u.value;
                    }),
                  );
                else {
                  if (c.issues.length) r.issues.push(...qne(l, c.issues));
                  r.value[l] = c.value;
                }
              }
            let a;
            for (let l in o) if (!s.has(l)) ((a = a ?? []), a.push(l));
            if (a && a.length > 0)
              r.issues.push({
                code: "unrecognized_keys",
                input: o,
                inst: e,
                keys: a,
              });
          } else {
            r.value = {};
            for (let s of Reflect.ownKeys(o)) {
              if (s === "__proto__") continue;
              let a = t.keyType._zod.run({ value: s, issues: [] }, n);
              if (a instanceof Promise)
                throw Error(
                  "Async schemas not supported in object keys currently",
                );
              if (a.issues.length) {
                (r.issues.push({
                  origin: "record",
                  code: "invalid_key",
                  issues: a.issues.map((c) => Hue(c, n, oU())),
                  input: s,
                  path: [s],
                  inst: e,
                }),
                  (r.value[a.value] = a.value));
                continue;
              }
              let l = t.valueType._zod.run({ value: o[s], issues: [] }, n);
              if (l instanceof Promise)
                i.push(
                  l.then((c) => {
                    if (c.issues.length) r.issues.push(...qne(s, c.issues));
                    r.value[a.value] = c.value;
                  }),
                );
              else {
                if (l.issues.length) r.issues.push(...qne(s, l.issues));
                r.value[a.value] = l.value;
              }
            }
          }
          if (i.length) return Promise.all(i).then(() => r);
          return r;
        }));
    })),
      (jUn = Ro("$ZodMap", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => {
            let o = r.value;
            if (!(o instanceof Map))
              return (
                r.issues.push({
                  expected: "map",
                  code: "invalid_type",
                  input: o,
                  inst: e,
                }),
                r
              );
            let i = [];
            r.value = new Map();
            for (let [s, a] of o) {
              let l = t.keyType._zod.run({ value: s, issues: [] }, n),
                c = t.valueType._zod.run({ value: a, issues: [] }, n);
              if (l instanceof Promise || c instanceof Promise)
                i.push(
                  Promise.all([l, c]).then(([u, d]) => {
                    LCl(u, d, r, s, o, e, n);
                  }),
                );
              else LCl(l, c, r, s, o, e, n);
            }
            if (i.length) return Promise.all(i).then(() => r);
            return r;
          }));
      })));
    WUn = Ro("$ZodSet", (e, t) => {
      (dh.init(e, t),
        (e._zod.parse = (r, n) => {
          let o = r.value;
          if (!(o instanceof Set))
            return (
              r.issues.push({
                input: o,
                inst: e,
                expected: "set",
                code: "invalid_type",
              }),
              r
            );
          let i = [];
          r.value = new Set();
          for (let s of o) {
            let a = t.valueType._zod.run({ value: s, issues: [] }, n);
            if (a instanceof Promise) i.push(a.then((l) => OCl(l, r)));
            else OCl(a, r);
          }
          if (i.length) return Promise.all(i).then(() => r);
          return r;
        }));
    });
    ((GUn = Ro("$ZodEnum", (e, t) => {
      dh.init(e, t);
      let r = I$r(t.entries);
      ((e._zod.values = new Set(r)),
        (e._zod.pattern = new RegExp(
          `^(${r
            .filter((n) => P$r.has(typeof n))
            .map((n) => (typeof n === "string" ? e5e(n) : n.toString()))
            .join("|")})$`,
        )),
        (e._zod.parse = (n, o) => {
          let i = n.value;
          if (e._zod.values.has(i)) return n;
          return (
            n.issues.push({
              code: "invalid_value",
              values: r,
              input: i,
              inst: e,
            }),
            n
          );
        }));
    })),
      (VUn = Ro("$ZodLiteral", (e, t) => {
        (dh.init(e, t),
          (e._zod.values = new Set(t.values)),
          (e._zod.pattern = new RegExp(
            `^(${t.values.map((r) => (typeof r === "string" ? e5e(r) : r ? r.toString() : String(r))).join("|")})$`,
          )),
          (e._zod.parse = (r, n) => {
            let o = r.value;
            if (e._zod.values.has(o)) return r;
            return (
              r.issues.push({
                code: "invalid_value",
                values: t.values,
                input: o,
                inst: e,
              }),
              r
            );
          }));
      })),
      (qUn = Ro("$ZodFile", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => {
            let o = r.value;
            if (o instanceof File) return r;
            return (
              r.issues.push({
                expected: "file",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              r
            );
          }));
      })),
      (d9t = Ro("$ZodTransform", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => {
            let o = t.transform(r.value, r);
            if (n.async)
              return (o instanceof Promise ? o : Promise.resolve(o)).then(
                (s) => ((r.value = s), r),
              );
            if (o instanceof Promise) throw new ZGe();
            return ((r.value = o), r);
          }));
      })),
      (zUn = Ro("$ZodOptional", (e, t) => {
        (dh.init(e, t),
          (e._zod.optin = "optional"),
          (e._zod.optout = "optional"),
          bT(e._zod, "values", () =>
            t.innerType._zod.values
              ? new Set([...t.innerType._zod.values, void 0])
              : void 0,
          ),
          bT(e._zod, "pattern", () => {
            let r = t.innerType._zod.pattern;
            return r ? new RegExp(`^(${D$r(r.source)})?$`) : void 0;
          }),
          (e._zod.parse = (r, n) => {
            if (t.innerType._zod.optin === "optional")
              return t.innerType._zod.run(r, n);
            if (r.value === void 0) return r;
            return t.innerType._zod.run(r, n);
          }));
      })),
      (KUn = Ro("$ZodNullable", (e, t) => {
        (dh.init(e, t),
          bT(e._zod, "optin", () => t.innerType._zod.optin),
          bT(e._zod, "optout", () => t.innerType._zod.optout),
          bT(e._zod, "pattern", () => {
            let r = t.innerType._zod.pattern;
            return r ? new RegExp(`^(${D$r(r.source)}|null)$`) : void 0;
          }),
          bT(e._zod, "values", () =>
            t.innerType._zod.values
              ? new Set([...t.innerType._zod.values, null])
              : void 0,
          ),
          (e._zod.parse = (r, n) => {
            if (r.value === null) return r;
            return t.innerType._zod.run(r, n);
          }));
      })),
      (YUn = Ro("$ZodDefault", (e, t) => {
        (dh.init(e, t),
          (e._zod.optin = "optional"),
          bT(e._zod, "values", () => t.innerType._zod.values),
          (e._zod.parse = (r, n) => {
            if (r.value === void 0) return ((r.value = t.defaultValue), r);
            let o = t.innerType._zod.run(r, n);
            if (o instanceof Promise) return o.then((i) => NCl(i, t));
            return NCl(o, t);
          }));
      })));
    ((XUn = Ro("$ZodPrefault", (e, t) => {
      (dh.init(e, t),
        (e._zod.optin = "optional"),
        bT(e._zod, "values", () => t.innerType._zod.values),
        (e._zod.parse = (r, n) => {
          if (r.value === void 0) r.value = t.defaultValue;
          return t.innerType._zod.run(r, n);
        }));
    })),
      (JUn = Ro("$ZodNonOptional", (e, t) => {
        (dh.init(e, t),
          bT(e._zod, "values", () => {
            let r = t.innerType._zod.values;
            return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
          }),
          (e._zod.parse = (r, n) => {
            let o = t.innerType._zod.run(r, n);
            if (o instanceof Promise) return o.then((i) => $Cl(i, e));
            return $Cl(o, e);
          }));
      })));
    ((QUn = Ro("$ZodSuccess", (e, t) => {
      (dh.init(e, t),
        (e._zod.parse = (r, n) => {
          let o = t.innerType._zod.run(r, n);
          if (o instanceof Promise)
            return o.then((i) => ((r.value = i.issues.length === 0), r));
          return ((r.value = o.issues.length === 0), r);
        }));
    })),
      (ZUn = Ro("$ZodCatch", (e, t) => {
        (dh.init(e, t),
          (e._zod.optin = "optional"),
          bT(e._zod, "optout", () => t.innerType._zod.optout),
          bT(e._zod, "values", () => t.innerType._zod.values),
          (e._zod.parse = (r, n) => {
            let o = t.innerType._zod.run(r, n);
            if (o instanceof Promise)
              return o.then((i) => {
                if (((r.value = i.value), i.issues.length))
                  ((r.value = t.catchValue({
                    ...r,
                    error: { issues: i.issues.map((s) => Hue(s, n, oU())) },
                    input: r.value,
                  })),
                    (r.issues = []));
                return r;
              });
            if (((r.value = o.value), o.issues.length))
              ((r.value = t.catchValue({
                ...r,
                error: { issues: o.issues.map((i) => Hue(i, n, oU())) },
                input: r.value,
              })),
                (r.issues = []));
            return r;
          }));
      })),
      (e2n = Ro("$ZodNaN", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) => {
            if (typeof r.value !== "number" || !Number.isNaN(r.value))
              return (
                r.issues.push({
                  input: r.value,
                  inst: e,
                  expected: "nan",
                  code: "invalid_type",
                }),
                r
              );
            return r;
          }));
      })),
      (p9t = Ro("$ZodPipe", (e, t) => {
        (dh.init(e, t),
          bT(e._zod, "values", () => t.in._zod.values),
          bT(e._zod, "optin", () => t.in._zod.optin),
          bT(e._zod, "optout", () => t.out._zod.optout),
          (e._zod.parse = (r, n) => {
            let o = t.in._zod.run(r, n);
            if (o instanceof Promise) return o.then((i) => FCl(i, t, n));
            return FCl(o, t, n);
          }));
      })));
    t2n = Ro("$ZodReadonly", (e, t) => {
      (dh.init(e, t),
        bT(e._zod, "propValues", () => t.innerType._zod.propValues),
        bT(e._zod, "values", () => t.innerType._zod.values),
        bT(e._zod, "optin", () => t.innerType._zod.optin),
        bT(e._zod, "optout", () => t.innerType._zod.optout),
        (e._zod.parse = (r, n) => {
          let o = t.innerType._zod.run(r, n);
          if (o instanceof Promise) return o.then(UCl);
          return UCl(o);
        }));
    });
    ((r2n = Ro("$ZodTemplateLiteral", (e, t) => {
      dh.init(e, t);
      let r = [];
      for (let n of t.parts)
        if (n instanceof dh) {
          if (!n._zod.pattern)
            throw Error(
              `Invalid template literal part, no pattern found: ${[...n._zod.traits].shift()}`,
            );
          let o =
            n._zod.pattern instanceof RegExp
              ? n._zod.pattern.source
              : n._zod.pattern;
          if (!o)
            throw Error(`Invalid template literal part: ${n._zod.traits}`);
          let i = o.startsWith("^") ? 1 : 0,
            s = o.endsWith("$") ? o.length - 1 : o.length;
          r.push(o.slice(i, s));
        } else if (n === null || Fvi.has(typeof n)) r.push(e5e(`${n}`));
        else throw Error(`Invalid template literal part: ${n}`);
      ((e._zod.pattern = new RegExp(`^${r.join("")}$`)),
        (e._zod.parse = (n, o) => {
          if (typeof n.value !== "string")
            return (
              n.issues.push({
                input: n.value,
                inst: e,
                expected: "template_literal",
                code: "invalid_type",
              }),
              n
            );
          if (((e._zod.pattern.lastIndex = 0), !e._zod.pattern.test(n.value)))
            return (
              n.issues.push({
                input: n.value,
                inst: e,
                code: "invalid_format",
                format: "template_literal",
                pattern: e._zod.pattern.source,
              }),
              n
            );
          return n;
        }));
    })),
      (n2n = Ro("$ZodPromise", (e, t) => {
        (dh.init(e, t),
          (e._zod.parse = (r, n) =>
            Promise.resolve(r.value).then((o) =>
              t.innerType._zod.run({ value: o, issues: [] }, n),
            )));
      })),
      (o2n = Ro("$ZodLazy", (e, t) => {
        (dh.init(e, t),
          bT(e._zod, "innerType", () => t.getter()),
          bT(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
          bT(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
          bT(e._zod, "optin", () => e._zod.innerType._zod.optin),
          bT(e._zod, "optout", () => e._zod.innerType._zod.optout),
          (e._zod.parse = (r, n) => e._zod.innerType._zod.run(r, n)));
      })),
      (i2n = Ro("$ZodCustom", (e, t) => {
        (yM.init(e, t),
          dh.init(e, t),
          (e._zod.parse = (r, n) => r),
          (e._zod.check = (r) => {
            let n = r.value,
              o = t.fn(n);
            if (o instanceof Promise) return o.then((i) => BCl(i, r, n, e));
            BCl(o, r, n, e);
            return;
          }));
      })));
  });
