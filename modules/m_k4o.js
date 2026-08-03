// Module: k4o (lines 634717-634787)
  var k4o = S(() => {
    bl();
    Ge();
    Ja();
    Ei();
    ((hup = require("fs/promises")),
      (x4o = qr(async () => {
        try {
          let e = await hup.readFile("/etc/os-release", "utf8"),
            t = e.match(/^ID=["']?(\S+?)["']?\s*$/m),
            r = e.match(/^ID_LIKE=["']?(.+?)["']?\s*$/m);
          return { id: t?.[1] ?? "", idLike: r?.[1]?.split(" ") ?? [] };
        } catch {
          return null;
        }
      })));
    ((cKs = qr(async () => {
      if (Lt() !== "linux") return !1;
      let t = await x4o();
      if (t && !H4o(t, ["arch"])) return !1;
      let r = process.execPath || process.argv[0] || "",
        n = await un("pacman", ["-Qo", r], { timeout: 5000, useCwd: !1 });
      if (n.code === 0 && n.stdout)
        return (w(`Detected pacman installation: ${n.stdout.trim()}`), !0);
      return !1;
    })),
      (uKs = qr(async () => {
        if (Lt() !== "linux") return !1;
        let t = await x4o();
        if (t && !H4o(t, ["debian"])) return !1;
        let r = process.execPath || process.argv[0] || "",
          n = await un("dpkg", ["-S", r], { timeout: 5000, useCwd: !1 });
        if (n.code === 0 && n.stdout)
          return (w(`Detected deb installation: ${n.stdout.trim()}`), !0);
        return !1;
      })),
      (dKs = qr(async () => {
        if (Lt() !== "linux") return !1;
        let t = await x4o();
        if (t && !H4o(t, ["fedora", "rhel", "suse"])) return !1;
        let r = process.execPath || process.argv[0] || "",
          n = await un("rpm", ["-qf", r], { timeout: 5000, useCwd: !1 });
        if (n.code === 0 && n.stdout)
          return (w(`Detected rpm installation: ${n.stdout.trim()}`), !0);
        return !1;
      })),
      (pKs = qr(async () => {
        if (Lt() !== "linux") return !1;
        let t = await x4o();
        if (t && !H4o(t, ["alpine"])) return !1;
        let r = process.execPath || process.argv[0] || "",
          n = await un("apk", ["info", "--who-owns", r], {
            timeout: 5000,
            useCwd: !1,
          });
        if (n.code === 0 && n.stdout)
          return (w(`Detected apk installation: ${n.stdout.trim()}`), !0);
        return !1;
      })),
      (QYe = qr(async () => {
        if (Hbr()) return "homebrew";
        if (lKs()) return "winget";
        if (sKs()) return "mise";
        if (aKs()) return "asdf";
        if (await cKs()) return "pacman";
        if (await pKs()) return "apk";
        if (await uKs()) return "deb";
        if (await dKs()) return "rpm";
        return "unknown";
      })));
  });
