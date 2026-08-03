// Module: ltr (lines 187876-187919)
  var ltr = S(() => {
    Vn();
    atr = Se(() => v.string().regex(/^mem_[A-Za-z0-9]+$/));
    tqe = class tqe extends Error {
      path;
      expected;
      actual;
      existingId;
      constructor(e, t, r, n) {
        super(
          `conflict on ${e}: expected ${t ?? "<none>"}, actual ${r ?? "<unknown>"}`,
        );
        this.path = e;
        this.expected = t;
        this.actual = r;
        this.existingId = n;
        this.name = "ConflictError";
      }
    };
    k5 = class k5 extends Error {
      path;
      constructor(e) {
        super(`not found: ${e}`);
        this.path = e;
        this.name = "NotFoundError";
      }
    };
    kZ = class kZ extends Error {
      cause;
      constructor(e, t) {
        super(e);
        this.cause = t;
        this.name = "UnavailableError";
      }
    };
    Tk = class Tk extends Error {
      reason;
      constructor(e, t) {
        super(t ?? `permanent: ${e}`);
        this.reason = e;
        this.name = "PermanentError";
      }
    };
  });
