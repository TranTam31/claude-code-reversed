// Module: SFc (lines 139861-139958)
  var SFc = S(() => {
    zt();
    Ge();
    st();
    Zt();
    skt();
    _Y();
    p5r();
    i5i = class i5i extends Error {};
    a5i = {
      name: "windows-credman",
      read() {
        if (!g5r()) return null;
        return jC.cache.cachedAt !== 0 ? jC.cache.data : nJn();
      },
      async readAsync() {
        if (!g5r()) return null;
        let e = jC.cache;
        if (Date.now() - e.cachedAt < QGi) return e.data;
        if (jC.readInFlight) return jC.readInFlight;
        let t = n5i();
        if (!t) return null;
        let r = jC.generation,
          n = Hcg(t, o5i())
            .then((o) => {
              let i = o ? Bt(o) : null;
              if (r === jC.generation)
                ((jC.cache = { data: i, cachedAt: Date.now() }),
                  _Qt(i),
                  (jC.readInFlight = null));
              return i;
            })
            .catch((o) => {
              if (
                (w(`[windows-credman] load failed: ${le(o)}`, {
                  level: "warn",
                }),
                r === jC.generation)
              ) {
                if (e.cachedAt !== 0)
                  jC.cache = { data: e.data, cachedAt: Date.now() };
                jC.readInFlight = null;
              }
              return e.cachedAt !== 0 ? e.data : nJn();
            });
        return ((jC.readInFlight = n), n);
      },
      invalidateCache() {
        o8();
      },
      mutate(e) {
        return ikt(a5i, e);
      },
      async update(e) {
        if (!g5r()) return { success: !1 };
        let t = n5i();
        if (!t) return { success: !1 };
        o8();
        try {
          return (
            await kcg(t, o5i(), Ie(e)),
            (jC.cache = { data: e, cachedAt: Date.now() }),
            _Qt(e),
            jC.generation++,
            (jC.readInFlight = null),
            { success: !0 }
          );
        } catch (r) {
          if (
            (w(`[windows-credman] store failed: ${le(r)}`, { level: "warn" }),
            r instanceof i5i)
          )
            Ne("secure_storage_credentials_write", "credman_oversize");
          return { success: !1 };
        }
      },
      async delete() {
        (o8(), _Qt(null));
        let e = n5i();
        if (!e) return !1;
        try {
          return (
            await Icg(e, o5i()),
            (jC.cache = { data: null, cachedAt: Date.now() }),
            _Qt(null),
            jC.generation++,
            (jC.readInFlight = null),
            !0
          );
        } catch (t) {
          return (
            w(`[windows-credman] remove failed: ${le(t)}`, { level: "warn" }),
            !1
          );
        }
      },
    };
  });
