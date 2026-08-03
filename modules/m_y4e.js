// Module: y4e (lines 658730-658741)
  var y4e = S(() => {
    bl();
    y7e = qr(
      () => {
        if (process.env.TERM === "xterm-ghostty")
          return ["\xB7", "\u2722", "\u2733", "\u2736", "\u273B", "\u273B"];
        return ["\xB7", "\u2722", "*", "\u2736", "\u273B", "\u273D"];
      },
      () => process.env.TERM,
    );
    Wyp = new Map();
  });
