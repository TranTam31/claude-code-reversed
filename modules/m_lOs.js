// Module: lOs (lines 466108-467531)
  var lOs = S(() => {
    Ss();
    WOt();
    Vn();
    QTs();
    bfe();
    pt();
    $fe();
    dct();
    z8e();
    Zr();
    Wf();
    m4();
    Wj();
    mV();
    zt();
    vt();
    b5();
    OU();
    Ab();
    CUe();
    r2();
    ES();
    Gp();
    drn();
    Yh();
    L9e();
    ax();
    KOt();
    ei();
    Ge();
    tse();
    Ar();
    Qr();
    st();
    vo();
    Jdt();
    dv();
    bh();
    H$e();
    Dh();
    yv();
    Qdt();
    Pr();
    hpe();
    z5();
    YOt();
    zC();
    om();
    Mk();
    nW();
    R4();
    eU();
    I$();
    Rh();
    aH();
    tAd();
    GU();
    Mfe();
    $ze();
    slr();
    mh();
    mct();
    Nw();
    iOs();
    oOs();
    yIe();
    YHo();
    jl();
    i$t = class i$t extends Error {
      constructor(e) {
        super(e);
        this.name = "AgentTypeError";
      }
    };
    sOs = class sOs extends Error {
      constructor(e) {
        super(e);
        this.name = "RemoteAgentPreconditionError";
      }
    };
    xIe = class xIe extends Error {
      constructor(e) {
        super(e);
        this.name = "AgentPreconditionError";
      }
    };
    ((Bqy = Se(() =>
      v.object({
        description: v
          .string()
          .describe("A short (3-5 word) description of the task"),
        prompt: v.string().describe("The task for the agent to perform"),
        subagent_type: v
          .string()
          .optional()
          .describe("The type of specialized agent to use for this task"),
        model: v
          .enum(["sonnet", "opus", "haiku", "fable"])
          .optional()
          .describe(
            `Optional model override for this agent. Takes precedence over the agent definition's model frontmatter. If omitted, uses the agent definition's model, or inherits from the parent. Ignored for subagent_type: "fork" \u2014 forks always inherit the parent model.`,
          ),
        run_in_background: v
          .boolean()
          .optional()
          .describe(
            "Agents run in the background by default; you will be notified when one completes. Set to false to run this agent synchronously when you need its result before continuing.",
          ),
      }),
    )),
      (jqy = Se(() => {
        let e = v.object({
          name: v
            .string()
            .regex(hRu, {
              message:
                "name must start with a letter or digit and contain only letters, digits, underscores, or hyphens (max 64 chars)",
            })
            .refine((t) => t !== gV, {
              message: `"${gV}" is reserved \u2014 SendMessage routes it to the main conversation`,
            })
            .optional()
            .describe(
              "Name for the spawned agent. Makes it addressable via SendMessage({to: name}) while running.",
            ),
          team_name: v
            .string()
            .optional()
            .describe(
              "Deprecated; ignored. The session has a single implicit team.",
            ),
          mode: c5l()
            .optional()
            .describe(
              "Deprecated; ignored. Subagents inherit the parent session's permission mode; agent-definition frontmatter may override it.",
            ),
        });
        return Bqy()
          .merge(e)
          .extend({
            isolation: v
              .enum(["worktree", "remote"])
              .optional()
              .describe(
                'Isolation mode. "worktree" creates a temporary git worktree so the agent works on an isolated copy of the repo. "remote" launches the agent in a remote cloud environment (always runs in background; availability is gated).',
              ),
            cwd: v
              .string()
              .optional()
              .describe(
                'Absolute path to run the agent in. Overrides the working directory for all filesystem and shell operations within this agent. Mutually exclusive with isolation: "worktree".',
              ),
          });
      })),
      (aOs = Se(() => {
        let e = jqy().omit({ cwd: !0 });
        return IE() || wSe() ? e.omit({ run_in_background: !0 }) : e;
      })),
      (Wqy = Se(() =>
        Spd().extend({
          status: v.literal("completed"),
          prompt: v.string(),
          worktreePath: v.string().optional(),
          worktreeBranch: v.string().optional(),
        }),
      )),
      (Gqy = Se(() => {
        let e = Wqy(),
          t = v.object({
            status: v.literal("async_launched"),
            isAsync: v.literal(!0).optional(),
            agentId: v.string().describe("The ID of the async agent"),
            description: v.string().describe("The description of the task"),
            resolvedModel: v
              .string()
              .optional()
              .describe(
                "Model in use at the backgrounding transition (a pre-background swap is reflected here)",
              ),
            modelsUsed: v
              .array(v.string())
              .optional()
              .describe(
                "Ordered distinct models used before backgrounding (length > 1 means a mid-run swap)",
              ),
            prompt: v.string().describe("The prompt for the agent"),
            outputFile: v
              .string()
              .describe("Path to the output file for checking agent progress"),
            canReadOutputFile: v
              .boolean()
              .optional()
              .describe(
                "Whether the calling agent has Read/Bash tools to check progress",
              ),
          }),
          r = v.object({
            status: v.literal("remote_launched"),
            taskId: v.string().describe("The ID of the remote agent task"),
            sessionUrl: v.string().describe("The URL of the cloud session"),
            description: v.string().describe("The description of the task"),
            prompt: v.string().describe("The prompt for the agent"),
            outputFile: v
              .string()
              .describe("Path to the output file for checking agent progress"),
          });
        return v.union([e, t, r]);
      })),
      (XHo = Ui({
        async prompt({
          agents: e,
          getToolPermissionContext: t,
          allowedAgentTypes: r,
          model: n,
        }) {
          let o = await t(),
            i = $_(),
            { available: s } = aAd(e, r, { toolPermissionContext: o });
          return await iAd(n, i, s);
        },
        name: Vo,
        searchHint: "delegate work to a subagent",
        aliases: [Ij],
        maxResultSizeChars: 1e5,
        async description() {
          return "Launch a new agent";
        },
        get inputSchema() {
          return aOs();
        },
        get outputSchema() {
          return Gqy();
        },
        async call(
          {
            prompt: e,
            subagent_type: t,
            description: r,
            model: n,
            run_in_background: o,
            name: i,
            isolation: s,
            cwd: a,
          },
          l,
          c,
          u,
          d,
        ) {
          let p = Date.now(),
            f = nse() ? void 0 : n,
            m = NI(l.agentContext),
            g = bee();
          if (m >= g)
            throw (
              pe("subagent_launch", "subagent_depth_cap"),
              new xIe(
                `Subagent nesting limit reached (depth ${m} of ${g}). Complete this task directly using your tools instead of spawning another agent. If the user explicitly requested deeper nesting, ask them to raise CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH.`,
              )
            );
          r = r.replace(/\s+/g, " ").trim();
          let y = l.getAppState(),
            _ = En(l),
            E = _.mode,
            { taskRegistry: A } = l,
            b = mc() ? y.teamContext : void 0,
            T = !!l.teammateContext;
          if ((T || !!zVe()) && i)
            throw (
              pe("subagent_launch", "subagent_nested_teammate"),
              new xIe(
                "Teammates cannot spawn other teammates \u2014 the team roster is flat. To spawn a subagent instead, omit the `name` parameter.",
              )
            );
          if (T && o === !0)
            throw (
              pe("subagent_launch", "subagent_teammate_background_denied"),
              new xIe(
                "In-process teammates cannot spawn background agents. Use run_in_background=false for synchronous subagents.",
              )
            );
          let { activeAgents: I, allowedAgentTypes: R } =
              l.options.agentDefinitions,
            k = t !== void 0 && clr(t) === TSe,
            { available: D, denyRule: M } = aAd(I, R, {
              toolPermissionContext: _,
            });
          if (k && M)
            throw (
              pe("subagent_launch", "subagent_type_denied"),
              new i$t(
                `Agent type '${TSe}' has been denied by permission rule '${Vo}(${TSe})' from ${M.source}.`,
              )
            );
          let L = k && D;
          if (t !== void 0 && !k) {
            let lt = D9e(_, Vo, t);
            if (lt)
              throw (
                pe("subagent_launch", "subagent_type_denied"),
                new i$t(
                  `Agent type '${t}' has been denied by permission rule '${Vo}(${t})' from ${lt.source}.`,
                )
              );
            if (R && !R.includes(t)) {
              pe("subagent_launch", "subagent_type_not_found");
              let et = Dft(
                I.filter((gt) => R.includes(gt.agentType)),
                _,
                Vo,
              ).map((gt) => gt.agentType);
              throw new i$t(
                `Agent type '${t}' not found. Available agents: ${et.join(", ")}`,
              );
            }
          }
          let N = (lt = !1) => {
              if (l.abortController.signal.aborted) {
                let At = Py(l.abortController.signal.reason);
                if (!(lt && At === "interrupt")) throw new tl();
              }
              let { maxBudgetUsd: et } = l.options;
              if (Gcr(et))
                throw (
                  pe("subagent_launch", "subagent_budget_exhausted"),
                  new xIe(
                    `Budget limit reached ($${vS().toFixed(2)} spent of the $${et} maximum). New agents cannot be started. Complete the remaining work directly with your tools, or wrap up with the results you already have.`,
                  )
                );
              let gt = sXr(),
                Rt = l.taskRegistry.getTotalAgentSpawns();
              if (Rt >= gt)
                throw (
                  pe("subagent_launch", "subagent_count_cap"),
                  new xIe(
                    `Subagent spawn limit reached (${Rt} of ${gt} agents spawned). Complete the remaining work directly with your tools instead of spawning more agents. If more agents are genuinely needed, ask the user to raise CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION.`,
                  )
                );
              l.taskRegistry.incrementTotalAgentSpawns();
            },
            P = () => {
              let lt = mMu();
              if (l.taskRegistry.getConcurrentSubagents() < lt) return;
              if (Ke("tengu_amber_kestrel", !1)) return;
              let gt = l.getAppState();
              if (
                AY(
                  l.rootToolSurface.mainLoopModel,
                  gt.effortValue,
                  gt.ultracode,
                )
              )
                return;
              return (
                pe("subagent_launch", "subagent_concurrency_cap"),
                new xIe(
                  `Concurrent subagent limit reached. You can run ${lt} subagents at once. Do not retry. If the user wants more concurrent subagents, ask them to increase CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS.`,
                )
              );
            },
            B = async () => {
              let lt = P();
              if (lt) throw (await at(), lt);
              return l.taskRegistry.takeConcurrencySlot();
            };
          if (b && i && !L && !s && !a) {
            N();
            let lt = t
              ? l.options.agentDefinitions.activeAgents.find(
                  (Rt) => Rt.agentType === t,
                )
              : void 0;
            if (lt?.color) ilr(t, lt.color);
            let et = await eAd(
                {
                  name: i,
                  prompt: e,
                  description: r,
                  use_splitpane: !0,
                  plan_mode_required: E === "plan",
                  model: f ?? (lt ? Nze(lt, l.options.mainLoopModel) : void 0),
                  agent_type: t,
                  invokingRequestId: u?.requestId,
                },
                l,
                d,
              ),
              gt = { status: "teammate_spawned", prompt: e, ...et.data };
            return (be("subagent_launch"), { data: gt });
          }
          let G;
          if (L) {
            if (s === "remote")
              throw (
                pe("subagent_launch", "subagent_fork_remote_isolation"),
                new xIe(
                  'Fork cannot use isolation: "remote" \u2014 a remote session cannot inherit the conversation context. Omit isolation (or use "worktree"), or spawn a named agent type for remote work.',
                )
              );
            if (
              l.options.querySource === `agent:builtin:${vee.agentType}` ||
              Zus(l.messages)
            )
              throw (
                pe("subagent_launch", "subagent_recursive_fork"),
                new xIe(
                  "Fork is not available inside a forked worker. Complete your task directly using your tools.",
                )
              );
            G = vee;
          } else {
            let lt = t ?? BFe.agentType,
              et = Dft(
                R ? I.filter((Rt) => R.includes(Rt.agentType)) : I,
                _,
                Vo,
              ),
              gt = et.find((Rt) => Rt.agentType === lt);
            if (!gt) {
              let Rt = clr(lt),
                At = rj(Rt, 60),
                $t = et.map((gr) => gr.agentType),
                Mt = new Set($t),
                mt = Rt ? I.filter((gr) => clr(gr.agentType) === Rt) : [];
              if (mt.length > 1) {
                (O("tengu_subagent_type_miss", {
                  requestedNormalized: At,
                  availableCount: et.length,
                  ambiguousCount: mt.length,
                }),
                  pe("subagent_launch", "subagent_type_ambiguous"));
                let gr = mt
                  .map((lr) => lr.agentType)
                  .filter((lr) => Mt.has(lr));
                throw new i$t(
                  `Agent type '${lt}' is ambiguous \u2014 matches ${mt.map((lr) => (Mt.has(lr.agentType) ? lr.agentType : `${lr.agentType} (unavailable)`)).join(", ")}. ${gr.length > 0 ? `Use the exact name: ${gr.join(" or ")}` : `None of these are available. Available agents: ${$t.join(", ")}`}`,
                );
              }
              if (mt.length === 1) {
                let gr = mt[0];
                if (Mt.has(gr.agentType)) {
                  if (((gt = gr), gt.color)) ilr(lt, gt.color);
                  O("tengu_subagent_type_normalized", {
                    requestedNormalized: At,
                    matched: gt.agentType,
                  });
                } else {
                  let lr = gr.agentType,
                    It = D9e(_, Vo, lr);
                  if (It)
                    throw (
                      pe("subagent_launch", "subagent_type_denied"),
                      new i$t(
                        `Agent type '${lr}' has been denied by permission rule '${Vo}(${lr})' from ${It.source}.`,
                      )
                    );
                }
              }
              if (!gt)
                throw (
                  O("tengu_subagent_type_miss", {
                    requestedNormalized: At,
                    availableCount: et.length,
                  }),
                  pe("subagent_launch", "subagent_type_not_found"),
                  new i$t(
                    `Agent type '${lt}' not found. Available agents: ${$t.join(", ")}`,
                  )
                );
            }
            G = gt;
          }
          if (T && G.background === !0)
            throw (
              pe("subagent_launch", "subagent_teammate_background_denied"),
              new xIe(
                `In-process teammates cannot spawn background agents. Agent '${G.agentType}' has background: true in its definition.`,
              )
            );
          if ((s ?? G.isolation) === "worktree" && !nOs())
            throw (
              pe("git_worktree_create", "git_worktree_create_not_git_repo"),
              new m_(
                "Cannot create agent worktree: not in a git repository and no WorktreeCreate hooks are configured. Configure WorktreeCreate/WorktreeRemove hooks in settings.json to use worktree isolation with other VCS systems.",
              )
            );
          let V = $_(),
            F = wSe(),
            W = IE(),
            j = s ?? G.isolation;
          if (j === "remote" && !han())
            ((j = Z.CLAUDE_CODE_REMOTE || !nOs() ? void 0 : "worktree"),
              w(
                "[remote agent] isolation:'remote' is unavailable " +
                  (Z.CLAUDE_CODE_REMOTE
                    ? "(already inside a CCR session); running as a local agent"
                    : j === "worktree"
                      ? "(no claude.ai login or feature gate off); falling back to isolation:'worktree'"
                      : "(no claude.ai login or feature gate off) and no git root; running as a local agent"),
              ));
          let z = j === "remote",
            q =
              z ||
              ((o === !0 ||
                G.background === !0 ||
                V ||
                F ||
                (!T && o !== !1)) &&
                !W);
          if (!z) {
            if (l.abortController.signal.aborted) {
              let et = Py(l.abortController.signal.reason);
              if (!(q && et === "interrupt")) throw new tl();
            }
            let lt = P();
            if (lt) throw lt;
          }
          N(q && !z);
          let K = G.requiredMcpServers,
            Y = l.options.tools.filter(zD);
          if (K?.length) {
            let lt = ($t) =>
                K.some((Mt) => $t.toLowerCase().includes(Mt.toLowerCase())),
              et = ($t, Mt) => $t.some((mt) => mt.type === Mt && lt(mt.name)),
              gt = et(y.mcp.clients, "pending"),
              Rt = y;
            if (gt) {
              let mt = Date.now() + 30000;
              while (Date.now() < mt) {
                if (
                  (await vr(500),
                  (Rt = l.getAppState()),
                  et(Rt.mcp.clients, "failed"))
                )
                  break;
                if (!et(Rt.mcp.clients, "pending")) break;
              }
            }
            let At = [];
            for (let $t of Rt.mcp.tools.concat(Y)) {
              let Mt = Uor($t);
              if (Mt && !At.includes(Mt)) At.push(Mt);
            }
            if (!Iyo(G, At)) {
              let $t = K.filter(
                (Mt) =>
                  !At.some((mt) => mt.toLowerCase().includes(Mt.toLowerCase())),
              );
              throw (
                pe("subagent_launch", "subagent_mcp_required_missing"),
                new xIe(
                  `Agent '${G.agentType}' requires MCP servers matching: ${$t.join(", ")}. MCP servers with tools: ${At.length > 0 ? At.join(", ") : "none"}. Use /mcp to configure and authenticate the required MCP servers.`,
                )
              );
            }
          }
          if (G.color) ilr(G.agentType, G.color);
          let re = YD(l),
            oe = ite(Nze(G, re), re, L ? void 0 : f, E);
          l.agentLifecycle.markTypeInvoked(G.agentType);
          let ce = G.getSystemPrompt({ toolUseContext: l }),
            se = jFe(G) ? Ri(G.plugin) : void 0;
          if (jFe(G)) T$(G.plugin);
          let ne = NI(l.agentContext) + 1;
          if (jFe(G)) j8(G.plugin, "subagent");
          if (
            (O("tengu_agent_tool_selected", {
              agent_type: G.agentType,
              model: oe,
              source: fe(G.source),
              color: Xo(G.color),
              is_built_in_agent: PE(G),
              is_resume: !1,
              is_async: q,
              is_fork: L,
              agent_depth: ne,
              agent_system_prompt_chars: ce.length,
              ...(se && aee(se.name, se.marketplace)),
            }),
            z)
          ) {
            let lt = await TUe();
            if (!lt.eligible) {
              let Mt = lt.errors.map(zke).join(`
`);
              throw (
                pe("subagent_launch", "subagent_remote_ineligible"),
                new sOs(`Cannot launch cloud agent:
${Mt}`)
              );
            }
            let et,
              gt = await Wse({
                initialMessage: e,
                source: "remote_agent",
                description: r,
                model: oe,
                permissionMode: nAd(G.permissionMode ?? "acceptEdits"),
                branchName: await rAd(),
                signal: l.abortController.signal,
                onBundleFail: (Mt) => {
                  et = Mt;
                },
                onCreateFail: (Mt) => {
                  et = Mt;
                },
              });
            if (!gt)
              throw (
                pe("subagent_launch", "subagent_remote_session_failed"),
                new sOs(et ?? "Failed to create cloud session")
              );
            let { taskId: Rt, sessionId: At } = M9e({
              remoteTaskType: "remote-agent",
              session: { id: gt.id, title: gt.title || r },
              command: e,
              context: l,
              toolUseId: l.toolUseId,
            });
            return (
              O("tengu_agent_tool_remote_launched", {
                agent_type: G.agentType,
              }),
              be("subagent_launch"),
              {
                data: {
                  status: "remote_launched",
                  taskId: Rt,
                  sessionUrl: OEe(At),
                  description: r,
                  prompt: e,
                  outputFile: $g(Rt),
                },
              }
            );
          }
          let ee, te, de;
          if (L) {
            if (l.renderedSystemPrompt) te = l.renderedSystemPrompt;
            else {
              let lt = y.agent
                  ? y.agentDefinitions.activeAgents.find(
                      (Rt) => Rt.agentType === y.agent,
                    )
                  : void 0,
                et = Array.from(_.additionalWorkingDirectories.keys()),
                gt = await L4(l.options.tools, l.options.mainLoopModel, et);
              te = Bse({
                mainThreadAgentDefinition: lt,
                toolUseContext: l,
                customSystemPrompt: l.options.customSystemPrompt,
                defaultSystemPrompt: gt,
                appendSystemPrompt: l.options.appendSystemPrompt,
                skillsPersistencePrompt: Kdt(l.options.tools),
              });
            }
            de = eds(e, u);
          } else {
            try {
              let lt = Array.from(_.additionalWorkingDirectories.keys());
              if (G.memory)
                O("tengu_agent_memory_loaded", {
                  ...!1,
                  scope: fe(G.memory),
                  source: Ee("subagent"),
                });
              ee = await rin([ce], oe, lt);
            } catch (lt) {
              w(
                `Failed to get system prompt for agent ${G.agentType}: ${le(lt)}`,
              );
            }
            de = [zr({ content: e })];
          }
          let ae = {
              prompt: e,
              resolvedAgentModel: oe,
              isBuiltInAgent: PE(G),
              startTime: p,
              agentType: G.agentType,
              isAsync: q,
              agentDepth: ne,
              source: G.source,
              pluginId: se,
            },
            Te = { ..._, mode: G.permissionMode ?? E },
            ve = l.getAppState(),
            he = z7(Te, HUe(ve.mcp.tools.concat(Y)), {
              skipReplFilter: !0,
              skillTools: ve.skillTools,
            }),
            De = l.agentId ?? Ose,
            Ae = G.observer
              ? Xtn({
                  observedDefinition: G,
                  activeAgents: l.options.agentDefinitions.activeAgents,
                  observedIsObserver: !1,
                })
              : urd({
                  parentPairing: _ur(De),
                  spawnedDefinition: G,
                  spawnedIsObserver: !1,
                }),
            Ce = Ae?.inheritedArming
              ? {
                  toolUseContext: Ae.inheritedArming.toolUseContext,
                  canUseTool: Ae.inheritedArming.canUseTool,
                  persistedArmingMode: Ae.inheritedArming.permissionMode,
                  inheritedFromKey: De,
                  inheritedFromPairing: Ae.inheritedArming.parentPairing,
                }
              : { toolUseContext: l, canUseTool: c },
            $e = RO(),
            ge = l.agentId,
            Oe =
              l.agentContext !== void 0 &&
              l.agentContext.agentType !== "main" &&
              (l.agentContext.isBackgroundAgent ?? !1),
            Be = mNt(ge, A) ?? Si(),
            Le = null;
          if (j === "worktree") Le = await DPt(Hcs($e));
          if (L && Le) de.push(zr({ content: tds(kt(), Le.worktreePath) }));
          let ze = {
              agentDefinition: G,
              promptMessages: de,
              toolUseContext: l,
              canUseTool: c,
              name: i,
              isAsync: q,
              querySource: l.options.querySource ?? EUe(G.agentType, PE(G)),
              spawnedBySkill: l.options.spawnedBySkill ?? l.options.activeSkill,
              spawnedByForkedSkill: l.options.spawnedByForkedSkill,
              model: L ? void 0 : f,
              override: L
                ? {
                    systemPrompt: te,
                    replHydration: {
                      kind: "fork",
                      log: [
                        ...(l.getReplContexts()[l.agentId ?? IRt]?.replayLog ??
                          []),
                      ],
                    },
                  }
                : ee && !Le && !a
                  ? { systemPrompt: dp(ee) }
                  : void 0,
              availableTools: L ? l.options.tools : he,
              forkContextMessages: L ? l.messages : void 0,
              ...(L && { useExactTools: !0 }),
              worktreePath: Le?.worktreePath,
              worktreeBranch: Le?.worktreeBranch,
              cwd: a,
              description: r,
              preserveToolUseResults: !yn(),
              toolUseId: l.toolUseId,
              onMcpServersBlocked: (lt, et) =>
                d?.({
                  type: "notification",
                  notification: {
                    key: `agent-mcp-blocked-${$e}`,
                    text: `${G.agentType} agent MCP ${Et(lt.length, "server")} blocked by ${et}: ${lt.join(", ")}`,
                    priority: "medium",
                    color: "warning",
                    timeoutMs: 1e4,
                  },
                }),
              onModelRestricted: (lt, et) =>
                d?.({
                  type: "notification",
                  notification: {
                    key: `agent-model-restricted-${G.agentType}-${O9e(lt)}`,
                    text: `${G.agentType} agent: ${rW(lt, et)}`,
                    priority: "medium",
                    color: "warning",
                    timeoutMs: 1e4,
                  },
                }),
            },
            rt = a ?? Le?.worktreePath,
            at = async () => {
              if (!Le) return {};
              let {
                worktreePath: lt,
                worktreeBranch: et,
                headCommit: gt,
                gitRoot: Rt,
                hookBased: At,
              } = Le;
              if (((Le = null), At))
                return (
                  w(`Hook-based agent worktree kept at: ${lt}`),
                  { worktreePath: lt }
                );
              if (gt) {
                if (
                  !(await R7r(lt, gt)) &&
                  (await jHe(lt, et, Rt, !1, "agent_tool")).outcome ===
                    "removed"
                )
                  return (
                    npd({
                      agentId: Vc($e),
                      removedWorktreePath: lt,
                      spawnMetadata: {
                        agentType: G.agentType,
                        ...(G.agentType === TSe && { isFork: PE(G) }),
                        ...(a && { cwd: a }),
                        description: r,
                        ...(i && { name: i }),
                        ...(l.toolUseId && { toolUseId: l.toolUseId }),
                        spawnDepth: ne,
                        ...(!L && f && { model: f }),
                      },
                    }).catch((Mt) =>
                      w(`Failed to clear worktree metadata: ${Mt}`),
                    ),
                    {}
                  );
              }
              if (Rt) await Tpe(lt, Rt);
              return (
                w(`Agent worktree kept at: ${lt}`),
                { worktreePath: lt, worktreeBranch: et }
              );
            };
          if (l.abortController.signal.aborted) {
            let lt = Py(l.abortController.signal.reason);
            if (!(q && lt === "interrupt")) throw (await at(), new tl());
          }
          let Ze = await B(),
            ke = async (lt) => {
              try {
                return await lt;
              } catch (et) {
                throw (Ze(), et);
              }
            };
          if (i && i !== gV) l.agentLifecycle.registerName(i, Vc($e));
          let Qe = i && i !== gV ? i : void 0;
          if (q) {
            let lt = $e,
              et = u2e({
                agentId: lt,
                ownerAgentId: Be,
                parentAgentId: ge,
                spawnDepth: ne,
                description: r,
                prompt: e,
                model: oe,
                selectedAgent: G,
                taskRegistry: A,
                toolUseId: l.toolUseId,
                cwd: rt,
              });
            if (!yn()) tae(Be, `agent:${lt}`, A);
            if (Ae)
              await ke(
                trn({
                  observedKey: lt,
                  observedTaskId: lt,
                  observedName: Qe ?? i ?? G.agentType,
                  observedAgentType: G.agentType,
                  config: Ae,
                  ...Ce,
                }),
              );
            let gt = {
              agentId: lt,
              parentAgentId: ge,
              depth: ne,
              parentSessionId: NB(),
              agentType: "subagent",
              subagentName: G.agentType,
              displayName: Qe,
              isAsync: !0,
              isBackgroundAgent: !0,
              isBuiltIn: PE(G),
              invokingRequestId: u?.requestId,
              invocationKind: "spawn",
              invocationEmitted: !1,
              ...aZ(l.agentContext),
            };
            r8(gt, () =>
              M5e(rt, () =>
                _Ie({
                  taskId: et.agentId,
                  abortController: et.abortController,
                  makeStream: (At, $t) =>
                    lW({
                      ...ze,
                      override: {
                        ...ze.override,
                        agentId: Vc(et.agentId),
                        agentContext: gt,
                        abortController: et.abortController,
                      },
                      onCacheSafeParams: At,
                      onQueryProgress: $t,
                    }),
                  metadata: ae,
                  description: r,
                  toolUseContext: l,
                  taskRegistry: A,
                  agentIdForCleanup: lt,
                  enableSummarization: V || F || wtt(),
                  getWorktreeResult: at,
                  onRunSettled: Ze,
                }),
              ),
            );
            let Rt = l.options.tools.some((At) => Va(At, zi) || Va(At, ri));
            return (
              be("subagent_launch"),
              {
                data: {
                  isAsync: !0,
                  status: "async_launched",
                  agentId: et.agentId,
                  description: r,
                  resolvedModel: oe,
                  prompt: e,
                  outputFile: $g(et.agentId),
                  canReadOutputFile: Rt,
                },
              }
            );
          } else {
            let lt = Vc($e),
              et = {
                agentId: lt,
                parentAgentId: ge,
                depth: ne,
                parentSessionId: NB(),
                agentType: "subagent",
                subagentName: G.agentType,
                displayName: Qe,
                isAsync: !1,
                isBackgroundAgent: Oe,
                isBuiltIn: PE(G),
                invokingRequestId: u?.requestId,
                invocationKind: "spawn",
                invocationEmitted: !1,
                ...aZ(l.agentContext),
              },
              gt = r8(et, () =>
                M5e(rt, async () => {
                  let Rt = Date.now(),
                    At = oe,
                    $t = cin([], oe);
                  if (de.length > 0) {
                    let Xe = Uw(de).find((it) => it.type === "user");
                    if (Xe && Xe.type === "user" && d)
                      d({
                        type: "progress",
                        toolUseID: `agent_${u.message.id}`,
                        data: {
                          message: Xe,
                          type: "agent_progress",
                          prompt: e,
                          agentId: lt,
                          agentType: G.agentType,
                          description: r,
                          resolvedModel: At,
                          modelsUsed: $t,
                        },
                      });
                  }
                  let Mt = lAd({
                      agentId: lt,
                      ownerAgentId: Be,
                      parentAgentId: ge,
                      spawnDepth: ne,
                      description: r,
                      prompt: e,
                      model: oe,
                      selectedAgent: G,
                      taskRegistry: A,
                      toolUseId: l.toolUseId,
                      autoBackgroundMs: W ? void 0 : Uqy() || void 0,
                      cwd: rt,
                    }),
                    mt = Mt.taskId,
                    gr = Mt.cancelAutoBackground,
                    lr = Mt.abortController,
                    It = Izr(l.abortController, lr);
                  if (Ae)
                    await ke(
                      trn({
                        observedKey: lt,
                        observedTaskId: lt,
                        observedName: i ?? G.agentType,
                        observedAgentType: G.agentType,
                        config: Ae,
                        ...Ce,
                      }),
                    );
                  let fr = !1;
                  be("subagent_launch");
                  let Dt = [],
                    Tr = l.options.forwardSubagentText,
                    _r,
                    Gr = (ut) => {
                      if (fr) return;
                      if (ut.type === "query_model_change") {
                        ((At = ut.toModel), ($t = cin($t, ut.toModel)));
                        return;
                      }
                      if (ut.type === "spinner_mode") return;
                      if (
                        ut.type !== "api_metrics" &&
                        ut.type !== "set_in_progress_tool_use_ids"
                      )
                        Dt.push(ut);
                      if (!d) return;
                      if (
                        _r !== void 0 &&
                        !(ut.type === "system" && ut.subtype === "api_error")
                      )
                        ((_r = void 0),
                          d({
                            type: "progress",
                            toolUseID: `agent_${u.message.id}`,
                            data: {
                              type: "agent_api_retry",
                              resolved: !0,
                              agentId: lt,
                              agentType: G.agentType,
                            },
                          }));
                      if (ut.type === "api_metrics") {
                        d(ut);
                        return;
                      }
                      if (ut.type === "set_in_progress_tool_use_ids") return;
                      if (
                        ut.type === "progress" &&
                        (ut.data.type === "bash_progress" ||
                          ut.data.type === "powershell_progress")
                      )
                        d({
                          type: "progress",
                          toolUseID: ut.toolUseID,
                          data: ut.data,
                        });
                      if (ut.type === "system" && ut.subtype === "api_error") {
                        let Xe = pir(ut.error),
                          it = `${ut.source ?? "request_retry"}:${ut.retryAttempt}:${ut.maxRetries}:${Xe}`;
                        if (it !== _r)
                          ((_r = it),
                            d({
                              type: "progress",
                              toolUseID: `agent_${u.message.id}`,
                              data: {
                                type: "agent_api_retry",
                                agentId: lt,
                                agentType: G.agentType,
                                attempt: ut.retryAttempt,
                                maxRetries: ut.maxRetries,
                                retryDelayMs: ut.retryInMs,
                                errorStatus: ut.error.status,
                                errorCategory: Xe,
                              },
                            }));
                        return;
                      }
                      if (
                        ut.type === "progress" &&
                        ut.data.type === "agent_progress"
                      ) {
                        if (Tr)
                          d({
                            type: "progress",
                            toolUseID: ut.toolUseID,
                            parentToolUseID: ut.parentToolUseID,
                            data: ut.data,
                          });
                        return;
                      }
                      if (ut.type !== "assistant" && ut.type !== "user") return;
                      if (ut.type === "assistant") {
                        let Xe = c0o(ut);
                        if (Xe > 0)
                          d({ type: "response_length", op: "add", delta: Xe });
                      }
                      for (let Xe of Uw([ut])) {
                        let it = Xe.message.content[0];
                        if (
                          !Tr &&
                          it.type !== "tool_use" &&
                          it.type !== "tool_result"
                        )
                          continue;
                        d({
                          type: "progress",
                          toolUseID: `agent_${u.message.id}`,
                          data: {
                            message: Xe,
                            type: "agent_progress",
                            prompt: "",
                            agentId: lt,
                            agentType: G.agentType,
                            description: r,
                            resolvedModel: At,
                            modelsUsed: $t,
                          },
                        });
                      }
                    },
                    rn = W
                      ? void 0
                      : setTimeout(
                          (ut) => {
                            if ((ut.showBackgroundHint?.(), ut.toolUseId))
                              ut.emitToolProgress?.({
                                kind: "background_hint",
                                toolUseId: ut.toolUseId,
                              });
                          },
                          Fqy,
                          l,
                        ),
                    Nn = {},
                    $n = async () => ((Nn = await at()), Nn),
                    we = _Ie({
                      taskId: mt,
                      abortController: lr,
                      makeStream: (ut, Xe) =>
                        lW({
                          ...ze,
                          override: {
                            ...ze.override,
                            agentId: lt,
                            agentContext: et,
                            abortController: lr,
                          },
                          onCacheSafeParams: ut,
                          onQueryProgress: Xe,
                        }),
                      metadata: ae,
                      description: r,
                      toolUseContext: l,
                      taskRegistry: A,
                      agentIdForCleanup: lt,
                      enableSummarization: wtt(),
                      getWorktreeResult: $n,
                      onMessage: Gr,
                      shouldNotifyOwner: () => fr,
                      onRunSettled: Ze,
                    }),
                    Me;
                  try {
                    let ut;
                    try {
                      ut = W
                        ? await we.then(() => "done")
                        : await Promise.race([
                            we.then(() => "done"),
                            Mt.backgroundSignal.then(() => "backgrounded"),
                          ]);
                    } catch (In) {
                      if (((ut = "done"), In instanceof tl)) {
                        if (
                          (O("tengu_agent_tool_terminated", {
                            agent_type: ae.agentType,
                            model: ae.resolvedAgentModel,
                            final_model: Uu($t.at(-1) ?? ae.resolvedAgentModel),
                            model_swapped: $t.length > 1,
                            duration_ms: Date.now() - ae.startTime,
                            is_async: !1,
                            is_built_in_agent: ae.isBuiltInAgent,
                            agent_depth: ae.agentDepth,
                            reason: Ee("user_cancel_sync"),
                          }),
                          !(
                            lr.signal.aborted &&
                            !l.abortController.signal.aborted
                          ))
                        )
                          throw In;
                        Me = _n(In);
                      } else
                        (w(`Sync agent error: ${le(In)}`, { level: "error" }),
                          (Me = _n(In)));
                    }
                    let Xe = ut === "done" && !Me && zpr(mt, A);
                    if (Xe) gan(mt, A);
                    let it = A.get(mt)?.status,
                      ft =
                        ut === "backgrounded" &&
                        !Xe &&
                        it !== void 0 &&
                        it !== "running" &&
                        !zpr(mt, A);
                    if ((ut === "backgrounded" && !ft) || Xe) {
                      if (((fr = !0), It(), Qrd(lt), !yn()))
                        tae(Be, `agent:${mt}`, A);
                      let In = l.options.tools.some(
                        (ni) => Va(ni, zi) || Va(ni, ri),
                      );
                      return {
                        data: {
                          isAsync: !0,
                          status: "async_launched",
                          agentId: mt,
                          description: r,
                          resolvedModel: At,
                          ...($t.length > 1 && { modelsUsed: [...$t] }),
                          prompt: e,
                          outputFile: $g(mt),
                          canReadOutputFile: In,
                        },
                      };
                    }
                    let cr = Dt.findLast(
                      (In) => In.type !== "system" && In.type !== "progress",
                    );
                    if (cr && Ufe(cr))
                      throw (
                        O("tengu_agent_tool_terminated", {
                          agent_type: ae.agentType,
                          model: ae.resolvedAgentModel,
                          final_model: Uu($t.at(-1) ?? ae.resolvedAgentModel),
                          model_swapped: $t.length > 1,
                          duration_ms: Date.now() - ae.startTime,
                          is_async: !1,
                          is_built_in_agent: ae.isBuiltInAgent,
                          agent_depth: ae.agentDepth,
                          reason: Ee("user_cancel_sync"),
                        }),
                        new tl()
                      );
                    let Pt,
                      er = Dt;
                    if (Me) {
                      let In = vpd(Me, Dt);
                      ((Pt = In.cutoffNote),
                        (er = In.history),
                        w(
                          `Sync agent recovering from error with ${er.length} messages`,
                        ));
                    }
                    let Yr = oRs(
                        er,
                        lt,
                        { ...ae, modelsUsed: $t },
                        { suppressTelemetry: !Me },
                      ),
                      jr = await uin({
                        agentMessages: Dt,
                        tools: l.options.tools,
                        toolPermissionContext: En(l),
                        abortSignal: l.abortController.signal,
                        subagentType: G.agentType,
                        totalToolUseCount: Yr.totalToolUseCount,
                      });
                    if (jr)
                      Yr.content = [{ type: "text", text: jr }, ...Yr.content];
                    if (Pt)
                      Yr.content = [{ type: "text", text: Pt }, ...Yr.content];
                    return {
                      data: { status: "completed", prompt: e, ...Yr, ...Nn },
                    };
                  } finally {
                    if (rn) clearTimeout(rn);
                    if ((l.clearBackgroundHint?.(), l.toolUseId))
                      l.emitToolProgress?.({
                        kind: "clear",
                        toolUseId: l.toolUseId,
                      });
                    if ((gr?.(), It(), !fr)) {
                      let ut = A.get(mt),
                        Xe = hc(ut) ? ut.progress : void 0;
                      (cAd(mt, A),
                        Vp(
                          mt,
                          ut?.status === "failed"
                            ? "failed"
                            : ut?.status === "killed"
                              ? "stopped"
                              : "completed",
                          {
                            toolUseId: l.toolUseId,
                            summary: r,
                            usage: {
                              total_tokens: Xe?.tokenCount ?? 0,
                              tool_uses: Xe?.toolUseCount ?? 0,
                              duration_ms: Date.now() - Rt,
                            },
                          },
                        ));
                    }
                  }
                }),
              );
            return ke(gt);
          }
        },
        isReadOnly() {
          return !0;
        },
        toAutoClassifierInput(e) {
          let t = e,
            r = [t.subagent_type].filter((o) => o !== void 0);
          return `${r.length > 0 ? `(${r.join(", ")}): ` : ": "}${t.prompt}`;
        },
        isConcurrencySafe() {
          return !0;
        },
        userFacingName: KHo,
        userFacingNameBackgroundColor: cmr,
        getActivityDescription(e) {
          return e?.description?.replace(/\s+/g, " ").trim() || "Running task";
        },
        async checkPermissions(e, t) {
          if (En(t).mode === "auto")
            return {
              behavior: "passthrough",
              message: "Agent tool requires permission to spawn subagents.",
            };
          return { behavior: "allow", updatedInput: e };
        },
        mapToolResultToToolResultBlockParam(e, t) {
          let r = e;
          if (
            typeof r === "object" &&
            r !== null &&
            "status" in r &&
            r.status === "teammate_spawned"
          ) {
            let n = r;
            return {
              tool_use_id: t,
              type: "tool_result",
              content: [
                {
                  type: "text",
                  text: `Spawned successfully. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the ID below, into a user-facing reply.)
agent_id: ${n.teammate_id}
name: ${n.name}
The agent is now running and will receive instructions via mailbox.`,
                },
              ],
            };
          }
          if (e.status === "remote_launched") {
            let n = e;
            return {
              tool_use_id: t,
              type: "tool_result",
              content: [
                {
                  type: "text",
                  text: `Cloud agent launched. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the ID below, into a user-facing reply.)
taskId: ${n.taskId}
session_url: ${n.sessionUrl}
output_file: ${n.outputFile} (final results land here only after the completion notification; until then it holds a partial, still-growing event log)
The agent is running in the cloud. You will be notified automatically when it completes. Do not report or predict its results before that notification arrives.
In your own words, briefly tell the user what you launched \u2014 do not echo this tool result \u2014 and end your response.`,
                },
              ],
            };
          }
          if (e.status === "async_launched") {
            let n = `Async agent launched successfully. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the agentId below, into a user-facing reply.)
agentId: ${e.agentId} (internal ID - do not mention to user. Use SendMessage with to: '${e.agentId}', summary: '<5-10 word recap>' to continue this agent.)
The agent is working in the background. You will be notified automatically when it completes. You know nothing about its results until that notification arrives \u2014 do not report, assume, or predict them; continue other work or respond to the user in the meantime.`,
              o = e.canReadOutputFile
                ? `Do not duplicate this agent's work \u2014 avoid working with the same files or topics it is using.
output_file: ${e.outputFile}
Do NOT ${zi} or tail this file via the shell tool \u2014 it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.`
                : "In your own words, briefly tell the user what you launched \u2014 do not echo this tool result. Agent results will arrive in a subsequent message. If the user asks for progress, say the agent is still running.",
              i = `${n}
${o}`;
            return {
              tool_use_id: t,
              type: "tool_result",
              content: [{ type: "text", text: i }],
            };
          }
          if (e.status === "completed") {
            let n = e.worktreePath
                ? `
worktreePath: ${e.worktreePath}${
                    e.worktreeBranch
                      ? `
worktreeBranch: ${e.worktreeBranch}`
                      : ""
                  }`
                : "",
              o =
                e.content.length > 0
                  ? e.content
                  : [
                      {
                        type: "text",
                        text: "(Subagent completed but returned no output.)",
                      },
                    ];
            if (e.agentType && _ou.has(e.agentType) && !n)
              return { tool_use_id: t, type: "tool_result", content: o };
            return {
              tool_use_id: t,
              type: "tool_result",
              content: [
                ...o,
                {
                  type: "text",
                  text: `agentId: ${e.agentId} (use SendMessage with to: '${e.agentId}', summary: '<5-10 word recap>' to continue this agent)${n}
<usage>subagent_tokens: ${e.totalTokens}
tool_uses: ${e.totalToolUseCount}
duration_ms: ${e.totalDurationMs}</usage>`,
                },
              ],
            };
          }
          throw (
            pe("subagent_launch", "subagent_unexpected_result_status"),
            Error(`Unexpected agent tool result status: ${e.status}`)
          );
        },
      })));
  });
