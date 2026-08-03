// Module: yme (lines 641730-641749)
  var yme = S(() => {
    Vn();
    xS();
    Ge();
    st();
    nxt();
    vT();
    Zt();
    ((sgt = require("fs/promises")),
      (t3o = require("path")),
      (h5_ = Se(() =>
        v.object({
          sessionId: v.string(),
          environmentId: v.string(),
          source: v.enum(["standalone", "repl"]),
          pid: v.number().optional(),
          procStart: v.string().optional(),
        }),
      )));
  });
