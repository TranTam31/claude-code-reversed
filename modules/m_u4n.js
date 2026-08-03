// Module: u4n (lines 28876-28887)
  var u4n = S(() => {
    sRl();
    Wi();
    ((QUr = require("path")), (l4n = FCi("claude-cli")));
    dCt = {
      baseLogs: () => QUr.join(l4n.cache, c4n(Xt().cwd())),
      errors: () => QUr.join(l4n.cache, c4n(Xt().cwd()), "errors"),
      messages: () => QUr.join(l4n.cache, c4n(Xt().cwd()), "messages"),
      mcpLogs: (e) =>
        QUr.join(l4n.cache, c4n(Xt().cwd()), `mcp-logs-${uRl(e)}`),
    };
  });
