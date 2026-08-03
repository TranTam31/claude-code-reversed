// Module: XEp (lines 666677-666687)
  var XEp = S(() => {
    Ljn();
    iea = class iea extends zCt {
      constructor(e, t) {
        super(e, t);
        let r = this._ondata;
        this._ondata = (n) =>
          r(typeof n === "string" ? Buffer.from(n, "utf8") : n);
      }
    };
  });
