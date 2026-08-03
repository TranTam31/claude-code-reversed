// Module: yYu (lines 349287-349307)
  var yYu = S(() => {
    kQr();
    ABr();
    Men = class Men extends Error {
      constructor(e) {
        super(
          `wrote >${Math.round(e / 1024 / 1024)}MB to stdout without a JSON-RPC message boundary. The server is likely writing logs or other non-protocol data to stdout instead of stderr. Disconnecting to prevent unbounded memory growth.`,
        );
        this.name = "StdoutOverflowError";
      }
    };
    Len = class Len extends HQr {
      overflowError;
      constructor(e) {
        super(e);
        this._readBuffer = new gYu(oct, (t) => {
          ((this.overflowError = t), queueMicrotask(() => void this.close()));
        });
      }
    };
  });
