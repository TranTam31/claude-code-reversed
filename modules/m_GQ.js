// Module: GQ (lines 71728-71904)
  var GQ = S(() => {
    Vn();
    LDi();
    jA();
    o7t();
    Ar();
    dv();
    kM();
    I5l();
    b5n();
    a3r();
    a3r();
    Ykh = Se(() => v.record(v.string(), v.coerce.string()));
    ((V5l = Se(() => G5l(bLi()))),
      (Xkh = Se(() =>
        v.object({
          source: f3r().describe("Where to fetch the marketplace from"),
          installLocation: v
            .string()
            .optional()
            .describe(
              "Local cache path where marketplace manifest is stored (auto-generated if not provided)",
            ),
          autoUpdate: v
            .boolean()
            .optional()
            .describe(
              "Whether to automatically update this marketplace and its installed plugins on startup",
            ),
        }),
      )),
      (S5n = Se(() =>
        v
          .object({
            serverName: v
              .string()
              .regex(
                /^[a-zA-Z0-9_-]+$/,
                "Server name can only contain letters, numbers, hyphens, and underscores",
              )
              .optional()
              .describe(
                "Name of the MCP server that users are allowed to configure",
              ),
            serverCommand: v
              .array(v.string())
              .min(
                1,
                "Server command must have at least one element (the command)",
              )
              .optional()
              .describe(
                "Command array [command, ...args] to match exactly for allowed stdio servers",
              ),
            serverUrl: v
              .string()
              .optional()
              .describe(
                'URL pattern with wildcard support (e.g., "https://*.example.com/*") for allowed remote MCP servers',
              ),
          })
          .refine(
            (e) =>
              pr(
                [
                  e.serverName !== void 0,
                  e.serverCommand !== void 0,
                  e.serverUrl !== void 0,
                ],
                Boolean,
              ) === 1,
            {
              message:
                'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"',
            },
          ),
      )),
      (E5n = Se(() =>
        v
          .object({
            serverName: v
              .string()
              .min(1, "Server name must be non-empty")
              .refine((e) => e.trim().length > 0, {
                message: "Server name must not be whitespace-only",
              })
              .refine((e) => e === e.trim(), {
                message:
                  "Server name has leading or trailing whitespace and will never match (names are compared verbatim)",
              })
              .optional()
              .describe("Name of the MCP server that is explicitly blocked"),
            serverCommand: v
              .array(v.string())
              .min(
                1,
                "Server command must have at least one element (the command)",
              )
              .optional()
              .describe(
                "Command array [command, ...args] to match exactly for blocked stdio servers",
              ),
            serverUrl: v
              .string()
              .optional()
              .describe(
                'URL pattern with wildcard support (e.g., "https://*.example.com/*") for blocked remote MCP servers',
              ),
          })
          .refine(
            (e) =>
              pr(
                [
                  e.serverName !== void 0,
                  e.serverCommand !== void 0,
                  e.serverUrl !== void 0,
                ],
                Boolean,
              ) === 1,
            {
              message:
                'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"',
            },
          ),
      )),
      (Jkh = Se(() =>
        v.object({
          path: v.string().describe("Absolute path to the helper executable"),
          timeoutMs: v.number().int().min(1000).optional(),
          refreshIntervalMs: v
            .union([v.literal(0), v.number().int().min(60000)])
            .optional(),
        }),
      )),
      (dnt = ["skills", "agents", "hooks", "mcp"]),
      (B5l = Object.freeze({ type: "invalid-entry-stripped" })),
      (Qkh = Se(() =>
        v.union([
          v
            .object({
              type: v
                .literal("regex")
                .describe(
                  'Config variant. This client understands "regex": matches turn output and builds a URL from named capture groups. Entries with other variants are preserved but skipped at runtime.',
                ),
              pattern: v
                .string()
                .describe(
                  "Regex matched against turn output (tool results and assistant text)",
                ),
              url: v
                .string()
                .describe(
                  "Link target. {name} placeholders are filled from named regex capture groups, e.g. (?<id>...) -> {id}. Values are URL-encoded; the origin must be literal in the template. The scheme must be https, http, or a recognized editor or workspace deep-link scheme: vscode, vscode-insiders, cursor, windsurf, zed, jetbrains, idea, slack, linear, notion, figma.",
                ),
              label: v
                .string()
                .optional()
                .describe(
                  "Badge text. {name} placeholders filled from named capture groups; defaults to the full match.",
                ),
            })
            .passthrough(),
          v
            .object({
              type: v
                .string()
                .describe(
                  "Config variant discriminator for entries this client does not understand; the entry is preserved as-is and skipped at runtime.",
                ),
            })
            .passthrough(),
        ]),
      )));
    ((r5 = Se(() => HLi(bLi()))),
      (j5l = Object.freeze({ serverName: "invalid-entry-stripped" })));
  });
