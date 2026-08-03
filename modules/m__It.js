// Module: $It (lines 179853-179866)
  var $It = S(() => {
    ((j7i = [
      "/v2/session_ingress/shttp/mcp/",
      "/v2/session_ingress/mcp/ws/",
      "/v2/ccr-sessions/",
      "/v1/code/",
    ]),
      (iHg =
        process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL));
    sHg = new Set([
      "bridge.claudeusercontent.com",
      "bridge-staging.claudeusercontent.com",
    ]);
  });
