// Module: XEl (lines 1014377-1014445)
  var XEl = S(() => {
    hB();
    ZN();
    Wu();
    Eo();
    tit();
    Ar();
    st();
    mj();
    si();
    Iy();
    Zt();
    f0e();
    $1r();
    mLm();
    gyE = new Set([
      "content-type",
      "accept",
      "accept-encoding",
      "anthropic-beta",
      "anthropic-version",
      "user-agent",
    ]);
    ((_yE = [
      "content-encoding",
      "content-length",
      "transfer-encoding",
      "connection",
      "cf-ray",
      "via",
      "request-id",
    ]),
      (byE = {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      }),
      (SyE = ["/v1/messages", "/v1/messages/count_tokens"]));
    bLm = new WeakMap();
    ((CyE = {
      400: "invalid_request_error",
      401: "authentication_error",
      403: "permission_error",
      404: "not_found_error",
      429: "rate_limit_error",
      529: "overloaded_error",
    }),
      (vLm = {
        400: "upstream rejected the request",
        401: "upstream authentication failed \u2014 check the gateway operator",
        403: "upstream denied the request \u2014 check the gateway operator",
        404: "upstream resource not found",
        429: "upstream rate limit exceeded",
        500: "upstream error",
        529: "upstream overloaded",
      }));
    xyE = [
      "haiku45",
      "sonnet45",
      "sonnet46",
      "sonnet5",
      "opus41",
      "opus46",
      "opus47",
      "opus48",
      "opus5",
      "fable5",
    ];
  });
