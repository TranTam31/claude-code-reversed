// Module: II (lines 29455-29580)
  var II = S(() => {
    (({ toString: f7m } = Object.prototype),
      ({ getPrototypeOf: g4n } = Object),
      ({ iterator: y4n, toStringTag: PRl } = Symbol),
      (_4n = ((e) => (t) => {
        let r = f7m.call(t);
        return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
      })(Object.create(null))),
      ({ isArray: yKt } = Array),
      (gKt = b4n("undefined")));
    MRl = eCe("ArrayBuffer");
    ((h7m = b4n("string")),
      (noe = b4n("function")),
      (LRl = b4n("number")),
      (_7m = eCe("Date")),
      (b7m = eCe("File")),
      (v7m = eCe("Blob")),
      (A7m = eCe("FileList")));
    ((IRl = T7m()),
      (RRl = typeof IRl.FormData < "u" ? IRl.FormData : void 0),
      (x7m = eCe("URLSearchParams")),
      ([H7m, k7m, I7m, R7m] = [
        "ReadableStream",
        "Request",
        "Response",
        "Headers",
      ].map(eCe)));
    mCt = (() => {
      if (typeof globalThis < "u") return globalThis;
      return typeof self < "u" ? self : typeof window < "u" ? window : global;
    })();
    ((F7m = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && g4n(Uint8Array))),
      (j7m = eCe("HTMLFormElement")),
      (DRl = (
        ({ hasOwnProperty: e }) =>
        (t, r) =>
          e.call(t, r)
      )(Object.prototype)),
      (G7m = eCe("RegExp")));
    ((J7m = eCe("AsyncFunction")),
      (FRl = ((e, t) => {
        if (e) return setImmediate;
        return t
          ? ((r, n) => (
              mCt.addEventListener(
                "message",
                ({ source: o, data: i }) => {
                  if (o === mCt && i === r) n.length && n.shift()();
                },
                !1,
              ),
              (o) => {
                (n.push(o), mCt.postMessage(r, "*"));
              }
            ))(`axios@${Math.random()}`, [])
          : (r) => setTimeout(r);
      })(typeof setImmediate === "function", noe(mCt.postMessage))),
      (Z7m =
        typeof queueMicrotask < "u"
          ? queueMicrotask.bind(mCt)
          : (typeof process < "u" && process.nextTick) || FRl),
      (Gn = {
        isArray: yKt,
        isArrayBuffer: MRl,
        isBuffer: r2r,
        isFormData: C7m,
        isArrayBufferView: m7m,
        isString: h7m,
        isNumber: LRl,
        isBoolean: g7m,
        isObject: n2r,
        isPlainObject: h4n,
        isEmptyObject: y7m,
        isReadableStream: H7m,
        isRequest: k7m,
        isResponse: I7m,
        isHeaders: R7m,
        isUndefined: gKt,
        isDate: _7m,
        isFile: b7m,
        isReactNativeBlob: S7m,
        isReactNative: E7m,
        isBlob: v7m,
        isRegExp: G7m,
        isFunction: noe,
        isStream: w7m,
        isURLSearchParams: x7m,
        isTypedArray: F7m,
        isFileList: A7m,
        forEach: o2r,
        merge: WCi,
        extend: P7m,
        trim: D7m,
        stripBOM: M7m,
        inherits: L7m,
        toFlatObject: O7m,
        kindOf: _4n,
        kindOfTest: eCe,
        endsWith: N7m,
        toArray: $7m,
        forEachEntry: U7m,
        matchAll: B7m,
        isHTMLForm: j7m,
        hasOwnProperty: DRl,
        hasOwnProp: DRl,
        reduceDescriptors: $Rl,
        freezeMethods: V7m,
        toObjectSet: q7m,
        toCamelCase: W7m,
        noop: z7m,
        toFiniteNumber: K7m,
        findKey: ORl,
        global: mCt,
        isContextDefined: NRl,
        isSpecCompliantForm: Y7m,
        toJSONObject: X7m,
        isAsyncFn: J7m,
        isThenable: Q7m,
        setImmediate: FRl,
        asap: Z7m,
        isIterable: eXm,
      }));
  });
