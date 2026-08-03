// Module: Qr (lines 16366-16391)
  var Qr = S(() => {
    AK();
    bl();
    np();
    Bv();
    fB();
    AK();
    ((HHl = require("os")), (mye = require("path")));
    pn = qr(
      () => (CHl() ?? mye.join(HHl.homedir(), ".claude")).normalize("NFC"),
      CHl,
    );
    BTi = qr(() => Yt(process.env.CLAUDE_CODE_SUPERVISED));
    Wqm = qr(() =>
      DFr()
        .models.flatMap((e) =>
          e.vertex_region_env_var &&
          /^VERTEX_REGION_[A-Z0-9_]+$/.test(e.vertex_region_env_var)
            ? [[Q2n(e.id), e.vertex_region_env_var]]
            : [],
        )
        .sort(
          ([e], [t]) => t.length - e.length || (e < t ? -1 : e > t ? 1 : 0),
        ),
    );
  });
