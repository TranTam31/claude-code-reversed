// Module: pgr (lines 533989-534055)
  var pgr = S(() => {
    bl();
    vt();
    Eo();
    Ge();
    Zm();
    sU();
    hn();
    PM();
    Ir();
    zt();
    Dy();
    yve = qr(async () => {
      try {
        return {
          success: !0,
          data: (
            await DB(async () => {
              let t = await Mi.get("/api/oauth/account/settings", {
                timeout: lUd,
              });
              if (!t.ok)
                throw Error(`Failed to get Grove settings: ${t.reason}`);
              return t;
            })
          ).data,
        };
      } catch (e) {
        if (
          !(e instanceof Error) ||
          !/data-residency|essential-traffic-only|no-auth/.test(e.message)
        )
          w(`Failed to fetch Grove settings: ${e}`, { level: "error" });
        return (yve.cache.clear?.(), { success: !1 });
      }
    });
    QKe = qr(async () => {
      try {
        let e = await DB(async () => {
            let i = await Mi.get("/api/claude_code_grove", { timeout: lUd });
            if (!i.ok)
              throw Error(`Failed to fetch Grove notice config: ${i.reason}`);
            return i;
          }),
          {
            grove_enabled: t,
            domain_excluded: r,
            notice_is_grace_period: n,
            notice_reminder_frequency: o,
          } = e.data;
        return {
          success: !0,
          data: {
            grove_enabled: t,
            domain_excluded: r ?? !1,
            notice_is_grace_period: n ?? !0,
            notice_reminder_frequency: o,
          },
        };
      } catch (e) {
        return (
          w(`Failed to fetch Grove notice config: ${e}`),
          { success: !1 }
        );
      }
    });
  });
