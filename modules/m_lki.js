// Module: lKi (lines 166977-167028)
  var lKi = S(() => {
    Aj();
    tH();
    ENe();
    vj();
    l8();
    b7c();
    ((S7c = x(require("child_process"))),
      (X_e = Og("AzureCliCredential")),
      (E7c = {
        getSafeWorkingDir() {
          {
            let e = process.env.SystemRoot || process.env.SYSTEMROOT;
            if (!e)
              (X_e.getToken.warning(
                "The SystemRoot environment variable is not set. This may cause issues when using the Azure CLI credential.",
              ),
                (e = "C:\\Windows"));
            return e;
          }
        },
        async getAzureCliAccessToken(e, t, r, n) {
          let o = [],
            i = [];
          if (t) o = ["--tenant", t];
          if (r) i = ["--subscription", `"${r}"`];
          return new Promise((s, a) => {
            try {
              S7c.default.execFile(
                "az",
                [
                  "account",
                  "get-access-token",
                  "--output",
                  "json",
                  "--resource",
                  e,
                  ...o,
                  ...i,
                ],
                { cwd: E7c.getSafeWorkingDir(), shell: !0, timeout: n },
                (l, c, u) => {
                  s({ stdout: c, stderr: u, error: l });
                },
              );
            } catch (l) {
              a(l);
            }
          });
        },
      }));
  });
