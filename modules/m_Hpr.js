// Module: hpr (lines 629414-629469)
  var hpr = S(() => {
    Bv();
    hB();
    F0e();
    Yq();
    tit();
    Frt();
    Ge();
    Ir();
    vo();
    ts();
    pt();
    Eo();
    ja();
    Qr();
    st();
    qA();
    si();
    Iy();
    zt();
    vt();
    MRt();
    N7r();
    FHt();
    OU();
    _Se();
    ODo();
    Zzs();
    ODo();
    q4 = class q4 extends Error {
      originalError;
      retryContext;
      constructor(e, t) {
        let r = le(e);
        super(r);
        this.originalError = e;
        this.retryContext = t;
        if (((this.name = "RetryError"), e instanceof Error && e.stack))
          this.stack = e.stack;
      }
    };
    ((e4_ = [
      "invalid_request_error",
      "authentication_error",
      "billing_error",
      "permission_error",
      "not_found_error",
      "request_too_large",
      "rate_limit_error",
      "timeout_error",
      "api_error",
      "overloaded_error",
    ]),
      (t4_ = new Set([401, 407, 429, 404, 403, 413])),
      (r4_ = [V7r, BPt, eus, Apo, Blp, q7r]));
  });
