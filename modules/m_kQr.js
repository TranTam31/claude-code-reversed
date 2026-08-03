// Module: kQr (lines 311243-311265)
  var kQr = S(() => {
    ABr();
    ((XWu = x(mPi(), 1)),
      (Ygo = x(require("process"))),
      (JWu = require("stream")),
      (Qfy =
        Ygo.default.platform === "win32"
          ? [
              "APPDATA",
              "HOMEDRIVE",
              "HOMEPATH",
              "LOCALAPPDATA",
              "PATH",
              "PROCESSOR_ARCHITECTURE",
              "SYSTEMDRIVE",
              "SYSTEMROOT",
              "TEMP",
              "USERNAME",
              "USERPROFILE",
              "PROGRAMFILES",
            ]
          : ["HOME", "LOGNAME", "PATH", "SHELL", "TERM", "USER"]));
  });
