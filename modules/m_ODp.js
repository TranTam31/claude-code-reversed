// Module: ODp (lines 695935-696086)
  var ODp = S(() => {
    Ni();
    kDp();
    Zt();
    Pr();
    _v();
    gsa();
    flb = HDp({
      renderLink(e, t, r) {
        let n = e.trim();
        if (!/^(?:https?:|mailto:|#)/i.test(n)) return t;
        let o = r ? ` title="${Ks(r)}"` : "";
        return `<a href="${Ks(n)}"${o} rel="noopener">${t}</a>`;
      },
      renderImage(e, t) {
        return `<code>[image: ${Vvr(e || t)}]</code>`;
      },
    });
    vlb = `<style>
:root{${_sa}
  color-scheme:light dark;
}
@media (prefers-color-scheme:dark){:root{${IDp}color-scheme:dark}}
:root[data-theme="dark"]{${IDp}color-scheme:dark}
:root[data-theme="light"]{${_sa}color-scheme:light}
*{box-sizing:border-box}
body{margin:0;background:var(--plane);color:var(--ink);
  font:14px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif;
  -webkit-text-size-adjust:100%}
.wrap{max-width:880px;margin:0 auto;padding:40px 24px 64px;display:flex;flex-direction:column;gap:20px}
.eyebrow{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}
header h1{margin:2px 0 0;font-size:24px;font-weight:600;line-height:1.25;text-wrap:balance}
.meta{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:8px;color:var(--ink-2);font-size:13px}
.meta .num{font-variant-numeric:tabular-nums lining-nums}
.banner{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:8px;
  border:1px solid var(--hairline);background:var(--surface);font-size:13px}
.banner .chip-warn{color:var(--warning);font-weight:600}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.tile{background:var(--surface);border:1px solid var(--hairline);border-radius:10px;padding:14px 16px;
  display:flex;flex-direction:column;gap:4px}
.tile .label{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3)}
.tile .value{font-size:26px;font-weight:600;font-variant-numeric:tabular-nums lining-nums;line-height:1.1}
.tile.hero .value{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:48px}
.tile .sub{font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.tile .value.delta-pos{color:var(--delta-good)}
.tile .value.delta-neg{color:var(--critical)}
.toolbar{display:flex;gap:8px;justify-content:flex-end}
.toolbar button{font:12px system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink-2);
  background:var(--surface);border:1px solid var(--hairline);border-radius:6px;padding:4px 10px;cursor:pointer}
.toolbar button:hover{color:var(--ink)}
.toolbar button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.case{background:var(--surface);border:1px solid var(--hairline);border-radius:10px;padding:18px 20px;
  display:flex;flex-direction:column;gap:10px}
.case-regressed{border-left:3px solid var(--critical)}
.verdict{margin:6px 0 0;font-size:15px}
.verdict .delta{font-size:15px}
.flag{font-size:11px;font-weight:600;color:var(--warning);white-space:nowrap}
.star{color:var(--warning);font-size:.45em;vertical-align:super;line-height:0;cursor:help}
.legend summary{cursor:pointer;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.legend-list{margin:8px 0 0;padding-left:20px;display:flex;flex-direction:column;gap:5px;font-size:13px;color:var(--ink-2)}
.case-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.case-head h2{margin:0;font-size:16px;font-weight:600}
.case-head .spacer{flex:1}
.case-score{font-size:15px;font-weight:600}
.mono{font:12px "SF Mono",ui-monospace,Menlo,Consolas,monospace}
.num{font-variant-numeric:tabular-nums lining-nums}
.muted{color:var(--ink-3);font-size:12px}
.meter{display:inline-block;position:relative;width:120px;height:6px;border-radius:4px;background:var(--grid);
  vertical-align:middle}
.meter>span{display:block;height:100%;border-radius:4px;max-width:100%}
.meter .tick{position:absolute;top:-2px;bottom:-2px;width:2px;background:var(--ink-3);border-radius:1px}
.m-accent>span{background:var(--accent)}
.m-base>span{background:var(--base-fill)}
.delta{font-size:12px;font-weight:600;font-variant-numeric:tabular-nums}
.delta-pos{color:var(--delta-good)}
.delta-neg{color:var(--critical)}
.delta-zero{color:var(--ink-3)}
details.section{border-top:1px solid var(--grid);padding-top:10px}
details.section>summary{cursor:pointer;font-size:12px;font-weight:600;letter-spacing:.04em;
  text-transform:uppercase;color:var(--ink-2);list-style-position:outside;margin-left:2px}
details.section>summary:hover{color:var(--ink)}
details.section[open]>summary{margin-bottom:8px}
.md{display:flex;flex-direction:column;gap:8px;background:var(--inset);border-radius:8px;
  padding:12px 14px;overflow-wrap:break-word}
.md>:first-child{margin-top:0}
.md h1,.md h2,.md h3,.md h4,.md h5,.md h6{margin:4px 0 0;font-size:1em;font-weight:600;line-height:1.3}
.md p,.md ul,.md ol,.md blockquote,.md table,.md pre,.md hr{margin:0}
.md ul,.md ol{display:flex;flex-direction:column;gap:4px;padding-left:20px}
.md blockquote{border-left:2px solid var(--hairline);padding-left:10px;color:var(--ink-2)}
.md :not(pre)>code{background:var(--inset);padding:1px 4px;border-radius:4px;
  font:.92em "SF Mono",ui-monospace,Menlo,Consolas,monospace}
.md pre{background:var(--inset);border:1px solid var(--hairline);padding:10px 12px;border-radius:6px;
  overflow-x:auto;font:12px/1.5 "SF Mono",ui-monospace,Menlo,Consolas,monospace}
.md pre code{background:none;padding:0;font:inherit}
.md table{width:100%;border-collapse:collapse}
.md th,.md td{padding:5px 8px;text-align:left;vertical-align:top;border-bottom:1px solid var(--grid)}
.md th{font-weight:600;color:var(--ink-2)}
.md a{color:var(--accent);text-decoration:none}
.md a:hover{text-decoration:underline}
.grader-def{display:flex;flex-direction:column;gap:6px;padding:8px 0}
.grader-def+.grader-def{border-top:1px solid var(--grid)}
.grader-def-head{display:flex;align-items:baseline;gap:8px}
.grader-name{font:13px "SF Mono",ui-monospace,Menlo,Consolas,monospace;font-weight:600}
.badge{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2);
  border:1px solid var(--hairline);border-radius:999px;padding:1px 8px}
.config{display:flex;flex-direction:column;gap:2px;background:var(--inset);border-radius:8px;padding:10px 14px}
.config code{font:12px "SF Mono",ui-monospace,Menlo,Consolas,monospace;overflow-wrap:anywhere}
.arm{display:flex;flex-direction:column;gap:8px;padding:6px 0}
.arm+.arm{border-top:1px dashed var(--grid);margin-top:4px;padding-top:12px}
.arm-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.arm-label{font-size:13px;font-weight:600}
.run{border:1px solid var(--grid);border-radius:8px;padding:10px 12px;display:flex;flex-direction:column;gap:8px}
.run-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.run-title{font-size:12px;font-weight:600;color:var(--ink-2)}
.run-error .explanation{color:var(--ink-2)}
.note{font-size:12px;color:var(--ink-2)}
.graders{display:flex;flex-direction:column;gap:4px}
details.grader{border-radius:6px}
details.grader>summary{cursor:pointer;display:flex;align-items:baseline;gap:8px;padding:3px 4px;
  border-radius:6px;list-style:none}
details.grader>summary::-webkit-details-marker{display:none}
details.grader>summary::before{content:'\u25B8';font-size:10px;color:var(--ink-3);flex:none;
  transition:transform .12s ease}
details.grader[open]>summary::before{transform:rotate(90deg)}
details.grader>summary:hover{background:var(--inset)}
details.grader>summary:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.grader-body{padding:6px 8px 8px 24px;display:flex;flex-direction:column;gap:6px}
.chip{font-size:11px;font-weight:600;border-radius:999px;padding:1px 8px;white-space:nowrap}
.chip-pass{color:var(--good);border:1px solid currentColor}
.chip-fail{color:var(--critical);border:1px solid currentColor}
.explanation{margin:0;font-size:13px;color:var(--ink-2);white-space:pre-wrap;overflow-wrap:break-word}
.kv{display:flex;gap:8px;font-size:12px;color:var(--ink-3)}
.votes{font-variant-numeric:tabular-nums;letter-spacing:.1em}
pre.evidence{margin:0;background:var(--inset);border:1px solid var(--hairline);border-radius:6px;
  padding:8px 10px;overflow-x:auto;max-height:320px;
  font:12px/1.5 "SF Mono",ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap;overflow-wrap:break-word}
footer{color:var(--ink-3);font-size:12px;text-align:center;padding-top:8px}
@media (prefers-reduced-motion:no-preference){
  details.grader>summary,.toolbar button{transition:background .12s ease,color .12s ease}
}
@media (prefers-reduced-motion:reduce){
  details.grader>summary::before{transition:none}
}
@media print{
  :root,:root[data-theme="dark"],:root[data-theme="light"]{${_sa}color-scheme:light}
  body{background:#fff}
  .toolbar{display:none}
  .case,.run,.grader-def{break-inside:avoid}
  pre.evidence{max-height:none}
}
</style>`;
  });
