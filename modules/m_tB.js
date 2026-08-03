// Module: tB (lines 1009397-1009463)
  var tB = S(() => {
    uGe = class uGe extends Error {
      static code = "ERR_JOSE_GENERIC";
      code = "ERR_JOSE_GENERIC";
      constructor(e, t) {
        super(e, t);
        ((this.name = this.constructor.name),
          Error.captureStackTrace?.(this, this.constructor));
      }
    };
    JJ = class JJ extends uGe {
      static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
      code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
      claim;
      reason;
      payload;
      constructor(e, t, r = "unspecified", n = "unspecified") {
        super(e, { cause: { claim: r, reason: n, payload: t } });
        ((this.claim = r), (this.reason = n), (this.payload = t));
      }
    };
    Uyi = class Uyi extends uGe {
      static code = "ERR_JWT_EXPIRED";
      code = "ERR_JWT_EXPIRED";
      claim;
      reason;
      payload;
      constructor(e, t, r = "unspecified", n = "unspecified") {
        super(e, { cause: { claim: r, reason: n, payload: t } });
        ((this.claim = r), (this.reason = n), (this.payload = t));
      }
    };
    x1r = class x1r extends uGe {
      static code = "ERR_JOSE_ALG_NOT_ALLOWED";
      code = "ERR_JOSE_ALG_NOT_ALLOWED";
    };
    cE = class cE extends uGe {
      static code = "ERR_JOSE_NOT_SUPPORTED";
      code = "ERR_JOSE_NOT_SUPPORTED";
    };
    j1n = class j1n extends uGe {
      static code = "ERR_JWE_DECRYPTION_FAILED";
      code = "ERR_JWE_DECRYPTION_FAILED";
      constructor(e = "decryption operation failed", t) {
        super(e, t);
      }
    };
    Ld = class Ld extends uGe {
      static code = "ERR_JWE_INVALID";
      code = "ERR_JWE_INVALID";
    };
    gI = class gI extends uGe {
      static code = "ERR_JWS_INVALID";
      code = "ERR_JWS_INVALID";
    };
    g8t = class g8t extends uGe {
      static code = "ERR_JWT_INVALID";
      code = "ERR_JWT_INVALID";
    };
    sEl = class sEl extends uGe {
      static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      constructor(e = "signature verification failed", t) {
        super(e, t);
      }
    };
  });
