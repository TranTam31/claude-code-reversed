// Module: Qh (lines 390865-391090)
  var Qh = S(() => {
    dB();
    Vn();
    pt();
    YUe();
    THs();
    vt();
    GU();
    xS();
    np();
    Ge();
    Ar();
    Qr();
    st();
    Ir();
    Gx();
    Zt();
    eU();
    HHs();
    Q9e();
    ((Tad = require("crypto")),
      (KT = require("fs/promises")),
      (mA = require("path")));
    HHs();
    ((Cad = /^[a-f0-9]{8}$/), (uLy = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/));
    vad = Se(() =>
      v
        .object({
          state: v.string(),
          detail: v.string(),
          tempo: v
            .enum(["active", "idle", "blocked"])
            .optional()
            .catch(void 0),
          inFlight: v
            .object({
              tasks: v.number(),
              queued: v.number(),
              kinds: v.array(v.string()),
            })
            .optional(),
          selfWake: v
            .boolean()
            .optional()
            .catch(void 0),
          fan: v
            .array(
              v.object({
                id: v.string().optional(),
                kind: v
                  .enum([
                    "agent",
                    "workflow",
                    "shell",
                    "monitor",
                    "mcp",
                    "todo",
                  ])
                  .optional()
                  .catch(void 0),
                label: v.string(),
                startedAt: v.number().optional(),
                doneAt: v.number().optional(),
                failed: v.boolean().optional(),
                group: v.string().optional(),
              }),
            )
            .optional(),
          budget: v
            .object({ spent: v.number(), target: v.number() })
            .optional(),
          tokens: v.number().optional(),
          needs_you: v.boolean().optional(),
          needs: v.string().optional(),
          block: v
            .object({
              questions: v.array(
                v.object({
                  question: v.string(),
                  options: v.array(
                    v.object({ label: v.string(), description: v.string() }),
                  ),
                }),
              ),
            })
            .optional(),
          suggestedReply: v.string().optional(),
          output: v.record(v.string(), v.string()).nullable().default(null),
          structuredResult: v.record(v.string(), v.unknown()).optional(),
          children: v
            .array(
              v.object({
                id: v.string(),
                href: v.string(),
                kind: v
                  .enum(["pr", "frame"])
                  .optional()
                  .catch(void 0),
                title: v
                  .string()
                  .optional()
                  .catch(void 0),
              }),
            )
            .nullable()
            .default(null),
          linkScanOffset: v.number().default(0),
          linkScanPath: non()
            .transform(
              Bdr(
                "linkScanPath",
                (e) =>
                  mA.isAbsolute(e) &&
                  e.endsWith(".jsonl") &&
                  RN(mA.basename(e, ".jsonl")) !== null,
              ),
            )
            .optional(),
          template: v.string(),
          routine: v.string().optional(),
          respawnFlags: v
            .array(v.string())
            .default([])
            .transform((e) => kfe(Rpt(e))),
          bgIsolation: v
            .enum(["none", "worktree"])
            .optional()
            .catch(void 0),
          providerEnv: v
            .record(v.string(), v.string())
            .transform((e) => {
              let t = had(e);
              return t && jv(t, cD);
            })
            .optional(),
          sessionPermissionRules: v
            .object({ allow: v.array(v.string()), deny: v.array(v.string()) })
            .optional(),
          memoryToggledOff: v.boolean().optional(),
          forkSourceAlive: v.boolean().optional(),
          forkBoundaryAt: v.string().optional(),
          forkSessionId: v.string().optional(),
          forkParentSessionId: v.string().optional(),
          interactiveLineage: v.boolean().optional(),
          intent: v.string(),
          displayIntent: v.string().optional(),
          initialPrompt: v.string().optional(),
          queuedPrompt: v.string().optional(),
          name: v.string().optional(),
          nameSource: v
            .enum(["user", "auto"])
            .optional()
            .catch(void 0),
          color: v.string().optional(),
          sessionId: non(),
          resumeSessionId: v
            .string()
            .transform(Bdr("resumeSessionId", (e) => RN(e) !== null))
            .optional(),
          daemonShort: v
            .string()
            .transform(Bdr("daemonShort", (e) => Cad.test(e)))
            .optional(),
          cliVersion: v.string().optional(),
          cwd: non(),
          createdAt: v.string(),
          updatedAt: v.string(),
          firstTerminalAt: v.string().nullable().default(null),
          worktreePath: non().optional(),
          worktreeBranch: v.string().optional(),
          worktreeHookBased: v.boolean().optional(),
          originCwd: non().optional(),
          bridgeSessionId: v
            .string()
            .transform(Bdr("bridgeSessionId", (e) => uLy.test(e)))
            .optional(),
          bridgeOutboundOnly: v.boolean().optional(),
          bridgeSessionGroupingId: v
            .string()
            .transform(
              Bdr("bridgeSessionGroupingId", (e) =>
                /^sgrp_[A-Za-z0-9_]{1,128}$/.test(e),
              ),
            )
            .optional(),
          bridgeSessionSeq: v
            .number()
            .transform(
              Bdr("bridgeSessionSeq", (e) => Number.isInteger(e) && e >= 0),
            )
            .optional(),
          backend: v
            .enum(["daemon", "peer", "remote"])
            .catch("daemon")
            .default("daemon")
            .transform((e) => {
              if (e === "daemon") return e;
              return (
                w(
                  `[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`,
                  { level: "warn" },
                ),
                "daemon"
              );
            }),
          sock: v.string().optional(),
          pid: v.number().optional(),
          sortOrder: v.number().optional(),
          stateSortOrder: v.number().optional(),
          group: v.string().optional(),
          pinned: v.boolean().optional(),
          reapedMidWorkAt: v.string().optional(),
          reapedUnsettledAt: v.string().optional(),
        })
        .transform(({ needs_you: e, ...t }) => ({
          ...t,
          tempo: t.tempo ?? (e ? "blocked" : "idle"),
        })),
    );
    ((sIe = new Map()), (Ppt = new Set()));
    pLy = KG();
    wad = Promise.resolve();
    ((qdr = `(idle \u2014 ${Wk})`),
      (jdr = ["starting", "resuming", "adopted", "crashed"]));
    kHs = new Set();
  });
