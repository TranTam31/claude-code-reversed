// Module: ox (lines 357904-358162)
  var ox = S(() => {
    Eps();
    bl();
    vt();
    Yd();
    pt();
    zt();
    EM();
    hn();
    Ar();
    Qr();
    Ja();
    Wi();
    Jv();
    H1u();
    Ir();
    Ei();
    xq();
    xj();
    Pr();
    XC();
    Gp();
    Ge();
    fde();
    st();
    Jis();
    XKr();
    Zt();
    ((AXu = require("fs/promises")),
      (wXu = require("net")),
      (Zee = require("path")));
    wcr = {
      cursor: {
        ideKind: "vscode",
        displayName: "Cursor",
        processKeywordsMac: ["Cursor Helper", "Cursor.app"],
        processKeywordsWindows: ["cursor.exe"],
        processKeywordsLinux: ["cursor"],
      },
      windsurf: {
        ideKind: "vscode",
        displayName: "Devin Desktop",
        processKeywordsMac: [
          "Windsurf Helper",
          "Windsurf.app",
          "Devin Helper",
          "Devin.app",
        ],
        processKeywordsWindows: ["windsurf.exe", "Devin.exe"],
        processKeywordsLinux: ["windsurf", "devin-desktop"],
      },
      vscode: {
        ideKind: "vscode",
        displayName: "VS Code",
        processKeywordsMac: ["Visual Studio Code", "Code Helper"],
        processKeywordsWindows: ["code.exe"],
        processKeywordsLinux: ["code"],
      },
      intellij: {
        ideKind: "jetbrains",
        displayName: "IntelliJ IDEA",
        processKeywordsMac: ["IntelliJ IDEA"],
        processKeywordsWindows: ["idea64.exe"],
        processKeywordsLinux: ["idea", "intellij"],
      },
      pycharm: {
        ideKind: "jetbrains",
        displayName: "PyCharm",
        processKeywordsMac: ["PyCharm"],
        processKeywordsWindows: ["pycharm64.exe"],
        processKeywordsLinux: ["pycharm"],
      },
      webstorm: {
        ideKind: "jetbrains",
        displayName: "WebStorm",
        processKeywordsMac: ["WebStorm"],
        processKeywordsWindows: ["webstorm64.exe"],
        processKeywordsLinux: ["webstorm"],
      },
      phpstorm: {
        ideKind: "jetbrains",
        displayName: "PhpStorm",
        processKeywordsMac: ["PhpStorm"],
        processKeywordsWindows: ["phpstorm64.exe"],
        processKeywordsLinux: ["phpstorm"],
      },
      rubymine: {
        ideKind: "jetbrains",
        displayName: "RubyMine",
        processKeywordsMac: ["RubyMine"],
        processKeywordsWindows: ["rubymine64.exe"],
        processKeywordsLinux: ["rubymine"],
      },
      clion: {
        ideKind: "jetbrains",
        displayName: "CLion",
        processKeywordsMac: ["CLion"],
        processKeywordsWindows: ["clion64.exe"],
        processKeywordsLinux: ["clion"],
      },
      goland: {
        ideKind: "jetbrains",
        displayName: "GoLand",
        processKeywordsMac: ["GoLand"],
        processKeywordsWindows: ["goland64.exe"],
        processKeywordsLinux: ["goland"],
      },
      rider: {
        ideKind: "jetbrains",
        displayName: "Rider",
        processKeywordsMac: ["Rider"],
        processKeywordsWindows: ["rider64.exe"],
        processKeywordsLinux: ["rider"],
      },
      datagrip: {
        ideKind: "jetbrains",
        displayName: "DataGrip",
        processKeywordsMac: ["DataGrip"],
        processKeywordsWindows: ["datagrip64.exe"],
        processKeywordsLinux: ["datagrip"],
      },
      appcode: {
        ideKind: "jetbrains",
        displayName: "AppCode",
        processKeywordsMac: ["AppCode"],
        processKeywordsWindows: ["appcode.exe"],
        processKeywordsLinux: ["appcode"],
      },
      dataspell: {
        ideKind: "jetbrains",
        displayName: "DataSpell",
        processKeywordsMac: ["DataSpell"],
        processKeywordsWindows: ["dataspell64.exe"],
        processKeywordsLinux: ["dataspell"],
      },
      aqua: {
        ideKind: "jetbrains",
        displayName: "Aqua",
        processKeywordsMac: [],
        processKeywordsWindows: ["aqua64.exe"],
        processKeywordsLinux: [],
      },
      gateway: {
        ideKind: "jetbrains",
        displayName: "Gateway",
        processKeywordsMac: [],
        processKeywordsWindows: ["gateway64.exe"],
        processKeywordsLinux: [],
      },
      fleet: {
        ideKind: "jetbrains",
        displayName: "Fleet",
        processKeywordsMac: [],
        processKeywordsWindows: ["fleet.exe"],
        processKeywordsLinux: [],
      },
      androidstudio: {
        ideKind: "jetbrains",
        displayName: "Android Studio",
        processKeywordsMac: ["Android Studio"],
        processKeywordsWindows: ["studio64.exe"],
        processKeywordsLinux: ["android-studio"],
      },
    };
    ((Tcr = qr(() => ISo(Z.terminal))),
      (RSo = qr(() => PFe(yj.terminal))),
      (vz = qr(
        () => Tcr() || RSo() || Boolean(process.env.FORCE_CODE_TERMINAL),
      )));
    j0y = qr(async () => {
      let { stdout: e, code: t } = await un("powershell.exe", [
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        "$env:USERPROFILE",
      ]);
      if (t === 0 && e.trim()) return e.trim();
      w(
        "Unable to get Windows USERPROFILE via PowerShell - IDE detection may be incomplete",
      );
      return;
    });
    ((Y0y = qr(async () => {
      try {
        if (Lt() !== "macos") return null;
        let t = process.ppid;
        for (let r = 0; r < 10; r++) {
          if (!t || t === 0 || t === 1) break;
          let n = (
            await un("ps", ["-o", "command=", "-p", String(t)])
          ).stdout.trim();
          if (n) {
            let i = {
                "Visual Studio Code.app": "code",
                "Cursor.app": "cursor",
                "Windsurf.app": "windsurf",
                "Devin.app": "devin",
                "Visual Studio Code - Insiders.app": "code",
                "VSCodium.app": "codium",
              },
              s = "/Contents/MacOS/";
            for (let [a, l] of Object.entries(i)) {
              let c = n.indexOf(a + "/Contents/MacOS/");
              if (c !== -1) {
                let u = c + a.length;
                return n.substring(0, u) + "/Contents/Resources/app/bin/" + l;
              }
            }
          }
          let o = (
            await un("ps", ["-o", "ppid=", "-p", String(t)])
          ).stdout.trim();
          if (!o) break;
          t = parseInt(o);
        }
        return null;
      } catch {
        return null;
      }
    })),
      (X0y = {
        vscode: ["code", "codium"],
        cursor: ["cursor"],
        windsurf: ["windsurf", "devin"],
      }));
    vXu = {
      code: "VS Code",
      cursor: "Cursor",
      windsurf: "Devin Desktop",
      antigravity: "Antigravity",
      vi: "Vim",
      vim: "Vim",
      nano: "nano",
      notepad: "Notepad",
      "start /wait notepad": "Notepad",
      emacs: "Emacs",
      subl: "Sublime Text",
      atom: "Atom",
    };
    MXu = qr(
      async (e, t) => {
        if (process.env.CLAUDE_CODE_IDE_HOST_OVERRIDE)
          return process.env.CLAUDE_CODE_IDE_HOST_OVERRIDE;
        if (Lt() !== "wsl" || !e) return "127.0.0.1";
        try {
          let r = await UO("ip route show | grep -i default", { reject: !1 });
          if (r.exitCode === 0 && r.stdout) {
            let n = r.stdout.match(/default via (\d+\.\d+\.\d+\.\d+)/);
            if (n) {
              let o = n[1];
              if (await RAs(o, t)) return o;
            }
          }
        } catch (r) {}
        return "127.0.0.1";
      },
      (e, t) => `${e}:${t}`,
    );
  });
