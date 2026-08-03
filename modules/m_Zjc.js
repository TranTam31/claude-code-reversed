// Module: Zjc (lines 146421-146435)
  var Zjc = S(() => {
    s6i = class s6i {
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
