// Module: Omc (lines 113896-113910)
  var Omc = S(() => {
    hBi = class hBi {
      options;
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
