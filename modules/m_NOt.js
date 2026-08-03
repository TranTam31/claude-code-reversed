// Module: NOt (lines 368368-368763)
  var NOt = S(() => {
    Vn();
    Ss();
    ei();
    st();
    vc();
    Wi();
    hp();
    Xm();
    LOt();
    Atn();
    eSe();
    Mdt();
    Fdt();
    Pr();
    ND();
    jl();
    dTs();
    ((THy = Se(() =>
      v.strictObject({
        pattern: v
          .string()
          .describe(
            "The regular expression pattern to search for in file contents",
          ),
        path: v
          .string()
          .optional()
          .describe(
            "File or directory to search in (rg PATH). Defaults to current working directory.",
          ),
        glob: v
          .string()
          .optional()
          .describe(
            'Glob pattern to filter files (e.g. "*.js", "*.{ts,tsx}") - maps to rg --glob',
          ),
        output_mode: v
          .enum(["content", "files_with_matches", "count"])
          .optional()
          .describe(
            'Output mode: "content" shows matching lines (supports -A/-B/-C context, -n line numbers, head_limit), "files_with_matches" shows file paths (supports head_limit), "count" shows match counts (supports head_limit). Defaults to "files_with_matches".',
          ),
        "-B": I7(v.number().optional()).describe(
          'Number of lines to show before each match (rg -B). Requires output_mode: "content", ignored otherwise.',
        ),
        "-A": I7(v.number().optional()).describe(
          'Number of lines to show after each match (rg -A). Requires output_mode: "content", ignored otherwise.',
        ),
        "-C": I7(v.number().optional()).describe("Alias for context."),
        context: I7(v.number().optional()).describe(
          'Number of lines to show before and after each match (rg -C). Requires output_mode: "content", ignored otherwise.',
        ),
        "-n": zU(v.boolean().optional()).describe(
          'Show line numbers in output (rg -n). Requires output_mode: "content", ignored otherwise. Defaults to true.',
        ),
        "-i": zU(v.boolean().optional()).describe(
          "Case insensitive search (rg -i)",
        ),
        "-o": zU(v.boolean().optional()).describe(
          'Print only the matched (non-empty) parts of each matching line, one match per output line (rg -o / --only-matching). Requires output_mode: "content", ignored otherwise. Defaults to false.',
        ),
        type: v
          .string()
          .optional()
          .describe(
            "File type to search (rg --type). Common types: js, py, rust, go, java, etc. More efficient than include for standard file types.",
          ),
        head_limit: I7(v.number().optional()).describe(
          'Limit output to first N lines/entries, equivalent to "| head -N". Works across all output modes: content (limits output lines), files_with_matches (limits file paths), count (limits count entries). Defaults to 250 when unspecified. Pass 0 for unlimited (use sparingly \u2014 large result sets waste context).',
        ),
        offset: I7(v.number().optional()).describe(
          'Skip first N lines/entries before applying head_limit, equivalent to "| tail -n +N | head -N". Works across all output modes. Defaults to 0.',
        ),
        multiline: zU(v.boolean().optional()).describe(
          "Enable multiline mode where . matches newlines and patterns can span lines (rg -U --multiline-dotall). Default: false.",
        ),
      }),
    )),
      (CHy = [".git", ".svn", ".hg", ".bzr", ".jj", ".sl"]));
    ((HHy = Se(() =>
      v.object({
        mode: v.enum(["content", "files_with_matches", "count"]).optional(),
        numFiles: v.number(),
        filenames: v.array(v.string()),
        content: v.string().optional(),
        numLines: v.number().optional(),
        numMatches: v.number().optional(),
        totalFiles: v.number().optional(),
        totalLines: v.number().optional(),
        appliedLimit: v.number().optional(),
        appliedOffset: v.number().optional(),
      }),
    )),
      (IEe = Ui({
        name: bd,
        searchHint: "search file contents with regex (ripgrep)",
        maxResultSizeChars: 20000,
        strict: !0,
        async description() {
          return eZi(void 0);
        },
        userFacingName() {
          return "Search";
        },
        getToolUseSummary: eur,
        getActivityDescription(e) {
          let t = eur(e);
          return t ? `Searching for ${t}` : "Searching";
        },
        get inputSchema() {
          return THy();
        },
        get outputSchema() {
          return HHy();
        },
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return e.path ? `${e.pattern} in ${e.path}` : e.pattern;
        },
        isSearchOrReadCommand() {
          return { isSearch: !0, isRead: !1 };
        },
        ruleContentField: "path",
        getPath({ path: e }) {
          return e || kt();
        },
        async preparePermissionMatcher({ pattern: e }) {
          return (t) => mfe(t, e);
        },
        async validateInput({
          pattern: e,
          path: t,
          glob: r,
          type: n,
          head_limit: o,
          offset: i,
        }) {
          let s = NEo(bd, [
            ["pattern", e],
            ["path", t],
            ["glob", r],
            ["type", n],
          ]);
          if (s) return s;
          for (let [a, l] of [
            ["head_limit", o],
            ["offset", i],
          ])
            if (l !== void 0 && (!Number.isInteger(l) || l < 0))
              return {
                result: !1,
                message: `${a} must be a whole number of 0 or more, got ${l}.${a === "head_limit" ? " Pass 0 for unlimited." : ""}`,
                errorCode: 2,
              };
          if (t) {
            let a = Xt(),
              l = Li(t);
            if (l.startsWith("\\\\") || l.startsWith("//"))
              return { result: !0 };
            try {
              await a.stat(l);
            } catch (c) {
              if (Vt(c)) {
                let u = await Vye(l),
                  d = `Path does not exist: ${t}. ${yoe} ${kt()}.`;
                if (u) d += ` Did you mean ${u}?`;
                return { result: !1, message: d, errorCode: 1 };
              }
              throw c;
            }
          }
          return { result: !0 };
        },
        async checkPermissions(e, t) {
          return gfe(IEe, e, En(t));
        },
        async prompt({ model: e }) {
          return eZi(e);
        },
        renderToolUseMessage: $Eo,
        extractSearchText({ mode: e, content: t, filenames: r }) {
          if (e === "content" && t) return t;
          return r.join(`
`);
        },
        mapToolResultToToolResultBlockParam(
          {
            mode: e = "files_with_matches",
            numFiles: t,
            filenames: r,
            content: n,
            numLines: o,
            numMatches: i,
            totalFiles: s,
            totalLines: a,
            appliedLimit: l,
            appliedOffset: c,
          },
          u,
        ) {
          if (e === "content") {
            let f = fTs(l, c),
              m =
                n ||
                (c && (a ?? 0) > 0
                  ? "No entries at this offset"
                  : "No matches found"),
              g = f
                ? `${m}

[Showing results with pagination = ${f}]`
                : m;
            return { tool_use_id: u, type: "tool_result", content: g };
          }
          if (e === "count") {
            let f = fTs(l, c),
              m = i ?? 0,
              g = t ?? 0,
              y =
                n || (m > 0 ? "No entries at this offset" : "No matches found"),
              _ = `

Found ${m} total ${m === 1 ? "occurrence" : "occurrences"} across ${g} ${g === 1 ? "file" : "files"}.${f ? ` with pagination = ${f}` : ""}`;
            return { tool_use_id: u, type: "tool_result", content: y + _ };
          }
          let d = fTs(l, c);
          if (t === 0)
            return {
              tool_use_id: u,
              type: "tool_result",
              content:
                c && (s ?? 0) > 0
                  ? `No entries at this offset. [Showing results with pagination = ${d}]`
                  : "No files found",
            };
          let p = `Found ${t} ${Et(t, "file")}${d ? ` ${d}` : ""}
${r.join(`
`)}`;
          return { tool_use_id: u, type: "tool_result", content: p };
        },
        async call(
          {
            pattern: e,
            path: t,
            glob: r,
            type: n,
            output_mode: o = "files_with_matches",
            "-B": i,
            "-A": s,
            "-C": a,
            context: l,
            "-n": c = !0,
            "-i": u = !1,
            "-o": d = !1,
            head_limit: p,
            offset: f = 0,
            multiline: m = !1,
          },
          g,
        ) {
          let { abortController: y } = g,
            _ = t ? Li(t) : kt(),
            E = ["--hidden"];
          for (let N of CHy) E.push("--glob", `!${N}`);
          if ((E.push("--max-columns", "500"), m))
            E.push("-U", "--multiline-dotall");
          if (u) E.push("-i");
          if (o === "files_with_matches") E.push("-l");
          else if (o === "count") E.push("-c", "-H");
          if (c && o === "content") E.push("-n");
          if (d && o === "content") E.push("-o");
          if (o === "content")
            if (l !== void 0) E.push("-C", l.toString());
            else if (a !== void 0) E.push("-C", a.toString());
            else {
              if (i !== void 0) E.push("-B", i.toString());
              if (s !== void 0) E.push("-A", s.toString());
            }
          if (e.startsWith("-")) E.push("-e", e);
          else E.push(e);
          if (n) E.push("--type", n);
          if (r) {
            let N = [],
              P = r.split(/\s+/);
            for (let B of P)
              if (B.includes("{") && B.includes("}")) N.push(B);
              else N.push(...B.split(",").filter(Boolean));
            for (let B of N.filter(Boolean)) E.push("--glob", B);
          }
          let A = zDt(_, Qbe().rgPath),
            b = POt(MOt(En(g)), A);
          for (let N of b) {
            let P = N.startsWith("/") ? `!${N}` : `!**/${N}`;
            E.push("--glob", P);
          }
          for (let N of await Zcr(_)) E.push("--glob", N);
          let T,
            C = null;
          if (
            ((T = await Zbe(E, _, y.signal, {
              rejectOnInputError: !0,
              cwd: A,
            })),
            o === "content")
          ) {
            let { items: N, appliedLimit: P } = pTs(T, p, f),
              B = N.map((V) => {
                let F = /^[A-Za-z]:/.test(V) ? 2 : 0,
                  W = V.indexOf(":", F);
                if (W > 0) {
                  let j = V.substring(0, W),
                    z = V.substring(W);
                  return RYt(j) + z;
                }
                return V;
              });
            return {
              data: {
                mode: "content",
                numFiles: 0,
                filenames: [],
                content: B.join(`
`),
                numLines: B.length,
                totalLines: T.length,
                ...(P !== void 0 && { appliedLimit: P }),
                ...(f > 0 && { appliedOffset: f }),
              },
            };
          }
          if (o === "count") {
            let { items: N, appliedLimit: P } = pTs(T, p, f),
              B = N.map((W) => {
                let j = W.lastIndexOf(":");
                if (j > 0) {
                  let z = W.substring(0, j),
                    q = W.substring(j);
                  return RYt(z) + q;
                }
                return W;
              }),
              G = 0,
              V = 0;
            for (let W of T) {
              let j = W.lastIndexOf(":");
              if (j > 0) {
                let z = W.substring(j + 1),
                  q = parseInt(z, 10);
                if (!isNaN(q)) ((G += q), (V += 1));
              }
            }
            return {
              data: {
                mode: "count",
                numFiles: V,
                filenames: [],
                content: B.join(`
`),
                numMatches: G,
                ...(P !== void 0 && { appliedLimit: P }),
                ...(f > 0 && { appliedOffset: f }),
              },
            };
          }
          let I = await Promise.allSettled(T.map((N) => Xt().stat(N))),
            R = T.map((N, P) => {
              let B = I[P];
              return [N, B.status === "fulfilled" ? (B.value.mtimeMs ?? 0) : 0];
            })
              .sort((N, P) => {
                let B = P[1] - N[1];
                if (B === 0) return N[0].localeCompare(P[0]);
                return B;
              })
              .map((N) => N[0]),
            { items: k, appliedLimit: D } = pTs(R, p, f),
            M = k.map(RYt);
          return {
            data: {
              mode: "files_with_matches",
              filenames: M,
              numFiles: M.length,
              totalFiles: R.length,
              ...(D !== void 0 && { appliedLimit: D }),
              ...(f > 0 && { appliedOffset: f }),
            },
          };
        },
      })));
  });
