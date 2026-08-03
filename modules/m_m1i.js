// Module: m1i (lines 81033-81071)
  var m1i = S(() => {
    j7t = class j7t extends Error {
      $fault;
      $response;
      $retryable;
      $metadata;
      constructor(e) {
        super(e.message);
        (Object.setPrototypeOf(
          this,
          Object.getPrototypeOf(this).constructor.prototype,
        ),
          (this.name = e.name),
          (this.$fault = e.$fault),
          (this.$metadata = e.$metadata));
      }
      static isInstance(e) {
        if (!e) return !1;
        let t = e;
        return (
          j7t.prototype.isPrototypeOf(t) ||
          (Boolean(t.$fault) &&
            Boolean(t.$metadata) &&
            (t.$fault === "client" || t.$fault === "server"))
        );
      }
      static [Symbol.hasInstance](e) {
        if (!e) return !1;
        let t = e;
        if (this === j7t) return j7t.isInstance(e);
        if (j7t.isInstance(e)) {
          if (t.name && this.name)
            return this.prototype.isPrototypeOf(e) || t.name === this.name;
          return this.prototype.isPrototypeOf(e);
        }
        return !1;
      }
    };
  });
