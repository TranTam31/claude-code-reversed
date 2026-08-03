// Module: kOl (lines 40546-40585)
  var kOl = S(() => {
    NG();
    NG();
    xHi();
    ((wfh = Ro("ZodMiniType", (e, t) => {
      if (!e._zod) throw Error("Uninitialized schema in ZodMiniType.");
      (dh.init(e, t),
        (e.def = t),
        (e.parse = (r, n) => S0t(e, r, n, { callee: e.parse })),
        (e.safeParse = (r, n) => Dtt(e, r, n)),
        (e.parseAsync = async (r, n) => E0t(e, r, n, { callee: e.parseAsync })),
        (e.safeParseAsync = async (r, n) => Ptt(e, r, n)),
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
        (e.register = (r, n) => (r.add(e, n), e)));
    })),
      (Tfh = Ro("ZodMiniObject", (e, t) => {
        (F$r.init(e, t),
          wfh.init(e, t),
          Gl.defineLazy(e, "shape", () => t.shape));
      })));
  });
