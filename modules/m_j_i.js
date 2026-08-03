// Module: j$i (lines 97469-97503)
  var j$i = S(() => {
    B$i();
    nqn = class nqn extends vVe {
      name = "InvalidRequestException";
      $fault = "client";
      constructor(e) {
        super({ name: "InvalidRequestException", $fault: "client", ...e });
        Object.setPrototypeOf(this, nqn.prototype);
      }
    };
    oqn = class oqn extends vVe {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(e) {
        super({ name: "ResourceNotFoundException", $fault: "client", ...e });
        Object.setPrototypeOf(this, oqn.prototype);
      }
    };
    iqn = class iqn extends vVe {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(e) {
        super({ name: "TooManyRequestsException", $fault: "client", ...e });
        Object.setPrototypeOf(this, iqn.prototype);
      }
    };
    sqn = class sqn extends vVe {
      name = "UnauthorizedException";
      $fault = "client";
      constructor(e) {
        super({ name: "UnauthorizedException", $fault: "client", ...e });
        Object.setPrototypeOf(this, sqn.prototype);
      }
    };
  });
