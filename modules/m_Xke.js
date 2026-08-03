// Module: XKe (lines 533532-533561)
  var XKe = S(() => {
    bl();
    pt();
    rL();
    Ge();
    Ar();
    aU();
    ((CMo = require("child_process")), (wMo = require("path")));
    ((ou_ = /[%!"&|<>^\r\n\0]/),
      (iu_ = { "\r": "\\r", "\n": "\\n", "\x00": "\\0" }));
    su_ = new Set(["start", "cmd", "cmd.exe"]);
    ((au_ = [
      "code",
      "cursor",
      "windsurf",
      "codium",
      "subl",
      "atom",
      "gedit",
      "notepad++",
      "notepad",
    ]),
      (lu_ = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/),
      (cu_ = new Set(["code", "cursor", "windsurf", "codium"])));
    du_ = qr(() => {
      if (Z.VISUAL) return Z.VISUAL;
      if (Z.EDITOR) return Z.EDITOR;
      return "start /wait notepad";
    });
  });
