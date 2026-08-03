// Module: uQd (lines 590289-590329)
  var uQd = S(() => {
    Da();
    Ei();
    bb();
    Bnr();
    Pr();
    ((yP_ = {
      name: "sandbox",
      get description() {
        let e = Oo.isSandboxingEnabled(),
          t = Oo.isAutoAllowBashIfSandboxedEnabled(),
          r = Oo.areUnsandboxedCommandsAllowed(),
          n =
            Oo.areSandboxSettingsLockedByPolicy() ||
            Oo.areUnsandboxedCommandsForbiddenByPolicy(),
          o = Oo.passesCheapSandboxGates()
            ? Oo.checkDependencies().errors.length === 0
            : !0,
          i;
        if (!o) i = je.warning;
        else i = e ? je.tick : je.circle;
        let s = "sandbox disabled";
        if (e)
          ((s = t ? "sandbox enabled (auto-allow)" : "sandbox enabled"),
            (s += r ? ", fallback allowed" : ""));
        if (n) s += " (managed)";
        return `${i} ${s} (\u23CE to configure)`;
      },
      get argumentHint() {
        return Lt() === "windows" && clt()
          ? 'install | exclude "command pattern"'
          : 'exclude "command pattern"';
      },
      get isHidden() {
        return !Oo.isSupportedPlatform() || !Oo.isPlatformInEnabledList();
      },
      immediate: (e) => Gi(e.trim(), " ") !== "install",
      type: "local-jsx",
    }),
      (cQd = yP_));
  });
