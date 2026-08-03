// Module: ast (lines 177981-178058)
  var ast = S(() => {
    Bv();
    hB();
    bl();
    Yh();
    Eo();
    P7n();
    ku();
    PM();
    si();
    ts();
    Iy();
    pt();
    Wu();
    Frt();
    tit();
    Ge();
    qm();
    Ar();
    Qr();
    bQt();
    Xoe();
    Zt();
    Pr();
    zt();
    Zr();
    vt();
    FHt();
    jQt();
    H2c();
    _Vi();
    st();
    zQc = require("crypto");
    yxg = qr(() => be("provider_route"));
    gro = class gro extends Error {
      idleMs;
      bytesReceived;
      ttfbMs;
      bodyReadPending;
      cfRay;
      sleptMs;
      constructor(e, t = 0, r, n = !0, o, i = 0) {
        super(`stream idle: no bytes for ${e}ms`);
        ((this.name = "StreamIdleTimeoutError"),
          (this.idleMs = e),
          (this.bytesReceived = t),
          (this.ttfbMs = r),
          (this.bodyReadPending = n),
          (this.cfRay = o),
          (this.sleptMs = i));
      }
    };
    YQc = class YQc extends Error {
      sleptMs;
      code = "StreamSuspended";
      constructor(e) {
        super(
          "Stream watchdog detected system suspend; aborting to retry on a fresh connection",
        );
        this.sleptMs = e;
        this.name = "StreamSuspendedError";
      }
    };
    XQc = class XQc extends Dr {
      contentType;
      code = "BedrockUnexpectedContentType";
      constructor(e) {
        super(
          `Bedrock streaming response has content-type ${JSON.stringify(e)}; expected "application/vnd.amazon.eventstream". A gateway or proxy between ` +
            "Claude Code and Bedrock is likely transforming the response body \u2014 Bedrock's " +
            "binary event-stream format must be passed through unmodified. Set CLAUDE_CODE_DISABLE_BEDROCK_CONTENT_TYPE_GUARD=1 to suppress this check while the gateway is being fixed.",
          "Bedrock streaming response content-type is not application/vnd.amazon.eventstream",
        );
        this.contentType = e;
        this.name = "BedrockUnexpectedContentTypeError";
      }
    };
  });
