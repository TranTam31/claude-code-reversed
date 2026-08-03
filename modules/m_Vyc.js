// Module: VYc (lines 165561-165586)
  var VYc = S(() => {
    q9i();
    q9i();
    ((z9i = x(require("process"))),
      (X6r = x(require("fs/promises"))),
      (FAg = (() => {
        let t;
        return async function () {
          if (t) return t;
          let r = "/etc/wsl.conf",
            n = !1;
          try {
            (await X6r.default.access(r, X6r.constants.F_OK), (n = !0));
          } catch {}
          if (!n) return "/mnt/";
          let o = await X6r.default.readFile(r, { encoding: "utf8" }),
            i = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(o);
          if (!i) return "/mnt/";
          return (
            (t = i.groups.mountPoint.trim()),
            (t = t.endsWith("/") ? t : `${t}/`),
            t
          );
        };
      })()));
  });
