// Module: o8u (lines 335708-335728)
  var o8u = S(() => {
    kQr();
    ABr();
    YZr = class YZr extends Error {
      constructor(e) {
        super(
          `wrote >${Math.round(e / 1024 / 1024)}MB to stdout without a JSON-RPC message boundary. The server is likely writing logs or other non-protocol data to stdout instead of stderr. Disconnecting to prevent unbounded memory growth.`,
        );
        this.name = "StdoutOverflowError";
      }
    };
    XZr = class XZr extends HQr {
      overflowError;
      constructor(e) {
        super(e);
        this._readBuffer = new n8u(oct, (t) => {
          ((this.overflowError = t), queueMicrotask(() => void this.close()));
        });
      }
    };
  });
