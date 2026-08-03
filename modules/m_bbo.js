// Module: bbo (lines 340618-340672)
  var bbo = S(() => {
    zt();
    Pse();
    K_o();
    uV();
    e9e();
    iR();
    Ge();
    st();
    RT();
    Yb();
    Ir();
    QG();
    Pr();
    h1();
    Aor();
    LEs();
    ((Uzu = require("crypto")),
      (ydt = require("fs/promises")),
      (NEs = require("path")));
    lEy = T0(
      async (e) => {
        if (!hqu(e.capabilities)) return [];
        let t = await cEy(e);
        if (t.length === 0) return [];
        yt(
          e.name,
          `Found ${t.length} ${Et(t.length, "skill")} via skills/list`,
        );
        let r = edo(),
          n = null,
          o = (c) => {
            n = c;
          },
          i = await Promise.all(t.map((c) => dEy(e, c, r, o))),
          s = iUe(e.config)?.skills,
          a = i.filter((c) => c !== null),
          l = s
            ? a.map((c) => {
                let u = s[c.name];
                return u === void 0 ? c : { ...c, description: u };
              })
            : a;
        if (n) pe("skill_mcp_load", n, { mcp_server_sha12: Yc(e.name) });
        else if (l.length > 0) be("skill_mcp_load");
        if (l.length > 0)
          w(
            `[mcp-skills] Loaded ${l.length} skills from MCP server '${e.name}'`,
          );
        return l;
      },
      (e) => Mh(e.name, e.config),
      sEy,
    );
  });
