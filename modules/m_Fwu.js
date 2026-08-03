// Module: FWu (lines 310135-310140)
  var FWu = S(() => {
    o_s =
      globalThis.crypto?.webcrypto ??
      globalThis.crypto ??
      import("crypto").then((e) => e.webcrypto);
  });
