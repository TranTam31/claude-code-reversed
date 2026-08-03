// Module: Dwd (lines 472939-473001)
  var Dwd = S(() => {
    Vn();
    Ss();
    Pr();
    Iwd();
    ((Szy = Se(() =>
      v.object({
        count: v.number().describe("Number of findings reported"),
        level: v
          .enum(["low", "medium", "high", "xhigh", "max"])
          .optional()
          .describe("Effort level the review ran at"),
        findings: v.array(BOs()).describe("Echoed for the result body"),
      }),
    )),
      (Rwd = Ui({
        name: o2,
        searchHint: "report code-review findings as a structured list",
        maxResultSizeChars: 256,
        strict: !0,
        async description() {
          return UOs;
        },
        async prompt() {
          return UOs;
        },
        get inputSchema() {
          return kwd();
        },
        get outputSchema() {
          return Szy();
        },
        isReadOnly() {
          return !0;
        },
        isConcurrencySafe() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return `${e.findings.length} findings`;
        },
        userFacingName() {
          return "Code review";
        },
        renderToolUseMessage(e) {
          let t = e.findings?.length ?? 0;
          return `${e.level ?? "review"} \xB7 ${t} ${Et(t, "finding")}`;
        },
        async call({ findings: e, level: t }) {
          return { data: { count: e.length, level: t, findings: e } };
        },
        mapToolResultToToolResultBlockParam({ count: e }, t) {
          return {
            tool_use_id: t,
            type: "tool_result",
            content:
              e === 0
                ? "No findings reported."
                : `${e} ${Et(e, "finding")} reported.`,
          };
        },
      })));
  });
