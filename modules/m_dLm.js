// Module: dLm (lines 1013128-1013611)
  var dLm = S(() => {
    Mg();
    st();
    GQ();
    BBs();
    Zt();
    VEl();
    f0e();
    $1r();
    ((s_i = require("fs/promises")),
      (iLm = require("path")),
      (sLm = new Set(["localhost", "127.0.0.1", "::1", "[::1]"])));
    nyE = Se(() =>
      Re.object({
        modelDiscoveryEnabled: Re.boolean(),
        coworkTabEnabled: Re.boolean(),
        isClaudeCodeForDesktopEnabled: Re.boolean(),
        isDesktopExtensionEnabled: Re.boolean(),
        isDesktopExtensionSignatureRequired: Re.boolean(),
        isLocalDevMcpEnabled: Re.boolean(),
        disableAutoUpdates: Re.boolean(),
        autoUpdaterEnforcementHours: Re.coerce.number().int().gt(0).lte(72),
        banner: Re.object({
          enabled: Re.boolean().optional(),
          text: Re.string().optional(),
          backgroundColor: Re.string().optional(),
          textColor: Re.string().optional(),
          linkUrl: Re.string().optional(),
        }).strict(),
      })
        .partial()
        .strict(),
    );
    iyE = Se(() => {
      let e = Re.string().optional(),
        t = Re.discriminatedUnion("provider", [
          Re.strictObject({
            name: e,
            provider: Re.literal("anthropic"),
            base_url: Re.string()
              .default("https://api.anthropic.com")
              .refine(Oge, { message: "base_url targets a metadata endpoint" }),
            auth: Re.union([
              Re.object({ api_key: Re.string().min(1) }).strict(),
              Re.object({ oauth_token: Re.string().min(1) }).strict(),
              Re.object({
                federation_rule_id: Re.string().min(1),
                organization_id: Re.string().min(1),
                identity_token_file: Re.string().min(1),
                service_account_id: Re.string().optional(),
                workspace_id: Re.string().optional(),
              }).strict(),
            ]),
          }),
          Re.strictObject({
            name: e,
            provider: Re.literal("bedrock"),
            region: Re.string().min(1),
            base_url: Re.string()
              .optional()
              .refine((n) => n === void 0 || Oge(n), {
                message: "base_url targets a metadata endpoint",
              }),
            auth: Re.strictObject({
              aws_access_key_id: Re.string().min(1).optional(),
              aws_secret_access_key: Re.string().min(1).optional(),
              aws_session_token: Re.string().min(1).optional(),
              aws_bearer_token: Re.string().min(1).optional(),
            })
              .default({})
              .refine(
                (n) => !n.aws_access_key_id === !n.aws_secret_access_key,
                {
                  message:
                    "aws_access_key_id and aws_secret_access_key must be set together",
                },
              )
              .refine((n) => !n.aws_session_token || !!n.aws_access_key_id, {
                message:
                  "aws_session_token requires aws_access_key_id and aws_secret_access_key",
              }),
          }),
          Re.strictObject({
            name: e,
            provider: Re.literal("anthropicAws"),
            region: Re.string().regex(
              /^[a-z0-9-]+$/,
              "must be an AWS region (lowercase alnum + hyphens)",
            ),
            workspace_id: Re.string()
              .min(1)
              .regex(/^[\x21-\x7e]+$/, "must be a valid header value"),
            base_url: Re.string()
              .optional()
              .refine((n) => n === void 0 || Oge(n), {
                message: "base_url targets a metadata endpoint",
              }),
            auth: Re.strictObject({
              api_key: Re.string().min(1).optional(),
              aws_access_key_id: Re.string().min(1).optional(),
              aws_secret_access_key: Re.string().min(1).optional(),
              aws_session_token: Re.string().min(1).optional(),
            })
              .default({})
              .refine(
                (n) => !n.aws_access_key_id === !n.aws_secret_access_key,
                {
                  message:
                    "aws_access_key_id and aws_secret_access_key must be set together",
                },
              )
              .refine((n) => !n.aws_session_token || !!n.aws_access_key_id, {
                message:
                  "aws_session_token requires aws_access_key_id and aws_secret_access_key",
              }),
          }),
          Re.strictObject({
            name: e,
            provider: Re.literal("vertex"),
            region: Re.string().min(1),
            project_id: Re.string().min(1),
            base_url: Re.string()
              .optional()
              .refine((n) => n === void 0 || Oge(n), {
                message: "base_url targets a metadata endpoint",
              }),
            auth: Re.strictObject({
              service_account_json: Re.string().optional(),
              access_token: Re.string().optional(),
            }).default({}),
          }),
          Re.strictObject({
            name: e,
            provider: Re.literal("foundry"),
            resource: Re.string().regex(
              /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i,
              "must be a valid DNS label",
            ),
            base_url: Re.string()
              .optional()
              .refine((n) => n === void 0 || Oge(n), {
                message: "base_url targets a metadata endpoint",
              }),
            auth: Re.union([
              Re.strictObject({ api_key: Re.string().min(1) }),
              Re.strictObject({ use_azure_ad: Re.literal(!0) }),
            ]),
          }),
        ]),
        r = Re.string().refine(
          (n) => {
            try {
              return (WEl(n), !0);
            } catch {
              return !1;
            }
          },
          { message: "must be a valid IP or CIDR" },
        );
      return Re.strictObject({
        $schema: Re.string().optional(),
        listen: Re.strictObject({
          host: Re.string().default("0.0.0.0"),
          port: Re.coerce.number().default(8080),
          tls: Re.strictObject({
            cert: Re.string(),
            key: Re.string(),
          }).optional(),
          public_url: Re.string()
            .url()
            .transform((n) => n.replace(/\/$/, ""))
            .optional(),
          trusted_proxies: Re.array(r).default([]),
        }).refine((n) => n.public_url !== void 0 || ryE(n.host), {
          path: ["public_url"],
          message:
            "listen.public_url is required when listen.host is not a " +
            "loopback address \u2014 set it to the externally-visible origin " +
            "(e.g. https://claude-gateway.corp.example.com). Without it the IdP redirect_uri and token issuer would be derived from the client-controlled Host header.",
        }),
        access_control: Re.strictObject({
          allow_cidrs: Re.array(r).default([]),
          deny_cidrs: Re.array(r).default([]),
        }).default({}),
        limits: Re.strictObject({
          max_request_bytes: Re.coerce
            .number()
            .int()
            .positive()
            .default(33554432),
          max_request_header_bytes: Re.coerce
            .number()
            .int()
            .positive()
            .optional(),
          max_url_length: Re.coerce.number().int().positive().optional(),
        }).default({}),
        rate_limits: Re.strictObject({
          device_authorization: Re.strictObject({
            max: Re.coerce.number().int().positive().default(30),
            window_seconds: Re.coerce.number().int().positive().default(600),
          }).default({}),
          device_verify: Re.strictObject({
            max: Re.coerce.number().int().positive().default(10),
            window_seconds: Re.coerce.number().int().positive().default(600),
          }).default({}),
        }).default({}),
        timeouts: Re.strictObject({
          upstream_ttfb_ms: Re.coerce.number().int().positive().default(120000),
        }).default({}),
        upstreams: Re.array(t)
          .min(1)
          .transform((n) =>
            n.map((o) => ({ ...o, name: o.name ?? o.provider })),
          )
          .superRefine((n, o) => {
            let i = new Set();
            for (let s of n) {
              if (i.has(s.name))
                o.addIssue({
                  code: Re.ZodIssueCode.custom,
                  message: `duplicate upstream name '${s.name}' \u2014 set distinct 'name:' on each`,
                });
              i.add(s.name);
            }
          }),
        auto_include_builtin_models: Re.boolean().default(!0),
        models: Re.array(
          Re.strictObject({
            id: Re.string().min(1),
            label: Re.string().optional(),
            description: Re.string().optional(),
            upstream_model: Re.record(Re.string()).refine(
              (n) => Object.keys(n).length > 0,
              { message: "upstream_model must set at least one upstream" },
            ),
          }),
        ).default([]),
        oidc: Re.strictObject({
          issuer: Re.string().refine(Oge, {
            message:
              "oidc.issuer must be an http(s) URL and not target a cloud metadata endpoint",
          }),
          client_id: Re.string().min(1),
          client_secret: Re.string().min(1),
          ca_cert_pem: Re.string().optional(),
          groups_claim: Re.string().min(1).default("groups"),
          email_claim: Re.union([
            Re.string().min(1),
            Re.array(Re.string().min(1)).min(1),
          ]).default("email"),
          userinfo_fallback: Re.boolean().default(!1),
          use_pkce: Re.boolean().default(!0),
          clock_skew_seconds: Re.coerce.number().int().nonnegative().optional(),
          token_endpoint_auth_method: Re.enum([
            "client_secret_basic",
            "client_secret_post",
          ]).optional(),
          id_token_signed_response_alg: Re.enum([
            "RS256",
            "RS384",
            "RS512",
            "PS256",
            "PS384",
            "PS512",
            "ES256",
            "ES384",
            "ES512",
            "EdDSA",
          ]).optional(),
          additional_authorized_parties: Re.array(Re.string()).optional(),
          discovery_url: Re.string()
            .url()
            .refine(Oge, {
              message:
                "oidc.discovery_url must be an http(s) URL and not target a cloud metadata endpoint",
            })
            .refine(
              (n) => {
                try {
                  return new URL(n).pathname.includes("/.well-known/");
                } catch {
                  return !1;
                }
              },
              {
                message:
                  "oidc.discovery_url must point at the discovery document itself (path containing /.well-known/) \u2014 openid-client appends /.well-known/openid-configuration to any other path",
              },
            )
            .optional(),
          scopes: Re.array(
            Re.string()
              .trim()
              .min(1)
              .refine((n) => !/\s/.test(n), {
                message: "must be a single OAuth scope token (no whitespace)",
              }),
          )
            .optional()
            .refine((n) => n === void 0 || n.includes("openid"), {
              message:
                "oidc.scopes must include 'openid' \u2014 without it the IdP will not return an id_token",
            }),
          extra_auth_params: Re.record(Re.string().min(1), Re.string())
            .default({})
            .refine(
              (n) =>
                !Object.keys(n).some((o) =>
                  [
                    "redirect_uri",
                    "state",
                    "nonce",
                    "code_challenge",
                    "code_challenge_method",
                    "scope",
                    "response_type",
                    "response_mode",
                    "client_id",
                  ].includes(o),
                ),
              {
                message:
                  "oidc.extra_auth_params must not override protocol parameters the gateway manages (redirect_uri, state, nonce, code_challenge*, scope, response_type, response_mode, client_id) \u2014 use oidc.scopes for scope; the gateway callback only reads query-mode responses",
              },
            ),
          allowed_email_domains: Re.array(Re.string())
            .transform((n, o) => {
              let i = n
                .map((s) => s.trim().replace(/^@/, "").toLowerCase())
                .filter(Boolean);
              if (n.length > 0 && i.length === 0)
                o.addIssue({
                  code: Re.ZodIssueCode.custom,
                  message:
                    "allowed_email_domains contains only empty entries after normalization",
                });
              return i;
            })
            .optional(),
          form_action_origins: Re.array(
            Re.string().refine(Oge, {
              message:
                "each form_action_origin must be an http(s) URL and not target a cloud metadata endpoint",
            }),
          )
            .transform((n) => n.map((o) => new URL(o).origin))
            .refine((n) => n.every((o) => !/[;,'"\s]/.test(o)), {
              message:
                "oidc.form_action_origins entries must not contain CSP delimiters (; , quotes or whitespace)",
            })
            .default([]),
          allowed_groups: Re.array(Re.string())
            .refine((n) => !n.length || n.some((o) => o.trim()), {
              message: "oidc.allowed_groups contains only empty entries",
            })
            .transform((n) => n.map((o) => o.trim()).filter(Boolean))
            .optional(),
          google_groups: Re.strictObject({
            service_account_json_path: Re.string().min(1),
            admin_email: Re.string().email(),
          }).optional(),
        }),
        session: Re.strictObject({
          jwt_secret: Re.union([
            Re.string().min(32),
            Re.array(Re.string().min(32)).min(1),
          ]).transform((n) => (Array.isArray(n) ? n : [n])),
          ttl_hours: Re.coerce.number().default(1),
        }),
        store: Re.strictObject({
          postgres_url: Re.string().regex(
            /^postgres(ql)?:\/\//,
            "must be postgres:// or postgresql://",
          ),
          username: Re.string().optional(),
          password: Re.string().optional(),
          max_connections: Re.coerce.number().int().positive().default(5),
        }),
        telemetry: Re.strictObject({
          forward_to: Re.array(
            Re.strictObject({
              url: Re.string()
                .refine(oyE, {
                  message:
                    "forward_to.url must be https:// (http:// allowed for loopback only)",
                })
                .refine(Oge, {
                  message:
                    "forward_to.url must not target a cloud metadata endpoint",
                }),
              headers: Re.record(Re.string()).default({}),
              metrics: Re.boolean().default(!0),
              logs: Re.boolean().default(!1),
              traces: Re.boolean().default(!1),
            }),
          ).default([]),
        }).default({ forward_to: [] }),
        managed: Re.strictObject({
          settings: Re.string().optional(),
          policies: Re.array(
            Re.object({
              match: Re.strictObject({
                groups: Re.array(Re.string()).optional(),
                email_domain: Re.string().toLowerCase().optional(),
              }).default({}),
              cli: Re.record(Re.unknown()).optional(),
              settings: Re.record(Re.unknown()).optional(),
              desktop: nyE().optional(),
            })
              .strict()
              .transform(({ match: n, cli: o, settings: i, desktop: s }) => ({
                match: n,
                cli: o ?? i ?? {},
                desktop: s,
              })),
          ).optional(),
        }).optional(),
        admin: Re.strictObject({
          read_keys: Re.array(
            Re.strictObject({ id: Re.string(), key: Re.string().min(32) }),
          ).default([]),
          write_keys: Re.array(
            Re.strictObject({ id: Re.string(), key: Re.string().min(32) }),
          ).default([]),
          admin_groups: Re.array(Re.string()).default([]),
          blocked_message: Re.string().optional(),
          audit_retention_days: Re.coerce
            .number()
            .int()
            .positive()
            .default(365),
          spend_retention_months: Re.coerce
            .number()
            .int()
            .positive()
            .default(13),
          identity_retention_days: Re.coerce
            .number()
            .int()
            .positive()
            .default(90),
          group_limit_mode: Re.enum(["min", "max"]).default("min"),
        })
          .superRefine((n, o) => {
            let i = [...n.read_keys, ...n.write_keys].map((a) => a.id),
              s = i.find((a, l) => i.indexOf(a) !== l);
            if (s)
              o.addIssue({
                code: Re.ZodIssueCode.custom,
                message: `admin key id '${s}' is repeated; key ids must be unique for audit attribution`,
              });
          })
          .optional(),
        enforcement: Re.strictObject({
          fail_closed_on_error: Re.boolean().default(!1),
        }).default({ fail_closed_on_error: !1 }),
      }).superRefine((n, o) => {
        if (n.enforcement.fail_closed_on_error && n.admin === void 0)
          o.addIssue({
            code: Re.ZodIssueCode.custom,
            path: ["enforcement", "fail_closed_on_error"],
            message:
              "has no effect without an `admin:` block \u2014 spend enforcement only runs when admin is configured",
          });
        let i = new Set(n.upstreams.map((s) => s.name));
        for (let [s, a] of n.models.entries())
          for (let l of Object.keys(a.upstream_model))
            if (!i.has(l))
              o.addIssue({
                code: Re.ZodIssueCode.custom,
                path: ["models", s, "upstream_model", l],
                message: `references unknown upstream '${l}'`,
              });
      });
    });
    ((uyE = ["env", "modelOverrides", "skillOverrides"]),
      (dyE = [
        "disabledMcpjsonServers",
        "deniedMcpServers",
        "blockedMarketplaces",
      ]),
      (pyE = ["deny", "ask"]));
  });
