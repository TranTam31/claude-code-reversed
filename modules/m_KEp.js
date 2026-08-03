// Module: KEp (lines 666205-666340)
  var KEp = S(() => {
    bfe();
    yNs();
    pt();
    Ab();
    r2();
    ES();
    Yh();
    jl();
    KOt();
    Ge();
    vo();
    Jdt();
    dv();
    Dh();
    WOt();
    Ga();
    om();
    Mfe();
    Nw();
    Umr();
    yIe();
    qEp = {
      async spawnFirstRun({
        observerDefinition: e,
        pairing: t,
        framingPrompt: r,
        digest: n,
        toolUseContext: o,
        canUseTool: i,
      }) {
        let s = t.observerTaskId;
        await K7_(s, e);
        let { taskRegistry: a } = o,
          l = En(o),
          c = i7t(t.armingPermissionMode, l.mode) ?? l.mode,
          u = { ...l, mode: c },
          d = o.options.tools.filter(zD),
          p = `${e.agentType}@${t.observedEnvelopeName}`,
          f = NI(o.agentContext) + 1,
          m = wIo(
            hte(e, z7(u, HUe(d), { skipReplFilter: !0 }), !0, !1, !1, f)
              .resolvedTools,
          ),
          g = ite(e.model, o.options.mainLoopModel, void 0, u.mode),
          y = u2e({
            agentId: s,
            ownerAgentId: Si(),
            spawnDepth: f,
            description: p,
            prompt: r,
            model: g,
            selectedAgent: e,
            taskRegistry: a,
            cwd: void 0,
            isObserver: !0,
          });
        Ffe(s, a);
        let _ = {
            prompt: r,
            resolvedAgentModel: g,
            isBuiltInAgent: PE(e),
            startTime: Date.now(),
            agentType: e.agentType,
            agentDepth: f,
            isAsync: !0,
            source: e.source,
            pluginId: jFe(e) ? Ri(e.plugin) : void 0,
          },
          E = {
            agentId: s,
            parentAgentId: o.agentId,
            depth: f,
            parentSessionId: NB(),
            agentType: "subagent",
            subagentName: e.agentType,
            isBuiltIn: PE(e),
            invocationKind: "spawn",
            invocationEmitted: !1,
            ...aZ(o.agentContext),
          };
        await r8(E, () =>
          _Ie({
            taskId: s,
            abortController: y.abortController,
            makeStream: (A, b) =>
              lW({
                agentDefinition: e,
                promptMessages: [
                  zr({ content: r }),
                  zr({ content: n, origin: { kind: "observer-activity" } }),
                ],
                toolUseContext: o,
                canUseTool: i,
                isAsync: !0,
                querySource: EUe(e.agentType, PE(e)),
                availableTools: m,
                useExactTools: !0,
                spawnMode: c,
                override: {
                  agentId: Vc(s),
                  abortController: y.abortController,
                },
                onCacheSafeParams: A,
                onQueryProgress: b,
              }),
            metadata: _,
            description: p,
            toolUseContext: o,
            taskRegistry: a,
            agentIdForCleanup: s,
            enableSummarization: !1,
            getWorktreeResult: async () => ({}),
          }),
        );
      },
      async deliver({
        observerTaskId: e,
        digest: t,
        toolUseContext: r,
        canUseTool: n,
        armingPermissionMode: o,
      }) {
        await fve({
          agentId: e,
          prompt: t,
          promptOrigin: { kind: "observer-activity" },
          toolUseContext: r,
          canUseTool: n,
          awaitCompletion: !0,
          suppressOwnerNotification: !0,
          workerPermissionMode: o,
        });
      },
    };
  });
