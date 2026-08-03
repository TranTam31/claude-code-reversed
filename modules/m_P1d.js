// Module: P1d (lines 523054-523128)
  var P1d = S(() => {
    S$e();
    l8e();
    HPo = require("path");
    vs_ = [
      {
        label: "$HISTFILE",
        format: "posix",
        resolve: (e) => {
          let t = e.histFile?.trim(),
            r = zKe(e.platform);
          if (!t || !r.isAbsolute(t)) return;
          return { path: t, format: ks_(r.basename(t)) };
        },
      },
      {
        label: "~/.zsh_history",
        format: "posix",
        resolve: (e) =>
          e.platform === "windows"
            ? void 0
            : { path: zKe(e.platform).join(e.homeDir, ".zsh_history") },
      },
      {
        label: "~/.bash_history",
        format: "posix",
        resolve: (e) => ({
          path: zKe(e.platform).join(e.homeDir, ".bash_history"),
        }),
      },
      {
        label: "%APPDATA%\\...\\PSReadLine\\ConsoleHost_history.txt",
        format: "psreadline",
        resolve: (e) =>
          e.platform !== "windows"
            ? void 0
            : {
                path: zKe(e.platform).join(
                  Is_(e),
                  "Microsoft",
                  "Windows",
                  "PowerShell",
                  "PSReadLine",
                  "ConsoleHost_history.txt",
                ),
              },
      },
      {
        label: "~/.local/share/powershell/PSReadLine/ConsoleHost_history.txt",
        format: "psreadline",
        resolve: (e) =>
          e.platform === "windows"
            ? void 0
            : {
                path: zKe(e.platform).join(
                  k1d(e),
                  "powershell",
                  "PSReadLine",
                  "ConsoleHost_history.txt",
                ),
              },
      },
      {
        label: "~/.local/share/fish/fish_history",
        format: "fish",
        resolve: (e) =>
          e.platform === "windows"
            ? void 0
            : { path: zKe(e.platform).join(k1d(e), "fish", "fish_history") },
      },
    ];
    ((Cs_ = new Set(["sudo", "doas", "env"])),
      (xs_ = new Set(["sudo", "gsudo"])),
      (C1d = /^[a-z][\w.+-]{0,19}$/));
  });
