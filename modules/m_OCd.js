// Module: OCd (lines 479629-479652)
  var OCd = S(() => {
    Dy();
    Ak();
    kmr = class kmr extends Error {
      method;
      status;
      body;
      telemetryMessage;
      constructor(e, t, r) {
        super(`Design API ${e} failed: HTTP ${t} ${PKy(r)}`);
        this.method = e;
        this.status = t;
        this.body = r;
        ((this.name = "DesignRpcError"),
          (this.telemetryMessage = `Design API ${e} failed: HTTP ${t}`));
      }
    };
    Imr = class Imr extends kmr {
      constructor(e, t, r) {
        super(e, t, r);
        this.name = "DesignAuthError";
      }
    };
  });
