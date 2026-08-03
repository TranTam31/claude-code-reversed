// Module: kTd (lines 474779-475087)
  var kTd = S(() => {
    Vn();
    Wke();
    Ss();
    jl();
    ei();
    Ge();
    st();
    Ja();
    vc();
    Wi();
    Ir();
    hp();
    Xm();
    hpe();
    _Td();
    STd();
    QOs();
    wTd();
    ((CTd = require("fs/promises")),
      (ZOs = x(require("path"))),
      (xTd = require("url")),
      (Kzy = Se(() =>
        v.strictObject({
          operation: v
            .enum([
              "goToDefinition",
              "findReferences",
              "hover",
              "documentSymbol",
              "workspaceSymbol",
              "goToImplementation",
              "prepareCallHierarchy",
              "incomingCalls",
              "outgoingCalls",
            ])
            .describe("The LSP operation to perform"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v
            .string()
            .optional()
            .describe(
              "The symbol name or partial name to search for (workspaceSymbol only). Most language servers return no results for an empty query, so always provide it when using workspaceSymbol.",
            ),
        }),
      )),
      (Yzy = Se(() =>
        v.object({
          operation: v
            .enum([
              "goToDefinition",
              "findReferences",
              "hover",
              "documentSymbol",
              "workspaceSymbol",
              "goToImplementation",
              "prepareCallHierarchy",
              "incomingCalls",
              "outgoingCalls",
            ])
            .describe("The LSP operation that was performed"),
          result: v
            .string()
            .describe("The formatted result of the LSP operation"),
          filePath: v
            .string()
            .describe("The file path the operation was performed on"),
          resultCount: v
            .number()
            .int()
            .nonnegative()
            .optional()
            .describe("Number of results (definitions, references, symbols)"),
          fileCount: v
            .number()
            .int()
            .nonnegative()
            .optional()
            .describe("Number of files containing results"),
        }),
      )));
    e1s = Ui({
      name: nct,
      searchHint: "code intelligence (definitions, references, symbols, hover)",
      maxResultSizeChars: 1e5,
      isLsp: !0,
      async description() {
        return pus;
      },
      userFacingName() {
        return "LSP";
      },
      shouldDefer: !0,
      isEnabled() {
        return rEo();
      },
      get inputSchema() {
        return Kzy();
      },
      get outputSchema() {
        return Yzy();
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
      },
      ruleContentField: "filePath",
      getPath({ filePath: e }) {
        return Li(e);
      },
      async validateInput(e) {
        let t = bTd().safeParse(e);
        if (!t.success)
          return {
            result: !1,
            message: `Invalid input: ${t.error.message}`,
            errorCode: 3,
          };
        let r = Xt(),
          n = Li(e.filePath);
        if (Nan(e.filePath, n) || Zne(r, n) !== void 0) return { result: !0 };
        let o;
        try {
          o = await r.stat(n);
        } catch (i) {
          if (Vt(i))
            return {
              result: !1,
              message: `File does not exist: ${e.filePath}`,
              errorCode: 1,
            };
          let s = _n(i);
          return (
            w(
              `Failed to access file stats for LSP operation on ${e.filePath}: ${s.message}`,
              { level: "error" },
            ),
            {
              result: !1,
              message: `Cannot access file: ${e.filePath}. ${s.message}`,
              errorCode: 4,
            }
          );
        }
        if (!o.isFile())
          return {
            result: !1,
            message: `Path is not a file: ${e.filePath}`,
            errorCode: 2,
          };
        return { result: !0 };
      },
      async checkPermissions(e, t) {
        return gfe(e1s, e, En(t));
      },
      async prompt() {
        return pus;
      },
      renderToolUseMessage: Xzy,
      async call(e, t) {
        let r = Li(e.filePath),
          n = kt();
        if (TOt().status === "pending") await wQu();
        let i = b9e();
        if (!i)
          return (
            xe(
              Error("LSP server manager not initialized when tool was called"),
            ),
            {
              data: {
                operation: e.operation,
                result:
                  "LSP server manager not initialized. This may indicate a startup issue.",
                filePath: e.filePath,
              },
            }
          );
        let { method: s, params: a } = Jzy(e, r);
        try {
          if (!i.isFileOpen(r)) {
            let m = await CTd.open(r, "r");
            try {
              let g = await m.stat();
              if (g.size > zzy)
                return {
                  data: {
                    operation: e.operation,
                    result: `File too large for LSP analysis (${Math.ceil(g.size / 1e6)}MB exceeds 10MB limit)`,
                    filePath: e.filePath,
                  },
                };
              let y = await m.readFile({ encoding: "utf-8" });
              await i.openFile(r, y);
            } finally {
              await m.close();
            }
          }
          let l = await i.sendRequest(r, s, a);
          if (l === void 0)
            return (
              w(
                `No LSP server available for file type ${ZOs.extname(r)} for operation ${e.operation} on file ${e.filePath}`,
              ),
              {
                data: {
                  operation: e.operation,
                  result: `No LSP server available for file type: ${ZOs.extname(r)}`,
                  filePath: e.filePath,
                },
              }
            );
          let c = i.getServerForFile(r)?.config?.pluginSource;
          if (c) T$(c);
          if (
            e.operation === "incomingCalls" ||
            e.operation === "outgoingCalls"
          ) {
            let m = l;
            if (!m || m.length === 0)
              return {
                data: {
                  operation: e.operation,
                  result: "No call hierarchy item found at this position",
                  filePath: e.filePath,
                  resultCount: 0,
                  fileCount: 0,
                },
              };
            let g =
              e.operation === "incomingCalls"
                ? "callHierarchy/incomingCalls"
                : "callHierarchy/outgoingCalls";
            if (((l = await i.sendRequest(r, g, { item: m[0] })), l === void 0))
              w(`LSP server returned undefined for ${g} on ${e.filePath}`);
          }
          if (
            l &&
            Array.isArray(l) &&
            (e.operation === "findReferences" ||
              e.operation === "goToDefinition" ||
              e.operation === "goToImplementation" ||
              e.operation === "workspaceSymbol")
          )
            if (e.operation === "workspaceSymbol") {
              let m = l,
                g = m.filter((E) => E?.location?.uri).map((E) => E.location),
                y = await TTd(g, n),
                _ = new Set(y.map((E) => E.uri));
              l = m.filter((E) => !E?.location?.uri || _.has(E.location.uri));
            } else {
              let m = l.map(Nko),
                g = await TTd(m, n),
                y = new Set(g.map((_) => _.uri));
              l = l.filter((_) => {
                let E = Nko(_);
                return !E.uri || y.has(E.uri);
              });
            }
          let {
            formatted: u,
            resultCount: d,
            fileCount: p,
          } = e9y(e.operation, l, n);
          return {
            data: {
              operation: e.operation,
              result: u,
              filePath: e.filePath,
              resultCount: d,
              fileCount: p,
            },
          };
        } catch (l) {
          let u = _n(l).message;
          return (
            w(
              `LSP tool request failed for ${e.operation} on ${e.filePath}: ${u}`,
              { level: "error" },
            ),
            {
              data: {
                operation: e.operation,
                result: `Error performing ${e.operation}: ${u}`,
                filePath: e.filePath,
              },
            }
          );
        }
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return { tool_use_id: t, type: "tool_result", content: e.result };
      },
    });
  });
