// Module: mJd (lines 589151-589162)
  var mJd = S(() => {
    m4();
    fJd = {
      type: "local-jsx",
      name: "fork",
      description:
        "Spawn a background agent that inherits the full conversation",
      argumentHint: "<directive>",
      isEnabled: () => !$_(),
      load: () => Promise.resolve().then(() => (pJd(), dJd)),
    };
  });
