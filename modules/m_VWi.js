// Module: VWi (lines 136026-136064)
  var VWi = S(() => {
    Xot = class Xot extends Error {
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
          Xot.prototype.isPrototypeOf(t) ||
          (Boolean(t.$fault) &&
            Boolean(t.$metadata) &&
            (t.$fault === "client" || t.$fault === "server"))
        );
      }
      static [Symbol.hasInstance](e) {
        if (!e) return !1;
        let t = e;
        if (this === Xot) return Xot.isInstance(e);
        if (Xot.isInstance(e)) {
          if (t.name && this.name)
            return this.prototype.isPrototypeOf(e) || t.name === this.name;
          return this.prototype.isPrototypeOf(e);
        }
        return !1;
      }
    };
  });
