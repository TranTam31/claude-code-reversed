// Module: sx (lines 326649-326730)
  var sx = S(() => {
    _Q();
    xue();
    bl();
    kWn();
    Vn();
    zt();
    Zr();
    EM();
    xS();
    Ge();
    Ar();
    st();
    Ja();
    Wi();
    Qa();
    H0();
    ky();
    Un();
    Coe();
    Zt();
    por();
    byo();
    sfe();
    rKr();
    Cqe();
    v1();
    zFe();
    wDt();
    Obs();
    B5();
    Dh();
    Nie();
    XD();
    kM();
    Nbs();
    ((NVu = require("fs/promises")), (am = require("path")));
    wgy = new Set(["projectSettings", "localSettings"]);
    Xj = qr(async (e) => {
      let t = await my(),
        r = t[e];
      if (!r)
        throw oi(
          Error(
            `Marketplace '${e}' not found in configuration. Available marketplaces: ${Object.keys(t).join(", ")}`,
          ),
          "Marketplace not found in configuration",
        );
      if ((BVu(e, r), jQ(r.source) && !am.isAbsolute(r.source.path))) {
        let o = vv("plugin marketplace remove", e);
        throw oi(
          Error(
            `Marketplace "${e}" has a relative source path (${r.source.path}) ` +
              "in known_marketplaces.json \u2014 this is stale state from an older " +
              `Claude Code version. ${o ? `Run \`${o}\` and re-add` : "Remove and re-add"} it from the original project directory.`,
          ),
          "Marketplace has relative source path (legacy state)",
        );
      }
      try {
        return await uZr(r.installLocation);
      } catch (o) {
        w(
          `Cache corrupted or missing for marketplace ${e}, re-fetching from source: ${le(o)}`,
          { level: "warn" },
        );
      }
      let n;
      try {
        ({ marketplace: n } = await Fbs(r.source));
      } catch (o) {
        throw oi(
          Error(
            `Failed to load marketplace "${e}" from source (${r.source.source}): ${le(o)}`,
          ),
          "Failed to load marketplace from source",
        );
      }
      return ((t[e].lastUpdated = new Date().toISOString()), await kke(t), n);
    });
    qyo = new Map();
  });
