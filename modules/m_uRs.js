// Module: uRs (lines 409723-410166)
  var uRs = S(() => {
    hin();
    _pt();
    pt();
    Jm();
    Inn();
    Ss();
    jl();
    Ge();
    bh();
    H$e();
    Dh();
    Mk();
    Vn();
    pt();
    Lm();
    zt();
    vt();
    Rnn();
    Yh();
    oW();
    vo();
    si();
    _Is();
    Pr();
    hpe();
    Zpt();
    eU();
    Mfe();
    $Is();
    yIe();
    gPt();
    aRs();
    Bze();
    Ipd();
    xf();
    ((z$y = Se(() =>
      v.object({
        skill: v
          .string()
          .describe(
            "The name of a skill from the available-skills list. Do not guess names.",
          ),
        args: v
          .string()
          .optional()
          .describe("Optional arguments for the skill"),
      }),
    )),
      (K$y = Se(() => {
        let e = v.object({
            success: v.boolean().describe("Whether the skill is valid"),
            commandName: v.string().describe("The name of the skill"),
            allowedTools: v
              .array(v.string())
              .optional()
              .describe("Tools allowed by this skill"),
            model: v
              .string()
              .optional()
              .describe("Model override if specified"),
            status: v.literal("inline").optional().describe("Execution status"),
          }),
          t = v.object({
            success: v
              .boolean()
              .describe("Whether the skill completed successfully"),
            commandName: v.string().describe("The name of the skill"),
            status: v.literal("forked").describe("Execution status"),
            agentId: v
              .string()
              .describe("The ID of the sub-agent that executed the skill"),
            result: v
              .string()
              .describe("The result from the forked skill execution"),
            background: v
              .boolean()
              .optional()
              .describe(
                "True when the sub-agent was launched in the background: `result` describes the launch, and the skill outcome arrives later as a task notification.",
              ),
          });
        return v.union([e, t]);
      })),
      (Jpr = Ui({
        name: Ph,
        searchHint: "invoke a slash-command skill",
        isEnabled() {
          if (OG()) return !1;
          return !0;
        },
        maxResultSizeChars: 1e5,
        get inputSchema() {
          return z$y();
        },
        get outputSchema() {
          return K$y();
        },
        description: async ({ skill: e }) => `Execute skill: ${e}`,
        prompt: async () => Ryo(Rl()),
        toAutoClassifierInput: ({ skill: e }) => e ?? "",
        async validateInput({ skill: e }, t) {
          let r = e.trim();
          if (!r)
            return (
              pe("skill_invoke", "skill_invoke_empty_name"),
              {
                result: !1,
                message: `Invalid skill format: ${e}`,
                errorCode: 1,
              }
            );
          let n = r.startsWith("/");
          if (n) O("tengu_skill_tool_slash_prefix", {});
          let o = n ? r.substring(1) : r,
            i;
          if (Apt()) {
            let c = await FAo(o);
            if (!c.ok) i = c.reason;
          }
          let s = await cRs(t),
            a = Tv(o, s);
          if (i !== void 0 && (!a || dsd(a)))
            return (
              pe("skill_invoke", "skill_invoke_not_materialized"),
              {
                result: !1,
                message: `Skill ${o} could not be downloaded (${i}). Proceed without it.`,
                errorCode: 10,
              }
            );
          if (!a) {
            let c = yIs(s, o, t.options.spawnedBySkill);
            if (c.length > 0)
              return (
                pe("skill_invoke", "skill_invoke_not_found"),
                {
                  result: !1,
                  message: `Unknown skill: ${o}. Directory-scoped variants exist: ${c.map((d) => d.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
                  errorCode: 2,
                }
              );
            let u = Spt(
              o,
              s.map((d) => ({ name: Sd(d), aliases: d.aliases })),
              { maxEditDistance: 2 },
            );
            return (
              pe("skill_invoke", "skill_invoke_not_found"),
              {
                result: !1,
                message: u
                  ? `Unknown skill: ${o}. Did you mean ${u}?`
                  : `Unknown skill: ${o}`,
                errorCode: 2,
              }
            );
          }
          if (
            a.type === "prompt" &&
            (a.context === "fork" ||
              (a.getContext !== void 0 &&
                t.options.spawnedByForkedSkill === !0)) &&
            t.options.spawnedBySkill === xV(a)
          )
            return (
              pe("skill_invoke", "skill_invoke_fork_recursion"),
              O("tengu_skill_tool_fork_recursion_blocked", {}),
              {
                result: !1,
                message: `Skill ${o} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${Ph} tool.`,
                errorCode: 9,
              }
            );
          let l = fin(a, {
            commandName: o,
            userTypedThisTurn: V$y(o, t),
            isMainSession: t.agentId === void 0,
            permissionContext: void 0,
          });
          if (l !== null) {
            switch (l.reason) {
              case "disable_model_invocation":
                pe("skill_invoke", "skill_invoke_model_disabled");
                break;
              case "not_allowlisted":
                pe("skill_invoke", "skill_invoke_not_allowlisted");
                break;
              case "override_disabled":
                pe(
                  "skill_invoke",
                  l.killSwitchOnly
                    ? "skill_invoke_bundled_skills_disabled"
                    : "skill_invoke_override_disabled",
                );
                break;
              case "not_prompt_type":
                pe("skill_invoke", "skill_invoke_not_prompt_type");
                break;
              case "mcp_prompt":
                break;
              case "deny_rule":
                break;
            }
            return { result: !1, message: l.message, errorCode: l.errorCode };
          }
          return { result: !0 };
        },
        async checkPermissions({ skill: e, args: t }, r) {
          let n = e.trim(),
            o = n.startsWith("/") ? n.substring(1) : n,
            i = En(r),
            s = await cRs(r),
            a = Tv(o, s),
            l = eve(i, Jpr, "deny");
          for (let [d, p] of l.entries())
            if (sRs(d, o, a))
              return {
                behavior: "deny",
                message: "Skill execution blocked by permission rules",
                decisionReason: { type: "rule", rule: p },
              };
          let c = eve(i, Jpr, "allow");
          for (let [d, p] of c.entries())
            if (Hpd(d, o, a))
              return {
                behavior: "allow",
                updatedInput: { skill: e, args: t },
                decisionReason: { type: "rule", rule: p },
              };
          if (a?.type === "prompt" && X$y(a))
            return {
              behavior: "allow",
              updatedInput: { skill: e, args: t },
              decisionReason: void 0,
            };
          let u = [
            {
              type: "addRules",
              rules: [{ toolName: Ph, ruleContent: o }],
              behavior: "allow",
              destination: "localSettings",
            },
            {
              type: "addRules",
              rules: [{ toolName: Ph, ruleContent: `${o}:*` }],
              behavior: "allow",
              destination: "localSettings",
            },
          ];
          return {
            behavior: "ask",
            message: `Execute skill: ${o}`,
            decisionReason: void 0,
            suggestions: u,
            updatedInput: { skill: e, args: t },
            metadata: a ? { command: a } : void 0,
          };
        },
        async call({ skill: e, args: t }, r, n, o, i) {
          let s = e.trim(),
            a = s.startsWith("/") ? s.substring(1) : s,
            l = r.options.activeSkill,
            c = l ?? r.options.spawnedBySkill;
          r.options.activeSkill = a;
          let u = await cRs(r),
            d = Tv(a, u);
          if (d) r.options.activeSkill = xV(d);
          if ((zon(a), d?.type === "prompt" && d.pluginInfo))
            T$(d.pluginInfo.repository);
          if (d?.type === "prompt" && NAo(d, t || "", r) === "fork")
            try {
              return await q$y(d, a, t, r, n, o, c, i);
            } finally {
              r.options.activeSkill = l;
            }
          let p = `${r.agentId ?? ""}:${d?.name ?? a}`,
            f = fOe().get(p),
            { processPromptSlashCommand: m } = await Promise.resolve().then(
              () => (nft(), tin),
            ),
            g = await m(a, t || "", u, r);
          if (!g.shouldQuery)
            throw (
              pe("skill_invoke", "skill_invoke_process_failed"),
              Error("Command processing failed")
            );
          let y = g.allowedTools || [],
            _ = g.model,
            E = g.effort,
            A = rae().has(a),
            b = d?.type === "prompt" && d.source === "bundled",
            T = d?.type === "prompt" && Rpd(d),
            { sanitizedName: C, skillNameHash: I } = x$e({
              rawName: a,
              canonicalName: d?.name ?? a,
              isMcp: d?.loadedFrom === "mcp",
              isBuiltIn: A,
              isBundled: b,
              isOfficial: T,
            }),
            R = r.queryTracking?.depth ?? 0,
            k = R > 0 ? "nested-skill" : "claude-proactive",
            D = r.agentId,
            M = d?.type === "prompt" ? d.source : void 0;
          if (d?.type === "prompt" && d.pluginInfo)
            j8(d.pluginInfo.repository, "skill");
          (O("tengu_skill_tool_invocation", {
            command_name: C,
            _PROTO_skill_name: a,
            ...I,
            execution_context: Ee("inline"),
            invocation_trigger: fe(k),
            query_depth: R,
            ...xas(c, c !== void 0 && p2e().has(c)),
            ...(D && { parent_agent_id: wr(D) }),
            ...Elt(
              M,
              d?.loadedFrom,
              d?.kind,
              d?.type === "prompt" ? d.createdBy : void 0,
            ),
            ..._dr(M, a),
            attribution_shown: knn(M, a) !== null,
            ...(d?.type === "prompt" && {
              skill_content_chars: d.contentLength,
            }),
            ...!1,
            ...(d?.type === "prompt" &&
              d.pluginInfo && {
                ...Alt(d.pluginInfo),
                plugin_name: T
                  ? d.pluginInfo.pluginManifest.name
                  : "third-party",
                plugin_repository: T ? d.pluginInfo.repository : "third-party",
              }),
          }),
            mor(a, d, k));
          let L = r.toolUseId ?? Z$y(o, Ph),
            N = g.messages.filter((G) => {
              if (G.type === "progress") return !1;
              if (G.type === "user" && "message" in G) {
                let V = G.message.content;
                if (typeof V === "string" && V.includes(`<${ST}>`)) return !1;
              }
              return !0;
            }),
            P = Q$y(
              J$y({
                messages: N,
                contextMessages: r.messages,
                commandName: a,
                args: t,
                priorContent: f?.content,
                renderedContent: fOe().get(p)?.content,
              }),
              L,
            );
          (w(`SkillTool returning ${P.length} newMessages for skill ${a}`),
            be("skill_invoke"));
          let B = [];
          if (y.length > 0) B.push({ kind: "allowed_tools", allowedTools: y });
          if (_)
            B.push({
              kind: "model",
              mainLoopModel: PGr(_, r.options.mainLoopModel),
            });
          if (E !== void 0) B.push({ kind: "effort", effort: E });
          return {
            data: {
              success: !0,
              commandName: a,
              allowedTools: y.length > 0 ? y : void 0,
              model: _,
            },
            newMessages: P,
            ...(B.length > 0 && { contextLayers: B }),
          };
        },
        mapToolResultToToolResultBlockParam(e, t) {
          if ("status" in e && e.status === "forked")
            return {
              type: "tool_result",
              tool_use_id: t,
              content: e.background
                ? `Skill "${e.commandName}" launched (forked execution, running in the background).

${e.result}`
                : `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`,
            };
          return {
            type: "tool_result",
            tool_use_id: t,
            content: `Launching skill: ${e.commandName}`,
          };
        },
        renderToolUseMessage: kpd,
      })),
      (Y$y = new Set([
        "type",
        "progressMessage",
        "contentLength",
        "contentHash",
        "argNames",
        "model",
        "effort",
        "source",
        "pluginInfo",
        "disableNonInteractive",
        "skillRoot",
        "context",
        "agent",
        "background",
        "getPromptForCommand",
        "getEffort",
        "getContext",
        "declaredFields",
        "createdBy",
        "fallback",
        "unqualifiedName",
        "urlTemplate",
        "name",
        "description",
        "menuDescription",
        "hasUserSpecifiedDescription",
        "isEnabled",
        "isHidden",
        "aliases",
        "subcommands",
        "isMcp",
        "argumentHint",
        "whenToUse",
        "paths",
        "version",
        "disableModelInvocation",
        "userInvocable",
        "loadedFrom",
        "immediate",
        "userFacingName",
      ])));
  });
