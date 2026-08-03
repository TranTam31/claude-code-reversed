// Module: Lfp (lines 644772-645789)
  var Lfp = S(() => {
    _Ce();
    Zt();
    bct();
    zt();
    vt();
    RNr();
    Ge();
    st();
    MYs = Symbol("suppressControlResponse");
    s3o = class s3o {
      transport;
      isSingleUserTurn;
      canUseTool;
      hooks;
      abortController;
      jsonSchema;
      initConfig;
      onElicitation;
      getOAuthToken;
      getHostAuthToken;
      onUserDialog;
      pendingControlResponses = new Map();
      unmatchedControlResponses = new Map();
      static UNMATCHED_CONTROL_RESPONSES_MAX = 1024;
      cleanupPerformed = !1;
      sdkMessages;
      inputStream = new Tee();
      initialization;
      cancelControllers = new Map();
      hookCallbacks = new Map();
      nextCallbackId = 0;
      initHooksPayload;
      sdkMcpTransports = new Map();
      sdkMcpServerInstances = new Map();
      pendingMcpResponses = new Map();
      firstResultReceivedResolve;
      firstResultReceived = !1;
      lastErrorResultText;
      latestCommands;
      transcriptMirrorBatcher;
      cleanupCallbacks = [];
      cleanupPromise;
      setIsSingleUserTurn(e) {
        this.isSingleUserTurn = e;
      }
      setTranscriptMirrorBatcher(e) {
        this.transcriptMirrorBatcher = e;
      }
      reportMirrorError(e, t) {
        let r = {
          type: "system",
          subtype: "mirror_error",
          error: t,
          key: e,
          uuid: k0e.randomUUID(),
          session_id: e.sessionId,
        };
        this.inputStream.enqueue(r);
      }
      addCleanupCallback(e) {
        if (this.cleanupPerformed) e();
        else this.cleanupCallbacks.push(e);
      }
      isClosed() {
        return this.cleanupPerformed;
      }
      hasBidirectionalNeeds() {
        return (
          this.sdkMcpTransports.size > 0 ||
          (this.hooks !== void 0 && Object.keys(this.hooks).length > 0) ||
          this.canUseTool !== void 0 ||
          this.onElicitation !== void 0 ||
          this.onUserDialog !== void 0 ||
          this.getOAuthToken !== void 0 ||
          this.getHostAuthToken !== void 0
        );
      }
      constructor(e, t, r, n, o, i = new Map(), s, a, l, c, u, d) {
        this.transport = e;
        this.isSingleUserTurn = t;
        this.canUseTool = r;
        this.hooks = n;
        this.abortController = o;
        this.jsonSchema = s;
        this.initConfig = a;
        this.onElicitation = l;
        this.getOAuthToken = c;
        this.getHostAuthToken = u;
        this.onUserDialog = d;
        for (let [p, f] of i) this.connectSdkMcpServer(p, f);
        ((this.sdkMessages = this.readSdkMessages()),
          this.readMessages(),
          (this.initialization = this.initialize()),
          this.initialization.catch(() => {}));
      }
      setError(e) {
        this.inputStream.error(e);
      }
      async stopTask(e) {
        await this.request({ subtype: "stop_task", task_id: e });
      }
      async backgroundTasks(e) {
        return (
          (await this.request({ subtype: "background_tasks", tool_use_id: e }))
            .response.backgrounded ?? !0
        );
      }
      close() {
        this.cleanup();
      }
      cleanup(e) {
        if (this.cleanupPromise) return this.cleanupPromise;
        return (
          (this.cleanupPerformed = !0),
          (this.cleanupPromise = this.performCleanup(e)),
          this.cleanupPromise
        );
      }
      async performCleanup(e) {
        for (let t of this.cleanupCallbacks)
          try {
            t();
          } catch {}
        if (((this.cleanupCallbacks = []), this.transcriptMirrorBatcher))
          try {
            await this.transcriptMirrorBatcher.flush();
          } catch {}
        try {
          for (let r of this.cancelControllers.values()) r.abort();
          (this.cancelControllers.clear(), this.transport.close());
          let t = e ?? Error("Query closed before response received");
          for (let { reject: r } of this.pendingControlResponses.values()) r(t);
          (this.pendingControlResponses.clear(),
            this.unmatchedControlResponses.clear());
          for (let { reject: r } of this.pendingMcpResponses.values()) r(t);
          (this.pendingMcpResponses.clear(), this.hookCallbacks.clear());
          for (let r of this.sdkMcpTransports.values())
            r.close().catch(() => {});
          if ((this.sdkMcpTransports.clear(), e)) this.inputStream.error(e);
          else this.inputStream.done();
        } catch (t) {}
        if (this.transport.waitForExit) {
          let t = new AbortController();
          try {
            await Promise.race([
              this.transport.waitForExit(),
              vr(2000, t.signal),
            ]);
          } catch {
          } finally {
            t.abort();
          }
        }
      }
      next(...[e]) {
        return this.sdkMessages.next(...[e]);
      }
      async return(e) {
        return (await this.cleanup(), this.sdkMessages.return(e));
      }
      async throw(e) {
        return (await this.cleanup(), this.sdkMessages.throw(e));
      }
      [Symbol.asyncIterator]() {
        return this.sdkMessages;
      }
      async [Symbol.asyncDispose]() {
        await this.cleanup();
      }
      async readMessages() {
        try {
          for await (let e of this.transport.readMessages()) {
            if (e.type === "control_response") {
              let t = this.pendingControlResponses.get(e.response.request_id);
              if (t) t.handler(e.response);
              else {
                if (
                  this.unmatchedControlResponses.size >=
                  s3o.UNMATCHED_CONTROL_RESPONSES_MAX
                ) {
                  let r = this.unmatchedControlResponses.keys().next().value;
                  if (r !== void 0) this.unmatchedControlResponses.delete(r);
                }
                this.unmatchedControlResponses.set(
                  e.response.request_id,
                  e.response,
                );
              }
              continue;
            } else if (e.type === "control_request") {
              this.handleControlRequest(e);
              continue;
            } else if (e.type === "control_cancel_request") {
              this.handleControlCancelRequest(e);
              continue;
            } else if (e.type === "keep_alive") continue;
            else if (e.type === "transcript_mirror") {
              this.transcriptMirrorBatcher?.enqueue(e.filePath, e.entries);
              continue;
            }
            if (
              e.type === "system" &&
              e.subtype === "commands_changed" &&
              Array.isArray(e.commands)
            )
              this.latestCommands = e.commands;
            if (
              e.type === "system" &&
              (e.subtype === "post_turn_summary" ||
                e.subtype === "task_summary")
            ) {
              this.inputStream.enqueue(e);
              continue;
            }
            if (e.type === "active_goal") {
              this.inputStream.enqueue(e);
              continue;
            }
            if (e.type === "result") {
              if (this.transcriptMirrorBatcher)
                await this.transcriptMirrorBatcher.flush();
              let t = e.is_error
                ? e.subtype === "success"
                  ? e.result
                  : e.errors
                      .map((r) => r.trim())
                      .filter(Boolean)
                      .join("; ")
                : void 0;
              if (
                ((this.lastErrorResultText = t || void 0),
                (this.firstResultReceived = !0),
                this.firstResultReceivedResolve)
              )
                this.firstResultReceivedResolve();
              if (this.isSingleUserTurn)
                (w(
                  "[Query.readMessages] First result received for single-turn query, closing stdin",
                ),
                  this.transport.endInput());
            } else if (!(
              e.type === "system" && e.subtype === "session_state_changed"
            ))
              this.lastErrorResultText = void 0;
            this.inputStream.enqueue(e);
          }
          if (this.transcriptMirrorBatcher)
            await this.transcriptMirrorBatcher.flush();
          if (this.firstResultReceivedResolve)
            this.firstResultReceivedResolve();
          (this.inputStream.done(), this.cleanup());
        } catch (e) {
          if (this.transcriptMirrorBatcher)
            await this.transcriptMirrorBatcher.flush();
          if (this.firstResultReceivedResolve)
            this.firstResultReceivedResolve();
          if (
            this.lastErrorResultText !== void 0 &&
            !(e instanceof YG) &&
            e?.name !== "SSEHttpError"
          ) {
            let t = Error(
              `Claude Code returned an error result: ${this.lastErrorResultText}`,
            );
            (w(
              `[Query.readMessages] Replacing exit error with result text. Original: ${le(e)}`,
            ),
              this.inputStream.error(t),
              this.cleanup(t));
            return;
          }
          (this.inputStream.error(e), this.cleanup(e));
        }
      }
      async handleControlRequest(e) {
        if (this.cancelControllers.has(e.request_id)) {
          w(
            `[Query.handleControlRequest] Duplicate delivery of in-flight request ${e.request_id} (${e.request.subtype}) \u2014 skipping`,
          );
          return;
        }
        let t = new AbortController();
        this.cancelControllers.set(e.request_id, t);
        try {
          let r = await this.processControlRequest(e, t.signal);
          if (this.cleanupPerformed) return;
          if (r === MYs) return;
          let n = {
            type: "control_response",
            response: {
              subtype: "success",
              request_id: e.request_id,
              response: r,
            },
          };
          await Promise.resolve(
            this.transport.write(
              Ie(n) +
                `
`,
            ),
          );
        } catch (r) {
          if (this.cleanupPerformed) return;
          let n = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: le(r),
            },
          };
          try {
            await Promise.resolve(
              this.transport.write(
                Ie(n) +
                  `
`,
              ),
            );
          } catch (o) {
            w(
              `[Query.handleControlRequest] Error-response write failed: ${le(o)}`,
              { level: "error" },
            );
          }
        } finally {
          this.cancelControllers.delete(e.request_id);
        }
      }
      handleControlCancelRequest(e) {
        let t = this.cancelControllers.get(e.request_id);
        if (t) (t.abort(), this.cancelControllers.delete(e.request_id));
      }
      async processControlRequest(e, t) {
        if (e.request.subtype === "can_use_tool") {
          if (!this.canUseTool)
            throw Error("canUseTool callback is not provided.");
          let r = await this.canUseTool(e.request.tool_name, e.request.input, {
            signal: t,
            suggestions: e.request.permission_suggestions,
            blockedPath: e.request.blocked_path,
            decisionReason: e.request.decision_reason,
            title: e.request.title,
            displayName: e.request.display_name,
            description: e.request.description,
            toolUseID: e.request.tool_use_id,
            agentID: e.request.agent_id,
            requestId: e.request_id,
            ...(e.request.matched_ask_rule && {
              matchedAskRule: {
                source: e.request.matched_ask_rule.source,
                toolName: e.request.matched_ask_rule.tool_name,
                ...(e.request.matched_ask_rule.rule_content !== void 0 && {
                  ruleContent: e.request.matched_ask_rule.rule_content,
                }),
              },
            }),
          });
          if (r === null) return MYs;
          return { ...r, toolUseID: e.request.tool_use_id };
        } else if (e.request.subtype === "hook_callback")
          return await this.handleHookCallbacks(
            e.request.callback_id,
            e.request.input,
            e.request.tool_use_id,
            t,
          );
        else if (e.request.subtype === "mcp_message") {
          let r = e.request,
            n = this.sdkMcpTransports.get(r.server_name);
          if (!n) throw Error(`SDK MCP server not found: ${r.server_name}`);
          if (
            "method" in r.message &&
            "id" in r.message &&
            r.message.id !== null
          )
            return {
              mcp_response: await this.handleMcpControlRequest(
                r.server_name,
                r,
                n,
              ),
            };
          else {
            if (n.onmessage) n.onmessage(r.message);
            return { mcp_response: { jsonrpc: "2.0", result: {}, id: 0 } };
          }
        } else if (e.request.subtype === "elicitation") {
          let r = e.request;
          if (this.onElicitation)
            return await this.onElicitation(
              {
                serverName: r.mcp_server_name,
                message: r.message,
                mode: r.mode,
                url: r.url,
                elicitationId: r.elicitation_id,
                requestedSchema: r.requested_schema,
                title: r.title,
                displayName: r.display_name,
                description: r.description,
              },
              { signal: t },
            );
          return { action: "decline" };
        } else if (e.request.subtype === "request_user_dialog") {
          if (this.onUserDialog)
            return await this.onUserDialog(
              {
                dialogKind: e.request.dialog_kind,
                payload: e.request.payload,
                toolUseID: e.request.tool_use_id,
              },
              { signal: t },
            );
          return (
            w(
              `[Query] No onUserDialog handler for request_user_dialog (kind=${e.request.dialog_kind}) \u2014 staying silent so a capable client (or the worker's park deadline) settles it`,
            ),
            O("tengu_request_user_dialog_response_ignored", {
              shape: fe("auto_cancel"),
            }),
            MYs
          );
        } else if (e.request.subtype === "oauth_token_refresh") {
          if (!this.getOAuthToken)
            throw Error("getOAuthToken callback is not provided.");
          return {
            accessToken: (await this.getOAuthToken({ signal: t })) ?? null,
          };
        } else if (e.request.subtype === "host_auth_token_refresh") {
          if (!this.getHostAuthToken)
            throw Error("getHostAuthToken callback is not provided.");
          return {
            authToken: (await this.getHostAuthToken({ signal: t })) ?? null,
          };
        }
        throw Error(
          "Unsupported control request subtype: " + e.request.subtype,
        );
      }
      async *readSdkMessages() {
        try {
          for await (let e of this.inputStream) yield e;
        } finally {
          await this.cleanup();
        }
      }
      async initialize() {
        if (this.hooks && !this.initHooksPayload) {
          this.initHooksPayload = {};
          for (let [n, o] of Object.entries(this.hooks))
            if (o.length > 0)
              this.initHooksPayload[n] = o.map((i) => {
                let s = [];
                for (let a of i.hooks) {
                  let l = `hook_${this.nextCallbackId++}`;
                  (this.hookCallbacks.set(l, a), s.push(l));
                }
                return {
                  matcher: i.matcher,
                  hookCallbackIds: s,
                  timeout: i.timeout,
                };
              });
        }
        let e =
            this.sdkMcpTransports.size > 0
              ? Array.from(this.sdkMcpTransports.keys())
              : void 0,
          t = {
            subtype: "initialize",
            hooks: this.initHooksPayload,
            sdkMcpServers: e,
            jsonSchema: this.jsonSchema,
            systemPrompt:
              typeof this.initConfig?.systemPrompt === "string"
                ? [this.initConfig.systemPrompt]
                : this.initConfig?.systemPrompt,
            appendSystemPrompt: this.initConfig?.appendSystemPrompt,
            planModeInstructions: this.initConfig?.planModeInstructions,
            appendSubagentSystemPrompt:
              this.initConfig?.appendSubagentSystemPrompt,
            toolAliases: this.initConfig?.toolAliases,
            excludeDynamicSections: this.initConfig?.excludeDynamicSections,
            agents: this.initConfig?.agents,
            title: this.initConfig?.title,
            skills: Array.isArray(this.initConfig?.skills)
              ? this.initConfig.skills
              : void 0,
            webSearchIsolationExemptMcpServers:
              this.initConfig?.webSearchIsolationExemptMcpServers,
            promptSuggestions: this.initConfig?.promptSuggestions,
            agentProgressSummaries: this.initConfig?.agentProgressSummaries,
            forwardSubagentText: this.initConfig?.forwardSubagentText,
            supportedDialogKinds: this.initConfig?.supportedDialogKinds,
          };
        return (await this.request(t)).response;
      }
      async interrupt() {
        return zc("sdk_interrupt", async () => {
          let t = (await this.request({ subtype: "interrupt" })).response
            ?.still_queued;
          return Array.isArray(t)
            ? { still_queued: t.filter((r) => typeof r === "string") }
            : void 0;
        });
      }
      async setPermissionMode(e) {
        await this.request({ subtype: "set_permission_mode", mode: e });
      }
      async setMcpPermissionModeOverride(e, t) {
        return (
          (
            await this.request({
              subtype: "set_mcp_permission_mode_override",
              serverName: e,
              mode: t,
            })
          ).response ?? {}
        );
      }
      awaitControlResponse(e) {
        return (
          this.transport.expectControlResponse?.(e),
          new Promise((t, r) => {
            let n = (i) => {
              if (i.subtype === "success") {
                let {
                  pending_permission_requests: s,
                  pending_user_dialog_requests: a,
                  ...l
                } = i;
                t(l);
              } else
                r(new Dr(i.error, "awaitControlResponse: CLI error verdict"));
              if (
                i.pending_permission_requests ||
                i.pending_user_dialog_requests
              )
                w(
                  "[Query] Ignoring prompt-redelivery fields on awaitControlResponse response",
                );
            };
            if (this.cleanupPerformed) {
              r(Error("Query closed before response received"));
              return;
            }
            let o = this.unmatchedControlResponses.get(e);
            if (o) {
              (this.unmatchedControlResponses.delete(e), n(o));
              return;
            }
            this.pendingControlResponses.set(e, {
              handler: (i) => {
                (this.pendingControlResponses.delete(e), n(i));
              },
              reject: r,
            });
          })
        );
      }
      async setModel(e) {
        await this.request({ subtype: "set_model", model: e });
      }
      async setMaxThinkingTokens(e, t) {
        await this.request({
          subtype: "set_max_thinking_tokens",
          max_thinking_tokens: e,
          thinking_display: t,
        });
      }
      async applyFlagSettings(e) {
        return zc("sdk_apply_flag_settings", async () => {
          await this.request({ subtype: "apply_flag_settings", settings: e });
        });
      }
      async getSettings() {
        return (await this.request({ subtype: "get_settings" })).response;
      }
      async rewindFiles(e, t) {
        return zc(
          "sdk_rewind_files",
          async () =>
            (
              await this.request({
                subtype: "rewind_files",
                user_message_id: e,
                dry_run: t?.dryRun,
              })
            ).response,
        );
      }
      async cancelAsyncMessage(e) {
        return (
          await this.request({
            subtype: "cancel_async_message",
            message_uuid: e,
          })
        ).response.cancelled;
      }
      async seedReadState(e, t) {
        await this.request({ subtype: "seed_read_state", path: e, mtime: t });
      }
      async setCwd(e, t) {
        return zc(
          "sdk_set_cwd",
          async () =>
            (
              await this.request({
                subtype: "set_cwd",
                path: e,
                ...(t?.trustAccepted !== void 0 && {
                  trust_accepted: t.trustAccepted,
                }),
                ...(t?.trustedDirectory !== void 0 && {
                  trusted_directory: t.trustedDirectory,
                }),
              })
            ).response,
        );
      }
      async enableRemoteControl(e, t) {
        return (
          await this.request({
            subtype: "remote_control",
            enabled: e,
            ...(t !== void 0 && { name: t }),
          })
        ).response;
      }
      async submitFeedback(e, t) {
        return (
          await this.request({
            subtype: "submit_feedback",
            description: e,
            surface: t?.surface,
          })
        ).response;
      }
      async generateSessionTitle(e, t) {
        return zc(
          "sdk_session_title_generate",
          async () =>
            (
              await this.request({
                subtype: "generate_session_title",
                description: e,
                persist: t?.persist,
              })
            ).response.title,
        );
      }
      async askSideQuestion(e) {
        return zc("sdk_side_question", async () => {
          let r = (
            await this.request({ subtype: "side_question", question: e })
          ).response;
          return r.response === null
            ? null
            : { response: r.response, synthetic: r.synthetic ?? !1 };
        });
      }
      async launchUltrareview(e, t) {
        return (
          await this.request({
            subtype: "ultrareview_launch",
            args: e,
            confirm: t?.confirm ?? !1,
          })
        ).response;
      }
      async messageRated(e) {
        await this.request({
          subtype: "message_rated",
          messageUuid: e.messageUuid,
          sentiment: e.sentiment,
          surface: e.surface,
          cleared: e.cleared ?? !1,
        });
      }
      processPendingPermissionRequests(e) {
        for (let t of e)
          if (t.request.subtype === "can_use_tool")
            this.handleControlRequest(t).catch(() => {});
      }
      processPendingUserDialogRequests(e) {
        for (let t of e)
          if (t.request.subtype === "request_user_dialog")
            this.handleControlRequest(t).catch(() => {});
      }
      request(e) {
        let t = Math.random().toString(36).substring(2, 15);
        this.transport.expectControlResponse?.(t);
        let r = { request_id: t, type: "control_request", request: e },
          n = e.subtype === "initialize";
        return new Promise((o, i) => {
          (this.pendingControlResponses.set(t, {
            handler: (s) => {
              if (
                (this.pendingControlResponses.delete(t),
                s.subtype === "success")
              )
                o(s);
              else i(Error(s.error));
              if (
                !n &&
                (s.pending_permission_requests ||
                  s.pending_user_dialog_requests)
              )
                w(
                  `[Query] Ignoring prompt-redelivery fields on non-initialize response (subtype=${e.subtype})`,
                );
              else {
                if (s.pending_permission_requests)
                  this.processPendingPermissionRequests(
                    s.pending_permission_requests,
                  );
                if (s.pending_user_dialog_requests)
                  this.processPendingUserDialogRequests(
                    s.pending_user_dialog_requests,
                  );
              }
            },
            reject: i,
          }),
            Promise.resolve(
              this.transport.write(
                Ie(r) +
                  `
`,
              ),
            ).catch((s) => {
              (this.pendingControlResponses.delete(t), i(s));
            }));
        });
      }
      initializationResult() {
        return this.initialization;
      }
      reinitialize() {
        return zc("sdk_reinitialize", () => this.initialize());
      }
      async supportedCommands() {
        let { commands: e } = await this.initialization;
        return this.latestCommands ?? e;
      }
      async supportedModels() {
        return (await this.initialization).models;
      }
      async supportedAgents() {
        return (await this.initialization).agents;
      }
      async reconnectMcpServer(e) {
        await this.request({ subtype: "mcp_reconnect", serverName: e });
      }
      async toggleMcpServer(e, t) {
        return zc("sdk_mcp_toggle_server", async () => {
          await this.request({
            subtype: "mcp_toggle",
            serverName: e,
            enabled: t,
          });
        });
      }
      async enableChannel(e) {
        return zc("sdk_mcp_enable_channel", async () => {
          await this.request({ subtype: "channel_enable", serverName: e });
        });
      }
      async mcpAuthenticate(e, t) {
        return (
          await this.request({
            subtype: "mcp_authenticate",
            serverName: e,
            redirectUri: t,
          })
        ).response;
      }
      async mcpClearAuth(e) {
        return (
          await this.request({ subtype: "mcp_clear_auth", serverName: e })
        ).response;
      }
      async mcpSubmitOAuthCallbackUrl(e, t) {
        return (
          await this.request({
            subtype: "mcp_oauth_callback_url",
            serverName: e,
            callbackUrl: t,
          })
        ).response;
      }
      async claudeAuthenticate(e) {
        return (
          await this.request({
            subtype: "claude_authenticate",
            loginWithClaudeAi: e,
          })
        ).response;
      }
      async claudeOAuthCallback(e, t) {
        return (
          await this.request({
            subtype: "claude_oauth_callback",
            authorizationCode: e,
            state: t,
          })
        ).response;
      }
      async claudeOAuthWaitForCompletion() {
        return (
          await this.request({ subtype: "claude_oauth_wait_for_completion" })
        ).response;
      }
      async mcpServerStatus() {
        return (await this.request({ subtype: "mcp_status" })).response
          .mcpServers;
      }
      async getContextUsage() {
        return (await this.request({ subtype: "get_context_usage" })).response;
      }
      async usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET() {
        return (await this.request({ subtype: "get_usage" })).response;
      }
      async readFile(e, t) {
        try {
          return (
            await this.request({
              subtype: "read_file",
              path: e,
              max_bytes: t?.maxBytes,
              encoding: t?.encoding,
            })
          ).response;
        } catch {
          return null;
        }
      }
      async reloadPlugins() {
        return zc(
          "sdk_reload_plugins",
          async () =>
            (await this.request({ subtype: "reload_plugins" })).response,
        );
      }
      async reloadSkills() {
        return zc(
          "sdk_reload_skills",
          async () =>
            (await this.request({ subtype: "reload_skills" })).response,
        );
      }
      async setMcpServers(e) {
        return zc("sdk_mcp_set_servers", async () => {
          let t = {},
            r = {};
          for (let [a, l] of Object.entries(e))
            if (l.type === "sdk" && "instance" in l) t[a] = l.instance;
            else r[a] = l;
          let n = new Set(this.sdkMcpServerInstances.keys()),
            o = new Set(Object.keys(t));
          for (let a of n) if (!o.has(a)) await this.disconnectSdkMcpServer(a);
          for (let [a, l] of Object.entries(t))
            if (!n.has(a)) this.connectSdkMcpServer(a, l);
          let i = {};
          for (let a of Object.keys(t)) i[a] = { type: "sdk", name: a };
          return (
            await this.request({
              subtype: "mcp_set_servers",
              servers: { ...r, ...i },
            })
          ).response;
        });
      }
      async accountInfo() {
        return (await this.initialization).account;
      }
      async streamInput(e) {
        w("[Query.streamInput] Starting to process input stream");
        try {
          let t = 0;
          for await (let r of e) {
            if (
              (t++,
              w(`[Query.streamInput] Processing message ${t}: ${r.type}`),
              this.abortController?.signal.aborted)
            )
              break;
            await Promise.resolve(
              this.transport.write(
                Ie(r) +
                  `
`,
              ),
            );
          }
          if (
            (w(
              `[Query.streamInput] Finished processing ${t} messages from input stream`,
            ),
            t > 0 && this.hasBidirectionalNeeds())
          )
            (w(
              "[Query.streamInput] Has bidirectional needs, waiting for first result",
            ),
              await this.waitForFirstResult());
          (w(
            "[Query] Calling transport.endInput() to close stdin to CLI process",
          ),
            this.transport.endInput());
        } catch (t) {
          if (!(t instanceof YG)) throw t;
        }
      }
      waitForFirstResult() {
        if (this.firstResultReceived)
          return (
            w(
              "[Query.waitForFirstResult] Result already received, returning immediately",
            ),
            Promise.resolve()
          );
        return new Promise((e) => {
          let t = this.abortController?.signal;
          if (this.cleanupPerformed || t?.aborted) {
            e();
            return;
          }
          let r = () => e();
          (t?.addEventListener("abort", r, { once: !0 }),
            this.addCleanupCallback(() => {
              (t?.removeEventListener("abort", r), e());
            }),
            (this.firstResultReceivedResolve = () => {
              (t?.removeEventListener("abort", r), e());
            }));
        });
      }
      handleHookCallbacks(e, t, r, n) {
        let o = this.hookCallbacks.get(e);
        if (!o) throw Error(`No hook callback found for ID: ${e}`);
        return o(t, r, { signal: n });
      }
      connectSdkMcpServer(e, t) {
        let r = new REs((n) => this.sendMcpServerMessageToCli(e, n));
        (this.sdkMcpTransports.set(e, r),
          this.sdkMcpServerInstances.set(e, t),
          t.connect(r).catch((n) => {
            if (this.sdkMcpTransports.get(e) === r)
              this.sdkMcpTransports.delete(e);
            if (this.sdkMcpServerInstances.get(e) === t)
              this.sdkMcpServerInstances.delete(e);
            w(
              `[Query.connectSdkMcpServer] Failed to connect MCP server '${e}': ${n}`,
              { level: "error" },
            );
          }));
      }
      async disconnectSdkMcpServer(e) {
        let t = this.sdkMcpTransports.get(e);
        if (t) (await t.close(), this.sdkMcpTransports.delete(e));
        this.sdkMcpServerInstances.delete(e);
      }
      sendMcpServerMessageToCli(e, t) {
        if ("id" in t && t.id !== null && t.id !== void 0) {
          let n = `${e}:${t.id}`,
            o = this.pendingMcpResponses.get(n);
          if (o) {
            (o.resolve(t), this.pendingMcpResponses.delete(n));
            return;
          }
        }
        let r = {
          type: "control_request",
          request_id: k0e.randomUUID(),
          request: { subtype: "mcp_message", server_name: e, message: t },
        };
        Promise.resolve(
          this.transport.write(
            Ie(r) +
              `
`,
          ),
        ).catch((n) => {
          w(`[Query.sendMcpServerMessageToCli] Transport write failed: ${n}`, {
            level: "error",
          });
        });
      }
      handleMcpControlRequest(e, t, r) {
        let n = "id" in t.message ? t.message.id : null,
          o = `${e}:${n}`;
        return new Promise((i, s) => {
          let a = () => {
              this.pendingMcpResponses.delete(o);
            },
            l = (u) => {
              (a(), i(u));
            },
            c = (u) => {
              (a(), s(u));
            };
          if (
            (this.pendingMcpResponses.set(o, { resolve: l, reject: c }),
            r.onmessage)
          )
            r.onmessage(t.message);
          else {
            (a(), s(Error("No message handler registered")));
            return;
          }
        });
      }
    };
  });
