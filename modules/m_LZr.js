// Module: LZr (lines 334563-334726)
  var LZr = S(() => {
    Vn();
    uV();
    Bar();
    Ss();
    Ir();
    Xze();
    H$e();
    Zt();
    hpe();
    Tut();
    ict();
    ((m_y = Se(() =>
      v.object({
        server: v.string().describe("The MCP server name"),
        uri: v.string().describe("The resource URI to read"),
      }),
    )),
      (h_y = Se(() =>
        v.object({
          contents: v.array(
            v.object({
              uri: v.string().describe("Resource URI"),
              mimeType: v
                .string()
                .optional()
                .describe("MIME type of the content"),
              text: v
                .string()
                .optional()
                .describe("Text content of the resource"),
              blobSavedTo: v
                .string()
                .optional()
                .describe("Path where binary blob content was saved"),
            }),
          ),
          error: v
            .string()
            .optional()
            .describe(
              "Human-readable error when the server could not read the resource",
            ),
        }),
      )),
      (dV = Ui({
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
        name: Zie,
        aliases: ["ReadMcpResource"],
        searchHint: "read a specific MCP resource by URI",
        maxResultSizeChars: 1e5,
        async description() {
          return tPu;
        },
        async prompt() {
          return rPu;
        },
        get inputSchema() {
          return m_y();
        },
        get outputSchema() {
          return h_y();
        },
        async call(e, { options: { mcpClients: t } }) {
          let { server: r, uri: n } = e,
            o = Qgo(t, r);
          if (o.config.pluginSource)
            (T$(o.config.pluginSource), j8(o.config.pluginSource, "mcp"));
          let i = await vqu().ensureConnectedClient(o),
            s;
          try {
            s = await Nlr(i, n);
          } catch (l) {
            let c = p_y();
            if (c.isMcpMethodNotFoundError(l))
              return (
                Fl(
                  o.name,
                  "resources/read returned -32601 MethodNotFound \u2014 server advertises resources but does not implement reads",
                ),
                {
                  data: {
                    contents: [],
                    error: `Server "${o.name}" advertises resource support but does not implement resource reads.`,
                  },
                }
              );
            if (c.isMcpResourceNotFoundError(l)) {
              (Fl(
                o.name,
                `resources/read returned ${c.getMcpErrorCode(l)} \u2014 resource not found`,
              ),
                vqu().invalidateMcpResourceListCaches(o));
              let u = f_y().serverDeclaresDirectoryRead(i.capabilities)
                ? ` If the URI is a directory resource, use ${Qie} instead.`
                : "";
              return {
                data: {
                  contents: [],
                  error: `Resource not found: ${n} \u2014 it may have been deleted or the URI is stale. Re-run ${bSe} to refresh.${u}`,
                },
              };
            }
            throw l;
          }
          return {
            data: {
              contents: await Promise.all(
                s.contents.map(async (l, c) => {
                  if ("text" in l)
                    return { uri: l.uri, mimeType: l.mimeType, text: l.text };
                  if (!("blob" in l) || typeof l.blob !== "string")
                    return { uri: l.uri, mimeType: l.mimeType };
                  let u = `mcp-resource-${Date.now()}-${c}-${Math.random().toString(36).slice(2, 8)}`,
                    d = await Jee(Buffer.from(l.blob, "base64"), l.mimeType, u);
                  if ("error" in d)
                    return {
                      uri: l.uri,
                      mimeType: l.mimeType,
                      text: `Binary content could not be saved to disk: ${d.error}`,
                    };
                  return {
                    uri: l.uri,
                    mimeType: l.mimeType,
                    blobSavedTo: d.filepath,
                    text: Lke(
                      d.filepath,
                      l.mimeType,
                      d.size,
                      `[Resource from ${o.name} at ${l.uri}] `,
                    ),
                  };
                }),
              ),
            },
          };
        },
        renderToolUseMessage(e) {
          if (!e.uri || !e.server) return null;
          return `Read resource "${e.uri}" from server "${e.server}"`;
        },
        userFacingName() {
          return "readMcpResource";
        },
        isResultTruncated(e, { columns: t }) {
          if (e.error) return uz(e.error, t);
          return uz(Ie(e, null, 2), t);
        },
        mapToolResultToToolResultBlockParam(e, t) {
          if (e.error)
            return { tool_use_id: t, type: "tool_result", content: e.error };
          return { tool_use_id: t, type: "tool_result", content: Ie(e) };
        },
      })));
  });
