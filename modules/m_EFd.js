// Module: EFd (lines 532973-532995)
  var EFd = S(() => {
    kFt();
    Zr();
    Qr();
    fMo();
    IBs();
    ((Bc_ = {
      type: "prompt",
      name: "init",
      get description() {
        return Yt(process.env.CLAUDE_CODE_NEW_INIT)
          ? "Initialize new CLAUDE.md file(s) and optional skills/hooks with codebase documentation"
          : "Initialize a new CLAUDE.md file with codebase documentation";
      },
      contentLength: 0,
      progressMessage: "analyzing your codebase",
      source: "builtin",
      async getPromptForCommand() {
        return (await ogr(), [{ type: "text", text: $c_() ? Uc_() : Fc_() }]);
      },
    }),
      (SFd = Bc_));
  });
