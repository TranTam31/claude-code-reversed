// Module: pBt (lines 657110-657165)
  var pBt = S(() => {
    gd();
    bl();
    Vpe();
    ct();
    kFt();
    TXs();
    zt();
    xXs();
    kXs();
    hn();
    Ge();
    Ar();
    st();
    Ja();
    vc();
    Vf();
    em();
    Ir();
    Ei();
    QB();
    Zt();
    ((CSr = require("crypto")),
      (M1 = require("fs/promises")),
      (g4e = require("os")),
      (hX = require("path")),
      (vyp = require("url")),
      (V3o = {
        ghostty: "Ghostty",
        kitty: "Kitty",
        "iTerm.app": "iTerm2",
        WezTerm: "WezTerm",
        WarpTerminal: "Warp",
        "windows-terminal": "Windows Terminal",
      }));
    K3o = qr(
      async (e) => {
        let t = (r) =>
          hX.join(
            g4e.homedir(),
            g4e.platform() === "win32"
              ? hX.join("AppData", "Roaming", r, "User")
              : g4e.platform() === "darwin"
                ? hX.join("Library", "Application Support", r, "User")
                : hX.join(".config", r, "User"),
          );
        if (e === "VSCode") return t("Code");
        if (e === "Devin Desktop") {
          let r = t("Devin");
          return (await ey(r)) ? r : t("Windsurf");
        }
        return t(e);
      },
      (e) => `${e}:${g4e.homedir()}`,
    );
  });
