// Module: Zsl (lines 907374-907395)
  var Zsl = S(() => {
    Vn();
    SMn = a_({
      kind: "chrome_install_setup",
      payload: Se(() =>
        v.object({
          phase: v.enum([
            "waiting_install",
            "connecting",
            "stalled",
            "connected",
            "failed",
          ]),
          installPageOpened: v.boolean(),
        }),
      ),
      result: Se(() =>
        v.enum(["continue", "keep_waiting", "skip", "cancelled"]),
      ),
      default: "cancelled",
    });
  });
