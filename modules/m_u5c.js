// Module: u5c (lines 148956-148981)
  var u5c = S(() => {
    GQn();
    Q5r();
    nqi();
    VQn();
    tVr();
    ((oZt = x(require("http"))),
      (iZt = x(require("https"))),
      (qQn = x(require("zlib"))),
      (s5c = require("stream")),
      (afg = {}));
    oqi = class oqi extends s5c.Transform {
      _transform(e, t, r) {
        (this.push(e), (this.loadedBytes += e.length));
        try {
          (this.progressCallback({ loadedBytes: this.loadedBytes }), r());
        } catch (n) {
          r(n);
        }
      }
      constructor(e) {
        super();
        ((this.loadedBytes = 0), (this.progressCallback = e));
      }
    };
  });
