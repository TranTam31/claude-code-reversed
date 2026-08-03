// Module: Ise (lines 332081-332287)
  var Ise = S(() => {
    Zg();
    gd();
    bl();
    ZN();
    Wu();
    vt();
    Eo();
    hn();
    Mw();
    Ge();
    Qr();
    PM();
    ts();
    jp();
    Un();
    zt();
    y_o();
    V5e();
    Iyy = new Set([
      "ECONNABORTED",
      "ECONNRESET",
      "ECONNREFUSED",
      "ETIMEDOUT",
      "EAI_AGAIN",
      "ERR_SOCKET_CLOSED",
      "ERR_PROXY_TUNNEL",
    ]);
    Zut = qr(async () => {
      let e = 0;
      GLt = void 0;
      try {
        let t = su(process.env.ENABLE_CLAUDEAI_MCP_SERVERS),
          r = Ixt();
        if (t || r)
          return (
            w(
              `[claudeai-mcp] Disabled via ${t ? "env var" : "disableClaudeAiConnectors setting"}`,
            ),
            O("tengu_claudeai_mcp_eligibility", {
              state: t ? Ee("disabled_env_var") : Ee("disabled_setting"),
            }),
            {}
          );
        if (fd("mcpClaudeAi"))
          return (
            w("[claudeai-mcp] Disabled in safe mode"),
            O("tengu_claudeai_mcp_eligibility", { state: Ee("safe_mode") }),
            {}
          );
        if (!Pc())
          return (
            w("[claudeai-mcp] Disabled on third-party provider"),
            O("tengu_claudeai_mcp_eligibility", {
              state: Ee("third_party_provider"),
            }),
            {}
          );
        if (!ii()) {
          if (
            (w("[claudeai-mcp] Disabled: API-key auth precedence active"),
            O("tengu_claudeai_mcp_eligibility", {
              state: Ee("api_key_precedence"),
            }),
            ms()?.scopes?.includes("user:mcp_servers"))
          )
            GLt = {
              level: "warn",
              message:
                "claude.ai connectors are disabled because ANTHROPIC_API_KEY or another auth source is set and takes precedence over your claude.ai login \xB7 Unset it to load your organization's connectors",
            };
          return {};
        }
        await Ry();
        let n = ms();
        if (!n?.accessToken)
          return (
            w("[claudeai-mcp] No access token"),
            O("tengu_claudeai_mcp_eligibility", {
              state: Ee("no_oauth_token"),
            }),
            {}
          );
        if (!n.scopes?.includes("user:mcp_servers")) {
          let p = process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
            ? "[claudeai-mcp] inference token lacks user:mcp_servers scope \u2014 claude.ai org connectors disabled (locally-configured MCP servers in managed-mcp.json / .claude.json / .mcp.json are NOT affected by this check)"
            : `[claudeai-mcp] Missing user:mcp_servers scope (scopes=${n.scopes?.join(",") || "none"})`;
          return (
            w(p),
            O("tengu_claudeai_mcp_eligibility", { state: Ee("missing_scope") }),
            {}
          );
        }
        let i = `${Ds().BASE_API_URL}/v1/mcp_servers?limit=1000`;
        w(`[claudeai-mcp] Fetching from ${i}`);
        let s = () =>
            DB(() =>
              Lo.get(i, {
                headers: {
                  Authorization: `Bearer ${ms()?.accessToken ?? n.accessToken}`,
                  "Content-Type": "application/json",
                  "anthropic-beta": nGr.header,
                  "anthropic-version": "2023-06-01",
                  ...G6u(),
                },
                timeout: V6u,
              }),
            ),
          a = Date.now(),
          l;
        while (!0) {
          e++;
          try {
            l = await s();
            break;
          } catch (p) {
            if (e >= q6u || !Ryy(p)) throw p;
            let f = xyy * Hyy ** (e - 1);
            if (Date.now() - a + f + V6u >= kyy)
              throw (
                w(
                  `[claudeai-mcp] Retry budget exhausted after ${e} attempt(s)`,
                ),
                p
              );
            let m = Lo.isAxiosError(p)
              ? (p.response?.status ?? p.code ?? "unknown")
              : "unknown";
            (w(
              `[claudeai-mcp] Transient fetch error (${m}), retrying in ${f}ms (attempt ${e}/${q6u})`,
            ),
              await vr(f));
          }
        }
        let c = new Map();
        for (let p of l.data.data) {
          let f = Pyy(p.url),
            m = c.get(f);
          if (m) {
            w(
              `[claudeai-mcp] Dropping duplicate upstream ${f}: keeping ${m.id}, dropping ${p.id}`,
            );
            continue;
          }
          c.set(f, p);
        }
        let u = {},
          d = new Set();
        for (let p of c.values()) {
          let f = `claude.ai ${p.display_name}`,
            m = f,
            g = El(m),
            y = 1;
          while (d.has(g)) (y++, (m = `${f} (${y})`), (g = El(m)));
          if (y > 1)
            w(
              `[claudeai-mcp] Display-name collision on distinct upstreams: "${m}" (${p.id}, ${p.url})`,
            );
          (d.add(g),
            (u[m] = {
              type: "claudeai-proxy",
              url: p.url,
              id: p.id,
              displayName: p.display_name,
              iconUrl: p.icon_url,
              scope: "claudeai",
              toolPermissions: Dyy(p.tools),
              stateless: p.stateless,
              cachedInitResponse: p.cached_init_response,
              eligible: p.eligible,
              ineligibleReason: p.eligibility_reason,
            }));
        }
        return (
          w(`[claudeai-mcp] Fetched ${Object.keys(u).length} servers`),
          O("tengu_claudeai_mcp_eligibility", { state: Ee("eligible") }),
          be("mcp_claudeai_fetch_configs"),
          u
        );
      } catch (t) {
        let r = Lo.isAxiosError(t)
          ? String(t.response?.status ?? t.code ?? "unknown")
          : "unknown";
        if (
          (w(`[claudeai-mcp] Fetch failed (${r}) after ${e} attempt(s)`),
          O("tengu_claudeai_mcp_eligibility", {
            state: Ee("fetch_failed"),
            status: r,
            attempts: e,
          }),
          r === "401" || r === "403")
        )
          Ne("mcp_claudeai_fetch_configs", "fetch_needs_auth");
        else if (r === "429")
          Ne("mcp_claudeai_fetch_configs", "fetch_rate_limited");
        else if (r === "ECONNABORTED" || r === "ETIMEDOUT")
          Ne("mcp_claudeai_fetch_configs", "fetch_timeout");
        else if (/^\d+$/.test(r))
          pe("mcp_claudeai_fetch_configs", `fetch_failed_http_${r}`);
        else if (r !== "unknown")
          Ne("mcp_claudeai_fetch_configs", "fetch_network_error");
        else pe("mcp_claudeai_fetch_configs", "fetch_failed");
        return (Zut.cache.clear?.(), {});
      }
    });
    dSs = new Set();
  });
