// Module: cKi (lines 167111-167157)
  var cKi = S(() => {
    tH();
    vj();
    Aj();
    l8();
    ENe();
    ((v7c = x(require("child_process"))),
      (D6e = Og("AzureDeveloperCliCredential")),
      (A7c = {
        getSafeWorkingDir() {
          {
            let e = process.env.SystemRoot || process.env.SYSTEMROOT;
            if (!e)
              (D6e.getToken.warning(
                "The SystemRoot environment variable is not set. This may cause issues when using the Azure Developer CLI credential.",
              ),
                (e = "C:\\Windows"));
            return e;
          }
        },
        async getAzdAccessToken(e, t, r) {
          let n = [];
          if (t) n = ["--tenant-id", t];
          return new Promise((o, i) => {
            try {
              v7c.default.execFile(
                "azd",
                [
                  "auth",
                  "token",
                  "--output",
                  "json",
                  ...e.reduce((s, a) => s.concat("--scope", a), []),
                  ...n,
                ],
                { cwd: A7c.getSafeWorkingDir(), timeout: r },
                (s, a, l) => {
                  o({ stdout: a, stderr: l, error: s });
                },
              );
            } catch (s) {
              i(s);
            }
          });
        },
      }));
  });
