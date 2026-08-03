// Module: MZr (lines 334280-334429)
  var MZr = S(() => {
    Vn();
    Pse();
    Bar();
    Ss();
    Ir();
    h1();
    H$e();
    Zt();
    Pr();
    hpe();
    Tut();
    ict();
    ((u_y = Se(() =>
      v.object({
        server: v.string().describe("The MCP server name"),
        uri: v.string().describe("The directory resource URI to list"),
      }),
    )),
      (d_y = Se(() =>
        v.object({
          resources: v
            .array(
              v.object({
                uri: v.string().describe("Child resource URI"),
                name: v.string().describe("Child resource name"),
                mimeType: v.string().optional().describe("Child MIME type"),
              }),
            )
            .describe(
              `Direct children of the directory resource. Subdirectories appear with mimeType "${z7r}".`,
            ),
          error: v
            .string()
            .optional()
            .describe(
              "Human-readable error when the server could not list the directory",
            ),
        }),
      )),
      (cfe = Ui({
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return `${e.server} ${e.uri}`;
        },
        shouldDefer: !0,
        name: Qie,
        aliases: ["ReadMcpResourceDir"],
        searchHint: "list the children of an MCP directory resource",
        maxResultSizeChars: 1e5,
        async description() {
          return ZDu;
        },
        async prompt() {
          return ePu;
        },
        get inputSchema() {
          return u_y();
        },
        get outputSchema() {
          return d_y();
        },
        async call(e, { options: { mcpClients: t } }) {
          let { server: r, uri: n } = e,
            o = Qgo(t, r);
          if (!Fw())
            return {
              data: {
                resources: [],
                error: "Directory listing is not enabled in this build.",
              },
            };
          if (!gqu().serverDeclaresDirectoryRead(o.capabilities))
            return {
              data: {
                resources: [],
                error: `Server "${o.name}" does not support directory listing.`,
              },
            };
          if (o.config.pluginSource)
            (T$(o.config.pluginSource), j8(o.config.pluginSource, "mcp"));
          let i = await c_y().ensureConnectedClient(o),
            s;
          try {
            s = await gqu().readMcpDirectory(i, n);
          } catch (l) {
            let c = l_y();
            if (c.isMcpNotADirectoryError(l))
              return (
                Fl(
                  o.name,
                  `resources/directory/read returned ${c.getMcpErrorCode(l)} \u2014 not a directory`,
                ),
                {
                  data: {
                    resources: [],
                    error: `Not a directory resource: ${n}. If it is a file resource, use ${Zie} instead.`,
                  },
                }
              );
            throw l;
          }
          return {
            data: {
              resources: s.map((l) => ({
                uri: QY(l.uri),
                name: u4(l.name),
                mimeType: l.mimeType !== void 0 ? u4(l.mimeType) : void 0,
              })),
            },
          };
        },
        renderToolUseMessage(e) {
          if (!e.uri || !e.server) return null;
          return `List directory resource "${e.uri}" from server "${e.server}"`;
        },
        userFacingName() {
          return "readMcpResourceDir";
        },
        isResultTruncated(e, { columns: t }) {
          if (e.error) return uz(e.error, t);
          return uz(Ie(e, null, 2), t);
        },
        mapToolResultToToolResultBlockParam(e, t) {
          if (e.error)
            return { tool_use_id: t, type: "tool_result", content: e.error };
          let r = e.resources.map(
              (o) => `${o.name}${o.mimeType === z7r ? "/" : ""}`,
            ).join(`
`),
            n =
              e.resources.length > 0
                ? `Directory listing (${e.resources.length} ${Et(e.resources.length, "entry", "entries")}):
${r}`
                : "Directory is empty.";
          return {
            tool_use_id: t,
            type: "tool_result",
            content: `${n}

${Ie(e)}`,
          };
        },
      })));
  });
