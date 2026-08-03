// Module: LDi (lines 57767-58030)
  var LDi = S(() => {
    Vn();
    ((DDi = require("path")),
      (L0h = Se(() =>
        v
          .object({
            allowedDomains: v.array(v.string()).optional(),
            deniedDomains: v
              .array(v.string())
              .optional()
              .describe(
                "Domains that are always blocked, even if matched by allowedDomains. Supports the same wildcard syntax as allowedDomains. Merged from all settings sources regardless of allowManagedDomainsOnly.",
              ),
            strictAllowlist: v
              .boolean()
              .optional()
              .describe(
                "When true, the sandbox runtime deterministically denies hosts not in allowedDomains instead of prompting. " +
                  "Enforced for sandboxed commands only \u2014 in-process tools such as WebFetch are not gated by this setting. " +
                  "Only honored from user, managed/policy, or CLI (--settings) settings \u2014 " +
                  "project settings (.claude/settings.json and .claude/settings.local.json) are ignored.",
              ),
            allowManagedDomainsOnly: v
              .boolean()
              .optional()
              .describe(
                "When true (and set in managed settings), only allowedDomains and WebFetch(domain:...) allow rules from managed settings are respected. User, project, local, and flag settings domains are ignored. Denied domains are still respected from all sources.",
              ),
            allowUnixSockets: v
              .array(v.string())
              .optional()
              .describe(
                "macOS only: Unix socket paths to allow. Ignored on Linux (seccomp cannot filter by path).",
              ),
            allowAllUnixSockets: v
              .boolean()
              .optional()
              .describe(
                "If true, allow all Unix sockets (disables blocking on both platforms).",
              ),
            allowLocalBinding: v.boolean().optional(),
            allowMachLookup: v
              .array(
                v
                  .string()
                  .refine(
                    (e) =>
                      !(e.endsWith("*") ? e.slice(0, -1) : e).includes("*"),
                    {
                      message:
                        'Wildcards are only allowed as a single trailing "*" (e.g., "com.example.*" or "*" for all services).',
                    },
                  ),
              )
              .optional()
              .describe(
                'macOS only: Additional XPC/Mach service names to allow looking up. Supports trailing-wildcard prefix matching (e.g., "com.apple.coresimulator.*"). Needed for tools that communicate via XPC such as the iOS Simulator or Playwright.',
              ),
            httpProxyPort: v.number().optional(),
            socksProxyPort: v.number().optional(),
            tlsTerminate: v
              .object({
                caCertPath: v.string().min(1).optional(),
                caKeyPath: v.string().min(1).optional(),
              })
              .optional()
              .describe(
                "[EXPERIMENTAL] Enable in-process TLS termination so the per-request filter can see HTTPS request bodies. Provide a CA cert+key, or omit both to have sandbox-runtime generate an ephemeral one for the session. " +
                  "Only honored from user, managed/policy, or CLI (`--settings`) settings \u2014 project settings " +
                  "(.claude/settings.json and .claude/settings.local.json) are ignored.",
              ),
          })
          .optional(),
      )),
      (O0h = Se(() =>
        v
          .object({
            allowWrite: v
              .array(v.string())
              .optional()
              .describe(
                "Additional paths to allow writing within the sandbox. Merged with paths from Edit(...) allow permission rules.",
              ),
            denyWrite: v
              .array(v.string())
              .optional()
              .describe(
                "Additional paths to deny writing within the sandbox. Merged with paths from Edit(...) deny permission rules.",
              ),
            denyRead: v
              .array(v.string())
              .optional()
              .describe(
                "Additional paths to deny reading within the sandbox. Merged with paths from Read(...) deny permission rules.",
              ),
            allowRead: v
              .array(v.string())
              .optional()
              .describe(
                "Paths to re-allow reading within denyRead regions. Takes precedence over denyRead for matching paths.",
              ),
            allowManagedReadPathsOnly: v
              .boolean()
              .optional()
              .describe(
                "When true (set in managed settings), only allowRead paths from policySettings are used.",
              ),
            disabled: v
              .boolean()
              .optional()
              .describe(
                "macOS and Linux/WSL only: skip filesystem isolation entirely while keeping network and seccomp isolation. Ignored on native Windows, where the sandboxed process runs as a separate user with no inherent rights, so skipping the filesystem rules would " +
                  "withhold every access grant rather than loosen them \u2014 filesystem isolation stays on there. " +
                  "Sandboxed commands get unrestricted read/write access to the host filesystem; network egress is still confined to network.allowedDomains. Intended for deployments whose goal is egress control rather than filesystem containment. Does not change Bash prompting: sandbox.autoAllowBashIfSandboxed is independent and still defaults to true, so set it to false to keep prompting for sandboxed commands. Drops the read protection from filesystem.denyRead and credentials.files for sandboxed commands, since both are enforced by the filesystem layer this turns off; credentials.envVars deny/mask is unaffected. " +
                  "Only honored from user, managed/policy, or CLI (`--settings`) settings \u2014 " +
                  "project settings (.claude/settings.json and .claude/settings.local.json) are ignored. If managed settings configure sandbox.filesystem at all, or list any sandbox.credentials.files entry, only managed settings can set this: an admin who deployed filesystem restrictions must not have them switched off by a user-writable " +
                  "file. (sandbox.credentials.envVars does not pin it \u2014 env scrubbing is independent of " +
                  "the filesystem layer and survives this setting.) When unset, filesystem isolation stays on.",
              ),
          })
          .optional(),
      )),
      (PDi = Se(() =>
        v.object({
          path: v
            .string()
            .min(1)
            .describe(
              "Path to a credential file or directory. Same resolution as sandbox.filesystem.* paths: absolute, ~ expanded, or relative to the settings file root (project root for project settings, ~/.claude for user settings).",
            ),
          mode: v
            .literal("deny")
            .describe("Access mode for this path. Only `deny` is supported."),
        }),
      )),
      (MDi = Se(() =>
        v.object({
          name: v
            .string()
            .regex(
              /^[A-Za-z_][A-Za-z0-9_]*$/,
              "Environment variable name must start with a letter or underscore and contain only letters, digits, and underscores",
            )
            .describe("Environment variable name."),
          mode: v
            .enum(["deny", "mask"])
            .describe(
              "Access mode for this environment variable. `deny` unsets the variable for sandboxed commands; `mask` shows sandboxed commands a sentinel value and the " +
                "host proxy swaps sentinel\u2192real on egress to `injectHosts`.",
            ),
          injectHosts: v
            .array(v.string())
            .optional()
            .describe(
              "Optional narrowing of where the proxy substitutes this credential. Only meaningful when mode is `mask`; accepted but ignored for `deny`. If unset, defaults to " +
                "`network.allowedDomains` \u2014 the credential is injected at " +
                "every reachable host. Each entry must be reachable via `network.allowedDomains` (sandbox-runtime validates this).",
            ),
        }),
      )),
      (N0h = Se(() =>
        v
          .object({
            files: v
              .array(PDi())
              .optional()
              .describe(
                "Credential files or directories to protect. `deny` blocks reads inside the sandbox.",
              ),
            envVars: v
              .array(MDi())
              .optional()
              .describe(
                "Environment variables to protect. `deny` unsets the variable for sandboxed commands; `mask` substitutes a sentinel inside the sandbox and injects the real value at the proxy.",
              ),
            allowPlaintextInject: v
              .boolean()
              .optional()
              .describe(
                "Allow sentinel\u2192real substitution on the plain-HTTP proxy path. " +
                  "Defaults to false: without TLS termination the upstream identity is unverified and the credential travels in cleartext. Set only for trusted-network test fixtures. Only honored from user, managed/policy, or CLI (`--settings`) " +
                  "settings \u2014 project settings (.claude/settings.json and " +
                  ".claude/settings.local.json) are ignored.",
              ),
          })
          .optional(),
      )),
      (XBr = Se(() =>
        v
          .object({
            enabled: v.boolean().optional(),
            failIfUnavailable: v
              .boolean()
              .optional()
              .describe(
                "Exit with an error at startup if sandbox.enabled is true but the sandbox cannot start (missing dependencies or unsupported platform). When false (default), a warning is shown and commands run unsandboxed. Intended for managed-settings deployments that require sandboxing as a hard gate.",
              ),
            autoAllowBashIfSandboxed: v.boolean().optional(),
            allowUnsandboxedCommands: v
              .boolean()
              .optional()
              .describe(
                "Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. Default: true.",
              ),
            network: L0h(),
            filesystem: O0h(),
            credentials: N0h(),
            ignoreViolations: v
              .record(v.string(), v.array(v.string()))
              .optional(),
            enableWeakerNestedSandbox: v.boolean().optional(),
            enableWeakerNetworkIsolation: v
              .boolean()
              .optional()
              .describe(
                "macOS only: Allow access to com.apple.trustd.agent in the sandbox. Needed for Go-based CLI tools (gh, gcloud, terraform, etc.) to verify TLS certificates when using httpProxyPort with a MITM proxy and custom CA. " +
                  "**Reduces security** \u2014 opens a potential data exfiltration vector through the trustd service. Default: false",
              ),
            allowAppleEvents: v
              .boolean()
              .optional()
              .describe(
                "macOS only: Allow sandboxed commands to send Apple Events (and look up the appleeventsd Mach service). Needed for `open`, `osascript`, and browser-based auth flows that open URLs. " +
                  "**Removes code-execution isolation** \u2014 sandboxed commands can launch other applications " +
                  "unsandboxed with no user prompt, and can script running apps (e.g. Terminal) subject to the user's per-app TCC automation consent. " +
                  "Only honored from user, managed/policy, or CLI (--settings) settings \u2014 " +
                  "project settings (.claude/settings.json and .claude/settings.local.json) are ignored. Default: false",
              ),
            excludedCommands: v.array(v.string()).optional(),
            ripgrep: v
              .object({
                command: v.string(),
                args: v.array(v.string()).optional(),
              })
              .optional()
              .describe(
                "Custom ripgrep configuration for bundled ripgrep support",
              ),
            bwrapPath: v
              .preprocess(
                (e) =>
                  typeof e === "string" && DDi.isAbsolute(e) ? e : void 0,
                v.string(),
              )
              .optional()
              .catch(void 0)
              .describe(
                "Linux/WSL only: Absolute path to the bwrap (bubblewrap) binary. Overrides auto-detection via PATH. Only honored from admin-controlled managed settings.",
              ),
            socatPath: v
              .preprocess(
                (e) =>
                  typeof e === "string" && DDi.isAbsolute(e) ? e : void 0,
                v.string(),
              )
              .optional()
              .catch(void 0)
              .describe(
                "Linux/WSL only: Absolute path to the socat binary used for the sandbox network proxy. Overrides auto-detection via PATH. Only honored from admin-controlled managed settings.",
              ),
          })
          .passthrough(),
      )));
  });
