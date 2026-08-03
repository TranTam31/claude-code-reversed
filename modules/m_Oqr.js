// Module: OQr (lines 313329-313432)
  var OQr = S(() => {
    Vn();
    Bar();
    Ss();
    st();
    Ir();
    Zt();
    Tut();
    ((Hmy = Se(() =>
      v.object({
        server: v
          .string()
          .optional()
          .describe("Optional server name to filter resources by"),
      }),
    )),
      (kmy = Se(() =>
        v.array(
          v.object({
            uri: v.string().describe("Resource URI"),
            name: v.string().describe("Resource name"),
            mimeType: v
              .string()
              .optional()
              .describe("MIME type of the resource"),
            description: v.string().optional().describe("Resource description"),
            server: v.string().describe("Server that provides this resource"),
          }),
        ),
      )),
      (sV = Ui({
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return e.server ?? "";
        },
        shouldDefer: !0,
        name: bSe,
        aliases: ["ListMcpResources"],
        searchHint: "list resources from connected MCP servers",
        maxResultSizeChars: 1e5,
        async description() {
          return XDu;
        },
        async prompt() {
          return JDu;
        },
        get inputSchema() {
          return Hmy();
        },
        get outputSchema() {
          return kmy();
        },
        async call(e, { options: { mcpClients: t } }) {
          let { server: r } = e,
            n = r ? pLt(t, r) : t;
          if (r && n.length === 0)
            throw new Dr(
              `Server "${r}" not found. Available servers: ${t.map((i) => i.name).join(", ")}`,
              "MCP server not found",
            );
          return {
            data: (
              await Promise.all(
                n.map(async (i) => {
                  if (i.type !== "connected") return [];
                  let { ensureConnectedClient: s, fetchResourcesForClient: a } =
                    (j_(), en(B_)).mcpClientModule();
                  try {
                    let l = await s(i);
                    return await a(l);
                  } catch (l) {
                    return (Fl(i.name, le(l)), []);
                  }
                }),
              )
            ).flat(),
          };
        },
        renderToolUseMessage(e) {
          return e.server
            ? `List MCP resources from server "${e.server}"`
            : "List all MCP resources";
        },
        userFacingName: () => "listMcpResources",
        isResultTruncated(e, { columns: t }) {
          return uz(Ie(e, null, 2), t);
        },
        mapToolResultToToolResultBlockParam(e, t) {
          if (!e || e.length === 0)
            return {
              tool_use_id: t,
              type: "tool_result",
              content:
                "No resources found. MCP servers may still provide tools even if they have no resources.",
            };
          return { tool_use_id: t, type: "tool_result", content: Ie(e) };
        },
      })));
  });
