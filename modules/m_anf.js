// Module: anf (lines 785130-785236)
  var anf = S(() => {
    hn();
    ((lTa = [
      "Appearance",
      "Model & output",
      "Display",
      "Input & controls",
      "Connections",
      "Advanced",
      "Experimental",
      "Internal",
    ]),
      (cTa = new Set(["Advanced", "Experimental", "Internal"])),
      (Ewn = [
        {
          id: "autoUpdatesChannel",
          isSet: ({ settingsData: e }) => e?.autoUpdatesChannel !== void 0,
        },
        {
          id: "worktreeBaseRef",
          isSet: ({ settingsData: e }) => e?.worktree?.baseRef !== void 0,
        },
        {
          id: "gitignore",
          isSet: ({ globalConfig: e }) =>
            e.respectGitignore !== Yoe.respectGitignore,
        },
        {
          id: "copyFullResponse",
          isSet: ({ globalConfig: e }) =>
            e.copyFullResponse !== Yoe.copyFullResponse,
        },
        {
          id: "recap",
          isSet: ({ settingsData: e }) => e?.awaySummaryEnabled !== void 0,
        },
      ]),
      (h1b = new Set(Ewn.map((e) => e.id))));
    ((snf = {
      Appearance: ["theme", "language", "reduceMotion"],
      "Model & output": [
        "model",
        "fast",
        "switchModelsOnFlag",
        "outputStyle",
        "defaultView",
        "verbose",
        "autoCompact",
        "thinking",
        "permissionMode",
        "useAutoModeDuringPlan",
      ],
      Display: [
        "autoScroll",
        "progressBar",
        "tips",
        "turnDuration",
        "prStatus",
        "externalEditorContext",
      ],
      "Input & controls": [
        "editor",
        "askUserQuestionTimeout",
        "copyOnSelect",
        "promptSuggestionEnabled",
        "agentsView",
        "checkpoints",
        "workflows",
        "workflowKeywordTriggerEnabled",
        "artifacts",
      ],
      Connections: [
        "notifChannel",
        "inputNeededNotifEnabled",
        "agentPushNotifEnabled",
        "autoConnectIde",
        "autoInstallIdeExtension",
        "diffTool",
        "chrome",
        "remoteControl",
        "showExternalIncludesDialog",
        "apiKey",
      ],
      Advanced: Ewn.map((e) => e.id),
      Experimental: [
        "precomputeCompactionEnabled",
        "timestamps",
        "showStatusInTerminalTab",
        "teammateMode",
        "teammateDefaultModel",
      ],
      Internal: [
        ...[],
        "snipEnabled",
        "snipDebug",
        "doneMeansMerged",
        "autoUploadSessions",
        "autoAddRemoteControlDaemonWorker",
        "autofixPrMode",
      ],
    }),
      (g1b = new Map(lTa.flatMap((e) => snf[e].map((t) => [t, e])))),
      (onf = new Map(
        lTa.flatMap((e, t) => snf[e].map((r, n) => [r, t * 1000 + n])),
      )));
    inf = lTa.indexOf("Advanced") * 1000 + 999;
  });
