  var xd = "Glob";
  function zQi(e) {
    if (SE(e))
      return 'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';
    return C5() === "default" ? xDg : bou;
  }
  var bou = `- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns`,
    xDg;
  var VM = S(() => {
    mh();
    FB();
    ube();
    xDg = `${bou}
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the ${Vo} tool instead (if available)`;
  });
  function Sou(e) {
    return KQi.test(e) || YQi.test(e);
  }
  var KQi, YQi;
  var XQi = S(() => {
    ((KQi = /[.\s]+$/), (YQi = /\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i));
  });
  var b$ = "ExitPlanMode",
    qM = "ExitPlanMode";
  function lzr() {
    let e = Z.CLAUDE_CODE_ENVIRONMENT_KIND;
    if (e === "byoc" || e === "anthropic_cloud") return e;
    return null;
  }
  function Eou(e, t) {
    return Boolean(e) && (!t || t === "anthropic_cloud");
  }
  var czr = S(() => {
    Ge();
    Ar();
  });
  function wou(e) {
    let t = new Map();
    if (!e) return t;
    try {
      let r = Bt(e);
      if (r && typeof r === "object") {
        for (let [n, o] of Object.entries(r))
          if (typeof o === "string") t.set(n, o);
      }
    } catch (r) {
      w(`[repo-checkouts] Failed to parse env map: ${le(r)}`, {
        level: "error",
      });
    }
    return t;
  }
  function JQi() {
    if (Ftr) return Ftr;
    let e = process.env.CLAUDE_CODE_REPO_CHECKOUTS;
    if (!e) return ((Ftr = new Map([["", kt()]])), Ftr);
    return ((Ftr = wou(e)), Ftr);
  }
  function Tou() {
    if (Xoo) return Xoo;
    return ((Xoo = wou(process.env.CLAUDE_CODE_BASE_REFS)), Xoo);
  }
  function Cou(e) {
    for (let [t, r] of JQi())
      if (e === r || e.startsWith(r + Aou.sep)) return t;
    return;
  }
  async function Hou(e) {
    xou = e;
    for (let [, t] of JQi()) await ZPi(t);
    eMi(() => void QQi());
  }
  async function QQi() {
    let e = JQi();
    if (e.size === 0) return;
    let t = {};
    for (let [r, n] of e) {
      let o = await rMi(n);
      if (o !== void 0) t[r] = o;
    }
    if (Jg(t, vou)) return;
    ((vou = t), xou?.({ current_branches: t }));
  }
  var Aou,
    Ftr = null,
    Xoo = null,
    xou = null,
    vou;
  var Joo = S(() => {
    _Q();
    ei();
    Ge();
    st();
    BO();
    Zt();
    Aou = require("path");
    vou = {};
  });
  async function IDg(e, t, r, n) {
    for (let o = 1; o <= Qoo; o++) {
      try {
        let s = kRt.get(e),
          a = { ...n };
        if (s) a["Last-Uuid"] = s;
        let l = await Lo.put(r, t, {
          headers: a,
          timeout: 30000,
          validateStatus: (c) => c < 500,
        });
        if (l.status === 200 || l.status === 201)
          return (
            kRt.set(e, t.uuid),
            w(`Successfully persisted session log entry for session ${e}`),
            !0
          );
        if (l.status === 409) {
          let c = l.headers["x-last-uuid"];
          if (c === t.uuid)
            return (
              kRt.set(e, t.uuid),
              w(
                `Session entry ${t.uuid} already present on server, recovering from stale state`,
              ),
              Sr("info", "session_persist_recovered_from_409"),
              !0
            );
          if (c)
            (kRt.set(e, c),
              w(
                `Session 409: adopting server lastUuid=${c} from header, retrying entry ${t.uuid}`,
              ));
          else {
            let u = await ZQi(e, r, n),
              d = RDg(u);
            if (d)
              (kRt.set(e, d),
                w(
                  `Session 409: re-fetched ${u.length} entries, adopting lastUuid=${d}, retrying entry ${t.uuid}`,
                ));
            else {
              let f =
                l.data.error?.message || "Concurrent modification detected";
              return (
                w(
                  `Session persistence conflict: UUID mismatch for session ${e}, entry ${t.uuid}. ${f}`,
                  { level: "error" },
                ),
                Sr("error", "session_persist_fail_concurrent_modification"),
                !1
              );
            }
          }
          Sr("info", "session_persist_409_adopt_server_uuid");
          continue;
        }
        if (l.status === 401)
          return (
            w("Session token expired or invalid"),
            Sr("error", "session_persist_fail_bad_token"),
            !1
          );
        (w(`Failed to persist session log: ${l.status} ${l.statusText}`),
          Sr("error", "session_persist_fail_status", {
            status: l.status,
            attempt: o,
          }));
      } catch (s) {
        (w(`Error persisting session log: ${le(s)}`, { level: "error" }),
          Sr("error", "session_persist_fail_status", {
            status: Lo.isAxiosError(s) ? s.status : void 0,
            attempt: o,
          }));
      }
      if (o === Qoo)
        return (
          w(`Remote persistence failed after ${Qoo} attempts`),
          Sr("error", "session_persist_error_retries_exhausted", {
            attempt: o,
          }),
          !1
        );
      let i = Math.min(HDg * Math.pow(2, o - 1), 8000);
      (w(
        `Remote persistence attempt ${o}/${Qoo} failed, retrying in ${i}ms\u2026`,
      ),
        await vr(i));
    }
    return !1;
  }
