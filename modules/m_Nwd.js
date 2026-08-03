// Module: Nwd (lines 473208-473277)
  var Nwd = S(() => {
    Vn();
    pt();
    Ss();
    F$();
    wvo();
    Gft();
    Lwd();
    ((Azy = Se(() =>
      v.strictObject({ todos: zdt().describe("The updated todo list") }),
    )),
      (wzy = Se(() =>
        v.object({
          oldTodos: zdt().describe("The todo list before the update"),
          newTodos: zdt().describe("The todo list after the update"),
        }),
      )),
      (Owd = Ui({
        name: Uj,
        searchHint: "manage the session task checklist",
        maxResultSizeChars: 1e5,
        strict: !0,
        async description() {
          return Mwd;
        },
        async prompt({ model: e }) {
          return Pwd(e);
        },
        get inputSchema() {
          return Azy();
        },
        get outputSchema() {
          return wzy();
        },
        userFacingName() {
          return "";
        },
        shouldDefer: !0,
        isEnabled() {
          return !nP() && !vte();
        },
        toAutoClassifierInput(e) {
          return `${e.todos.length} items`;
        },
        async checkPermissions(e) {
          return { behavior: "allow", updatedInput: e };
        },
        renderToolUseMessage() {
          return null;
        },
        async call({ todos: e }, t) {
          let r = t.getAppState(),
            n = t.agentId ?? Ht(),
            o = r.todos[n] ?? [],
            s = e.every((a) => a.status === "completed") ? [] : e;
          return (
            t.setAppState((a) => ({ ...a, todos: { ...a.todos, [n]: s } })),
            { data: { oldTodos: o, newTodos: e } }
          );
        },
        mapToolResultToToolResultBlockParam(e, t) {
          return {
            tool_use_id: t,
            type: "tool_result",
            content:
              "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable",
          };
        },
      })));
  });
