// Module: ups (lines 280742-280788)
  var ups = S(() => {
    pt();
    Gb();
    Mw();
    Ge();
    Qr();
    st();
    Yb();
    ky();
    $ie();
    GQ();
    Ffo();
    J8();
    XD();
    kM();
    ((Yir = require("fs/promises")), (Npe = require("path")));
    ((foy = [
      "mcpServers",
      "lspServers",
      "agents",
      "outputStyles",
      "themes",
      "workflows",
      "channels",
      "monitors",
      "settings",
      "userConfig",
      "experimental",
    ]),
      (moy = {
        defaultEnabled: (e) => typeof e === "boolean",
        author: (e) => d3r().safeParse(e).success,
        homepage: (e) => {
          if (typeof e !== "string") return !1;
          try {
            let { protocol: t } = new URL(e);
            return t === "http:" || t === "https:";
          } catch {
            return !1;
          }
        },
        repository: (e) => typeof e === "string",
        license: (e) => typeof e === "string",
        keywords: (e) =>
          Array.isArray(e) && e.every((t) => typeof t === "string"),
      }));
  });
