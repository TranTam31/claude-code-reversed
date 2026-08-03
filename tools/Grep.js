  var bd = "Grep";
  function eZi(e) {
    if (SE(e))
      return `Content search built on ripgrep. Prefer this over \`grep\`/\`rg\` via ${ri} \u2014 results integrate with the permission UI and file links.

- Full regex syntax (e.g. "log.*Error", "function\\s+\\w+"). Ripgrep, not grep \u2014 escape literal braces (\`interface\\{\\}\`).
- Filter with \`glob\` (e.g. "**/*.tsx") or \`type\` (e.g. "js", "py", "rust").
- \`output_mode\`: "content" (matching lines), "files_with_matches" (paths only, default), or "count".
- \`multiline: true\` for patterns that span lines.`;
    return `A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${bd} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${ri} command. The ${bd} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
${
  C5() === "default"
    ? `  - Use ${Vo} tool (if available) for open-ended searches requiring multiple rounds
`
    : ""
}  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`;
  }
  var ND = S(() => {
    FB();
    ube();
    mh();
  });
  function Mou() {
    return process.env.CLAUDE_REPL_VARIANT;
  }
  function uzr(e, t) {
    return (e ?? {})[t ?? IRt] !== void 0;
  }
  function c1() {
    if (!toe()) return !1;
    if (su(process.env.CLAUDE_CODE_REPL)) return !1;
    if (Yt(process.env.CLAUDE_CODE_REPL)) return !0;
    let e = process.env.CLAUDE_CODE_ENTRYPOINT;
    if (e === "cli" || e === "remote") return Ke("tengu_slate_harbor", !1);
    return !1;
  }
  var Ng = "REPL",
    eio = "repl-registered",
    IRt = "main",
    RRt;
  var aH = S(() => {
    Zr();
    Qr();
    Rh();
    VM();
    ND();
    RRt = new Set([zi, xd, bd, ri, qi, DT]);
  });
  function zst(e, t, r) {
    Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      writable: !0,
      configurable: !0,
    });
  }
  function bbe(e, t) {
    return Object.hasOwn(e, t) ? e[t] : void 0;
  }
  function xU(e, t) {
    let r = 0,
      n = [];
    function o() {
      if (r < e) return (r++, Promise.resolve());
      return new Promise((s) => n.push(s));
    }
    function i() {
      let s = n.shift();
      if (s) s();
      else r--;
    }
    return async (...s) => {
      await o();
      try {
        return await t(...s);
      } finally {
        i();
      }
    };
  }
  function fqe(e) {
    if (!Array.isArray(e)) return [];
    return e
      .filter((t) => typeof t === "string" && t.length > 0 && t.length <= 64)
      .slice(0, 32);
  }
  var dzr = 32;
  function mqe(e, t) {
    return { ...e, endedByModel: t };
  }
  function Kst(e) {
    return e?.endedByModel;
  }
  function tio() {
    return !1;
  }
  function rZi() {
    return "";
  }
  function gie(e) {
    let t = rZi();
    return t === "" ? e : `${e} ${t}`;
  }
  var Fxe = S(() => {
    Ar();
  });
  function Uxe(e) {
    if (e.type !== "user") return !1;
    let t = e.message?.content;
    if (typeof t === "string") return Lou.some((r) => t.startsWith(r));
    if (!Array.isArray(t)) return !1;
    return (
      t.length > 0 &&
      t.every((r) => {
        let n =
          r.type === "text"
            ? r.text
            : r.type === "tool_result" && r.is_error === !0
              ? r.content
              : void 0;
        return typeof n === "string" && Lou.some((o) => n.startsWith(o));
      })
    );
  }
  function Btr(e) {
    if (e.type !== "user" || e.interruptedByShutdown !== !0) return !1;
    let t = e.message?.content;
    return Array.isArray(t) && t.some((r) => r.type === "tool_result");
  }
  function pzr(e, t) {
    return `${e}${Oou}${t}`;
  }
  function Nou(e) {
    if (e.type !== "user" || e.isMeta !== !0) return !1;
    let t = e.message?.content,
      r = Array.isArray(t) ? t[0] : void 0,
      n =
        typeof t === "string"
          ? t
          : r?.type === "text" && typeof r.text === "string"
            ? r.text
            : void 0;
    if (typeof n !== "string") return !1;
    if (MDg.some((i) => n.startsWith(i))) return !0;
    if (LDg.includes(n)) return !0;
    let o = n.indexOf(`
`);
    return o > 0 && n.slice(0, o + 1).endsWith(Oou);
  }
  var w8 = "[Request interrupted by user]",
    qI = "[Request interrupted by user for tool use]",
    FY =
      "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.",
    T8 = "API Error: Request was aborted.",
    Utr = "Operation stopped by hook",
    Lou,
    Oou = ` hook feedback:
`,
    rio = "[structured-output-enforce]",
    PDg = "",
    nZi =
      "The previous response failed to produce a valid tool call. Please retry the tool call now.",
    oZi = "Your tool call was malformed and could not be parsed. Please retry.",
    iZi =
      "[Your previous response had no visible output. Please continue and produce a user-visible response.]",
    sZi = "The PermissionDenied hook indicated you may retry this tool call.",
    MDg,
    LDg;
  var R5 = S(() => {
    A5();
    Lou = [w8, qI, FY];
    ((MDg = [rio, PDg, z7i].filter((e) => e.length > 0)),
      (LDg = [nZi, oZi, iZi, sZi]));
  });
  async function Bxe(e) {
    let t = Date.now(),
      { stdout: r, code: n } = await Yn(
        fo(),
        [
          "-c",
          "core.hooksPath=/dev/null",
          "-c",
          "core.fsmonitor=",
          "worktree",
          "list",
          "--porcelain",
        ],
        { cwd: e, preserveOutputOnError: !1 },
      ),
      o = Date.now() - t;
    if (n !== 0)
      return (
        O("tengu_worktree_detection", {
          duration_ms: o,
          worktree_count: 0,
          success: !1,
        }),
        []
      );
    let i = r
      .split(
        `
`,
      )
      .filter((l) => l.startsWith("worktree "))
      .map((l) => Nd(l.slice(9)));
    O("tengu_worktree_detection", {
      duration_ms: o,
      worktree_count: i.length,
      success: !0,
    });
    let s = i.find((l) => e === l || e.startsWith(l + $ou.sep)),
      a = i.filter((l) => l !== s).sort((l, c) => l.localeCompare(c));
    return s ? [s, ...a] : a;
  }
  var $ou;
  var jtr = S(() => {
    vt();
    np();
    Ja();
    Qa();
    $ou = require("path");
  });
  function Fou(e) {
    (nio.add(e), e.finally(() => nio.delete(e)));
  }
  function Uou() {
    return nio.size > 0;
  }
  async function Bou() {
    await Promise.allSettled(Array.from(nio));
  }
  var nio;
  var aZi = S(() => {
    nio = new Set();
  });
  var oio = 78,
    fzr = 75,
    mzr = 70;
  function iio({ maxBatchSize: e, getFlushIntervalMs: t, post: r }) {
    let n = [],
      o = null;
    async function i() {
      if (n.length === 0) return;
      let c = n;
      ((n = []), await r(c));
    }
    function s() {
      if (o) (clearTimeout(o), (o = null));
    }
    function a() {
      i().catch(() => {});
    }
    function l() {
      if (o) return;
      o = setTimeout(() => {
        ((o = null), a());
      }, t()).unref();
    }
    return {
      enqueue(c) {
        if ((n.push(c), n.length >= e)) (s(), a());
        else l();
      },
      flush: i,
      async shutdown() {
        (s(), await i());
      },
      drainForTesting() {
        s();
        let c = n;
        return ((n = []), c);
      },
    };
  }
  var Wou = {};
  tt(Wou, {
    shutdownErrorTracking: () => GDg,
    isErrorTrackingCapReached: () => cZi,
    flushErrorTracking: () => jDg,
    enqueueErrorLog: () => uZi,
    _resetForTesting: () => VDg,
  });
  function UDg() {
    return (
      $d(process.env.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS) || NDg
    );
  }
  async function BDg(e) {
    let t = Ie(e),
      r = new URLSearchParams({
        ddsource: "browser",
        "dd-api-key": sio,
        "dd-evp-origin": "browser",
        "dd-evp-origin-version": {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.220",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-07-24T22:17:45Z",
          GIT_SHA: "4073f59596e272f39393db4f96abc5f4b10eff21",
          DD_SOURCEMAP_GROUP: "win32",
        }.VERSION,
        "dd-request-id": jou.randomUUID(),
      });
    try {
      await FA.post(`${ODg}?${r}`, t, {
        headers: { "Content-Type": "application/json" },
        timeout: FDg,
      });
    } catch (n) {
      if (tk(n) && n.response)
        w(
          `dd-error-tracking: intake responded ${n.response.status} (batch=${e.length})`,
          { level: "warn" },
        );
      else w(`dd-error-tracking: intake failed: ${le(n)}`, { level: "warn" });
    }
  }
  async function jDg() {
    await gzr.flush();
  }
  function cZi() {
    return hzr >= Wtr;
  }
  function WDg(e) {
    return {
      ...e,
      message: `ErrorTrackingCapReached: per-process cap of ${Wtr} hit, dropping further reports`,
      error: {
        kind: "ErrorTrackingCapReached",
        message: `per-process cap of ${Wtr} hit`,
        stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`,
        fingerprint: "cap-reached-sentinel",
        handling: "handled",
      },
      error_frames: void 0,
    };
  }
  function uZi(e) {
    if (hzr >= Wtr) return;
    if ((hzr++, hzr === Wtr && !lZi))
      ((lZi = !0),
        w(
          `dd-error-tracking: per-process report cap reached (${Wtr}); dropping further reports`,
          { level: "warn" },
        ),
        gzr.enqueue(WDg(e)));
    else gzr.enqueue(e);
  }
  async function GDg() {
    await gzr.shutdown();
  }
  function VDg() {
    let e = gzr.drainForTesting();
    return ((hzr = 0), (lZi = !1), e);
  }
  var jou,
    ODg = "https://browser-intake-us5-datadoghq.com/api/v2/logs",
    NDg = 30000,
    $Dg = 25,
    FDg = 1e4,
    Wtr = 100,
    hzr = 0,
    lZi = !1,
    gzr;
  var dZi = S(() => {
    Bv();
    Ge();
    st();
    Zt();
    lbe();
    EM();
    jou = require("crypto");
    gzr = iio({ maxBatchSize: $Dg, getFlushIntervalMs: UDg, post: BDg });
  });
  var yzr = Q(function (MUA, Gou) {
    var qDg = Number.MAX_SAFE_INTEGER || 9007199254740991,
      zDg = [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease",
      ];
    Gou.exports = {
      MAX_LENGTH: 256,
