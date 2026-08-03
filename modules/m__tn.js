// Module: $tn (lines 371498-371897)
  var $tn = S(() => {
    nte();
    Vn();
    Ss();
    ntn();
    jl();
    st();
    eP();
    vc();
    XG();
    Wi();
    em();
    ivo();
    hp();
    IEo();
    Xm();
    vc();
    Zt();
    Std();
    ((vtd = require("crypto")),
      (Atd = require("path")),
      (Jky = Se(() =>
        v.strictObject({
          notebook_path: v
            .string()
            .describe(
              "The absolute path to the Jupyter notebook file to edit (must be absolute, not relative)",
            ),
          cell_id: v
            .string()
            .optional()
            .describe(
              "The ID of the cell to edit. When inserting a new cell, the new cell will be inserted after the cell with this ID, or at the beginning if not specified.",
            ),
          new_source: v.string().describe("The new source for the cell"),
          cell_type: v
            .enum(["code", "markdown"])
            .optional()
            .describe(
              "The type of the cell (code or markdown). If not specified, it defaults to the current cell type. If using edit_mode=insert, this is required.",
            ),
          edit_mode: v
            .enum(["replace", "insert", "delete"])
            .optional()
            .describe(
              "The type of edit to make (replace, insert, delete). Defaults to replace.",
            ),
        }),
      )),
      (Qky = Se(() =>
        v.object({
          new_source: v
            .string()
            .describe("The new source code that was written to the cell"),
          old_source: v
            .string()
            .optional()
            .describe(
              "The previous cell source (replace/delete only). Enables cell-relative diff rendering without re-reading the notebook.",
            ),
          cell_id: v
            .string()
            .optional()
            .describe("The ID of the cell that was edited"),
          cell_type: v
            .enum(["code", "markdown"])
            .describe("The type of the cell"),
          language: v
            .string()
            .describe("The programming language of the notebook"),
          edit_mode: v.string().describe("The edit mode that was used"),
          error: v
            .string()
            .optional()
            .describe("Error message if the operation failed"),
          notebook_path: v.string().describe("The path to the notebook file"),
          original_file: v
            .string()
            .describe("The original notebook content before modification"),
          updated_file: v
            .string()
            .describe("The updated notebook content after modification"),
        }),
      )));
    REe = Ui({
      name: DT,
      ruleContentField: "notebook_path",
      searchHint: "edit Jupyter notebook cells (.ipynb)",
      maxResultSizeChars: 1e5,
      shouldDefer: !0,
      async description() {
        return _td;
      },
      async prompt() {
        return btd;
      },
      backfillObservableInput(e) {
        if (typeof e.notebook_path === "string")
          e.notebook_path = Li(e.notebook_path);
      },
      userFacingName() {
        return "Edit Notebook";
      },
      getToolUseSummary: Etd,
      getActivityDescription(e) {
        let t = Etd(e);
        return t ? `Editing notebook ${t}` : "Editing notebook";
      },
      get inputSchema() {
        return Jky();
      },
      get outputSchema() {
        return Qky();
      },
      toAutoClassifierInput(e) {
        let t = e.edit_mode ?? "replace";
        if (!kEo()) return `${e.notebook_path} ${t}: ${e.new_source}`;
        return {
          notebook_path: e.notebook_path,
          mode: t,
          ...(e.cell_id !== void 0 && { cell_id: e.cell_id }),
          ...(t !== "delete" &&
            e.cell_type !== void 0 && { cell_type: e.cell_type }),
          ...(t === "delete"
            ? { ignored_source: e.new_source }
            : { adds: e.new_source }),
        };
      },
      getPath(e) {
        return e.notebook_path;
      },
      async preparePermissionMatcher({ notebook_path: e }) {
        return (t) => H9e(t, e);
      },
      async checkPermissions(e, t) {
        let r = Li(e.notebook_path);
        return (PYt(t.toolUseId, r, M_(r)), Ndt(REe, e, En(t)));
      },
      mapToolResultToToolResultBlockParam(
        { cell_id: e, edit_mode: t, new_source: r, error: n },
        o,
      ) {
        if (n)
          return {
            tool_use_id: o,
            type: "tool_result",
            content: n,
            is_error: !0,
          };
        switch (t) {
          case "replace":
            return {
              tool_use_id: o,
              type: "tool_result",
              content: `Updated cell ${e} with ${r}`,
            };
          case "insert":
            return {
              tool_use_id: o,
              type: "tool_result",
              content: `Inserted cell ${e} with ${r}`,
            };
          case "delete":
            return {
              tool_use_id: o,
              type: "tool_result",
              content: `Deleted cell ${e}`,
            };
          default:
            return {
              tool_use_id: o,
              type: "tool_result",
              content: "Unknown edit mode",
            };
        }
      },
      async validateInput(
        {
          notebook_path: e,
          cell_type: t,
          cell_id: r,
          edit_mode: n = "replace",
        },
        o,
      ) {
        let i = Li(e),
          s = Ucr(i, o);
        if (s) return { result: !1, message: s, errorCode: 12 };
        if (i.startsWith("\\\\") || i.startsWith("//")) return { result: !0 };
        if (Atd.extname(i) !== ".ipynb")
          return {
            result: !1,
            message:
              "File must be a Jupyter notebook (.ipynb file). For editing other file types, use the FileEdit tool.",
            errorCode: 2,
          };
        if (n === "insert" && !t)
          return {
            result: !1,
            message: "Cell type is required when using edit_mode=insert.",
            errorCode: 5,
          };
        let a = o.readFileState.get(i);
        if (!a)
          return {
            result: !1,
            message:
              "File has not been read yet. Read it first before writing to it.",
            errorCode: 9,
          };
        if (tPi())
          try {
            let { mode: u } = await Xt().stat(i);
            if (OYt(u)) return { result: !1, message: LYt, errorCode: 11 };
          } catch (u) {
            if (!Vt(u)) throw u;
          }
        if (FQ(i) > a.timestamp)
          return {
            result: !1,
            message:
              "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
            errorCode: 10,
          };
        let l;
        try {
          l = O5e(i).content;
        } catch (u) {
          if (Vt(u))
            return {
              result: !1,
              message: "Notebook file does not exist.",
              errorCode: 1,
            };
          throw u;
        }
        let c = Ul(l);
        if (!c)
          return {
            result: !1,
            message: "Notebook is not valid JSON.",
            errorCode: 6,
          };
        if (!r) {
          if (n !== "insert")
            return {
              result: !1,
              message:
                "Cell ID must be specified when not inserting a new cell.",
              errorCode: 7,
            };
        } else if (!c.cells.some((u) => u.id === r)) {
          let u = iur(r);
          if (u === void 0)
            return {
              result: !1,
              message: `Cell with ID "${r}" not found in notebook.`,
              errorCode: 8,
            };
          if (!c.cells[u])
            return {
              result: !1,
              message: `Cell with index ${u} does not exist in notebook.`,
              errorCode: 7,
            };
        }
        return { result: !0 };
      },
      async call(
        {
          notebook_path: e,
          new_source: t,
          cell_id: r,
          cell_type: n,
          edit_mode: o,
        },
        i,
        s,
        a,
      ) {
        let {
            readFileState: l,
            getFileHistoryState: c,
            applyFileHistoryOp: u,
          } = i,
          d = Li(e),
          p = (m) => ({
            data: {
              new_source: t,
              old_source: void 0,
              cell_type: n ?? "code",
              language: "python",
              edit_mode: "replace",
              error: m,
              cell_id: r,
              notebook_path: d,
              original_file: "",
              updated_file: "",
            },
          }),
          f = MYt(i, d);
        await A9e(c, u, d, a.uuid);
        try {
          return await goe(d, async () => {
            let { content: m, encoding: g, lineEndings: y } = await Wye(d),
              _ = await ECe(d),
              E;
            try {
              E = Bt(m);
            } catch {
              return p("Notebook is not valid JSON.");
            }
            let A;
            if (!r) A = 0;
            else {
              if (((A = E.cells.findIndex((P) => P.id === r)), A === -1)) {
                let P = iur(r);
                if (P !== void 0) A = P;
              }
              if (o === "insert") A += 1;
            }
            let b = o;
            if (b === "replace" && A === E.cells.length) {
              if (((b = "insert"), !n)) n = "code";
            }
            let T = E.metadata.language_info?.name ?? "python",
              C = void 0;
            if (E.nbformat > 4 || (E.nbformat === 4 && E.nbformat_minor >= 5)) {
              if (b === "insert") C = vtd.randomUUID().slice(0, 8);
              else if (r !== null) C = r;
            }
            let I;
            if (b === "delete") {
              let P = E.cells[A];
              ((I = Array.isArray(P.source) ? P.source.join("") : P.source),
                E.cells.splice(A, 1));
            } else if (b === "insert") {
              let P;
              if (n === "markdown")
                P = { cell_type: "markdown", id: C, source: t, metadata: {} };
              else
                P = {
                  cell_type: "code",
                  id: C,
                  source: t,
                  metadata: {},
                  execution_count: null,
                  outputs: [],
                };
              E.cells.splice(A, 0, P);
            } else {
              let P = E.cells[A];
              if (
                ((I = Array.isArray(P.source) ? P.source.join("") : P.source),
                (P.source = t),
                P.cell_type === "code")
              )
                ((P.execution_count = null), (P.outputs = []));
              if (n && n !== P.cell_type) P.cell_type = n;
            }
            let k = Ie(E, null, 1);
            zrt(d, f);
            let D = await YOe(d, k, g, y),
              M = l.get(d),
              L = M !== void 0 && _ <= M.timestamp;
            return (
              l.set(d, {
                content: k,
                timestamp: D,
                offset: void 0,
                limit: void 0,
                ...((!_Ue(M) || !L) && { contentNotInModelContext: !0 }),
              }),
              {
                data: {
                  new_source: t,
                  old_source: I,
                  cell_type: n ?? "code",
                  language: T,
                  edit_mode: b ?? "replace",
                  cell_id: C || void 0,
                  error: "",
                  notebook_path: d,
                  original_file: m,
                  updated_file: k,
                },
              }
            );
          });
        } catch (m) {
          if (m instanceof hoe) throw m;
          return p(
            m instanceof Error
              ? m.message
              : "Unknown error occurred while editing notebook",
          );
        }
      },
    });
  });
