// Module: S0i (lines 19051-19082)
  var S0i = S(() => {
    $N();
    e0i();
    k9t = class k9t {
      constructor(e, t) {
        ((this.iterator = e), (this.controller = t));
      }
      async *decoder() {
        let e = new Utt();
        for await (let t of this.iterator)
          for (let r of e.decode(t)) yield JSON.parse(r);
        for (let t of e.flush()) yield JSON.parse(t);
      }
      [Symbol.asyncIterator]() {
        return this.decoder();
      }
      static fromResponse(e, t) {
        if (!e.body) {
          if (
            (t.abort(),
            typeof globalThis.navigator < "u" &&
              globalThis.navigator.product === "ReactNative")
          )
            throw new js(
              "The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api",
            );
          throw new js("Attempted to iterate over a response with no body");
        }
        return new k9t(jFr(e.body), t);
      }
    };
  });
