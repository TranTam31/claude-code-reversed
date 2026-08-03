// Module: Sfe (lines 377086-377106)
  var Sfe = S(() => {
    Zg();
    bl();
    Wu();
    zt();
    Zr();
    Ge();
    st();
    ts();
    Ei();
    jp();
    bY();
    Zt();
    kUe();
    pnd = require("os");
    ept = qr(async () => {
      let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
      if (e) return e;
      return (await zs().readAsync())?.trustedDeviceToken;
    });
  });
