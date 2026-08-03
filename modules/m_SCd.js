// Module: SCd (lines 479037-479193)
  var SCd = S(() => {
    Vn();
    pt();
    Zr();
    vt();
    Ss();
    n_();
    Qr();
    ts();
    jp();
    Pr();
    g7r();
    pte();
    ((vKy = Se(() =>
      v.strictObject({
        files: v
          .preprocess(
            (e) => (typeof e === "string" ? [e] : e),
            v.array(v.string()).min(1),
          )
          .describe(
            "File paths (absolute or relative to cwd) to send to the user. Always pass an array, even for a single file.",
          ),
        caption: v
          .string()
          .optional()
          .describe("Optional short caption for the file(s)."),
        status: v
          .enum(["normal", "proactive"])
          .describe(
            "Use 'proactive' when you're surfacing a file the user hasn't asked for and needs to see now \u2014 a generated artifact, a completed report. Use 'normal' when replying to something the user just said.",
          ),
        display: v
          .enum(["render", "attach"])
          .optional()
          .describe(
            "How the client should present the file. 'render' opens it inline in the side panel (for HTML, SVG, Mermaid, images, PDFs \u2014 anything the user wants to look at now). 'attach' shows a download card only, no inline preview (for deliverables the user will save and open elsewhere). Omit to let the client decide by file type \u2014 today that means renderable types render and everything else attaches, same as before this parameter existed.",
          ),
      }),
    )),
      (AKy = Se(() =>
        v.object({
          caption: v.string().optional(),
          display: v.enum(["render", "attach"]).optional(),
          attachments: v
            .array(
              v.object({
                path: v.string(),
                size: v.number(),
                isImage: v.boolean(),
                file_uuid: v.string().optional(),
                media_type: v.string().optional(),
                pathValidated: v.boolean().optional(),
                upload_error: v.string().optional(),
              }),
            )
            .describe("Resolved file metadata"),
        }),
      )),
      (wKy = Ui({
        name: ibe,
        searchHint:
          "deliver files (screenshots, reports, artifacts) to the user",
        briefStandalone: !0,
        maxResultSizeChars: 1e5,
        userFacingName() {
          return "";
        },
        get inputSchema() {
          return vKy();
        },
        get outputSchema() {
          return AKy();
        },
        isEnabled() {
          if (kn() !== "firstParty" || ca()) return !1;
          if (!Ke("tengu_send_user_file", !0)) return !1;
          return (
            ($x() ||
              !!process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE ||
              Yt(process.env.CLAUDE_CODE_REMOTE) ||
              jOe()) &&
            !eNt()
          );
        },
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return e.caption ?? `[${e.files?.length ?? 0} file(s)]`;
        },
        async validateInput({ files: e }, t) {
          return Ddo(e);
        },
        async description() {
          return Q7i;
        },
        async prompt() {
          return Z7i;
        },
        mapToolResultToToolResultBlockParam(e, t) {
          let r = e.attachments.filter((s) => s.upload_error !== void 0),
            n = e.attachments.filter((s) => s.upload_error === void 0),
            o = n
              .filter((s) => s.file_uuid !== void 0)
              .map((s) => `  ${s.path} \u2192 file_uuid: ${s.file_uuid}`),
            i = [];
          if (n.length > 0)
            i.push(
              `${n.length} ${Et(n.length, "file")} delivered to user.` +
                (o.length > 0
                  ? `
${o.join(`
`)}`
                  : ""),
            );
          if (r.length > 0) {
            let s = (a) => `${(a / 1048576).toFixed(1)} MiB`;
            i.push(
              `${r.length} ${Et(r.length, "file")} could NOT be delivered to the user:
` +
                r.map((a) => `  ${a.path} (${s(a.size)}): ${a.upload_error}`)
                  .join(`
`) +
                `
Tell the user the ${Et(r.length, "file was", "files were")} not delivered and why.`,
            );
          }
          return {
            tool_use_id: t,
            type: "tool_result",
            content: i.join(`
`),
          };
        },
        renderToolUseMessage() {
          return "";
        },
        async call({ files: e, caption: t, status: r, display: n }, o) {
          O("tengu_send_user_file", {
            proactive: r === "proactive",
            file_count: e.length,
            display_set: n !== void 0,
            display_attach: n === "attach",
          });
          let i = o.getAppState(),
            s = await Pdo(e, {
              replBridgeEnabled: i.replBridgeEnabled,
              signal: o.abortController.signal,
            });
          return { data: { caption: t, display: n, attachments: s } };
        },
      })));
  });
