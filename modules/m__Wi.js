// Module: _Wi (lines 133211-133249)
  var _Wi = S(() => {
    zot = class zot extends Error {
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
          zot.prototype.isPrototypeOf(t) ||
          (Boolean(t.$fault) &&
            Boolean(t.$metadata) &&
            (t.$fault === "client" || t.$fault === "server"))
        );
      }
      static [Symbol.hasInstance](e) {
        if (!e) return !1;
        let t = e;
        if (this === zot) return zot.isInstance(e);
        if (zot.isInstance(e)) {
          if (t.name && this.name)
            return this.prototype.isPrototypeOf(e) || t.name === this.name;
          return this.prototype.isPrototypeOf(e);
        }
        return !1;
      }
    };
  });
