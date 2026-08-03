// Module: uTn (lines 794039-794050)
  var uTn = S(() => {
    st();
    fPe = class fPe extends Error {
      subtype;
      constructor(e, t) {
        super(
          `[RemoteSessionManager] control_request '${e}' got no response after ${t / 1000}s \u2014 the worker may still apply it`,
        );
        this.subtype = e;
      }
    };
  });
