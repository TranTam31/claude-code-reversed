// Module: lfl (lines 957569-958409)
  var lfl = S(() => {
    gd();
    bl();
    ei();
    Ge();
    nte();
    Un();
    QFo();
    Lk();
    T$t();
    QPo();
    q2s();
    TXs();
    bze();
    Vf();
    zl();
    d7();
    vke();
    qC();
    Rpe();
    _Ke();
    vY();
    Eo();
    gVs();
    ku();
    hn();
    CYe();
    Mw();
    qHa();
    Shm();
    Ar();
    Qr();
    eP();
    Vf();
    Qa();
    U8();
    i7e();
    ox();
    Ese();
    si();
    ts();
    Ei();
    v1();
    sx();
    wDt();
    XD();
    vGt();
    Ga();
    wpn();
    zt();
    Zr();
    $pr();
    GUt();
    bRo();
    Vu();
    kQe();
    Inn();
    dTn();
    ((Ehm = qr(() => GHa())),
      (zQS =
        /\.(html?|css|s[ac]ss|less|[jt]sx|vue|svelte|astro|png|jpe?g|gif|svg|webp|avif|ico)$/i),
      (KQS = new Set([
        "vite",
        "next",
        "nuxt",
        "astro",
        "gatsby",
        "ng",
        "parcel",
        "webpack-dev-server",
        "serve",
        "http-server",
        "live-server",
        "browser-sync",
      ])));
    YQS = ["c4e-desktop", "c4e-remote-sessions", "c4e-ultrareview"];
    JQS = ["workflow-size-prompting", "workflow-size-prompting-ambient"];
    ((xhm = [
      {
        id: "team-artifacts",
        priority: 4,
        content: async () => {
          let e = await nsd().catch(
            (t) => (
              Ne(
                "tips_team_artifact_show",
                t instanceof Error
                  ? "content_scan_error"
                  : "content_unknown_error",
              ),
              []
            ),
          );
          if (e.length === 0) return "";
          return (isd(e), osd(), ssd(e));
        },
        cooldownSessions: 1,
        isRelevant: async () => rsd(),
      },
      {
        id: "fotw-campaign",
        priority: 4,
        content: async () => {
          let e = Ofe();
          if (!e?.command) return "";
          let t = d2e();
          if (!t) return "";
          let r = kd(t.amountMinorUnits, t.currency, "fit"),
            n = e.tipBlurb ? `/${e.command} ${e.tipBlurb}` : `/${e.command}`,
            o = e.tips?.[jCr("fotw-campaign") % e.tips.length] ?? "";
          if (o) return `${o} Try it for ${r} in usage credits.`;
          return `${e.titleLabel ?? "Feature of the week:"} ${n}. Try it for ${r} in usage credits.`;
        },
        cooldownSessions: 1,
        isRelevant: async () => tft(),
      },
      {
        id: "fotw-campaign-upsell",
        priority: 4,
        content: async () => {
          let e = Ofe();
          if (!e?.command) return "";
          let t = e.tips?.[jCr("fotw-campaign-upsell") % e.tips.length] ?? "";
          if (t) return t;
          let r = e.tipBlurb ? `/${e.command} ${e.tipBlurb}` : `/${e.command}`;
          return `${e.titleLabel ?? "Feature of the week:"} ${r}.`;
        },
        cooldownSessions: 1,
        isRelevant: async () => Npr(),
      },
      {
        id: "powerup-onboarding",
        priority: 3,
        providerAgnostic: !0,
        content: async (e) =>
          `New to Claude Code? Run ${to("suggestion", e.theme)("/powerup")} for a quick interactive tutorial`,
        cooldownSessions: 1,
        async isRelevant() {
          let e = xt();
          if (e.numStartups >= 10) return !1;
          if (e.powerupsUnlocked?.length) return !1;
          return Ke("tengu_alder_compass", !1);
        },
      },
      {
        id: "new-user-warmup",
        priority: 2,
        providerAgnostic: !0,
        content: async () =>
          "Start with small features or bug fixes, tell Claude to propose a plan, and verify its suggested edits",
        cooldownSessions: 3,
        async isRelevant() {
          return xt().numStartups < 10;
        },
      },
      {
        id: "plan-mode-for-complex-tasks",
        priority: 2,
        providerAgnostic: !0,
        content: async () =>
          `Use Plan Mode to prepare for a complex request before making changes. Press ${aL("chat:cycleMode", "Chat", "shift+tab")} twice to enable.`,
        cooldownSessions: 5,
        isRelevant: async () => {
          let e = xt();
          return (
            (e.lastPlanModeUse
              ? (Date.now() - e.lastPlanModeUse) / 86400000
              : 1 / 0) > 7
          );
        },
      },
      {
        id: "default-permission-mode-config",
        providerAgnostic: !0,
        content: async () =>
          "Use /config to change your default permission mode (including Plan Mode)",
        cooldownSessions: 10,
        isRelevant: async () => {
          try {
            let e = xt(),
              t = us(),
              r = Boolean(e.lastPlanModeUse),
              n = Boolean(t?.permissions?.defaultMode);
            return r && !n;
          } catch (e) {
            return (
              w(
                `Failed to check default-permission-mode-config tip relevance: ${e}`,
                { level: "warn" },
              ),
              !1
            );
          }
        },
      },
      {
        id: "git-worktrees",
        providerAgnostic: !0,
        content: async () =>
          "Use git worktrees to run multiple Claude sessions in parallel.",
        cooldownSessions: 10,
        isRelevant: async () => {
          try {
            let e = xt();
            return (await WYt()) <= 1 && e.numStartups > 50;
          } catch (e) {
            return !1;
          }
        },
      },
      {
        id: "color-when-multi-clauding",
        providerAgnostic: !0,
        content: async () =>
          "Running multiple Claude sessions? Use /color and /rename to tell them apart at a glance.",
        cooldownSessions: 10,
        isRelevant: async () => {
          if (g2t()) return !1;
          return (await GGr()) >= 2;
        },
      },
      {
        id: "agents-view-multiclauding",
        priority: 3,
        providerAgnostic: !0,
        maxLifetimeShows: 5,
        cooldownSessions: 1,
        content: async (e) =>
          `Running multiple Claude sessions? Press ${to("suggestion", e.theme)(Rq)} on an empty prompt to see them all in one place`,
        isRelevant: async () => {
          if (!DKe()) return !1;
          if (C1()) return !1;
          let e = xt();
          if (e.leftArrowOpensAgents === !1) return !1;
          if (rs()) return !1;
          if (e.hasOpenedAgentsView || e.hasUsedAgentsFleet) return !1;
          return (await GGr()) >= 2;
        },
      },
      {
        id: "terminal-setup",
        providerAgnostic: !0,
        content: async () =>
          Z.terminal === "Apple_Terminal"
            ? "Run /terminal-setup to enable convenient terminal integration like Option + Enter for new line and more"
            : "Run /terminal-setup to enable convenient terminal integration like Shift + Enter for new line and more",
        cooldownSessions: 10,
        async isRelevant() {
          if (!fgt()) return !1;
          let e = xt();
          if (Z.terminal === "Apple_Terminal")
            return !e.optionAsMetaKeyInstalled;
          return !e.shiftEnterKeyBindingInstalled;
        },
      },
      {
        id: "vscode-gpu-accel-garbled-glyphs",
        providerAgnostic: !0,
        maxLifetimeShows: 5,
        content: async () =>
          "Corrupted terminal glyphs? Disable terminal GPU acceleration in settings or run /terminal-setup",
        cooldownSessions: 8,
        async isRelevant() {
          return dA();
        },
      },
      {
        id: "shift-enter",
        providerAgnostic: !0,
        content: async () =>
          Z.terminal === "Apple_Terminal"
            ? "Press Option+Enter to send a multi-line message"
            : "Press Shift+Enter to send a multi-line message",
        cooldownSessions: 10,
        async isRelevant() {
          let e = xt();
          return Boolean(
            (Z.terminal === "Apple_Terminal"
              ? e.optionAsMetaKeyInstalled
              : e.shiftEnterKeyBindingInstalled) && e.numStartups > 3,
          );
        },
      },
      {
        id: "shift-enter-setup",
        providerAgnostic: !0,
        content: async () =>
          Z.terminal === "Apple_Terminal"
            ? "Run /terminal-setup to enable Option+Enter for new lines"
            : "Run /terminal-setup to enable Shift+Enter for new lines",
        cooldownSessions: 10,
        async isRelevant() {
          if (!fgt()) return !1;
          let e = xt();
          return !(Z.terminal === "Apple_Terminal"
            ? e.optionAsMetaKeyInstalled
            : e.shiftEnterKeyBindingInstalled);
        },
      },
      {
        id: "memory-command",
        providerAgnostic: !0,
        content: async () => "Use /memory to view and manage Claude memory",
        cooldownSessions: 15,
        async isRelevant() {
          return xt().memoryUsageCount <= 0;
        },
      },
      {
        id: "theme-command",
        providerAgnostic: !0,
        content: async () => "Use /theme to change the color theme",
        cooldownSessions: 20,
        isRelevant: async () => !0,
      },
      {
        id: "colorterm-truecolor",
        providerAgnostic: !0,
        content: async () =>
          "Try setting environment variable COLORTERM=truecolor for richer colors",
        cooldownSessions: 30,
        isRelevant: async () => !process.env.COLORTERM && wt.level < 3,
      },
      {
        id: "powershell-tool-env",
        providerAgnostic: !0,
        content: async () =>
          "Set CLAUDE_CODE_USE_POWERSHELL_TOOL=1 to enable the PowerShell tool (preview)",
        cooldownSessions: 10,
        isRelevant: async () =>
          Lt() === "windows" &&
          process.env.CLAUDE_CODE_USE_POWERSHELL_TOOL === void 0,
      },
      {
        id: "status-line",
        providerAgnostic: !0,
        content: async () =>
          "Use /statusline to set up a custom status line that will display beneath the input box",
        cooldownSessions: 25,
        isRelevant: async () => !ZC() && us().statusLine === void 0,
      },
      {
        id: "prompt-queue",
        providerAgnostic: !0,
        content: async () =>
          "Hit Enter to queue up additional messages while Claude is working.",
        cooldownSessions: 5,
        async isRelevant() {
          return xt().promptQueueUseCount <= 3;
        },
      },
      {
        id: "enter-to-steer-in-relatime",
        providerAgnostic: !0,
        content: async () =>
          "Send messages to Claude while it works to steer Claude in real-time",
        cooldownSessions: 20,
        isRelevant: async () => !0,
      },
      {
        id: "todo-list",
        providerAgnostic: !0,
        content: async () =>
          "Ask Claude to create a todo list when working on complex tasks to track progress and remain on track",
        cooldownSessions: 20,
        isRelevant: async () => !0,
      },
      {
        id: "vscode-command-install",
        providerAgnostic: !0,
        content: async () =>
          `Open the Command Palette (Cmd+Shift+P) and run "Shell Command: Install '${Z.terminal === "vscode" ? "code" : Z.terminal}' command in PATH" to enable IDE integration`,
        cooldownSessions: 0,
        async isRelevant() {
          if (!Tcr()) return !1;
          if (Lt() !== "macos") return !1;
          switch (Z.terminal) {
            case "vscode":
              return !(await RXu());
            case "cursor":
              return !(await kXu());
            case "windsurf":
              return !(await IXu());
            default:
              return !1;
          }
        },
      },
      {
        id: "ide-upsell-external-terminal",
        providerAgnostic: !0,
        content: async () => "Connect Claude to your IDE \xB7 /ide",
        cooldownSessions: 4,
        async isRelevant() {
          if (vz()) return !1;
          if ((await DSo()).length !== 0) return !1;
          return (await DXu()).length > 0;
        },
      },
      {
        id: "install-github-app",
        content: async () =>
          "Run /install-github-app to tag @claude right from your Github issues and PRs",
        cooldownSessions: 10,
        isRelevant: async () => !xt().githubActionSetupCount,
      },
      {
        id: "install-slack-app",
        content: async () => "Run /install-slack-app to use Claude in Slack",
        cooldownSessions: 10,
        isRelevant: async () => !xt().slackAppInstallCount,
      },
      {
        id: "permissions",
        providerAgnostic: !0,
        content: async () =>
          "Use /permissions to pre-approve and pre-deny bash, edit, and MCP tools",
        cooldownSessions: 10,
        async isRelevant() {
          return xt().numStartups > 10;
        },
      },
      {
        id: "drag-and-drop-images",
        providerAgnostic: !0,
        content: async () =>
          "Did you know you can drag and drop image files into your terminal?",
        cooldownSessions: 10,
        isRelevant: async () => !Z.isSSH(),
      },
      {
        id: "paste-images-mac",
        providerAgnostic: !0,
        content: async () =>
          "Paste images into Claude Code using control+v (not cmd+v!)",
        cooldownSessions: 10,
        isRelevant: async () => Lt() === "macos",
      },
      {
        id: "double-esc",
        providerAgnostic: !0,
        content: async () =>
          "Double-tap esc to rewind the conversation to a previous point in time",
        cooldownSessions: 10,
        isRelevant: async () => !T1(),
      },
      {
        id: "double-esc-code-restore",
        providerAgnostic: !0,
        content: async () =>
          "Double-tap esc to rewind the code and/or conversation to a previous point in time",
        cooldownSessions: 10,
        isRelevant: async () => T1(),
      },
      {
        id: "continue",
        providerAgnostic: !0,
        content: async () =>
          "Run claude --continue or claude --resume to resume a conversation",
        cooldownSessions: 10,
        isRelevant: async () => !0,
      },
      {
        id: "rename-conversation",
        providerAgnostic: !0,
        content: async () =>
          "Name your conversations with /rename to find them easily in /resume later",
        cooldownSessions: 15,
        isRelevant: async () => h2t() && xt().numStartups > 10,
      },
      {
        id: "custom-commands",
        providerAgnostic: !0,
        content: async () =>
          "Create skills by adding .md files to .claude/skills/ in your project or ~/.claude/skills/ for skills that work in any project",
        cooldownSessions: 15,
        async isRelevant() {
          let e = xt();
          return !fd("skills") && e.numStartups > 10 && !(await ofl("skills"));
        },
      },
      {
        id: "shift-tab",
        providerAgnostic: !0,
        content: async () =>
          `Hit ${aL("chat:cycleMode", "Chat", "shift+tab")} to cycle between manual mode, auto-accept edit mode, and plan mode`,
        cooldownSessions: 10,
        isRelevant: async () => !0,
      },
      {
        id: "image-paste",
        providerAgnostic: !0,
        content: async () =>
          `Use ${aL("chat:imagePaste", "Chat", "ctrl+v")} to paste images from your clipboard`,
        cooldownSessions: 20,
        isRelevant: async () => !0,
      },
      {
        id: "custom-agents",
        providerAgnostic: !0,
        content: async () =>
          "Ask Claude to create subagents for specific tasks. Eg. Software Architect, Code Writer, Code Reviewer",
        cooldownSessions: 15,
        async isRelevant() {
          let e = xt();
          return !fd("agents") && e.numStartups > 5 && !(await ofl("agents"));
        },
      },
      {
        id: "agent-flag",
        providerAgnostic: !0,
        content: async () =>
          "Use --agent <agent_name> to directly start a conversation with a subagent",
        cooldownSessions: 15,
        async isRelevant() {
          let e = xt();
          return !fd("agents") && e.numStartups > 5 && (await ofl("agents"));
        },
      },
      {
        id: "desktop-app",
        content: async () =>
          "Run Claude Code locally or remotely using the Claude desktop app: clau.de/desktop",
        cooldownSessions: 15,
        isRelevant: async () => Xhr() && !ght() && !(await Ehm()),
      },
      {
        id: "desktop-shortcut",
        content: async (e) =>
          `Continue your session in Claude Code Desktop with ${to("suggestion", e.theme)("/desktop")}`,
        cooldownSessions: 15,
        isRelevant: async () => Xhr() && nfl().enable_shortcut_tip,
      },
      {
        id: "desktop-contextual",
        priority: 1,
        content: async (e) => {
          let t = to("suggestion", e.theme);
          if (await Ehm())
            return `Working on UI? See a live preview in Claude Code Desktop \xB7 run ${t("/desktop")}`;
          return `Working on UI? Claude Code Desktop has live preview and inline images \xB7 ${t("clau.de/desktop")}`;
        },
        cooldownSessions: 15,
        isRelevant: async (e) => {
          if (!Xhr()) return !1;
          if (!nfl().enable_contextual_tip) return !1;
          return vhm(e);
        },
      },
      {
        id: "claude-design-contextual",
        priority: 1,
        content: async (e) =>
          `Use Claude Design to mock up screens before you build \xB7 ${tF("https://claude.ai/design?utm_source=claude_code&utm_medium=tip&utm_campaign=tengu_cedar_plume", "claude.ai/design", { themeName: e.theme })}`,
        cooldownSessions: 15,
        isRelevant: async (e) => {
          if (!ii()) return !1;
          if (!vhm(e)) return !1;
          return Ke("tengu_cedar_plume", !1);
        },
      },
      {
        id: "artifact-publish-plan",
        priority: 3,
        maxLifetimeShows: 5,
        cooldownSessions: 5,
        content: async () =>
          "Working on a plan or design doc? Ask Claude to publish it as an artifact \u2014 a polished web page you can open in your browser.",
        isRelevant: async () => _$(),
      },
      {
        id: "web-app",
        content: async () =>
          "Run tasks in the cloud while you keep coding locally \xB7 clau.de/web",
        cooldownSessions: 15,
        isRelevant: async () => !ght(),
      },
      {
        id: "remote-control",
        content: async (e) => {
          let t = to("suggestion", e.theme);
          return `Control this session from ${tF("https://claude.com/download#mobile", "the Claude mobile app", { themeName: e.theme })} \xB7 run ${t("/remote-control")}`;
        },
        cooldownSessions: 15,
        isRelevant: async () => bH() && !xt().hasUsedRemoteControl && !qIe(),
      },
      {
        id: "remote-control-next-surface",
        content: async (e) => {
          let [t, r, n] =
            EGa() === "web"
              ? ["https://claude.ai/code", "claude.ai/code", " on any browser"]
              : [
                  "https://claude.com/download#mobile",
                  "the Claude mobile app",
                  "",
                ];
          return `You can also drive this session from ${tF(t, r, { themeName: e.theme })}${n}`;
        },
        cooldownSessions: 15,
        maxLifetimeShows: 3,
        isRelevant: async () => {
          if (!bH() || !qIe() || !ns("allow_remote_control")) return !1;
          if (EGa() === void 0) return !1;
          return Ke("tengu_maple_rung", !1);
        },
      },
      {
        id: "push-notif",
        content: async (e) =>
          `Get pinged on your phone when long tasks finish \xB7 enable push notifications in ${to("suggestion", e.theme)("/config")}`,
        cooldownSessions: 15,
        isRelevant: async () => _Ga(),
      },
      {
        id: "voice-mode",
        content: async () => "Use /voice to enable push-to-talk dictation",
        cooldownSessions: 10,
        isRelevant: async () =>
          Zyr() &&
          eo().voiceEnabled === void 0 &&
          !dD() &&
          !Yt(process.env.CLAUDE_CODE_REMOTE) &&
          !Z.isSSH(),
      },
      {
        id: "no-flicker",
        providerAgnostic: !0,
        content: async () =>
          "Try the new fullscreen renderer \u2014 flicker-free output, mouse support, auto-copy on select \xB7 /tui fullscreen",
        cooldownSessions: 10,
        isRelevant: async () => !ds() && eo().tui === void 0 && Czr(),
      },
      {
        id: "console-api-key",
        content: async (e) =>
          `Build your AI product with Claude API. Run ${to("suggestion", e.theme)("/claude-api")} to get started`,
        cooldownSessions: 15,
        isRelevant: async () => {
          if (!ii() || !j1e()) return !1;
          let e = xt();
          if (e.primaryApiKey) return !1;
          if (e.customApiKeyResponses?.approved?.length) return !1;
          if (process.env.ANTHROPIC_API_KEY) return !1;
          if (e.numStartups <= 10) return !1;
          return Ke("tengu_kestrel_arch", "off") === "on";
        },
      },
      {
        id: "c4e-desktop",
        content: async (e) =>
          `Run Claude Code locally or remotely using the Claude desktop app \u2014 ${ifl(e)}`,
        cooldownSessions: 15,
        isRelevant: async () => {
          if (!ght() || sfl("c4e-desktop")) return !1;
          return !0;
        },
      },
      {
        id: "c4e-remote-sessions",
        content: async (e) =>
          `Run tasks in the cloud while you keep coding locally \u2014 ${ifl(e)}`,
        cooldownSessions: 15,
        isRelevant: async () => ght() && !sfl("c4e-remote-sessions"),
      },
      {
        id: "c4e-ultrareview",
        content: async (e) =>
          `/ultrareview runs a deep, multi-agent review of your changes \u2014 ${ifl(e)}`,
        cooldownSessions: 15,
        isRelevant: async () => ght() && !sfl("c4e-ultrareview"),
      },
      {
        id: "opusplan-mode-reminder",
        providerAgnostic: !0,
        content: async () =>
          `Your default model setting is Opus Plan Mode. Press ${aL("chat:cycleMode", "Chat", "shift+tab")} twice to activate Plan Mode and plan with Claude Opus.`,
        cooldownSessions: 2,
        async isRelevant() {
          let e = xt(),
            r = _j() === "opusplan",
            n = e.lastPlanModeUse
              ? (Date.now() - e.lastPlanModeUse) / 86400000
              : 1 / 0;
          return r && n > 3;
        },
      },
      {
        id: "frontend-design-plugin",
        priority: 1,
        providerAgnostic: !0,
        content: async (
          e,
        ) => `Working with HTML/CSS? Install the frontend-design plugin:
${to("suggestion", e.theme)(`/plugin install frontend-design@${p1}`)}`,
        cooldownSessions: 3,
        maxLifetimeShows: 3,
        isRelevant: async (e) =>
          Chm("frontend-design", e, {
            filesRead: ["**/*.html", "**/*.css", "**/*.htm"],
          }),
      },
      {
        id: "subagent-fanout-nudge",
        providerAgnostic: !0,
        content: async (e) =>
          `Say ${to("suggestion", e.theme)('"fan out subagents"')} and Claude sends a team. Each one digs deep so nothing gets missed.`,
        cooldownSessions: 3,
        isRelevant: async () => !ii(),
      },
      {
        id: "dynamic-workflows",
        providerAgnostic: !0,
        content: async (e) =>
          `Dynamic workflows let Claude write a script that orchestrates many agents for you. Mention the keyword ${to("suggestion", e.theme)("ultracode")} or ask Claude to use a workflow directly.`,
        cooldownSessions: 3,
        isRelevant: async () => L0(),
      },
      {
        id: "workflow-size-prompting",
        providerAgnostic: !0,
        priority: 1,
        content: async (e) => {
          let t = to("suggestion", e.theme);
          return `You can control how big a workflow is just by prompting. Try ${t('"use a small workflow, 5 agents max"')}, or set a default with ${t("Dynamic workflow size")} in ${t("/config")}.`;
        },
        cooldownSessions: 5,
        isRelevant: async (e) =>
          L0() &&
          !whm() &&
          (e?.toolsUsed?.has(pH) ?? !1) &&
          !Ahm("workflow-size-prompting"),
      },
      {
        id: "workflow-size-prompting-ambient",
        providerAgnostic: !0,
        content: async (e) => {
          let t = to("suggestion", e.theme);
          return `You can control how big a workflow is just by prompting. Ask for a small workflow, cap it with ${t('"use at most 5 agents"')}, or set a default with ${t("Dynamic workflow size")} in ${t("/config")}.`;
        },
        cooldownSessions: 12,
        isRelevant: async (e) =>
          L0() &&
          !whm() &&
          !(e?.toolsUsed?.has(pH) ?? !1) &&
          !Ahm("workflow-size-prompting-ambient"),
      },
      {
        id: "loop-command-nudge",
        providerAgnostic: !0,
        content: async (e) =>
          `${to("suggestion", e.theme)("/loop")} runs any prompt on a recurring schedule. Great for monitoring deploys, babysitting PRs, or polling status.`,
        cooldownSessions: 3,
        isRelevant: async () => {
          if (K5()) return !1;
          if (!i7()) return !1;
          return !ii();
        },
      },
      {
        id: "code-review-low-fast",
        providerAgnostic: !0,
        content: async (e) =>
          `For a fast, cheap code review, try ${to("suggestion", e.theme)("/code-review low")}. It runs the built-in skill at its lightest effort level.`,
        cooldownSessions: 8,
        isRelevant: async () => {
          let e = xt().skillUsage ?? {};
          return Object.keys(e).some((t) => {
            if (t === NEe) return !1;
            return t
              .toLowerCase()
              .replace(/[^a-z0-9]/g, "")
              .includes("codereview");
          });
        },
      },
      {
        id: "plugin-disuse-review",
        providerAgnostic: !0,
        content: async (e) => {
          let t = to("suggestion", e.theme),
            r = await UUt(),
            n = r[0];
          if (!n) return "";
          if (r.length === 1)
            return `You haven't used the ${wt.bold(n.name)} plugin in a while. It still adds startup and context cost \u2014 review it with ${t("/plugin")}`;
          return `You have ${r.length} plugins you haven't used in a while. They still add startup and context cost \u2014 review them with ${t("/plugin")}`;
        },
        cooldownSessions: 30,
        isRelevant: async () => (await UUt()).length > 0,
      },
      {
        id: "goal-command-nudge",
        content: async (e) =>
          `Set an objective with ${to("suggestion", e.theme)("/goal")} \u2014 Claude keeps working until it's met`,
        cooldownSessions: 3,
        isRelevant: async () => ZIt(),
      },
      {
        id: "guest-passes",
        content: async (e) => {
          let t = to("claude", e.theme),
            r = WUt();
          return r
            ? `Share Claude Code and earn ${t(mht(r))} in usage credits \xB7 ${t("/passes")}`
            : `You have free guest passes to share \xB7 ${t("/passes")}`;
        },
        cooldownSessions: 3,
        isRelevant: async () => {
          if (xt().hasVisitedPasses) return !1;
          let { eligible: t } = d_r();
          return t;
        },
      },
      {
        id: "feedback-command",
        content: async () => "Use /feedback to help us improve!",
        cooldownSessions: 15,
        async isRelevant() {
          return xt().numStartups > 5;
        },
      },
      {
        id: "team-onboarding-share",
        content: async (e) =>
          `Run ${to("suggestion", e.theme)("/team-onboarding")} to turn your Claude usage into an onboarding guide \u2014 share it with your team in one link`,
        cooldownSessions: 5,
        async isRelevant() {
          let e = xt();
          if (e.numStartups < 15) return !1;
          if (
            e.teamOnboardingLastUsedAt !== void 0 &&
            Date.now() - e.teamOnboardingLastUsedAt < 2592000000
          )
            return !1;
          return Qmr();
        },
      },
    ]),
      (ZQS = []));
  });
