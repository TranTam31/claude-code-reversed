// Module: IYd (lines 583473-583495)
  var IYd = S(() => {
    pt();
    ((g5s = {
      type: "local",
      name: "mcp",
      supportsNonInteractive: !0,
      description: "Manage MCP servers",
      argumentHint: "[reconnect|enable|disable [<server>|all]]",
      isEnabled: () => yn(),
      get isHidden() {
        return !yn();
      },
      load: () => Promise.resolve().then(() => (HYd(), xYd)),
    }),
      (dI_ = {
        type: "local-jsx",
        name: "mcp",
        description: "Manage MCP servers",
        immediate: !0,
        argumentHint: "[reconnect <server>|enable|disable [<server>|all]]",
      }),
      (kYd = dI_));
  });
