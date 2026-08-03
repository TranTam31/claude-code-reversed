// Module: l$d (lines 527935-527967)
  var l$d = S(() => {
    pt();
    Cee();
    ((a$d = {
      type: "local-jsx",
      name: "autocompact",
      description: "Set how full the context gets before auto-summarizing",
      isEnabled: () => s$d() && !yn(),
      isHidden: !1,
      argumentHint: "[auto|<tokens>]",
      userFacingName() {
        return "autocompact";
      },
    }),
      (VPo = {
        type: "local",
        name: "autocompact",
        supportsNonInteractive: !0,
        thinClientDispatch: "post-text",
        description: "Configure the auto-compact window size",
        get isHidden() {
          return !yn() && !ba();
        },
        isEnabled() {
          return s$d() && (yn() || ba());
        },
        argumentHint: "[auto|<tokens>]",
        load: () => Promise.resolve().then(() => (z2s(), i$d)),
        userFacingName() {
          return "autocompact";
        },
      }));
  });
