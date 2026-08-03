// Module: Hwd (lines 472531-472874)
  var Hwd = S(() => {
    ts();
    Vn();
    pt();
    z8e();
    zt();
    Zr();
    dH();
    jQt();
    Ss();
    Ge();
    st();
    Ni();
    vo();
    si();
    Zt();
    Twd();
    zPt();
    jl();
    ((gzy = Se(() =>
      v.strictObject({
        query: v.string().min(2).describe("The search query to use"),
        allowed_domains: v
          .array(v.string())
          .optional()
          .describe("Only include search results from these domains"),
        blocked_domains: v
          .array(v.string())
          .optional()
          .describe("Never include search results from these domains"),
      }),
    )),
      (yzy = Se(() => {
        let e = v.object({
          title: v.string().describe("The title of the search result"),
          url: v.string().describe("The URL of the search result"),
        });
        return v.object({
          tool_use_id: v.string().describe("ID of the tool use"),
          content: v.array(e).describe("Array of search hits"),
        });
      })),
      (_zy = Se(() =>
        v.object({
          query: v.string().describe("The search query that was executed"),
          results: v
            .array(v.union([yzy(), v.string()]))
            .describe("Search results and/or text commentary from the model"),
          durationSeconds: v
            .number()
            .describe("Time taken to complete the search operation"),
          searchCount: v
            .number()
            .optional()
            .describe("Number of web searches performed"),
        }),
      )));
    xwd = Ui({
      name: n7,
      searchHint: "search the web for current information",
      maxResultSizeChars: 1e5,
      shouldDefer: !0,
      async description(e) {
        return `Claude wants to search the web for: ${e.query}`;
      },
      userFacingName() {
        return "Web Search";
      },
      getToolUseSummary: Cwd,
      getActivityDescription(e) {
        let t = Cwd(e);
        return t ? `Searching for ${t}` : "Searching the web";
      },
      isEnabled() {
        let e = kn();
        if (e === "firstParty" || c5(e)) return !0;
        if (e === "gateway") return !1;
        if (e === "vertex") {
          let t = Oi();
          return (
            t.includes("claude-fable-5") ||
            t.includes("claude-opus-4") ||
            t.includes("claude-opus-5") ||
            t.includes("claude-sonnet-5") ||
            t.includes("claude-sonnet-4") ||
            t.includes("claude-haiku-4")
          );
        }
        if (e === "foundry") return !0;
        return !1;
      },
      get inputSchema() {
        return gzy();
      },
      get outputSchema() {
        return _zy();
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
      },
      toAutoClassifierInput(e) {
        return e.query;
      },
      async checkPermissions(e) {
        return {
          behavior: "passthrough",
          message: "WebSearchTool requires permission.",
          suggestions: [
            {
              type: "addRules",
              rules: [{ toolName: n7 }],
              behavior: "allow",
              destination: "localSettings",
            },
          ],
        };
      },
      async prompt({ model: e }) {
        return eMu(e);
      },
      renderToolUseMessage(
        { query: e, allowed_domains: t, blocked_domains: r },
        { verbose: n },
      ) {
        if (!e) return null;
        let o = "";
        if (e) o += `"${e}"`;
        if (n) {
          if (t && t.length > 0)
            o += `, only allowing domains: ${t.join(", ")}`;
          if (r && r.length > 0) o += `, blocking domains: ${r.join(", ")}`;
        }
        return o;
      },
      extractSearchText() {
        return "";
      },
      async validateInput(e) {
        let { query: t, allowed_domains: r, blocked_domains: n } = e;
        if (!t.length)
          return { result: !1, message: "Error: Missing query", errorCode: 1 };
        if (r?.length && n?.length)
          return {
            result: !1,
            message:
              "Error: Cannot specify both allowed_domains and blocked_domains in the same request",
            errorCode: 2,
          };
        return { result: !0 };
      },
      async call(e, t, r, n, o) {
        let i = performance.now(),
          { query: s } = e,
          a = hMu(),
          l = t.taskRegistry.getWebSearchCalls();
        if (l >= a)
          return (
            pe("tool_web_search", "web_search_session_cap", {
              max_web_searches_per_session: a,
            }),
            {
              data: {
                query: s,
                results: [
                  `Web search was not performed: this session has used its web search budget (${l} of ${a} WebSearch calls). Continue with the information already gathered instead of issuing more searches. If more searches are genuinely needed, ask the user to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION.`,
                ],
                durationSeconds: 0,
                searchCount: 0,
              },
            }
          );
        if ((t.taskRegistry.incrementWebSearchCalls(), Awd())) {
          let I = await wwd(s, t.abortController.signal, {
              allowed_domains: e.allowed_domains,
              blocked_domains: e.blocked_domains,
            }),
            R = (performance.now() - i) / 1000;
          if (!I.ok)
            throw new Dr(
              Ie({
                error_type: I.errorType,
                source: I.source,
                message: I.errorMessage,
              }),
              "web-search-ccr-proxy",
            );
          if (o)
            o({
              type: "progress",
              toolUseID: "ccr-proxy-search-1",
              data: {
                type: "search_results_received",
                resultCount: I.results.length,
                query: s,
              },
            });
          return {
            data: {
              query: s,
              results: [
                { tool_use_id: "ccr-proxy-search-1", content: I.results },
              ],
              durationSeconds: R,
              searchCount: 1,
            },
          };
        }
        let c = zr({ content: "Perform a web search for the query: " + s }),
          u = {
            type: "web_search_20250305",
            name: "web_search",
            allowed_domains: e.allowed_domains,
            blocked_domains: e.blocked_domains,
            max_uses: 8,
          },
          p = Ke("tengu_plum_vx3", !1) ? OM() : t.options.mainLoopModel;
        if (kn() === "foundry" && !tNe(p, "web_search"))
          throw Error(
            "Web search is not available on this Foundry deployment.",
          );
        let f = fpr({
            messages: [c],
            systemPrompt: dp([
              "You are an assistant for performing a web search tool use",
            ]),
            thinkingConfig: { type: "disabled" },
            tools: [],
            signal: t.abortController.signal,
            options: {
              getToolPermissionContext: async () => En(t),
              model: p,
              toolChoice: { type: "tool", name: "web_search" },
              isNonInteractiveSession: t.options.isNonInteractiveSession,
              hasAppendSystemPrompt: !!t.options.appendSystemPrompt,
              extraToolSchemas: [u],
              querySource: "web_search_tool",
              enablePromptCaching: !1,
              agents: t.options.agentDefinitions.activeAgents,
              mcpTools: [],
              agentId: t.agentId,
              agentContext: t.agentContext,
              stickyBetas: LG(ON()),
              effortValue: Sb(t),
            },
          }),
          m = [],
          g = null,
          y = "",
          _ = 0,
          E = new Map(),
          A = null;
        for await (let I of f) {
          if (I.type === "assistant") {
            if (I.isApiErrorMessage) {
              A = Jc(I.message.content);
              continue;
            }
            m.push(...I.message.content);
            continue;
          }
          if (I.type !== "stream_event") continue;
          if (I.event?.type === "content_block_start") {
            let k = I.event.content_block;
            if (k?.type === "server_tool_use") {
              ((g = k.id), (y = ""));
              continue;
            }
            if (k?.type === "web_search_tool_result") {
              let D = k.tool_use_id,
                M = E.get(D) || s,
                L = k.content;
              if ((_++, o))
                o({
                  type: "progress",
                  toolUseID: D || `search-progress-${_}`,
                  data: {
                    type: "search_results_received",
                    resultCount: Array.isArray(L) ? L.length : 0,
                    query: M,
                  },
                });
            }
            continue;
          }
          if (I.event?.type !== "content_block_delta" || !g) continue;
          let R = I.event.delta;
          if (R?.type !== "input_json_delta" || !R.partial_json) continue;
          y += R.partial_json;
          try {
            let k = y.match(/"query"\s*:\s*"((?:[^"\\]|\\.)*)"/);
            if (!k?.[1]) continue;
            let D = Bt('"' + k[1] + '"');
            if (E.has(g) && E.get(g) === D) continue;
            if ((E.set(g, D), _++, o))
              o({
                type: "progress",
                toolUseID: `search-progress-${_}`,
                data: { type: "query_update", query: D },
              });
          } catch {}
        }
        if (kn() === "foundry" && !tNe(p, "web_search"))
          throw Error(
            "Web search is not available on this Foundry deployment.",
          );
        let T = (performance.now() - i) / 1000,
          C = bzy(m, s, T);
        if (A !== null && C.results.length === 0)
          throw new Dr(A, "web-search-side-query-api-error");
        return { data: C };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let { query: r, results: n } = e,
          o = `Web search results for query: "${r}"

`;
        return (
          (n ?? []).forEach((i) => {
            if (i == null) return;
            if (typeof i === "string")
              o +=
                i +
                `

`;
            else if (i.content?.length > 0)
              o += `Links: ${Ie(i.content)}

`;
            else
              o += `No links found.

`;
          }),
          (o += `
REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.`),
          { tool_use_id: t, type: "tool_result", content: o.trim() }
        );
      },
    });
  });
