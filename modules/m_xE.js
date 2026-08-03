// Module: xE (lines 254755-254816)
  var xE = S(() => {
    pt();
    Ge();
    Ar();
    Ja();
    Ei();
    aU();
    f8e();
    lPt();
    ((Uas = require("buffer")),
      (Bas = JY + String.fromCharCode(jie.OSC)),
      (Fas = JY + "\\"));
    ((G9g = new Set([
      "ghostty",
      "kitty",
      "WezTerm",
      "alacritty",
      "xterm",
      "gnome-terminal",
      "vte-based",
      "konsole",
      "windows-terminal",
      "mintty",
      ...oCe,
    ])),
      (V9g = new Set([
        "vscode",
        "cursor",
        "windsurf",
        "antigravity",
        "codium",
      ])));
    gv = {
      SET_TITLE_AND_ICON: 0,
      SET_ICON: 1,
      SET_TITLE: 2,
      SET_COLOR: 4,
      SET_CWD: 7,
      HYPERLINK: 8,
      ITERM2: 9,
      SET_FG_COLOR: 10,
      SET_BG_COLOR: 11,
      SET_CURSOR_COLOR: 12,
      CLIPBOARD: 52,
      KITTY: 99,
      RESET_COLOR: 104,
      RESET_FG_COLOR: 110,
      RESET_BG_COLOR: 111,
      RESET_CURSOR_COLOR: 112,
      SEMANTIC_PROMPT: 133,
      GHOSTTY: 777,
      ITERM2_PROPRIETARY: 1337,
      TAB_STATUS: 21337,
    };
    ((cPt = j0(gv.HYPERLINK, "", "")),
      (uPt = { NOTIFY: 0, BADGE: 2, PROGRESS: 4 }),
      (dPt = { CLEAR: 0, SET: 1, ERROR: 2, INDETERMINATE: 3 }),
      (Uuo = `${Bas}${gv.ITERM2};${uPt.PROGRESS};${dPt.CLEAR};${Oj}`),
      (Ntw = `${Bas}${gv.SET_TITLE_AND_ICON};${Oj}`),
      (Buo = j0(gv.TAB_STATUS, "indicator=;status=;status-color=")));
    Q9g = exu("");
  });
