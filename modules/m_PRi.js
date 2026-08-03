// Module: PRi (lines 52287-52343)
  var PRi = S(() => {
    lYt();
    ((MK = {
      staleTTL: 60000,
      maxAge: 14400000,
      cacheKey: "gbFeaturesCache",
      backgroundSync: !0,
      maxEntries: 10,
      disableIdleStreams: !1,
      idleStreamInterval: 20000,
      disableCache: !1,
    }),
      (FOe = wBr()),
      (UOe = {
        fetchFeaturesCall: (e) => {
          let { host: t, clientKey: r, headers: n } = e;
          return FOe.fetch(`${t}/api/features/${r}`, { headers: n });
        },
        fetchRemoteEvalCall: (e) => {
          let { host: t, clientKey: r, payload: n, headers: o } = e,
            i = {
              method: "POST",
              headers: { "Content-Type": "application/json", ...o },
              body: JSON.stringify(n),
            };
          return FOe.fetch(`${t}/api/eval/${r}`, i);
        },
        eventSourceCall: (e) => {
          let { host: t, clientKey: r, headers: n } = e;
          if (n) return new FOe.EventSource(`${t}/sub/${r}`, { headers: n });
          return new FOe.EventSource(`${t}/sub/${r}`);
        },
        startIdleListener: () => {
          let e;
          if (!(typeof window < "u" && typeof document < "u")) return;
          let r = () => {
            if (document.visibilityState === "visible")
              (window.clearTimeout(e), yUl());
            else if (document.visibilityState === "hidden")
              e = window.setTimeout(gUl, MK.idleStreamInterval);
          };
          return (
            document.addEventListener("visibilitychange", r),
            () => document.removeEventListener("visibilitychange", r)
          );
        },
        stopIdleListener: () => {},
      }));
    try {
      if (globalThis.localStorage) FOe.localStorage = globalThis.localStorage;
    } catch (e) {}
    ((cYt = new Map()),
      (D5e = new Map()),
      (Fjn = new Map()),
      (uYt = new Map()),
      (dYt = new Set()));
  });
