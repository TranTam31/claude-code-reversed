// Module: tko (lines 467705-467768)
  var tko = S(() => {
    vt();
    zt();
    Ge();
    yv();
    Ga();
    zC();
    Ak();
    s$t = {
      name: "RemoteAgentTask",
      type: "remote_agent",
      async kill(e, t, r) {
        let n,
          o,
          i,
          s = !1,
          a = !1,
          l = 0,
          c = !1;
        if (
          (t.update(e, (u) => {
            if (u.status !== "running") return u;
            return (
              (n = u.toolUseId),
              (o = u.description),
              (i = u.sessionId),
              (s = u.isUltraplan ?? !1),
              (a = u.isRemoteReview ?? !1),
              (l = u.pollStartedAt),
              (c = !0),
              { ...u, status: "killed", notified: !0, endTime: Date.now() }
            );
          }),
          c)
        ) {
          if ((Vp(e, "stopped", { toolUseId: n, summary: o }), i))
            IY(i).catch((u) =>
              w(`RemoteAgentTask archive failed: ${String(u)}`),
            );
          if (a)
            pe("task_remote_agent", "task_remote_agent_review_failed", {
              remote_task_type: Ee("ultrareview"),
              reason: fe("cancelled"),
            });
          if (s)
            (O("tengu_ultraplan_stopped", { duration_ms: Date.now() - l }),
              r((u) =>
                u.ultraplanSessionUrl || u.ultraplanPendingChoice
                  ? {
                      ...u,
                      ultraplanSessionUrl: void 0,
                      ultraplanPendingChoice: void 0,
                    }
                  : u,
              ));
        }
        (rA(e),
          LEe(e),
          w(
            `RemoteAgentTask ${e} killed, archiving session ${i ?? "unknown"}`,
          ));
      },
    };
  });
