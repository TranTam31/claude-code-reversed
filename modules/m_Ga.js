// Module: Ga (lines 620511-620702)
  var Ga = S(() => {
    bl();
    vt();
    pt();
    Joo();
    Lm();
    Zoo();
    aH();
    ES();
    xS();
    np();
    Tf();
    ku();
    ei();
    Ge();
    qm();
    Fxe();
    n_();
    Ar();
    Qr();
    st();
    vc();
    R5();
    Ni();
    Wi();
    jtr();
    Qa();
    Zm();
    em();
    Ir();
    vo();
    hp();
    m8s();
    OE();
    vT();
    qh();
    Zt();
    _V();
    Pr();
    om();
    _8s();
    eU();
    ((ssp = require("crypto")),
      (VV = require("fs")),
      (gc = require("fs/promises")),
      (JS = require("path")),
      (asp = require("readline")),
      (lsp = require("string_decoder")),
      (rU_ =
        typeof {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.220",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-07-24T22:17:45Z",
          GIT_SHA: "4073f59596e272f39393db4f96abc5f4b10eff21",
          DD_SOURCEMAP_GROUP: "win32",
        } < "u"
          ? {
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
            }.VERSION
          : "unknown"),
      (csp =
        /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/));
    ((usp = {
      user: "dedup-transcript",
      assistant: "dedup-transcript",
      attachment: "dedup-transcript",
      system: "dedup-transcript",
      progress: "dedup-transcript",
      summary: "always",
      "custom-title": "always",
      "ended-by-model": "always",
      "ai-title": "always",
      "last-prompt": "always",
      tag: "always",
      relocated: "always",
      "agent-name": "always",
      "agent-color": "always",
      "agent-setting": "always",
      "pr-link": "always",
      "frame-link": "always",
      "bridge-session": "always",
      "file-history-snapshot": "always",
      "file-history-delta": "always",
      "attribution-snapshot": "always",
      mode: "always",
      "permission-mode": "always",
      "isolation-latch": "always",
      "worktree-state": "always",
      "queue-operation": "always",
      "marble-origami-commit": "always",
      "marble-origami-snapshot": "always",
      "marble-origami-reset": "always",
      "content-replacement": "route-by-agent",
      "fork-context-ref": "route-by-agent",
      "observer-ref": "route-by-agent",
    }),
      (iU_ = 8 * Q_r));
    aU_ = {
      user: "transcript",
      assistant: "transcript",
      system: "transcript",
      attachment: "transcript",
      progress: "boundary-cleared",
      "file-history-snapshot": "boundary-cleared",
      "file-history-delta": "boundary-cleared",
      "last-prompt": "boundary-cleared",
      "marble-origami-commit": "boundary-cleared",
      "marble-origami-snapshot": "boundary-cleared",
      "marble-origami-reset": "boundary-cleared",
      "content-replacement": "accumulate",
      "fork-context-ref": "accumulate",
      "frame-link": "accumulate",
      summary: "last-wins",
      "custom-title": "last-wins",
      "ended-by-model": "last-wins",
      "ai-title": "last-wins",
      tag: "last-wins",
      relocated: "last-wins",
      "agent-name": "last-wins",
      "agent-color": "last-wins",
      "agent-setting": "last-wins",
      "pr-link": "last-wins",
      "bridge-session": "last-wins",
      "attribution-snapshot": "last-wins",
      mode: "last-wins",
      "permission-mode": "last-wins",
      "isolation-latch": "last-wins",
      "worktree-state": "last-wins",
      "queue-operation": "last-wins",
      "observer-ref": "last-wins",
    };
    dU_ = new Set([
      "bash_progress",
      "powershell_progress",
      "mcp_progress",
      ...[],
      "repl_tool_call",
      "tool_heartbeat",
      "agent_api_retry",
    ]);
    b8s = [
      "isObserver",
      "observerStopped",
      "observerTaskId",
      "armingPermissionMode",
    ];
    ((hRe = new Map()), (rBo = new Map()));
    rsp = new Set();
    gRe = class gRe extends Error {
      code;
      constructor(e, t) {
        super(e);
        this.code = t;
      }
    };
    Lsp = KG();
    ((z8s = Rs()), (K8s = z8s.subscribe));
    ((zfn = Rs()), (mBo = zfn.subscribe));
    pTo = Rs();
    Iht = qr(
      async (e) => {
        try {
          let { messages: t } = await X8s(e);
          return new Set(t.keys());
        } catch (t) {
          return (
            w(
              `getSessionMessages: loadSessionFile failed: ${t instanceof Error ? t.message : String(t)}`,
              { level: "error" },
            ),
            new Set()
          );
        }
      },
      (e) => e,
    );
    A8s = /[^a-zA-Z0-9/\\:-]/;
    JU_ = new Set([]);
  });
