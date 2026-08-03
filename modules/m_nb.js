// Module: nb (lines 1002094-1002253)
  var nb = S(() => {
    $3 = class $3 extends Error {
      static get code() {
        return "ERR_JOSE_GENERIC";
      }
      constructor(e) {
        var t;
        super(e);
        ((this.code = "ERR_JOSE_GENERIC"),
          (this.name = this.constructor.name),
          (t = Error.captureStackTrace) === null ||
            t === void 0 ||
            t.call(Error, this, this.constructor));
      }
    };
    mK = class mK extends $3 {
      static get code() {
        return "ERR_JWT_CLAIM_VALIDATION_FAILED";
      }
      constructor(e, t = "unspecified", r = "unspecified") {
        super(e);
        ((this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED"),
          (this.claim = t),
          (this.reason = r));
      }
    };
    g1n = class g1n extends $3 {
      static get code() {
        return "ERR_JWT_EXPIRED";
      }
      constructor(e, t = "unspecified", r = "unspecified") {
        super(e);
        ((this.code = "ERR_JWT_EXPIRED"), (this.claim = t), (this.reason = r));
      }
    };
    i8t = class i8t extends $3 {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
      }
      static get code() {
        return "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    };
    Zf = class Zf extends $3 {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_NOT_SUPPORTED";
      }
      static get code() {
        return "ERR_JOSE_NOT_SUPPORTED";
      }
    };
    eTt = class eTt extends $3 {
      constructor() {
        super(...arguments);
        ((this.code = "ERR_JWE_DECRYPTION_FAILED"),
          (this.message = "decryption operation failed"));
      }
      static get code() {
        return "ERR_JWE_DECRYPTION_FAILED";
      }
    };
    Ykm = class Ykm extends $3 {
      constructor() {
        super(...arguments);
        ((this.code = "ERR_JWE_DECOMPRESSION_FAILED"),
          (this.message = "decompression operation failed"));
      }
      static get code() {
        return "ERR_JWE_DECOMPRESSION_FAILED";
      }
    };
    eu = class eu extends $3 {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_INVALID";
      }
      static get code() {
        return "ERR_JWE_INVALID";
      }
    };
    rv = class rv extends $3 {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWS_INVALID";
      }
      static get code() {
        return "ERR_JWS_INVALID";
      }
    };
    F3 = class F3 extends $3 {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWT_INVALID";
      }
      static get code() {
        return "ERR_JWT_INVALID";
      }
    };
    Kgi = class Kgi extends $3 {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWK_INVALID";
      }
      static get code() {
        return "ERR_JWK_INVALID";
      }
    };
    s8t = class s8t extends $3 {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_INVALID";
      }
      static get code() {
        return "ERR_JWKS_INVALID";
      }
    };
    u1r = class u1r extends $3 {
      constructor() {
        super(...arguments);
        ((this.code = "ERR_JWKS_NO_MATCHING_KEY"),
          (this.message = "no applicable key found in the JSON Web Key Set"));
      }
      static get code() {
        return "ERR_JWKS_NO_MATCHING_KEY";
      }
    };
    Ygi = class Ygi extends $3 {
      constructor() {
        super(...arguments);
        ((this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"),
          (this.message =
            "multiple matching keys found in the JSON Web Key Set"));
      }
      static get code() {
        return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      }
    };
    Xgi = class Xgi extends $3 {
      constructor() {
        super(...arguments);
        ((this.code = "ERR_JWKS_TIMEOUT"),
          (this.message = "request timed out"));
      }
      static get code() {
        return "ERR_JWKS_TIMEOUT";
      }
    };
    d1r = class d1r extends $3 {
      constructor() {
        super(...arguments);
        ((this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"),
          (this.message = "signature verification failed"));
      }
      static get code() {
        return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      }
    };
  });
