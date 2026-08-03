// Module: vIp (lines 688268-688304)
  var vIp = S(() => {
    vt();
    gke();
    Uy();
    ct();
    Ge();
    Ar();
    st();
    ERe();
    Ngt();
    xj();
    Un();
    ((_Ip = require("os")),
      (bIp = require("path")),
      (mVo = x(ot(), 1)),
      (Nh = x(ue(), 1)),
      (EIp = x(_e(), 1)));
    osb = {
      type: "local-jsx",
      name: "install",
      description: "Install Claude Code native build",
      argumentHint: "[options]",
      async call(e, t, r) {
        let n = r.includes("--force"),
          i = r.filter((a) => !a.startsWith("--"))[0],
          { unmount: s } = await Ype(
            Nh.jsx(nsb, {
              onDone: (a, l) => {
                (s(), e(a, l));
              },
              force: n,
              target: i,
            }),
          );
      },
    };
  });
