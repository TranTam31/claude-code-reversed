// Module: kM (lines 68464-69834)
  var kM = S(() => {
    Vn();
    a3r();
    V5e();
    Ge();
    H0();
    ((u3r = new Set([
      "claude-community",
      "claude-plugins-community",
      "healthcare",
    ])),
      (n5n = new Set([
        "claude-code-marketplace",
        "claude-code-plugins",
        "claude-plugins-official",
        "anthropic-marketplace",
        "anthropic-plugins",
        "agent-skills",
        "anthropic-agent-skills",
        "life-sciences",
        "knowledge-work-plugins",
        "claude-for-legal",
        "claude-for-financial-services",
        "financial-services-plugins",
        "first-party-plugins",
      ])),
      (Txt = new Set([...n5n, ...u3r])),
      (lkh = new Set(["knowledge-work-plugins", "first-party-plugins"])));
    ((ckh =
      /(?:official[^a-z0-9]*(anthropic|claude)|(?:anthropic|claude)[^a-z0-9]*official|^(?:anthropic|claude)[^a-z0-9]*(marketplace|plugins|official))/i),
      (ukh = /[^\u0020-\u007E]/));
    pkh = new Set([
      "https:",
      "http:",
      "git:",
      "git+https:",
      "git+http:",
      "git+ssh:",
      "ssh:",
    ]);
    ((ede = Se(() => v.string().startsWith("./"))),
      (wxt = Se(() => ede().endsWith(".json"))),
      (y5l = Se(() =>
        v.union([
          ede()
            .refine((e) => e.endsWith(".mcpb") || e.endsWith(".dxt"), {
              message: "MCPB file path must end with .mcpb or .dxt",
            })
            .describe("Path to MCPB file relative to plugin root"),
          v
            .string()
            .url()
            .refine((e) => e.endsWith(".mcpb") || e.endsWith(".dxt"), {
              message: "MCPB URL must end with .mcpb or .dxt",
            })
            .describe("URL to MCPB file"),
        ]),
      )),
      (gLi = Se(() => ede().endsWith(".md"))),
      (yLi = Se(() => v.union([gLi(), ede()]))),
      (b5l = Se(() =>
        v
          .string()
          .min(1, "Marketplace must have a name")
          .refine((e) => !e.includes(" "), {
            message:
              'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")',
          })
          .refine(
            (e) =>
              !e.includes("/") &&
              !e.includes("\\") &&
              !e.includes("..") &&
              e !== ".",
            {
              message:
                'Marketplace name cannot contain path separators (/ or \\), ".." sequences, or be "."',
            },
          )
          .refine((e) => !dkh(e), {
            message:
              "Marketplace name impersonates an official Anthropic/Claude marketplace",
          })
          .refine((e) => e.toLowerCase() !== "inline", {
            message:
              'Marketplace name "inline" is reserved for --plugin-dir session plugins',
          })
          .refine((e) => e.toLowerCase() !== "builtin", {
            message:
              'Marketplace name "builtin" is reserved for built-in plugins',
          })
          .refine((e) => e.toLowerCase() !== "skills-dir", {
            message:
              'Marketplace name "skills-dir" is reserved for plugins auto-loaded from .claude/skills/',
          }),
      )),
      (d3r = Se(() =>
        v.object({
          name: v
            .string()
            .min(1, "Author name cannot be empty")
            .describe("Display name of the plugin author or organization"),
          email: v
            .string()
            .optional()
            .describe("Contact email for support or feedback"),
          url: v
            .string()
            .optional()
            .describe("Website, GitHub profile, or organization URL"),
        }),
      )),
      (mkh = Se(() =>
        v.object({
          $schema: v
            .string()
            .optional()
            .describe(
              "JSON Schema reference for editor autocomplete/validation; ignored at load time",
            ),
          name: v
            .string()
            .min(1, "Plugin name cannot be empty")
            .refine((e) => !e.includes(" "), {
              message:
                'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")',
            })
            .describe(
              "Unique identifier for the plugin, used for namespacing (prefer kebab-case)",
            ),
          displayName: v
            .string()
            .optional()
            .describe(
              'Human-readable name shown in UI (e.g., "GitHub Utils"). Falls back to `name` when omitted. Unlike `name`, may contain spaces and any casing; not used for namespacing or lookup.',
            ),
          version: v
            .string()
            .optional()
            .describe(
              "Semantic version (e.g., 1.2.3) following semver.org specification",
            ),
          description: v
            .string()
            .optional()
            .describe(
              "Brief, user-facing explanation of what the plugin provides",
            ),
          author: d3r()
            .optional()
            .describe("Information about the plugin creator or maintainer"),
          homepage: v
            .string()
            .url()
            .optional()
            .describe("Plugin homepage or documentation URL"),
          repository: v
            .string()
            .optional()
            .describe("Source code repository URL"),
          license: v
            .string()
            .optional()
            .describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
          keywords: v
            .array(v.string())
            .optional()
            .describe("Tags for plugin discovery and categorization"),
          defaultEnabled: v
            .boolean()
            .optional()
            .describe(
              "Whether the plugin starts enabled when the user has no explicit enabled/disabled setting for it (default: true). Explicit enabledPlugins values always win, and a plugin required by an enabled dependent is enabled regardless of this value.",
            ),
          dependencies: v
            .array($kh())
            .optional()
            .describe(
              `Plugins that must be enabled for this plugin to function. Bare names (no "@marketplace") are resolved against the declaring plugin's own marketplace.`,
            ),
        }),
      )),
      (i5n = Se(() =>
        v.object({
          description: v
            .string()
            .optional()
            .describe(
              "Brief, user-facing explanation of what these hooks provide",
            ),
          hooks: v
            .lazy(() => woe())
            .describe(
              "The hooks provided by the plugin, in the same format as the one used for settings",
            ),
        }),
      )),
      (hkh = Se(() =>
        v.object({
          hooks: v.union([
            wxt().describe(
              "Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root",
            ),
            v
              .lazy(() => woe())
              .describe(
                "Additional hooks (in addition to those in hooks/hooks.json, if it exists)",
              ),
            v.array(
              v.union([
                wxt().describe(
                  "Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root",
                ),
                v
                  .lazy(() => woe())
                  .describe(
                    "Additional hooks (in addition to those in hooks/hooks.json, if it exists)",
                  ),
              ]),
            ),
          ]),
        }),
      )),
      (gkh = Se(() =>
        v
          .object({
            source: yLi()
              .optional()
              .describe(
                "Path to command markdown file, relative to plugin root",
              ),
            content: v
              .string()
              .optional()
              .describe("Inline markdown content for the command"),
            description: v
              .string()
              .optional()
              .describe("Command description override"),
            argumentHint: v
              .string()
              .optional()
              .describe('Hint for command arguments (e.g., "[file]")'),
            model: v
              .string()
              .optional()
              .describe("Default model for this command"),
            allowedTools: v
              .array(v.string())
              .optional()
              .describe("Tools allowed when command runs"),
          })
          .refine((e) => (e.source && !e.content) || (!e.source && e.content), {
            message:
              'Command must have either "source" (file path) or "content" (inline markdown), but not both',
          }),
      )),
      (ykh = Se(() =>
        v.object({
          commands: v.union([
            yLi().describe(
              "Path to a command file or skill directory, relative to the plugin root. When set, the commands/ directory is not auto-loaded \u2014 list its files here if you want both.",
            ),
            v
              .array(
                yLi().describe(
                  "Path to a command file or skill directory, relative to the plugin root. When set, the commands/ directory is not auto-loaded \u2014 list its files here if you want both.",
                ),
              )
              .describe(
                "List of command file or skill directory paths. When set, the commands/ directory is not auto-loaded.",
              ),
            v
              .record(v.string(), gkh())
              .describe(
                'Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" \u2192 "/plugin:about")',
              ),
          ]),
        }),
      )),
      (_kh = Se(() =>
        v.object({
          agents: v.union([
            gLi().describe(
              "Path to an agent file, relative to the plugin root. When set, the agents/ directory is not auto-loaded \u2014 list its files here if you want both.",
            ),
            v
              .array(
                gLi().describe(
                  "Path to an agent file, relative to the plugin root. When set, the agents/ directory is not auto-loaded \u2014 list its files here if you want both.",
                ),
              )
              .describe(
                "List of agent file paths. When set, the agents/ directory is not auto-loaded.",
              ),
          ]),
        }),
      )),
      (bkh = Se(() =>
        v.object({
          skills: v.union([
            ede().describe(
              "Path to a skill directory, relative to the plugin root. Loaded in addition to the skills/ directory (except: for a marketplace entry whose source resolves to the marketplace root, declaring a specific subdirectory replaces the skills/ scan).",
            ),
            v
              .array(
                ede().describe(
                  "Path to a skill directory, relative to the plugin root.",
                ),
              )
              .describe(
                "List of skill directory paths, loaded in addition to the skills/ directory (except: for a marketplace entry whose source resolves to the marketplace root, declaring specific subdirectories replaces the skills/ scan).",
              ),
          ]),
        }),
      )),
      (S5l = Se(() =>
        v.object({
          outputStyles: v.union([
            ede().describe(
              "Path to an output-styles directory or file, relative to the plugin root. When set, the output-styles/ directory is not auto-loaded \u2014 list its files here if you want both.",
            ),
            v
              .array(
                ede().describe(
                  "Path to an output-styles directory or file, relative to the plugin root. When set, the output-styles/ directory is not auto-loaded \u2014 list its files here if you want both.",
                ),
              )
              .describe(
                "List of output-style directory or file paths. When set, the output-styles/ directory is not auto-loaded.",
              ),
          ]),
        }),
      )),
      (Skh = Se(() =>
        v
          .string()
          .max(64)
          .regex(/^[a-z][a-z0-9_-]*$/, "must match ^[a-z][a-z0-9_-]*$"),
      )),
      (Ekh = Se(() =>
        v
          .object({
            id: Skh(),
            remote: v
              .string()
              .max(256)
              .regex(
                /^(npm:[@a-z0-9/._-]+(@[a-z0-9._+-]+)?|github:[\w.-]+\/[\w.-]+@[\w./-]+#.+\.js)$/,
                "must be npm:<pkg>[@ver] or github:<owner>/<repo>@<ref>#<path>.js",
              )
              .optional(),
            integrity: v
              .string()
              .max(512)
              .regex(
                /^sha(256|384|512)-[A-Za-z0-9+/=]+$/,
                "must be SRI form: sha256-, sha384-, or sha512-<base64>",
              )
              .optional(),
          })
          .strict(),
      )),
      (vkh = Se(() =>
        v.object({
          syntaxHighlighting: v
            .object({ hljsLanguages: v.array(Ekh()).max(E5l) })
            .strict(),
        }),
      )),
      (v5l = Se(() =>
        v.object({
          themes: v.union([
            ede().describe(
              "Path to a themes directory or file, relative to the plugin root. When set, the themes/ directory is not auto-loaded \u2014 list its files here if you want both.",
            ),
            v
              .array(
                ede().describe(
                  "Path to a themes directory or file, relative to the plugin root. When set, the themes/ directory is not auto-loaded \u2014 list its files here if you want both.",
                ),
              )
              .describe(
                "List of theme directory or file paths. When set, the themes/ directory is not auto-loaded.",
              ),
          ]),
        }),
      )),
      (Akh = Se(() =>
        v.object({
          workflows: v
            .union([
              ede().describe(
                "Path to a workflows directory or .js file, relative to the plugin root. When set, the workflows/ directory is not auto-loaded \u2014 list its files here if you want both.",
              ),
              v
                .array(
                  ede().describe(
                    "Path to a workflows directory or .js file, relative to the plugin root. When set, the workflows/ directory is not auto-loaded \u2014 list its files here if you want both.",
                  ),
                )
                .describe(
                  "List of workflow directory or .js file paths. When set, the workflows/ directory is not auto-loaded.",
                ),
            ])
            .optional(),
        }),
      )),
      (_5l = Se(() => v.string().min(1))),
      (wkh = Se(() =>
        v
          .string()
          .min(2)
          .refine((e) => e.startsWith("."), {
            message:
              'File extensions must start with dot (e.g., ".ts", not "ts")',
          }),
      )),
      (Tkh = Se(() =>
        v.object({
          mcpServers: v.union([
            wxt().describe(
              "MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)",
            ),
            y5l().describe(
              "Path or URL to MCPB file containing MCP server configuration",
            ),
            v
              .record(v.string(), o1e())
              .describe("MCP server configurations keyed by server name"),
            v
              .array(
                v.union([
                  wxt().describe("Path to MCP servers configuration file"),
                  y5l().describe("Path or URL to MCPB file"),
                  v
                    .record(v.string(), o1e())
                    .describe("Inline MCP server configurations"),
                ]),
              )
              .describe(
                "Array of MCP server configurations (paths, MCPB files, or inline definitions)",
              ),
          ]),
        }),
      )),
      (A5l = Se(() =>
        v
          .object({
            type: v
              .enum(["string", "number", "boolean", "directory", "file"])
              .describe("Type of the configuration value"),
            title: v
              .string()
              .describe("Human-readable label shown in the config dialog"),
            description: v
              .string()
              .describe(
                "Help text shown beneath the field in the config dialog",
              ),
            required: v
              .boolean()
              .optional()
              .describe("If true, validation fails when this field is empty"),
            default: v
              .union([v.string(), v.number(), v.boolean(), v.array(v.string())])
              .optional()
              .describe("Default value used when the user provides nothing"),
            multiple: v
              .boolean()
              .optional()
              .describe("For string type: allow an array of strings"),
            sensitive: v
              .boolean()
              .optional()
              .describe(
                "If true, masks dialog input and stores value in secure storage (keychain/credentials file) instead of settings.json",
              ),
            min: v
              .number()
              .optional()
              .describe("Minimum value (number type only)"),
            max: v
              .number()
              .optional()
              .describe("Maximum value (number type only)"),
          })
          .strict(),
      )),
      (Ckh = Se(() =>
        v.object({
          userConfig: v
            .record(
              v
                .string()
                .regex(
                  /^[A-Za-z_]\w*$/,
                  "Option keys must be valid identifiers (letters, digits, underscore; no leading digit) \u2014 they become CLAUDE_PLUGIN_OPTION_<KEY> env vars in hooks",
                ),
              A5l(),
            )
            .optional()
            .describe(
              "User-configurable values this plugin needs. Prompted at enable time. Non-sensitive values saved to settings.json; sensitive values to secure storage. Available as ${user_config.KEY} in MCP/LSP server config, hook commands, and (non-sensitive only) skill/agent content. Keep sensitive value counts small.",
            ),
        }),
      )),
      (xkh = Se(() =>
        v.object({
          channels: v
            .array(
              v
                .object({
                  server: v
                    .string()
                    .min(1)
                    .describe(
                      "Name of the MCP server this channel binds to. Must match a key in this plugin's mcpServers.",
                    ),
                  displayName: v
                    .string()
                    .optional()
                    .describe(
                      'Human-readable name shown in the config dialog title (e.g., "Telegram"). Defaults to the server name.',
                    ),
                  userConfig: v
                    .record(v.string(), A5l())
                    .optional()
                    .describe(
                      "Fields to prompt the user for when enabling this plugin in assistant mode. Saved values are substituted into ${user_config.KEY} references in the mcpServers env.",
                    ),
                })
                .strict(),
            )
            .describe(
              "Channels this plugin provides. Each entry declares an MCP server as a message channel and optionally specifies user configuration to prompt for at enable time.",
            ),
        }),
      )),
      (c7t = Se(() =>
        v.strictObject({
          command: v
            .string()
            .min(1)
            .refine(
              (e) => {
                if (e.includes(" ") && !e.startsWith("/")) return !1;
                return !0;
              },
              {
                message:
                  "Command should not contain spaces. Use args array for arguments.",
              },
            )
            .describe(
              'Command to execute the LSP server (e.g., "typescript-language-server")',
            ),
          args: v
            .array(_5l())
            .optional()
            .describe("Command-line arguments to pass to the server"),
          extensionToLanguage: v
            .record(wkh(), _5l())
            .refine((e) => Object.keys(e).length > 0, {
              message: "extensionToLanguage must have at least one mapping",
            })
            .describe(
              "Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping.",
            ),
          transport: v
            .enum(["stdio", "socket"])
            .default("stdio")
            .describe("Communication transport mechanism"),
          env: v
            .record(v.string(), v.string())
            .optional()
            .describe("Environment variables to set when starting the server"),
          initializationOptions: v
            .unknown()
            .optional()
            .describe(
              "Initialization options passed to the server during initialization",
            ),
          settings: v
            .unknown()
            .optional()
            .describe(
              "Settings passed to the server via workspace/didChangeConfiguration",
            ),
          workspaceFolder: v
            .string()
            .optional()
            .describe("Workspace folder path to use for the server"),
          startupTimeout: v
            .number()
            .int()
            .positive()
            .optional()
            .describe("Maximum time to wait for server startup (milliseconds)"),
          shutdownTimeout: v
            .number()
            .int()
            .positive()
            .optional()
            .describe(
              "Maximum time to wait for graceful shutdown (milliseconds)",
            ),
          restartOnCrash: v
            .boolean()
            .optional()
            .describe("Whether to restart the server if it crashes"),
          maxRestarts: v
            .number()
            .int()
            .nonnegative()
            .optional()
            .describe("Maximum number of restart attempts before giving up"),
          diagnostics: v
            .boolean()
            .optional()
            .describe(
              "Whether to push publishDiagnostics into the agent context after edits. Set to false to keep LSP navigation (goToDefinition, hover, etc.) but suppress automatic diagnostic injection. Defaults to true.",
            ),
        }),
      )),
      (Hkh = Se(() =>
        v.strictObject({
          name: v
            .string()
            .min(1)
            .describe(
              "Identifier for this monitor, unique within the plugin. Used to dedupe so re-arming (plugin reload, repeat skill invoke) does not spawn duplicates.",
            ),
          command: v
            .string()
            .min(1)
            .describe(
              'Shell command to run as a persistent background monitor. Each stdout line is delivered to the model as a <task_notification> event; the process runs for the session lifetime. ${CLAUDE_PLUGIN_ROOT}, ${CLAUDE_PLUGIN_DATA}, ${CLAUDE_PROJECT_DIR}, ${user_config.*}, and ${ENV_VAR} are substituted. Runs in the session cwd \u2014 prefix with `cd "${CLAUDE_PLUGIN_ROOT}" && ` if the script needs its own directory.',
            ),
          description: v
            .string()
            .min(1)
            .describe(
              "Short human-readable description of what is being monitored (shown in task panel and notification summary).",
            ),
          when: v
            .union([
              v.literal("always"),
              v
                .string()
                .startsWith("on-skill-invoke:")
                .refine((e) => e.length > 16, {
                  message: "on-skill-invoke: must specify a skill name",
                }),
            ])
            .default("always")
            .describe(
              'Arm trigger. "always" arms at session start and on plugin reload. "on-skill-invoke:<skill>" arms the first time that skill is dispatched (via Skill tool or slash command).',
            ),
        }),
      )),
      (_Li = Se(() =>
        v
          .array(Hkh())
          .refine((e) => new Set(e.map((t) => t.name)).size === e.length, {
            message: "Monitor names must be unique within a plugin",
          }),
      )),
      (w5l = Se(() =>
        v.object({
          monitors: v
            .union([
              wxt().describe(
                "Path to a JSON file containing the monitors array, relative to the plugin root",
              ),
              _Li(),
            ])
            .describe(
              "Background watch scripts the host arms as persistent Monitor tasks (unsandboxed, same trust tier as hooks) so plugins need not instruct the model to arm them. When omitted, monitors/monitors.json at the plugin root is loaded if present.",
            ),
        }),
      )),
      (kkh = Se(() =>
        v.object({
          lspServers: v.union([
            wxt().describe(
              "Path to .lsp.json configuration file relative to plugin root",
            ),
            v
              .record(v.string(), c7t())
              .describe("LSP server configurations keyed by server name"),
            v
              .array(
                v.union([
                  wxt().describe("Path to LSP configuration file"),
                  v
                    .record(v.string(), c7t())
                    .describe("Inline LSP server configurations"),
                ]),
              )
              .describe(
                "Array of LSP server configurations (paths or inline definitions)",
              ),
          ]),
        }),
      )),
      (T5l = Se(() =>
        v
          .string()
          .refine(
            (e) => !e.includes("..") && !e.includes("//"),
            "Package name cannot contain path traversal patterns",
          )
          .refine((e) => {
            let t = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/,
              r = /^[a-z0-9][a-z0-9-._]*$/;
            return t.test(e) || r.test(e);
          }, "Invalid npm package name format"),
      )),
      (Cxt = /^[a-z0-9](?:[a-z0-9._-]*[a-z0-9_-])?$/),
      (s5n = /^[0-9a-f]{64}$/),
      (Ikh = Se(() => v.object({ sha256: v.string().regex(s5n) }))));
    ((Rkh = Se(() =>
      v.object({
        binaries: v
          .unknown()
          .transform(d7t)
          .describe(
            "sha256-pinned files to fetch into bin/ at install time, keyed by basename (target triple encoded in the name)",
          ),
      }),
    )),
      (Dkh = Se(() =>
        v.object({
          settings: v
            .record(v.string(), v.unknown())
            .optional()
            .describe(
              "Settings to merge into the user settings while this plugin is enabled. Only the documented allowlisted keys are applied.",
            ),
        }),
      )),
      (Pkh = Se(() =>
        v.object({
          experimental: v.preprocess(
            (e) =>
              typeof e === "object" && e !== null && !Array.isArray(e)
                ? e
                : void 0,
            v
              .object({
                ...v5l().partial().shape,
                ...vkh().partial().shape,
                ...w5l().partial().shape,
                ...S5l().partial().shape,
                evals: v
                  .union([v.string(), v.array(v.string())])
                  .optional()
                  .describe(
                    "Path(s) to evaluation query files for `claude plugin eval`. Defaults to `evals/`.",
                  ),
              })
              .passthrough()
              .optional()
              .describe(
                "Components whose manifest shape may change without a deprecation cycle. Move a key out of here once it is promoted to stable.",
              ),
          ),
        }),
      )),
      (xxt = Se(() =>
        v.object({
          ...mkh().shape,
          ...hkh().partial().shape,
          ...ykh().partial().shape,
          ..._kh().partial().shape,
          ...bkh().partial().shape,
          ...S5l().partial().shape,
          ...v5l().partial().shape,
          ...Akh().shape,
          ...xkh().partial().shape,
          ...Tkh().partial().shape,
          ...kkh().partial().shape,
          ...w5l().partial().shape,
          ...Dkh().partial().shape,
          ...Ckh().partial().shape,
          ...Rkh().partial().shape,
          ...Pkh().partial().shape,
        }),
      )),
      (f3r = Se(() =>
        v.discriminatedUnion("source", [
          v.object({
            source: v.literal("url"),
            url: v
              .string()
              .url()
              .describe("Direct URL to marketplace.json file"),
            headers: v
              .record(v.string(), v.string())
              .optional()
              .describe("Custom HTTP headers (e.g., for authentication)"),
          }),
          v.object({
            source: v.literal("github"),
            repo: v.string().describe("GitHub repository in owner/repo format"),
            ref: v
              .string()
              .optional()
              .describe(
                'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
              ),
            path: v
              .string()
              .optional()
              .describe(
                "Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)",
              ),
            sparsePaths: v
              .array(v.string())
              .optional()
              .describe(
                'Directories to include via git sparse-checkout (cone mode). Use for monorepos where the marketplace lives in a subdirectory. Example: [".claude-plugin", "plugins"]. If omitted, the full repository is cloned.',
              ),
            skipLfs: v
              .boolean()
              .optional()
              .describe(
                "Skip Git LFS smudge during clone and update (sets GIT_LFS_SKIP_SMUDGE=1) so LFS pointer files stay as pointers instead of downloading their content. Use for marketplaces hosted in repos with large LFS objects.",
              ),
          }),
          v.object({
            source: v.literal("git"),
            url: v.string().describe("Full git repository URL"),
            ref: v
              .string()
              .optional()
              .describe(
                'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
              ),
            path: v
              .string()
              .optional()
              .describe(
                "Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)",
              ),
            sparsePaths: v
              .array(v.string())
              .optional()
              .describe(
                'Directories to include via git sparse-checkout (cone mode). Use for monorepos where the marketplace lives in a subdirectory. Example: [".claude-plugin", "plugins"]. If omitted, the full repository is cloned.',
              ),
            skipLfs: v
              .boolean()
              .optional()
              .describe(
                "Skip Git LFS smudge during clone and update (sets GIT_LFS_SKIP_SMUDGE=1) so LFS pointer files stay as pointers instead of downloading their content. Use for marketplaces hosted in repos with large LFS objects.",
              ),
          }),
          v.object({
            source: v.literal("npm"),
            package: T5l().describe("NPM package containing marketplace.json"),
          }),
          v.object({
            source: v.literal("file"),
            path: v.string().describe("Local file path to marketplace.json"),
          }),
          v.object({
            source: v.literal("directory"),
            path: v
              .string()
              .describe(
                "Local directory containing .claude-plugin/marketplace.json",
              ),
          }),
          v
            .object({ source: v.literal("skills-dir") })
            .describe(
              "Policy-list sentinel for the ~/.claude/skills/ auto-load (@skills-dir plugins). In strictKnownMarketplaces: opt the scan back IN (by default any allowlist blocks it). In blockedMarketplaces: turn the scan OFF without otherwise restricting marketplaces. Only meaningful in those two managed-settings lists (areLocalPluginDirsAllowedByPolicy); known_marketplaces.json / marketplace add etc. ignore it.",
            ),
          v.object({
            source: v.literal("hostPattern"),
            hostPattern: v
              .string()
              .describe(
                'Regex pattern to match the host/domain extracted from any marketplace source type. For github sources, matches against github.com. For git sources (SSH or HTTPS), extracts the hostname from the URL. Use in strictKnownMarketplaces to allow all marketplaces from a specific host (e.g., "^github\\.mycompany\\.com$").',
              ),
          }),
          v.object({
            source: v.literal("pathPattern"),
            pathPattern: v
              .string()
              .describe(
                'Regex pattern matched against the .path field of file and directory sources. Use in strictKnownMarketplaces to allow filesystem-based marketplaces alongside hostPattern restrictions for network sources. Use ".*" to allow all filesystem paths, or a narrower pattern (e.g., "^/opt/approved/") to restrict to specific directories.',
              ),
          }),
          v
            .object({
              source: v.literal("settings"),
              name: b5l()
                .refine((e) => !Txt.has(e.toLowerCase()), {
                  message:
                    "Reserved marketplace names cannot be used with settings sources. validateOfficialNameSource only accepts github/git sources from anthropics/* for these names; a settings source would be rejected after loadAndCacheMarketplace has already written to disk with cleanupNeeded=false.",
                })
                .describe(
                  "Marketplace name. Must match the extraKnownMarketplaces key (enforced); the synthetic manifest is written under this name. Same validation " +
                    "as PluginMarketplaceSchema plus reserved-name rejection \u2014 " +
                    "validateOfficialNameSource runs after the disk write, too late to clean up.",
                ),
              plugins: v
                .array(Mkh())
                .describe("Plugin entries declared inline in settings.json"),
              owner: d3r().optional(),
            })
            .describe(
              "Inline marketplace manifest defined directly in settings.json. The reconciler writes a synthetic marketplace.json to the cache; diffMarketplaces detects edits via isEqual on the stored source (the plugins array is inside this object, so edits surface as sourceChanged).",
            ),
        ]),
      )),
      (hLi = Se(() =>
        v
          .string()
          .length(40)
          .regex(
            /^[a-f0-9]{40}$/,
            "Must be a full 40-character lowercase git commit SHA",
          ),
      )),
      (C5l = Se(() =>
        v.union([
          v
            .preprocess((e) => (e === "." ? "./" : e), ede())
            .describe(
              "Path to the plugin root, relative to the marketplace root (the directory containing .claude-plugin/, not .claude-plugin/ itself)",
            ),
          v
            .object({
              source: v.literal("npm"),
              package: T5l()
                .or(
                  v
                    .string()
                    .refine(
                      (e) =>
                        /^(?:file|https?|git(?:\+https?|\+ssh)?|ssh|github|gitlab|bitbucket):/i.test(
                          e,
                        ) || !e.includes(".."),
                      'Package reference cannot contain ".." path segments',
                    ),
                )
                .describe(
                  "Package name (or url, or local path, or anything else that can be passed to `npm` as a package)",
                ),
              version: v
                .string()
                .optional()
                .describe(
                  "Specific version or version range (e.g., ^1.0.0, ~2.1.0)",
                ),
              registry: v
                .string()
                .url()
                .optional()
                .describe(
                  "Custom NPM registry URL (defaults to using system default, likely npmjs.org)",
                ),
            })
            .describe("NPM package as plugin source"),
          v.object({
            source: v.literal("url"),
            url: v
              .string()
              .describe("Full git repository URL (https:// or git@)"),
            ref: v
              .string()
              .optional()
              .describe(
                'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
              ),
            sha: hLi().optional().describe("Specific commit SHA to use"),
          }),
          v.object({
            source: v.literal("github"),
            repo: v.string().describe("GitHub repository in owner/repo format"),
            ref: v
              .string()
              .optional()
              .describe(
                'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
              ),
            sha: hLi().optional().describe("Specific commit SHA to use"),
          }),
          v
            .object({
              source: v.literal("git-subdir"),
              url: v
                .string()
                .describe(
                  "Git repository: GitHub owner/repo shorthand, https://, or git@ URL",
                ),
              path: v
                .string()
                .min(1)
                .describe(
                  'Subdirectory within the repo containing the plugin (e.g., "tools/claude-plugin"). Cloned sparsely using partial clone (--filter=tree:0) to minimize bandwidth for monorepos.',
                ),
              ref: v
                .string()
                .optional()
                .describe(
                  'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
                ),
              sha: hLi().optional().describe("Specific commit SHA to use"),
            })
            .describe(
              "Plugin located in a subdirectory of a larger repository (monorepo). Only the specified subdirectory is materialized; the rest of the repo is not downloaded.",
            ),
          v
            .object({ source: v.literal("unsupported") })
            .describe(
              "Placeholder for source types this Claude Code version does not " +
                "recognize. Never authored by hand \u2014 PluginMarketplaceSchema rewrites " +
                'unparseable sources to this so the entry remains in marketplace.plugins (detectDelistedPlugins must not see it as removed). Install attempts fail at cachePlugin with a clear "update Claude Code" message.',
            ),
        ]),
      )),
      (Mkh = Se(() =>
        v
          .object({
            name: v
              .string()
              .min(1, "Plugin name cannot be empty")
              .refine((e) => !e.includes(" "), {
                message:
                  'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")',
              })
              .describe("Plugin name as it appears in the target repository"),
            source: C5l().describe(
              "Where to fetch the plugin from. Must be a remote source \u2014 relative " +
                "paths have no marketplace repository to resolve against.",
            ),
            description: v.string().optional(),
            version: v.string().optional(),
            strict: v.boolean().optional(),
          })
          .refine((e) => typeof e.source !== "string", {
            message:
              'Plugins in a settings-sourced marketplace must use remote sources (github, git-subdir, npm, url). Relative-path sources like "./foo" have no marketplace repository to resolve against.',
          })
          .refine(
            (e) =>
              typeof e.source === "string" || e.source.source !== "unsupported",
            {
              message:
                "source.source: 'unsupported' is a parse-time placeholder and cannot be authored. Use a remote source (github, git-subdir, npm, url).",
            },
          ),
      )));
    ((l5n = Se(() =>
      v.object({
        cli: v
          .array(v.string().max(64))
          .max(10)
          .optional()
          .describe(
            'First command tokens (e.g. ["stripe"]) \u2014 exact match against commands run this session.',
          ),
        hosts: v
          .array(v.string().max(128))
          .max(20)
          .optional()
          .describe(
            'Hostnames (e.g. ["api.stripe.com"]) \u2014 exact, case-insensitive match against ' +
              "hostnames seen in https?:// URLs in bash commands run this session. Bare hostname only: lowercase, no scheme, no port, no path.",
          ),
        filesRead: v
          .array(v.string().max(256))
          .max(10)
          .optional()
          .describe(
            'Glob patterns (e.g. ["**/*.tf"]) \u2014 the plugin is relevant when a file Claude has read ' +
              "this session matches any pattern. Matched against read-file paths, forward-slash normalized, case-insensitive.",
          ),
        manifestDeps: v
          .array(
            v.object({
              file: v.string().max(256),
              pattern: v.string().max(256),
            }),
          )
          .max(10)
          .optional()
          .describe(
            "Dependency declared in a package manifest. Each {file, pattern} is a pair of RegExp sources: " +
              "`file` matches the manifest filename (package.json, go.mod, requirements.txt, \u2026); " +
              "`pattern` matches the dependency declaration inside that file. Evaluated against files read this session.",
          ),
        cwd: v
          .array(v.string().max(256))
          .max(10)
          .optional()
          .describe(
            'Glob patterns (e.g. ["Engine/Source/Runtime/Renderer/**"]) \u2014 the plugin is relevant when the ' +
              `session's working directory is at or under a directory matching the pattern. Matched against the cwd both relative to the enclosing git repo root and as an absolute path, forward-slash normalized, case-insensitive. A bare directory (no glob characters) means "cwd is at or under this directory". Known at session start, so this signal can surface a suggestion before the first turn.`,
          ),
      }),
    )),
      (c5n = Se(() =>
        v.object({
          topic: v
            .string()
            .max(64)
            .optional()
            .describe(
              'What the user is working with when this plugin is relevant \u2014 fills "Working with {topic}?". ' +
                'Often the product name (e.g. "Stripe"); use a domain (e.g. "design") when the plugin name does not read naturally as a topic. Defaults to the plugin name with each hyphen-segment capitalized.',
            ),
          signals: l5n()
            .optional()
            .describe("Matchers that determine when the plugin is relevant."),
        }),
      )),
      (m3r = Se(() =>
        xxt()
          .partial()
          .extend({
            name: v
              .string()
              .min(1, "Plugin name cannot be empty")
              .refine((e) => !e.includes(" "), {
                message:
                  'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")',
              })
              .describe("Unique identifier matching the plugin name"),
            source: C5l().describe("Where to fetch the plugin from"),
            category: v
              .string()
              .optional()
              .describe(
                'Category for organizing plugins (e.g., "productivity", "development")',
              ),
            tags: v
              .array(v.string())
              .optional()
              .describe("Tags for searchability and discovery"),
            strict: v
              .boolean()
              .optional()
              .default(!0)
              .describe(
                "Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest.",
              ),
            relevance: v
              .preprocess(
                (e) =>
                  typeof e === "object" && e !== null && !Array.isArray(e)
                    ? e
                    : void 0,
                c5n().optional(),
              )
              .describe(
                `Declares when this plugin is relevant to the user's work. Consumed by the spinner tip ("Working with {topic}?"), session-start auto-suggest, and marketplace browse ranking.`,
              ),
          }),
      )),
      (Lkh = Se(() =>
        v.object({
          name: v
            .string()
            .min(1)
            .refine((e) => !e.includes(" ")),
        }),
      )));
    ((HCe = Se(() =>
      v.object({
        $schema: v
          .string()
          .optional()
          .describe(
            "JSON Schema reference for editor autocomplete/validation; ignored at load time",
          ),
        name: b5l(),
        version: v.string().optional().describe("Marketplace manifest version"),
        description: v
          .string()
          .optional()
          .describe("Human-readable description of this marketplace"),
        owner: d3r().describe("Marketplace maintainer or curator information"),
        plugins: v
          .array(v.unknown())
          .transform(Okh)
          .describe("Collection of available plugins in this marketplace"),
        forceRemoveDeletedPlugins: v
          .boolean()
          .optional()
          .describe(
            "When true, plugins removed from this marketplace will be automatically uninstalled and flagged for users",
          ),
        metadata: v
          .object({
            pluginRoot: v
              .string()
              .optional()
              .describe("Base path for relative plugin sources"),
            version: v.string().optional().describe("Marketplace version"),
            description: v
              .string()
              .optional()
              .describe("Marketplace description"),
          })
          .optional()
          .describe("Optional marketplace metadata"),
        allowCrossMarketplaceDependenciesOn: v
          .array(v.string())
          .optional()
          .describe(
            "Marketplace names whose plugins may be auto-installed as dependencies. Only the root marketplace's allowlist applies \u2014 no transitive trust.",
          ),
        renames: v
          .record(v.string(), v.string().nullable())
          .optional()
          .catch(void 0)
          .describe(
            "Append-only map of old plugin name \u2192 current name (or null when removed). The loader follows this on plugin-not-found and migrates user settings to the new name.",
          ),
      }),
    )),
      (tde = Se(() =>
        v
          .string()
          .regex(
            /^[A-Za-z0-9][-A-Za-z0-9._]*@[A-Za-z0-9][-A-Za-z0-9._]*$/,
            "Plugin ID must be in format: plugin@marketplace",
          ),
      )),
      (Nkh =
        /^[A-Za-z0-9][-A-Za-z0-9._]*(@[A-Za-z0-9][-A-Za-z0-9._]*)?(@\^[^@]*)?$/),
      ($kh = Se(() =>
        v.union([
          v
            .string()
            .regex(
              Nkh,
              "Dependency must be a plugin name, optionally qualified with @marketplace",
            )
            .transform((e) => e.replace(/@\^[^@]*$/, "")),
          v
            .object({
              name: v
                .string()
                .min(1)
                .regex(/^[A-Za-z0-9][-A-Za-z0-9._]*$/),
              marketplace: v
                .string()
                .min(1)
                .regex(/^[A-Za-z0-9][-A-Za-z0-9._]*$/)
                .optional(),
            })
            .loose()
            .transform((e) =>
              e.marketplace ? `${e.name}@${e.marketplace}` : e.name,
            ),
        ]),
      )),
      (Fkh = Se(() =>
        v.object({
          version: v.string().describe("Currently installed version"),
          installedAt: v
            .string()
            .describe("ISO 8601 timestamp of installation"),
          lastUpdated: v
            .string()
            .optional()
            .describe("ISO 8601 timestamp of last update"),
          installPath: v
            .string()
            .describe("Absolute path to the installed plugin directory"),
          gitCommitSha: v
            .string()
            .optional()
            .describe(
              "Git commit SHA for git-based plugins (for version tracking)",
            ),
          resolvedVersion: v
            .string()
            .optional()
            .describe(
              "Tag-derived semver this install resolved to (when fetched via a version constraint). Used by verifyAndDemote in preference to manifest.version, since the upstream may have forgotten to bump plugin.json.",
            ),
          auto: v
            .boolean()
            .optional()
            .describe(
              "True when this plugin was pulled in as a dependency rather than installed explicitly. Auto-installed plugins are eligible for removal by the orphan sweep when nothing depends on them. Absent = manual (preserves pre-flag installs).",
            ),
        }),
      )),
      (u5n = Se(() =>
        v.object({
          version: v.literal(1).describe("Schema version 1"),
          plugins: v
            .record(tde(), Fkh())
            .describe("Map of plugin IDs to their installation metadata"),
        }),
      )),
      (Ukh = Se(() => v.enum(["managed", "user", "project", "local"]))),
      (Bkh = Se(() =>
        v.object({
          scope: Ukh().describe("Installation scope"),
          projectPath: v
            .string()
            .optional()
            .describe("Project path (required for project/local scopes)"),
          installPath: v
            .string()
            .describe("Absolute path to the versioned plugin directory"),
          version: v
            .string()
            .optional()
            .describe("Currently installed version"),
          installedAt: v
            .string()
            .optional()
            .describe("ISO 8601 timestamp of installation"),
          lastUpdated: v
            .string()
            .optional()
            .describe("ISO 8601 timestamp of last update"),
          gitCommitSha: v
            .string()
            .optional()
            .describe("Git commit SHA for git-based plugins"),
          resolvedVersion: v
            .string()
            .optional()
            .describe("Tag-derived semver this install resolved to"),
          auto: v
            .boolean()
            .optional()
            .describe(
              "True when pulled in as a dependency. Eligible for orphan sweep.",
            ),
        }),
      )),
      (d5n = Se(() =>
        v.object({
          version: v.literal(2).describe("Schema version 2"),
          plugins: v
            .record(tde(), v.array(Bkh()))
            .describe("Map of plugin IDs to arrays of installation entries"),
        }),
      )),
      (jkh = Se(() =>
        v.object({
          source: f3r().describe("Where to fetch the marketplace from"),
          installLocation: v
            .string()
            .describe("Local cache path where marketplace manifest is stored"),
          lastUpdated: v
            .string()
            .describe("ISO 8601 timestamp of last marketplace refresh"),
          autoUpdate: v
            .boolean()
            .optional()
            .describe(
              "Whether to automatically update this marketplace and its installed plugins on startup",
            ),
        }),
      )),
      (p7t = Se(() => v.record(v.string(), jkh()))));
  });
