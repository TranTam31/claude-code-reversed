// Module: iFd (lines 531826-531950)
  var iFd = S(() => {
    Vn();
    pt();
    WT();
    ei();
    Qr();
    Un();
    nun();
    xBs();
    ((nFd = require("os")),
      (V_ = require("path")),
      (gc_ = Se(() =>
        v
          .object({
            command: v.string().optional(),
            args: v.array(v.string()).optional(),
            env: v.record(v.string(), v.string()).optional(),
            url: v.string().optional(),
            http_headers: v.record(v.string(), v.string()).optional(),
            bearer_token_env_var: v.string().optional(),
          })
          .loose(),
      )),
      (yc_ = Se(() =>
        v
          .object({
            description: v.string().optional(),
            instructions: v.string().optional(),
            tools: v.array(v.string()).optional(),
          })
          .loose(),
      )),
      (_c_ = Se(() => v.object({ path: v.string() }).loose())),
      (bc_ = Se(() =>
        v
          .object({
            model: v
              .string()
              .optional()
              .catch(void 0),
            model_reasoning_effort: v
              .string()
              .optional()
              .catch(void 0),
            approval_policy: v
              .string()
              .optional()
              .catch(void 0),
            sandbox_mode: v
              .string()
              .optional()
              .catch(void 0),
            web_search: v
              .boolean()
              .optional()
              .catch(void 0),
            mcp_servers: v.unknown().optional(),
            skills: v.unknown().optional(),
            agents: v.unknown().optional(),
            hooks: v.unknown().optional(),
            features: v
              .record(v.string(), v.unknown())
              .optional()
              .catch(void 0),
            project_doc_fallback_filenames: v
              .array(v.string())
              .optional()
              .catch(void 0),
            project_doc_max_bytes: v
              .number()
              .optional()
              .catch(void 0),
          })
          .loose(),
      )));
    oFd = {
      id: "codex",
      displayName: "OpenAI Codex",
      async detect(e) {
        let t = tFd(e),
          r = e.cwd ?? gn();
        if (e.homeDir === void 0 && Rmt()) return !0;
        return (
          (await F4(V_.join(t, "config.toml"))) ||
          (await F4(V_.join(t, "AGENTS.md"))) ||
          (await F4(V_.join(t, "prompts"))) ||
          ((await tme(r, V_.join(r, ".codex", "config.toml"))) !== null &&
            (await F4(V_.join(r, ".codex", "config.toml"))))
        );
      },
      async scan(e) {
        let t = tFd(e),
          r = e.cwd ?? gn(),
          n = [],
          o = [],
          i =
            (e.homeDir === void 0 && Rmt()) ||
            (process.env.CLAUDE_CONFIG_DIR !== void 0 &&
              (IFt(pn()) || (await igr(pn(), r))));
        if (i)
          o.push({
            scope: "user",
            label: "Codex user-scope config",
            reason:
              "The user-scope read or write root has been redirected (resolves inside this project, to a network path, or away from the real home directory) \u2014 skipping user-scope scan for safety.",
          });
        let s = i ? "project" : e.scope;
        if (s !== "project")
          (await rFd(t, "user", r, n, o), await wc_(t, n, o));
        if (s !== "user" && V_.join(r, ".codex") !== t) {
          let a = V_.join(r, ".codex");
          if ((await tme(r, V_.join(a, "config.toml"))) !== null)
            await rFd(a, "project", r, n, o);
          else
            o.push({
              scope: "project",
              label: ".codex/config.toml",
              reason:
                "Is (or is under) a symlink \u2014 skipping project-scope read for safety.",
            });
        }
        return (await Ac_(t, r, s, n, o), { items: n, unmappable: o });
      },
    };
  });
