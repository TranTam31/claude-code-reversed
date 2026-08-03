// Module: x_s (lines 313564-313634)
  var x_s = S(() => {
    Vn();
    Ss();
    hLt();
    Tut();
    em();
    Zt();
    Pr();
    ((Lmy = Se(() => v.object({}).passthrough())),
      (Omy = Se(() =>
        v
          .union([
            v.string(),
            v.array(v.object({ type: v.string() }).passthrough()),
            v.undefined(),
          ])
          .describe("MCP tool execution result"),
      )),
      (Gar = Ui({
        isMcp: !0,
        isOpenWorld() {
          return !1;
        },
        name: "mcp",
        uiTableKey: lyo,
        maxResultSizeChars: 1e5,
        async description() {
          return vGu;
        },
        async prompt() {
          return EGu;
        },
        get inputSchema() {
          return Lmy();
        },
        get outputSchema() {
          return Omy();
        },
        async call() {
          return { data: "" };
        },
        async checkPermissions() {
          return {
            behavior: "passthrough",
            message: "MCPTool requires permission.",
          };
        },
        renderToolUseMessage(e, { verbose: t }) {
          if (Object.keys(e).length === 0) return "";
          let r = wCe(e);
          if (r !== null) return r;
          return Object.entries(e)
            .map(([n, o]) => {
              let i = Ie(o);
              return `${n}: ${i}`;
            })
            .join(", ");
        },
        userFacingName: () => "mcp",
        isResultTruncated(e, t) {
          let r = t?.columns;
          if (typeof e === "string") return uz(e, r);
          if (Array.isArray(e))
            return e.some((n) => n.type === "text" && uz(n.text, r));
          return !1;
        },
        mapToolResultToToolResultBlockParam(e, t) {
          return { tool_use_id: t, type: "tool_result", content: OFe(e) };
        },
      })));
  });
