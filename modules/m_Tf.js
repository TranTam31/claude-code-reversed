// Module: Tf (lines 4576-4600)
  var Tf = S(() => {
    wvi = class wvi {
      #e = new Set();
      register(e) {
        let t = oBm(e);
        this.#e.add(t);
        let r = () => {
          this.#e.delete(t);
        };
        return Object.assign(r, { [Symbol.dispose]: r });
      }
      async drain() {
        let e = Array.from(this.#e);
        (this.#e.clear(), await Promise.all(e.map(async (t) => t())));
      }
      async [Symbol.asyncDispose]() {
        await this.drain();
      }
      get sizeForTesting() {
        return this.#e.size;
      }
    };
    B0l = new wvi();
    j0l = new wvi();
  });
