// Module: gwd (lines 471591-471999)
  var gwd = S(() => {
    Vn();
    vt();
    Yd();
    Ss();
    r2();
    Gp();
    jl();
    Ge();
    st();
    Qa();
    vo();
    Pr();
    gKe();
    mh();
    aH();
    Dan();
    DAd();
    LAd();
    POs();
    EOs();
    IOs();
    SOs();
    ((mwd = require("util")), (hwd = x(require("vm"))));
    ((Y8y = Se(() =>
      v.strictObject({
        code: v
          .string()
          .describe(
            "JavaScript code to execute. Supports top-level await. State persists across calls.",
          ),
        description: v
          .string()
          .optional()
          .describe(
            'Clear, concise description of what this script does in active voice (5-10 words). E.g. "Trace upgrade message to its GrowthBook flag"',
          ),
        timeout: v
          .number()
          .optional()
          .describe(
            "Optional timeout in milliseconds (default 30000, max 600000)",
          ),
      }),
    )),
      (X8y = Se(() =>
        v.object({
          code: v.string().describe("The code that was executed"),
          result: v.unknown().describe("Return value from the code execution"),
          stdout: v.string().describe("Captured console.log output"),
          stderr: v.string().describe("Captured console.error output"),
          error: v
            .string()
            .optional()
            .describe("Error message if execution failed"),
          registeredTools: v
            .array(v.string())
            .optional()
            .describe("Names of tools registered during this execution"),
          images: v
            .array(v.object({ base64: v.string(), mediaType: v.string() }))
            .optional()
            .describe(
              "Images returned by inner Read calls \u2014 surfaced as image content blocks",
            ),
          documents: v
            .array(v.object({ base64: v.string() }))
            .optional()
            .describe(
              "PDFs returned by inner Read calls \u2014 surfaced as document content blocks",
            ),
        }),
      )),
      (Q8y = new Set(["stdout", "stderr", "error", "result"])));
    LOs = Ui({
      name: Ng,
      searchHint: "execute JavaScript with programmatic tool access",
      get maxResultSizeChars() {
        return pwd();
      },
      async prompt() {
        return IAd();
      },
      async description() {
        return RAd();
      },
      get inputSchema() {
        return Y8y();
      },
      get outputSchema() {
        return X8y();
      },
      isEnabled() {
        return c1();
      },
      isConcurrencySafe() {
        return !1;
      },
      isReadOnly() {
        return !1;
      },
      toAutoClassifierInput(e) {
        return e.code;
      },
      async checkPermissions() {
        return { behavior: "allow" };
      },
      async call(e, t, r, n, o) {
        let i = t.agentId ?? IRt,
          s = t.getReplContexts()[i],
          { code: a, timeout: l } = e;
        uzy(a);
        let c = Math.min(l ?? J8y, vko),
          u = C8(t.abortController),
          d = { ...t, abortController: u },
          p = new Map(),
          f = izy(),
          m = szy(c, () =>
            f.reject(
              Error(
                `REPL execution timed out after ${c}ms of script time (inner tool calls excluded). Script may still be running \u2014 avoid unbounded awaits.`,
              ),
            ),
          ),
          g = czy((D, M) => {
            (O("tengu_repl_inner_watchdog_fired", {
              toolName: ua(D.toolName),
              watchdogMs: M,
              nativeTimeoutMs: D.nativeTimeoutMs,
            }),
              u.abort(),
              f.reject(
                Error(
                  `REPL inner tool call ${D.toolName} exceeded ${M}ms watchdog (native timeout ${D.nativeTimeoutMs ?? "unset"}). The call may be hung \u2014 try a shorter timeout on the tool itself.`,
                ),
              ));
          }),
          y = (D) => {
            if (D.type !== "progress") {
              o?.(D);
              return;
            }
            let M = D.data;
            switch ((ezy(p, M), M.phase)) {
              case "start":
                m.onToolStart();
                break;
              case "executing":
                g.arm(M);
                break;
              case "complete":
              case "error":
                (g.clear(M.toolUseId), m.onToolEnd());
                break;
            }
            o?.(
              M.result === void 0
                ? D
                : { ...D, data: { ...M, result: void 0 } },
            );
          },
          _,
          E = t.messages[0],
          A = E !== void 0 && J0(E) ? E.uuid : null,
          b = K8y(t.options.tools, En(t)),
          T = () => {
            let D = Sko(b, d, r, n, y);
            return (
              (D.boundaryUuid = A),
              (D.helperState.repo = _?.helperState.repo),
              D
            );
          };
        if (s && s.boundaryUuid === A) {
          ((_ = s), _.console.clear(), _.clearAllTimers());
          try {
            iwd(_, b, d, r, n, y);
          } catch (D) {
            fwd(D, _, t, i, T);
          }
        } else {
          (s?.clearAllTimers(),
            s?.console.clear(),
            (_ = Sko(b, d, r, n, y)),
            (_.boundaryUuid = A),
            (_.helperState.repo = await GYt().catch(() => null)));
          let D = t.replHydration ?? { kind: "fresh" },
            M = D.kind === "fork" && s ? { kind: "fresh" } : D;
          try {
            let L =
              M.kind === "fork"
                ? M.log
                : M.kind === "resume"
                  ? Eko(t.messages)
                  : [];
            if (L.length > 0) {
              let N = performance.now(),
                P = await cwd(_, L),
                B = Math.round(performance.now() - N),
                { summary: G } = uwd(P);
              if (
                (w(`REPL state hydrated from ${M.kind} in ${B}ms: ${G}`, {
                  level: "info",
                }),
                M.kind === "resume")
              )
                _.replayLog = [...L];
            }
          } catch (L) {
            if (Ran(L)) {
              (_.clearAllTimers(), _.console.clear());
              let N = _.helperState.repo;
              ((_ = Sko(b, d, r, n, y)),
                (_.boundaryUuid = A),
                (_.helperState.repo = N),
                w(
                  `REPL hydration hit a poisoned context (global '${L.key}' pinned non-configurable by replayed code); starting fresh without hydration`,
                  { level: "warn" },
                ));
            } else
              w(`REPL state hydration failed: ${_.sealers.errMsg(L)}`, {
                level: "warn",
              });
          }
          (_.clearAllTimers(), t.setReplContext(i, _));
        }
        let { vmContext: C, registeredTools: I, console: R } = _,
          k = new Set(I.keys());
        try {
          _ko(_);
        } catch (D) {
          fwd(D, _, t, i, T);
        }
        try {
          let D = cko(a),
            L = new hwd.Script(D, {
              filename: "repl-tool-code.js",
              importModuleDynamically: () => {
                throw T2e("import() is not available in REPL code.");
              },
            }).runInContext(C, Tft(c)),
            N = t.abortController.signal,
            P = () => f.reject(Error("REPL execution interrupted"));
          if (N.aborted) P();
          else N.addEventListener("abort", P, { once: !0 });
          m.start();
          let B = setTimeout(
            (re) =>
              re(
                Error(
                  `REPL execution exceeded hard wall-clock limit of ${vko}ms. An inner tool call may be hung \u2014 try a shorter timeout on the tool itself, or split the work.`,
                ),
              ),
            vko,
            f.reject,
          );
          B.unref?.();
          let { v: G } = await Promise.race([
              _.sealers.awaitVM(L).then((re) => bko(_, uko(re))),
              f.promise,
            ]).finally(() => {
              (clearTimeout(B), N.removeEventListener("abort", P));
            }),
            V = [...I.keys()].filter((re) => !k.has(re)),
            F = tzy(p),
            W = nzy(p),
            j = Array.from(p.values()).filter(
              (re) => re.phase === "start" || re.phase === "executing",
            ),
            z = R.getStderr(),
            q = j.length
              ? (z
                  ? z +
                    `
`
                  : "") +
                `\u26A0 ${j.length} tool call(s) still pending at script end \u2014 ` +
                `results discarded: ${j.map((re) => re.toolName).join(", ")}. Add 'await'.`
              : z,
            K = {
              code: a,
              result: G === void 0 ? void 0 : MOs(G, 10),
              stdout: R.getStdout(),
              stderr: q,
              ...(V.length > 0 && { registeredTools: V }),
              ...(F.length > 0 && { images: F }),
              ...(W.length > 0 && { documents: W }),
            },
            Y = V.length > 0 ? MAd(I, _.sealers) : void 0;
          return (
            _.replayLog.push({ code: a, calls: DOs(p), threw: !1 }),
            { data: K, newMessages: dwd(p), ...(Y && { newTools: Y }) }
          );
        } catch (D) {
          if (ban(D) && D.stack)
            w(
              `REPL error stack trace:
${D.stack}`,
              { level: "error" },
            );
          let M = Array.from(p.values()).filter((B) => B.phase === "error"),
            L = ban(D) ? tIl(D) : ako(D, _.sealers),
            N = M.length
              ? L +
                `

Inner tool errors (likely root cause):
` +
                M.map((B) => `- ${B.toolName}: ${B.error}`).join(`
`)
              : L,
            P = {
              code: a,
              result: null,
              stdout: R.getStdout(),
              stderr: R.getStderr(),
              error: N,
            };
          return (
            _.replayLog.push({ code: a, calls: DOs(p), threw: !0 }),
            { data: P, newMessages: dwd(p) }
          );
        } finally {
          (u.abort(), m.cancel(), g.cancel(), _.clearAllTimers());
        }
      },
      userFacingName() {
        return "REPL";
      },
      isTransparentWrapper() {
        return !0;
      },
      getToolUseSummary(e) {
        if (!e?.code) return null;
        let t = mp(e.code);
        if (t && t.length > 50) return t.slice(0, 49) + "\u2026";
        return t ?? null;
      },
      renderToolUseMessage() {
        return "";
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let r = "";
        if (
          !e.stdout &&
          !e.stderr &&
          !e.error &&
          e.result !== void 0 &&
          !e.registeredTools?.length
        )
          r = MOs(e.result, 10);
        else {
          let n = [];
          if (e.stdout)
            n.push(`stdout:
${e.stdout}`);
          if (e.stderr)
            n.push(`stderr:
${e.stderr}`);
          if (e.error) n.push(`error: ${e.error}`);
          if (e.result !== void 0) n.push(`result: ${MOs(e.result, 10)}`);
          if (e.registeredTools?.length)
            n.push(`Registered tools: ${e.registeredTools.join(", ")}`);
          r =
            n.join(`

`) || "";
        }
        if (e.images?.length || e.documents?.length) {
          let n = pwd(),
            o =
              r.length > n
                ? r.slice(0, n) +
                  `
[\u2026 ${r.length - n} more chars truncated \u2014 block-bearing REPL results are capped at ${n} chars of text]`
                : r || "(no text output)";
          return {
            tool_use_id: t,
            type: "tool_result",
            content: [
              { type: "text", text: o },
              ...(e.images ?? []).map((i) => ({
                type: "image",
                source: {
                  type: "base64",
                  media_type: i.mediaType,
                  data: i.base64,
                },
              })),
              ...(e.documents ?? []).map((i) => ({
                type: "document",
                source: {
                  type: "base64",
                  media_type: "application/pdf",
                  data: i.base64,
                },
              })),
            ],
          };
        }
        return {
          tool_use_id: t,
          type: "tool_result",
          content: r,
          is_error: !!e.error,
        };
      },
    });
  });
