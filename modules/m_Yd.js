// Module: Yd (lines 180846-181024)
  var Yd = S(() => {
    bl();
    Ar();
    n_();
    QYn();
    fde();
    ZN();
    Yq();
    s$();
    si();
    pt();
    Qr();
    MIt();
    U7i();
    nbe();
    obe();
    $It();
    fst();
    WC();
    A5();
    RS();
    Xx();
    vt();
    Eo();
    ku();
    Qa();
    BO();
    Ei();
    Yh();
    Zt();
    om();
    b5();
    xf();
    Xro();
    ((ZZc = require("path")), (tXi = { [g7t]: "Bash", [D5l]: "WebFetch" }));
    XZc = {
      "Claude Code iOS Simulator": "mobile_simulator_ios",
      "Claude Code Android Emulator": "mobile_simulator_android",
    };
    rno = new Set([aie]);
    ((wHg = new Set([
      "rm",
      "mv",
      "cp",
      "touch",
      "mkdir",
      "chmod",
      "chown",
      "cat",
      "head",
      "tail",
      "sort",
      "stat",
      "diff",
      "wc",
      "grep",
      "rg",
      "sed",
    ])),
      (THg = /\s*(?:&&|\|\||[;|])\s*/),
      (CHg = /\s+/));
    xHg = /\.(csv|docx?|html|json|md|od[pst]|pdf|pptx?|rtf|txt|xlsx?)\b/g;
    kHg =
      /^\d+\.\d+\.\d+(-(?:dev|alpha|beta|rc|test|nightly|engine)(?![a-z_-])\d{0,8}(?:\.[a-z0-9.]{0,40})?)?/;
    IHg = new Set([
      "darwin",
      "linux",
      "win32",
      "freebsd",
      "openbsd",
      "netbsd",
      "android",
      "aix",
      "sunos",
      "cygwin",
      "haiku",
      "macos",
      "windows",
      "wsl",
      "unknown",
    ]);
    ((Gqr = qr(() => {
      let e = {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.220",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-07-24T22:17:45Z",
        GIT_SHA: "4073f59596e272f39393db4f96abc5f4b10eff21",
        DD_SOURCEMAP_GROUP: "win32",
      }.VERSION.match(/^\d+\.\d+\.\d+(?:-[a-z]+)?/);
      return e ? e[0] : void 0;
    })),
      (DHg = qr(async () => {
        let [e, t, r, n] = await Promise.all([
          Z.getPackageManagers(),
          Z.getRuntimes(),
          vRl(),
          wRl(),
        ]);
        return {
          platform: w2r(),
          platformRaw: process.env.CLAUDE_CODE_HOST_PLATFORM || "win32",
          arch: Z.arch,
          nodeVersion: Z.nodeVersion,
          terminal: yj.terminal,
          shell: uHi(),
          packageManagers: e.join(","),
          runtimes: t.join(","),
          isRunningWithBun: Z.isRunningWithBun(),
          isCi: Yt(!1),
          isClaubbit: Z.CLAUBBIT,
          isClaudeCodeRemote: Yt(process.env.CLAUDE_CODE_REMOTE),
          isLocalAgentMode:
            process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent",
          isConductor: Z.isConductor(),
          ...(process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE && {
            remoteEnvironmentType:
              process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE,
          }),
          ...{},
          ...(process.env.CLAUDE_CODE_CONTAINER_ID && {
            claudeCodeContainerId: process.env.CLAUDE_CODE_CONTAINER_ID,
          }),
          ...(process.env.CLAUDE_CODE_REMOTE_SESSION_ID && {
            claudeCodeRemoteSessionId:
              process.env.CLAUDE_CODE_REMOTE_SESSION_ID,
          }),
          ...(process.env.CLAUDE_CODE_TAGS && {
            tags: process.env.CLAUDE_CODE_TAGS,
          }),
          isGithubAction: Yt(process.env.GITHUB_ACTIONS),
          isClaudeCodeAction: Yt(process.env.CLAUDE_CODE_ACTION),
          isClaudeAiAuth: ii(),
          version: {
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
          versionBase: Gqr(),
          buildTime: {
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
          }.BUILD_TIME,
          deploymentEnvironment: Z.detectDeploymentEnvironment(),
          ...(Yt(process.env.GITHUB_ACTIONS) && {
            githubEventName: process.env.GITHUB_EVENT_NAME,
            githubActionsRunnerEnvironment: process.env.RUNNER_ENVIRONMENT,
            githubActionsRunnerOs: process.env.RUNNER_OS,
            githubActionRef: process.env.GITHUB_ACTION_PATH?.includes(
              "claude-code-action/",
            )
              ? process.env.GITHUB_ACTION_PATH.split("claude-code-action/")[1]
              : void 0,
          }),
          ...(art() && { wslVersion: art() }),
          ...(r ?? {}),
          ...(n.length > 0 && { vcs: n.join(",") }),
        };
      })),
      (jIt = { rss: 0, heapUsed: 0, external: 0 }));
  });
