// Module: CCt (lines 35590-35800)
  var CCt = S(() => {
    bl();
    Wu();
    Qr();
    Wi();
    Ei();
    aU();
    kRl();
    ((VLl = require("fs")),
      (DOe = require("fs/promises")),
      (qLl = require("os")),
      (drt = require("path")),
      (av = qr(() => {
        if (Xt().existsSync(drt.join(pn(), ".config.json")))
          return drt.join(pn(), ".config.json");
        let e = `.claude${zUr()}.json`;
        return drt.join(process.env.CLAUDE_CONFIG_DIR || qLl.homedir(), e);
      })),
      (jZm = qr(async () => {
        try {
          let { externalHttp: e } = await Promise.resolve().then(
            () => (EM(), GLl),
          );
          return (
            await e.head("http://1.1.1.1", {
              signal: AbortSignal.timeout(1000),
            }),
            !0
          );
        } catch {
          return !1;
        }
      })));
    ((GZm = qr(async () => {
      let e = [];
      if (await DKt("npm")) e.push("npm");
      if (await DKt("yarn")) e.push("yarn");
      if (await DKt("pnpm")) e.push("pnpm");
      return e;
    })),
      (VZm = qr(async () => {
        let e = [];
        if (await DKt("bun")) e.push("bun");
        if (await DKt("deno")) e.push("deno");
        if (await DKt("node")) e.push("node");
        return e;
      })),
      (zLl = [
        "git",
        "node",
        "npm",
        "npx",
        "yarn",
        "pnpm",
        "bun",
        "deno",
        "tsc",
        "python",
        "python3",
        "py",
        "pip",
        "uv",
        "poetry",
        "ruby",
        "gem",
        "bundle",
        "rake",
        "dotnet",
        "msbuild",
        "nuget",
        "cl",
        "nmake",
        "cmake",
        "ninja",
        "make",
        "gcc",
        "g++",
        "clang",
        "cargo",
        "rustc",
        "go",
        "java",
        "javac",
        "mvn",
        "gradle",
        "docker",
      ]));
    ((KLl = qr(async () => {
      let e = new Set();
      try {
        await Oa(KZm(e), qZm, "build tool PATH scan timed out");
      } catch {}
      return zLl.filter((t) => e.has(t));
    })),
      (aHi = qr(() => sHi ?? !1)),
      (YLl = qr(() => {
        try {
          if (!aHi()) return !1;
          let e = Fue("npm");
          if (e === null) return !1;
          return e.startsWith("/mnt/c/");
        } catch (e) {
          return !1;
        }
      })));
    oCe = [
      "pycharm",
      "intellij",
      "webstorm",
      "phpstorm",
      "rubymine",
      "clion",
      "goland",
      "rider",
      "datagrip",
      "appcode",
      "dataspell",
      "aqua",
      "gateway",
      "fleet",
      "jetbrains",
      "androidstudio",
    ];
    cHi = qr(() => {
      if (Yt(process.env.CODESPACES)) return "codespaces";
      if (process.env.GITPOD_WORKSPACE_ID) return "gitpod";
      if (Yt(process.env.CODER) || process.env.CODER_WORKSPACE_NAME)
        return "coder";
      if (Yt(process.env.DEVPOD) || process.env.DEVPOD_WORKSPACE_UID)
        return "devpod";
      if (process.env.DAYTONA_WS_ID) return "daytona";
      if (Yt(process.env.GOOGLE_CLOUD_WORKSTATIONS))
        return "gcp-cloud-workstations";
      if (process.env.C9_PID || process.env.C9_USER) return "aws-cloud9";
      if (process.env.REPL_ID || process.env.REPL_SLUG) return "replit";
      if (process.env.PROJECT_DOMAIN) return "glitch";
      if (Yt(process.env.VERCEL)) return "vercel";
      if (
        process.env.RAILWAY_ENVIRONMENT_NAME ||
        process.env.RAILWAY_SERVICE_NAME
      )
        return "railway";
      if (Yt(process.env.RENDER)) return "render";
      if (Yt(process.env.NETLIFY)) return "netlify";
      if (process.env.DYNO) return "heroku";
      if (process.env.FLY_APP_NAME || process.env.FLY_MACHINE_ID)
        return "fly.io";
      if (Yt(process.env.CF_PAGES)) return "cloudflare-pages";
      if (process.env.DENO_DEPLOYMENT_ID) return "deno-deploy";
      if (process.env.AWS_LAMBDA_FUNCTION_NAME) return "aws-lambda";
      if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_FARGATE")
        return "aws-fargate";
      if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_EC2") return "aws-ecs";
      if ((XLl ?? xRl())?.startsWith("ec2")) return "aws-ec2";
      if (process.env.K_SERVICE) return "gcp-cloud-run";
      if (process.env.GOOGLE_CLOUD_PROJECT) return "gcp";
      if (process.env.WEBSITE_SITE_NAME || process.env.WEBSITE_SKU)
        return "azure-app-service";
      if (process.env.AZURE_FUNCTIONS_ENVIRONMENT) return "azure-functions";
      if (process.env.APP_URL?.includes("ondigitalocean.app"))
        return "digitalocean-app-platform";
      if (process.env.SPACE_CREATOR_USER_ID) return "huggingface-spaces";
      if (Yt(process.env.GITHUB_ACTIONS)) return "github-actions";
      if (Yt(process.env.GITLAB_CI)) return "gitlab-ci";
      if (process.env.CIRCLECI) return "circleci";
      if (process.env.BUILDKITE) return "buildkite";
      if (Yt(!1)) return "ci";
      if (process.env.KUBERNETES_SERVICE_HOST) return "kubernetes";
      if (JLl ?? HRl()) return "docker";
      if (PKt.platform === "darwin") return "unknown-darwin";
      if (PKt.platform === "linux") return "unknown-linux";
      if (PKt.platform === "win32") return "unknown-win32";
      return "unknown";
    });
    PKt = {
      hasInternetAccess: jZm,
      probeInternalNetworkAccess: WZm,
      isCI: Yt(!1),
      platform: ["win32", "darwin"].includes("win32") ? "win32" : "linux",
      arch: "x64",
      nodeVersion: process.version,
      terminal: XZm(),
      isSSH: ZLl,
      getPackageManagers: GZm,
      getRuntimes: VZm,
      isRunningWithBun: qr(toe),
      isWslEnvironment: aHi,
      isNpmFromWindowsPath: YLl,
      isConductor: YZm,
      detectDeploymentEnvironment: cHi,
    };
    JZm = new Set([
      "zsh",
      "bash",
      "fish",
      "sh",
      "dash",
      "ash",
      "ksh",
      "tcsh",
      "csh",
      "nu",
      "nushell",
      "pwsh",
      "powershell",
      "cmd",
      "elvish",
      "xonsh",
      "ion",
    ]);
  });
