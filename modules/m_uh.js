// Module: uh (lines 5563-5600)
  var uh = S(() => {
    KFn = Error.captureStackTrace ? Error.captureStackTrace : (...e) => {};
    $vi = R$r(() => {
      if (
        typeof navigator < "u" &&
        navigator?.userAgent?.includes("Cloudflare")
      )
        return !1;
      try {
        return (new Function(""), !0);
      } catch (e) {
        return !1;
      }
    });
    ((P$r = new Set(["string", "number", "symbol"])),
      (Fvi = new Set([
        "string",
        "number",
        "bigint",
        "boolean",
        "symbol",
        "undefined",
      ])));
    ((Bvi = {
      safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
      int32: [-2147483648, 2147483647],
      uint32: [0, 4294967295],
      float32: [
        -340282346638528860000000000000000000000,
        340282346638528860000000000000000000000,
      ],
      float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    }),
      (jvi = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
      }));
  });
