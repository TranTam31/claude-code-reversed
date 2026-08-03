// Module: d4r (lines 62442-62450)
  var d4r = S(() => {
    ({ toString: $jl } = Object.prototype);
    CPi = class CPi extends Error {
      name = "MaxBufferError";
      constructor() {
        super("maxBuffer exceeded");
      }
    };
  });
