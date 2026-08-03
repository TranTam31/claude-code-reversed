// Module: Ese (lines 623521-623659)
  var Ese = S(() => {
    bl();
    vt();
    pt();
    Ge();
    Qr();
    st();
    vc();
    Yb();
    ZB();
    Qa();
    nw();
    eSe();
    ky();
    TCe();
    $ie();
    ((wap = require("fs")),
      (Dae = require("fs/promises")),
      (Tap = require("os")),
      (sX = require("path")),
      (MNd = [
        "commands",
        "agents",
        "output-styles",
        "skills",
        "workflows",
        "routines",
      ]));
    Ase = qr(
      async function (e, t) {
        let r = Date.now(),
          n = sX.join(pn(), e),
          o = sX.join(fU(), ".claude", e),
          i = YNt(e, t),
          s = new Set(
            await Promise.all(
              i.map(async (I) => uv(await Dae.realpath(I).catch(() => I))),
            ),
          ),
          a =
            e === "agents"
              ? To(
                  await Promise.all(
                    nU().map(async (I) => {
                      let R = sX.join(sX.resolve(I), ".claude", e);
                      return await Dae.realpath(R).catch(() => R);
                    }),
                  ),
                ).filter((I) => !s.has(uv(I)))
              : [],
          l = Kc(t),
          c = gu(t);
        if (l && c && c !== l) {
          let I = uv(sX.join(l, ".claude", e));
          if (!i.some((k) => uv(k) === I)) {
            let k = sX.join(c, ".claude", e);
            if (!i.includes(k)) i.push(k);
          }
        }
        let u = e === "agents" && QC("agents"),
          d = dg("projectSettings") && !u,
          [p, f, m, g] = await Promise.all([
            Ahr(o).then((I) =>
              I.map((R) => ({ ...R, baseDir: o, source: "policySettings" })),
            ),
            dg("userSettings") && !u
              ? Ahr(n).then((I) =>
                  I.map((R) => ({ ...R, baseDir: n, source: "userSettings" })),
                )
              : Promise.resolve([]),
            d
              ? Promise.all(
                  i.map((I) =>
                    Ahr(I).then((R) =>
                      R.map((k) => ({
                        ...k,
                        baseDir: I,
                        source: "projectSettings",
                      })),
                    ),
                  ),
                )
              : Promise.resolve([]),
            d
              ? Promise.all(
                  a.map((I) =>
                    Ahr(I).then((R) =>
                      R.map((k) => ({
                        ...k,
                        baseDir: I,
                        source: "projectSettings",
                        fromAdditionalDirectory: !0,
                      })),
                    ),
                  ),
                )
              : Promise.resolve([]),
          ]),
          y = m.flat(),
          _ = g.flat(),
          E = [...p, ...f, ..._, ...y],
          A = await Promise.all(E.map((I) => N2_(I.filePath))),
          b = new Map(),
          T = [];
        for (let [I, R] of E.entries()) {
          let k = A[I] ?? null;
          if (k === null) {
            T.push(R);
            continue;
          }
          let D = b.get(k);
          if (D !== void 0) {
            w(
              `Skipping duplicate file '${R.filePath}' from ${R.source} (same inode already loaded from ${D})`,
            );
            continue;
          }
          (b.set(k, R.source), T.push(R));
        }
        let C = E.length - T.length;
        if (C > 0)
          w(
            `Deduplicated ${C} files in ${e} (same inode via symlinks or hard links)`,
          );
        return (
          O("tengu_dir_search", {
            durationMs: Date.now() - r,
            managedFilesFound: p.length,
            userFilesFound: f.length,
            projectFilesFound: y.length,
            projectDirsSearched: i.length,
            subdir: fe(e),
          }),
          T
        );
      },
      (e, t) => `${e}:${t}`,
    );
  });
