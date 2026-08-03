// Module: Inn (lines 385598-385687)
  var Inn = S(() => {
    bl();
    hn();
    ei();
    Ge();
    Ja();
    Qa();
    S_e();
    zt();
    g8();
    Zr();
    vt();
    iMy = [".claude/skills", ".claude/commands"];
    Cxs = qr(async () => {
      if (!Xd()) return [];
      let e = Kc(kt());
      if (!e) return [];
      let [{ stdout: t, code: r }, n] = await Promise.all([
        Yn(
          fo(),
          [
            "-c",
            "core.quotePath=false",
            "-c",
            "core.fsmonitor=",
            "-c",
            "core.hooksPath=/dev/null",
            "-c",
            "core.pager=",
            "-c",
            "log.showSignature=false",
            "log",
            "--since=7.days",
            "--diff-filter=A",
            "--name-only",
            "--format=COMMIT%x00%an%x00%ae",
            "--",
            ...iMy,
          ],
          { cwd: e, timeout: 5000 },
        ),
        O1e(),
      ]);
      if (r !== 0) return [];
      let o = n?.toLowerCase(),
        i = [],
        s = new Set(),
        a = "",
        l = "";
      for (let m of t.split(`
`)) {
        if (m.startsWith("COMMIT\x00")) {
          let y = m.split("\x00");
          ((a = y[1] ?? ""), (l = (y[2] ?? "").toLowerCase()));
          continue;
        }
        if (!m || s.has(m)) continue;
        s.add(m);
        let g = esd(m);
        if (g) {
          let y = Boolean(o && l === o);
          i.push({ path: m, author: a, byCurrentUser: y, ...g });
        }
      }
      tsd = i;
      let c = Cd(),
        u = new Set(c.seenTeamArtifactPaths ?? []),
        d = i.some((m) => !m.byCurrentUser && !u.has(m.path)),
        p = new Set(c.loggedAuthoredArtifactPaths ?? []),
        f = i.filter((m) => m.byCurrentUser && !p.has(m.path));
      for (let m of f)
        O("tengu_skill_authored", { is_skill: m.kind === "skill" });
      try {
        await YA((m) => {
          let g = m.hasUnseenTeamArtifacts === d;
          if (f.length === 0 && g) return m;
          let y = g ? m : { ...m, hasUnseenTeamArtifacts: d };
          if (f.length === 0) return y;
          let _ = y.loggedAuthoredArtifactPaths ?? [],
            E = f.map((T) => T.path),
            A = new Set(E),
            b = [..._.filter((T) => !A.has(T)), ...E].slice(-Zid);
          return { ...y, loggedAuthoredArtifactPaths: b };
        });
      } catch (m) {
        w(`team-artifact eligibility persist failed: ${m}`);
      }
      return i;
    });
  });
