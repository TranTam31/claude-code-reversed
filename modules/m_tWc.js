// Module: tWc (lines 146455-146468)
  var tWc = S(() => {
    l6i = class l6i {
      constructor(e) {
        this.options = e;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let e of this.options.inputStream)
          yield this.options.serializer(e);
      }
    };
  });
