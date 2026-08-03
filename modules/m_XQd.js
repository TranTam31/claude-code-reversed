// Module: XQd (lines 591029-591041)
  var XQd = S(() => {
    Vu();
    Eo();
    YQd = {
      type: "local-jsx",
      name: "remote-env",
      description: "Choose the default environment for cloud agents",
      isEnabled: () => ii() && ns("allow_remote_sessions"),
      get isHidden() {
        return !ii() || !ns("allow_remote_sessions");
      },
    };
  });
