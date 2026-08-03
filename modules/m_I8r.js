// Module: I8r (lines 186827-187071)
  var I8r = S(() => {
    Vn();
    vt();
    ((GM = TJi),
      (Rst = TJi),
      (wIg = Se(() =>
        v.object({
          name: GM()
            .optional()
            .describe(
              "Display name. Defaults to the filename without extension.",
            ),
          description: GM()
            .optional()
            .describe("One-line summary shown in listings and the Skill tool."),
          model: GM()
            .optional()
            .describe(
              "Model override (`haiku`, `sonnet`, `opus`, `fable`, or a full ID). Use `inherit` to match the parent conversation.",
            ),
          "allowed-tools": Ist()
            .optional()
            .describe(
              "Tools available to the model while this file is active. Comma-separated string or YAML list.",
            ),
          "disallowed-tools": Ist()
            .optional()
            .describe(
              "Tools removed from the model while this file is active. Comma-separated string or YAML list. Cleared when the user sends the next message.",
            ),
          disallowedTools: Ist()
            .optional()
            .describe("Canonical (normalized) alias of `disallowed-tools`."),
          "argument-hint": GM()
            .optional()
            .describe("Placeholder text shown after the slash command name."),
          arguments: Ist()
            .optional()
            .describe(
              "@internal \u2014 typed variant of argument-hint; argument-hint is the documented form",
            ),
          "disable-model-invocation": Rst()
            .optional()
            .describe(
              "If true, the model cannot invoke this via the Skill tool; only users can type the slash command.",
            ),
          "user-invocable": Rst()
            .optional()
            .describe(
              "If false, hides the slash command from users; only the model can invoke it via the Skill tool.",
            ),
          effort: GM()
            .optional()
            .describe(
              "Thinking effort for the model: `low`, `medium`, `high`, `max`, or an integer.",
            ),
          shell: GM()
            .optional()
            .describe(
              "Shell for `!`-command blocks: `bash` or `powershell`. Defaults to bash regardless of platform.",
            ),
          version: GM()
            .optional()
            .describe("@internal \u2014 bookkeeping, not surfaced to users"),
        }),
      )),
      (CJi = Se(() =>
        wIg().extend({
          when_to_use: GM()
            .optional()
            .describe(
              "Guidance for when the model should reach for this skill. Becomes part of the tool description.",
            ),
          paths: Ist()
            .optional()
            .describe(
              "Glob patterns this skill applies to. The skill only loads when the model touches matching files.",
            ),
          hooks: v
            .unknown()
            .optional()
            .describe(
              "Hooks registered while this skill is active. Same shape as settings.json `hooks`.",
            ),
          context: v
            .enum(["inline", "fork"])
            .nullable()
            .optional()
            .describe(
              "Where the skill runs: `inline` expands into the current conversation; `fork` spawns a subagent.",
            ),
          agent: GM()
            .optional()
            .describe("Agent type to spawn when `context: fork`."),
          background: Rst()
            .optional()
            .describe(
              "Only for `context: fork`. Forks run as background agents that report back as a task notification instead of blocking the turn; set `false` to keep the caller waiting for the result in-line.",
            ),
          fallback: Rst()
            .optional()
            .describe(
              "@internal \u2014 interim defense-in-depth for thin-pointer skill stubs. If true, this skill yields to a same-suffix plugin or MCP skill (`<plugin>:<name>` / `<server>:<name>`) when one is loaded. Stubs carrying this should be deleted once their canonical plugin/MCP skill ships, not maintained.",
            ),
          created_by: GM()
            .optional()
            .describe(
              "@internal \u2014 provenance marker (e.g. dream-proposal)",
            ),
          improved_by: GM()
            .optional()
            .describe(
              "@internal \u2014 provenance marker (e.g. dream-proposal)",
            ),
          mcpServers: v.unknown().optional().describe("@internal"),
          lspServers: v.unknown().optional().describe("@internal"),
          agents: v.unknown().optional().describe("@internal"),
          outputStyles: v.unknown().optional().describe("@internal"),
          themes: v.unknown().optional().describe("@internal"),
          workflows: v.unknown().optional().describe("@internal"),
          channels: v.unknown().optional().describe("@internal"),
          monitors: v.unknown().optional().describe("@internal"),
          settings: v.unknown().optional().describe("@internal"),
          userConfig: v.unknown().optional().describe("@internal"),
          defaultEnabled: v.unknown().optional().describe("@internal"),
          experimental: v.unknown().optional().describe("@internal"),
          dependencies: v.unknown().optional().describe("@internal"),
          metadata: v.unknown().optional().describe("@internal"),
          displayName: v.unknown().optional().describe("@internal"),
          author: v.unknown().optional().describe("@internal"),
          homepage: v.unknown().optional().describe("@internal"),
          repository: v.unknown().optional().describe("@internal"),
          license: v.unknown().optional().describe("@internal"),
          keywords: v.unknown().optional().describe("@internal"),
        }),
      )),
      (TIg = Se(() =>
        v.object({
          name: GM().describe(
            "Agent identifier. Required \u2014 this is how the Agent tool and `--agent` flag address it.",
          ),
          description: GM().describe(
            "When to use this agent. Required \u2014 shown in the Agent tool listing.",
          ),
          model: GM()
            .optional()
            .describe(
              "Model override for this agent. Use `inherit` to match the spawning conversation.",
            ),
          tools: Ist()
            .optional()
            .describe(
              "Tools available to this agent. Replaces the default set.",
            ),
          disallowedTools: Ist()
            .optional()
            .describe(
              "Tools removed from the default set. Ignored if `tools` is set.",
            ),
          color: GM()
            .optional()
            .describe("@internal \u2014 display color in the agents UI"),
          effort: GM()
            .optional()
            .describe(
              "Thinking effort: `low`, `medium`, `high`, `max`, or an integer.",
            ),
          permissionMode: GM()
            .optional()
            .describe("Permission mode the agent runs in."),
          mcpServers: v
            .unknown()
            .optional()
            .describe("MCP servers to connect when this agent runs."),
          hooks: v
            .unknown()
            .optional()
            .describe("Hooks registered while this agent runs."),
          maxTurns: v
            .union([v.number(), v.string(), v.null()])
            .optional()
            .describe("Maximum conversation turns before the agent stops."),
          skills: Ist().optional().describe("Skills preloaded for this agent."),
          initialPrompt: GM()
            .optional()
            .describe(
              "Auto-submitted first message when this agent runs as the main session (via `--agent` or settings). Not read when spawned as a subagent.",
            ),
          memory: GM()
            .optional()
            .describe("Memory scope: `user`, `project`, or `local`."),
          background: Rst()
            .optional()
            .describe("If true, the agent runs in the background by default."),
          isolation: GM()
            .optional()
            .describe(
              "Filesystem isolation: `worktree` runs in a temporary git worktree.",
            ),
          observer: GM()
            .optional()
            .describe(
              "Agent type auto-spawned as a background observer whenever this agent runs.",
            ),
          observerMessage: GM()
            .optional()
            .describe(
              "Supplemental postamble appended (after the harness-owned default) to each activity digest sent to the observer.",
            ),
          observeSubagents: Rst()
            .optional()
            .describe(
              "If false, subagents this agent spawns do not inherit its observer. Defaults to true.",
            ),
        }),
      )),
      (CIg = Se(() =>
        v.object({
          name: GM()
            .optional()
            .describe(
              "Style name used in the Output style picker in `/config` and in settings. Defaults to the filename.",
            ),
          description: GM()
            .optional()
            .describe("Shown in the Output style picker in `/config`."),
          "keep-coding-instructions": Rst()
            .optional()
            .describe(
              "If true, the default coding instructions stay in the system prompt alongside this style.",
            ),
          "force-for-plugin": Rst()
            .optional()
            .describe(
              "@internal \u2014 only meaningful for plugin-bundled styles; ignored for user styles",
            ),
        }),
      )),
      (xIg = {
        skill: Se(() => CJi().strict()),
        agent: Se(() => TIg().strict()),
        "output-style": Se(() => CIg().strict()),
      }),
      (lru = new Set()));
  });
