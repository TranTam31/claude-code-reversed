// Module: Oxd (lines 483510-483766)
  var Oxd = S(() => {
    Vn();
    pt();
    Vu();
    Ss();
    st();
    Zt();
    p8e();
    Ods();
    Pds();
    Lds();
    ((Rxd = require("fs")),
      (F2e = require("fs/promises")),
      (U2e = require("path")),
      (xYy = Se(() =>
        v.strictObject({
          method: v.enum([
            "project_info",
            "project_read",
            "project_search",
            "project_write",
            "project_delete",
          ]),
          path: v
            .string()
            .min(1)
            .max(255)
            .optional()
            .describe(
              'project_read/project_write/project_delete: doc path. project_write: an existing path is replaced in place; a new bare filename (no "/") is namespaced to "claude/<name>".',
            ),
          content: v
            .string()
            .optional()
            .describe(
              "project_write: inline doc text. Mutually exclusive with local_path. Use local_path for anything you have on disk.",
            ),
          local_path: v
            .string()
            .min(1)
            .optional()
            .describe(
              "project_write: a file inside the working directory to upload. The " +
                "tool reads, encodes, and uploads directly \u2014 contents never enter " +
                "your context. Mutually exclusive with content.",
            ),
          present_to_user: v
            .boolean()
            .optional()
            .describe(
              "project_write: true marks this doc as the file the user needs to " +
                "see \u2014 the deliverable they asked for or must act on. Defaults to " +
                "false; leave it unset for routine saves, notes, and bulk writes.",
            ),
          query: v
            .string()
            .min(1)
            .optional()
            .describe("project_search: knowledge-base query"),
          n: v
            .number()
            .int()
            .min(1)
            .max(15)
            .optional()
            .describe("project_search: number of hits (default 5)"),
        }),
      )),
      (rln = { notice: v.string().optional() }),
      (HYy = Se(() =>
        v.object({
          knowledge_size: v.number(),
          max_knowledge_size: v.number(),
        }),
      )),
      (kYy = Se(() =>
        v.discriminatedUnion("method", [
          v.object({
            method: v.literal("project_info"),
            ...rln,
            name: v.string(),
            description: v.string(),
            instructions: v.string(),
            docs: v.array(
              v.object({ path: v.string(), created_at: v.string().nullable() }),
            ),
            files: v
              .array(
                v.object({
                  path: v.string(),
                  file_kind: v.string(),
                  created_at: v.string().nullable(),
                }),
              )
              .optional(),
            sync_sources: v
              .array(
                v.object({
                  type: v.string().nullable(),
                  config: v.record(v.string(), v.unknown()),
                }),
              )
              .optional(),
            knowledge: HYy(),
          }),
          v.object({
            method: v.literal("project_read"),
            ...rln,
            path: v.string(),
            file_kind: v.string().optional(),
            content: v.string().optional(),
            local_file: v.string().optional(),
            created_at: v.string().nullable(),
          }),
          v.object({
            method: v.literal("project_search"),
            ...rln,
            rag: v.boolean(),
            hits: v
              .array(
                v.object({
                  name: v.string().optional(),
                  doc_uuid: v.string().optional(),
                  text: v.string().optional(),
                }),
              )
              .optional(),
            docs: v.array(v.string()).optional(),
          }),
          v.object({
            method: v.literal("project_write"),
            ...rln,
            path: v.string(),
            doc_uuid: v.string(),
            replaced: v.boolean(),
            present_to_user: v.boolean().optional(),
            local_path: v.string().optional(),
          }),
          v.object({
            method: v.literal("project_delete"),
            ...rln,
            path: v.string(),
            deleted: v.boolean(),
          }),
        ]),
      )),
      (IYy = {
        project_info: [],
        project_read: ["path"],
        project_search: ["query"],
        project_write: ["path"],
        project_delete: ["path"],
      }));
    Uz = class Uz extends Error {
      constructor(e) {
        super(e);
        this.name = "ProjectsPreconditionError";
      }
    };
    LYy = Ui({
      name: Txd,
      searchHint: "read and write the session's attached claude.ai project",
      maxResultSizeChars: 300000,
      persistenceThresholdCeiling: 300000,
      isEnabled() {
        return ns("allow_projects_tool") && Cxd() !== void 0;
      },
      async description() {
        return nNs;
      },
      async prompt() {
        return nNs;
      },
      get inputSchema() {
        return xYy();
      },
      get outputSchema() {
        return kYy();
      },
      isConcurrencySafe() {
        return !1;
      },
      isReadOnly(e) {
        return RYy(e.method);
      },
      isDestructive(e) {
        return e.method === "project_write" || e.method === "project_delete";
      },
      userFacingName(e) {
        return `Project: ${pIo(e)}`;
      },
      getToolUseSummary(e) {
        return e?.method ? pIo(e) : null;
      },
      toAutoClassifierInput(e) {
        return pIo(e);
      },
      renderToolUseMessage(e) {
        return pIo(e);
      },
      coerceInput: wxd,
      async validateInput(e) {
        let t = IYy[e.method].filter((r) => e[r] === void 0);
        if (t.length > 0)
          return {
            result: !1,
            message: `${e.method} requires: ${t.join(", ")}.`,
            errorCode: 1,
          };
        if (e.method === "project_write") {
          let r = e.content !== void 0,
            n = e.local_path !== void 0;
          if (r === n)
            return {
              result: !1,
              message:
                'project_write requires exactly one of "content" or "local_path".',
              errorCode: 1,
            };
        }
        return { result: !0 };
      },
      async call(e, t) {
        let r = t.abortController.signal,
          n = Cxd();
        if (!n)
          throw new Uz(
            "No project attached to this session. Project tools are available when the session is started inside a claude.ai Project.",
          );
        let o = "";
        try {
          let i = await MYy();
          o = i.accessToken;
          let s = await BYy(e, n, r);
          return { data: i.expanded ? { ...s, notice: PYy } : s };
        } catch (i) {
          if (r.aborted) throw new tl();
          let s = OLu(le(i), o);
          if (i instanceof Uz) throw new Uz(s);
          let a = Ut(i),
            l = Error(s);
          if (
            (ti(i) && a !== "EACCES" && a !== "EPERM") ||
            Mue(i) ||
            a === "ENOSPC" ||
            a === "EDQUOT" ||
            a === "EIO"
          )
            l.code = a;
          throw l;
        }
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return { tool_use_id: t, type: "tool_result", content: Ie(e) };
      },
    });
  });
