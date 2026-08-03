// Module: mYd (lines 583168-583182)
  var mYd = S(() => {
    Ar();
    fYd = {
      type: "local-jsx",
      name: "logout",
      description: "Sign out from your Anthropic account",
      isEnabled: () => !Z.DISABLE_LOGOUT_COMMAND,
      fleetHostCall: async (e) => {
        let { fleetHostLogout: t } = await Promise.resolve().then(
          () => (vpn(), pYd),
        );
        return t(e);
      },
    };
  });
