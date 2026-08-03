// Module: Tq (lines 59466-59530)
  var Tq = S(() => {
    bl();
    Ge();
    Ar();
    Wi();
    QG();
    Ei();
    Grt();
    qOe = x(require("path/win32"));
    NQ = qr(() => {
      let { existsSync: e } = Xt();
      if (Z.CLAUDE_CODE_GIT_BASH_PATH) {
        let n = qOe.basename(Z.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(),
          o = ["bash.exe", "sh.exe", "bash", "sh"].includes(n);
        if (o && e(Z.CLAUDE_CODE_GIT_BASH_PATH))
          return Z.CLAUDE_CODE_GIT_BASH_PATH;
        w(
          `CLAUDE_CODE_GIT_BASH_PATH "${Z.CLAUDE_CODE_GIT_BASH_PATH}" ${o ? "not found" : "is not a bash/sh binary"}; falling back to auto-detection`,
          { level: "warn" },
        );
      }
      let t = [
        "C:\\Program Files\\Git\\bin\\bash.exe",
        "C:\\Program Files (x86)\\Git\\bin\\bash.exe",
      ];
      for (let n of t) if (e(n)) return n;
      let r = FWn("git");
      if (r) {
        let n = qOe.join(r, "..", "..", "bin", "bash.exe");
        if (e(n)) return n;
      }
      return null;
    });
    ((AB = T0(
      (e) => {
        if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
        let t = e.match(/^([A-Za-z]):[/\\]/);
        if (t)
          return "/" + t[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
        return e.replaceAll("\\", "/");
      },
      (e) => e,
      500,
    )),
      (IYt = T0(
        (e) => {
          if (e.startsWith("//")) return e.replaceAll("/", "\\");
          let t = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
          if (t) {
            let n = t[1].toUpperCase(),
              o = e.slice(("/cygdrive/" + t[1]).length);
            return n + ":" + (o || "\\").replaceAll("/", "\\");
          }
          let r = e.match(/^\/([A-Za-z])(\/|$)/);
          if (r) {
            let n = r[1].toUpperCase(),
              o = e.slice(2);
            return n + ":" + (o || "\\").replaceAll("/", "\\");
          }
          return e.replaceAll("/", "\\");
        },
        (e) => e,
        500,
      )));
  });
