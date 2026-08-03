// Module: Qjc (lines 146406-146419)
  var Qjc = S(() => {
    i6i = class i6i {
      constructor(e) {
        this.options = e;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let e of this.options.inputStream)
          yield this.options.decoder.decode(e);
      }
    };
  });
