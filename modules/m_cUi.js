// Module: cUi (lines 102768-102856)
  var cUi = S(() => {
    n8n();
    Ojr = class Ojr extends Uq {
      name = "AccessDeniedException";
      $fault = "client";
      constructor(e) {
        super({ name: "AccessDeniedException", $fault: "client", ...e });
        Object.setPrototypeOf(this, Ojr.prototype);
      }
    };
    Njr = class Njr extends Uq {
      name = "InternalServerException";
      $fault = "server";
      constructor(e) {
        super({ name: "InternalServerException", $fault: "server", ...e });
        Object.setPrototypeOf(this, Njr.prototype);
      }
    };
    $jr = class $jr extends Uq {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(e) {
        super({ name: "ResourceNotFoundException", $fault: "client", ...e });
        Object.setPrototypeOf(this, $jr.prototype);
      }
    };
    Fjr = class Fjr extends Uq {
      name = "ThrottlingException";
      $fault = "client";
      constructor(e) {
        super({ name: "ThrottlingException", $fault: "client", ...e });
        Object.setPrototypeOf(this, Fjr.prototype);
      }
    };
    Ujr = class Ujr extends Uq {
      name = "ValidationException";
      $fault = "client";
      constructor(e) {
        super({ name: "ValidationException", $fault: "client", ...e });
        Object.setPrototypeOf(this, Ujr.prototype);
      }
    };
    Bjr = class Bjr extends Uq {
      name = "ConflictException";
      $fault = "client";
      constructor(e) {
        super({ name: "ConflictException", $fault: "client", ...e });
        Object.setPrototypeOf(this, Bjr.prototype);
      }
    };
    jjr = class jjr extends Uq {
      name = "ServiceQuotaExceededException";
      $fault = "client";
      constructor(e) {
        super({
          name: "ServiceQuotaExceededException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, jjr.prototype);
      }
    };
    Wjr = class Wjr extends Uq {
      name = "TooManyTagsException";
      $fault = "client";
      resourceName;
      constructor(e) {
        super({ name: "TooManyTagsException", $fault: "client", ...e });
        (Object.setPrototypeOf(this, Wjr.prototype),
          (this.resourceName = e.resourceName));
      }
    };
    Gjr = class Gjr extends Uq {
      name = "ResourceInUseException";
      $fault = "client";
      constructor(e) {
        super({ name: "ResourceInUseException", $fault: "client", ...e });
        Object.setPrototypeOf(this, Gjr.prototype);
      }
    };
    Vjr = class Vjr extends Uq {
      name = "ServiceUnavailableException";
      $fault = "server";
      constructor(e) {
        super({ name: "ServiceUnavailableException", $fault: "server", ...e });
        Object.setPrototypeOf(this, Vjr.prototype);
      }
    };
  });
