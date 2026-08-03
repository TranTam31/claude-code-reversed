// Module: BCo (lines 430105-430148)
  var BCo = S(() => {
    I4y = new Set([
      65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
      327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
      655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
      917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
    ]);
    (function (e) {
      ((e[(e.EOF = -1)] = "EOF"),
        (e[(e.NULL = 0)] = "NULL"),
        (e[(e.TABULATION = 9)] = "TABULATION"),
        (e[(e.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
        (e[(e.LINE_FEED = 10)] = "LINE_FEED"),
        (e[(e.FORM_FEED = 12)] = "FORM_FEED"),
        (e[(e.SPACE = 32)] = "SPACE"),
        (e[(e.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
        (e[(e.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
        (e[(e.AMPERSAND = 38)] = "AMPERSAND"),
        (e[(e.APOSTROPHE = 39)] = "APOSTROPHE"),
        (e[(e.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
        (e[(e.SOLIDUS = 47)] = "SOLIDUS"),
        (e[(e.DIGIT_0 = 48)] = "DIGIT_0"),
        (e[(e.DIGIT_9 = 57)] = "DIGIT_9"),
        (e[(e.SEMICOLON = 59)] = "SEMICOLON"),
        (e[(e.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
        (e[(e.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
        (e[(e.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
        (e[(e.QUESTION_MARK = 63)] = "QUESTION_MARK"),
        (e[(e.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
        (e[(e.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
        (e[(e.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
        (e[(e.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
        (e[(e.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
        (e[(e.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z"));
    })(Nr || (Nr = {}));
    _te = {
      DASH_DASH: "--",
      CDATA_START: "[CDATA[",
      DOCTYPE: "doctype",
      SCRIPT: "script",
      PUBLIC: "public",
      SYSTEM: "system",
    };
  });
