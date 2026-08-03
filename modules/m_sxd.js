// Module: sxd (lines 480903-481516)
  var sxd = S(() => {
    Vn();
    Ss();
    jl();
    ei();
    Ge();
    st();
    Zt();
    Pr();
    OCd();
    Xko();
    Zan();
    XLt();
    Zko();
    ((rxd = require("fs")),
      (Jft = require("fs/promises")),
      (MIe = require("path")),
      (BKy = Se(() =>
        v.strictObject({
          path: v
            .string()
            .min(1)
            .max(YLt)
            .describe(
              "Path within the project, e.g. components/button/index.html",
            ),
          localPath: v
            .string()
            .min(1)
            .optional()
            .describe(
              "Path on disk to read file contents from, relative to the localDir approved at finalize_plan. Preferred for anything you have on disk: the tool reads, encodes, and uploads directly so the contents never enter the model context. Mutually exclusive with data.",
            ),
          data: v
            .string()
            .optional()
            .describe(
              "Inline file contents (UTF-8 text, or base64 when encoding is " +
                '"base64"). For small dynamic content only \u2014 anything you have on ' +
                "disk should use localPath instead.",
            ),
          encoding: v
            .enum(["base64"])
            .optional()
            .describe('Set to "base64" for binary inline data'),
          mimeType: v.string().optional(),
        }),
      )),
      (jKy = Se(() =>
        v.strictObject({
          name: v
            .string()
            .min(1)
            .max(255)
            .describe(
              'Short human-readable label ("Primary buttons"), not a path',
            ),
          path: v
            .string()
            .min(1)
            .max(YLt)
            .describe(
              "Project-relative path to the preview/spec file this card renders",
            ),
          subtitle: v
            .string()
            .max(255)
            .optional()
            .describe(
              'Variants shown ("Primary / secondary / ghost, 3 sizes")',
            ),
          viewport: v
            .strictObject({
              width: v.number().int().positive(),
              height: v.number().int().positive().optional(),
            })
            .optional()
            .describe("Card dimensions in the Design System pane"),
          group: v
            .string()
            .max(64)
            .optional()
            .describe(
              "Free-form section label for the Design System pane (max 64 chars). " +
                "Use the source design system's own categorization if it has one \u2014 " +
                'e.g. Material has Buttons/Cards/Forms/etc., a corporate kit might have Actions/Forms/Navigation. Common foundational labels: "Type", "Colors", "Spacing", "Components", "Brand". The pane groups by the value you send.',
            ),
        }),
      )),
      (WKy = Se(() =>
        v.strictObject({
          method: v.enum([
            "list_projects",
            "get_project",
            "list_files",
            "get_file",
            "finalize_plan",
            "write_files",
            "delete_files",
            "register_assets",
            "unregister_assets",
            "create_project",
            "report_validate",
          ]),
          projectId: v
            .string()
            .min(1)
            .optional()
            .describe(
              "Required for all methods except list_projects and create_project",
            ),
          path: v
            .string()
            .min(1)
            .optional()
            .describe("get_file: file path to read"),
          writes: v
            .array(v.string().min(1).max(YLt))
            .max(256)
            .optional()
            .describe(
              "finalize_plan: exact paths or glob patterns that will be written. `*` matches within a single segment, `**` matches any depth (e.g. `ui_kits/acme/**/*.html`). Max 3 `*`/`**` wildcards per " +
                "pattern and max 256 entries \u2014 use broader globs to cover more " +
                "files rather than enumerating paths.",
            ),
          deletes: v
            .array(v.string().min(1).max(YLt))
            .max(256)
            .optional()
            .describe(
              "finalize_plan: exact paths or glob patterns that will be deleted (same syntax and limits as writes).",
            ),
          planId: v
            .string()
            .min(1)
            .optional()
            .describe(
              "write_files/delete_files/register_assets/unregister_assets: token from a prior finalize_plan call",
            ),
          files: v
            .array(BKy())
            .max(256)
            .optional()
            .describe(
              "write_files: file contents to write (max 256 per call \u2014 split " +
                "larger bundles across multiple write_files calls under the same planId).",
            ),
          paths: v
            .array(v.string().min(1).max(YLt))
            .max(256)
            .optional()
            .describe(
              "delete_files: paths to delete. unregister_assets: paths whose " +
                "Design System pane card should be removed. Max 256 per call \u2014 " +
                "split larger batches across multiple calls under the same planId.",
            ),
          name: v
            .string()
            .min(1)
            .max(200)
            .optional()
            .describe("create_project: name for the new design-system project"),
          assets: v
            .array(jKy())
            .max(256)
            .optional()
            .describe(
              "register_assets: cards to register in the Design System pane. Each path must be in the finalized plan. Run after write_files succeeds. Max 256 per call.",
            ),
          localDir: v
            .string()
            .min(1)
            .optional()
            .describe(
              "finalize_plan: directory the bundle was built into. write_files with localPath may only read files inside this directory. Defaults to the current working directory. Resolved to an absolute path and shown in the permission prompt.",
            ),
          counts: v
            .object({
              total: v.number().int().nonnegative(),
              bad: v.number().int().nonnegative(),
              thin: v.number().int().nonnegative(),
              variantsIdentical: v.number().int().nonnegative(),
              iterations: v.number().int().nonnegative(),
            })
            .optional()
            .describe(
              "report_validate: aggregate from the final .render-check.json \u2014 " +
                "counts only, no component names or paths.",
            ),
        }),
      )),
      (GKy = {
        list_projects: { present: [], nonEmpty: [] },
        get_project: { present: ["projectId"], nonEmpty: [] },
        list_files: { present: ["projectId"], nonEmpty: [] },
        get_file: { present: ["projectId", "path"], nonEmpty: [] },
        finalize_plan: {
          present: ["projectId", "writes", "deletes"],
          nonEmpty: [],
        },
        write_files: { present: ["projectId", "planId"], nonEmpty: ["files"] },
        delete_files: { present: ["projectId", "planId"], nonEmpty: ["paths"] },
        register_assets: {
          present: ["projectId", "planId"],
          nonEmpty: ["assets"],
        },
        unregister_assets: {
          present: ["projectId", "planId"],
          nonEmpty: ["paths"],
        },
        create_project: { present: ["name"], nonEmpty: [] },
        report_validate: { present: ["counts"], nonEmpty: [] },
      }));
    ((PIe = { notice: v.string().optional() }),
      (qKy = Se(() =>
        v.discriminatedUnion("method", [
          v.object({
            method: v.literal("list_projects"),
            ...PIe,
            projects: v.array(
              v.object({
                projectId: v.string(),
                name: v.string(),
                ownerDisplayName: v.string().optional(),
                isOwned: v.boolean().optional(),
                updatedAt: v.string().optional(),
              }),
            ),
          }),
          v.object({
            method: v.literal("get_project"),
            ...PIe,
            projectId: v.string(),
            name: v.string(),
            type: v.string().optional(),
            ownerDisplayName: v.string().optional(),
            isOwned: v.boolean().optional(),
            canEdit: v.boolean().optional(),
          }),
          v.object({
            method: v.literal("list_files"),
            ...PIe,
            paths: v.array(v.string()),
          }),
          v.object({
            method: v.literal("get_file"),
            ...PIe,
            path: v.string(),
            content: v.string(),
            contentType: v.string(),
            isBase64: v.boolean(),
            truncated: v.boolean(),
          }),
          v.object({
            method: v.literal("finalize_plan"),
            ...PIe,
            planId: v.string(),
            writes: v.array(v.string()),
            deletes: v.array(v.string()),
          }),
          v.object({
            method: v.literal("write_files"),
            ...PIe,
            written: v.number(),
          }),
          v.object({
            method: v.literal("delete_files"),
            ...PIe,
            deleted: v.number(),
          }),
          v.object({
            method: v.literal("register_assets"),
            ...PIe,
            registered: v.number(),
          }),
          v.object({
            method: v.literal("unregister_assets"),
            ...PIe,
            unregistered: v.number(),
          }),
          v.object({
            method: v.literal("create_project"),
            ...PIe,
            projectId: v.string(),
            name: v.string(),
          }),
          v.object({ method: v.literal("report_validate"), ...PIe }),
        ]),
      )));
    kKe = class kKe extends Error {
      constructor(e) {
        super(e);
        this.name = "DesignSyncPreconditionError";
      }
    };
    KKy = new Set(["default", "acceptEdits", "auto"]);
    JKy = Ui({
      name: Btn,
      searchHint:
        "sync local design system components to a claude.ai/design project",
      shouldDefer: !0,
      maxResultSizeChars: 300000,
      isEnabled() {
        return $2e();
      },
      async description() {
        return WTs;
      },
      async prompt() {
        return WTs;
      },
      get inputSchema() {
        return WKy();
      },
      get outputSchema() {
        return qKy();
      },
      isConcurrencySafe() {
        return !1;
      },
      isReadOnly(e) {
        return zKy(e.method);
      },
      isDestructive(e) {
        return (
          e.method === "write_files" ||
          e.method === "delete_files" ||
          e.method === "unregister_assets"
        );
      },
      userFacingName(e) {
        return `Design: ${K1s(e)}`;
      },
      getToolUseSummary(e) {
        return e?.method ? K1s(e) : null;
      },
      toAutoClassifierInput(e) {
        if (e.method === "finalize_plan") {
          let t = (r) => {
            let n = r ?? [],
              o = 50;
            if (n.length <= 50) return n.join(", ");
            return `${n.length} paths (too many to list here; the user's permission prompt shows the full list)`;
          };
          return `project ${e.projectId ?? "?"} from ${MIe.resolve(kt(), e.localDir ?? ".")}: write ${t(e.writes)}; delete ${t(e.deletes)}`;
        }
        if (e.method === "create_project")
          return `create project "${e.name ?? "?"}"`;
        return e.method;
      },
      renderToolUseMessage(e) {
        if (e.method === "finalize_plan") return QCd(e.projectId);
        return K1s(e);
      },
      async validateInput(e) {
        let t = VKy(e);
        if (t.length > 0)
          return {
            result: !1,
            message: `${e.method} requires: ${t.join(", ")}.`,
            errorCode: 1,
          };
        if (
          e.method === "finalize_plan" &&
          (e.writes?.length ?? 0) === 0 &&
          (e.deletes?.length ?? 0) === 0
        )
          return {
            result: !1,
            message: "finalize_plan needs at least one write or delete path.",
            errorCode: 1,
          };
        if (e.method === "write_files")
          for (let r of e.files ?? []) {
            let n = r.data !== void 0,
              o = r.localPath !== void 0;
            if (n === o)
              return {
                result: !1,
                message: `Each file needs exactly one of "data" or "localPath" (offending path: ${r.path}).`,
                errorCode: 1,
              };
            if (o && r.encoding !== void 0)
              return {
                result: !1,
                message: `"encoding" only applies to inline "data"; localPath files are encoded automatically (offending path: ${r.path}).`,
                errorCode: 1,
              };
          }
        return { result: !0 };
      },
      async checkPermissions(e, t) {
        let r = await tln(),
          n = { ...e, __consentBitShown: r, __consentAskCanReachUser: ZCd(t) },
          o = r !== null ? HKe(r) : null,
          i =
            z1s() && Rmr() && !W1s()
              ? "DesignSync needs design-system authorization for your claude.ai account. Approving opens your browser to authorize " +
                "access to your org's design-system projects \u2014 this session's " +
                "own authentication is not changed."
              : null,
          s =
            [o, i].filter(Boolean).join(`

`) || null;
        if (
          s &&
          e.method !== "finalize_plan" &&
          e.method !== "create_project" &&
          e.method !== "report_validate"
        )
          return {
            behavior: "ask",
            message: s,
            updatedInput: n,
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason:
                [
                  o
                    ? "design agent consent \u2014 approving records a server-side grant for Claude agents to write your design projects"
                    : null,
                  i
                    ? "design login \u2014 approving opens a browser OAuth consent and stores a design credential"
                    : null,
                ]
                  .filter(Boolean)
                  .join("; ") || "design credential prompt",
              classifierApprovable: !1,
            },
          };
        if (e.method === "finalize_plan") {
          let a = (e.writes ?? []).map(uL),
            l = (e.deletes ?? []).map(uL),
            c;
          try {
            c = await oxd(e.localDir);
          } catch (b) {
            return {
              behavior: "deny",
              message: `localDir does not exist or is not accessible: ${e.localDir ?? kt()} (${le(b)})`,
              decisionReason: {
                type: "safetyCheck",
                reason: "localDir not found",
                classifierApprovable: !1,
              },
            };
          }
          let u = a.filter(KLt),
            d = a.filter((b) => !KLt(b)),
            p = l.filter(KLt),
            f = l.filter((b) => !KLt(b)),
            m = await Promise.all(
              d.map(async (b) => {
                try {
                  return (await Jft.stat(MIe.resolve(c, b)), !0);
                } catch {
                  return !1;
                }
              }),
            ),
            g = d.filter((b, T) => !m[T]),
            E =
              d.length - g.length > 0 && g.length > 0
                ? `\u26A0 ${g.length} of ${d.length} literal write ${Et(d.length, "path")} not found under localDir \u2014 ` +
                  `expected if they use a different localPath or inline data, otherwise check for a typo: ${g.slice(0, 5).join(", ")}` +
                  (g.length > 5 ? `, \u2026 and ${g.length - 5} more` : "")
                : null;
          return {
            behavior: "ask",
            message: [
              s,
              `To project: ${QCd(e.projectId)}`,
              `From folder: ${c}`,
              d.length > 0
                ? `Upload ${d.length} ${Et(d.length, "file")}: ${d.join(", ")}`
                : null,
              u.length > 0 ? `Upload files matching: ${u.join(", ")}` : null,
              E,
              f.length > 0
                ? `Delete ${f.length} ${Et(f.length, "file")}: ${f.join(", ")}`
                : null,
              p.length > 0 ? `Delete files matching: ${p.join(", ")}` : null,
            ].filter((b) => b !== null).join(`
`),
            updatedInput: { ...n, localDir: c },
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason: s
                ? "Approving also grants Claude ongoing write access to your design projects."
                : "Review what will be uploaded before continuing.",
              classifierApprovable: !1,
            },
          };
        }
        if (e.method === "create_project")
          return {
            behavior: "ask",
            message: [
              s,
              `Create design-system project "${e.name ?? "?"}" on claude.ai/design. The new project will be visible to your whole org (server default \u2014 you can change this from the Share menu after creation).`,
            ].filter((a) => a !== null).join(`
`),
            updatedInput: n,
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason: s
                ? "Approving also grants Claude ongoing write access to your design projects."
                : "This creates a new project on your claude.ai account.",
              classifierApprovable: !1,
            },
          };
        return { behavior: "allow", updatedInput: n };
      },
      async call(e, t) {
        let r = t.abortController.signal;
        if (e.method === "report_validate")
          return { data: { method: "report_validate" } };
        let n = e.__consentBitShown ?? null,
          o = En(t),
          i = e.__consentAskCanReachUser ?? !1,
          s = i && ZCd(t),
          a = "";
        try {
          if (
            ((a = await YKy({
              signal: r,
              isNonInteractiveSession: t.options?.isNonInteractiveSession,
              permissionMode: o.mode,
              askReachesUserAtDecision: i,
            })),
            n !== null && s && e.method === "finalize_plan")
          )
            await Xft(n).catch((c) => {
              w(
                `Proactive design consent POST for finalize_plan failed (${le(c)}); the next RPC call's 403 intercept will retry.`,
              );
            });
          let l;
          try {
            if (
              ((l = await txd(e, a, r)),
              n !== null && e.method !== "finalize_plan")
            )
              pve(n, !0);
          } catch (c) {
            let u = XKy(c);
            if (u === null) {
              if (
                (c instanceof Imr ? c.body : null)?.error ===
                  "insufficient_scope" ||
                (c instanceof Imr && c.status === 401)
              )
                throw new kKe(
                  nxd("needs_design_login", {
                    isNonInteractiveSession: t.options?.isNonInteractiveSession,
                  }),
                );
              throw c;
            } else if (u !== n)
              throw (
                pve(u, !1),
                new kKe(
                  `${HKe(u)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`,
                )
              );
            else if (!s)
              throw (
                pve(u, !1),
                new kKe(
                  `${HKe(u)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`,
                )
              );
            else (await Xft(u), (l = await txd(e, a, r)));
          }
          return { data: l };
        } catch (l) {
          if (r.aborted) throw new tl();
          let c = LCd(le(l), a),
            u = l?.telemetryMessage,
            d = typeof u === "string" ? u : "DesignSync tool call failed";
          if (l instanceof kKe) throw oi(new kKe(c), d);
          throw oi(Error(c), d);
        }
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return { tool_use_id: t, type: "tool_result", content: Ie(e) };
      },
    });
    QKy = new Set([
      "html",
      "css",
      "js",
      "jsx",
      "mjs",
      "cjs",
      "ts",
      "tsx",
      "mts",
      "cts",
      "json",
      "svg",
      "xml",
      "md",
      "txt",
      "csv",
      "yaml",
      "yml",
      "toml",
    ]);
  });
