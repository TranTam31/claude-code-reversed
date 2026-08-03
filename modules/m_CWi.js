// Module: CWi (lines 134406-134536)
  var CWi = S(() => {
    Z7n();
    KGr = class KGr extends Sj {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(e) {
        super({ name: "ExpiredTokenException", $fault: "client", ...e });
        Object.setPrototypeOf(this, KGr.prototype);
      }
    };
    YGr = class YGr extends Sj {
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(e) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, YGr.prototype);
      }
    };
    XGr = class XGr extends Sj {
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(e) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, XGr.prototype);
      }
    };
    JGr = class JGr extends Sj {
      name = "RegionDisabledException";
      $fault = "client";
      constructor(e) {
        super({ name: "RegionDisabledException", $fault: "client", ...e });
        Object.setPrototypeOf(this, JGr.prototype);
      }
    };
    QGr = class QGr extends Sj {
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(e) {
        super({ name: "IDPRejectedClaimException", $fault: "client", ...e });
        Object.setPrototypeOf(this, QGr.prototype);
      }
    };
    ZGr = class ZGr extends Sj {
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(e) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, ZGr.prototype);
      }
    };
    e5r = class e5r extends Sj {
      name = "IDPCommunicationErrorException";
      $fault = "client";
      constructor(e) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, e5r.prototype);
      }
    };
    t5r = class t5r extends Sj {
      name = "InvalidAuthorizationMessageException";
      $fault = "client";
      constructor(e) {
        super({
          name: "InvalidAuthorizationMessageException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, t5r.prototype);
      }
    };
    r5r = class r5r extends Sj {
      name = "ExpiredTradeInTokenException";
      $fault = "client";
      constructor(e) {
        super({ name: "ExpiredTradeInTokenException", $fault: "client", ...e });
        Object.setPrototypeOf(this, r5r.prototype);
      }
    };
    n5r = class n5r extends Sj {
      name = "JWTPayloadSizeExceededException";
      $fault = "client";
      constructor(e) {
        super({
          name: "JWTPayloadSizeExceededException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, n5r.prototype);
      }
    };
    o5r = class o5r extends Sj {
      name = "OutboundWebIdentityFederationDisabledException";
      $fault = "client";
      constructor(e) {
        super({
          name: "OutboundWebIdentityFederationDisabledException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, o5r.prototype);
      }
    };
    i5r = class i5r extends Sj {
      name = "SessionDurationEscalationException";
      $fault = "client";
      constructor(e) {
        super({
          name: "SessionDurationEscalationException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, i5r.prototype);
      }
    };
  });
