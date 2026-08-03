// Module: IOs (lines 471075-471133)
  var IOs = S(() => {
    Ss();
    ei();
    st();
    r9r();
    yb();
    gKe();
    VM();
    aH();
    $Ad();
    _an();
    JAd();
    ((gko = require("path")),
      (kOs = require("util")),
      (p$t = x(require("vm"))),
      (I8y = /^[a-zA-Z0-9_-]{1,111}$/),
      (ewd = [
        "sh",
        "cat",
        "rg",
        "rgf",
        "gl",
        "put",
        "gh",
        "chdir",
        "log",
        "str",
        "o",
        "REPO",
      ]));
    twd = new WeakSet();
    Ian = class Ian extends Dr {
      key;
      constructor(e) {
        super(
          `REPL sandbox code made the global '${e}' non-configurable; the host cannot restore it`,
          "REPL sandbox pinned a managed global non-configurable",
        );
        ((this.name = "VMContextPoisonedError"), (this.key = e), twd.add(this));
      }
    };
    D8y = [
      "console",
      "setTimeout",
      "clearTimeout",
      "setInterval",
      "clearInterval",
      "atob",
      "btoa",
      "shQuote",
      "registerTool",
      "unregisterTool",
      "listTools",
      "getTool",
    ];
    O8y = ["A", "B", "C", "glob", "head", "type", "i"];
    ((N8y = /^(pr|issue|run|workflow|release|label|cache)\b/),
      ($8y = /(^|\s)(-R|--repo\b)/));
  });
