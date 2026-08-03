// Module: kUe (lines 376819-376871)
  var kUe = S(() => {
    Vn();
    zt();
    Ge();
    st();
    ((tDy = [
      "UNSPECIFIED",
      "ABSENT",
      "VERIFIED",
      "VERIFIED_BY_GATE",
      "INVALID",
      "UNCHECKED",
      "VERIFIED_KEYLESS_DEVICE",
      "SERVICE_VOUCHED",
    ]),
      (rDy = [
        "UNSPECIFIED",
        "ABSENT",
        "VERIFIED",
        "VERIFIED_BY_GATE",
        "INVALID",
        "UNCHECKED",
      ]));
    L0s = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
    ((Pvo = {
      enforce: !1,
      acceptLevel: "VERIFIED",
      acceptStatuses: new Set(),
    }),
      (iDy = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"]),
      (sDy = Se(() =>
        v.object({
          accept_level: v.enum(L0s).default("VERIFIED"),
          accept_statuses: v.array(v.enum(iDy)).default([]),
        }),
      )));
    aDy = new Set([
      "set_model",
      "set_permission_mode",
      "interrupt",
      "set_max_thinking_tokens",
      "rename_session",
      "set_color",
      "mcp_authenticate",
      "mcp_oauth_callback_url",
      "mcp_reconnect",
      "apply_flag_settings",
      "side_question",
      "reload_plugins",
    ]);
    ((cnd = new Set()), (und = new Set()));
    ((pDy = { start: 0, count: 0 }), (fDy = { start: 0, count: 0 }));
  });
