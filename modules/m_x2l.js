// Module: x2l (lines 55062-55086)
  var x2l = S(() => {
    ((cWn = x(require("process"))),
      (T2l = x(require("os"))),
      (ZRi = x(require("tty"))));
    ({ env: TM } = cWn.default);
    if (
      Fye("no-color") ||
      Fye("no-colors") ||
      Fye("color=false") ||
      Fye("color=never")
    )
      lWn = 0;
    else if (
      Fye("color") ||
      Fye("colors") ||
      Fye("color=true") ||
      Fye("color=always")
    )
      lWn = 1;
    ((lAh = {
      stdout: w2l({ isTTY: ZRi.default.isatty(1) }),
      stderr: w2l({ isTTY: ZRi.default.isatty(2) }),
    }),
      (C2l = lAh));
  });
