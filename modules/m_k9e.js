// Module: k9e (lines 367536-367902)
  var k9e = S(() => {
    vt();
    Vn();
    gps();
    Zr();
    b5();
    EOt();
    xcr();
    Wke();
    cMt();
    gws();
    Bee();
    Ss();
    ntn();
    jl();
    Ge();
    yUe();
    Qr();
    st();
    vc();
    nte();
    SEo();
    XG();
    eP();
    Wi();
    Xcr();
    FB();
    si();
    hp();
    Xm();
    RS();
    Etn();
    Rh();
    g1();
    JZu();
    (($dt = require("path")),
      (cHy = Se(() =>
        v.strictObject({
          file_path: v
            .string()
            .describe(
              "The absolute path to the file to write (must be absolute, not relative)",
            ),
          content: v.string().describe("The content to write to the file"),
        }),
      )),
      (uHy = Se(() =>
        v.object({
          type: v
            .enum(["create", "update"])
            .describe(
              "Whether a new file was created or an existing file was updated",
            ),
          filePath: v
            .string()
            .describe("The path to the file that was written"),
          content: v
            .string()
            .describe("The content that was written to the file"),
          structuredPatch: v
            .array(Wws())
            .describe("Diff patch showing the changes"),
          originalFile: v
            .string()
            .nullable()
            .describe(
              "The original file content before the write (null for new files)",
            ),
          gitDiff: Gws().optional(),
          userModified: v
            .boolean()
            .optional()
            .describe(
              "True when the user edited the proposed content in the permission dialog before accepting",
            ),
        }),
      )));
    jk = Ui({
      name: nu,
      ruleContentField: "file_path",
      searchHint: "create or overwrite files",
      maxResultSizeChars: 1e5,
      strict: !0,
      async description() {
        return "Write a file to the local filesystem.";
      },
      userFacingName: XZu,
      getToolUseSummary: lTs,
      getActivityDescription(e) {
        let t = lTs(e);
        return t ? `Writing ${t}` : "Writing file";
      },
      async prompt({ model: e }) {
        return eDu(e);
      },
      get inputSchema() {
        return cHy();
      },
      get outputSchema() {
        return uHy();
      },
      stripForStorage(e) {
        if (typeof e !== "object" || e === null) return e;
        if (e.type !== "update") return e;
        if (e.content === "" && (e.originalFile ?? "") === "") return e;
        return { ...e, content: "", originalFile: null };
      },
      toAutoClassifierInput(e) {
        return `${e.file_path}: ${e.content}`;
      },
      getPath(e) {
        return e.file_path;
      },
      inputsEquivalent(e, t) {
        if (e.file_path !== t.file_path) return !1;
        if (e.content === t.content) return !0;
        return e.content.replace(/\n+$/, "") === t.content.replace(/\n+$/, "");
      },
      backfillObservableInput(e) {
        if (typeof e.file_path === "string") e.file_path = Li(e.file_path);
      },
      async preparePermissionMatcher({ file_path: e }) {
        return (t) => H9e(t, e);
      },
      async checkPermissions(e, t) {
        let r = Li(e.file_path);
        return (PYt(t.toolUseId, r, M_(r)), Ndt(jk, e, En(t)));
      },
      extractSearchText() {
        return "";
      },
      async validateInput({ file_path: e, content: t }, r) {
        let n = Li(e),
          o = Ucr(n, r);
        if (o) return { result: !1, message: o, errorCode: 7 };
        if (
          r.agentId &&
          /^(REPORT|SUMMARY|FINDINGS|ANALYSIS).*\.md$/i.test($dt.basename(n))
        )
          return (
            O("tengu_subagent_md_report_blocked", {
              contentBytes: Buffer.byteLength(t),
            }),
            {
              result: !1,
              message:
                "Subagents should return findings as text, not write report files. Include this content in your final response instead.",
              errorCode: 5,
            }
          );
        let i = oEo(n, t);
        if (i) return { result: !1, message: i, errorCode: 0 };
        if (U0(n, En(r), "edit", "deny") !== null)
          return {
            result: !1,
            message:
              "File is in a directory that is denied by your permission settings.",
            errorCode: 1,
          };
        if (n.startsWith("\\\\") || n.startsWith("//")) return { result: !0 };
        let a = Xt(),
          l;
        try {
          let d = await a.stat(n);
          if (((l = d.mtimeMs), OYt(d.mode)))
            return { result: !1, message: LYt, errorCode: 6 };
        } catch (d) {
          if (Vt(d)) return { result: !0 };
          throw d;
        }
        let c = r.readFileState.get(n);
        if (!c || c.isPartialView) {
          let d = lo(YD(r)),
            p = SQt(d),
            f = !c && Ke(f5i("tengu_velvet_mallet", d), !1);
          if (
            (O("tengu_write_tool_not_read_hypothetical", {
              wouldHaveResult:
                c && Math.floor(l) > c.timestamp
                  ? Ee("errorCode3")
                  : Ee("success"),
              isPartialView: c?.isPartialView === !0,
              isFilePathAbsolute: $dt.isAbsolute(e),
              guardSkipped: f,
              modelBucket: p,
            }),
            !f)
          )
            return {
              result: !1,
              message:
                "File has not been read yet. Read it first before writing to it.",
              errorCode: 2,
            };
          return { result: !0 };
        }
        if (Math.floor(l) > c.timestamp) {
          let d = T9e(c),
            p = !1;
          if (d) {
            let f = await a.readFileBytes(n);
            p = EEo(c, f.toString("utf8"));
          }
          if (!p)
            return {
              result: !1,
              message:
                "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
              errorCode: 3,
            };
        }
        return { result: !0 };
      },
      async call({ file_path: e, content: t }, r, n, o) {
        let {
            options: i,
            permissionLayers: s,
            readFileState: a,
            userModified: l,
            getFileHistoryState: c,
            applyFileHistoryOp: u,
            dynamicSkillDirTriggers: d,
          } = r,
          p = Li(e),
          f = $dt.dirname(p),
          m = MYt(r, p);
        (await Qcr(p, d),
          await g9e.beforeFileEdited(p),
          await A9e(c, u, p, o.uuid));
        let g = await goe(p, async () => {
            let T;
            try {
              T = O5e(p);
            } catch (M) {
              if (Vt(M)) T = null;
              else throw M;
            }
            if (T !== null)
              dHy({
                fullFilePath: p,
                diskContent: T.content,
                lastRead: a.get(p),
                options: i,
                permissionLayers: s,
              });
            let C = T?.encoding ?? "utf8",
              I = T?.content ?? null,
              R = t;
            t = zfo(p, t);
            let k = t !== R;
            (zrt(p, m), await Xt().mkdir(f));
            let D = await YOe(p, t, C, "LF");
            return (
              a.set(p, {
                content: Zj(t),
                timestamp: D,
                offset: void 0,
                limit: void 0,
                ...((l || k) && { contentNotInModelContext: !0 }),
              }),
              { oldContent: I, memdirStamped: k }
            );
          }),
          { oldContent: y, memdirStamped: _ } = g,
          E = b9e();
        if (E)
          ($So(p),
            FSo(p),
            E.changeFile(p, t).catch((T) => {
              w(
                `LSP: Failed to notify server of file change for ${p}: ${T.message}`,
                { level: "error" },
              );
            }),
            E.saveFile(p).catch((T) => {
              w(
                `LSP: Failed to notify server of file save for ${p}: ${T.message}`,
                { level: "error" },
              );
            }));
        if ((xct(p, y, t), p.endsWith(`${$dt.sep}CLAUDE.md`)))
          O("tengu_write_claudemd", {});
        let A;
        if (Yt(process.env.CLAUDE_CODE_REMOTE)) {
          let T = Date.now(),
            C = await HEo(p);
          if (C) A = C;
          O("tengu_tool_use_diff_computed", {
            isWriteTool: !0,
            durationMs: Date.now() - T,
            hasDiff: !!C,
          });
        }
        if (y) {
          let T = Ddt({
              filePath: e,
              oldContent: y,
              newContent: t,
              convertTabs: !0,
            }),
            C = {
              type: "update",
              filePath: e,
              content: t,
              structuredPatch: T,
              originalFile: y,
              userModified: l ?? !1,
              ...(_ && { memdirStamped: !0 }),
              ...(A && { gitDiff: A }),
            };
          return (
            ltn(T, o.message.model),
            Vke({
              operation: "write",
              tool: "FileWriteTool",
              filePath: p,
              type: "update",
            }),
            { data: C }
          );
        }
        let b = {
          type: "create",
          filePath: e,
          content: t,
          structuredPatch: [],
          originalFile: null,
          userModified: l ?? !1,
          ...(_ && { memdirStamped: !0 }),
          ...(A && { gitDiff: A }),
        };
        return (
          ltn([], o.message.model, t),
          Vke({
            operation: "write",
            tool: "FileWriteTool",
            filePath: p,
            type: "create",
          }),
          { data: b }
        );
      },
      mapToolResultToToolResultBlockParam(
        { filePath: e, type: t, userModified: r, memdirStamped: n },
        o,
      ) {
        let i = r
            ? " The user modified your proposed content before accepting it."
            : "",
          s = r || n ? "" : Koo;
        switch (t) {
          case "create":
            return {
              tool_use_id: o,
              type: "tool_result",
              content: `File created successfully at: ${e}${i}${s}`,
            };
          case "update":
            return {
              tool_use_id: o,
              type: "tool_result",
              content: `The file ${e} has been updated successfully.${i}${s}`,
            };
        }
      },
    });
  });
