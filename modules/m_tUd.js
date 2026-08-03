// Module: tUd (lines 533802-533833)
  var tUd = S(() => {
    Zan();
    ((Eu_ = {
      type: "local",
      name: "design",
      description:
        "Grant or revoke Claude agent access to your Design projects",
      argumentHint: "consent | revoke",
      isEnabled: () => $2e(),
      supportsNonInteractive: !0,
      load: () => Promise.resolve().then(() => (HMo(), zFd)),
    }),
      (QFd = {
        type: "local",
        name: "design-consent",
        description: "Grant Claude agent access to your Design projects",
        isEnabled: () => $2e(),
        supportsNonInteractive: !0,
        isHidden: !0,
        load: () => Promise.resolve().then(() => (YFd(), KFd)),
      }),
      (ZFd = {
        type: "local",
        name: "design-revoke",
        description: "Revoke Claude agent access to your Design projects",
        isEnabled: () => $2e(),
        supportsNonInteractive: !0,
        isHidden: !0,
        load: () => Promise.resolve().then(() => (JFd(), XFd)),
      }),
      (eUd = Eu_));
  });
