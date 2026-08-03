// Module: TCe (lines 66881-66899)
  var TCe = S(() => {
    bl();
    Ar();
    Ei();
    ((RGl = require("path")),
      (fU = qr(function () {
        switch (Lt()) {
          case "macos":
            return "/Library/Application Support/ClaudeCode";
          case "windows":
            return "C:\\Program Files\\ClaudeCode";
          default:
            return "/etc/claude-code";
        }
      })),
      (M4r = qr(function () {
        return RGl.join(fU(), "managed-settings.d");
      })));
  });
