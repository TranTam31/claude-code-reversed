// Module: B2n (lines 14742-15208)
  var B2n = S(() => {
    NG();
    NG();
    Ywi();
    U2n();
    iTi();
    ((lb = Ro(
      "ZodType",
      (e, t) => (
        dh.init(e, t),
        (e.def = t),
        Object.defineProperty(e, "_def", { value: t }),
        (e.check = (...r) =>
          e.clone({
            ...t,
            checks: [
              ...(t.checks ?? []),
              ...r.map((n) =>
                typeof n === "function"
                  ? {
                      _zod: {
                        check: n,
                        def: { check: "custom" },
                        onattach: [],
                      },
                    }
                  : n,
              ),
            ],
          })),
        (e.clone = (r, n) => CK(e, r, n)),
        (e.brand = () => e),
        (e.register = (r, n) => (r.add(e, n), e)),
        (e.parse = (r, n) => tTi(e, r, n, { callee: e.parse })),
        (e.safeParse = (r, n) => nTi(e, r, n)),
        (e.parseAsync = async (r, n) => rTi(e, r, n, { callee: e.parseAsync })),
        (e.safeParseAsync = async (r, n) => oTi(e, r, n)),
        (e.spa = e.safeParseAsync),
        (e.refine = (r, n) => e.check(gHl(r, n))),
        (e.superRefine = (r) => e.check(yHl(r))),
        (e.overwrite = (r) => e.check(n5e(r))),
        (e.optional = () => xI(e)),
        (e.nullable = () => W2n(e)),
        (e.nullish = () => xI(W2n(e))),
        (e.nonoptional = (r) => oHl(e, r)),
        (e.array = () => sc(e)),
        (e.or = (r) => Bx([e, r])),
        (e.and = (r) => IFr(e, r)),
        (e.transform = (r) => G2n(e, RTi(r))),
        (e.default = (r) => tHl(e, r)),
        (e.prefault = (r) => nHl(e, r)),
        (e.catch = (r) => aHl(e, r)),
        (e.pipe = (r) => G2n(e, r)),
        (e.readonly = () => uHl(e)),
        (e.describe = (r) => {
          let n = e.clone();
          return (zne.add(n, { description: r }), n);
        }),
        Object.defineProperty(e, "description", {
          get() {
            return zne.get(e)?.description;
          },
          configurable: !0,
        }),
        (e.meta = (...r) => {
          if (r.length === 0) return zne.get(e);
          let n = e.clone();
          return (zne.add(n, r[0]), n);
        }),
        (e.isOptional = () => e.safeParse(void 0).success),
        (e.isNullable = () => e.safeParse(null).success),
        e
      ),
    )),
      (aTi = Ro("_ZodString", (e, t) => {
        (Ltt.init(e, t), lb.init(e, t));
        let r = e._zod.bag;
        ((e.format = r.format ?? null),
          (e.minLength = r.minimum ?? null),
          (e.maxLength = r.maximum ?? null),
          (e.regex = (...n) => e.check(fFr(...n))),
          (e.includes = (...n) => e.check(gFr(...n))),
          (e.startsWith = (...n) => e.check(yFr(...n))),
          (e.endsWith = (...n) => e.check(_Fr(...n))),
          (e.min = (...n) => e.check(Ntt(...n))),
          (e.max = (...n) => e.check(g9t(...n))),
          (e.length = (...n) => e.check(y9t(...n))),
          (e.nonempty = (...n) => e.check(Ntt(1, ...n))),
          (e.lowercase = (n) => e.check(mFr(n))),
          (e.uppercase = (n) => e.check(hFr(n))),
          (e.trim = () => e.check(EFr())),
          (e.normalize = (...n) => e.check(SFr(...n))),
          (e.toLowerCase = () => e.check(vFr())),
          (e.toUpperCase = () => e.check(AFr())));
      })),
      (CFr = Ro("ZodString", (e, t) => {
        (Ltt.init(e, t),
          aTi.init(e, t),
          (e.email = (r) => e.check(V$r(lTi, r))),
          (e.url = (r) => e.check(X$r(cTi, r))),
          (e.jwt = (r) => e.check(dFr(TTi, r))),
          (e.emoji = (r) => e.check(J$r(dTi, r))),
          (e.guid = (r) => e.check(m9t(j2n, r))),
          (e.uuid = (r) => e.check(q$r(i5e, r))),
          (e.uuidv4 = (r) => e.check(z$r(i5e, r))),
          (e.uuidv6 = (r) => e.check(K$r(i5e, r))),
          (e.uuidv7 = (r) => e.check(Y$r(i5e, r))),
          (e.nanoid = (r) => e.check(Q$r(pTi, r))),
          (e.guid = (r) => e.check(m9t(j2n, r))),
          (e.cuid = (r) => e.check(Z$r(fTi, r))),
          (e.cuid2 = (r) => e.check(eFr(mTi, r))),
          (e.ulid = (r) => e.check(tFr(hTi, r))),
          (e.base64 = (r) => e.check(lFr(vTi, r))),
          (e.base64url = (r) => e.check(cFr(ATi, r))),
          (e.xid = (r) => e.check(rFr(gTi, r))),
          (e.ksuid = (r) => e.check(nFr(yTi, r))),
          (e.ipv4 = (r) => e.check(oFr(_Ti, r))),
          (e.ipv6 = (r) => e.check(iFr(bTi, r))),
          (e.cidrv4 = (r) => e.check(sFr(STi, r))),
          (e.cidrv6 = (r) => e.check(aFr(ETi, r))),
          (e.e164 = (r) => e.check(uFr(wTi, r))),
          (e.datetime = (r) => e.check(Xwi(r))),
          (e.date = (r) => e.check(Jwi(r))),
          (e.time = (r) => e.check(Qwi(r))),
          (e.duration = (r) => e.check(Zwi(r))));
      })));
    ((CI = Ro("ZodStringFormat", (e, t) => {
      (Ux.init(e, t), aTi.init(e, t));
    })),
      (lTi = Ro("ZodEmail", (e, t) => {
        (pUn.init(e, t), CI.init(e, t));
      })));
    j2n = Ro("ZodGUID", (e, t) => {
      (uUn.init(e, t), CI.init(e, t));
    });
    i5e = Ro("ZodUUID", (e, t) => {
      (dUn.init(e, t), CI.init(e, t));
    });
    cTi = Ro("ZodURL", (e, t) => {
      (fUn.init(e, t), CI.init(e, t));
    });
    dTi = Ro("ZodEmoji", (e, t) => {
      (mUn.init(e, t), CI.init(e, t));
    });
    pTi = Ro("ZodNanoID", (e, t) => {
      (hUn.init(e, t), CI.init(e, t));
    });
    fTi = Ro("ZodCUID", (e, t) => {
      (gUn.init(e, t), CI.init(e, t));
    });
    mTi = Ro("ZodCUID2", (e, t) => {
      (yUn.init(e, t), CI.init(e, t));
    });
    hTi = Ro("ZodULID", (e, t) => {
      (_Un.init(e, t), CI.init(e, t));
    });
    gTi = Ro("ZodXID", (e, t) => {
      (bUn.init(e, t), CI.init(e, t));
    });
    yTi = Ro("ZodKSUID", (e, t) => {
      (SUn.init(e, t), CI.init(e, t));
    });
    _Ti = Ro("ZodIPv4", (e, t) => {
      (EUn.init(e, t), CI.init(e, t));
    });
    bTi = Ro("ZodIPv6", (e, t) => {
      (vUn.init(e, t), CI.init(e, t));
    });
    STi = Ro("ZodCIDRv4", (e, t) => {
      (AUn.init(e, t), CI.init(e, t));
    });
    ETi = Ro("ZodCIDRv6", (e, t) => {
      (wUn.init(e, t), CI.init(e, t));
    });
    vTi = Ro("ZodBase64", (e, t) => {
      (TUn.init(e, t), CI.init(e, t));
    });
    ATi = Ro("ZodBase64URL", (e, t) => {
      (CUn.init(e, t), CI.init(e, t));
    });
    wTi = Ro("ZodE164", (e, t) => {
      (xUn.init(e, t), CI.init(e, t));
    });
    TTi = Ro("ZodJWT", (e, t) => {
      (HUn.init(e, t), CI.init(e, t));
    });
    Nxl = Ro("ZodCustomStringFormat", (e, t) => {
      (kUn.init(e, t), CI.init(e, t));
    });
    xFr = Ro("ZodNumber", (e, t) => {
      (N$r.init(e, t),
        lb.init(e, t),
        (e.gt = (n, o) => e.check(r5e(n, o))),
        (e.gte = (n, o) => e.check(Kne(n, o))),
        (e.min = (n, o) => e.check(Kne(n, o))),
        (e.lt = (n, o) => e.check(t5e(n, o))),
        (e.lte = (n, o) => e.check(pye(n, o))),
        (e.max = (n, o) => e.check(pye(n, o))),
        (e.int = (n) => e.check(sTi(n))),
        (e.safe = (n) => e.check(sTi(n))),
        (e.positive = (n) => e.check(r5e(0, n))),
        (e.nonnegative = (n) => e.check(Kne(0, n))),
        (e.negative = (n) => e.check(t5e(0, n))),
        (e.nonpositive = (n) => e.check(pye(0, n))),
        (e.multipleOf = (n, o) => e.check(T0t(n, o))),
        (e.step = (n, o) => e.check(T0t(n, o))),
        (e.finite = () => e));
      let r = e._zod.bag;
      ((e.minValue =
        Math.max(
          r.minimum ?? Number.NEGATIVE_INFINITY,
          r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
        ) ?? null),
        (e.maxValue =
          Math.min(
            r.maximum ?? Number.POSITIVE_INFINITY,
            r.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
          ) ?? null),
        (e.isInt =
          (r.format ?? "").includes("int") ||
          Number.isSafeInteger(r.multipleOf ?? 0.5)),
        (e.isFinite = !0),
        (e.format = r.format ?? null));
    });
    S9t = Ro("ZodNumberFormat", (e, t) => {
      (IUn.init(e, t), xFr.init(e, t));
    });
    HFr = Ro("ZodBoolean", (e, t) => {
      (c9t.init(e, t), lb.init(e, t));
    });
    kFr = Ro("ZodBigInt", (e, t) => {
      ($$r.init(e, t),
        lb.init(e, t),
        (e.gte = (n, o) => e.check(Kne(n, o))),
        (e.min = (n, o) => e.check(Kne(n, o))),
        (e.gt = (n, o) => e.check(r5e(n, o))),
        (e.gte = (n, o) => e.check(Kne(n, o))),
        (e.min = (n, o) => e.check(Kne(n, o))),
        (e.lt = (n, o) => e.check(t5e(n, o))),
        (e.lte = (n, o) => e.check(pye(n, o))),
        (e.max = (n, o) => e.check(pye(n, o))),
        (e.positive = (n) => e.check(r5e(BigInt(0), n))),
        (e.negative = (n) => e.check(t5e(BigInt(0), n))),
        (e.nonpositive = (n) => e.check(pye(BigInt(0), n))),
        (e.nonnegative = (n) => e.check(Kne(BigInt(0), n))),
        (e.multipleOf = (n, o) => e.check(T0t(n, o))));
      let r = e._zod.bag;
      ((e.minValue = r.minimum ?? null),
        (e.maxValue = r.maximum ?? null),
        (e.format = r.format ?? null));
    });
    CTi = Ro("ZodBigIntFormat", (e, t) => {
      (RUn.init(e, t), kFr.init(e, t));
    });
    $xl = Ro("ZodSymbol", (e, t) => {
      (DUn.init(e, t), lb.init(e, t));
    });
    Fxl = Ro("ZodUndefined", (e, t) => {
      (PUn.init(e, t), lb.init(e, t));
    });
    Uxl = Ro("ZodNull", (e, t) => {
      (MUn.init(e, t), lb.init(e, t));
    });
    Bxl = Ro("ZodAny", (e, t) => {
      (LUn.init(e, t), lb.init(e, t));
    });
    jxl = Ro("ZodUnknown", (e, t) => {
      (A0t.init(e, t), lb.init(e, t));
    });
    Wxl = Ro("ZodNever", (e, t) => {
      (OUn.init(e, t), lb.init(e, t));
    });
    Gxl = Ro("ZodVoid", (e, t) => {
      (NUn.init(e, t), lb.init(e, t));
    });
    z2n = Ro("ZodDate", (e, t) => {
      ($Un.init(e, t),
        lb.init(e, t),
        (e.min = (n, o) => e.check(Kne(n, o))),
        (e.max = (n, o) => e.check(pye(n, o))));
      let r = e._zod.bag;
      ((e.minDate = r.minimum ? new Date(r.minimum) : null),
        (e.maxDate = r.maximum ? new Date(r.maximum) : null));
    });
    Vxl = Ro("ZodArray", (e, t) => {
      (u9t.init(e, t),
        lb.init(e, t),
        (e.element = t.element),
        (e.min = (r, n) => e.check(Ntt(r, n))),
        (e.nonempty = (r) => e.check(Ntt(1, r))),
        (e.max = (r, n) => e.check(g9t(r, n))),
        (e.length = (r, n) => e.check(y9t(r, n))),
        (e.unwrap = () => e.element));
    });
    K2n = Ro("ZodObject", (e, t) => {
      (F$r.init(e, t),
        lb.init(e, t),
        Gl.defineLazy(e, "shape", () => t.shape),
        (e.keyof = () => bQ(Object.keys(e._zod.def.shape))),
        (e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: uD() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: uD() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: q2n() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (r) => Gl.extend(e, r)),
        (e.merge = (r) => Gl.merge(e, r)),
        (e.pick = (r) => Gl.pick(e, r)),
        (e.omit = (r) => Gl.omit(e, r)),
        (e.partial = (...r) => Gl.partial(DTi, e, r[0])),
        (e.required = (...r) => Gl.required(PTi, e, r[0])));
    });
    HTi = Ro("ZodUnion", (e, t) => {
      (U$r.init(e, t), lb.init(e, t), (e.options = t.options));
    });
    qxl = Ro("ZodDiscriminatedUnion", (e, t) => {
      (HTi.init(e, t), FUn.init(e, t));
    });
    zxl = Ro("ZodIntersection", (e, t) => {
      (UUn.init(e, t), lb.init(e, t));
    });
    Kxl = Ro("ZodTuple", (e, t) => {
      (Ott.init(e, t),
        lb.init(e, t),
        (e.rest = (r) => e.clone({ ...e._zod.def, rest: r })));
    });
    kTi = Ro("ZodRecord", (e, t) => {
      (BUn.init(e, t),
        lb.init(e, t),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType));
    });
    Yxl = Ro("ZodMap", (e, t) => {
      (jUn.init(e, t),
        lb.init(e, t),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType));
    });
    Xxl = Ro("ZodSet", (e, t) => {
      (WUn.init(e, t),
        lb.init(e, t),
        (e.min = (...r) => e.check(C0t(...r))),
        (e.nonempty = (r) => e.check(C0t(1, r))),
        (e.max = (...r) => e.check(h9t(...r))),
        (e.size = (...r) => e.check(pFr(...r))));
    });
    TFr = Ro("ZodEnum", (e, t) => {
      (GUn.init(e, t),
        lb.init(e, t),
        (e.enum = t.entries),
        (e.options = Object.values(t.entries)));
      let r = new Set(Object.keys(t.entries));
      ((e.extract = (n, o) => {
        let i = {};
        for (let s of n)
          if (r.has(s)) i[s] = t.entries[s];
          else throw Error(`Key ${s} not found in enum`);
        return new TFr({
          ...t,
          checks: [],
          ...Gl.normalizeParams(o),
          entries: i,
        });
      }),
        (e.exclude = (n, o) => {
          let i = { ...t.entries };
          for (let s of n)
            if (r.has(s)) delete i[s];
            else throw Error(`Key ${s} not found in enum`);
          return new TFr({
            ...t,
            checks: [],
            ...Gl.normalizeParams(o),
            entries: i,
          });
        }));
    });
    Jxl = Ro("ZodLiteral", (e, t) => {
      (VUn.init(e, t),
        lb.init(e, t),
        (e.values = new Set(t.values)),
        Object.defineProperty(e, "value", {
          get() {
            if (t.values.length > 1)
              throw Error(
                "This schema contains multiple valid literal values. Use `.values` instead.",
              );
            return t.values[0];
          },
        }));
    });
    Qxl = Ro("ZodFile", (e, t) => {
      (qUn.init(e, t),
        lb.init(e, t),
        (e.min = (r, n) => e.check(C0t(r, n))),
        (e.max = (r, n) => e.check(h9t(r, n))),
        (e.mime = (r, n) => e.check(bFr(Array.isArray(r) ? r : [r], n))));
    });
    ITi = Ro("ZodTransform", (e, t) => {
      (d9t.init(e, t),
        lb.init(e, t),
        (e._zod.parse = (r, n) => {
          r.addIssue = (i) => {
            if (typeof i === "string") r.issues.push(Gl.issue(i, r.value, t));
            else {
              let s = i;
              if (s.fatal) s.continue = !1;
              (s.code ?? (s.code = "custom"),
                s.input ?? (s.input = r.value),
                s.inst ?? (s.inst = e),
                s.continue ?? (s.continue = !0),
                r.issues.push(Gl.issue(s)));
            }
          };
          let o = t.transform(r.value, r);
          if (o instanceof Promise) return o.then((i) => ((r.value = i), r));
          return ((r.value = o), r);
        }));
    });
    DTi = Ro("ZodOptional", (e, t) => {
      (zUn.init(e, t), lb.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    Zxl = Ro("ZodNullable", (e, t) => {
      (KUn.init(e, t), lb.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    eHl = Ro("ZodDefault", (e, t) => {
      (YUn.init(e, t),
        lb.init(e, t),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap));
    });
    rHl = Ro("ZodPrefault", (e, t) => {
      (XUn.init(e, t), lb.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    PTi = Ro("ZodNonOptional", (e, t) => {
      (JUn.init(e, t), lb.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    iHl = Ro("ZodSuccess", (e, t) => {
      (QUn.init(e, t), lb.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    sHl = Ro("ZodCatch", (e, t) => {
      (ZUn.init(e, t),
        lb.init(e, t),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap));
    });
    lHl = Ro("ZodNaN", (e, t) => {
      (e2n.init(e, t), lb.init(e, t));
    });
    MTi = Ro("ZodPipe", (e, t) => {
      (p9t.init(e, t), lb.init(e, t), (e.in = t.in), (e.out = t.out));
    });
    cHl = Ro("ZodReadonly", (e, t) => {
      (t2n.init(e, t), lb.init(e, t));
    });
    dHl = Ro("ZodTemplateLiteral", (e, t) => {
      (r2n.init(e, t), lb.init(e, t));
    });
    pHl = Ro("ZodLazy", (e, t) => {
      (o2n.init(e, t), lb.init(e, t), (e.unwrap = () => e._zod.def.getter()));
    });
    mHl = Ro("ZodPromise", (e, t) => {
      (n2n.init(e, t), lb.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    X2n = Ro("ZodCustom", (e, t) => {
      (i2n.init(e, t), lb.init(e, t));
    });
  });
