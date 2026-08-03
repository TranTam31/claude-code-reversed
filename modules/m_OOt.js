// Module: OOt (lines 368150-368333)
  var OOt = S(() => {
    Vn();
    Ss();
    jl();
    ei();
    st();
    vc();
    Wi();
    red();
    hp();
    Xm();
    LOt();
    dTs();
    VM();
    ((EHy = Se(() =>
      v.strictObject({
        pattern: v.string().describe("The glob pattern to match files against"),
        path: v
          .string()
          .optional()
          .describe(
            'The directory to search in. If not specified, the current working directory will be used. IMPORTANT: Omit this field to use the default directory. DO NOT enter "undefined" or "null" - simply omit it for the default behavior. Must be a valid directory path if provided.',
          ),
      }),
    )),
      (vHy = Se(() =>
        v.object({
          durationMs: v
            .number()
            .describe("Time taken to execute the search in milliseconds"),
          numFiles: v
            .number()
            .describe("Number of file paths returned (after any truncation)"),
          filenames: v
            .array(v.string())
            .describe("Array of file paths that match the pattern"),
          truncated: v
            .boolean()
            .describe("Whether results were truncated (limited to 100 files)"),
          totalMatches: v
            .number()
            .optional()
            .describe(
              "Total number of matching files before truncation. A lower bound when countIsComplete is false. Absent on results persisted by CLI versions predating this field.",
            ),
          countIsComplete: v
            .boolean()
            .optional()
            .describe(
              "Whether totalMatches is the exact total (true) or a floor because the underlying search truncated its own output (false). Absent on results persisted by CLI versions predating this field.",
            ),
        }),
      )));
    hfe = Ui({
      name: xd,
      searchHint: "find files by name pattern or wildcard",
      maxResultSizeChars: 1e5,
      async description() {
        return zQi(void 0);
      },
      userFacingName() {
        return "Search";
      },
      getToolUseSummary: eur,
      getActivityDescription(e) {
        let t = eur(e);
        return t ? `Finding ${t}` : "Finding files";
      },
      get inputSchema() {
        return EHy();
      },
      get outputSchema() {
        return vHy();
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
      },
      toAutoClassifierInput(e) {
        return e.pattern;
      },
      isSearchOrReadCommand() {
        return { isSearch: !0, isRead: !1 };
      },
      ruleContentField: "path",
      getPath({ path: e, pattern: t }) {
        if (t) {
          let r = cTs(t);
          if (r) return r.searchDir;
        }
        if (e) return Li(e);
        return kt();
      },
      async preparePermissionMatcher({ pattern: e }) {
        return (t) => mfe(t, e);
      },
      async validateInput({ pattern: e, path: t }) {
        let r = NEo(xd, [
          ["pattern", e],
          ["path", t],
        ]);
        if (r) return r;
        if (t) {
          let n = Xt(),
            o = Li(t);
          if (o.startsWith("\\\\") || o.startsWith("//")) return { result: !0 };
          let i;
          try {
            i = await n.stat(o);
          } catch (s) {
            if (Vt(s)) {
              let a = await Vye(o),
                l = `Directory does not exist: ${t}. ${yoe} ${kt()}.`;
              if (a) l += ` Did you mean ${a}?`;
              return { result: !1, message: l, errorCode: 1 };
            }
            throw s;
          }
          if (!i.isDirectory())
            return {
              result: !1,
              message: `Path is not a directory: ${t}`,
              errorCode: 2,
            };
        }
        return { result: !0 };
      },
      async checkPermissions(e, t) {
        return gfe(hfe, e, En(t));
      },
      async prompt({ model: e }) {
        return zQi(e);
      },
      renderToolUseMessage: $Eo,
      extractSearchText({ filenames: e }) {
        return e.join(`
`);
      },
      async call(e, t) {
        let { abortController: r, globLimits: n } = t,
          o = Date.now(),
          i = n?.maxResults ?? 100,
          {
            files: s,
            truncated: a,
            totalMatches: l,
            countIsComplete: c,
          } = await ted(
            e.pattern,
            hfe.getPath(e),
            { limit: i, offset: 0 },
            r.signal,
            En(t),
          ),
          u = s.map(RYt);
        return {
          data: {
            filenames: u,
            durationMs: Date.now() - o,
            numFiles: u.length,
            truncated: a,
            totalMatches: l,
            countIsComplete: c,
          },
        };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        if (e.filenames.length === 0)
          return {
            tool_use_id: t,
            type: "tool_result",
            content: "No files found",
          };
        return {
          tool_use_id: t,
          type: "tool_result",
          content: [...e.filenames, ...(e.truncated ? [AHy(e)] : [])].join(`
`),
        };
      },
    });
  });
