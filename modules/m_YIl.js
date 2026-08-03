// Module: YIl (lines 25588-27956)
  var YIl = S(() => {
    QBn();
    ZBn();
    BIl();
    CCi();
    $Ur();
    ((Pzm = /^c[^\s-]{8,}$/i),
      (Mzm = /^[0-9a-z]+$/),
      (Lzm = /^[0-9A-HJKMNP-TV-Z]{26}$/i),
      (Ozm =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i),
      (Nzm = /^[a-z0-9_-]{21}$/i),
      ($zm = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/),
      (Fzm =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/),
      (Uzm =
        /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i),
      (jzm =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (Wzm =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/),
      (Gzm =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/),
      (Vzm =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (qzm =
        /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/),
      (zzm =
        /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/),
      (Kzm = new RegExp(`^${GIl}$`)));
    V0e = class V0e extends cb {
      _parse(e) {
        if (this._def.coerce) e.data = String(e.data);
        if (this._getType(e) !== Yl.string) {
          let o = this._getOrReturnCtx(e);
          return (
            jc(o, {
              code: Na.invalid_type,
              expected: Yl.string,
              received: o.parsedType,
            }),
            Am
          );
        }
        let r = new bq(),
          n = void 0;
        for (let o of this._def.checks)
          if (o.kind === "min") {
            if (e.data.length < o.value)
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.too_small,
                  minimum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "max") {
            if (e.data.length > o.value)
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.too_big,
                  maximum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "length") {
            let i = e.data.length > o.value,
              s = e.data.length < o.value;
            if (i || s) {
              if (((n = this._getOrReturnCtx(e, n)), i))
                jc(n, {
                  code: Na.too_big,
                  maximum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: o.message,
                });
              else if (s)
                jc(n, {
                  code: Na.too_small,
                  minimum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: o.message,
                });
              r.dirty();
            }
          } else if (o.kind === "email") {
            if (!Uzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "email",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "emoji") {
            if (!xCi) xCi = new RegExp(Bzm, "u");
            if (!xCi.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "emoji",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "uuid") {
            if (!Ozm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "uuid",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "nanoid") {
            if (!Nzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "nanoid",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "cuid") {
            if (!Pzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "cuid",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "cuid2") {
            if (!Mzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "cuid2",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "ulid") {
            if (!Lzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "ulid",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "url")
            try {
              new URL(e.data);
            } catch {
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "url",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
            }
          else if (o.kind === "regex") {
            if (((o.regex.lastIndex = 0), !o.regex.test(e.data)))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "regex",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "trim") e.data = e.data.trim();
          else if (o.kind === "includes") {
            if (!e.data.includes(o.value, o.position))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.invalid_string,
                  validation: { includes: o.value, position: o.position },
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "toLowerCase") e.data = e.data.toLowerCase();
          else if (o.kind === "toUpperCase") e.data = e.data.toUpperCase();
          else if (o.kind === "startsWith") {
            if (!e.data.startsWith(o.value))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.invalid_string,
                  validation: { startsWith: o.value },
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "endsWith") {
            if (!e.data.endsWith(o.value))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.invalid_string,
                  validation: { endsWith: o.value },
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "datetime") {
            if (!qIl(o).test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.invalid_string,
                  validation: "datetime",
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "date") {
            if (!Kzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.invalid_string,
                  validation: "date",
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "time") {
            if (!Yzm(o).test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.invalid_string,
                  validation: "time",
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "duration") {
            if (!Fzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "duration",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "ip") {
            if (!Xzm(e.data, o.version))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "ip",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "jwt") {
            if (!Jzm(e.data, o.alg))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "jwt",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "cidr") {
            if (!Qzm(e.data, o.version))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "cidr",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "base64") {
            if (!qzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "base64",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else if (o.kind === "base64url") {
            if (!zzm.test(e.data))
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  validation: "base64url",
                  code: Na.invalid_string,
                  message: o.message,
                }),
                r.dirty());
          } else wS.assertNever(o);
        return { status: r.value, value: e.data };
      }
      _regex(e, t, r) {
        return this.refinement((n) => e.test(n), {
          validation: t,
          code: Na.invalid_string,
          ...op.errToObj(r),
        });
      }
      _addCheck(e) {
        return new V0e({ ...this._def, checks: [...this._def.checks, e] });
      }
      email(e) {
        return this._addCheck({ kind: "email", ...op.errToObj(e) });
      }
      url(e) {
        return this._addCheck({ kind: "url", ...op.errToObj(e) });
      }
      emoji(e) {
        return this._addCheck({ kind: "emoji", ...op.errToObj(e) });
      }
      uuid(e) {
        return this._addCheck({ kind: "uuid", ...op.errToObj(e) });
      }
      nanoid(e) {
        return this._addCheck({ kind: "nanoid", ...op.errToObj(e) });
      }
      cuid(e) {
        return this._addCheck({ kind: "cuid", ...op.errToObj(e) });
      }
      cuid2(e) {
        return this._addCheck({ kind: "cuid2", ...op.errToObj(e) });
      }
      ulid(e) {
        return this._addCheck({ kind: "ulid", ...op.errToObj(e) });
      }
      base64(e) {
        return this._addCheck({ kind: "base64", ...op.errToObj(e) });
      }
      base64url(e) {
        return this._addCheck({ kind: "base64url", ...op.errToObj(e) });
      }
      jwt(e) {
        return this._addCheck({ kind: "jwt", ...op.errToObj(e) });
      }
      ip(e) {
        return this._addCheck({ kind: "ip", ...op.errToObj(e) });
      }
      cidr(e) {
        return this._addCheck({ kind: "cidr", ...op.errToObj(e) });
      }
      datetime(e) {
        if (typeof e === "string")
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e,
          });
        return this._addCheck({
          kind: "datetime",
          precision: typeof e?.precision > "u" ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...op.errToObj(e?.message),
        });
      }
      date(e) {
        return this._addCheck({ kind: "date", message: e });
      }
      time(e) {
        if (typeof e === "string")
          return this._addCheck({ kind: "time", precision: null, message: e });
        return this._addCheck({
          kind: "time",
          precision: typeof e?.precision > "u" ? null : e?.precision,
          ...op.errToObj(e?.message),
        });
      }
      duration(e) {
        return this._addCheck({ kind: "duration", ...op.errToObj(e) });
      }
      regex(e, t) {
        return this._addCheck({ kind: "regex", regex: e, ...op.errToObj(t) });
      }
      includes(e, t) {
        return this._addCheck({
          kind: "includes",
          value: e,
          position: t?.position,
          ...op.errToObj(t?.message),
        });
      }
      startsWith(e, t) {
        return this._addCheck({
          kind: "startsWith",
          value: e,
          ...op.errToObj(t),
        });
      }
      endsWith(e, t) {
        return this._addCheck({
          kind: "endsWith",
          value: e,
          ...op.errToObj(t),
        });
      }
      min(e, t) {
        return this._addCheck({ kind: "min", value: e, ...op.errToObj(t) });
      }
      max(e, t) {
        return this._addCheck({ kind: "max", value: e, ...op.errToObj(t) });
      }
      length(e, t) {
        return this._addCheck({ kind: "length", value: e, ...op.errToObj(t) });
      }
      nonempty(e) {
        return this.min(1, op.errToObj(e));
      }
      trim() {
        return new V0e({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }],
        });
      }
      toLowerCase() {
        return new V0e({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
      }
      toUpperCase() {
        return new V0e({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((e) => e.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((e) => e.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((e) => e.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((e) => e.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((e) => e.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((e) => e.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((e) => e.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((e) => e.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((e) => e.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((e) => e.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((e) => e.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((e) => e.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((e) => e.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((e) => e.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((e) => e.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((e) => e.kind === "base64url");
      }
      get minLength() {
        let e = null;
        for (let t of this._def.checks)
          if (t.kind === "min") {
            if (e === null || t.value > e) e = t.value;
          }
        return e;
      }
      get maxLength() {
        let e = null;
        for (let t of this._def.checks)
          if (t.kind === "max") {
            if (e === null || t.value < e) e = t.value;
          }
        return e;
      }
    };
    V0e.create = (e) =>
      new V0e({
        checks: [],
        typeName: rl.ZodString,
        coerce: e?.coerce ?? !1,
        ...Cy(e),
      });
    Jtt = class Jtt extends cb {
      constructor() {
        super(...arguments);
        ((this.min = this.gte),
          (this.max = this.lte),
          (this.step = this.multipleOf));
      }
      _parse(e) {
        if (this._def.coerce) e.data = Number(e.data);
        if (this._getType(e) !== Yl.number) {
          let o = this._getOrReturnCtx(e);
          return (
            jc(o, {
              code: Na.invalid_type,
              expected: Yl.number,
              received: o.parsedType,
            }),
            Am
          );
        }
        let r = void 0,
          n = new bq();
        for (let o of this._def.checks)
          if (o.kind === "int") {
            if (!wS.isInteger(e.data))
              ((r = this._getOrReturnCtx(e, r)),
                jc(r, {
                  code: Na.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: o.message,
                }),
                n.dirty());
          } else if (o.kind === "min") {
            if (o.inclusive ? e.data < o.value : e.data <= o.value)
              ((r = this._getOrReturnCtx(e, r)),
                jc(r, {
                  code: Na.too_small,
                  minimum: o.value,
                  type: "number",
                  inclusive: o.inclusive,
                  exact: !1,
                  message: o.message,
                }),
                n.dirty());
          } else if (o.kind === "max") {
            if (o.inclusive ? e.data > o.value : e.data >= o.value)
              ((r = this._getOrReturnCtx(e, r)),
                jc(r, {
                  code: Na.too_big,
                  maximum: o.value,
                  type: "number",
                  inclusive: o.inclusive,
                  exact: !1,
                  message: o.message,
                }),
                n.dirty());
          } else if (o.kind === "multipleOf") {
            if (Zzm(e.data, o.value) !== 0)
              ((r = this._getOrReturnCtx(e, r)),
                jc(r, {
                  code: Na.not_multiple_of,
                  multipleOf: o.value,
                  message: o.message,
                }),
                n.dirty());
          } else if (o.kind === "finite") {
            if (!Number.isFinite(e.data))
              ((r = this._getOrReturnCtx(e, r)),
                jc(r, { code: Na.not_finite, message: o.message }),
                n.dirty());
          } else wS.assertNever(o);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit("min", e, !0, op.toString(t));
      }
      gt(e, t) {
        return this.setLimit("min", e, !1, op.toString(t));
      }
      lte(e, t) {
        return this.setLimit("max", e, !0, op.toString(t));
      }
      lt(e, t) {
        return this.setLimit("max", e, !1, op.toString(t));
      }
      setLimit(e, t, r, n) {
        return new Jtt({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: r, message: op.toString(n) },
          ],
        });
      }
      _addCheck(e) {
        return new Jtt({ ...this._def, checks: [...this._def.checks, e] });
      }
      int(e) {
        return this._addCheck({ kind: "int", message: op.toString(e) });
      }
      positive(e) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: op.toString(e),
        });
      }
      negative(e) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: op.toString(e),
        });
      }
      nonpositive(e) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: op.toString(e),
        });
      }
      nonnegative(e) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: op.toString(e),
        });
      }
      multipleOf(e, t) {
        return this._addCheck({
          kind: "multipleOf",
          value: e,
          message: op.toString(t),
        });
      }
      finite(e) {
        return this._addCheck({ kind: "finite", message: op.toString(e) });
      }
      safe(e) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: op.toString(e),
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: op.toString(e),
        });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          if (t.kind === "min") {
            if (e === null || t.value > e) e = t.value;
          }
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          if (t.kind === "max") {
            if (e === null || t.value < e) e = t.value;
          }
        return e;
      }
      get isInt() {
        return !!this._def.checks.find(
          (e) =>
            e.kind === "int" ||
            (e.kind === "multipleOf" && wS.isInteger(e.value)),
        );
      }
      get isFinite() {
        let e = null,
          t = null;
        for (let r of this._def.checks)
          if (
            r.kind === "finite" ||
            r.kind === "int" ||
            r.kind === "multipleOf"
          )
            return !0;
          else if (r.kind === "min") {
            if (t === null || r.value > t) t = r.value;
          } else if (r.kind === "max") {
            if (e === null || r.value < e) e = r.value;
          }
        return Number.isFinite(t) && Number.isFinite(e);
      }
    };
    Jtt.create = (e) =>
      new Jtt({
        checks: [],
        typeName: rl.ZodNumber,
        coerce: e?.coerce || !1,
        ...Cy(e),
      });
    Qtt = class Qtt extends cb {
      constructor() {
        super(...arguments);
        ((this.min = this.gte), (this.max = this.lte));
      }
      _parse(e) {
        if (this._def.coerce)
          try {
            e.data = BigInt(e.data);
          } catch {
            return this._getInvalidInput(e);
          }
        if (this._getType(e) !== Yl.bigint) return this._getInvalidInput(e);
        let r = void 0,
          n = new bq();
        for (let o of this._def.checks)
          if (o.kind === "min") {
            if (o.inclusive ? e.data < o.value : e.data <= o.value)
              ((r = this._getOrReturnCtx(e, r)),
                jc(r, {
                  code: Na.too_small,
                  type: "bigint",
                  minimum: o.value,
                  inclusive: o.inclusive,
                  message: o.message,
                }),
                n.dirty());
          } else if (o.kind === "max") {
            if (o.inclusive ? e.data > o.value : e.data >= o.value)
              ((r = this._getOrReturnCtx(e, r)),
                jc(r, {
                  code: Na.too_big,
                  type: "bigint",
                  maximum: o.value,
                  inclusive: o.inclusive,
                  message: o.message,
                }),
                n.dirty());
          } else if (o.kind === "multipleOf") {
            if (e.data % o.value !== BigInt(0))
              ((r = this._getOrReturnCtx(e, r)),
                jc(r, {
                  code: Na.not_multiple_of,
                  multipleOf: o.value,
                  message: o.message,
                }),
                n.dirty());
          } else wS.assertNever(o);
        return { status: n.value, value: e.data };
      }
      _getInvalidInput(e) {
        let t = this._getOrReturnCtx(e);
        return (
          jc(t, {
            code: Na.invalid_type,
            expected: Yl.bigint,
            received: t.parsedType,
          }),
          Am
        );
      }
      gte(e, t) {
        return this.setLimit("min", e, !0, op.toString(t));
      }
      gt(e, t) {
        return this.setLimit("min", e, !1, op.toString(t));
      }
      lte(e, t) {
        return this.setLimit("max", e, !0, op.toString(t));
      }
      lt(e, t) {
        return this.setLimit("max", e, !1, op.toString(t));
      }
      setLimit(e, t, r, n) {
        return new Qtt({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: r, message: op.toString(n) },
          ],
        });
      }
      _addCheck(e) {
        return new Qtt({ ...this._def, checks: [...this._def.checks, e] });
      }
      positive(e) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: op.toString(e),
        });
      }
      negative(e) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: op.toString(e),
        });
      }
      nonpositive(e) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: op.toString(e),
        });
      }
      nonnegative(e) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: op.toString(e),
        });
      }
      multipleOf(e, t) {
        return this._addCheck({
          kind: "multipleOf",
          value: e,
          message: op.toString(t),
        });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          if (t.kind === "min") {
            if (e === null || t.value > e) e = t.value;
          }
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          if (t.kind === "max") {
            if (e === null || t.value < e) e = t.value;
          }
        return e;
      }
    };
    Qtt.create = (e) =>
      new Qtt({
        checks: [],
        typeName: rl.ZodBigInt,
        coerce: e?.coerce ?? !1,
        ...Cy(e),
      });
    J9t = class J9t extends cb {
      _parse(e) {
        if (this._def.coerce) e.data = Boolean(e.data);
        if (this._getType(e) !== Yl.boolean) {
          let r = this._getOrReturnCtx(e);
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.boolean,
              received: r.parsedType,
            }),
            Am
          );
        }
        return kK(e.data);
      }
    };
    J9t.create = (e) =>
      new J9t({ typeName: rl.ZodBoolean, coerce: e?.coerce || !1, ...Cy(e) });
    Q0t = class Q0t extends cb {
      _parse(e) {
        if (this._def.coerce) e.data = new Date(e.data);
        if (this._getType(e) !== Yl.date) {
          let o = this._getOrReturnCtx(e);
          return (
            jc(o, {
              code: Na.invalid_type,
              expected: Yl.date,
              received: o.parsedType,
            }),
            Am
          );
        }
        if (Number.isNaN(e.data.getTime())) {
          let o = this._getOrReturnCtx(e);
          return (jc(o, { code: Na.invalid_date }), Am);
        }
        let r = new bq(),
          n = void 0;
        for (let o of this._def.checks)
          if (o.kind === "min") {
            if (e.data.getTime() < o.value)
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.too_small,
                  message: o.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: o.value,
                  type: "date",
                }),
                r.dirty());
          } else if (o.kind === "max") {
            if (e.data.getTime() > o.value)
              ((n = this._getOrReturnCtx(e, n)),
                jc(n, {
                  code: Na.too_big,
                  message: o.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: o.value,
                  type: "date",
                }),
                r.dirty());
          } else wS.assertNever(o);
        return { status: r.value, value: new Date(e.data.getTime()) };
      }
      _addCheck(e) {
        return new Q0t({ ...this._def, checks: [...this._def.checks, e] });
      }
      min(e, t) {
        return this._addCheck({
          kind: "min",
          value: e.getTime(),
          message: op.toString(t),
        });
      }
      max(e, t) {
        return this._addCheck({
          kind: "max",
          value: e.getTime(),
          message: op.toString(t),
        });
      }
      get minDate() {
        let e = null;
        for (let t of this._def.checks)
          if (t.kind === "min") {
            if (e === null || t.value > e) e = t.value;
          }
        return e != null ? new Date(e) : null;
      }
      get maxDate() {
        let e = null;
        for (let t of this._def.checks)
          if (t.kind === "max") {
            if (e === null || t.value < e) e = t.value;
          }
        return e != null ? new Date(e) : null;
      }
    };
    Q0t.create = (e) =>
      new Q0t({
        checks: [],
        coerce: e?.coerce || !1,
        typeName: rl.ZodDate,
        ...Cy(e),
      });
    UUr = class UUr extends cb {
      _parse(e) {
        if (this._getType(e) !== Yl.symbol) {
          let r = this._getOrReturnCtx(e);
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.symbol,
              received: r.parsedType,
            }),
            Am
          );
        }
        return kK(e.data);
      }
    };
    UUr.create = (e) => new UUr({ typeName: rl.ZodSymbol, ...Cy(e) });
    Q9t = class Q9t extends cb {
      _parse(e) {
        if (this._getType(e) !== Yl.undefined) {
          let r = this._getOrReturnCtx(e);
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.undefined,
              received: r.parsedType,
            }),
            Am
          );
        }
        return kK(e.data);
      }
    };
    Q9t.create = (e) => new Q9t({ typeName: rl.ZodUndefined, ...Cy(e) });
    Z9t = class Z9t extends cb {
      _parse(e) {
        if (this._getType(e) !== Yl.null) {
          let r = this._getOrReturnCtx(e);
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.null,
              received: r.parsedType,
            }),
            Am
          );
        }
        return kK(e.data);
      }
    };
    Z9t.create = (e) => new Z9t({ typeName: rl.ZodNull, ...Cy(e) });
    Z0t = class Z0t extends cb {
      constructor() {
        super(...arguments);
        this._any = !0;
      }
      _parse(e) {
        return kK(e.data);
      }
    };
    Z0t.create = (e) => new Z0t({ typeName: rl.ZodAny, ...Cy(e) });
    Xtt = class Xtt extends cb {
      constructor() {
        super(...arguments);
        this._unknown = !0;
      }
      _parse(e) {
        return kK(e.data);
      }
    };
    Xtt.create = (e) => new Xtt({ typeName: rl.ZodUnknown, ...Cy(e) });
    wOe = class wOe extends cb {
      _parse(e) {
        let t = this._getOrReturnCtx(e);
        return (
          jc(t, {
            code: Na.invalid_type,
            expected: Yl.never,
            received: t.parsedType,
          }),
          Am
        );
      }
    };
    wOe.create = (e) => new wOe({ typeName: rl.ZodNever, ...Cy(e) });
    BUr = class BUr extends cb {
      _parse(e) {
        if (this._getType(e) !== Yl.undefined) {
          let r = this._getOrReturnCtx(e);
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.void,
              received: r.parsedType,
            }),
            Am
          );
        }
        return kK(e.data);
      }
    };
    BUr.create = (e) => new BUr({ typeName: rl.ZodVoid, ...Cy(e) });
    q0e = class q0e extends cb {
      _parse(e) {
        let { ctx: t, status: r } = this._processInputParams(e),
          n = this._def;
        if (t.parsedType !== Yl.array)
          return (
            jc(t, {
              code: Na.invalid_type,
              expected: Yl.array,
              received: t.parsedType,
            }),
            Am
          );
        if (n.exactLength !== null) {
          let i = t.data.length > n.exactLength.value,
            s = t.data.length < n.exactLength.value;
          if (i || s)
            (jc(t, {
              code: i ? Na.too_big : Na.too_small,
              minimum: s ? n.exactLength.value : void 0,
              maximum: i ? n.exactLength.value : void 0,
              type: "array",
              inclusive: !0,
              exact: !0,
              message: n.exactLength.message,
            }),
              r.dirty());
        }
        if (n.minLength !== null) {
          if (t.data.length < n.minLength.value)
            (jc(t, {
              code: Na.too_small,
              minimum: n.minLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: n.minLength.message,
            }),
              r.dirty());
        }
        if (n.maxLength !== null) {
          if (t.data.length > n.maxLength.value)
            (jc(t, {
              code: Na.too_big,
              maximum: n.maxLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: n.maxLength.message,
            }),
              r.dirty());
        }
        if (t.common.async)
          return Promise.all(
            [...t.data].map((i, s) =>
              n.type._parseAsync(new z0e(t, i, t.path, s)),
            ),
          ).then((i) => bq.mergeArray(r, i));
        let o = [...t.data].map((i, s) =>
          n.type._parseSync(new z0e(t, i, t.path, s)),
        );
        return bq.mergeArray(r, o);
      }
      get element() {
        return this._def.type;
      }
      min(e, t) {
        return new q0e({
          ...this._def,
          minLength: { value: e, message: op.toString(t) },
        });
      }
      max(e, t) {
        return new q0e({
          ...this._def,
          maxLength: { value: e, message: op.toString(t) },
        });
      }
      length(e, t) {
        return new q0e({
          ...this._def,
          exactLength: { value: e, message: op.toString(t) },
        });
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    q0e.create = (e, t) =>
      new q0e({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: rl.ZodArray,
        ...Cy(t),
      });
    OO = class OO extends cb {
      constructor() {
        super(...arguments);
        ((this._cached = null),
          (this.nonstrict = this.passthrough),
          (this.augment = this.extend));
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let e = this._def.shape(),
          t = wS.objectKeys(e);
        return ((this._cached = { shape: e, keys: t }), this._cached);
      }
      _parse(e) {
        if (this._getType(e) !== Yl.object) {
          let l = this._getOrReturnCtx(e);
          return (
            jc(l, {
              code: Na.invalid_type,
              expected: Yl.object,
              received: l.parsedType,
            }),
            Am
          );
        }
        let { status: r, ctx: n } = this._processInputParams(e),
          { shape: o, keys: i } = this._getCached(),
          s = [];
        if (!(
          this._def.catchall instanceof wOe && this._def.unknownKeys === "strip"
        )) {
          for (let l in n.data) if (!i.includes(l)) s.push(l);
        }
        let a = [];
        for (let l of i) {
          let c = o[l],
            u = n.data[l];
          a.push({
            key: { status: "valid", value: l },
            value: c._parse(new z0e(n, u, n.path, l)),
            alwaysSet: l in n.data,
          });
        }
        if (this._def.catchall instanceof wOe) {
          let l = this._def.unknownKeys;
          if (l === "passthrough")
            for (let c of s)
              a.push({
                key: { status: "valid", value: c },
                value: { status: "valid", value: n.data[c] },
              });
          else if (l === "strict") {
            if (s.length > 0)
              (jc(n, { code: Na.unrecognized_keys, keys: s }), r.dirty());
          } else if (l === "strip");
          else
            throw Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          let l = this._def.catchall;
          for (let c of s) {
            let u = n.data[c];
            a.push({
              key: { status: "valid", value: c },
              value: l._parse(new z0e(n, u, n.path, c)),
              alwaysSet: c in n.data,
            });
          }
        }
        if (n.common.async)
          return Promise.resolve()
            .then(async () => {
              let l = [];
              for (let c of a) {
                let u = await c.key,
                  d = await c.value;
                l.push({ key: u, value: d, alwaysSet: c.alwaysSet });
              }
              return l;
            })
            .then((l) => bq.mergeObjectSync(r, l));
        else return bq.mergeObjectSync(r, a);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e) {
        return (
          op.errToObj,
          new OO({
            ...this._def,
            unknownKeys: "strict",
            ...(e !== void 0
              ? {
                  errorMap: (t, r) => {
                    let n =
                      this._def.errorMap?.(t, r).message ?? r.defaultError;
                    if (t.code === "unrecognized_keys")
                      return { message: op.errToObj(e).message ?? n };
                    return { message: n };
                  },
                }
              : {}),
          })
        );
      }
      strip() {
        return new OO({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new OO({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e) {
        return new OO({
          ...this._def,
          shape: () => ({ ...this._def.shape(), ...e }),
        });
      }
      merge(e) {
        return new OO({
          unknownKeys: e._def.unknownKeys,
          catchall: e._def.catchall,
          shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
          typeName: rl.ZodObject,
        });
      }
      setKey(e, t) {
        return this.augment({ [e]: t });
      }
      catchall(e) {
        return new OO({ ...this._def, catchall: e });
      }
      pick(e) {
        let t = {};
        for (let r of wS.objectKeys(e))
          if (e[r] && this.shape[r]) t[r] = this.shape[r];
        return new OO({ ...this._def, shape: () => t });
      }
      omit(e) {
        let t = {};
        for (let r of wS.objectKeys(this.shape))
          if (!e[r]) t[r] = this.shape[r];
        return new OO({ ...this._def, shape: () => t });
      }
      deepPartial() {
        return Y9t(this);
      }
      partial(e) {
        let t = {};
        for (let r of wS.objectKeys(this.shape)) {
          let n = this.shape[r];
          if (e && !e[r]) t[r] = n;
          else t[r] = n.optional();
        }
        return new OO({ ...this._def, shape: () => t });
      }
      required(e) {
        let t = {};
        for (let r of wS.objectKeys(this.shape))
          if (e && !e[r]) t[r] = this.shape[r];
          else {
            let o = this.shape[r];
            while (o instanceof Nue) o = o._def.innerType;
            t[r] = o;
          }
        return new OO({ ...this._def, shape: () => t });
      }
      keyof() {
        return zIl(wS.objectKeys(this.shape));
      }
    };
    OO.create = (e, t) =>
      new OO({
        shape: () => e,
        unknownKeys: "strip",
        catchall: wOe.create(),
        typeName: rl.ZodObject,
        ...Cy(t),
      });
    OO.strictCreate = (e, t) =>
      new OO({
        shape: () => e,
        unknownKeys: "strict",
        catchall: wOe.create(),
        typeName: rl.ZodObject,
        ...Cy(t),
      });
    OO.lazycreate = (e, t) =>
      new OO({
        shape: e,
        unknownKeys: "strip",
        catchall: wOe.create(),
        typeName: rl.ZodObject,
        ...Cy(t),
      });
    eKt = class eKt extends cb {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          r = this._def.options;
        function n(o) {
          for (let s of o) if (s.result.status === "valid") return s.result;
          for (let s of o)
            if (s.result.status === "dirty")
              return (t.common.issues.push(...s.ctx.common.issues), s.result);
          let i = o.map((s) => new eoe(s.ctx.common.issues));
          return (jc(t, { code: Na.invalid_union, unionErrors: i }), Am);
        }
        if (t.common.async)
          return Promise.all(
            r.map(async (o) => {
              let i = {
                ...t,
                common: { ...t.common, issues: [] },
                parent: null,
              };
              return {
                result: await o._parseAsync({
                  data: t.data,
                  path: t.path,
                  parent: i,
                }),
                ctx: i,
              };
            }),
          ).then(n);
        else {
          let o = void 0,
            i = [];
          for (let a of r) {
            let l = { ...t, common: { ...t.common, issues: [] }, parent: null },
              c = a._parseSync({ data: t.data, path: t.path, parent: l });
            if (c.status === "valid") return c;
            else if (c.status === "dirty" && !o) o = { result: c, ctx: l };
            if (l.common.issues.length) i.push(l.common.issues);
          }
          if (o)
            return (t.common.issues.push(...o.ctx.common.issues), o.result);
          let s = i.map((a) => new eoe(a));
          return (jc(t, { code: Na.invalid_union, unionErrors: s }), Am);
        }
      }
      get options() {
        return this._def.options;
      }
    };
    eKt.create = (e, t) =>
      new eKt({ options: e, typeName: rl.ZodUnion, ...Cy(t) });
    r4n = class r4n extends cb {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== Yl.object)
          return (
            jc(t, {
              code: Na.invalid_type,
              expected: Yl.object,
              received: t.parsedType,
            }),
            Am
          );
        let r = this.discriminator,
          n = t.data[r],
          o = this.optionsMap.get(n);
        if (!o)
          return (
            jc(t, {
              code: Na.invalid_union_discriminator,
              options: Array.from(this.optionsMap.keys()),
              path: [r],
            }),
            Am
          );
        if (t.common.async)
          return o._parseAsync({ data: t.data, path: t.path, parent: t });
        else return o._parseSync({ data: t.data, path: t.path, parent: t });
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      static create(e, t, r) {
        let n = new Map();
        for (let o of t) {
          let i = _5e(o.shape[e]);
          if (!i.length)
            throw Error(
              `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
            );
          for (let s of i) {
            if (n.has(s))
              throw Error(
                `Discriminator property ${String(e)} has duplicate value ${String(s)}`,
              );
            n.set(s, o);
          }
        }
        return new r4n({
          typeName: rl.ZodDiscriminatedUnion,
          discriminator: e,
          options: t,
          optionsMap: n,
          ...Cy(r),
        });
      }
    };
    tKt = class tKt extends cb {
      _parse(e) {
        let { status: t, ctx: r } = this._processInputParams(e),
          n = (o, i) => {
            if (e4n(o) || e4n(i)) return Am;
            let s = HCi(o.value, i.value);
            if (!s.valid)
              return (jc(r, { code: Na.invalid_intersection_types }), Am);
            if (t4n(o) || t4n(i)) t.dirty();
            return { status: t.value, value: s.data };
          };
        if (r.common.async)
          return Promise.all([
            this._def.left._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
            this._def.right._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
          ]).then(([o, i]) => n(o, i));
        else
          return n(
            this._def.left._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
            this._def.right._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
          );
      }
    };
    tKt.create = (e, t, r) =>
      new tKt({ left: e, right: t, typeName: rl.ZodIntersection, ...Cy(r) });
    TOe = class TOe extends cb {
      _parse(e) {
        let { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== Yl.array)
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.array,
              received: r.parsedType,
            }),
            Am
          );
        if (r.data.length < this._def.items.length)
          return (
            jc(r, {
              code: Na.too_small,
              minimum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            Am
          );
        if (!this._def.rest && r.data.length > this._def.items.length)
          (jc(r, {
            code: Na.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array",
          }),
            t.dirty());
        let o = [...r.data]
          .map((i, s) => {
            let a = this._def.items[s] || this._def.rest;
            if (!a) return null;
            return a._parse(new z0e(r, i, r.path, s));
          })
          .filter((i) => !!i);
        if (r.common.async)
          return Promise.all(o).then((i) => bq.mergeArray(t, i));
        else return bq.mergeArray(t, o);
      }
      get items() {
        return this._def.items;
      }
      rest(e) {
        return new TOe({ ...this._def, rest: e });
      }
    };
    TOe.create = (e, t) => {
      if (!Array.isArray(e))
        throw Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new TOe({ items: e, typeName: rl.ZodTuple, rest: null, ...Cy(t) });
    };
    jUr = class jUr extends cb {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e) {
        let { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== Yl.object)
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.object,
              received: r.parsedType,
            }),
            Am
          );
        let n = [],
          o = this._def.keyType,
          i = this._def.valueType;
        for (let s in r.data)
          n.push({
            key: o._parse(new z0e(r, s, r.path, s)),
            value: i._parse(new z0e(r, r.data[s], r.path, s)),
            alwaysSet: s in r.data,
          });
        if (r.common.async) return bq.mergeObjectAsync(t, n);
        else return bq.mergeObjectSync(t, n);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e, t, r) {
        if (t instanceof cb)
          return new jUr({
            keyType: e,
            valueType: t,
            typeName: rl.ZodRecord,
            ...Cy(r),
          });
        return new jUr({
          keyType: V0e.create(),
          valueType: e,
          typeName: rl.ZodRecord,
          ...Cy(t),
        });
      }
    };
    WUr = class WUr extends cb {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e) {
        let { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== Yl.map)
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.map,
              received: r.parsedType,
            }),
            Am
          );
        let n = this._def.keyType,
          o = this._def.valueType,
          i = [...r.data.entries()].map(([s, a], l) => ({
            key: n._parse(new z0e(r, s, r.path, [l, "key"])),
            value: o._parse(new z0e(r, a, r.path, [l, "value"])),
          }));
        if (r.common.async) {
          let s = new Map();
          return Promise.resolve().then(async () => {
            for (let a of i) {
              let l = await a.key,
                c = await a.value;
              if (l.status === "aborted" || c.status === "aborted") return Am;
              if (l.status === "dirty" || c.status === "dirty") t.dirty();
              s.set(l.value, c.value);
            }
            return { status: t.value, value: s };
          });
        } else {
          let s = new Map();
          for (let a of i) {
            let { key: l, value: c } = a;
            if (l.status === "aborted" || c.status === "aborted") return Am;
            if (l.status === "dirty" || c.status === "dirty") t.dirty();
            s.set(l.value, c.value);
          }
          return { status: t.value, value: s };
        }
      }
    };
    WUr.create = (e, t, r) =>
      new WUr({ valueType: t, keyType: e, typeName: rl.ZodMap, ...Cy(r) });
    eCt = class eCt extends cb {
      _parse(e) {
        let { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== Yl.set)
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.set,
              received: r.parsedType,
            }),
            Am
          );
        let n = this._def;
        if (n.minSize !== null) {
          if (r.data.size < n.minSize.value)
            (jc(r, {
              code: Na.too_small,
              minimum: n.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
              t.dirty());
        }
        if (n.maxSize !== null) {
          if (r.data.size > n.maxSize.value)
            (jc(r, {
              code: Na.too_big,
              maximum: n.maxSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: n.maxSize.message,
            }),
              t.dirty());
        }
        let o = this._def.valueType;
        function i(a) {
          let l = new Set();
          for (let c of a) {
            if (c.status === "aborted") return Am;
            if (c.status === "dirty") t.dirty();
            l.add(c.value);
          }
          return { status: t.value, value: l };
        }
        let s = [...r.data.values()].map((a, l) =>
          o._parse(new z0e(r, a, r.path, l)),
        );
        if (r.common.async) return Promise.all(s).then((a) => i(a));
        else return i(s);
      }
      min(e, t) {
        return new eCt({
          ...this._def,
          minSize: { value: e, message: op.toString(t) },
        });
      }
      max(e, t) {
        return new eCt({
          ...this._def,
          maxSize: { value: e, message: op.toString(t) },
        });
      }
      size(e, t) {
        return this.min(e, t).max(e, t);
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    eCt.create = (e, t) =>
      new eCt({
        valueType: e,
        minSize: null,
        maxSize: null,
        typeName: rl.ZodSet,
        ...Cy(t),
      });
    X9t = class X9t extends cb {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(e) {
        let { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== Yl.function)
          return (
            jc(t, {
              code: Na.invalid_type,
              expected: Yl.function,
              received: t.parsedType,
            }),
            Am
          );
        function r(s, a) {
          return FUr({
            data: s,
            path: t.path,
            errorMaps: [
              t.common.contextualErrorMap,
              t.schemaErrorMap,
              z9t(),
              y5e,
            ].filter((l) => !!l),
            issueData: { code: Na.invalid_arguments, argumentsError: a },
          });
        }
        function n(s, a) {
          return FUr({
            data: s,
            path: t.path,
            errorMaps: [
              t.common.contextualErrorMap,
              t.schemaErrorMap,
              z9t(),
              y5e,
            ].filter((l) => !!l),
            issueData: { code: Na.invalid_return_type, returnTypeError: a },
          });
        }
        let o = { errorMap: t.common.contextualErrorMap },
          i = t.data;
        if (this._def.returns instanceof tCt) {
          let s = this;
          return kK(async function (...a) {
            let l = new eoe([]),
              c = await s._def.args.parseAsync(a, o).catch((p) => {
                throw (l.addIssue(r(a, p)), l);
              }),
              u = await Reflect.apply(i, this, c);
            return await s._def.returns._def.type
              .parseAsync(u, o)
              .catch((p) => {
                throw (l.addIssue(n(u, p)), l);
              });
          });
        } else {
          let s = this;
          return kK(function (...a) {
            let l = s._def.args.safeParse(a, o);
            if (!l.success) throw new eoe([r(a, l.error)]);
            let c = Reflect.apply(i, this, l.data),
              u = s._def.returns.safeParse(c, o);
            if (!u.success) throw new eoe([n(c, u.error)]);
            return u.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...e) {
        return new X9t({
          ...this._def,
          args: TOe.create(e).rest(Xtt.create()),
        });
      }
      returns(e) {
        return new X9t({ ...this._def, returns: e });
      }
      implement(e) {
        return this.parse(e);
      }
      strictImplement(e) {
        return this.parse(e);
      }
      static create(e, t, r) {
        return new X9t({
          args: e ? e : TOe.create([]).rest(Xtt.create()),
          returns: t || Xtt.create(),
          typeName: rl.ZodFunction,
          ...Cy(r),
        });
      }
    };
    rKt = class rKt extends cb {
      get schema() {
        return this._def.getter();
      }
      _parse(e) {
        let { ctx: t } = this._processInputParams(e);
        return this._def
          .getter()
          ._parse({ data: t.data, path: t.path, parent: t });
      }
    };
    rKt.create = (e, t) =>
      new rKt({ getter: e, typeName: rl.ZodLazy, ...Cy(t) });
    nKt = class nKt extends cb {
      _parse(e) {
        if (e.data !== this._def.value) {
          let t = this._getOrReturnCtx(e);
          return (
            jc(t, {
              received: t.data,
              code: Na.invalid_literal,
              expected: this._def.value,
            }),
            Am
          );
        }
        return { status: "valid", value: e.data };
      }
      get value() {
        return this._def.value;
      }
    };
    nKt.create = (e, t) =>
      new nKt({ value: e, typeName: rl.ZodLiteral, ...Cy(t) });
    Ztt = class Ztt extends cb {
      _parse(e) {
        if (typeof e.data !== "string") {
          let t = this._getOrReturnCtx(e),
            r = this._def.values;
          return (
            jc(t, {
              expected: wS.joinValues(r),
              received: t.parsedType,
              code: Na.invalid_type,
            }),
            Am
          );
        }
        if (!this._cache) this._cache = new Set(this._def.values);
        if (!this._cache.has(e.data)) {
          let t = this._getOrReturnCtx(e),
            r = this._def.values;
          return (
            jc(t, {
              received: t.data,
              code: Na.invalid_enum_value,
              options: r,
            }),
            Am
          );
        }
        return kK(e.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Values() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      extract(e, t = this._def) {
        return Ztt.create(e, { ...this._def, ...t });
      }
      exclude(e, t = this._def) {
        return Ztt.create(
          this.options.filter((r) => !e.includes(r)),
          { ...this._def, ...t },
        );
      }
    };
    Ztt.create = zIl;
    oKt = class oKt extends cb {
      _parse(e) {
        let t = wS.getValidEnumValues(this._def.values),
          r = this._getOrReturnCtx(e);
        if (r.parsedType !== Yl.string && r.parsedType !== Yl.number) {
          let n = wS.objectValues(t);
          return (
            jc(r, {
              expected: wS.joinValues(n),
              received: r.parsedType,
              code: Na.invalid_type,
            }),
            Am
          );
        }
        if (!this._cache)
          this._cache = new Set(wS.getValidEnumValues(this._def.values));
        if (!this._cache.has(e.data)) {
          let n = wS.objectValues(t);
          return (
            jc(r, {
              received: r.data,
              code: Na.invalid_enum_value,
              options: n,
            }),
            Am
          );
        }
        return kK(e.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    oKt.create = (e, t) =>
      new oKt({ values: e, typeName: rl.ZodNativeEnum, ...Cy(t) });
    tCt = class tCt extends cb {
      unwrap() {
        return this._def.type;
      }
      _parse(e) {
        let { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== Yl.promise && t.common.async === !1)
          return (
            jc(t, {
              code: Na.invalid_type,
              expected: Yl.promise,
              received: t.parsedType,
            }),
            Am
          );
        let r = t.parsedType === Yl.promise ? t.data : Promise.resolve(t.data);
        return kK(
          r.then((n) =>
            this._def.type.parseAsync(n, {
              path: t.path,
              errorMap: t.common.contextualErrorMap,
            }),
          ),
        );
      }
    };
    tCt.create = (e, t) =>
      new tCt({ type: e, typeName: rl.ZodPromise, ...Cy(t) });
    K0e = class K0e extends cb {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === rl.ZodEffects
          ? this._def.schema.sourceType()
          : this._def.schema;
      }
      _parse(e) {
        let { status: t, ctx: r } = this._processInputParams(e),
          n = this._def.effect || null,
          o = {
            addIssue: (i) => {
              if ((jc(r, i), i.fatal)) t.abort();
              else t.dirty();
            },
            get path() {
              return r.path;
            },
          };
        if (((o.addIssue = o.addIssue.bind(o)), n.type === "preprocess")) {
          let i = n.transform(r.data, o);
          if (r.common.async)
            return Promise.resolve(i).then(async (s) => {
              if (t.value === "aborted") return Am;
              let a = await this._def.schema._parseAsync({
                data: s,
                path: r.path,
                parent: r,
              });
              if (a.status === "aborted") return Am;
              if (a.status === "dirty") return J0t(a.value);
              if (t.value === "dirty") return J0t(a.value);
              return a;
            });
          else {
            if (t.value === "aborted") return Am;
            let s = this._def.schema._parseSync({
              data: i,
              path: r.path,
              parent: r,
            });
            if (s.status === "aborted") return Am;
            if (s.status === "dirty") return J0t(s.value);
            if (t.value === "dirty") return J0t(s.value);
            return s;
          }
        }
        if (n.type === "refinement") {
          let i = (s) => {
            let a = n.refinement(s, o);
            if (r.common.async) return Promise.resolve(a);
            if (a instanceof Promise)
              throw Error(
                "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
              );
            return s;
          };
          if (r.common.async === !1) {
            let s = this._def.schema._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            if (s.status === "aborted") return Am;
            if (s.status === "dirty") t.dirty();
            return (i(s.value), { status: t.value, value: s.value });
          } else
            return this._def.schema
              ._parseAsync({ data: r.data, path: r.path, parent: r })
              .then((s) => {
                if (s.status === "aborted") return Am;
                if (s.status === "dirty") t.dirty();
                return i(s.value).then(() => ({
                  status: t.value,
                  value: s.value,
                }));
              });
        }
        if (n.type === "transform")
          if (r.common.async === !1) {
            let i = this._def.schema._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            if (!Ytt(i)) return Am;
            let s = n.transform(i.value, o);
            if (s instanceof Promise)
              throw Error(
                "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
              );
            return { status: t.value, value: s };
          } else
            return this._def.schema
              ._parseAsync({ data: r.data, path: r.path, parent: r })
              .then((i) => {
                if (!Ytt(i)) return Am;
                return Promise.resolve(n.transform(i.value, o)).then((s) => ({
                  status: t.value,
                  value: s,
                }));
              });
        wS.assertNever(n);
      }
    };
    K0e.create = (e, t, r) =>
      new K0e({ schema: e, typeName: rl.ZodEffects, effect: t, ...Cy(r) });
    K0e.createWithPreprocess = (e, t, r) =>
      new K0e({
        schema: t,
        effect: { type: "preprocess", transform: e },
        typeName: rl.ZodEffects,
        ...Cy(r),
      });
    Nue = class Nue extends cb {
      _parse(e) {
        if (this._getType(e) === Yl.undefined) return kK(void 0);
        return this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    Nue.create = (e, t) =>
      new Nue({ innerType: e, typeName: rl.ZodOptional, ...Cy(t) });
    b5e = class b5e extends cb {
      _parse(e) {
        if (this._getType(e) === Yl.null) return kK(null);
        return this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    b5e.create = (e, t) =>
      new b5e({ innerType: e, typeName: rl.ZodNullable, ...Cy(t) });
    iKt = class iKt extends cb {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          r = t.data;
        if (t.parsedType === Yl.undefined) r = this._def.defaultValue();
        return this._def.innerType._parse({ data: r, path: t.path, parent: t });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    iKt.create = (e, t) =>
      new iKt({
        innerType: e,
        typeName: rl.ZodDefault,
        defaultValue:
          typeof t.default === "function" ? t.default : () => t.default,
        ...Cy(t),
      });
    sKt = class sKt extends cb {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          r = { ...t, common: { ...t.common, issues: [] } },
          n = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: { ...r },
          });
        if (K9t(n))
          return n.then((o) => ({
            status: "valid",
            value:
              o.status === "valid"
                ? o.value
                : this._def.catchValue({
                    get error() {
                      return new eoe(r.common.issues);
                    },
                    input: r.data,
                  }),
          }));
        else
          return {
            status: "valid",
            value:
              n.status === "valid"
                ? n.value
                : this._def.catchValue({
                    get error() {
                      return new eoe(r.common.issues);
                    },
                    input: r.data,
                  }),
          };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    sKt.create = (e, t) =>
      new sKt({
        innerType: e,
        typeName: rl.ZodCatch,
        catchValue: typeof t.catch === "function" ? t.catch : () => t.catch,
        ...Cy(t),
      });
    GUr = class GUr extends cb {
      _parse(e) {
        if (this._getType(e) !== Yl.nan) {
          let r = this._getOrReturnCtx(e);
          return (
            jc(r, {
              code: Na.invalid_type,
              expected: Yl.nan,
              received: r.parsedType,
            }),
            Am
          );
        }
        return { status: "valid", value: e.data };
      }
    };
    GUr.create = (e) => new GUr({ typeName: rl.ZodNaN, ...Cy(e) });
    e9m = Symbol("zod_brand");
    n4n = class n4n extends cb {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          r = t.data;
        return this._def.type._parse({ data: r, path: t.path, parent: t });
      }
      unwrap() {
        return this._def.type;
      }
    };
    VUr = class VUr extends cb {
      _parse(e) {
        let { status: t, ctx: r } = this._processInputParams(e);
        if (r.common.async)
          return (async () => {
            let o = await this._def.in._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            if (o.status === "aborted") return Am;
            if (o.status === "dirty") return (t.dirty(), J0t(o.value));
            else
              return this._def.out._parseAsync({
                data: o.value,
                path: r.path,
                parent: r,
              });
          })();
        else {
          let n = this._def.in._parseSync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          if (n.status === "aborted") return Am;
          if (n.status === "dirty")
            return (t.dirty(), { status: "dirty", value: n.value });
          else
            return this._def.out._parseSync({
              data: n.value,
              path: r.path,
              parent: r,
            });
        }
      }
      static create(e, t) {
        return new VUr({ in: e, out: t, typeName: rl.ZodPipeline });
      }
    };
    aKt = class aKt extends cb {
      _parse(e) {
        let t = this._def.innerType._parse(e),
          r = (n) => {
            if (Ytt(n)) n.value = Object.freeze(n.value);
            return n;
          };
        return K9t(t) ? t.then((n) => r(n)) : r(t);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    aKt.create = (e, t) =>
      new aKt({ innerType: e, typeName: rl.ZodReadonly, ...Cy(t) });
    t9m = { object: OO.lazycreate };
    (function (e) {
      ((e.ZodString = "ZodString"),
        (e.ZodNumber = "ZodNumber"),
        (e.ZodNaN = "ZodNaN"),
        (e.ZodBigInt = "ZodBigInt"),
        (e.ZodBoolean = "ZodBoolean"),
        (e.ZodDate = "ZodDate"),
        (e.ZodSymbol = "ZodSymbol"),
        (e.ZodUndefined = "ZodUndefined"),
        (e.ZodNull = "ZodNull"),
        (e.ZodAny = "ZodAny"),
        (e.ZodUnknown = "ZodUnknown"),
        (e.ZodNever = "ZodNever"),
        (e.ZodVoid = "ZodVoid"),
        (e.ZodArray = "ZodArray"),
        (e.ZodObject = "ZodObject"),
        (e.ZodUnion = "ZodUnion"),
        (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (e.ZodIntersection = "ZodIntersection"),
        (e.ZodTuple = "ZodTuple"),
        (e.ZodRecord = "ZodRecord"),
        (e.ZodMap = "ZodMap"),
        (e.ZodSet = "ZodSet"),
        (e.ZodFunction = "ZodFunction"),
        (e.ZodLazy = "ZodLazy"),
        (e.ZodLiteral = "ZodLiteral"),
        (e.ZodEnum = "ZodEnum"),
        (e.ZodEffects = "ZodEffects"),
        (e.ZodNativeEnum = "ZodNativeEnum"),
        (e.ZodOptional = "ZodOptional"),
        (e.ZodNullable = "ZodNullable"),
        (e.ZodDefault = "ZodDefault"),
        (e.ZodCatch = "ZodCatch"),
        (e.ZodPromise = "ZodPromise"),
        (e.ZodBranded = "ZodBranded"),
        (e.ZodPipeline = "ZodPipeline"),
        (e.ZodReadonly = "ZodReadonly"));
    })(rl || (rl = {}));
    ((Sa = V0e.create),
      (vye = Jtt.create),
      (n9m = GUr.create),
      (o9m = Qtt.create),
      (UG = J9t.create),
      (i9m = Q0t.create),
      (s9m = UUr.create),
      (a9m = Q9t.create),
      (l9m = Z9t.create),
      (c9m = Z0t.create),
      (u9m = Xtt.create),
      (d9m = wOe.create),
      (p9m = BUr.create),
      (jN = q0e.create),
      (CQ = OO.create),
      ($ue = OO.strictCreate),
      (rCt = eKt.create),
      (f9m = r4n.create),
      (m9m = tKt.create),
      (h9m = TOe.create),
      (Y0e = jUr.create),
      (g9m = WUr.create),
      (y9m = eCt.create),
      (_9m = X9t.create),
      (b9m = rKt.create),
      (S9m = nKt.create),
      (X0e = Ztt.create),
      (E9m = oKt.create),
      (v9m = tCt.create),
      (A9m = K0e.create),
      (w9m = Nue.create),
      (T9m = b5e.create),
      (C9m = K0e.createWithPreprocess),
      (x9m = VUr.create),
      (R9m = {
        string: (e) => V0e.create({ ...e, coerce: !0 }),
        number: (e) => Jtt.create({ ...e, coerce: !0 }),
        boolean: (e) => J9t.create({ ...e, coerce: !0 }),
        bigint: (e) => Qtt.create({ ...e, coerce: !0 }),
        date: (e) => Q0t.create({ ...e, coerce: !0 }),
      }),
      (D9m = Am));
  });
