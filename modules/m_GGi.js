// Module: ggi (lines 985191-986814)
  var ggi = S(() => {
    Vn();
    jA();
    E0m();
    ((HdE = Se(() => v.unknown())),
      (kdE = Se(() =>
        v
          .object({
            matcher: v.string().optional(),
            hookCallbackIds: v.array(v.string()),
            timeout: v.number().optional(),
          })
          .describe("Configuration for matching and routing hook callbacks."),
      )),
      (A0m = Se(() =>
        v
          .object({
            subtype: v.literal("initialize"),
            hooks: v.record(c0m(), v.array(kdE())).optional(),
            sdkMcpServers: v.array(v.string()).optional(),
            jsonSchema: v.record(v.string(), v.unknown()).optional(),
            systemPrompt: v.array(v.string()).optional(),
            appendSystemPrompt: v.string().optional(),
            planModeInstructions: v
              .string()
              .optional()
              .describe(
                "Custom workflow body for the plan-mode system reminder. Replaces the default code-implementation phases; the CLI still wraps it with the read-only enforcement preamble and the ExitPlanMode protocol footer.",
              ),
            appendSubagentSystemPrompt: v
              .string()
              .optional()
              .describe(
                "@internal Additional system prompt appended to every Task-tool subagent (and propagated to nested subagents). Gated by CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT.",
              ),
            toolAliases: v
              .record(v.string(), v.string())
              .optional()
              .describe(
                "Map of tool-name aliases applied before name resolution. When the model emits a tool_use whose name is a key in this map, the tool execution path resolves the mapped name instead. Single-hop (no chains). See Options.toolAliases.",
              ),
            excludeDynamicSections: v
              .boolean()
              .optional()
              .describe(
                "When true, omit per-user dynamic sections (working directory, auto-memory path) from the cached system prompt and re-inject them as the first user message. Lets cross-user prompt caching hit on a static system prompt prefix. Tradeoff: the model sees this context slightly later in the prompt, so steering on the working directory and memory location is marginally less authoritative. Has no effect when a custom (non-preset) system prompt is in use.",
              ),
            agents: v.record(v.string(), m0m()).optional(),
            title: v
              .string()
              .optional()
              .describe(
                "Custom session title. When provided, the session uses this title and skips automatic title generation. Has no effect on the persisted title when resuming an existing session.",
              ),
            skills: v
              .array(v.string())
              .optional()
              .describe(
                'When provided, only skills whose names match an entry are loaded into the main session system prompt, matching the exact canonical name (e.g. "my-plugin:my-skill") or a ":name" suffix of it. Display names and aliases do not match. Omit to load every discovered skill. Applies to the main session only; subagents use AgentDefinition.skills, which additionally resolves display names and aliases.',
              ),
            webSearchIsolationExemptMcpServers: v
              .array(v.string())
              .optional()
              .describe(
                "@internal Additional MCP server names exempt from the web search / connector isolation latch. Unioned with the built-in infra-server list.",
              ),
            promptSuggestions: v.boolean().optional(),
            agentProgressSummaries: v.boolean().optional(),
            forwardSubagentText: v.boolean().optional(),
            supportedDialogKinds: v
              .array(v.string())
              .optional()
              .describe(
                "Dialog kinds (request_user_dialog `dialog_kind` values) this consumer's onUserDialog can actually render. The CLI treats ABSENCE as 'cannot display' and fails closed: without the kind declared here, a dialog-gated flow degrades to its no-dialog behavior (for 'refusal_fallback_prompt', the classic refusal error) instead of parking a dialog the consumer may mishandle. First-attached-client-wins on multi-client sessions; later initializes do not change it.",
              ),
          })
          .describe(
            "Initializes the SDK session with hooks, MCP servers, and agent configuration.",
          ),
      )),
      (IdE = Se(() =>
        v
          .object({
            minTimeBeforeFeedbackMs: v.number(),
            minTimeBetweenFeedbackMs: v.number(),
            minTimeBetweenGlobalFeedbackMs: v.number(),
            minUserTurnsBeforeFeedback: v.number(),
            minUserTurnsBetweenFeedback: v.number(),
            hideThanksAfterMs: v.number(),
            onForModels: v.array(v.string()),
            probability: v.number(),
            lastSurveyShownTime: v.number().nullable(),
          })
          .describe(
            "@internal Session feedback-survey configuration for host UIs (VS Code webview, Claude Desktop) that run the survey trigger logic themselves: the same GrowthBook-driven pacing/probability values the terminal survey uses, plus the cross-surface last-shown time the host can't read. Survey responses are proxied back as tengu_feedback_survey_event log_event notifications.",
          ),
      )),
      (kGR = Se(() =>
        v
          .object({
            commands: v.array(ZOn()),
            agents: v.array(f_l()),
            output_style: v.string(),
            available_output_styles: v.array(v.string()),
            models: v.array(dgi()),
            unavailable_models: v
              .array(dgi())
              .optional()
              .describe(
                "@internal Models the account can see but not select (disabled: true, reason folded into description \u2014 e.g. a model the org's Zero Data Retention setting excludes). Disjoint from `models`, which stays selectable-only so consumers without disabled rendering are unaffected. Populated only for allowlisted 1P hosts that render these rows (currently the VS Code extension \u2014 UNAVAILABLE_MODELS_HOST_ENTRYPOINTS); empty for every other consumer. Omitted when empty.",
              ),
            account: f0m(),
            current_model: v
              .string()
              .optional()
              .describe(
                "@internal The CLI's active model at connect time. Remote Control clients (web/mobile) sync their model dropdown TO this value on connect instead of sending set_model with their own default \u2014 without it, connecting from a phone silently switches the terminal's model (CC-2659).",
              ),
            current_permission_mode: ket()
              .optional()
              .describe(
                "@internal The CLI's active permission mode at connect time, for the same connect-time sync as current_model.",
              ),
            pid: v
              .number()
              .optional()
              .describe("@internal CLI process PID for tmux socket isolation"),
            fast_mode_state: e1n().optional(),
            fast_mode_disabled_reason: t1n().optional(),
            feedback_survey_config: IdE()
              .optional()
              .describe(
                "@internal Present only when the feedback-survey surface is enabled for this host (GrowthBook gate, privacy level, and org policy all allow it). Absent means the host must not show the survey.",
              ),
            remote_control_auto_enable: v
              .boolean()
              .optional()
              .describe(
                "@internal Whether the CLI resolver says Remote Control should auto-enable at session start (explicit setting \u2192 policy default \u2192 GB rollout), so IDE hosts can mirror TUI behavior. Absent (older CLI) \u2192 treat as false.",
              ),
            remote_control_auto_on_by_default: v
              .boolean()
              .optional()
              .describe(
                "@internal True when remote_control_auto_enable is true because of the org/GB default rather than an explicit remoteControlAtStartup setting \u2014 mirrors replBridgeAutoOnByDefault so IDE hosts can render the same disclosure notice.",
              ),
            ide_rc_auto_enable_gate: v
              .boolean()
              .optional()
              .describe(
                "@internal IDE-side rollout kill-switch for RC auto-enable (tengu_ide_rc_auto_enable), independent of remote_control_auto_enable. Carried on the init response (not experimentGates) because the host reads it at init time, before the first-prompt-triggered gate refresh. Absent (older CLI) \u2192 treat as false.",
              ),
          })
          .describe(
            "Response from session initialization with available commands, models, and account info.",
          ),
      )),
      (w0m = Se(() =>
        v
          .object({
            subtype: v.literal("interrupt"),
            reason: v
              .string()
              .optional()
              .describe(
                "@internal Why the turn was interrupted, forwarded to the turn's AbortSignal.reason. Tool implementations branch on it to distinguish a user-driven cancel (which suppresses error output) from other aborts. Known values: `interrupt` (user Esc/Ctrl+C), `user-cancel`, `remote-cancel`, `consumer-error`, `workflow-abort`, `stalled`, `recovery-timeout`. Open set \u2014 consumers must treat unknown values as a generic abort.",
              ),
            cancel_queued: v
              .boolean()
              .optional()
              .describe(
                "When true, the interrupt also cancels every uuid-stamped main-thread command still in the queue or already dequeued for the imminent turn but not yet reachable by the abort (the first-command prewait window) \u2014 the same set the response would otherwise list under `still_queued`. Each is closed with a terminal 'cancelled' lifecycle and listed on the response's `cancelled` field. `still_queued` is always empty. (The isFoldInFlight guard cancel_async_message uses does not apply here: this request also aborts the running turn, so a fold-in-flight uuid is never delivered and is swept with the rest. A fold-in-flight uuid's queued_command attachment may already appear in the aborted turn's transcript if the abort landed after the fold's attachment yield \u2014 pre-existing leave-queued semantics; it never runs as its own turn.) Uuid-less commands (task notifications) still in the queue are also dequeued but cannot be listed; a uuid-less command already in the prewait window is unreachable by either leg and still runs. When false or absent, queued commands survive the interrupt and are listed under `still_queued` \u2014 the interrupt_receipt_v1 contract is unchanged. A Stop-means-stop-everything client (a remote UI's Stop button) sets this true so one round-trip halts the session; a wrapper that wants per-uuid control leaves it false and follows up with cancel_async_message. Advertised by the `interrupt_cancel_queued_v1` capability on system/init; older CLIs ignore the field and behave as if false.",
              ),
          })
          .describe("Interrupts the currently running conversation turn."),
      )),
      (IGR = Se(() =>
        v
          .object({
            still_queued: v
              .array(v.string())
              .describe(
                'Uuids of async user messages that survive this interrupt: commands still in the queue, plus any batch already dequeued for the imminent turn but not yet reachable by the abort. These WILL run unless cancelled first (or unless the request set cancel_queued:true, in which case this list is always empty \u2014 every uuid-stamped survivor is removed, emitted a terminal `cancelled` synchronously, and listed under `cancelled` instead). Cancellation granularity: uuids still in the queue are individually cancellable via cancel_async_message; once a batch is dequeued and coalesced into one turn, cancelling a NON-representative member uuid is a no-op (its content still runs), while cancelling the batch-representative uuid drops the WHOLE coalesced batch \u2014 in both cases the cancel response reports cancelled:false because the message was no longer in the queue. Coverage caveats: only uuid-STAMPED messages appear (a message enqueued without a uuid still runs but is never listed, so [] does not mean "nothing will run"); only main-thread messages are listed (subagent-addressed messages are out of scope); and the list may include internally-enqueued uuids the client never sent (cron triggers, auto-resume continuations) \u2014 ignore unknown uuids rather than treating them as an error. Ordering: on a clean interrupt this receipt is written before the interrupted turn result; a turn that crashes during interrupt handling emits its error result on a direct-write path that may precede the receipt. Snapshot is taken synchronously with abort processing \u2014 probing the queue after the interrupted result instead always loses the race against the drain loop, which starts the next queued turn immediately.',
              ),
            cancelled: v
              .array(v.string())
              .optional()
              .describe(
                "Present only when the request set cancel_queued:true \u2014 uuids of main-thread commands cancelled by this interrupt: every survivor that would otherwise have appeared under `still_queued`, including any uuid that was mid-fold at the interrupt instant (this request also aborts, so the fold never delivers it). Each listed uuid has been removed (queue-resident) or marked cancel-pending (the first-command prewait window, closed by the drain loop's backstop) and emits a terminal 'cancelled' lifecycle synchronously at the first such interrupt (a repeat interrupt over the same parked batch re-lists the uuid idempotently without re-emitting); none will run. Same coverage caveats as `still_queued` (uuid-stamped main-thread only; internally-enqueued uuids may appear). Advertised by the `interrupt_cancel_queued_v1` capability.",
              ),
          })
          .describe(
            "Result of an interrupt operation. Advertised by the interrupt_receipt_v1 capability on system/init; older CLIs send an empty success response with no still_queued field.",
          ),
      )),
      (T0m = Se(() =>
        v
          .object({
            subtype: v.literal("can_use_tool"),
            tool_name: v.string(),
            input: v.record(v.string(), v.unknown()),
            permission_suggestions: v.array(QOn()).optional(),
            blocked_path: v.string().optional(),
            decision_reason: v
              .string()
              .optional()
              .describe(
                `Human-readable reason the ask escalated, for the consent line of the host's dialog. For decision_reason_type "subcommandResults" (compound bash), this is the NESTED safety check's warning text \u2014 the wrapper itself has no text \u2014 preferring a check that requires manual approval (classifier_approvable false); treat it with the same display/policy care as a "safetyCheck" reason. May carry ANSI escapes; sanitize before rendering.`,
              ),
            decision_reason_type: v
              .enum(qMi)
              .optional()
              .describe(
                `Structured discriminator for why auto-mode escalated. Lets SDK hosts make policy (e.g. auto-deny safetyCheck) without parsing decision_reason text. For compound bash commands this is "subcommandResults" even when a safetyCheck is nested inside \u2014 check classifier_approvable for that case, and see decision_reason: for this variant it carries the nested safety check's warning text.`,
              ),
            classifier_approvable: v
              .boolean()
              .optional()
              .describe(
                "Set when a safetyCheck is present anywhere in the decision reason (including nested inside subcommandResults for compound bash). false = at least one safety check requires manual approval (e.g. Windows path bypass, dangerous rm); true = all safety checks MAY be classifier-approved (e.g. sensitive-file paths). Absent when no safetyCheck is involved.",
              ),
            suppress_always_allow_rule: v
              .boolean()
              .optional()
              .describe(
                `True when the dialog must not offer the persistent "don't ask again" row for this ask: accepting it would write a whole-tool allow rule broader than the ask's own verb (PermissionAskDecision.suppressAlwaysAllowRule). Hosts rendering approve options should omit any persistent-rule affordance when set.`,
              ),
            matched_ask_rule: v
              .object({
                source: v.string(),
                tool_name: v.string(),
                rule_content: v.string().optional(),
              })
              .optional()
              .describe(
                "Set when a user-configured ask RULE (permissions.ask) forced this prompt but the ask carries the tool's own decision_reason \u2014 the ask-rule substitution keeps the richer tool-minted ask, so the rule rides here instead of decision_reason_type 'rule'. Hosts making policy on decision_reason_type (e.g. auto-deny safetyCheck) or running host-side auto-approval should treat asks carrying this field as rule-forced: the user's stated intent is a human prompt. Values are producer-authored but render-unsafe like decision_reason; sanitize before display.",
              ),
            title: v.string().optional(),
            display_name: v.string().optional(),
            tool_use_id: v.string(),
            agent_id: v.string().optional(),
            description: v.string().optional(),
            requires_user_interaction: v
              .boolean()
              .optional()
              .describe(
                "True when one-tap Approve/Deny must not be offered: the tool's approval card IS the user-interaction surface (Tool.requiresUserInteraction() \u2014 the user responds on the card itself), OR the pending ask is localDisplayOnly (its consent disclosure cannot ride this wire and only the local dialog renders it). Either way the user has to open the session to answer.",
              ),
          })
          .describe("Requests permission to use a tool with the given input."),
      )),
      (C0m = Se(() =>
        v
          .object({
            subtype: v.literal("set_permission_mode"),
            mode: ket(),
            ultraplan: v
              .boolean()
              .optional()
              .describe("@internal CCR ultraplan session marker."),
          })
          .describe("Sets the permission mode for tool execution handling."),
      )),
      (x0m = Se(() =>
        v
          .object({
            subtype: v.literal("set_model"),
            model: v
              .string()
              .nullable()
              .optional()
              .describe(
                "Model to switch to. Omitted, null, or 'default' resets to the session default model.",
              ),
            system_prompt: v
              .string()
              .min(1)
              .optional()
              .describe(
                "@internal Replaces the custom system prompt (the --system-prompt / initialize systemPrompt slot) from the next turn on. Applied only when the model request is accepted; must be non-empty (there is no revert-to-built-in form); re-send the current model for a prompt-only update. The CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE per-turn read, where configured, still wins. Honored on the subprocess stdin transport only \u2014 other transports and older builds ack success without applying it.",
              ),
          })
          .describe("Sets the model to use for subsequent conversation turns."),
      )),
      (H0m = Se(() =>
        v
          .object({
            subtype: v.literal("set_max_thinking_tokens"),
            max_thinking_tokens: v.number().int().nullable().optional(),
            thinking_display: v
              .enum(["summarized", "omitted"])
              .nullable()
              .optional(),
          })
          .describe(
            "Sets the maximum number of thinking tokens for extended thinking. When max_thinking_tokens is omitted or null, thinking resets to the session default: any mid-session budget override is cleared (back to the spawn-time budget, if one was set), and thinking stays off for sessions that have it disabled. thinking_display optionally sets the thinking display mode for the rest of the session: a value replaces the session display mode, null clears it back to the API default, and when omitted the display mode from session start (--thinking-display) is kept.",
          ),
      )),
      (k0m = Se(() =>
        v
          .object({ subtype: v.literal("rename_session"), title: v.string() })
          .describe("Sets the user-facing title for the current session."),
      )),
      (I0m = Se(() =>
        v
          .object({ subtype: v.literal("set_color"), color: v.string() })
          .describe(
            'Sets the session accent color. Accepts an agent color name or "default" to reset.',
          ),
      )),
      (R0m = Se(() =>
        v
          .object({ subtype: v.literal("mcp_status") })
          .describe(
            "Requests the current status of all MCP server connections.",
          ),
      )),
      (RGR = Se(() =>
        v
          .object({ mcpServers: v.array(p_l()) })
          .describe(
            "Response containing the current status of all MCP server connections.",
          ),
      )),
      (D0m = Se(() =>
        v
          .object({ subtype: v.literal("file_suggestions"), query: v.string() })
          .describe(
            "Requests at-mention file autocomplete suggestions for a partial path prefix. Returns the same fuzzy-matched results the TUI shows.",
          ),
      )),
      (DGR = Se(() =>
        v
          .object({
            suggestions: v.array(
              v.object({ path: v.string(), score: v.number().optional() }),
            ),
          })
          .describe(
            "Response containing fuzzy-ranked file path suggestions (capped at the same limit as the TUI typeahead).",
          ),
      )),
      (P0m = Se(() =>
        v
          .object({ subtype: v.literal("get_context_usage") })
          .describe(
            "Requests a breakdown of current context window usage by category.",
          ),
      )),
      (M0m = Se(() =>
        v
          .object({ subtype: v.literal("get_session_cost") })
          .describe(
            "Requests the formatted session cost summary (the same text /usage prints in non-interactive mode). Used by the thin-client /usage dialog to show the remote container cost instead of the local $0.00.",
          ),
      )),
      (PGR = Se(() =>
        v
          .object({ text: v.string() })
          .describe("Formatted session cost text, ANSI-stripped."),
      )),
      (L0m = Se(() =>
        v
          .object({ subtype: v.literal("list_models") })
          .describe(
            "Requests the worker's selectable model catalog. Fulfills the caps.modelCatalog capability: in a remote thin-client session the worker's provider, settings cascade, and enforcement policy decide which models the session can run, so the thin client must ask rather than read its own getModelOptions().",
          ),
      )),
      (MGR = Se(() =>
        v
          .object({ models: v.array(dgi()) })
          .describe(
            "The worker's model options serialized via toModelInfos() \u2014 the same ModelInfo shape the initialize response carries. Includes disabled rows (visible but not selectable) so the thin-client picker renders them greyed-out like the local one.",
          ),
      )),
      (O0m = Se(() =>
        v
          .object({ subtype: v.literal("get_usage") })
          .describe(
            "Requests the structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization when available. Experimental \u2014 the response shape may change.",
          ),
      )),
      (r1n = Se(() =>
        v.object({
          utilization: v
            .number()
            .nullable()
            .describe("Percentage of the window used, 0-100."),
          resets_at: v
            .string()
            .nullable()
            .describe("ISO 8601 timestamp when the window resets."),
        }),
      )),
      (pgi = Se(() =>
        v.object({
          name: v.string(),
          pct: v
            .number()
            .describe(
              "Share of the weighted local usage attributed to this item, 0-100.",
            ),
        }),
      )),
      (v0m = Se(() =>
        v.object({
          request_count: v
            .number()
            .describe(
              "API requests found in local transcripts for this window.",
            ),
          session_count: v
            .number()
            .describe("Distinct sessions observed in this window."),
          behaviors: v
            .array(
              v.object({
                key: v.enum([
                  "cache_miss",
                  "long_context",
                  "subagent_heavy",
                  "high_parallel",
                  "cron",
                ]),
                pct: v
                  .number()
                  .describe(
                    "Share of the weighted local usage attributed to this behavior, 0-100.",
                  ),
                count: v
                  .number()
                  .describe("Requests in this window exhibiting the behavior."),
              }),
            )
            .describe(
              "Behavioral characteristics of local usage. Categories overlap \u2014 this is not a partition, so percentages do not sum to 100.",
            ),
          agents: v.array(pgi()),
          skills: v.array(pgi()),
          plugins: v.array(pgi()),
          mcp_servers: v.array(pgi()),
        }),
      )),
      (LGR = Se(() =>
        v
          .object({
            session: v
              .object({
                total_cost_usd: v.number(),
                total_api_duration_ms: v.number().int(),
                total_duration_ms: v.number().int(),
                total_lines_added: v.number().int(),
                total_lines_removed: v.number().int(),
                model_usage: v.record(v.string(), lgi()),
              })
              .describe("Cost and usage accumulated by the current session."),
            subscription_type: v
              .string()
              .nullable()
              .describe(
                "Claude.ai subscription type ('pro', 'max', 'team', 'enterprise') or null for API key / 3P provider sessions.",
              ),
            rate_limits_available: v
              .boolean()
              .describe(
                "False when plan rate limits do not apply (API key, Bedrock, Vertex, or missing profile scope) \u2014 rate_limits will be null.",
              ),
            rate_limits: v
              .object({
                five_hour: r1n().nullable().optional(),
                seven_day: r1n().nullable().optional(),
                seven_day_oauth_apps: r1n().nullable().optional(),
                seven_day_opus: r1n().nullable().optional(),
                seven_day_sonnet: r1n().nullable().optional(),
                model_scoped: v
                  .array(
                    v.object({
                      display_name: v
                        .string()
                        .describe(
                          "Server-supplied label for the model bucket (e.g. 'Fable').",
                        ),
                      utilization: v.number().nullable(),
                      resets_at: v.string().nullable(),
                    }),
                  )
                  .optional()
                  .describe(
                    "Per-model weekly windows from the server limits[] array, filtered by the overage-included-models allowlist. Additive \u2014 present only when the server emits them.",
                  ),
                extra_usage: v
                  .object({
                    is_enabled: v.boolean(),
                    monthly_limit: v.number().nullable(),
                    used_credits: v.number().nullable(),
                    utilization: v.number().nullable(),
                    currency: v.string().nullable().optional(),
                  })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .describe(
                "Plan rate-limit utilization windows from the claude.ai usage endpoint, or null when unavailable.",
              ),
            behaviors: v
              .object({
                day: v0m().describe("Last 24 hours."),
                week: v0m().describe("Last 7 days."),
              })
              .nullable()
              .describe(
                "What's contributing to limits usage, from a scan of local transcripts on this machine (the same data the /usage dialog renders): behavioral characteristics plus per-skill/agent/plugin/MCP-server attribution. Approximate, excludes other devices and claude.ai. Null for non-claude.ai-subscriber sessions (mirrors the dialog) or when the scan fails.",
              ),
          })
          .describe(
            "Structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization. Experimental \u2014 the shape may change.",
          ),
      )),
      (N0m = Se(() =>
        v
          .object({ subtype: v.literal("get_binary_version") })
          .describe(
            "Requests the responder's CLI binary version. Used by /version in --remote mode so the thin client can show both its own and the remote container's version.",
          ),
      )),
      (OGR = Se(() =>
        v.object({ version: v.string(), buildTime: v.string().optional() }),
      )),
      (RdE = Se(() =>
        v.object({
          name: v.string(),
          tokens: v.number().int(),
          color: v.string(),
          isDeferred: v.boolean().optional(),
        }),
      )),
      (DdE = Se(() =>
        v.object({
          color: v.string(),
          isFilled: v.boolean(),
          categoryName: v.string(),
          tokens: v.number().int(),
          percentage: v.number(),
          squareFullness: v.number(),
        }),
      )),
      (NGR = Se(() =>
        v
          .object({
            categories: v.array(RdE()),
            totalTokens: v.number().int(),
            maxTokens: v.number().int(),
            rawMaxTokens: v.number().int(),
            percentage: v.number(),
            gridRows: v.array(v.array(DdE())),
            model: v.string(),
            memoryFiles: v.array(
              v.object({
                path: v.string(),
                type: v.string(),
                tokens: v.number().int(),
              }),
            ),
            mcpTools: v.array(
              v.object({
                name: v.string(),
                serverName: v.string(),
                tokens: v.number().int(),
                isLoaded: v.boolean().optional(),
              }),
            ),
            deferredBuiltinTools: v
              .array(
                v.object({
                  name: v.string(),
                  tokens: v.number().int(),
                  isLoaded: v.boolean(),
                }),
              )
              .optional(),
            systemTools: v
              .array(v.object({ name: v.string(), tokens: v.number().int() }))
              .optional(),
            systemPromptSections: v
              .array(v.object({ name: v.string(), tokens: v.number().int() }))
              .optional(),
            agents: v.array(
              v.object({
                agentType: v.string(),
                source: v.string(),
                tokens: v.number().int(),
              }),
            ),
            slashCommands: v
              .object({
                totalCommands: v.number().int(),
                includedCommands: v.number().int(),
                tokens: v.number().int(),
              })
              .optional(),
            skills: v
              .object({
                totalSkills: v.number().int(),
                includedSkills: v.number().int(),
                tokens: v.number().int(),
                skillFrontmatter: v.array(
                  v.object({
                    name: v.string(),
                    source: v.string(),
                    tokens: v.number().int(),
                  }),
                ),
              })
              .optional(),
            autoCompactThreshold: v.number().int().optional(),
            isAutoCompactEnabled: v.boolean(),
            messageBreakdown: v
              .object({
                toolCallTokens: v.number().int(),
                toolResultTokens: v.number().int(),
                attachmentTokens: v.number().int(),
                assistantMessageTokens: v.number().int(),
                userMessageTokens: v.number().int(),
                redirectedContextTokens: v.number().int(),
                unattributedTokens: v.number().int(),
                toolCallsByType: v.array(
                  v.object({
                    name: v.string(),
                    callTokens: v.number().int(),
                    resultTokens: v.number().int(),
                  }),
                ),
                attachmentsByType: v.array(
                  v.object({ name: v.string(), tokens: v.number().int() }),
                ),
              })
              .optional(),
            apiUsage: v
              .object({
                input_tokens: v.number().int(),
                output_tokens: v.number().int(),
                cache_creation_input_tokens: v.number().int(),
                cache_read_input_tokens: v.number().int(),
              })
              .nullable(),
          })
          .describe(
            "Breakdown of current context window usage by category (system prompt, tools, messages, etc.).",
          ),
      )),
      (fgi = Se(() =>
        v
          .object({
            subtype: v.literal("mcp_call"),
            tool: v
              .string()
              .describe(
                "Fully-qualified MCP tool name, e.g. mcp__server__tool_name. Plugin-hosted servers are ordinary MCP servers here \u2014 e.g. mcp__plugin_documents_docs__doc_export (server names are normalized: non-[a-zA-Z0-9_-] becomes _).",
              ),
            arguments: v
              .record(v.string(), v.unknown())
              .optional()
              .describe(
                `Tool arguments. When input_files/output_files are declared, any string VALUE that exactly equals "{{in:NAME}}" or "{{out:NAME}}" (whole string, not a substring) is replaced with the worker-chosen absolute path of that named staged file before the call; a token naming no declared file fails the request with staging error_code=tool_error, and every declared output's "{{out:NAME}}" token must appear in arguments (the substituted path is the only way the tool learns where to write, so an unreferenced output fails the request before the tool runs). With no files declared \u2014 including expires_at/timeout_ms-only staged calls \u2014 passed through unchanged.`,
              ),
            expires_at: v
              .string()
              .optional()
              .describe(
                "RFC3339 deadline, REQUIRED when output_files are declared (a stale buffered drain must not overwrite rows written since). Sending expires_at routes the call through the staging engine, same as timeout_ms \u2014 the response gains a staging result. UNDELIVERED requests buffer durably and drain after reattach; a drain past this instant is dropped with staging error_code=expired instead of executing stale. Once delivered to a live worker the request is acked immediately and never redelivered \u2014 a worker killed mid-run surfaces as a missing response (apply your own deadline), not a later drain. An unparseable value is treated as already expired (fail closed).",
              ),
            timeout_ms: v
              .number()
              .optional()
              .describe(
                "Tool-execution timeout (staging and collection have their own transport timeouts). Clamped to [1000, 600000]; default 120000. Sending timeout_ms routes the call through the staging engine \u2014 so it is always enforced when present and the response carries a staging result; omit it for a plain call. Staged calls are POSIX-worker-only: on a Windows worker any staged-field call fails with a typed staging refusal.",
              ),
            input_files: v
              .array(
                v.object({
                  name: v
                    .string()
                    .regex(/^[A-Za-z0-9_-]{1,64}$/)
                    .describe(
                      'Handle referenced from arguments as "{{in:NAME}}". Unique within the request.',
                    ),
                  lane_path: v
                    .string()
                    .describe(
                      "Synced-file lane row to stage, e.g. /working/.cowork/originals/a.docx. A missing row fails with staging error_code=input_missing; the etag actually staged is echoed back in staging.inputs_used.",
                    ),
                }),
              )
              .max(64)
              .optional()
              .describe(
                "Declaring input_files or output_files makes this a STAGED call: rows are fetched from the synced-file lane into a private per-request temp dir the WORKER chooses (random, per-UID \u2014 the caller never sees or computes paths; it references files via tokens in arguments), the tool runs, and declared outputs are written back as lane rows (durable-at-ack PUT). The response then carries a `staging` result the caller switches on.",
              ),
            output_files: v
              .array(
                v.object({
                  name: v
                    .string()
                    .regex(/^[A-Za-z0-9_-]{1,64}$/)
                    .describe(
                      'Handle referenced from arguments as "{{out:NAME}}" \u2014 the tool is told (via the substituted path) where to write; the worker collects from exactly that path. Unique within the request.',
                    ),
                  lane_path: v
                    .string()
                    .describe(
                      "Synced-file lane row to write, e.g. /working/report.cd. Unique within the request (two outputs on one row would self-conflict under CAS). Outputs over the 25 MiB lane cap fail with staging error_code=output_too_large.",
                    ),
                  if_match: v
                    .string()
                    .min(1)
                    .optional()
                    .describe(
                      "Opaque lane etag the output row must still carry for the write to land (CAS). Omitted = unconditional last-writer-wins (an empty string is rejected, not treated as unconditional). A row that moved since fails that output with staging error_code=output_conflict and the requested bytes are not written. Redelivery of a completed CAS write re-runs and conflicts with its own prior write \u2014 treat output_conflict on a retry as possible-prior-success and reconcile by etag.",
                    ),
                }),
              )
              .max(64)
              .optional(),
          })
          .describe(
            "Invokes an MCP tool via the subprocess MCP client without a model turn. No permission check (control channel is trusted, same as other " +
              'subtypes). SDK-type MCP servers (config.type === "sdk") are rejected \u2014 ' +
              "they are caller-provided, so the caller can invoke them directly without the subprocess round-trip. Result content passes through the same processing as model-turn MCP calls. Session expiry is not retried automatically; callers can mcp_reconnect and retry. UrlElicitationRequired (-32042) tries Elicitation hooks; if no hook " +
              "resolves, the call errors with the URL in the message \u2014 open it " +
              "out-of-band, then retry mcp_call. " +
              'STAGED calls (input_files/output_files declared) additionally stage lane rows in/out around the call \u2014 see the input_files describe. Staged failures come back as a success-subtype response whose staging field carries a typed error_code; subtype:error is emitted only when the call could not be attempted at all (server not connected, kill switch, dispatch failure) and means nothing ran. A target server that is not yet connected is brought up on demand: dispatch runs the deferred plugin/MCP startup resolution (the work a first model turn would have done) and waits up to 30s \u2014 shortened by expires_at when that is sooner \u2014 for the server to connect before answering "MCP server not connected", so a dispatch that races plugin startup (e.g. after an idle-wake reattach) succeeds instead of failing until a turn runs. Standard RPC semantics: a redelivered request_id supersedes the in-flight run (it is aborted and its response suppressed \u2014 exactly one response per request_id); conversion is idempotent, so re-running is safe. Cancellable via control_cancel_request.',
          ),
      )),
      ($GR = Se(() =>
        v
          .object({
            content: v.unknown(),
            structuredContent: v.record(v.string(), v.unknown()).optional(),
            _meta: v.record(v.string(), v.unknown()).optional(),
            staging: v
              .union([
                v.object({
                  ok: v.literal(!0),
                  outputs: v.array(
                    v.object({
                      lane_path: v.string(),
                      etag: v
                        .string()
                        .describe(
                          "Opaque lane etag returned by the durable-at-ack PUT.",
                        ),
                      bytes: v.number().int(),
                    }),
                  ),
                  inputs_used: v
                    .array(
                      v.object({ lane_path: v.string(), etag: v.string() }),
                    )
                    .describe("Lane etag each staged input actually carried."),
                }),
                v.object({
                  ok: v.literal(!1),
                  error_code: v.enum([
                    "expired",
                    "input_missing",
                    "output_too_large",
                    "output_conflict",
                    "timeout",
                    "tool_error",
                  ]),
                  detail: v
                    .string()
                    .describe(
                      "Plain-text detail for the requesting client. May carry user-document content (tool output, lane paths) \u2014 surface it to the user where helpful, but do not log it verbatim or feed it to analytics.",
                    ),
                  retryable: v
                    .boolean()
                    .optional()
                    .describe(
                      "Present when the failure class is known (lane transport verdict, CAS rejection): true = safe to re-drive with the same request_id, false = deterministic. Absent = unknown; treat as non-retryable and switch on error_code.",
                    ),
                }),
              ])
              .optional()
              .describe(
                "Present exactly when the request used any staged-call field (input_files, output_files, expires_at, timeout_ms) \u2014 such calls run through the staging engine even with no files, so expires_at is always honored. The error_code set is a stable cross-repo contract \u2014 extend it, never rename or repurpose members. A failure makes no guarantee about partial effects: earlier outputs may already have landed; retry with the same request_id is safe for outputs without if_match (unconditional PUTs re-land the same bytes), while if_match outputs surface output_conflict against their own prior write \u2014 reconcile by etag. On staged failures the tool may never have run, so content/structuredContent may be absent.",
              ),
          })
          .describe(
            "MCP tool result \u2014 the content array, structuredContent, and _meta " +
              "from CallToolResult. Content passes through the same processing as model-turn MCP calls (large results may be truncated or redirected to a file). Caller interprets. Staged calls additionally carry a `staging` result.",
          ),
      )),
      ($0m = Se(() =>
        v
          .object({
            subtype: v.literal("rewind_files"),
            user_message_id: v.string(),
            dry_run: v.boolean().optional(),
          })
          .describe("Rewinds file changes made since a specific user message."),
      )),
      (FGR = Se(() =>
        v
          .object({
            canRewind: v.boolean(),
            error: v.string().optional(),
            filesChanged: v.array(v.string()).optional(),
            insertions: v.number().int().optional(),
            deletions: v.number().int().optional(),
            skippedLinks: v.number().optional().describe(m_l),
          })
          .describe("Result of a rewindFiles operation."),
      )),
      (F0m = Se(() =>
        v
          .object({
            subtype: v.literal("cancel_async_message"),
            message_uuid: v.string(),
          })
          .describe(
            "Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution.",
          ),
      )),
      (UGR = Se(() =>
        v
          .object({ cancelled: v.boolean() })
          .describe(
            "Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued).",
          ),
      )),
      (U0m = Se(() =>
        v
          .object({
            subtype: v.literal("read_file"),
            path: v.string(),
            max_bytes: v.number().optional(),
            encoding: v
              .enum(["utf-8", "base64"])
              .optional()
              .describe(
                "How to encode the bytes in `contents`. Defaults to utf-8 (lossy for binary); pass 'base64' to read images.",
              ),
          })
          .describe(
            "Read a file from the session filesystem for the remote sidebar viewer. Path is resolved against cwd and gated by the same read-permission rules as the Read tool.",
          ),
      )),
      (BGR = Se(() =>
        v
          .object({
            contents: v.string(),
            absPath: v.string(),
            truncated: v.boolean().optional(),
            encoding: v
              .literal("base64")
              .optional()
              .describe(
                "Set when the request asked for base64. Absent means utf-8 \u2014 including when an older CLI ignored the request's encoding field.",
              ),
          })
          .describe("File contents for the remote sidebar viewer."),
      )),
      (PdE = Se(() =>
        v.object({
          oldStart: v.number().int(),
          oldLines: v.number().int(),
          newStart: v.number().int(),
          newLines: v.number().int(),
          lines: v.array(v.string()),
        }),
      )),
      (B0m = Se(() =>
        v
          .object({ subtype: v.literal("get_workspace_diff") })
          .describe(
            "Requests the workspace git diff for the thin-client /diff dialog. The worker resolves one base ref for both stats and hunks (working tree vs HEAD, falling back to branch-vs-default-merge-base when the tree is clean) and applies the standard caps (5s git timeout, 50 files, 1MB/file).",
          ),
      )),
      (jGR = Se(() =>
        v
          .object({
            diff: v
              .object({
                stats: v.object({
                  filesCount: v.number().int(),
                  linesAdded: v.number().int(),
                  linesRemoved: v.number().int(),
                }),
                perFileStats: v.array(
                  v.object({
                    path: v.string(),
                    added: v.number().int(),
                    removed: v.number().int(),
                    isBinary: v.boolean(),
                    isUntracked: v.boolean(),
                  }),
                ),
                hunks: v.array(
                  v.object({ path: v.string(), hunks: v.array(PdE()) }),
                ),
                skippedLarge: v
                  .array(v.string())
                  .describe(
                    "Paths whose diff text exceeded the per-file or aggregate size cap, so they have stats but no hunks.",
                  ),
                restricted: v
                  .array(v.string())
                  .describe(
                    "Paths whose hunk content was withheld by read-permission rules (same gate as read_file); stats remain visible.",
                  ),
                source: v.union([
                  v.object({ kind: v.literal("working-tree") }),
                  v.object({
                    kind: v.literal("branch"),
                    baseBranch: v.string(),
                    baseRef: v.string(),
                  }),
                ]),
              })
              .nullable(),
          })
          .describe(
            "@internal Workspace git diff for the thin-client /diff dialog. diff is null when the workspace is not a git repo or is in a transient git state (merge/rebase/cherry-pick). Paths in skippedLarge carry no hunks entry at all \u2014 membership alone marks them as too large. An entirely empty hunks array with non-empty perFileStats is not by itself a failure signal: it is the normal shape when all changes are untracked (stats only \u2014 git diff emits no hunks for untracked files) or every file was withheld, and can also occur when the hunks fetch transiently failed and only stats are available.",
          ),
      )),
      (j0m = Se(() =>
        v
          .object({ subtype: v.literal("get_plan") })
          .describe(
            "Read the session's current plan-mode plan. Unlike read_file, the caller does not need to know the plan file's path \u2014 the worker resolves its own plan slug. Never creates a plan slug or file.",
          ),
      )),
      (WGR = Se(() =>
        v
          .object({
            exists: v.boolean(),
            content: v
              .string()
              .optional()
              .describe("Plan markdown. Present iff exists is true."),
            path: v
              .string()
              .optional()
              .describe(
                "Absolute plan-file path on the session filesystem. Present iff exists is true.",
              ),
          })
          .describe(
            "@internal The current plan, or exists:false when none has been written.",
          ),
      )),
      (W0m = Se(() =>
        v
          .object({
            subtype: v.literal("seed_read_state"),
            path: v.string(),
            mtime: v.number(),
          })
          .describe(
            "Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read \u2014 same staleness check as the normal path.",
          ),
      )),
      (G0m = Se(() =>
        v
          .object({
            subtype: v.literal("hook_callback"),
            callback_id: v.string(),
            input: p0m(),
            tool_use_id: v.string().optional(),
          })
          .describe("Delivers a hook callback with its input data."),
      )),
      (V0m = Se(() =>
        v
          .object({
            subtype: v.literal("mcp_message"),
            server_name: v.string(),
            message: HdE(),
          })
          .describe("Sends a JSON-RPC message to a specific MCP server."),
      )),
      (q0m = Se(() =>
        v
          .object({
            subtype: v.literal("mcp_set_servers"),
            servers: v.record(v.string(), ugi()),
          })
          .describe("Replaces the set of dynamically managed MCP servers."),
      )),
      (GGR = Se(() =>
        v
          .object({
            added: v.array(v.string()),
            removed: v.array(v.string()),
            errors: v.record(v.string(), v.string()),
          })
          .describe(
            "Result of replacing the set of dynamically managed MCP servers.",
          ),
      )),
      (z0m = Se(() =>
        v
          .object({ subtype: v.literal("reload_plugins") })
          .describe(
            "Reloads plugins from disk and returns the refreshed session components.",
          ),
      )),
      (VGR = Se(() =>
        v
          .object({
            commands: v.array(ZOn()),
            agents: v.array(f_l()),
            plugins: v.array(
              v.object({
                name: v.string(),
                path: v.string(),
                source: v.string().optional(),
                version: v.string().optional().describe(__l),
              }),
            ),
            mcpServers: v.array(p_l()),
            error_count: v.number().int(),
          })
          .describe(
            "Refreshed commands, agents, plugins, and MCP server status after reload.",
          ),
      )),
      (K0m = Se(() =>
        v
          .object({ subtype: v.literal("reload_skills") })
          .describe(
            "Reloads skills from disk and returns the refreshed skill list.",
          ),
      )),
      (qGR = Se(() =>
        v
          .object({ skills: v.array(ZOn()) })
          .describe("Refreshed skill commands after reload."),
      )),
      (Y0m = Se(() =>
        v
          .object({
            subtype: v.literal("register_repo_root"),
            directory: v.string(),
            reload_claude_md: v.boolean().optional(),
            reload_plugins: v.boolean().optional(),
            reload_skills: v.boolean().optional(),
          })
          .describe(
            "Add a directory as a working-directory root and optionally reload CLAUDE.md, skills, and plugins. The directory must resolve to a strict subdirectory of cwd, or of a directory passed at launch via --add-dir / the SDK additionalDirectories option. A directory that is already a registered working directory (including a duplicate of an earlier request) is denied with an error; the registration pipeline and DirectoryAdded hooks do not re-run.",
          ),
      )),
      (X0m = Se(() =>
        v
          .object({
            subtype: v.literal("set_cwd"),
            path: v
              .string()
              .describe(
                "Target directory. Tilde-expanded and realpath-canonicalized by the CLI, exactly like an interactive /cd argument.",
              ),
            trust_accepted: v
              .boolean()
              .optional()
              .describe(
                "Host attestation that the user explicitly accepted a trust dialog for this directory. Only send true after showing one \u2014 the CLI records the directory as trusted (the same latch /cd's own prompt writes) before relocating. Requires trusted_directory.",
              ),
            trusted_directory: v
              .string()
              .optional()
              .describe(
                "Required whenever trust_accepted is true: the exact directory string from the needs_trust response being answered. This pins the attestation to the canonical path the user was shown \u2014 if the raw path canonicalizes differently by the time the re-send arrives (e.g. a symlink component changed during the dialog), nothing is latched and a fresh needs_trust carries the new canonical directory.",
              ),
          })
          .describe(
            "@internal Moves the session to a new working directory \u2014 the headless twin of /cd, for SDK hosts like Claude Desktop. Runs the same validation, Cd(...) permission rules, and relocation path as the interactive command, with the trust prompt delegated to the host via the needs_trust response arm. Rejected while a turn is in flight.",
          ),
      )),
      (zGR = Se(() =>
        v
          .discriminatedUnion("status", [
            v.object({
              status: v.literal("ok"),
              cwd: v
                .string()
                .describe(
                  "Canonical (realpath) working directory the session now runs in.",
                ),
              changed: v
                .boolean()
                .describe(
                  "False when the target already was the working directory \u2014 a successful no-op with no side effects.",
                ),
              transcript_relocated: v
                .boolean()
                .describe(
                  "True when the transcript lives in the project slot derived from cwd (the normal case, and the no-op case). False only on the documented edge where the move completed but the transcript move failed AND the rollback chdir failed \u2014 a cwd-derived resume lookup will then miss the session.",
                ),
            }),
            v.object({
              status: v.literal("needs_trust"),
              trust_root: v
                .string()
                .optional()
                .describe(
                  "Present when `directory` sits inside a git repository whose canonical root differs from it (a subdirectory or a linked worktree). Accepting trust grants that whole repository \u2014 every subdirectory and linked worktree of the root \u2014 so the trust dialog should name this root alongside `directory`. Informational only: the attestation echo still pins `trusted_directory` to `directory`. Vetted by the same visible-glyph rule as `directory`; a canonical root that fails it is omitted rather than carried.",
                ),
              directory: v
                .string()
                .describe(
                  "Canonical target directory. Nothing changed; show a trust dialog for exactly this string and, on accept, re-send with trust_accepted: true and trusted_directory echoing it verbatim. Safe to render verbatim in the dialog, by construction: every character is a visible, space-distinguishable glyph. Targets whose canonical path contains control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points are rejected (reason: unsafe_path) before this arm can carry them.",
                ),
            }),
            v.object({
              status: v.literal("rejected"),
              reason: v
                .enum([
                  "not_found",
                  "not_a_directory",
                  "blocked_by_rule",
                  "busy",
                  "unsafe_path",
                ])
                .describe(
                  "unsafe_path: the target's canonical path contains characters that do not render as visible, space-distinguishable glyphs \u2014 control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points; rejected fail-closed before the trust round-trip, and the offending path is never echoed back.",
                ),
              message: v
                .string()
                .describe("Human-readable, ANSI-free explanation."),
            }),
          ])
          .describe(
            "@internal Result of a set_cwd request. Every non-ok outcome leaves the working directory unchanged \u2014 but trust may already have been durably recorded when the request carried a valid attestation (a busy rejection or relocation failure after the latch does not unlatch it; the consent was for the directory, not the attempt). Internal failures (e.g. the transcript move failed and was rolled back) arrive as a control_response error instead.",
          ),
      )),
      (J0m = Se(() =>
        v
          .object({
            subtype: v.literal("mcp_reconnect"),
            serverName: v.string(),
          })
          .describe("Reconnects a disconnected or failed MCP server."),
      )),
      (Q0m = Se(() =>
        v
          .object({
            subtype: v.literal("mcp_toggle"),
            serverName: v.string(),
            enabled: v.boolean(),
          })
          .describe("Enables or disables an MCP server."),
      )),
      (Z0m = Se(() =>
        v
          .object({
            subtype: v.literal("set_mcp_permission_mode_override"),
            serverName: v.string(),
            mode: ket().nullable(),
          })
          .describe(
            "@internal Pin (or clear, with mode:null) an MCP server's per-tool permission-mode override. Tighten-only over this channel: only 'default', 'auto', or null are accepted (clampControlChannelOverride); any other mode is rejected without changing state. The override substitutes for the session mode at every per-tool engine decision (effectiveModeForTool) \u2014 and only when the session mode would already auto-allow \u2014 so e.g. a server can be held at 'default' or routed through the auto-mode classifier under global bypassPermissions.",
          ),
      )),
      (eCm = Se(() =>
        v
          .object({ subtype: v.literal("stop_task"), task_id: v.string() })
          .describe("Stops a running task."),
      )),
      (tCm = Se(() =>
        v
          .object({
            subtype: v.literal("background_tasks"),
            tool_use_id: v
              .string()
              .optional()
              .describe(
                "When set, backgrounds only the task whose originating tool_use block has this id. When omitted, backgrounds all foreground tasks (Ctrl+B semantics).",
              ),
          })
          .describe(
            'Backgrounds in-flight foreground tasks (Bash commands and subagents). With tool_use_id, targets the single task started by that tool_use block; without it, backgrounds all foreground tasks \u2014 the control-request equivalent of pressing Ctrl+B in the terminal. Each blocking tool call returns immediately with a "running in the background" tool_result and the turn continues; the task keeps running and emits a task_notification when it settles.',
          ),
      )),
      (rCm = Se(() =>
        v
          .object({
            subtype: v.literal("apply_flag_settings"),
            settings: v.record(v.string(), v.unknown()),
          })
          .describe(
            "Merges the provided settings into the flag settings layer, updating the active configuration.",
          ),
      )),
      (nCm = Se(() =>
        v
          .object({ subtype: v.literal("get_settings") })
          .describe(
            "Returns the effective merged settings and the raw per-source settings.",
          ),
      )),
      (KGR = Se(() =>
        v
          .object({
            effective: v.record(v.string(), v.unknown()),
            sources: v
              .array(
                v.object({
                  source: v.enum([
                    "userSettings",
                    "projectSettings",
                    "localSettings",
                    "flagSettings",
                    "policySettings",
                  ]),
                  settings: v.record(v.string(), v.unknown()),
                }),
              )
              .describe(
                "Ordered low-to-high priority \u2014 later entries override earlier ones.",
              ),
            applied: v
              .object({
                model: v.string(),
                effort: v
                  .enum(["low", "medium", "high", "xhigh", "max"])
                  .nullable(),
                advisor: v
                  .string()
                  .nullable()
                  .optional()
                  .describe(
                    "Advisor model that will be attached to API requests, after enablement, allowlist, and pairing validation. Null when none will be attached; absent on workers that predate the field.",
                  ),
                ultracode: v
                  .boolean()
                  .optional()
                  .describe(
                    "Whether ultracode (xhigh effort plus standing dynamic-workflow orchestration) is active for the session. Set per session via the `ultracode` settings key (--settings or apply_flag_settings).",
                  ),
              })
              .optional()
              .describe(
                "Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API.",
              ),
            errors: v
              .array(S0m())
              .optional()
              .describe(
                "Settings parse and validation errors. When non-empty, the listed files were skipped during the merge above \u2014 their settings are not reflected in `effective` or `sources`.",
              ),
          })
          .describe(
            "Effective merged settings plus raw per-source settings in merge order.",
          ),
      )),
      (oCm = Se(() =>
        v
          .object({
            subtype: v.literal("elicitation"),
            mcp_server_name: v.string(),
            message: v.string(),
            mode: v.enum(["form", "url"]).optional(),
            url: v.string().optional(),
            elicitation_id: v.string().optional(),
            requested_schema: v.record(v.string(), v.unknown()).optional(),
            title: v
              .string()
              .optional()
              .describe(
                "Permission-display title from the MCP server's _meta['anthropic/permissionDisplay']. Mirrors can_use_tool.title so SDK consumers can render elicitation-driven permission prompts with structured headers instead of parsing `message`.",
              ),
            display_name: v
              .string()
              .optional()
              .describe(
                "Short tool/server label from _meta['anthropic/permissionDisplay'].displayName. Mirrors can_use_tool.display_name.",
              ),
            description: v
              .string()
              .optional()
              .describe(
                "Permission-display subtitle from _meta['anthropic/permissionDisplay'].description. Mirrors can_use_tool.description.",
              ),
          })
          .describe(
            "Requests the SDK consumer to handle an MCP elicitation (user input request).",
          ),
      )),
      (iCm = Se(() =>
        v
          .object({
            action: v.enum(["accept", "decline", "cancel"]),
            content: v.record(v.string(), v.unknown()).optional(),
          })
          .describe(
            "Response from the SDK consumer for an elicitation request.",
          ),
      )),
      (sCm = Se(() =>
        v
          .object({
            subtype: v.literal("request_user_dialog"),
            dialog_kind: v
              .string()
              .describe(
                'Identifier for the dialog the host should render. Open string union \u2014 new kinds may be added without bumping the protocol; hosts must answer unrecognized kinds with {behavior: "cancelled"}.',
              ),
            payload: v
              .record(v.string(), v.unknown())
              .describe(
                "Dialog-specific data passed to the host renderer. Shape is defined per dialog_kind; the protocol transports it opaquely.",
              ),
            tool_use_id: v.string().optional(),
          })
          .describe(
            "Requests the SDK consumer to render a tool-driven blocking dialog and return the user choice. Used by tools that previously rendered Ink JSX via setToolJSX with an onDone callback.",
          ),
      )),
      (aCm = Se(() =>
        v
          .object({
            behavior: v.enum(["completed", "cancelled"]),
            result: v
              .unknown()
              .optional()
              .describe(
                "Dialog-specific result payload. Opaque to the protocol; the caller and dialog renderer agree on the shape per dialog_kind.",
              ),
          })
          .describe(
            "Response from the SDK consumer for a request_user_dialog request.",
          ),
      )),
      (lCm = Se(() =>
        v
          .object({
            subtype: v.literal("submit_feedback"),
            description: v.string(),
            surface: v
              .enum(["cli", "ccd", "ccr", "ide", "sdk", "cowork"])
              .optional()
              .describe(
                "Where the feedback flow was initiated. Stamped into the POST body and tengu_bug_report_* analytics so the triage pipeline can distinguish CCD/CCR/IDE/Cowork reports from terminal reports landing in the same claude_cli_feedback table. Defaults to 'sdk'.",
              ),
          })
          .describe(
            "@internal Submits a /feedback report (description + current session transcript + sanitized error log) to api.anthropic.com/api/claude_cli_feedback using the CLI's auth and redaction. Runs the same getFeedbackUnavailableReason() policy checks as the terminal /feedback command \u2014 when feedback is disabled (3P provider, org policy, env kill-switch) the response carries unavailable_reason instead of an error.",
          ),
      )),
      (YGR = Se(() =>
        v
          .object({
            feedback_id: v.string().nullable(),
            unavailable_reason: v
              .string()
              .optional()
              .describe(
                "Human-readable reason /feedback is disabled in this session (3P provider, org policy, env var). When set, no submission was attempted.",
              ),
            is_zdr_org: v.boolean().optional(),
            failure_reason: v.string().optional(),
            status_code: v.number().int().optional(),
            ccshare_url: v
              .string()
              .optional()
              .describe(
                "Internal share URL for the conversation. Only set in internal builds when the upload succeeded; absent otherwise.",
              ),
          })
          .describe(
            "@internal Result of a submit_feedback request. feedback_id is set on success; otherwise one of unavailable_reason / failure_reason explains why.",
          ),
      )),
      (cCm = Se(() =>
        v
          .object({ subtype: v.literal("oauth_token_refresh") })
          .describe(
            "@internal Request from the CLI subprocess to the SDK host for a fresh OAuth access token after a 401 with no local refresh token.",
          ),
      )),
      (uCm = Se(() =>
        v
          .object({ accessToken: v.string().nullable() })
          .describe(
            "@internal Fresh OAuth access token returned by the SDK host getOAuthToken callback, or null when the host has no token available.",
          ),
      )),
      (dCm = Se(() =>
        v
          .object({ subtype: v.literal("host_auth_token_refresh") })
          .describe(
            "@internal Request from the CLI subprocess to the SDK host for a fresh provider auth token after a 401 when the host owns the credential (Cowork 3P).",
          ),
      )),
      (pCm = Se(() =>
        v
          .object({ authToken: v.string().nullable() })
          .describe(
            "@internal Fresh provider auth token returned by the SDK host getHostAuthToken callback, or null when the host has no token available.",
          ),
      )),
      (mgi = Se(() =>
        v
          .object({
            subtype: v.literal("message_rated"),
            messageUuid: v
              .string()
              .describe("UUID of the assistant message being rated."),
            sentiment: v
              .enum(["positive", "negative"])
              .describe(
                "User rating: positive (thumbs up) or negative (thumbs down).",
              ),
            surface: v
              .enum(["tool_use", "assistant_text"])
              .optional()
              .describe(
                "Which in-conversation surface the rating came from. If omitted, logged as tool_use.",
              ),
            cleared: v
              .boolean()
              .optional()
              .describe(
                "True when the caller is un-rating a message (clicking the same control a second time).",
              ),
          })
          .describe(
            "@internal Records a per-message thumbs up/down rating. Logs tengu_message_rated with the same shape as the in-conversation rating controls so Desktop / IDE callers can surface their own native thumbs UI.",
          ),
      )),
      (XGR = Se(() =>
        v.object({}).describe("@internal Empty response for message_rated."),
      )),
      (JGR = Se(() =>
        v
          .union([T0m(), G0m(), V0m(), cCm(), dCm(), oCm(), sCm()])
          .describe(
            "Control requests the agent loop originates and needs a reply to \u2014 the loop\u2192client RPC slice of SDKControlRequestInner. The remaining members are client\u2192loop commands (set/get/mcp/auth/etc).",
          ),
      )),
      (QGR = Se(() =>
        v
          .union([
            w0m(),
            A0m(),
            C0m(),
            x0m(),
            H0m(),
            k0m(),
            I0m(),
            R0m(),
            P0m(),
            M0m(),
            L0m(),
            O0m(),
            N0m(),
            fgi(),
            D0m(),
            $0m(),
            F0m(),
            U0m(),
            B0m(),
            j0m(),
            W0m(),
            q0m(),
            Y0m(),
            z0m(),
            K0m(),
            J0m(),
            Q0m(),
            Z0m(),
            X0m(),
            mgi(),
            eCm(),
            tCm(),
            rCm(),
            nCm(),
            lCm(),
          ])
          .describe(
            "Control requests a client sends to drive the loop \u2014 the client\u2192loop command slice of SDKControlRequestInner. The remaining members are loop\u2192client RPCs that block on a reply (see AgentOriginatedControlRequest).",
          ),
      )),
      (MdE = Se(() =>
        v.union([
          w0m(),
          T0m(),
          A0m(),
          C0m(),
          x0m(),
          H0m(),
          k0m(),
          I0m(),
          R0m(),
          P0m(),
          M0m(),
          L0m(),
          O0m(),
          N0m(),
          fgi(),
          D0m(),
          G0m(),
          V0m(),
          $0m(),
          F0m(),
          U0m(),
          B0m(),
          j0m(),
          W0m(),
          q0m(),
          Y0m(),
          z0m(),
          K0m(),
          J0m(),
          Q0m(),
          Z0m(),
          X0m(),
          mgi(),
          cCm(),
          dCm(),
          eCm(),
          tCm(),
          rCm(),
          nCm(),
          oCm(),
          sCm(),
          lCm(),
        ]),
      )),
      (hgi = Se(() =>
        v.object({
          type: v.literal("control_request"),
          request_id: v.string(),
          request: MdE(),
        }),
      )),
      (fCm = Se(() =>
        v
          .array(v.lazy(() => hgi()))
          .optional()
          .describe(
            "Permission requests still awaiting a response. Sent on the `initialize` response so a client joining an already-initialized session learns about in-flight prompts.",
          ),
      )),
      (mCm = Se(() =>
        v
          .array(v.lazy(() => hgi()))
          .optional()
          .describe(
            "request_user_dialog requests still awaiting a response. Sent on the `initialize` response (sibling of pending_permission_requests) so a client joining an already-initialized session can re-arm in-flight dialogs. Receivers must tolerate the same request_id also arriving as a live or replayed control_request frame and render it once.",
          ),
      )),
      (LdE = Se(() =>
        v.object({
          subtype: v.literal("success"),
          request_id: v.string(),
          response: v.record(v.string(), v.unknown()).optional(),
          pending_permission_requests: fCm(),
          pending_user_dialog_requests: mCm(),
        }),
      )),
      (OdE = Se(() =>
        v.object({
          subtype: v.literal("error"),
          request_id: v.string(),
          error: v.string(),
          pending_permission_requests: fCm(),
          pending_user_dialog_requests: mCm(),
        }),
      )),
      (hCm = Se(() =>
        v.object({
          type: v.literal("control_response"),
          response: v.union([LdE(), OdE()]),
        }),
      )),
      (gCm = Se(() =>
        v
          .object({
            type: v.literal("control_cancel_request"),
            request_id: v.string(),
          })
          .describe("Cancels a currently open control request."),
      )),
      (yCm = Se(() =>
        v
          .object({ type: v.literal("keep_alive") })
          .describe("Keep-alive message to maintain WebSocket connection."),
      )),
      (NdE = Se(() =>
        v
          .object({
            type: v.literal("update_environment_variables"),
            variables: v.record(v.string(), v.string()),
            request_id: v.string().optional(),
          })
          .describe("Updates environment variables at runtime."),
      )),
      (ZGR = Se(() =>
        v
          .union([A_l(), b_l(), S_l(), E_l(), v_l()])
          .describe(
            "Observational messages the agent loop emits \u2014 fire-and-forget, no reply expected. The remaining StdoutMessage members are control-protocol traffic (requests the loop originates and needs a reply to, responses to client-originated requests, keep-alives). This sub-union is the target for QueryEvent convergence so a Transport-shaped REPL can consume events without filtering control noise.",
          ),
      )),
      (_Cm = Se(() =>
        v.union([
          A_l(),
          b_l(),
          S_l(),
          E_l(),
          v_l(),
          hCm(),
          hgi(),
          gCm(),
          yCm(),
        ]),
      )),
      (e5R = Se(() =>
        v.union([y_l(), y0m(), hgi(), hCm(), gCm(), yCm(), NdE()]),
      )));
  });
