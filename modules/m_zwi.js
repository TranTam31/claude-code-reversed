// Module: ZWi (lines 137090-137192)
  var ZWi = S(() => {
    QWi();
    IXn = class IXn extends gY {
      name = "InternalErrorException";
      $fault = "server";
      constructor(e) {
        super({ name: "InternalErrorException", $fault: "server", ...e });
        Object.setPrototypeOf(this, IXn.prototype);
      }
    };
    RXn = class RXn extends gY {
      name = "InvalidParameterException";
      $fault = "client";
      constructor(e) {
        super({ name: "InvalidParameterException", $fault: "client", ...e });
        Object.setPrototypeOf(this, RXn.prototype);
      }
    };
    DXn = class DXn extends gY {
      name = "LimitExceededException";
      $fault = "client";
      constructor(e) {
        super({ name: "LimitExceededException", $fault: "client", ...e });
        Object.setPrototypeOf(this, DXn.prototype);
      }
    };
    PXn = class PXn extends gY {
      name = "NotAuthorizedException";
      $fault = "client";
      constructor(e) {
        super({ name: "NotAuthorizedException", $fault: "client", ...e });
        Object.setPrototypeOf(this, PXn.prototype);
      }
    };
    MXn = class MXn extends gY {
      name = "ResourceConflictException";
      $fault = "client";
      constructor(e) {
        super({ name: "ResourceConflictException", $fault: "client", ...e });
        Object.setPrototypeOf(this, MXn.prototype);
      }
    };
    LXn = class LXn extends gY {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(e) {
        super({ name: "TooManyRequestsException", $fault: "client", ...e });
        Object.setPrototypeOf(this, LXn.prototype);
      }
    };
    OXn = class OXn extends gY {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(e) {
        super({ name: "ResourceNotFoundException", $fault: "client", ...e });
        Object.setPrototypeOf(this, OXn.prototype);
      }
    };
    NXn = class NXn extends gY {
      name = "ExternalServiceException";
      $fault = "client";
      constructor(e) {
        super({ name: "ExternalServiceException", $fault: "client", ...e });
        Object.setPrototypeOf(this, NXn.prototype);
      }
    };
    $Xn = class $Xn extends gY {
      name = "InvalidIdentityPoolConfigurationException";
      $fault = "client";
      constructor(e) {
        super({
          name: "InvalidIdentityPoolConfigurationException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, $Xn.prototype);
      }
    };
    FXn = class FXn extends gY {
      name = "DeveloperUserAlreadyRegisteredException";
      $fault = "client";
      constructor(e) {
        super({
          name: "DeveloperUserAlreadyRegisteredException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, FXn.prototype);
      }
    };
    UXn = class UXn extends gY {
      name = "ConcurrentModificationException";
      $fault = "client";
      constructor(e) {
        super({
          name: "ConcurrentModificationException",
          $fault: "client",
          ...e,
        });
        Object.setPrototypeOf(this, UXn.prototype);
      }
    };
  });
