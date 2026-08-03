// Module: cFd (lines 532298-532385)
  var cFd = S(() => {
    Vn();
    pt();
    WT();
    Qr();
    J8e();
    st();
    em();
    nun();
    xBs();
    ((aFd = require("os")),
      (EL = require("path")),
      (Tc_ = Se(() =>
        v
          .object({
            httpUrl: v.string().optional(),
            url: v.string().optional(),
            command: v.string().optional(),
            args: v.array(v.string()).optional(),
            env: v.record(v.string(), v.string()).optional(),
            headers: v.record(v.string(), v.string()).optional(),
            timeout: v.number().optional(),
          })
          .loose(),
      )));
    ((xc_ = Se(() =>
      v
        .object({
          mcpServers: v.unknown().optional(),
          contextFileName: v
            .string()
            .optional()
            .catch(void 0),
        })
        .loose(),
    )),
      (Hc_ = Se(() =>
        v.object({ prompt: v.string(), description: v.string().optional() }),
      )));
    lFd = {
      id: "gemini",
      displayName: "Google Gemini CLI",
      async detect(e) {
        let t = sFd(e),
          r = e.cwd ?? gn();
        if (e.homeDir === void 0 && Rmt()) return !0;
        return (
          (await F4(EL.join(t, "settings.json"))) ||
          (await F4(EL.join(t, "GEMINI.md"))) ||
          (await F4(EL.join(t, "commands"))) ||
          (await F4(EL.join(r, "GEMINI.md"))) ||
          (await F4(EL.join(r, ".gemini")))
        );
      },
      async scan(e) {
        let t = sFd(e),
          r = e.cwd ?? gn(),
          n = [],
          o = [],
          i =
            (e.homeDir === void 0 && Rmt()) ||
            (process.env.CLAUDE_CONFIG_DIR !== void 0 &&
              (IFt(pn()) || (await igr(pn(), r))));
        if (i)
          o.push({
            scope: "user",
            label: "Gemini user-scope config",
            reason:
              "The user-scope read or write root has been redirected (resolves inside this project, to a network path, or away from the real home directory) \u2014 skipping user-scope scan for safety.",
          });
        let s = i ? "project" : e.scope;
        if (s !== "project") (await Ic_(t, n, o), await Rc_(t, n, o));
        if (
          s !== "user" &&
          EL.join(r, ".gemini") !== t &&
          (await tme(r, EL.join(r, ".gemini"))) !== null &&
          (await F4(EL.join(r, ".gemini", "settings.json")))
        )
          o.push({
            scope: "project",
            label: ".gemini/settings.json",
            reason:
              "Project-level Gemini settings are not auto-imported yet. Review it manually.",
          });
        return (await Dc_(t, r, s, n, o), { items: n, unmappable: o });
      },
    };
  });
