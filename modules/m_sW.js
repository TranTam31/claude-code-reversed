// Module: sW (lines 389682-389886)
  var sW = S(() => {
    Vn();
    Q9e();
    np();
    e1t();
    P1t();
    nIe = /^[a-f0-9]{8}$/;
    ((eon = Se(() =>
      v.object({
        proto: v.number().int().min(Ldr).max(Um),
        short: v.string().regex(nIe),
        nonce: v.string().regex(nIe).optional(),
        sessionId: v.string().transform(cD),
        createdAt: v.number(),
        source: v
          .enum(["shell", "slash", "fleet", "spare", "respawn"])
          .catch("fleet"),
        cwd: v.string().transform(cD),
        launch: v.discriminatedUnion("mode", [
          v.object({
            mode: v.literal("prompt"),
            args: v.array(v.string()).transform(kfe),
          }),
          v.object({
            mode: v.literal("resume"),
            sessionId: v.string().transform(cD),
            transcriptPath: v.string().transform(cD).optional(),
            fork: v.boolean(),
            flagArgs: v.array(v.string()).transform(kfe),
          }),
          v.object({
            mode: v.literal("exec"),
            cmd: v.string().transform(cD),
            args: v.array(v.string()).transform((e) => e.map(cD)),
          }),
        ]),
        env: v.record(v.string(), v.string()).default({}),
        reattachEnv: v.record(v.string(), v.string()).optional(),
        worktree: v
          .object({
            path: v.string().transform(cD),
            ownershipToken: v.string(),
          })
          .optional(),
        isolation: v.enum(["none", "worktree"]).default("none"),
        respawnFlags: v.array(v.string()).default([]).transform(kfe),
        attachStallRespawns: v.number().int().optional(),
        agent: v.string().optional(),
        routine: v.string().optional(),
        seed: v
          .object({ intent: v.string(), name: v.string().optional() })
          .optional(),
        cols: v.number().int().positive().max(zUe).optional(),
        rows: v.number().int().positive().max(zUe).optional(),
      }),
    )),
      (Odr = /ERESPAWNING|ESTARTING/),
      (Ndr = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/),
      (Fdr = /ESTALLED|EUNVERIFIED/),
      (Dpt = /^EKICKED:\s*/),
      (Udr = /^E[A-Z]+:/));
    EHs = Se(() =>
      v.looseObject({
        pid: v.number(),
        procStart: v.string().optional(),
        sessionId: v.string().transform(cD),
        rendezvousSock: _Hs(),
        ptySock: _Hs().optional(),
        messagingSock: _Hs().optional(),
        cliVersion: v.string().optional(),
        startedAt: v.number(),
        attempt: v.number(),
        cwd: v.string().transform(cD),
        worktreePath: v.string().transform(cD).optional(),
        dispatch: eon(),
        pendingRespawn: v.literal("upgrade").optional(),
        decModes: v.array(v.number()).optional(),
        rvAuth: v.string().optional(),
        ptyAuth: v.string().optional(),
      }),
    );
    ((vHs = Se(() =>
      v.looseObject({
        proto: v.number().int().min(Ldr).max(Um),
        supervisorPid: v.number().catch(0),
        updatedAt: v.number().catch(0),
        workers: v.record(v.string().regex(nIe), EHs()),
      }),
    )),
      (AHs = Se(() => {
        let e = v.string().regex(nIe),
          t = v.number().int().min(Ldr).max(Um);
        return v.discriminatedUnion("op", [
          v.object({ proto: t, op: v.literal("ping") }),
          v.object({ proto: t, op: v.literal("nudge") }),
          v.object({ proto: t, op: v.literal("yield") }),
          v.object({
            proto: t,
            op: v.literal("lease"),
            client: v
              .object({ label: v.string(), cwd: v.string(), pid: v.number() })
              .optional(),
          }),
          v.object({ proto: t, op: v.literal("leases") }),
          v.object({
            proto: t,
            op: v.literal("await-ack"),
            short: e,
            nonce: e.optional(),
            timeoutMs: v.number(),
          }),
          v.object({
            proto: t,
            op: v.literal("dispatch"),
            d: eon(),
            timeoutMs: v.number(),
            auth: v.string().optional(),
          }),
          v.object({ proto: t, op: v.literal("list") }),
          v.object({ proto: t, op: v.literal("has"), short: e }),
          v.object({
            proto: t,
            op: v.literal("kill"),
            short: e,
            signal: v.enum(["SIGTERM", "SIGKILL"]).optional(),
            handoff: v.boolean().optional(),
            evict: v.boolean().optional(),
          }),
          v.object({
            proto: t,
            op: v.literal("reply"),
            short: e,
            text: v.string(),
            auth: v.string().optional(),
          }),
          v.object({
            proto: t,
            op: v.literal("subscribe"),
            short: e,
            tail: v.number().optional(),
          }),
          v.object({
            proto: t,
            op: v.literal("attach"),
            short: e,
            auth: v.string().optional(),
            cols: v.number().int().min(1).max(zUe),
            rows: v.number().int().min(1).max(zUe),
            attachId: v.string().optional(),
            caps: v
              .object({
                terminal: v.string().nullable(),
                mux: v.enum(["tmux", "screen", "zellij"]).nullable(),
                ssh: v.boolean(),
                wheelFlood: v.boolean().optional(),
                hyperlinks: v.boolean().optional(),
                progressReporting: v.boolean().optional(),
                wtSession: v.boolean().optional(),
                isVscodeTerm: v.boolean().optional(),
                browser: v.string().nullable().optional(),
                colorLevel: v
                  .union([
                    v.literal(0),
                    v.literal(1),
                    v.literal(2),
                    v.literal(3),
                  ])
                  .optional(),
                syncOutput: v.boolean().optional(),
                editor: v.string().nullable().optional(),
                systemTheme: v.enum(["dark", "light"]).optional(),
              })
              .optional(),
            holdingFrame: v.boolean().optional(),
          }),
          v.object({
            proto: t,
            op: v.literal("resize"),
            short: e,
            cols: v.number().int().min(1).max(zUe),
            rows: v.number().int().min(1).max(zUe),
            attachId: v.string().optional(),
          }),
          v.object({
            proto: t,
            op: v.literal("ensure-spare"),
            cwd: v.string(),
          }),
          v.object({
            proto: t,
            op: v.literal("permission-response"),
            short: e,
            requestId: v.string(),
            allow: v.boolean(),
            auth: v.string().optional(),
          }),
          v.object({ proto: t, op: v.literal("respawn-stale"), short: e }),
          v.object({
            proto: t,
            op: v.literal("shutdown"),
            reapWorkers: v.boolean().optional(),
          }),
        ]);
      })));
  });
