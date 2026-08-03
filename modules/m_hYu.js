// Module: hYu (lines 349230-349240)
  var hYu = S(() => {
    lwy = oct;
    mYu = class mYu extends Error {
      constructor(e) {
        super(
          `streamed >${Math.round(e / 1024 / 1024)}MB ${Yvs}. The server is likely returning non-protocol data. Disconnecting to prevent unbounded memory growth.`,
        );
        this.name = "HttpBodyOverflowError";
      }
    };
  });
