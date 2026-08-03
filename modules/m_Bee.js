// Module: Bee (lines 514814-514959)
  var Bee = S(() => {
    bl();
    pt();
    I8r();
    zt();
    vt();
    Y8();
    ict();
    Aor();
    Vir();
    jl();
    Mw();
    ei();
    Ge();
    Wf();
    Qr();
    st();
    Yb();
    Wi();
    ZB();
    IGn();
    S7r();
    Ir();
    Ese();
    si();
    Dh();
    ups();
    PLt();
    ky();
    TCe();
    $ie();
    Un();
    GQ();
    qh();
    Ebs();
    Mk();
    Sbs();
    rSs();
    ((zFs = require("fs/promises")),
      (yLd = x(Pst(), 1)),
      (S_ = require("path")));
    eFt = qr(
      async (e) => {
        let t = S_.join(pn(), "skills"),
          r = S_.join(fU(), ".claude", "skills"),
          n = YNt("skills", e);
        w(
          `Loading skills from: managed=${r}, user=${t}, project=[${n.join(", ")}]`,
        );
        let o = nU(),
          i = QC("skills"),
          s = dg("projectSettings") && !i;
        if (fd("skills", { explicitlyRequested: o.length > 0 && s }))
          return (w("[reduced mode] Skipping skill dir discovery"), []);
        if (tf())
          return (
            await Promise.all(
              o.map((b) =>
                vhr(S_.join(b, ".claude", "skills"), "projectSettings"),
              ),
            )
          )
            .flat()
            .map((b) => b.skill);
        let [a, l, c, u, d] = await Promise.all([
            Yt(process.env.CLAUDE_CODE_DISABLE_POLICY_SKILLS)
              ? Promise.resolve([])
              : vhr(r, "policySettings"),
            dg("userSettings") && !i
              ? vhr(t, "userSettings")
              : Promise.resolve([]),
            s
              ? Promise.all(n.map((A) => vhr(A, "projectSettings")))
              : Promise.resolve([]),
            s
              ? Promise.all(
                  o.map((A) =>
                    vhr(S_.join(A, ".claude", "skills"), "projectSettings"),
                  ),
                )
              : Promise.resolve([]),
            i ? Promise.resolve([]) : un_(e, s ? o : []),
          ]),
          p = [...a, ...l, ...c.flat(), ...u.flat(), ...d],
          f = await Promise.all(
            p.map(({ skill: A, filePath: b }) =>
              A.type === "prompt" ? tn_(b) : Promise.resolve(null),
            ),
          ),
          m = new Map(),
          g = [];
        for (let A = 0; A < p.length; A++) {
          let b = p[A];
          if (b === void 0 || b.skill.type !== "prompt") continue;
          let { skill: T } = b,
            C = f[A];
          if (C === null || C === void 0) {
            g.push(T);
            continue;
          }
          let I = m.get(C);
          if (I !== void 0) {
            w(
              `Skipping duplicate skill '${T.name}' from ${T.source} (same file already loaded from ${I})`,
            );
            continue;
          }
          (m.set(C, T.source), g.push(T));
        }
        vlt(
          "skill",
          g.map((A) => ({ name: A.name, source: A.source })),
          { resolves: !1 },
        );
        let y = p.length - g.length;
        if (y > 0) w(`Deduplicated ${y} skills (same file)`);
        let _ = [],
          E = [];
        for (let A of g)
          if (
            A.type === "prompt" &&
            A.paths &&
            A.paths.length > 0 &&
            !dae().activatedConditionalSkillNames.has(A.name)
          )
            E.push(A);
          else _.push(A);
        for (let A of E) dae().conditionalSkills.set(A.name, A);
        if (E.length > 0)
          w(
            `[skills] ${E.length} conditional skills stored (activated when matching files are touched)`,
          );
        return (
          w(
            `Loaded ${g.length} unique skills (${_.length} unconditional, ${E.length} conditional, managed: ${a.length}, user: ${l.length}, project: ${c.flat().length}, additional: ${u.flat().length}, legacy commands: ${d.length})`,
          ),
          _
        );
      },
      (e) => `${ucn()}:${e}`,
    );
    if (!(eFt.cache instanceof Map)) eFt.cache = new Map();
    IDo = new Map();
    QFs = Rs();
    Mxu({ createSkillCommand: ccn, parseSkillFrontmatterFields: YFs });
  });
