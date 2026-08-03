// Module: Mhm (lines 958489-958517)
  var Mhm = S(() => {
    zt();
    Ar();
    wbr();
    Phm = {
      id: "sudo-npm-install",
      maxImpressions: 1,
      onShown: () => be("sudo_npm_install_notice"),
      compute: async () => {
        if (Z.DISABLE_INSTALLATION_CHECKS) return null;
        let e = await C4o();
        if (
          e?.path !== "npm-global" ||
          e.outcome !== "failed" ||
          e.status !== rZS
        )
          return null;
        return {
          key: "sudo-npm-install",
          segments: [
            { text: "Claude Code can't auto-update", color: "warning" },
            { text: " \xB7 run `claude doctor`", dim: !0 },
          ],
          priority: "high",
          timeoutMs: 15000,
        };
      },
    };
  });
