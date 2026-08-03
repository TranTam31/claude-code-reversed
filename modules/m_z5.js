// Module: Z5 (lines 272591-272652)
  var Z5 = S(() => {
    Vn();
    vt();
    Ss();
    Ge();
    st();
    Zt();
    Bus();
    ((sMu = x(wjn(), 1)),
      (aty = Se(() => v.object({}).passthrough())),
      (lty = Se(() => v.string().describe("Structured output tool result"))));
    ((jus = Ui({
      isMcp: !1,
      isEnabled() {
        return !0;
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
      },
      isOpenWorld() {
        return !1;
      },
      name: Sg,
      searchHint: "return the final response as structured JSON",
      maxResultSizeChars: 1e5,
      async description() {
        return "Return structured output in the requested format";
      },
      async prompt() {
        return "Use this tool to return your final response in the requested structured format. You MUST call this tool exactly once at the end of your response to provide the structured output.";
      },
      get inputSchema() {
        return aty();
      },
      get outputSchema() {
        return lty();
      },
      async call(e) {
        return {
          data: "Structured output provided successfully",
          structured_output: e,
          endsTurn: !0,
        };
      },
      async checkPermissions(e) {
        return { behavior: "allow", updatedInput: e };
      },
      renderToolUseMessage(e) {
        let t = Object.keys(e);
        if (t.length === 0) return null;
        if (t.length <= 3) return t.map((r) => `${r}: ${Ie(e[r])}`).join(", ");
        return `${t.length} fields: ${t.slice(0, 3).join(", ")}\u2026`;
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return { tool_use_id: t, type: "tool_result", content: e };
      },
    })),
      (iMu = new WeakMap()));
  });
