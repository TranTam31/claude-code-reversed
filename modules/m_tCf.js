// Module: tCf (lines 835638-835665)
  var tCf = S(() => {
    bl();
    Ge();
    Zr();
    Dy();
    ((Jti = x(ot(), 1)), (osS = new Set(["good", "warn", "poor"])));
    ssS = qr(async () => {
      if (!Ke("tengu_skills_dashboard_enabled", !1)) return null;
      try {
        let e = await Mi.get("/api/claude_code/skills", {
          auth: "async",
          timeout: 5000,
          validateStatus: () => !0,
        });
        if (!e.ok) return (w(`Skill health fetch skipped: ${e.reason}`), null);
        if (e.status >= 400)
          return (w(`Skill health fetch skipped: status ${e.status}`), null);
        let t = e.data?.skills;
        if (!Array.isArray(t)) return null;
        let r = new Map();
        for (let n of t)
          if (n.skill_name && isS(n.health)) r.set(n.skill_name, n.health);
        return r;
      } catch (e) {
        return (w(`Skill health fetch skipped: ${e}`), null);
      }
    });
  });
