// Module: DQr (lines 311976-311992)
  var DQr = S(() => {
    Vn();
    Rze = a_({
      kind: "mcp_url_elicitation",
      payload: Se(() =>
        v.custom(
          (e) =>
            typeof e === "object" &&
            e !== null &&
            "serverName" in e &&
            "params" in e,
        ),
      ),
      result: Se(() => v.custom((e) => typeof e === "object" && e !== null)),
      default: { action: "cancel" },
    });
  });
