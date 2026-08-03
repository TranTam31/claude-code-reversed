// Module: st (lines 22804-22878)
  var st = S(() => {
    hB();
    HUr = class HUr extends Error {
      constructor(e) {
        super(e);
        this.name = this.constructor.name;
      }
    };
    bye = class bye extends Error {};
    U0t = class U0t extends Error {
      name = "CliUserError";
    };
    tl = class tl extends Error {
      constructor(e) {
        super(e);
        this.name = "AbortError";
      }
    };
    gE = class gE extends tl {};
    AQ = class AQ extends Error {
      filePath;
      defaultConfig;
      constructor(e, t, r) {
        super(e);
        ((this.name = "ConfigParseError"),
          (this.filePath = t),
          (this.defaultConfig = r));
      }
    };
    hq = class hq extends Error {
      stdout;
      stderr;
      code;
      interrupted;
      hadSandboxViolation;
      constructor(e) {
        super("Shell command failed");
        ((this.name = "ShellError"),
          (this.stdout = e.stdout),
          (this.stderr = e.stderr),
          (this.code = e.code),
          (this.interrupted = e.interrupted),
          (this.hadSandboxViolation = e.hadSandboxViolation ?? !1));
      }
    };
    Wv = class Wv extends Error {
      formattedMessage;
      constructor(e, t) {
        super(e);
        this.formattedMessage = t;
        this.name = "TeleportOperationError";
      }
    };
    Dr = class Dr extends Error {
      telemetryMessage;
      errorClass;
      constructor(e, t, r) {
        super(e);
        ((this.name = "TelemetrySafeError"),
          (this.telemetryMessage = t ?? e),
          (this.errorClass = r));
      }
    };
    Pue = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EMFILE"]);
    q8m = new Set([
      "ENOENT",
      "EACCES",
      "EPERM",
      "ENOTDIR",
      "ELOOP",
      "ENAMETOOLONG",
      "EROFS",
    ]);
    z8m = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EIO"]);
  });
