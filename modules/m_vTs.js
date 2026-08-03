// Module: VTs (lines 372794-372973)
  var VTs = S(() => {
    Vn();
    pt();
    vt();
    Ss();
    Ge();
    _z();
    si();
    gpe();
    ((pIy = Se(() =>
      v.object({
        servers: v
          .array(v.string())
          .optional()
          .describe("Server names to wait for (default: all pending)"),
      }),
    )),
      (fIy = Se(() =>
        v.object({
          ready: v.boolean(),
          connected: v.array(v.string()),
          failed: v.array(v.string()),
          stillPending: v.array(v.string()),
          needsAuth: v.array(v.string()),
          disabled: v.array(v.string()),
          unconfigured: v.array(v.string()).optional(),
          unknown: v.array(v.string()),
        }),
      )));
    Ntd = Ui({
      isEnabled() {
        return GTs(Oi(), qGe() ?? []);
      },
      isConcurrencySafe() {
        return !1;
      },
      isReadOnly() {
        return !0;
      },
      name: fct,
      maxResultSizeChars: 1e4,
      async description() {
        return Xus();
      },
      async prompt() {
        return Xus();
      },
      get inputSchema() {
        return pIy();
      },
      get outputSchema() {
        return fIy();
      },
      async checkPermissions(e) {
        return { behavior: "allow", updatedInput: e };
      },
      async call(e, t) {
        let { abortController: r } = t,
          n = e.servers?.length ? e.servers : Otd(BOt(t)),
          o = new Set(n.map(El)),
          i = () =>
            BOt(t).filter((A) => n.includes(A.name) || o.has(El(A.name))),
          s = Date.now(),
          a = s + dIy;
        while (
          i().some((A) => A.type === "pending") &&
          Date.now() < a &&
          !r.signal.aborted
        )
          await vr(50, r.signal);
        let l = Date.now() - s,
          c = i(),
          u = [],
          d = [],
          p = [],
          f = [],
          m = [],
          g = [];
        for (let A of c)
          switch (A.type) {
            case "connected":
              u.push(A.name);
              break;
            case "failed":
              if (Qee(A)) g.push(A.name);
              else d.push(A.name);
              break;
            case "pending":
              p.push(A.name);
              break;
            case "needs-auth":
              f.push(A.name);
              break;
            case "disabled":
              m.push(A.name);
              break;
            default:
          }
        let y = new Set(c.map((A) => El(A.name))),
          _ = n.filter((A) => !y.has(El(A))),
          E =
            p.length === 0 &&
            d.length === 0 &&
            f.length === 0 &&
            m.length === 0 &&
            _.length === 0;
        return (
          w(
            `[WaitForMcpServers] waited=${l}ms connected=${u.join(",")} failed=${d.join(",")} pending=${p.join(",")} needsAuth=${f.join(",")} disabled=${m.join(",")} unconfigured=${g.join(",")} unknown=${_.join(",")}`,
          ),
          O("tengu_mcp_pending_call", {
            requestedCount: n.length,
            connectedCount: u.length,
            failedCount: d.length,
            pendingCount: p.length,
            needsAuthCount: f.length,
            disabledCount: m.length,
            unconfiguredCount: g.length,
            unknownCount: _.length,
            waitMs: l,
            matched: E,
            matchType: Ee("wait"),
            success: E,
          }),
          {
            data: {
              ready: E,
              connected: u,
              failed: d,
              stillPending: p,
              needsAuth: f,
              disabled: m,
              unconfigured: g,
              unknown: _,
            },
          }
        );
      },
      renderToolUseMessage(e) {
        let t = e.servers?.join(", ");
        return t
          ? `Wait for MCP servers to connect: ${t}`
          : "Wait for pending MCP servers to connect";
      },
      userFacingName() {
        return "MCP Wait For Servers";
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let r = [
          `ready: ${e.ready}`,
          e.connected.length
            ? `Connected (their tools are now available \u2014 call them directly): ${e.connected.join(", ")}`
            : "",
          e.failed.length ? `Failed to connect: ${e.failed.join(", ")}` : "",
          e.stillPending.length
            ? `Still connecting (try again or proceed without): ${e.stillPending.join(", ")}`
            : "",
          e.needsAuth.length
            ? `Needs authentication (ask the user to run /mcp): ${e.needsAuth.join(", ")}`
            : "",
          e.disabled.length
            ? `Disabled (ask the user to enable via /mcp): ${e.disabled.join(", ")}`
            : "",
          e.unconfigured?.length
            ? `Not configured (no URL set \u2014 retrying will not help; the user must configure the server first): ${e.unconfigured.join(", ")}`
            : "",
          e.unknown.length
            ? `Unknown (no MCP server with this name is configured): ${e.unknown.join(", ")}`
            : "",
        ].filter(Boolean);
        return {
          type: "tool_result",
          tool_use_id: t,
          content: r.join(`
`),
          is_error: !e.ready,
        };
      },
    });
  });
