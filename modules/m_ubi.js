// Module: UBi (lines 115895-116006)
  var UBi = S(() => {
    E9n();
    rWr = class rWr extends fj {
      name = "AccessDeniedException";
      $fault = "client";
      constructor(e) {
        super({ name: "AccessDeniedException", $fault: "client", ...e });
        Object.setPrototypeOf(this, rWr.prototype);
      }
    };
    aHt = class aHt extends fj {
      name = "InternalServerException";
      $fault = "server";
      constructor(e) {
        super({ name: "InternalServerException", $fault: "server", ...e });
        Object.setPrototypeOf(this, aHt.prototype);
      }
    };
    lHt = class lHt extends fj {
      name = "ThrottlingException";
      $fault = "client";
      constructor(e) {
        super({ name: "ThrottlingException", $fault: "client", ...e });
        Object.setPrototypeOf(this, lHt.prototype);
      }
    };
    cHt = class cHt extends fj {
      name = "ValidationException";
      $fault = "client";
      constructor(e) {
        super({ name: "ValidationException", $fault: "client", ...e });
        Object.setPrototypeOf(this, cHt.prototype);
      }
    };
    nWr = class nWr extends fj {
      name = "ConflictException";
      $fault = "client";
      constructor(e) {
        super({ name: "ConflictException", $fault: "client", ...e });
        Object.setPrototypeOf(this, nWr.prototype);
      }
    };
    oWr = class oWr extends fj {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(e) {
        super({ name: "ResourceNotFoundException", $fault: "client", ...e });
        Object.setPrototypeOf(this, oWr.prototype);
      }
    };
    iWr = class iWr extends fj {
      name = "ServiceQuotaExceededException";
      $fault = "client";
      constructor(e) {
        super({
          name: "ServiceQuotaExceededException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, iWr.prototype);
      }
    };
    sWr = class sWr extends fj {
      name = "ServiceUnavailableException";
      $fault = "server";
      constructor(e) {
        super({ name: "ServiceUnavailableException", $fault: "server", ...e });
        Object.setPrototypeOf(this, sWr.prototype);
      }
    };
    aWr = class aWr extends fj {
      name = "ModelErrorException";
      $fault = "client";
      originalStatusCode;
      resourceName;
      constructor(e) {
        super({ name: "ModelErrorException", $fault: "client", ...e });
        (Object.setPrototypeOf(this, aWr.prototype),
          (this.originalStatusCode = e.originalStatusCode),
          (this.resourceName = e.resourceName));
      }
    };
    lWr = class lWr extends fj {
      name = "ModelNotReadyException";
      $fault = "client";
      $retryable = {};
      constructor(e) {
        super({ name: "ModelNotReadyException", $fault: "client", ...e });
        Object.setPrototypeOf(this, lWr.prototype);
      }
    };
    cWr = class cWr extends fj {
      name = "ModelTimeoutException";
      $fault = "client";
      constructor(e) {
        super({ name: "ModelTimeoutException", $fault: "client", ...e });
        Object.setPrototypeOf(this, cWr.prototype);
      }
    };
    uHt = class uHt extends fj {
      name = "ModelStreamErrorException";
      $fault = "client";
      originalStatusCode;
      originalMessage;
      constructor(e) {
        super({ name: "ModelStreamErrorException", $fault: "client", ...e });
        (Object.setPrototypeOf(this, uHt.prototype),
          (this.originalStatusCode = e.originalStatusCode),
          (this.originalMessage = e.originalMessage));
      }
    };
  });
