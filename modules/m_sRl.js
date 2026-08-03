// Module: SRl (lines 29058-29070)
  var SRl = S(() => {
    bl();
    Wi();
    bRl = qr(() => {
      try {
        return Xt()
          .readFileSync("/proc/version", { encoding: "utf8" })
          .toLowerCase();
      } catch {
        return;
      }
    });
  });
