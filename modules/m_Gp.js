// Module: Gp (lines 195973-195983)
  var Gp = S(() => {
    dau = require("events");
    ZOg = new FinalizationRegistry(({ parentSignalRef: e, handler: t }) => {
      e.deref()?.removeEventListener("abort", t);
    });
    uau = new Map();
    e1g = new Set(["user-cancel", "remote-cancel", "shutdown", "interrupt"]);
    t1g = new Set(["interrupt", "refusal-fallback-edit"]);
    r1g = new DOMException(Hio, "AbortError");
    n1g = new DOMException(FZi, "AbortError");
  });
