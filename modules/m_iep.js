// Module: iep (lines 593035-593052)
  var iep = S(() => {
    Zr();
    Vu();
    ((wM_ = {
      type: "local-jsx",
      name: "web-setup",
      description: "Set up Claude Code on the web with your GitHub account",
      availability: ["claude-ai"],
      isEnabled: () =>
        Ke("tengu_cobalt_lantern", !1) &&
        ns("allow_remote_sessions") &&
        ns("allow_quick_web_setup"),
      get isHidden() {
        return !ns("allow_remote_sessions") || !ns("allow_quick_web_setup");
      },
    }),
      (TM_ = wM_));
  });
