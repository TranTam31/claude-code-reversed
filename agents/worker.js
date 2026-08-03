// Agent: worker (lines 317031-317045)
  var j5u = S(() => {
    dct();
    mh();
    U5u = {
      agentType: "worker",
      whenToUse:
        "For executing tasks autonomously \u2014 research, implementation, or verification.",
      tools: ["*"],
      maxTurns: 200,
      permissionMode: "bubble",
      source: "built-in",
      baseDir: "built-in",
      getSystemPrompt: (e) => F5u(),
    };
  });
