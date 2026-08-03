// Module: F7d (lines 585987-586001)
  var F7d = S(() => {
    Vu();
    Eo();
    ((dR_ = {
      type: "local-jsx",
      name: "teleport",
      description: "Resume a Claude Code session from claude.ai",
      aliases: ["tp"],
      isEnabled: () => ii() && ns("allow_remote_sessions"),
      get isHidden() {
        return !ii() || !ns("allow_remote_sessions");
      },
    }),
      ($7d = dR_));
  });
