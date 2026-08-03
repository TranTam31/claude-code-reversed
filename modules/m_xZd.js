// Module: xZd (lines 591933-591969)
  var xZd = S(() => {
    mh();
    Qr();
    ((qP_ = {
      type: "prompt",
      description: "Set up Claude Code's status line UI",
      contentLength: 0,
      aliases: [],
      name: "statusline",
      progressMessage: "setting up statusLine",
      allowedTools: [Vo, "Read(~/**)", "Edit(~/.claude/settings.json)"],
      source: "builtin",
      disableNonInteractive: !0,
      disableModelInvocation: !0,
      requires: { workspace: !0 },
      async getPromptForCommand(e) {
        if (Vl())
          return [
            {
              type: "text",
              text: `Tell the user: /statusline is unavailable in safe mode. The setup flow saves the status line to ~/.claude/settings.json, but safe mode only displays the managed (policy) status line, so the result would never render. To set up a status line, ${v0()} and run /statusline again.

Do not run the statusline-setup agent and do not edit any settings files. Simply inform the user.`,
            },
          ];
        let t =
          e.trim() || "Configure my statusLine from my shell PS1 configuration";
        return [
          {
            type: "text",
            text: `Create an ${Vo} with subagent_type "statusline-setup" and the prompt "${t}"`,
          },
        ];
      },
    }),
      (CZd = qP_));
  });
