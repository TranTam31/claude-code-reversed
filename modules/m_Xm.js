// Module: Xm (lines 622189-622389)
  var Xm = S(() => {
    bl();
    DS();
    uqe();
    RS();
    MZ();
    pt();
    Zr();
    qC();
    Rh();
    VM();
    np();
    ei();
    Ar();
    XQi();
    Qr();
    st();
    Wi();
    hp();
    z0();
    Ei();
    OE();
    ky();
    snt();
    ynt();
    Un();
    w$e();
    XC();
    p8e();
    Tq();
    Kno();
    mL();
    Xx();
    bh();
    LOt();
    ((eap = require("crypto")),
      (Xfn = x(Pst(), 1)),
      (obr = require("os")),
      (Du = require("path")),
      (czs = [
        ".gitconfig",
        ".gitmodules",
        ".bashrc",
        ".bash_profile",
        ".zshrc",
        ".zprofile",
        ".profile",
        ".zshenv",
        ".zlogin",
        ".zlogout",
        ".bash_login",
        ".bash_aliases",
        ".bash_logout",
        ".envrc",
        ".ripgreprc",
        ".mcp.json",
        ".claude.json",
        ".npmrc",
        ".yarnrc",
        ".yarnrc.yml",
        ".pnp.cjs",
        ".pnp.loader.mjs",
        ".pnpmfile.cjs",
        "bunfig.toml",
        ".bunfig.toml",
        ".bazelrc",
        ".bazelversion",
        ".bazeliskrc",
        ".pre-commit-config.yaml",
        "lefthook.yml",
        ".lefthook.yml",
        "lefthook.yaml",
        ".lefthook.yaml",
        "gradle-wrapper.properties",
        "maven-wrapper.properties",
        ".devcontainer.json",
        "pyrightconfig.json",
      ]),
      (ABo = new Set(czs.map((e) => e.toLowerCase()))),
      (rap = [
        ".git",
        ".vscode",
        ".idea",
        ".claude",
        ".husky",
        ".cargo",
        ".devcontainer",
        ".yarn",
        ".mvn",
      ]),
      (nap = [".config/git"]));
    VYe = Du.posix.sep;
    ((Lie = qr(function () {
      let t = Iw(),
        r = Xt(),
        n = t;
      try {
        n = r.realpathSync(t);
      } catch {}
      return n + Du.sep;
    })),
      (lYr = qr(function () {
        let t = orr(),
          r = Xt(),
          n = t;
        try {
          n = r.realpathSync(t);
        } catch {}
        return n + Du.sep;
      })),
      (XIo = qr(function () {
        let t = eap.randomBytes(16).toString("hex");
        return Du.join(
          Lie(),
          "bundled-skills",
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.220",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-07-24T22:17:45Z",
            GIT_SHA: "4073f59596e272f39393db4f96abc5f4b10eff21",
            DD_SOURCEMAP_GROUP: "win32",
          }.VERSION,
          t,
        );
      })));
    S2_ = qr(function (t) {
      try {
        return Du.join(rpe(), t, "scratchpad");
      } catch {
        return null;
      }
    });
    ((lzs = {
      behavior: "deny",
      message:
        "The host credentials file is managed by the host process; it cannot be written directly",
      decisionReason: {
        type: "safetyCheck",
        reason: "host-creds file rewrite redirects the bearer token",
        classifierApprovable: !1,
      },
    }),
      (cap = {
        behavior: "deny",
        message:
          "Cannot write to memory while it is paused. Run /pause-memory to resume automemory.",
        decisionReason: {
          type: "safetyCheck",
          reason: tap,
          classifierApprovable: !1,
        },
      }),
      (uap = {
        behavior: "deny",
        message:
          "adopt.json is the bg-fork handoff carrier and is managed by the harness; it cannot be written directly",
        decisionReason: {
          type: "safetyCheck",
          reason: "adopt.json is a code-execution surface for the fork",
          classifierApprovable: !1,
        },
      }));
    TBo = qr(M_);
    szs = new WeakMap();
    C2_ = qr(function () {
      let t = [
          ["/private/tmp", "/tmp"],
          ["/private/var", "/var"],
          ["/private/etc", "/etc"],
          ["/usr/bin", "/bin"],
          ["/usr/lib", "/lib"],
          ["/usr/sbin", "/sbin"],
        ],
        r = new Map(),
        n = Xt();
      for (let [o, i] of t)
        try {
          if (n.realpathSync(i) === o) r.set(o, i);
        } catch {}
      return r;
    });
    H2_ = new Set(["toolsNarrowing", "cliArg", "command"]);
    LIe = new Proxy(
      { name: zi, mcpInfo: void 0, getPath: (e) => String(e.file_path) },
      {
        get(e, t) {
          if (typeof t === "symbol") return;
          if (t in e) return e[t];
          throw new Dr(
            `readPermissionDecisionForPath probe consulted unsupported tool property: ${t}`,
            "readPermissionDecisionForPath probe consulted unsupported tool property",
          );
        },
      },
    );
  });
