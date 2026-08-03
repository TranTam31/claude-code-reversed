// Module: o$d (lines 527844-527857)
  var o$d = S(() => {
    Ar();
    ((Rl_ = {
      type: "local",
      name: "compact",
      description: "Free up context by summarizing the conversation so far",
      isEnabled: () => !Z.DISABLE_COMPACT,
      supportsNonInteractive: !0,
      argumentHint: "<optional custom summarization instructions>",
      thinClientDispatch: "post-text",
      load: () => Promise.resolve().then(() => (n$d(), r$d)),
    }),
      (GPo = Rl_));
  });
