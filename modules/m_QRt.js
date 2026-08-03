// Module: QRt (lines 200473-200508)
  var QRt = S(() => {
    uso();
    ((dso = require("async_hooks")), (Zlu = new dso.AsyncLocalStorage()));
    JRt = {
      queue(e) {
        let t = XRt(),
          { index: r } = t;
        t.hooksEffect.push(() => {
          t.hooksCleanup[r]?.();
          let n = e(zes());
          if (n != null && typeof n !== "function")
            throw new i9r(
              "useEffect return value must be a cleanup function or nothing.",
            );
          t.hooksCleanup[r] = n;
        });
      },
      run() {
        let e = XRt();
        Kes(() => {
          (e.hooksEffect.forEach((t) => {
            t();
          }),
            (e.hooksEffect.length = 0));
        })();
      },
      clearAll() {
        let e = XRt();
        (e.hooksCleanup.forEach((t) => {
          t?.();
        }),
          (e.hooksEffect.length = 0),
          (e.hooksCleanup.length = 0));
      },
    };
  });
