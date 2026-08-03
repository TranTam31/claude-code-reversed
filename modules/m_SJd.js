// Module: SJd (lines 589206-589217)
  var SJd = S(() => {
    m4();
    bJd = {
      type: "local-jsx",
      name: "subtask",
      description:
        "Send a subagent off with your full context; its result comes back here",
      argumentHint: "<task>",
      isEnabled: () => !$_(),
      load: () => Promise.resolve().then(() => (_Jd(), yJd)),
    };
  });
