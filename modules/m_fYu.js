// Module: fYu (lines 347413-349181)
  var fYu = S(() => {
    Bv();
    Vys();
    p_s();
    kQr();
    Xgo();
    MC();
    _Q();
    xue();
    bl();
    g_s();
    Far();
    Vn();
    pt();
    _pe();
    Wu();
    DQr();
    Ss();
    OQr();
    x_s();
    wSs();
    MZr();
    LZr();
    jZr();
    XLt();
    ISs();
    Gp();
    Eo();
    Tf();
    O_o();
    Ge();
    Ei();
    qm();
    Ar();
    Qr();
    st();
    RT();
    _z();
    PM();
    ox();
    mee();
    Ztr();
    Ir();
    Xze();
    U_o();
    hLt();
    MSs();
    QG();
    HHe();
    pV();
    ts();
    XQ();
    KZr();
    H$e();
    XC();
    Dh();
    Iy();
    Gx();
    h1();
    MIt();
    zB();
    eNe();
    Pr();
    HU();
    hpe();
    Glr();
    tat();
    fv();
    Mk();
    FZ();
    W8();
    zt();
    Zr();
    vt();
    Yd();
    r8u();
    o8u();
    tOt();
    g_o();
    FSs();
    USs();
    Pse();
    I0();
    Qut();
    K_o();
    BSs();
    lEs();
    J_o();
    Pgo();
    q8u();
    e9e();
    $It();
    Lqr();
    iR();
    rbo();
    Qpe();
    nen();
    _Y();
    AEs();
    obe();
    Xlr();
    Ise();
    WT();
    pen();
    n9e();
    kEs();
    IEs();
    Fro();
    lL();
    nbe();
    fst();
    Gb();
    Zt();
    FQr();
    obe();
    ((kKu = require("crypto")),
      (IKu = require("stream")),
      (RKu = require("url")),
      (LKu = require("path")),
      (pcr = (bbo(), en(_bo)).fetchMcpSkillsForClient),
      (Rvs = (UEs(), en(FEs))));
    yAy = [250, 500, 1000];
    Mvs = new Set();
    vAy = new Set(["sse-ide", "ws-ide", "sdk"]);
    Kbo = Promise.resolve();
    kAy = {
      AUTH_HEADER_REJECTED: {
        severity: "bad",
        featureErrorCode: "mcp_connect_auth_header_rejected",
      },
      CLI_OWNED_BEARER_REJECTED: {
        severity: "bad",
        featureErrorCode: "mcp_connect_cli_owned_bearer_rejected",
      },
      FIRST_PARTY_AUTH_REJECTED: {
        severity: "sad",
        featureErrorCode: "mcp_connect_first_party_auth_rejected",
      },
    };
    Vvs = new Set(["write_files", "create_support_js", "copy_files"]);
    DAy = new Set([...Vvs, "finalize_plan", "delete_files", ...idt]);
    _dt = new Map();
    MAy = new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);
    OAy = ["mcp__ide__executeCode", "mcp__ide__getDiagnostics"];
    Dvs = new Map();
    $Ay = new Set(["documents"]);
    zbo = new Set();
    ((UAy = [
      ["ECONNRESET", "Connection reset - server may have crashed or restarted"],
      [
        "ETIMEDOUT",
        "Connection timeout - network issue or server unresponsive",
      ],
      ["ECONNREFUSED", "Connection refused - server may be down"],
      ["EPIPE", "Broken pipe - server closed connection unexpectedly"],
      ["EHOSTUNREACH", "Host unreachable - network connectivity issue"],
      ["ESRCH", "Process not found - stdio server process terminated"],
      ["spawn", "Failed to spawn process - check command and permissions"],
    ]),
      (Fke = qr(async (e, t, r) => {
        let n = Date.now(),
          o = ldt(),
          i = t.type ?? "stdio";
        if ((Sr("info", "mcp_connect_starting", { transport: i }), qar(t))) {
          let c = t.configError ?? "No URL configured for this server";
          return (
            yt(e, c),
            Sr("info", "mcp_connect_skipped", {
              transport: i,
              reason: "unconfigured",
            }),
            {
              name: e,
              type: "failed",
              config: t,
              error: c,
              errorCode: "UNCONFIGURED",
            }
          );
        }
        {
          let c = t.configError;
          if (!c && "url" in t)
            try {
              new URL(t.url);
            } catch {
              c =
                "'url' is not a valid URL. Update the server's config and reconnect.";
            }
          if (c)
            return (
              O("tengu_mcp_server_config_invalid", {
                transportType: fe(t.type ?? "stdio"),
                field: Ee("url"),
                source: Ee(t.configError ? "loader" : "connect"),
              }),
              yt(e, c),
              Fl(e, c),
              Sr("warn", "mcp_connect_failed", {
                transport: i,
                duration_ms: Date.now() - n,
                reason: "invalid_config",
              }),
              pe("mcp_connect", "mcp_connect_invalid_config"),
              {
                name: e,
                type: "failed",
                config: t,
                error: c,
                errorCode: "INVALID_CONFIG",
              }
            );
        }
        let s, a, l;
        try {
          let B = function () {
              let q = Date.now();
              for (let K of P.activeCallWatchdogs)
                if (K.armedAt === 0) K.armedAt = q;
            },
            c = "url" in t && G6e(t.url),
            u = xer(t),
            d = (t.type === "sse" || t.type === "http") && Wde(t),
            p =
              (t.type === "sse" || t.type === "http") &&
              !d &&
              !u &&
              !c &&
              YB(t.url) &&
              Pc() &&
              (!!ms()?.accessToken || AEe());
          if (p)
            O("tengu_mcp_first_party_auto_auth", {
              transportType: fe(t.type),
              ...dUe(t),
            });
          if (t.type === "sse") {
            let q = d || p || u ? void 0 : new Jlr(e, t);
            a = q;
            let K = await hdt(e, t),
              Y = await cdt(t.url),
              re = Vlr(MFe(void 0, Y));
            if (q) re = uen(re, q);
            if (((re = Pen(re, t)), p)) re = qbo(re);
            let oe = {
                authProvider: q,
                fetch: re,
                requestInit: {
                  ...Y,
                  headers: {
                    "User-Agent": zq(),
                    "Accept-Encoding": "identity",
                    ...K,
                  },
                },
              },
              ce = async (se, ne) => {
                let ee = {},
                  te = await q?.tokens();
                if (te) ee.Authorization = `Bearer ${te.access_token}`;
                let de = await cdt(String(se));
                return fetch(se, {
                  ...ne,
                  ...de,
                  headers: YKu(ne?.headers, ee, K),
                });
              };
            ((oe.eventSourceInit = {
              fetch: Vlr(q ? uen(ce, q) : p ? qbo(ce) : ce),
            }),
              (l = new uLt(new URL(t.url), oe)),
              yt(e, "SSE transport initialized, awaiting connection"));
          } else if (t.type === "sse-ide") {
            yt(e, `Setting up SSE-IDE transport to ${t.url}`);
            let q = {
              fetch: Vlr(globalThis.fetch),
              requestInit: {
                headers: { "User-Agent": zq(), "Accept-Encoding": "identity" },
              },
            };
            l = new uLt(new URL(t.url), q);
          } else if (t.type === "ws-ide") {
            let q = KK(),
              K = {
                "User-Agent": zq(),
                ...(t.authToken && {
                  "X-Claude-Code-Ide-Authorization": t.authToken,
                }),
              },
              Y = new globalThis.WebSocket(t.url, {
                protocols: ["mcp"],
                headers: K,
                proxy: tY(t.url),
                tls: q || void 0,
              });
            l = new eOt(Y, (re) => aoe.parse(re));
          } else if (t.type === "ws") {
            yt(e, `Initializing WebSocket transport to ${t.url}`);
            let q = await hdt(e, t),
              K = KK(),
              Y = c ? zb() : null,
              re = {
                "User-Agent": zq(),
                ...(Y && { Authorization: `Bearer ${Y}` }),
                ...q,
              },
              oe = jv(re, (se, ne) =>
                ne.toLowerCase().endsWith("authorization") ? "[REDACTED]" : se,
              );
            yt(
              e,
              `WebSocket transport options: ${Ie({ url: t.url, headers: oe, hasSessionAuth: !!Y })}`,
            );
            let ce = new globalThis.WebSocket(t.url, {
              protocols: ["mcp"],
              headers: re,
              proxy: tY(t.url),
              tls: K || void 0,
            });
            l = new eOt(ce, (se) => aoe.parse(se));
          } else if (t.type === "http") {
            (yt(e, `Initializing HTTP transport to ${t.url}`),
              yt(e, `Node version: ${process.version}, Platform: win32`),
              yt(
                e,
                `Environment: ${Ie({ NODE_OPTIONS: process.env.NODE_OPTIONS || "not set", UV_THREADPOOL_SIZE: process.env.UV_THREADPOOL_SIZE || "default", HTTP_PROXY: G0e(process.env.HTTP_PROXY || "not set"), HTTPS_PROXY: G0e(process.env.HTTPS_PROXY || "not set"), NO_PROXY: process.env.NO_PROXY || "not set" })}`,
              ));
            let q = d || p || u ? void 0 : new Jlr(e, t);
            a = q;
            let K = await hdt(e, t),
              Y = await cdt(t.url),
              re = Vlr(MFe(void 0, Y));
            if (q) re = uen(re, q);
            if (((re = Pen(re, t)), p)) re = qbo(re);
            if (c) re = NKu(re);
            if (u) re = $Ku(re, t);
            let oe = {
                authProvider: q,
                fetch: re,
                requestInit: {
                  ...Y,
                  headers: {
                    "User-Agent": zq(),
                    "Accept-Encoding": "identity",
                    ...K,
                  },
                },
              },
              ce = oe.requestInit?.headers
                ? jv(oe.requestInit.headers, (se, ne) =>
                    ne.toLowerCase().endsWith("authorization")
                      ? "[REDACTED]"
                      : se,
                  )
                : void 0;
            (yt(
              e,
              `HTTP transport options: ${Ie({ url: t.url, headers: ce, hasAuthProvider: !!q, timeoutMs: qvs(t) })}`,
            ),
              (l = new dLt(new URL(t.url), oe)),
              yt(e, "HTTP transport created successfully"));
          } else if (t.type === "sdk")
            throw Error("SDK servers should be handled in print.ts");
          else if (t.type === "claudeai-proxy") {
            if (!Pc())
              throw Error(
                "claude.ai MCP proxy is not available on third-party providers",
              );
            if (
              (yt(
                e,
                `Initializing claude.ai proxy transport for server ${t.id}`,
              ),
              !ms())
            )
              throw Error("No claude.ai OAuth token found");
            let K = Ds(),
              Y = `${K.MCP_PROXY_URL}${K.MCP_PROXY_PATH.replace("{server_id}", t.id)}`;
            yt(e, `Using claude.ai proxy at ${Y}`);
            let re = FKu(Vlr(globalThis.fetch)),
              oe = kh({ url: Y }),
              se = {
                fetch: Z_o(t) ? V8u(Pen(re, t), Y) : Pen(re, t),
                requestInit: {
                  ...oe,
                  headers: {
                    "User-Agent": zq(),
                    "Accept-Encoding": "identity",
                    "X-Mcp-Client-Session-Id": Ht(),
                  },
                },
              };
            ((l = new dLt(new URL(Y), se)),
              yt(e, "claude.ai proxy transport created successfully"));
          } else if (Gde(t) && RY(e)) {
            let { createChromeContext: q } = await Promise.resolve().then(
                () => (nSo(), rSo),
              ),
              {
                createChromeSocketClient: K,
                createClaudeForChromeMcpServer: Y,
              } = await Promise.resolve().then(() => (Pjn(), ERi)),
              { createLinkedTransportPair: re } = await Promise.resolve().then(
                () => Den,
              ),
              { setChromeBinding: oe } = await Promise.resolve().then(
                () => (Ebo(), qEs),
              ),
              ce = q(t.env),
              se = K(ce);
            (oe(ce, se), (s = Y(ce, se)));
            let [ne, ee] = re();
            (await s.connect(ee),
              (l = ne),
              yt(e, "In-process Chrome MCP server started"));
          } else if (Gde(t) && rbe(e)) {
            let { createComputerUseMcpServerForCli: q } =
                await Promise.resolve().then(() => (Gbo(), Wbo)),
              { createLinkedTransportPair: K } = await Promise.resolve().then(
                () => Den,
              );
            s = await q();
            let [Y, re] = K();
            (await s.connect(re),
              (l = Y),
              yt(e, "In-process Computer Use MCP server started"));
          } else if (t.type === "stdio" || !t.type) {
            let q = process.env.CLAUDE_CODE_SHELL_PREFIX || t.command,
              K = process.env.CLAUDE_CODE_SHELL_PREFIX
                ? [Fd([t.command, ...t.args])]
                : t.args,
              Y = Uzr() ? { ...xQr(), ...eat() } : FD(),
              { CLAUDE_CODE_CHILD_SESSION: re, ...oe } = Y;
            l = new XZr({
              command: q,
              args: K,
              env: {
                ...oe,
                CLAUDE_PROJECT_DIR: Rl(),
                CLAUDE_CODE_SESSION_ID: Ht(),
                CLAUDECODE: "1",
                ...t.env,
              },
              stderr: "pipe",
            });
          } else throw Error(`Unsupported server type: ${t.type}`);
          let f,
            m,
            g = "";
          if (t.type === "stdio" || !t.type) {
            let q = l;
            if (q.stderr instanceof IKu.Readable)
              ((m = q.stderr),
                (f = (K) => {
                  if (g.length < 67108864)
                    try {
                      g += K.toString();
                    } catch {}
                }),
                m.on("data", f));
          }
          let y = new sLt(
            {
              name: "claude-code",
              title: "Claude Code",
              version:
                {
                  ISSUES_EXPLAINER:
                    "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.220",
                  FEEDBACK_CHANNEL:
                    "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-07-24T22:17:45Z",
                  GIT_SHA: "4073f59596e272f39393db4f96abc5f4b10eff21",
                  DD_SOURCEMAP_GROUP: "win32",
                }.VERSION ?? "unknown",
              description: "Anthropic's agentic coding tool",
              websiteUrl: Aut,
            },
            { capabilities: Alr() },
          );
          if (t.type === "http")
            yt(e, "Client created, setting up request handler");
          if (
            (y.setRequestHandler(
              W2r,
              async () => (
                yt(e, "Received ListRoots request from server"),
                tYu(rYu(t))
              ),
            ),
            yt(e, `Starting connection with timeout of ${N$()}ms`),
            t.type === "http")
          ) {
            yt(e, `Testing basic HTTP connectivity to ${t.url}`);
            try {
              let q = new URL(t.url);
              if (
                (yt(
                  e,
                  `Parsed URL: host=${q.hostname}, port=${q.port || "default"}, protocol=${q.protocol}`,
                ),
                q.hostname === "127.0.0.1" || q.hostname === "localhost")
              )
                yt(e, `Using loopback address: ${q.hostname}`);
            } catch (q) {
              yt(e, `Failed to parse URL: ${q}`);
            }
          }
          let _ = W8u(t);
          if (Z_o(t))
            (yt(
              e,
              _
                ? "Stateless claudeai-proxy \u2014 resolving MCP initialize from cached projection"
                : "Stateless claudeai-proxy \u2014 no cached projection; real initialize, GET SSE suppressed",
            ),
              G8u(l, _));
          let E = y.connect(l),
            A = new Promise((q, K) => {
              let Y = setTimeout(() => {
                let re = Date.now() - n;
                if (
                  (yt(
                    e,
                    `Connection timeout triggered after ${re}ms (limit: ${N$()}ms)`,
                  ),
                  s)
                )
                  s.close().catch(() => {});
                (l?.close().catch(() => {}),
                  K(
                    new Dr(
                      `MCP server "${e}" connection timed out after ${N$()}ms`,
                      "MCP connection timeout",
                    ),
                  ));
              }, N$());
              E.then(
                () => {
                  clearTimeout(Y);
                },
                (re) => {
                  clearTimeout(Y);
                },
              );
            });
          try {
            if ((await Promise.race([E, A]), g))
              (Fl(e, `Server stderr: ${g}`), (g = ""));
            if (f && m) (m.off("data", f), m.resume());
            let q = Date.now() - n;
            if (
              (yt(
                e,
                `Successfully connected (transport: ${t.type || "stdio"}) in ${q}ms`,
              ),
              (t.type === "stdio" || !t.type) && l instanceof XZr && l.pid)
            )
              Aer("mcp_stdio", l.pid);
          } catch (q) {
            let K = Date.now() - n;
            if (l instanceof XZr && l.overflowError) {
              if ((Fl(e, l.overflowError.message), g))
                Fl(e, `Server stderr: ${g}`);
              throw l.overflowError;
            }
            if (t.type === "sse" && q instanceof Error) {
              (yt(
                e,
                `SSE Connection failed after ${K}ms: ${Ie({ url: t.url, error: q.message, errorType: q.constructor.name, stack: q.stack })}`,
              ),
                Fl(e, q));
              let Y = await AKu({
                name: e,
                serverRef: t,
                transportType: "sse",
                error: q,
                statusCode: q.code,
                sawAuthChallenge: a?.sawAuthChallenge === !0,
                hasUserAuthHeader: d,
                cliOwnedBearer: u,
                useFirstPartyAuth: p,
              });
              if (Y) return Y;
            } else if (t.type === "http" && q instanceof Error) {
              let Y = q;
              (yt(
                e,
                `HTTP Connection failed after ${K}ms: ${q.message} (code: ${Y.code || "none"}, errno: ${Y.errno || "none"})`,
              ),
                Fl(e, q));
              let re = await AKu({
                name: e,
                serverRef: t,
                transportType: "http",
                error: q,
                statusCode: q.code,
                sawAuthChallenge: a?.sawAuthChallenge === !0,
                hasUserAuthHeader: d,
                cliOwnedBearer: u,
                useFirstPartyAuth: p,
              });
              if (re) return re;
            } else if (t.type === "claudeai-proxy" && q instanceof Error) {
              (yt(
                e,
                `claude.ai proxy connection failed after ${K}ms: ${q.message}`,
              ),
                Fl(e, q));
              let Y = q.code;
              if (Y === 401 || Y === 403) return OKu(e, t, "claudeai-proxy");
            } else if (t.type === "sse-ide" || t.type === "ws-ide")
              O("tengu_mcp_ide_server_connection_failed", {
                connectionDurationMs: K,
              });
            if (s) s.close().catch(() => {});
            if ((l.close().catch(() => {}), g)) Fl(e, `Server stderr: ${g}`);
            throw q;
          }
          let b = y.getServerCapabilities(),
            T = y.getServerVersion(),
            C = iUe(t),
            I = q_o(C, e) ?? y.getInstructions(),
            R = I;
          if (I && I.length > NU)
            ((R = ma(I, NU) + "\u2026 [truncated]"),
              yt(
                e,
                `Server instructions truncated from ${I.length} to ${NU} chars`,
              ));
          if (
            (yt(
              e,
              `Connection established with capabilities: ${Ie({ hasTools: !!b?.tools, hasPrompts: !!b?.prompts, hasResources: !!b?.resources, hasResourceSubscribe: !!b?.resources?.subscribe, serverVersion: T || "unknown" })}`,
            ),
            w(
              `[MCP] Server "${e}" connected with subscribe=${!!b?.resources?.subscribe}`,
            ),
            y.setRequestHandler(
              Vue,
              async (q) => (
                yt(
                  e,
                  `Elicitation request received during initialization: ${Ie(q)}`,
                ),
                { action: "cancel" }
              ),
            ),
            t.type === "sse-ide" || t.type === "ws-ide")
          ) {
            let q = Date.now() - n;
            (O("tengu_mcp_ide_server_connection_succeeded", {
              connectionDurationMs: q,
              serverVersion: Nm(T?.version),
            }),
              eSo(y).catch((K) => {
                Fl(e, `Failed to send ide_connected notification: ${K}`);
              }));
          }
          let k = Date.now(),
            D = !1,
            M = y.onerror,
            L = y.onclose,
            N = 3,
            P = {
              consecutiveErrors: 0,
              activeCallWatchdogs: new Set(),
              pendingElicitations: 0,
              lastElicitationClosedAt: 0,
            },
            G = !1,
            V = (q) => {
              if (G) return;
              ((G = !0),
                yt(e, `Closing transport (${q})`),
                y.close().catch((K) => {
                  yt(e, `Error during close: ${le(K)}`);
                }));
            };
          if (
            ((y.onerror = (q) => {
              let K = t.type || "stdio";
              if (K === "stdio" && q instanceof SyntaxError) {
                Fl(e, `Ignoring non-JSON line on stdout: ${q.message}`);
                return;
              }
              if (q instanceof r9e) return;
              if (K === "stdio" && q instanceof YZr) {
                if ((Fl(e, q.message), (D = !0), V("stdout overflow"), M)) M(q);
                return;
              }
              if (
                (K === "sse" ||
                  K === "sse-ide" ||
                  K === "http" ||
                  K === "claudeai-proxy") &&
                q.message.includes(OSs)
              ) {
                if ((Fl(e, q.message), (D = !0), V("http body overflow"), M))
                  M(q);
                return;
              }
              if (
                (K === "sse" || K === "http" || K === "claudeai-proxy") &&
                q instanceof SyntaxError
              ) {
                if (
                  ((D = !0),
                  B(),
                  V("malformed JSON-RPC message (response truncated)"),
                  M)
                )
                  M(q);
                return;
              }
              let Y = Date.now() - k;
              if (
                ((D = !0),
                yt(
                  e,
                  `${K.toUpperCase()} connection dropped after ${Math.floor(Y / 1000)}s uptime`,
                ),
                q.message)
              ) {
                let re = UAy.find(([oe]) => q.message.includes(oe))?.[1];
                yt(e, re ?? `Connection error: ${q.message}`);
              }
              if (
                (K === "http" || K === "claudeai-proxy") &&
                y.transport?.sessionId !== void 0 &&
                Uvs(q)
              ) {
                if (
                  (yt(
                    e,
                    "MCP session expired (server no longer recognizes session ID), triggering reconnection",
                  ),
                  V("session expired"),
                  M)
                )
                  M(q);
                return;
              }
              if (
                (K === "http" || K === "claudeai-proxy") &&
                y.transport?.sessionId !== void 0 &&
                q instanceof $ee &&
                q.code === 404 &&
                q.message.includes("Failed to open SSE stream")
              )
                Ne("mcp_session_recovery", "get_stream_404_not_reinit");
              if (K === "sse" || K === "http" || K === "claudeai-proxy") {
                if (q.message.includes("Maximum reconnection attempts")) {
                  if (
                    (yt(
                      e,
                      "SSE GET-stream reconnection exhausted; leaving transport up (POST still works)",
                    ),
                    (P.consecutiveErrors = 0),
                    B(),
                    M)
                  )
                    M(q);
                  return;
                }
                if (DKu(q)) {
                  if (
                    (P.consecutiveErrors++,
                    B(),
                    yt(
                      e,
                      `Terminal connection error ${P.consecutiveErrors}/${N}`,
                    ),
                    P.consecutiveErrors >= N)
                  )
                    ((P.consecutiveErrors = 0),
                      V("max consecutive terminal errors"));
                } else P.consecutiveErrors = 0;
              }
              if (M) M(q);
            }),
            y.transport)
          ) {
            let q = y.transport.onmessage;
            y.transport.onmessage = (K, Y) => {
              if (P.consecutiveErrors !== 0) P.consecutiveErrors = 0;
              q?.(K, Y);
            };
          }
          y.onclose = () => {
            let q = Date.now() - k,
              K = t.type ?? "unknown";
            (yt(
              e,
              `${K.toUpperCase()} connection closed after ${Math.floor(q / 1000)}s (${D ? "with errors" : "cleanly"})`,
            ),
              Vbo(e, t, { status: "disconnected", durationMs: q }));
            let Y = Mh(e, t);
            if (
              (zbo.delete(y),
              p9e.cache.delete(Y),
              fOt.cache.delete(Y),
              fcr.cache.delete(Y),
              mcr.cache.delete(Y),
              Fw())
            )
              pcr.cache.delete(Y);
            if (
              (Fke.cache.delete(Y),
              yt(e, "Cleared connection cache for reconnection"),
              L)
            )
              L();
          };
          let F = async () => {
              if (s) {
                try {
                  await s.close();
                } catch (q) {
                  yt(e, `Error closing in-process server: ${q}`);
                }
                try {
                  await y.close();
                } catch (q) {
                  yt(e, `Error closing client: ${q}`);
                }
                return;
              }
              if (t.type === "stdio" || !t.type)
                try {
                  let K = l.pid;
                  if (K) (yt(e, "Terminating MCP server process tree"), Vxe(K));
                  else if (K) {
                    yt(e, "Sending SIGINT to MCP server process");
                    try {
                      process.kill(K, "SIGINT");
                    } catch (Y) {
                      yt(e, `Error sending SIGINT: ${Y}`);
                      return;
                    }
                    await new Promise(async (Y) => {
                      let re = !1,
                        oe = () => {
                          if (re) return;
                          ((re = !0), clearInterval(se), clearTimeout(ne), Y());
                        },
                        ce = (ee) => {
                          try {
                            return (process.kill(ee, 0), !0);
                          } catch {
                            return !1;
                          }
                        },
                        se = setInterval(
                          (ee, te, de, ae) => {
                            if (!ee(te))
                              (yt(de, "MCP server process exited cleanly"),
                                ae());
                          },
                          50,
                          ce,
                          K,
                          e,
                          oe,
                        ),
                        ne = setTimeout(
                          (ee, te) => {
                            (yt(
                              ee,
                              "Cleanup timeout reached, stopping process monitoring",
                            ),
                              te());
                          },
                          600,
                          e,
                          oe,
                        );
                      try {
                        if ((await vr(100), !re)) {
                          if (!ce(K)) {
                            oe();
                            return;
                          }
                          yt(
                            e,
                            "SIGINT failed, sending SIGTERM to MCP server process",
                          );
                          try {
                            process.kill(K, "SIGTERM");
                          } catch (ee) {
                            (yt(e, `Error sending SIGTERM: ${ee}`), oe());
                            return;
                          }
                          if ((await vr(400), !re))
                            if (!ce(K)) oe();
                            else {
                              yt(
                                e,
                                "SIGTERM failed, sending SIGKILL to MCP server process",
                              );
                              try {
                                process.kill(K, "SIGKILL");
                              } catch (ee) {
                                yt(e, `Error sending SIGKILL: ${ee}`);
                              }
                            }
                        }
                        oe();
                      } catch {
                        oe();
                      }
                    });
                  }
                } catch (q) {
                  yt(e, `Error terminating process: ${q}`);
                }
              try {
                await y.close();
              } catch (q) {
                yt(e, `Error closing client: ${q}`);
              }
            },
            W = Aa(F),
            j = async () => {
              (zbo.delete(y), W?.(), await F());
            };
          if ((zbo.add(y), ldt() !== o))
            y.sendRootsListChanged().catch(() => {});
          let z = Date.now() - n;
          return (
            Vbo(e, t, { status: "connected", durationMs: z }),
            O("tengu_mcp_server_connection_succeeded", {
              connectionDurationMs: z,
              transportType: fe(t.type ?? "stdio"),
              sdkGeneration: fe(lz()),
              scope: fe(t.scope),
              isPlugin: t.pluginSource !== void 0,
              totalServers: r?.totalServers,
              stdioCount: r?.stdioCount,
              sseCount: r?.sseCount,
              httpCount: r?.httpCount,
              sseIdeCount: r?.sseIdeCount,
              wsIdeCount: r?.wsIdeCount,
              ...dUe(t),
            }),
            be("mcp_connect"),
            Sr("info", "mcp_connect_complete", {
              transport: i,
              duration_ms: z,
            }),
            {
              name: e,
              client: Xir(y),
              type: "connected",
              capabilities: b ?? {},
              serverInfo: T,
              instructions: R,
              config: t,
              cleanup: j,
              transportErrorState: P,
            }
          );
        } catch (c) {
          let u = Date.now() - n,
            d = le(c),
            p = c instanceof Error ? c.cause : void 0,
            f =
              (c && typeof c === "object" && "code" in c ? c.code : void 0) ??
              (p && typeof p === "object" && "code" in p ? p.code : void 0),
            m = f !== void 0 ? String(f) : void 0;
          if (
            t.type === "http" &&
            m === "404" &&
            l?.sessionId === void 0 &&
            !G6e(t.url)
          )
            ((m = "ENDPOINT_NOT_FOUND"),
              (d = `MCP endpoint not found at ${Nro(t) ?? "(unparseable url)"}. Check the URL in your MCP config.`));
          Vbo(e, t, {
            status: "failed",
            durationMs: u,
            errorCode: m,
            error: d,
          });
          let g =
            m === "ENOENT" && (t.type === "stdio" || t.type === void 0)
              ? "mcp_connect_spawn_enoent"
              : m === "ENDPOINT_NOT_FOUND"
                ? "mcp_connect_endpoint_not_found"
                : void 0;
          if (g !== void 0) pe("mcp_connect", g);
          else {
            let y =
              m === "ECONNREFUSED"
                ? "mcp_connect_refused"
                : d.includes("timed out")
                  ? "mcp_connect_timeout"
                  : "mcp_connect_failed";
            Ne("mcp_connect", `${y}_${t.type ?? "stdio"}`);
          }
          if (
            (O("tengu_mcp_server_connection_failed", {
              connectionDurationMs: u,
              errorCode: m,
              errorClassName: UBn(c),
              errorMessageHash: Yc(VIt(d)),
              totalServers: r?.totalServers || 1,
              stdioCount: r?.stdioCount || (t.type === "stdio" ? 1 : 0),
              sseCount: r?.sseCount || (t.type === "sse" ? 1 : 0),
              httpCount: r?.httpCount || (t.type === "http" ? 1 : 0),
              sseIdeCount: r?.sseIdeCount || (t.type === "sse-ide" ? 1 : 0),
              wsIdeCount: r?.wsIdeCount || (t.type === "ws-ide" ? 1 : 0),
              transportType: fe(t.type ?? "stdio"),
              sdkGeneration: fe(lz()),
              scope: fe(t.scope),
              isPlugin: t.pluginSource !== void 0,
              ...dUe(t),
            }),
            yt(
              e,
              `Connection failed after ${u}ms${m !== void 0 ? ` (${m})` : ""}: ${d}`,
            ),
            Fl(e, `Connection failed${m !== void 0 ? ` (${m})` : ""}: ${d}`),
            Sr("error", "mcp_connect_failed", { transport: i, duration_ms: u }),
            s)
          )
            s.close().catch(() => {});
          if (
            (t.type === "stdio" || t.type === void 0) &&
            t.pluginSource !== void 0
          )
            Wvs(e, _se(t));
          return { name: e, type: "failed", config: t, error: d, errorCode: m };
        }
      }, Mh)));
    nYu = {
      [xs.ConnectionClosed]: "connection_closed",
      [xs.RequestTimeout]: "request_timeout",
      [lUe]: "ccr_needs_approval",
      [xs.ParseError]: "parse_error",
      [xs.InvalidRequest]: "invalid_request",
      [xs.MethodNotFound]: "method_not_found",
      [xs.InvalidParams]: "invalid_params",
      [xs.InternalError]: "internal_error",
    };
    ((iYu = new WeakMap()), (CKu = new WeakMap()));
    Qbo = new WeakMap();
    p9e = T0(
      async (e) => {
        if (e.type !== "connected") return [];
        let t = CKu.get(e) ?? { started: 0, applied: 0 };
        (CKu.set(e, t), (t.started += 1));
        let r = t.started;
        try {
          if (!e.capabilities?.tools) return [];
          let n = Date.now(),
            o = await Xbo(
              dd(e.client),
              e.name,
              "tools/list",
              OCt,
              (D) => D.tools,
            );
          e.toolsListError = void 0;
          let i = u4(o),
            s = hH(e.config),
            a = s ? { mcpServerBaseUrl: s } : {},
            l = IO(El(e.name), Cj(e.name, e.config));
          if (i.length === 0)
            O("tengu_mcp_degraded", {
              reason: Ee("connected_zero_tools"),
              transportType: fe(e.config.type ?? "stdio"),
              mcpServerName: l,
              ...a,
            });
          let c =
              e.config.type === "sdk" &&
              Yt(process.env.CLAUDE_AGENT_SDK_MCP_NO_PREFIX),
            u =
              e.config.type === "claudeai-proxy" ||
              e.config.type === "http" ||
              e.config.type === "sse"
                ? e.config.toolPermissions
                : void 0;
          if (u) {
            let D = Object.keys(u).length;
            if (D > 0 && !i.some((M) => u[M.name] !== void 0))
              w(
                `[claudeai-mcp] ${e.name}: toolPermissions has ${D} entries but none matched upstream tool names \u2014 backend name drift?`,
                { level: "warn" },
              );
          }
          let d = ZKu(e.config),
            p = eYu(e.config),
            f = 0,
            m = 0,
            g = 0,
            y = 0,
            _ = 0,
            E = [],
            A = 0,
            b = 0,
            T = i.flatMap((D) => {
              let M = X_o(D.inputSchema),
                L;
              if (M.outcome === "unchanged") L = D;
              else if (M.outcome === "normalized" && d) {
                (f++,
                  yt(
                    e.name,
                    `Normalized input schema for tool "${D.name}" (flattened top-level ${M.combinators.join("/")})`,
                  ));
                let P = D.description
                  ? `${M.note}

${D.description}`
                  : M.note;
                L = { ...D, inputSchema: M.schema, description: P };
              } else {
                if (M.outcome === "normalized") m++;
                else g++;
                let P =
                  M.outcome === "drop"
                    ? M.reason
                    : `its input schema uses top-level ${M.combinators.join("/")}, which the Anthropic API does not accept`;
                return (
                  Fl(
                    e.name,
                    `Skipping tool "${D.name}": ${P}. Other tools from this server remain available.`,
                  ),
                  []
                );
              }
              let N = Q_o(L.inputSchema);
              if (N.valid) return [L];
              if (!p) {
                if (N.check === "meta") A++;
                else b++;
                return (
                  yt(
                    e.name,
                    `Tool "${D.name}" input schema would be rejected by the Anthropic API (${N.detail}); requests that include it may fail`,
                  ),
                  [L]
                );
              }
              if (N.check === "meta") y++;
              else _++;
              if (u?.[D.name] !== "blocked")
                E.push({ toolName: D.name, reason: N.detail });
              return (
                Fl(
                  e.name,
                  `Skipping tool "${D.name}": its input schema would be rejected by the Anthropic API (${N.detail}). Other tools from this server remain available.`,
                ),
                []
              );
            });
          if (r > t.applied) ((t.applied = r), (e.droppedTools = E));
          if (f > 0)
            O("tengu_mcp_degraded", {
              reason: Ee("tool_schema_normalized"),
              transportType: fe(e.config.type ?? "stdio"),
              normalizedCount: f,
              mcpServerName: l,
              ...a,
            });
          if (m > 0)
            O("tengu_mcp_degraded", {
              reason: Ee("tool_schema_normalize_gated"),
              transportType: fe(e.config.type ?? "stdio"),
              skippedCount: m,
              mcpServerName: l,
              ...a,
            });
          if (g > 0)
            O("tengu_mcp_degraded", {
              reason: Ee("tool_schema_unsupported"),
              transportType: fe(e.config.type ?? "stdio"),
              skippedCount: g,
              mcpServerName: l,
              ...a,
            });
          if (y > 0)
            O("tengu_mcp_degraded", {
              reason: Ee("tool_schema_invalid"),
              transportType: fe(e.config.type ?? "stdio"),
              skippedCount: y,
              mcpServerName: l,
              ...a,
            });
          if (_ > 0)
            O("tengu_mcp_degraded", {
              reason: Ee("tool_property_key_invalid"),
              transportType: fe(e.config.type ?? "stdio"),
              skippedCount: _,
              mcpServerName: l,
              ...a,
            });
          if (A > 0)
            O("tengu_mcp_degraded", {
              reason: Ee("tool_schema_invalid_gated"),
              transportType: fe(e.config.type ?? "stdio"),
              keptCount: A,
              mcpServerName: l,
              ...a,
            });
          if (b > 0)
            O("tengu_mcp_degraded", {
              reason: Ee("tool_property_key_invalid_gated"),
              transportType: fe(e.config.type ?? "stdio"),
              keptCount: b,
              mcpServerName: l,
              ...a,
            });
          let C = () => Cj(e.name, e.config);
          ebo(T, e.name, C(), s, e.instructions);
          let I = GKu(e.config),
            R = iUe(e.config),
            k = T.map((D) => {
              let M = WQ(e.name, D.name),
                L = D._meta?.["anthropic/maxResultSizeChars"],
                N = typeof L === "number" && Number.isFinite(L) && L > 0,
                P = D._meta?.["anthropic/requiresUserInteraction"] === !0,
                B = R?.tools?.[D.name] ?? D.description ?? "",
                G =
                  R?.search_hints?.[D.name] ??
                  (typeof D._meta?.["anthropic/searchHint"] === "string"
                    ? D._meta["anthropic/searchHint"]
                    : void 0),
                V = {
                  ...Gar,
                  name: c ? D.name : M,
                  mcpInfo: {
                    serverName: e.name,
                    scope: e.config.scope,
                    serverType: e.config.type ?? "stdio",
                    displayName:
                      "displayName" in e.config ? e.config.displayName : void 0,
                    iconUrl: "iconUrl" in e.config ? e.config.iconUrl : void 0,
                    serverInfoName: e.serverInfo?.name,
                    toolName: D.name,
                    title:
                      D.annotations?.title?.replace(/\s+/g, " ").trim() ||
                      void 0,
                    execution: D.execution,
                    role: "role" in e.config ? e.config.role : void 0,
                    effectiveMaxPermission: u?.[D.name],
                  },
                  isMcp: !0,
                  searchHint: G?.replace(/\s+/g, " ").trim() || void 0,
                  alwaysLoad:
                    e.config.alwaysLoad === !0 ||
                    D._meta?.["anthropic/alwaysLoad"] === !0,
                  async description() {
                    return B;
                  },
                  async prompt() {
                    return B.length > NU ? ma(B, NU) + "\u2026 [truncated]" : B;
                  },
                  isConcurrencySafe() {
                    return D.annotations?.readOnlyHint ?? !1;
                  },
                  isReadOnly() {
                    return D.annotations?.readOnlyHint ?? !1;
                  },
                  readOnlyHint: D.annotations?.readOnlyHint,
                  toAutoClassifierInput(W) {
                    return oYu(W, D.name);
                  },
                  isDestructive() {
                    return D.annotations?.destructiveHint ?? !1;
                  },
                  isOpenWorld() {
                    return D.annotations?.openWorldHint ?? !1;
                  },
                  requiresUserInteraction() {
                    return P;
                  },
                  suppressesAlwaysAllowRule: () => Nvs(I, D.name),
                  maxResultSizeChars: N
                    ? Math.min(L, gor)
                    : Gar.maxResultSizeChars,
                  persistenceThresholdCeiling: N ? gor : void 0,
                  inputJSONSchema: z_o(
                    D.inputSchema,
                    R?.param_descriptions?.[D.name],
                  ),
                  async checkPermissions(W, j) {
                    let z = jKu(I, D.name, W);
                    if (z) return z;
                    if (I) {
                      let q = mdt(),
                        K = (await q?.wouldNeedDesignConsent()) ?? null;
                      if (K !== null && q && j.toolUseId) {
                        let Y = qKu(j.toolUseId, K, $vs(j));
                        return WKu(q.consentPromptFor(K), W, Y);
                      }
                    }
                    return {
                      behavior: P ? "ask" : "passthrough",
                      message: "MCPTool requires permission.",
                      suggestions:
                        P || Nvs(I, D.name)
                          ? []
                          : [
                              {
                                type: "addRules",
                                rules: [{ toolName: M, ruleContent: void 0 }],
                                behavior: "allow",
                                destination: "localSettings",
                              },
                            ],
                    };
                  },
                  async call(W, j, z, q, K) {
                    let Y = iwy(q),
                      re = Y ? { "claudecode/toolUseId": Y } : {},
                      oe = !1;
                    function ce(ve) {
                      if (!K || !Y || oe) return;
                      K({ type: "progress", toolUseID: Y, data: ve });
                    }
                    ce({
                      type: "mcp_progress",
                      status: "started",
                      serverName: e.name,
                      toolName: D.name,
                    });
                    let se = Date.now(),
                      ne = e,
                      ee = !1,
                      te =
                        typeof W.__consentNonce === "string"
                          ? W.__consentNonce
                          : void 0;
                    if ("__consentNonce" in W) {
                      let { __consentNonce: ve, ...he } = W;
                      W = he;
                    }
                    let de = I ? zKu(Y, te) : null;
                    BKu(I, D.name, W);
                    let ae = async (ve) => {
                        for (let De = 0; ; De++)
                          try {
                            let Ae = await zvs(e);
                            ne = Ae;
                            let Ce = await dYu({
                              client: Ae,
                              clientConnection: e,
                              tool: D.name,
                              args: W,
                              meta: re,
                              signal: ve,
                              setAppState: j.setAppState,
                              imageLimits: g_(j.options.mainLoopModel),
                              toolExecution: D.execution,
                              taskRegistry: j.taskRegistry,
                              toolUseId: Y,
                              onProgress: K && Y ? ce : void 0,
                              requestDialog: j.requestDialog,
                              hasResultSizeAnnotation: N,
                              onAwaitingUserInput: ($e) => {
                                ee = $e;
                              },
                              ccrNeedsApprovalRetry:
                                "url" in e.config &&
                                G6e(e.config.url) &&
                                VKu(j) &&
                                !(vue() && vue() !== "stdio")
                                  ? {
                                      canUseTool: z,
                                      tool: V,
                                      fullyQualifiedName: M,
                                      toolUseContext: j,
                                      parentMessage: q,
                                    }
                                  : void 0,
                            });
                            if (
                              (ce({
                                type: "mcp_progress",
                                status: "completed",
                                serverName: e.name,
                                toolName: D.name,
                                elapsedTimeMs: Date.now() - se,
                              }),
                              !Ce.isError)
                            )
                              M_o(D.name);
                            if (De > 0) be("mcp_session_recovery");
                            return {
                              data: Ce.content,
                              ...(Ce.urlElicitationDeclined && {
                                urlElicitationDeclined:
                                  Ce.urlElicitationDeclined,
                              }),
                              ...((Ce._meta || Ce.structuredContent) && {
                                mcpMeta: {
                                  ...(Ce._meta && { _meta: Ce._meta }),
                                  ...(Ce.structuredContent && {
                                    structuredContent: Ce.structuredContent,
                                  }),
                                },
                              }),
                            };
                          } catch (Ae) {
                            if (Ae instanceof v7 && De < 1) {
                              (Ne("mcp_session_recovery", Ae.expiryKind),
                                yt(
                                  e.name,
                                  `Retrying tool '${D.name}' after session recovery`,
                                ));
                              continue;
                            }
                            if (Ae instanceof v7)
                              pe(
                                "mcp_session_recovery",
                                "session_retry_exhausted",
                              );
                            else if (De > 0)
                              pe("mcp_session_recovery", "retry_failed_other");
                            if (
                              (ce({
                                type: "mcp_progress",
                                status: "failed",
                                serverName: e.name,
                                toolName: D.name,
                                elapsedTimeMs: Date.now() - se,
                              }),
                              Ae instanceof Error && !(Ae instanceof Dr))
                            ) {
                              let Ce = Ae.constructor.name;
                              if (Ce === "Error")
                                throw new Dr(
                                  Ae.message,
                                  Ae.message.slice(0, 200),
                                );
                              if (
                                Ce === "McpError" &&
                                "code" in Ae &&
                                typeof Ae.code === "number"
                              )
                                throw new Dr(Ae.message, `McpError ${Ae.code}`);
                            }
                            throw Ae;
                          }
                      },
                      Te = ae;
                    if (I)
                      Te = KKu(ae, {
                        approvedConsentBit: de?.bit ?? null,
                        consentAskReachesUser:
                          (de?.askReachesUser ?? !1) && $vs(j),
                      });
                    if (
                      Rvs &&
                      !j.agentId &&
                      j.taskRegistry !== oUe &&
                      V.name !== vue()
                    ) {
                      let ve = Rvs.getMcpAutoBackgroundMs(e.config, {
                        isNonInteractiveSession:
                          j.options.isNonInteractiveSession,
                      });
                      if (ve > 0)
                        return Rvs.callMcpToolWithAutoBackground({
                          run: Te,
                          serverName: e.name,
                          toolName: D.name,
                          toolUseId: Y,
                          parentAbortController: j.abortController,
                          taskRegistry: j.taskRegistry,
                          autoBackgroundMs: ve,
                          hasPendingElicitation: () =>
                            ee ||
                            (ne.transportErrorState?.pendingElicitations ?? 0) >
                              0,
                          onBackgrounded: () => {
                            oe = !0;
                          },
                        });
                    }
                    return Te(j.abortController.signal);
                  },
                  userFacingName() {
                    let W = (D.annotations?.title || D.name)
                      .replace(/\s+/g, " ")
                      .trim();
                    return `${e.name} - ${W} (MCP)`;
                  },
                  ...(RY(e.name) &&
                    Gde(e.config) && {
                      ...AAy().getClaudeInChromeMCPToolOverrides(D.name),
                      builtinRenderFamily: "claude-in-chrome",
                    }),
                  ...(Gde(e.config) &&
                    rbe(e.name) && {
                      ...wAy().getComputerUseMCPToolOverrides(D.name),
                      builtinRenderFamily: "computer-use",
                    }),
                  ...(e.config.type === "sdk" && Rer(e.name)
                    ? $ro(e.name, D.name)
                    : {}),
                  ...(nbo(D.name) ? obo() : {}),
                };
              if (
                RY(e.name) &&
                Gde(e.config) &&
                (D.name === "file_upload" || D.name === "browser_batch")
              ) {
                let W = V.call;
                V.call = async (j, z, q, K, Y) => {
                  let { prepareChromeFileUploadInput: re } =
                      await Promise.resolve().then(() => (tSo(), Kvs)),
                    { getToolPermissionContext: oe } =
                      await Promise.resolve().then(() => (jl(), $fo)),
                    ce = await re(D.name, j ?? {}, oe(z));
                  if (ce.error)
                    throw new Dr(
                      ce.error,
                      "Claude in Chrome file_upload path rejected",
                    );
                  return W(ce.input ?? j, z, q, K, Y);
                };
              }
              let F = V.call;
              return (
                (V.call = async (W, j, z, q, K) => {
                  if (
                    ((j.options.activeMcpServer = e.name),
                    (j.options.activeMcpTool = D.name),
                    e.config.pluginSource)
                  )
                    (T$(e.config.pluginSource),
                      j8(e.config.pluginSource, "mcp"));
                  let Y = C();
                  if (Y) Cuo(e.name);
                  return F(
                    tbo(
                      W,
                      D.name,
                      e.name,
                      Y,
                      Ke("tengu_mcp_strip_trailing_xml_tags", !1),
                      s,
                    ),
                    j,
                    z,
                    q,
                    K,
                  );
                }),
                V
              );
            }).filter(NAy);
          return (
            O("tengu_mcp_tools_listed", {
              transportType: fe(e.config.type ?? "stdio"),
              listDurationMs: Date.now() - n,
              toolCount: k.length,
              alwaysLoadCount: pr(k, (D) => D.alwaysLoad === !0),
              ...a,
              mcpServerName: IO(El(e.name), Cj(e.name, e.config)),
            }),
            be("mcp_list_tools"),
            k
          );
        } catch (n) {
          let o = le(n);
          if (e.config.type === "claudeai-proxy" && fen(n))
            return (
              O("tengu_mcp_server_needs_auth", {
                transportType: Ee("claudeai-proxy"),
                cause: Ee("discovery_tools_list"),
                ...dUe(e.config),
              }),
              Wvs(e.name, e.config.id),
              Ne("mcp_list_tools", "mcp_list_tools_needs_auth"),
              yt(
                e.name,
                "tools/list 401/403 on claude.ai proxy \u2014 flagging needs-auth",
              ),
              (e.discoveryAuthFailure = !0),
              p9e.cache.delete(Mh(e.name, e.config)),
              []
            );
          let i =
            n instanceof ys
              ? `mcp_list_tools_${nYu[n.code] ?? "mcperr_other"}`
              : o.includes("timed out")
                ? "mcp_list_tools_timeout"
                : "mcp_list_tools_failed";
          (Ne("mcp_list_tools", i),
            Fl(e.name, `Failed to fetch tools: ${o}`),
            (e.toolsListError = o));
          let s = [];
          iYu.set(s, o);
          let a = dUe(e.config);
          return (
            O("tengu_mcp_degraded", {
              reason: Ee("tools_list_failed"),
              transportType: fe(e.config.type ?? "stdio"),
              ...a,
              mcpServerName: IO(El(e.name), Cj(e.name, e.config)),
            }),
            p9e.cache.delete(Mh(e.name, e.config)),
            s
          );
        }
      },
      (e) => Mh(e.name, e.config),
      Jbo,
    );
    ((fOt = T0(
      async (e) => {
        if (e.type !== "connected") return [];
        try {
          if (!e.capabilities?.resources) return [];
          let t = await Xbo(
            dd(e.client),
            e.name,
            "resources/list",
            aCe,
            (r) => r.resources,
          );
          return (
            be("mcp_list_resources"),
            t.map((r) => ({ ...r, server: e.name }))
          );
        } catch (t) {
          (sYu(
            e,
            t,
            "mcp_list_resources",
            (n) => Ne("mcp_list_resources", n),
            Ee("resources_list_failed"),
            "resources",
          ),
            fOt.cache.delete(Mh(e.name, e.config)));
          let r = [];
          return (Qbo.set(r, _n(t)), r);
        }
      },
      (e) => Mh(e.name, e.config),
      Jbo,
    )),
      (fcr = T0(
        async (e) => {
          if (e.type !== "connected") return [];
          try {
            if (!e.capabilities?.resources) return [];
            let t = await Xbo(
              dd(e.client),
              e.name,
              "resources/templates/list",
              DCt,
              (r) => r.resourceTemplates,
            );
            return (
              O("tengu_mcp_resource_templates_fetched", {
                template_count: t.length,
              }),
              be("mcp_list_resource_templates"),
              t.map((r) => ({ ...r, server: e.name }))
            );
          } catch (t) {
            (fcr.cache.delete(Mh(e.name, e.config)),
              yt(e.name, `Failed to fetch resource templates: ${le(t)}`));
            let r = [];
            if (!(t instanceof ys && t.code === xs.MethodNotFound))
              Qbo.set(r, _n(t));
            return r;
          }
        },
        (e) => Mh(e.name, e.config),
        Jbo,
      )));
    mcr = T0(
      async (e) => {
        if (e.type !== "connected") return [];
        try {
          if (!e.capabilities?.prompts) return [];
          let t = await Xbo(
              dd(e.client),
              e.name,
              "prompts/list",
              MCt,
              (s) => s.prompts,
            ),
            r = u4(t);
          be("mcp_list_prompts");
          let n = e.config,
            o = (n.type === "http" || n.type === "sse") && YB(n.url),
            i = iUe(e.config);
          return r.map((s) => {
            let a = Object.values(s.arguments ?? {}),
              l = a.map((u) => u.name),
              c = i?.prompts?.[s.name] ?? s.description;
            return {
              type: "prompt",
              name: "mcp__" + El(e.name) + "__" + s.name,
              description: c ?? "",
              hasUserSpecifiedDescription: !!c,
              contentLength: 0,
              isEnabled: () => !0,
              isHidden: !1,
              isMcp: !0,
              progressMessage: "running",
              userFacingName() {
                return o ? s.name : `${e.name}:${s.name} (MCP)`;
              },
              aliases: o
                ? [`${e.name}:${s.name}`, `${e.name}:${s.name} (MCP)`]
                : void 0,
              argNames: l,
              source: "mcp",
              async getPromptForCommand(u, d) {
                let p = u.trim(),
                  f = p ? p.split(/\s+/) : [];
                try {
                  let m = a
                    .filter((A, b) => A.required && f[b] === void 0)
                    .map((A) => A.name);
                  if (m.length > 0)
                    throw Error(
                      `Missing required ${Et(m.length, "argument")}: ${m.join(", ")}. Usage: /mcp__${El(e.name)}__${s.name} ${l.join(" ")}`,
                    );
                  let g = await zvs(e),
                    y = await dd(g.client).getPrompt({
                      name: s.name,
                      arguments: Jgo(l, f),
                    }),
                    _ = g_(d.options.mainLoopModel),
                    E = await Promise.all(
                      y.messages.map((A) => Ybo(A.content, g.name, _)),
                    );
                  return (be("mcp_get_prompt"), E.flat());
                } catch (m) {
                  throw (
                    pe("mcp_get_prompt", "mcp_get_prompt_failed"),
                    Fl(e.name, `Error running command '${s.name}': ${le(m)}`),
                    m
                  );
                }
              },
            };
          });
        } catch (t) {
          (sYu(
            e,
            t,
            "mcp_list_prompts",
            (n) => Ne("mcp_list_prompts", n),
            Ee("prompts_list_failed"),
            "commands",
          ),
            mcr.cache.delete(Mh(e.name, e.config)));
          let r = [];
          return (Qbo.set(r, _n(t)), r);
        }
      },
      (e) => Mh(e.name, e.config),
      Jbo,
    );
  });
