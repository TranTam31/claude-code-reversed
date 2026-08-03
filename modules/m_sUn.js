// Module: sUn (lines 5964-6449)
  var sUn = S(() => {
    r9t();
    nUn();
    uh();
    ((yM = Ro("$ZodCheck", (e, t) => {
      var r;
      (e._zod ?? (e._zod = {}),
        (e._zod.def = t),
        (r = e._zod).onattach ?? (r.onattach = []));
    })),
      (kCl = { number: "number", bigint: "bigint", object: "date" }),
      (oUn = Ro("$ZodCheckLessThan", (e, t) => {
        yM.init(e, t);
        let r = kCl[typeof t.value];
        (e._zod.onattach.push((n) => {
          let o = n._zod.bag,
            i =
              (t.inclusive ? o.maximum : o.exclusiveMaximum) ??
              Number.POSITIVE_INFINITY;
          if (t.value < i)
            if (t.inclusive) o.maximum = t.value;
            else o.exclusiveMaximum = t.value;
        }),
          (e._zod.check = (n) => {
            if (t.inclusive ? n.value <= t.value : n.value < t.value) return;
            n.issues.push({
              origin: r,
              code: "too_big",
              maximum: t.value,
              input: n.value,
              inclusive: t.inclusive,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (iUn = Ro("$ZodCheckGreaterThan", (e, t) => {
        yM.init(e, t);
        let r = kCl[typeof t.value];
        (e._zod.onattach.push((n) => {
          let o = n._zod.bag,
            i =
              (t.inclusive ? o.minimum : o.exclusiveMinimum) ??
              Number.NEGATIVE_INFINITY;
          if (t.value > i)
            if (t.inclusive) o.minimum = t.value;
            else o.exclusiveMinimum = t.value;
        }),
          (e._zod.check = (n) => {
            if (t.inclusive ? n.value >= t.value : n.value > t.value) return;
            n.issues.push({
              origin: r,
              code: "too_small",
              minimum: t.value,
              input: n.value,
              inclusive: t.inclusive,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (SAi = Ro("$ZodCheckMultipleOf", (e, t) => {
        (yM.init(e, t),
          e._zod.onattach.push((r) => {
            var n;
            (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
          }),
          (e._zod.check = (r) => {
            if (typeof r.value !== typeof t.value)
              throw Error("Cannot mix number and bigint in multiple_of check.");
            if (
              typeof r.value === "bigint"
                ? r.value % t.value === BigInt(0)
                : Ovi(r.value, t.value) === 0
            )
              return;
            r.issues.push({
              origin: typeof r.value,
              code: "not_multiple_of",
              divisor: t.value,
              input: r.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (EAi = Ro("$ZodCheckNumberFormat", (e, t) => {
        (yM.init(e, t), (t.format = t.format || "float64"));
        let r = t.format?.includes("int"),
          n = r ? "int" : "number",
          [o, i] = Bvi[t.format];
        (e._zod.onattach.push((s) => {
          let a = s._zod.bag;
          if (((a.format = t.format), (a.minimum = o), (a.maximum = i), r))
            a.pattern = fAi;
        }),
          (e._zod.check = (s) => {
            let a = s.value;
            if (r) {
              if (!Number.isInteger(a)) {
                s.issues.push({
                  expected: n,
                  format: t.format,
                  code: "invalid_type",
                  input: a,
                  inst: e,
                });
                return;
              }
              if (!Number.isSafeInteger(a)) {
                if (a > 0)
                  s.issues.push({
                    input: a,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: e,
                    origin: n,
                    continue: !t.abort,
                  });
                else
                  s.issues.push({
                    input: a,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: e,
                    origin: n,
                    continue: !t.abort,
                  });
                return;
              }
            }
            if (a < o)
              s.issues.push({
                origin: "number",
                input: a,
                code: "too_small",
                minimum: o,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              });
            if (a > i)
              s.issues.push({
                origin: "number",
                input: a,
                code: "too_big",
                maximum: i,
                inst: e,
              });
          }));
      })),
      (vAi = Ro("$ZodCheckBigIntFormat", (e, t) => {
        yM.init(e, t);
        let [r, n] = jvi[t.format];
        (e._zod.onattach.push((o) => {
          let i = o._zod.bag;
          ((i.format = t.format), (i.minimum = r), (i.maximum = n));
        }),
          (e._zod.check = (o) => {
            let i = o.value;
            if (i < r)
              o.issues.push({
                origin: "bigint",
                input: i,
                code: "too_small",
                minimum: r,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              });
            if (i > n)
              o.issues.push({
                origin: "bigint",
                input: i,
                code: "too_big",
                maximum: n,
                inst: e,
              });
          }));
      })),
      (AAi = Ro("$ZodCheckMaxSize", (e, t) => {
        (yM.init(e, t),
          (e._zod.when = (r) => {
            let n = r.value;
            return !Rtt(n) && n.size !== void 0;
          }),
          e._zod.onattach.push((r) => {
            let n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
            if (t.maximum < n) r._zod.bag.maximum = t.maximum;
          }),
          (e._zod.check = (r) => {
            let n = r.value;
            if (n.size <= t.maximum) return;
            r.issues.push({
              origin: M$r(n),
              code: "too_big",
              maximum: t.maximum,
              input: n,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (wAi = Ro("$ZodCheckMinSize", (e, t) => {
        (yM.init(e, t),
          (e._zod.when = (r) => {
            let n = r.value;
            return !Rtt(n) && n.size !== void 0;
          }),
          e._zod.onattach.push((r) => {
            let n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
            if (t.minimum > n) r._zod.bag.minimum = t.minimum;
          }),
          (e._zod.check = (r) => {
            let n = r.value;
            if (n.size >= t.minimum) return;
            r.issues.push({
              origin: M$r(n),
              code: "too_small",
              minimum: t.minimum,
              input: n,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (TAi = Ro("$ZodCheckSizeEquals", (e, t) => {
        (yM.init(e, t),
          (e._zod.when = (r) => {
            let n = r.value;
            return !Rtt(n) && n.size !== void 0;
          }),
          e._zod.onattach.push((r) => {
            let n = r._zod.bag;
            ((n.minimum = t.size), (n.maximum = t.size), (n.size = t.size));
          }),
          (e._zod.check = (r) => {
            let n = r.value,
              o = n.size;
            if (o === t.size) return;
            let i = o > t.size;
            r.issues.push({
              origin: M$r(n),
              ...(i
                ? { code: "too_big", maximum: t.size }
                : { code: "too_small", minimum: t.size }),
              inclusive: !0,
              exact: !0,
              input: r.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (CAi = Ro("$ZodCheckMaxLength", (e, t) => {
        (yM.init(e, t),
          (e._zod.when = (r) => {
            let n = r.value;
            return !Rtt(n) && n.length !== void 0;
          }),
          e._zod.onattach.push((r) => {
            let n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
            if (t.maximum < n) r._zod.bag.maximum = t.maximum;
          }),
          (e._zod.check = (r) => {
            let n = r.value;
            if (n.length <= t.maximum) return;
            let i = L$r(n);
            r.issues.push({
              origin: i,
              code: "too_big",
              maximum: t.maximum,
              inclusive: !0,
              input: n,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (xAi = Ro("$ZodCheckMinLength", (e, t) => {
        (yM.init(e, t),
          (e._zod.when = (r) => {
            let n = r.value;
            return !Rtt(n) && n.length !== void 0;
          }),
          e._zod.onattach.push((r) => {
            let n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
            if (t.minimum > n) r._zod.bag.minimum = t.minimum;
          }),
          (e._zod.check = (r) => {
            let n = r.value;
            if (n.length >= t.minimum) return;
            let i = L$r(n);
            r.issues.push({
              origin: i,
              code: "too_small",
              minimum: t.minimum,
              inclusive: !0,
              input: n,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (HAi = Ro("$ZodCheckLengthEquals", (e, t) => {
        (yM.init(e, t),
          (e._zod.when = (r) => {
            let n = r.value;
            return !Rtt(n) && n.length !== void 0;
          }),
          e._zod.onattach.push((r) => {
            let n = r._zod.bag;
            ((n.minimum = t.length),
              (n.maximum = t.length),
              (n.length = t.length));
          }),
          (e._zod.check = (r) => {
            let n = r.value,
              o = n.length;
            if (o === t.length) return;
            let i = L$r(n),
              s = o > t.length;
            r.issues.push({
              origin: i,
              ...(s
                ? { code: "too_big", maximum: t.length }
                : { code: "too_small", minimum: t.length }),
              inclusive: !0,
              exact: !0,
              input: r.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (l9t = Ro("$ZodCheckStringFormat", (e, t) => {
        var r, n;
        if (
          (yM.init(e, t),
          e._zod.onattach.push((o) => {
            let i = o._zod.bag;
            if (((i.format = t.format), t.pattern))
              (i.patterns ?? (i.patterns = new Set()),
                i.patterns.add(t.pattern));
          }),
          t.pattern)
        )
          (r = e._zod).check ??
            (r.check = (o) => {
              if (((t.pattern.lastIndex = 0), t.pattern.test(o.value))) return;
              o.issues.push({
                origin: "string",
                code: "invalid_format",
                format: t.format,
                input: o.value,
                ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                inst: e,
                continue: !t.abort,
              });
            });
        else (n = e._zod).check ?? (n.check = () => {});
      })),
      (kAi = Ro("$ZodCheckRegex", (e, t) => {
        (l9t.init(e, t),
          (e._zod.check = (r) => {
            if (((t.pattern.lastIndex = 0), t.pattern.test(r.value))) return;
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: r.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (IAi = Ro("$ZodCheckLowerCase", (e, t) => {
        (t.pattern ?? (t.pattern = _Ai), l9t.init(e, t));
      })),
      (RAi = Ro("$ZodCheckUpperCase", (e, t) => {
        (t.pattern ?? (t.pattern = bAi), l9t.init(e, t));
      })),
      (DAi = Ro("$ZodCheckIncludes", (e, t) => {
        yM.init(e, t);
        let r = e5e(t.includes),
          n = new RegExp(
            typeof t.position === "number" ? `^.{${t.position}}${r}` : r,
          );
        ((t.pattern = n),
          e._zod.onattach.push((o) => {
            let i = o._zod.bag;
            (i.patterns ?? (i.patterns = new Set()), i.patterns.add(n));
          }),
          (e._zod.check = (o) => {
            if (o.value.includes(t.includes, t.position)) return;
            o.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "includes",
              includes: t.includes,
              input: o.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (PAi = Ro("$ZodCheckStartsWith", (e, t) => {
        yM.init(e, t);
        let r = new RegExp(`^${e5e(t.prefix)}.*`);
        (t.pattern ?? (t.pattern = r),
          e._zod.onattach.push((n) => {
            let o = n._zod.bag;
            (o.patterns ?? (o.patterns = new Set()), o.patterns.add(r));
          }),
          (e._zod.check = (n) => {
            if (n.value.startsWith(t.prefix)) return;
            n.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "starts_with",
              prefix: t.prefix,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (MAi = Ro("$ZodCheckEndsWith", (e, t) => {
        yM.init(e, t);
        let r = new RegExp(`.*${e5e(t.suffix)}$`);
        (t.pattern ?? (t.pattern = r),
          e._zod.onattach.push((n) => {
            let o = n._zod.bag;
            (o.patterns ?? (o.patterns = new Set()), o.patterns.add(r));
          }),
          (e._zod.check = (n) => {
            if (n.value.endsWith(t.suffix)) return;
            n.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "ends_with",
              suffix: t.suffix,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })));
    ((LAi = Ro("$ZodCheckProperty", (e, t) => {
      (yM.init(e, t),
        (e._zod.check = (r) => {
          let n = t.schema._zod.run(
            { value: r.value[t.property], issues: [] },
            {},
          );
          if (n instanceof Promise) return n.then((o) => HCl(o, r, t.property));
          HCl(n, r, t.property);
          return;
        }));
    })),
      (OAi = Ro("$ZodCheckMimeType", (e, t) => {
        yM.init(e, t);
        let r = new Set(t.mime);
        (e._zod.onattach.push((n) => {
          n._zod.bag.mime = t.mime;
        }),
          (e._zod.check = (n) => {
            if (r.has(n.value.type)) return;
            n.issues.push({
              code: "invalid_value",
              values: t.mime,
              input: n.value.type,
              inst: e,
            });
          }));
      })),
      (NAi = Ro("$ZodCheckOverwrite", (e, t) => {
        (yM.init(e, t),
          (e._zod.check = (r) => {
            r.value = t.tx(r.value);
          }));
      })));
  });
