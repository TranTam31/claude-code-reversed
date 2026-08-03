// Module: qFd (lines 533733-533744)
  var qFd = S(() => {
    Dze();
    ((yu_ = {
      name: "keybindings",
      description: "Open your keyboard shortcuts file",
      isEnabled: () => pEe(),
      supportsNonInteractive: !1,
      type: "local",
      load: () => Promise.resolve().then(() => (GFd(), WFd)),
    }),
      (VFd = yu_));
  });
