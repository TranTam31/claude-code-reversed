// Module: POs (lines 471348-471366)
  var POs = S(() => {
    Ge();
    gKe();
    aH();
    _an();
    EOs();
    IOs();
    swd = x(require("vm"));
    lwd = class lwd extends Error {
      constructor(e, t) {
        super(
          `REPL replay: ${e} invoked but only ${t} calls were cached. ` +
            "The replayed code is making more tool calls than the original \u2014 " +
            "likely nondeterminism (Date.now, Math.random) took a different branch.",
        );
        this.name = "ReplayCacheExhausted";
      }
    };
  });
