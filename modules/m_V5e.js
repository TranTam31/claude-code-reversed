// Module: V5e (lines 68138-68307)
  var V5e = S(() => {
    Vn();
    ((uLi = Se(() =>
      v.enum([
        "local",
        "user",
        "project",
        "dynamic",
        "enterprise",
        "claudeai",
        "managed",
        "agent",
      ]),
    )),
      (s7E = Se(() =>
        v.enum(["stdio", "sse", "sse-ide", "http", "ws", "sdk"]),
      )),
      (l7t = Se(() =>
        v
          .literal("comms")
          .optional()
          .catch(void 0),
      )),
      (lnt = Se(() => v.number().int().positive())),
      (m5l = Se(() =>
        v
          .number()
          .int()
          .positive()
          .optional()
          .catch(void 0)
          .describe(
            "@internal CCR backend wire hint; folded into timeout at parse.",
          ),
      )));
    ((l3r = Se(() =>
      v.object({
        type: v.literal("stdio").optional(),
        command: v.string().min(1, "Command cannot be empty"),
        args: v.array(v.string()).default([]),
        env: v.record(v.string(), v.string()).optional(),
        timeout: lnt().optional(),
        alwaysLoad: v.boolean().optional(),
        role: l7t(),
      }),
    )),
      (ikh = Se(() => v.boolean())),
      (h5l = Se(() =>
        v.object({
          clientId: v.string().optional(),
          callbackPort: v.number().int().positive().optional(),
          authServerMetadataUrl: v
            .string()
            .url()
            .startsWith("https://", {
              message: "authServerMetadataUrl must use https://",
            })
            .optional(),
          scopes: v.string().min(1).optional(),
          xaa: ikh().optional(),
        }),
      )),
      (g5l = Se(() =>
        v.object({
          name: v.string(),
          permission_policy: v
            .enum(["always_allow", "always_ask", "always_deny"])
            .optional(),
        }),
      )),
      (dLi = Se(() =>
        v
          .object({
            type: v.literal("sse"),
            url: v.string(),
            headers: v.record(v.string(), v.string()).optional(),
            headersHelper: v.string().optional(),
            oauth: h5l().optional(),
            timeout: lnt().optional(),
            request_timeout_ms: m5l(),
            tools: v.array(g5l()).optional(),
            alwaysLoad: v.boolean().optional(),
            role: l7t(),
            toolPermissions: v.record(v.string(), c3r()).optional(),
            discoveryCache: v.boolean().optional(),
          })
          .transform(ZGn),
      )),
      (skh = Se(() =>
        v.object({
          type: v.literal("sse-ide"),
          url: v.string(),
          ideName: v.string(),
          ideRunningInWindows: v.boolean().optional(),
          timeout: lnt().optional(),
          alwaysLoad: v.boolean().optional(),
          role: l7t(),
        }),
      )),
      (akh = Se(() =>
        v.object({
          type: v.literal("ws-ide"),
          url: v.string(),
          ideName: v.string(),
          authToken: v.string().optional(),
          ideRunningInWindows: v.boolean().optional(),
          timeout: lnt().optional(),
          alwaysLoad: v.boolean().optional(),
          role: l7t(),
        }),
      )),
      (e5n = Se(() =>
        v
          .object({
            type: v.enum(["http", "streamable-http"]).transform(() => "http"),
            url: v.string(),
            headers: v.record(v.string(), v.string()).optional(),
            headersHelper: v.string().optional(),
            oauth: h5l().optional(),
            timeout: lnt().optional(),
            request_timeout_ms: m5l(),
            tools: v.array(g5l()).optional(),
            alwaysLoad: v.boolean().optional(),
            role: l7t(),
            toolPermissions: v.record(v.string(), c3r()).optional(),
            discoveryCache: v.boolean().optional(),
          })
          .transform(ZGn),
      )),
      (pLi = Se(() =>
        v.object({
          type: v.literal("ws"),
          url: v.string(),
          headers: v.record(v.string(), v.string()).optional(),
          headersHelper: v.string().optional(),
          timeout: lnt().optional(),
          alwaysLoad: v.boolean().optional(),
          role: l7t(),
        }),
      )),
      (fLi = Se(() =>
        v.object({
          type: v.literal("sdk"),
          name: v.string(),
          timeout: lnt().optional(),
          alwaysLoad: v.boolean().optional(),
        }),
      )),
      (c3r = Se(() => v.enum(["allow", "ask", "blocked"]))),
      (mLi = Se(() =>
        v.object({
          type: v.literal("claudeai-proxy"),
          url: v.string(),
          id: v.string(),
          displayName: v.string().optional(),
          iconUrl: v.string().optional(),
          timeout: lnt().optional(),
          alwaysLoad: v.boolean().optional(),
          toolPermissions: v.record(v.string(), c3r()).optional(),
          stateless: v.boolean().optional(),
          cachedInitResponse: v.record(v.string(), v.unknown()).nullish(),
          eligible: v.boolean().nullish(),
          ineligibleReason: v.string().nullish(),
        }),
      )),
      (o1e = Se(() =>
        v.union([l3r(), dLi(), skh(), akh(), e5n(), pLi(), fLi(), mLi()]),
      )));
    a7E = Se(() => v.object({ mcpServers: v.record(v.string(), o1e()) }));
  });
