// Module: MKt (lines 38696-38725)
  var MKt = S(() => {
    ((THi = require("fs")),
      (SOl = require("net")),
      (EOl = require("os")),
      (vOl = require("path")));
    lU = class lU extends Error {
      constructor(e) {
        super(e);
        this.name = "SocketConnectionError";
      }
    };
    xCt = class xCt extends Error {
      constructor(e) {
        super(e);
        this.name = "NoExtensionConnectedError";
      }
    };
    HCt = class HCt extends Error {
      constructor(e) {
        super(e);
        this.name = "ToolCallTimeoutError";
      }
    };
    prt = class prt extends Error {
      constructor(e) {
        super(e);
        this.name = "ExtensionDisconnectedMidCallError";
      }
    };
  });
