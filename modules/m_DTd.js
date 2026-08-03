// Module: DTd (lines 475126-475293)
  var DTd = S(() => {
    Vn();
    pt();
    I0();
    iR();
    t1s();
    jft();
    Bar();
    Ss();
    jl();
    st();
    Zt();
    ((t9y = Se(() =>
      v.object({
        server: v
          .string()
          .optional()
          .describe(
            "Optional server name: refresh only this server. Omit to refresh all connected servers.",
          ),
      }),
    )),
      (r9y = Se(() =>
        v.array(
          v.object({
            server: v.string().describe("Server name"),
            status: v
              .enum(["refreshed", "error", "not_connected"])
              .describe(
                "refreshed: tool list re-queried and applied. error: the re-query failed and the previous tool set was kept. not_connected: the server has no live connection to query (this tool never dials).",
              ),
            toolCount: v
              .number()
              .optional()
              .describe("Number of tools now available from this server"),
            added: v
              .array(v.string())
              .optional()
              .describe("Tool names this refresh added"),
            removed: v
              .array(v.string())
              .optional()
              .describe("Tool names this refresh removed"),
            error: v
              .string()
              .optional()
              .describe("Why the refresh failed or the server was unavailable"),
          }),
        ),
      )),
      (r1s = Ui({
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return e.server ?? "";
        },
        name: Dpe,
        searchHint:
          "refresh or re-sync tool lists from connected MCP servers, recover missing device or server tools",
        maxResultSizeChars: 50000,
        async description() {
          return pMu;
        },
        async prompt() {
          return fMu;
        },
        get inputSchema() {
          return t9y();
        },
        get outputSchema() {
          return r9y();
        },
        isEnabled() {
          let e = qGe();
          return e !== void 0 && e.length > 0;
        },
        async call(e, t) {
          let r = d$t(r1s, t, e);
          if (r.denyMessage)
            throw new Dr(
              r.denyMessage,
              "Blocked by the web search / connector isolation policy",
            );
          let {
              options: { mcpClients: n, tools: o },
            } = t,
            { server: i } = e,
            s = i ? pLt(n, i) : n,
            { filterToolsByDenyRules: a } = await Promise.resolve().then(
              () => (r2(), PTd),
            ),
            l = En(t);
          if (i && s.length === 0)
            throw new Dr(
              `Server "${i}" not found. Available servers: ${n.map((u) => u.name).join(", ")}`,
              "MCP server not found",
            );
          return {
            data: await Promise.all(
              s.map(async (u) => {
                if (u.type !== "connected")
                  return {
                    server: u.name,
                    status: "not_connected",
                    error: `server connection state is "${u.type}" \u2014 this tool only re-reads tool lists over live connections and never dials`,
                  };
                let d = Yx(u.name),
                  p = new Set(
                    o
                      .filter((E) => hz(E, u.name, d))
                      .map((E) => E.name)
                      .filter((E) => typeof E === "string"),
                  ),
                  f = !1,
                  m = await $ko(u, (E, A) => {
                    f = !p$r(E, A);
                  });
                if (m.status === "kept-previous")
                  return {
                    server: u.name,
                    status: "error",
                    error:
                      m.error ??
                      "tools/list failed; the previous tool set was kept",
                  };
                if (f)
                  return {
                    server: u.name,
                    status: "error",
                    error:
                      "refreshed the server, but the live tool pool was not updated \u2014 the server may have been removed or disconnected while the refresh was in flight, or its tools are not managed in this session mode; if it is still configured, the refreshed list applies on the next pool rebuild",
                  };
                let y = a(m.newTools, l)
                    .map((E) => E.name)
                    .filter((E) => typeof E === "string"),
                  _ = new Set(y);
                return {
                  server: u.name,
                  status: "refreshed",
                  toolCount: y.length,
                  added: y.filter((E) => !p.has(E)),
                  removed: [...p].filter((E) => !_.has(E)),
                };
              }),
            ),
          };
        },
        renderToolUseMessage(e) {
          return e.server
            ? `Refresh MCP tools from server "${e.server}"`
            : "Refresh all MCP tool lists";
        },
        userFacingName: () => "refreshMcpTools",
        mapToolResultToToolResultBlockParam(e, t) {
          if (!e || e.length === 0)
            return {
              tool_use_id: t,
              type: "tool_result",
              content: "No MCP servers to refresh.",
            };
          return { tool_use_id: t, type: "tool_result", content: Ie(e) };
        },
      })));
  });
