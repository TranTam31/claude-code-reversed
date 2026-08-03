// Module: hZd (lines 591611-591626)
  var hZd = S(() => {
    ((UP_ = {
      type: "local",
      name: "workflow-launch-exec",
      description:
        "Execute a server-launched workflow handoff (workflow_launch event sessions only)",
      isHidden: !0,
      disableModelInvocation: !0,
      supportsNonInteractive: !0,
      load: () =>
        Promise.resolve()
          .then(() => (fZd(), pZd))
          .then((e) => ({ call: e.call })),
    }),
      (mZd = UP_));
  });
