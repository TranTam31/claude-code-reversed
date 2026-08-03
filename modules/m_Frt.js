// Module: Frt (lines 57020-57056)
  var Frt = S(() => {
    bl();
    Ar();
    r4l = new Map();
    XTh = qr(async () => {
      let e = bDi(),
        t;
      try {
        let [r, n] = await Promise.all([
            Promise.resolve().then(() => x(LK(), 1)),
            Promise.resolve().then(() => x(qN(), 1)),
          ]),
          o = r.loadConfig ?? r.default?.loadConfig,
          i =
            n.NODE_REGION_CONFIG_FILE_OPTIONS ??
            n.default?.NODE_REGION_CONFIG_FILE_OPTIONS;
        t =
          (
            await o(
              {
                environmentVariableSelector: () => {
                  return;
                },
                configFileSelector: (a) => a.region,
                default: () => {
                  return;
                },
              },
              i,
            )()
          )?.trim() || void 0;
      } catch {
        t = void 0;
      }
      return (r4l.set(e, t), t);
    }, bDi);
  });
