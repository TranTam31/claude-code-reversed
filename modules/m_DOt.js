// Module: DOt (lines 367041-367498)
  var DOt = S(() => {
    vt();
    gps();
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
    ei();
    Ge();
    yUe();
    Ar();
    Qr();
    st();
    vc();
    nte();
    SEo();
    XG();
    eP();
    Ni();
    Wi();
    Xcr();
    FB();
    si();
    hp();
    IEo();
    Xm();
    RZu();
    Rh();
    aH();
    RS();
    MZu();
    Etn();
    zws();
    Odt();
    ((x9e = require("path")),
      (tP = Ui({
        name: fl,
        ruleContentField: "file_path",
        searchHint: "modify file contents in place",
        maxResultSizeChars: 1e5,
        strict: !0,
        async description() {
          return "A tool for editing files";
        },
        async prompt({ model: e }) {
          return PZu(e);
        },
        userFacingName: DEo,
        getToolUseSummary: qws,
        getActivityDescription(e) {
          let t = qws(e);
          return t ? `Editing ${t}` : "Editing file";
        },
        get inputSchema() {
          return REo();
        },
        get outputSchema() {
          return Vws();
        },
        coerceInput: DZu,
        stripForStorage(e) {
          if (typeof e !== "object" || e === null) return e;
          if ((e.originalFile ?? "") === "") return e;
          return { ...e, originalFile: "" };
        },
        toAutoClassifierInput(e) {
          if (!kEo()) return `${e.file_path}: ${e.new_string}`;
          let t = HZu(),
            r = e.old_string,
            n = t > 0 && typeof r === "string" && r.length > t;
          return {
            file_path: e.file_path,
            adds: e.new_string,
            removes: n ? r.slice(0, t) : r,
            ...(t > 0 && { removesTruncated: n }),
            ...(e.replace_all === !0 && { replaceAll: !0 }),
          };
        },
        getPath(e) {
          return e.file_path;
        },
        backfillObservableInput(e) {
          if (typeof e.file_path === "string") e.file_path = Li(e.file_path);
        },
        async preparePermissionMatcher({ file_path: e }) {
          return (t) => H9e(t, e);
        },
        async checkPermissions(e, t) {
          let r = Li(e.file_path);
          return (PYt(t.toolUseId, r, M_(r)), Ndt(tP, e, En(t)));
        },
        async validateInput(e, t) {
          let {
              file_path: r,
              old_string: n,
              new_string: o,
              replace_all: i = !1,
            } = e,
            s = Li(r),
            a = Ucr(s, t);
          if (a) return { result: !1, message: a, errorCode: 12 };
          let l = oEo(s, o);
          if (l) return { result: !1, message: l, errorCode: 0 };
          if (n === o)
            return {
              result: !1,
              behavior: "ask",
              message:
                "No changes to make: old_string and new_string are exactly the same.",
              errorCode: 1,
            };
          if (U0(s, En(t), "edit", "deny") !== null)
            return {
              result: !1,
              behavior: "ask",
              message:
                "File is in a directory that is denied by your permission settings.",
              errorCode: 2,
            };
          if (MEo(s, En(t)))
            return { result: !1, behavior: "ask", message: J7i, errorCode: 13 };
          if (s.startsWith("\\\\") || s.startsWith("//")) return { result: !0 };
          let u = Xt();
          try {
            let { size: _, mode: E } = await u.stat(s);
            if (_ > KZu)
              return {
                result: !1,
                behavior: "ask",
                message: `File is too large to edit (${pl(_)}). Maximum editable file size is ${pl(KZu)}.`,
                errorCode: 10,
              };
            if (OYt(E))
              return {
                result: !1,
                behavior: "ask",
                message: LYt,
                errorCode: 11,
              };
          } catch (_) {
            if (!Vt(_)) throw _;
          }
          let d;
          try {
            let _ = await u.readFileBytes(s),
              E =
                _.length >= 2 && _[0] === 255 && _[1] === 254
                  ? "utf16le"
                  : "utf8";
            d = Zj(_.toString(E));
          } catch (_) {
            if (Vt(_)) d = null;
            else throw _;
          }
          if (d === null) {
            if (n === "") return { result: !0 };
            let _ = Krt(s),
              E = await Vye(s),
              A = `File does not exist. ${yoe} ${kt()}.`;
            if (E) A += ` Did you mean ${E}?`;
            else if (_) A += ` Did you mean ${_}?`;
            return { result: !1, behavior: "ask", message: A, errorCode: 4 };
          }
          if (n === "") {
            if (d.trim() !== "")
              return {
                result: !1,
                behavior: "ask",
                message: "Cannot create new file - file already exists.",
                errorCode: 3,
              };
            return { result: !0 };
          }
          if (s.endsWith(".ipynb"))
            return {
              result: !1,
              behavior: "ask",
              message: `File is a Jupyter Notebook. Use the ${DT} to edit this file.`,
              errorCode: 5,
            };
          let p = t.readFileState.get(s);
          if (!p || p.isPartialView) {
            let _ = lo(YD(t)),
              E = SQt(_),
              A = !p5i(_) && iTs(s, t);
            if (
              (O("tengu_edit_tool_not_read_hypothetical", {
                wouldHaveResult: YZu(sTs(d, n, i)),
                isPartialView: p?.isPartialView === !0,
                isFilePathAbsolute: x9e.isAbsolute(r),
                guardSkipped: A,
                modelBucket: E,
              }),
              !A)
            )
              return {
                result: !1,
                behavior: "ask",
                message:
                  "File has not been read yet. Read it first before writing to it.",
                meta: { isFilePathAbsolute: String(x9e.isAbsolute(r)) },
                errorCode: 6,
              };
          }
          if (p) {
            if (FQ(s) > p.timestamp)
              if (T9e(p) && xEe(p, d));
              else {
                let A = sTs(d, n, i),
                  b = A === "applies" && iTs(s, t);
                if (
                  (O("tengu_edit_tool_stale_read", {
                    wouldHaveResult: YZu(A),
                    recovered: b,
                  }),
                  !b)
                )
                  return {
                    result: !1,
                    behavior: "ask",
                    message:
                      "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
                    errorCode: 7,
                  };
              }
          }
          let f = d,
            m = Ldt(f, n);
          if (!m) {
            let _ = FZu(n)
              ? `
(note: Edit also tried swapping \\uXXXX escapes and their characters; neither form matched, so the mismatch is likely elsewhere in old_string. Re-read the file and copy the exact surrounding text.)`
              : "";
            return {
              result: !1,
              behavior: "ask",
              message: `String to replace not found in file.
String: ${n}${_}`,
              meta: { isFilePathAbsolute: String(x9e.isAbsolute(r)) },
              errorCode: 8,
            };
          }
          let g = f.split(m).length - 1;
          if (g > 1 && !i)
            return {
              result: !1,
              behavior: "ask",
              message: `Found ${g} matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance.
String: ${n}`,
              meta: {
                isFilePathAbsolute: String(x9e.isAbsolute(r)),
                actualOldString: m,
              },
              errorCode: 9,
            };
          let y = IZu(s, f, () => (i ? f.replaceAll(m, o) : f.replace(m, o)));
          if (y !== null) return y;
          return { result: !0, meta: { actualOldString: m } };
        },
        inputsEquivalent(e, t) {
          return zZu(
            {
              file_path: e.file_path,
              edits: [
                {
                  old_string: e.old_string,
                  new_string: e.new_string,
                  replace_all: e.replace_all ?? !1,
                },
              ],
            },
            {
              file_path: t.file_path,
              edits: [
                {
                  old_string: t.old_string,
                  new_string: t.new_string,
                  replace_all: t.replace_all ?? !1,
                },
              ],
            },
          );
        },
        async call(e, t, r, n) {
          let {
              options: o,
              permissionLayers: i,
              readFileState: s,
              userModified: a,
              getFileHistoryState: l,
              applyFileHistoryOp: c,
              dynamicSkillDirTriggers: u,
            } = t,
            {
              file_path: d,
              old_string: p,
              new_string: f,
              replace_all: m = !1,
            } = e,
            g = Xt(),
            y = Li(d),
            _ = MYt(t, y);
          if (MEo(y, En(t))) throw new HNe(J7i);
          if (!Z.CLAUDE_CODE_SIMPLE) await Qcr(y, u);
          (await g9e.beforeFileEdited(y), await A9e(l, c, y, n.uuid));
          let {
              originalFileContents: E,
              actualOldString: A,
              updatedFile: b,
              patch: T,
              staleRecovered: C,
              memdirStamped: I,
            } = await goe(y, async () => {
              let {
                  content: M,
                  fileExists: L,
                  encoding: N,
                  lineEndings: P,
                } = await sHy(y),
                B = s.get(y),
                G =
                  L &&
                  lHy({
                    absoluteFilePath: y,
                    fileContents: M,
                    lastRead: B,
                    oldString: p,
                    replaceAll: m,
                    model: lo(YD({ options: o, permissionLayers: i })),
                    readNotAutoAllowed: () => !iTs(y, t),
                  }),
                V = Ldt(M, p) || p,
                F = UZu(p, V, Jcr(p, V, f)),
                W = vtn({
                  filePath: y,
                  fileContents: M,
                  oldString: V,
                  newString: F,
                  replaceAll: m,
                }),
                j = zfo(y, W.updatedFile),
                z = j !== W.updatedFile,
                q = !z
                  ? W.patch
                  : Ddt({
                      filePath: y,
                      oldContent: M,
                      newContent: j,
                      convertTabs: !0,
                    });
              (zrt(y, _), await g.mkdir(x9e.dirname(y)));
              let K = await YOe(y, j, N, P),
                Y = a || z || (L && (!_Ue(B) || G));
              return (
                s.set(y, {
                  content: HEe(j),
                  timestamp: K,
                  offset: void 0,
                  limit: void 0,
                  ...(Y && { contentNotInModelContext: !0 }),
                }),
                {
                  originalFileContents: M,
                  actualOldString: V,
                  updatedFile: j,
                  patch: q,
                  staleRecovered: G,
                  memdirStamped: z,
                }
              );
            }),
            R = b9e();
          if (R)
            ($So(y),
              FSo(y),
              R.changeFile(y, b).catch((M) => {
                w(
                  `LSP: Failed to notify server of file change for ${y}: ${M.message}`,
                  { level: "error" },
                );
              }),
              R.saveFile(y).catch((M) => {
                w(
                  `LSP: Failed to notify server of file save for ${y}: ${M.message}`,
                  { level: "error" },
                );
              }));
          if ((xct(y, E, b), y.endsWith(`${x9e.sep}CLAUDE.md`)))
            O("tengu_write_claudemd", {});
          (ltn(T, n.message.model),
            Vke({ operation: "edit", tool: "FileEditTool", filePath: y }),
            O("tengu_edit_string_lengths", {
              oldStringBytes: Buffer.byteLength(p, "utf8"),
              newStringBytes: Buffer.byteLength(f, "utf8"),
              replaceAll: m,
            }));
          let k;
          if (Yt(process.env.CLAUDE_CODE_REMOTE)) {
            let M = Date.now(),
              L = await HEo(y);
            if (L) k = L;
            O("tengu_tool_use_diff_computed", {
              isEditTool: !0,
              durationMs: Date.now() - M,
              hasDiff: !!L,
            });
          }
          return {
            data: {
              filePath: d,
              oldString: A,
              newString: f,
              originalFile: E,
              structuredPatch: T,
              userModified: a ?? !1,
              replaceAll: m,
              ...(C && { staleRecovered: !0 }),
              ...(I && { memdirStamped: !0 }),
              ...(k && { gitDiff: k }),
            },
          };
        },
        mapToolResultToToolResultBlockParam(e, t) {
          let {
              filePath: r,
              userModified: n,
              replaceAll: o,
              staleRecovered: i,
              memdirStamped: s,
            } = e,
            a = n
              ? ".  The user modified your proposed changes before accepting them. "
              : "",
            l = i
              ? " (note: the file had been modified on disk since you last read it \u2014 the edit applied cleanly, but the file contains other changes not in your context. Read it before edits that depend on surrounding content.)"
              : n || s
                ? ""
                : Koo;
          if (o)
            return {
              tool_use_id: t,
              type: "tool_result",
              content: `The file ${r} has been updated${a}. All occurrences were successfully replaced.${l}`,
            };
          return {
            tool_use_id: t,
            type: "tool_result",
            content: `The file ${r} has been updated successfully${a}.${l}`,
          };
        },
      })));
  });
