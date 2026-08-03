// Module: Fwd (lines 473281-473337)
  var Fwd = S(() => {
    Vn();
    Ss();
    ((Tzy = Se(() => v.strictObject({}))),
      (ll0 = Ui({
        name: $wd,
        maxResultSizeChars: 1e5,
        async description() {
          return "Test tool that always asks for permission";
        },
        async prompt() {
          return "Test tool that always asks for permission before executing. Used for end-to-end testing.";
        },
        get inputSchema() {
          return Tzy();
        },
        userFacingName() {
          return "TestingPermission";
        },
        isEnabled() {
          return !1;
        },
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        async checkPermissions() {
          return { behavior: "ask", message: "Run test?" };
        },
        renderToolUseMessage() {
          return null;
        },
        renderToolUseProgressMessage() {
          return null;
        },
        renderToolUseQueuedMessage() {
          return null;
        },
        renderToolUseRejectedMessage() {
          return null;
        },
        renderToolResultMessage() {
          return null;
        },
        renderToolUseErrorMessage() {
          return null;
        },
        async call() {
          return { data: `${$wd} executed successfully` };
        },
        mapToolResultToToolResultBlockParam(e, t) {
          return { type: "tool_result", content: String(e), tool_use_id: t };
        },
      })));
  });
