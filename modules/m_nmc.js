// Module: Nmc (lines 113912-113927)
  var Nmc = S(() => {
    gBi = class gBi {
      options;
      constructor(e) {
        this.options = e;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let e of this.options.messageStream)
          yield this.options.encoder.encode(e);
        if (this.options.includeEndFrame) yield new Uint8Array(0);
      }
    };
  });
