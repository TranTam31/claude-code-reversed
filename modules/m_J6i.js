// Module: J6i (lines 148324-148335)
  var J6i = S(() => {
    ((JGc = require("crypto")),
      (nfg =
        typeof ((X6i =
          globalThis === null || globalThis === void 0
            ? void 0
            : globalThis.crypto) === null || X6i === void 0
          ? void 0
          : X6i.randomUUID) === "function"
          ? globalThis.crypto.randomUUID.bind(globalThis.crypto)
          : JGc.randomUUID));
  });
