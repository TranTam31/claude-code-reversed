// Module: nMd (lines 509053-509099)
  var nMd = S(() => {
    X8();
    eP();
    Wi();
    hp();
    ((Ye_ = /^(\d+),(\d+)p$/),
      (Xe_ = /^(\d+)p$/),
      (Je_ = /^\s*(echo|printf|true|:)\b/));
    et_ = new Map([
      ["cat", new Set(["-n", "--number"])],
      ["nl", new Set()],
      ["bat", new Set(["-n", "--number", "-p", "--plain"])],
      ["batcat", new Set(["-n", "--number", "-p", "--plain"])],
    ]);
    ((ot_ = /^-[ABC]\d+$/),
      (it_ = /^--(?:after-context|before-context|context)=\d+$/),
      (st_ = /^-[niwxEFGPHh]+$/),
      (at_ = new Set([
        "--line-number",
        "--ignore-case",
        "--word-regexp",
        "--line-regexp",
        "--extended-regexp",
        "--fixed-strings",
        "--basic-regexp",
        "--perl-regexp",
        "--with-filename",
        "--no-filename",
        "--color=never",
        "--color=auto",
      ])),
      (lt_ = /^-[iSswxFnNHUP]+$/),
      (ct_ = new Set([
        "--ignore-case",
        "--smart-case",
        "--case-sensitive",
        "--word-regexp",
        "--line-regexp",
        "--fixed-strings",
        "--line-number",
        "--no-line-number",
        "--with-filename",
        "--no-filename",
        "--multiline",
        "--pcre2",
      ])));
  });
