// Module: Xgo (lines 311768-311784)
  var Xgo = S(() => {
    MC();
    Qpe();
    eGu();
    emy = {
      initialReconnectionDelay: 1000,
      maxReconnectionDelay: 30000,
      reconnectionDelayGrowFactor: 1.5,
      maxRetries: 2,
    };
    $ee = class $ee extends Error {
      constructor(e, t) {
        super(`Streamable HTTP error: ${t}`);
        this.code = e;
      }
    };
  });
