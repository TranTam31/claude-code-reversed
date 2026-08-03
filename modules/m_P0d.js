// Module: P0d (lines 477658-477831)
  var P0d = S(() => {
    Vn();
    Wu();
    Zr();
    vt();
    xf();
    Dy();
    Vu();
    l1s();
    Ss();
    Eo();
    jl();
    Qr();
    Ni();
    ts();
    Zt();
    ((L9y = Se(() =>
      v.strictObject({
        action: v.enum(["list", "get", "create", "update", "run"]),
        trigger_id: v
          .string()
          .regex(/^[\w-]+$/)
          .optional()
          .describe("Required for get, update, and run"),
        body: v
          .record(v.string(), v.unknown())
          .optional()
          .describe("Required for create and update; optional for run"),
      }),
    )),
      (O9y = Se(() =>
        v.object({
          status: v.number(),
          json: v.string(),
          summary: v.string().optional(),
        }),
      )),
      (I0d = Se(() => {
        let e = v.string().transform((t) => t || void 0);
        return v
          .object({
            id: v.coerce.string(),
            enabled: v.boolean(),
            next_run_at: v.string(),
            cron_expression: e,
            run_once_at: e,
          })
          .partial();
      })));
    N9y = Ui({
      name: RIe,
      searchHint: "manage scheduled cloud agent routines",
      maxResultSizeChars: 1e5,
      shouldDefer: !0,
      get inputSchema() {
        return L9y();
      },
      get outputSchema() {
        return O9y();
      },
      isEnabled() {
        return (
          Pc() &&
          ii() &&
          !Yt(process.env.CLAUDE_CODE_REMOTE) &&
          Ke("tengu_surreal_dali", !1) &&
          ns("allow_remote_sessions")
        );
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly(e) {
        return e.action === "list" || e.action === "get";
      },
      toAutoClassifierInput(e) {
        return e;
      },
      async checkPermissions(e, t) {
        if (En(t).mode === "auto")
          return {
            behavior: "passthrough",
            message: "Remote trigger management requires classifier review.",
          };
        return { behavior: "allow", updatedInput: e };
      },
      async description() {
        return H0d;
      },
      async prompt() {
        return k0d;
      },
      async call(e, t) {
        let { action: n, trigger_id: o, body: i } = e,
          s,
          a,
          l;
        switch (n) {
          case "list":
            ((a = "get"), (s = "/v1/code/triggers"));
            break;
          case "get":
            if (!o) throw Error("get requires trigger_id");
            ((a = "get"), (s = `/v1/code/triggers/${o}`));
            break;
          case "create":
            if (!i) throw Error("create requires body");
            ((a = "post"), (s = "/v1/code/triggers"), (l = i));
            break;
          case "update":
            if (!o) throw Error("update requires trigger_id");
            if (!i) throw Error("update requires body");
            ((a = "post"), (s = `/v1/code/triggers/${o}`), (l = i));
            break;
          case "run": {
            if (!o) throw Error("run requires trigger_id");
            ((a = "post"), (s = `/v1/code/triggers/${o}/run`));
            let { trigger_id: p, ...f } = i ?? {};
            l = f;
            break;
          }
        }
        let c = {
            auth: "teleport-org",
            headers: { "anthropic-beta": s1s },
            timeout: 20000,
            signal: t.abortController.signal,
            validateStatus: () => !0,
          },
          u = a === "get" ? await Mi.get(s, c) : await Mi.post(s, l, c);
        if (!u.ok)
          throw Error(
            u.reason === "no-auth"
              ? "Not authenticated with a claude.ai account. Run /login and try again."
              : `Remote triggers unavailable: ${u.reason}`,
          );
        let d;
        if (n === "create" || n === "update" || n === "run") {
          let p = u.status >= 200 && u.status < 300,
            f = p ? I0d().safeParse(u.data) : void 0;
          if (
            (O("tengu_remote_trigger", {
              action: fe(n),
              has_run_once_at:
                typeof i?.run_once_at === "string" && i.run_once_at !== "",
              has_cron:
                typeof i?.cron_expression === "string" &&
                i.cron_expression !== "",
              success: p,
              trigger_id: wr(
                n === "create" ? (f?.success ? f.data.id : void 0) : o,
              ),
            }),
            p && n !== "run")
          )
            d = f?.success ? R0d(f.data) : void 0;
        }
        return { data: { status: u.status, json: Ie(u.data), summary: d } };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let r = e.summary
          ? `HTTP ${e.status}
${e.json}

${e.summary}`
          : `HTTP ${e.status}
${e.json}`;
        return { tool_use_id: t, type: "tool_result", content: r };
      },
      renderToolUseMessage(e) {
        return `${e.action ?? ""}${e.trigger_id ? ` ${e.trigger_id}` : ""}`;
      },
    });
  });
