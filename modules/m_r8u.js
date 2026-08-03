// Module: r8u (lines 335651-335661)
  var r8u = S(() => {
    D_y = oct;
    t8u = class t8u extends Error {
      constructor(e) {
        super(
          `streamed >${Math.round(e / 1024 / 1024)}MB ${OSs}. The server is likely returning non-protocol data. Disconnecting to prevent unbounded memory growth.`,
        );
        this.name = "HttpBodyOverflowError";
      }
    };
  });
