// Module: Mcf (lines 800480-800502)
  var Mcf = S(() => {
    Mg();
    vt();
    xS();
    Ge();
    st();
    oWo();
    Zt();
    ((mJo = require("fs/promises")),
      (Dcf = require("path")),
      (dWb = Se(() =>
        Re.object({
          writtenAtMs: Re.number().optional(),
          shells: Re.array(
            Re.object({
              pid: Re.number().int().positive(),
              procStart: Re.string().optional(),
              startTimeTicks: Re.number().int().optional(),
            }),
          ).catch([]),
        }),
      )));
  });
