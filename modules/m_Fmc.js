// Module: Fmc (lines 113948-113962)
  var Fmc = S(() => {
    _Bi = class _Bi {
      options;
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
