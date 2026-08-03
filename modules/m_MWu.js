// Module: MWu (lines 309745-309756)
  var MWu = S(() => {
    zys = class zys extends Error {
      constructor(e, t) {
        (super(e),
          (this.name = "ParseError"),
          (this.type = t.type),
          (this.field = t.field),
          (this.value = t.value),
          (this.line = t.line));
      }
    };
  });
