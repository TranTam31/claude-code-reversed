// Module: Gpe (lines 298051-298089)
  var Gpe = S(() => {
    tz();
    tw = {
      CURSOR_VISIBLE: 25,
      ALT_SCREEN: 47,
      ALT_SCREEN_CLEAR: 1049,
      MOUSE_NORMAL: 1000,
      MOUSE_BUTTON: 1002,
      MOUSE_ANY: 1003,
      MOUSE_SGR: 1006,
      FOCUS_EVENTS: 1004,
      BRACKETED_PASTE: 2004,
      THEME_NOTIFY: 2031,
      SYNCHRONIZED_UPDATE: 2026,
    };
    ((HJr = h7(tw.SYNCHRONIZED_UPDATE)),
      (Nsr = JSe(tw.SYNCHRONIZED_UPDATE)),
      (uho = h7(tw.BRACKETED_PASTE)),
      ($sr = JSe(tw.BRACKETED_PASTE)),
      (kJr = h7(tw.FOCUS_EVENTS)),
      (HMt = JSe(tw.FOCUS_EVENTS)),
      (dho = h7(tw.THEME_NOTIFY)),
      (Fsr = JSe(tw.THEME_NOTIFY)),
      (nz = h7(tw.CURSOR_VISIBLE)),
      (g7 = JSe(tw.CURSOR_VISIBLE)),
      (pho = h7(tw.ALT_SCREEN_CLEAR)),
      (f2u = JSe(tw.ALT_SCREEN_CLEAR)),
      (qly =
        h7(tw.MOUSE_NORMAL) +
        h7(tw.MOUSE_BUTTON) +
        h7(tw.MOUSE_ANY) +
        h7(tw.MOUSE_SGR)),
      (zly = h7(tw.MOUSE_NORMAL) + h7(tw.MOUSE_SGR)),
      (Wpe =
        JSe(tw.MOUSE_SGR) +
        JSe(tw.MOUSE_ANY) +
        JSe(tw.MOUSE_BUTTON) +
        JSe(tw.MOUSE_NORMAL)));
  });
