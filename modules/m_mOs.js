// Module: mOs (lines 467785-467805)
  var mOs = S(() => {
    Ge();
    HSo();
    Yqy = {
      name: "MCP Task",
      type: "mcp_task",
      async kill(e, t) {
        let r = t.get(e);
        if (r?.type === "mcp_task") r.abortController?.abort();
        (t.update(e, (n) => ({
          ...n,
          status: "killed",
          endTime: Date.now(),
          notified: !0,
        })),
          Acr(e).catch((n) =>
            w(`McpTask.kill deleteMcpTaskMetadata: ${String(n)}`),
          ));
      },
    };
  });
