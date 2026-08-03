// Module: KD (lines 278162-278502)
  var KD = S(() => {
    bl();
    lFe();
    fds();
    zt();
    vt();
    pt();
    ozr();
    ufo();
    DS();
    hct();
    Pir();
    Zde();
    zd();
    Zr();
    htr();
    np();
    Gp();
    hn();
    UC();
    Ge();
    Ir();
    qm();
    Ar();
    Qr();
    st();
    vc();
    Yb();
    Mw();
    Wi();
    _v();
    ZB();
    Qa();
    S7r();
    im();
    si();
    hp();
    Xm();
    ky();
    kxt();
    Un();
    ((_Lu = x(Pst(), 1)), (BS = require("path")), (bLu = x(vds(), 1)));
    uny = new Set([
      ".md",
      ".txt",
      ".text",
      ".json",
      ".yaml",
      ".yml",
      ".toml",
      ".xml",
      ".csv",
      ".html",
      ".htm",
      ".css",
      ".scss",
      ".sass",
      ".less",
      ".js",
      ".ts",
      ".tsx",
      ".jsx",
      ".mjs",
      ".cjs",
      ".mts",
      ".cts",
      ".py",
      ".pyi",
      ".pyw",
      ".rb",
      ".erb",
      ".rake",
      ".go",
      ".rs",
      ".java",
      ".kt",
      ".kts",
      ".scala",
      ".c",
      ".cpp",
      ".cc",
      ".cxx",
      ".h",
      ".hpp",
      ".hxx",
      ".cs",
      ".swift",
      ".sh",
      ".bash",
      ".zsh",
      ".fish",
      ".ps1",
      ".bat",
      ".cmd",
      ".env",
      ".ini",
      ".cfg",
      ".conf",
      ".config",
      ".properties",
      ".sql",
      ".graphql",
      ".gql",
      ".proto",
      ".vue",
      ".svelte",
      ".astro",
      ".ejs",
      ".hbs",
      ".pug",
      ".jade",
      ".php",
      ".pl",
      ".pm",
      ".lua",
      ".r",
      ".R",
      ".dart",
      ".ex",
      ".exs",
      ".erl",
      ".hrl",
      ".clj",
      ".cljs",
      ".cljc",
      ".edn",
      ".hs",
      ".lhs",
      ".elm",
      ".ml",
      ".mli",
      ".f",
      ".f90",
      ".f95",
      ".for",
      ".cmake",
      ".make",
      ".makefile",
      ".gradle",
      ".sbt",
      ".rst",
      ".adoc",
      ".asciidoc",
      ".org",
      ".tex",
      ".latex",
      ".lock",
      ".log",
      ".diff",
      ".patch",
    ]);
    mny = {
      entries: [],
      pinnedCount: 0,
      malformedCount: 0,
      truncatedPaths: new Set(),
      readFailed: !1,
      scanFailed: !1,
    };
    dfo = qr(async (e) => {
      let t = Zru();
      return Cds(e, Lc().signal, { regularFilesOnly: !0 })
        .catch((r) => {
          if (Vt(r)) return [];
          throw (dfo.cache.delete(e), r);
        })
        .finally(() => {
          if (t) dfo.cache.delete(e);
        });
    });
    tL = qr(async (e = !1) => {
      if (Us()) {
        if (!e) wds([]);
        return [];
      }
      let t = Date.now();
      Sr("info", "memory_files_started");
      let r = [],
        n = new Set(),
        o = Cd(),
        i = e || o.hasClaudeMdExternalIncludesApproved || !1,
        s = QPt("Managed");
      r.push(...(await Lpe(s, "Managed", n, i)));
      let a = yVl();
      if (a)
        r.push({
          path: qLi,
          type: "Managed",
          content: a,
          globs: [],
          contentDiffersFromDisk: !0,
          rawContent: a,
        });
      let l = Mr("policySettings")?.claudeMd;
      if (l)
        r.push({
          path: SLu,
          type: "Managed",
          content: l,
          globs: [],
          contentDiffersFromDisk: !0,
          rawContent: l,
        });
      let c = bfo();
      if (
        (r.push(
          ...(await JPt({
            rulesDir: c,
            type: "Managed",
            processedPaths: n,
            includeExternal: i,
            conditionalRule: !1,
          })),
        ),
        dg("userSettings"))
      ) {
        let E = QPt("User");
        r.push(...(await Lpe(E, "User", n, !0)));
        let A = Sfo();
        r.push(
          ...(await JPt({
            rulesDir: A,
            type: "User",
            processedPaths: n,
            includeExternal: !0,
            conditionalRule: !1,
          })),
        );
      }
      let u = [],
        d = gn(),
        p = d;
      while (p !== BS.parse(p).root) (u.push(p), (p = BS.dirname(p)));
      let f = Kc(d),
        m = gu(d),
        g = f !== null && m !== null && uv(f) !== uv(m) && f1(f, m);
      for (let E of u.reverse()) {
        let A = g && f1(E, m) && !f1(E, f);
        if (dg("projectSettings") && !A) {
          let b = BS.join(E, "CLAUDE.md");
          r.push(...(await Lpe(b, "Project", n, i)));
          let T = BS.join(E, ".claude", "CLAUDE.md");
          r.push(...(await Lpe(T, "Project", n, i)));
          let C = BS.join(E, ".claude", "rules");
          r.push(
            ...(await JPt({
              rulesDir: C,
              type: "Project",
              processedPaths: n,
              includeExternal: i,
              conditionalRule: !1,
            })),
          );
        }
        if (dg("localSettings")) {
          let b = BS.join(E, "CLAUDE.local.md");
          r.push(...(await Lpe(b, "Local", n, i)));
        }
      }
      if (Yt(Z.CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD)) {
        let E = nU();
        for (let A of E) {
          let b = BS.join(A, "CLAUDE.md");
          r.push(...(await Lpe(b, "Project", n, i)));
          let T = BS.join(A, ".claude", "CLAUDE.md");
          r.push(...(await Lpe(T, "Project", n, i)));
          let C = BS.join(A, ".claude", "rules");
          if (
            (r.push(
              ...(await JPt({
                rulesDir: C,
                type: "Project",
                processedPaths: n,
                includeExternal: i,
                conditionalRule: !1,
              })),
            ),
            dg("localSettings"))
          ) {
            let I = BS.join(A, "CLAUDE.local.md");
            r.push(...(await Lpe(I, "Local", n, i)));
          }
        }
      }
      if (Cm()) {
        let E = vLu();
        if (!e && E === void 0 && TRt()) {
          let A = await wLu(),
            b = A.entries.filter((T) => {
              let C = uv(T.path);
              if (n.has(C)) return !1;
              return (n.add(C), !0);
            });
          (r.push(...b), gny(A, b));
        }
        if (E !== "") {
          let A = E !== void 0 ? fny(E) : (await kds(Q6e(), "AutoMem")).info;
          if (A) {
            let b = uv(A.path);
            if (!n.has(b)) (n.add(b), r.push(A));
          }
        }
      }
      if (!e)
        wds(r.filter((E) => E.type === "AutoMemPinned").map((E) => E.path));
      let y = r.reduce((E, A) => E + A.content.length, 0);
      Sr("info", "memory_files_completed", {
        duration_ms: Date.now() - t,
        file_count: r.length,
        total_content_length: y,
      });
      let _ = {};
      for (let E of r) _[E.type] = (_[E.type] ?? 0) + 1;
      if (!uLu)
        ((uLu = !0),
          O("tengu_claudemd__initial_load", {
            file_count: r.length,
            total_content_length: y,
            user_count: _.User ?? 0,
            project_count: _.Project ?? 0,
            local_count: _.Local ?? 0,
            managed_count: _.Managed ?? 0,
            automem_count: _.AutoMem ?? 0,
            duration_ms: Date.now() - t,
          }));
      if (!e) {
        let E = vny();
        if (E !== void 0 && AXr())
          for (let A of r) {
            if (!TLu(A.type)) continue;
            if (ZPt(A.path)) continue;
            let b = A.parent ? "include" : E;
            eMt(A.path, A.type, b, {
              globs: A.globs,
              parentFilePath: A.parent,
            });
          }
      }
      return r;
    });
  });
