// Module: ODo (lines 516127-516142)
  var ODo = S(() => {
    Dz = class Dz extends Error {
      originalModel;
      fallbackModel;
      reason;
      originalError;
      constructor(e, t, r = "overloaded", n) {
        super(`Model fallback triggered: ${e} -> ${t}`);
        this.originalModel = e;
        this.fallbackModel = t;
        this.reason = r;
        this.originalError = n;
        this.name = "FallbackTriggeredError";
      }
    };
  });
