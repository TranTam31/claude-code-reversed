  var NT = "WebFetch";
  function STu(e, t = !1) {
    if (SE(e))
      return `Fetches a URL, converts the page to markdown, and answers \`prompt\` against it using a small fast model.

- Fails on authenticated/private URLs \u2014 use an authenticated MCP tool or \`gh\` for those instead.${t ? " Exception: claude.ai/code/artifact/{uuid} URLs ARE fetchable via your claude.ai login \u2014 use WebFetch, not curl (curl gets the SPA shell or a Cloudflare 403)." : ""}
- HTTP is upgraded to HTTPS. Cross-host redirects are returned to you rather than followed; call again with the redirect URL.
- Responses are cached for 15 minutes per URL.`;
    return `IMPORTANT: WebFetch WILL FAIL for authenticated or private URLs. Before using this tool, check if the URL points to an authenticated service (e.g. Google Docs, Confluence, Jira, GitHub). If so, look for a specialized MCP tool that provides authenticated access.
${
  t
    ? `- Exception: claude.ai/code/artifact/{uuid} URLs (including preview.claude.ai) ARE fetchable \u2014 WebFetch uses your claude.ai login. Use WebFetch for these, not curl or a headless browser (those return the SPA shell or a Cloudflare 403, not the content).
`
    : ""
}${f8g}`;
  }
  function ETu(e, t, r) {
    return `
Web page content:
---
${e}
---

${t}

${
  r
    ? "Provide a concise response based on the content above. Include relevant details, code examples, and documentation excerpts as needed."
    : `Provide a concise response based only on the content above. In your response:
 - Enforce a strict 125-character maximum for quotes from any source document. Open Source Software is ok as long as we respect the license.
 - Use quotation marks for exact language from articles; any language outside of the quotation should never be word-for-word the same.
 - You are not a lawyer and never comment on the legality of your own prompts and responses.
 - Never produce or reproduce exact song lyrics.`
}
`;
  }
  var f8g = `
- Fetches content from a specified URL and processes it using an AI model
- Takes a URL and a prompt as input
- Fetches the URL content, converts HTML to markdown
- Processes the content with the prompt using a small, fast model
- Returns the model's response about the content
- Use this tool when you need to retrieve and analyze web content

Usage notes:
  - IMPORTANT: If an MCP-provided web fetch tool is available, prefer using that tool instead of this one, as it may have fewer restrictions.
  - The URL must be a fully-formed valid URL
  - HTTP URLs will be automatically upgraded to HTTPS
  - The prompt should describe what information you want to extract from the page
  - This tool is read-only and does not modify any files
  - Results may be summarized if the content is very large
  - Includes a self-cleaning 15-minute cache for faster responses when repeatedly accessing the same URL
  - When a URL redirects to a different host, the tool will inform you and provide the redirect URL in a special format. You should then make a new WebFetch request with the redirect URL to fetch the content.
  - For GitHub URLs, prefer using the gh CLI via Bash instead (e.g., gh pr view, gh issue view, gh api).
`;
  var SHe = S(() => {
    FB();
  });
  function Oco(e, t) {
    return { cmd: Fue(e) ?? e, args: t };
  }
  var vTu = S(() => {
    aU();
  });
  function css(e) {
    if (e.code === "ENOENT" && rYr().mode === "system") {
      let t = Error(h8g, { cause: e });
      return ((t.code = "ENOENT"), t);
    }
    return e;
  }
  function Qbe() {
    let e = rYr();
    return { rgPath: e.command, rgArgs: e.args, argv0: e.argv0 };
  }
  function ATu(e) {
    return (
      e.includes("os error 11") ||
      e.includes("Resource temporarily unavailable")
    );
  }
  function uss(e, t, r) {
    let n = e.findIndex((i) => i.includes("\x00")),
      o = r.includes("\x00")
        ? {
            local: "the session working directory",
            telemetry: "ripgrep spawn blocked: null byte in session cwd",
          }
        : t.includes("\x00")
          ? {
              local: "the target path",
              telemetry: "ripgrep spawn blocked: null byte in target path",
            }
          : n !== -1
            ? {
                local: `caller argument ${n}`,
                telemetry: "ripgrep spawn blocked: null byte in argv",
              }
            : null;
    if (o)
      throw oi(
        new kTu(`Cannot spawn ripgrep: ${o.local} contains a null byte (\\0)`),
        o.telemetry,
      );
  }
  function zDt(e, t) {
    let r = kt();
    if (!qDt.isAbsolute(e) || !qDt.isAbsolute(t)) return r;
    try {
      if (f1(e, r)) return r;
    } catch {
      return r;
    }
    let n = qDt.resolve(e);
    try {
      if (TTu.statSync(n).isDirectory()) return n;
    } catch {}
    return r;
  }
  function wTu(e, t, r, n, o = !1, i) {
    let { rgPath: s, rgArgs: a, argv0: l } = Qbe(),
      c = i ?? zDt(t, s);
    uss(e, t, c);
    let u = o ? ["-j", "1"] : [],
      d = [...a, ...u, ...e, t],
      p = Lt() === "wsl" ? 60000 : 20000,
      f = Z.CLAUDE_CODE_GLOB_TIMEOUT_SECONDS || 0,
      m = f > 0 ? f * 1000 : p;
    if (l) {
      let g = Wnr.spawn(s, d, { argv0: l, cwd: c, signal: r, windowsHide: !0 }),
        y = "",
        _ = "",
        E = !1,
        A = !1;
      (g.stdout?.on("data", (R) => {
        if (!E) {
          if (((y += R.toString()), y.length > tYr))
            ((y = y.slice(0, tYr)), (E = !0));
        }
      }),
        g.stderr?.on("data", (R) => {
          if (!A) {
            if (((_ += R.toString()), _.length > tYr))
              ((_ = _.slice(0, tYr)), (A = !0));
          }
        }));
      let b,
        T = !1,
        C = setTimeout(() => {
          ((T = !0), g.kill());
        }, m),
        I = !1;
      return (
        g.on("close", (R, k) => {
          if (I) return;
          if (((I = !0), clearTimeout(C), clearTimeout(b), R === 0 || R === 1))
            n(null, y, _);
          else {
            let D = Error(
              `ripgrep exited with code ${R}${k ? ` (signal ${k})` : ""}`,
            );
            ((D.code = R ?? void 0),
              (D.signal = k ?? (T ? "SIGTERM" : void 0)),
              n(D, y, _));
          }
        }),
        g.on("error", (R) => {
          if (I) return;
          if (((I = !0), clearTimeout(C), clearTimeout(b), R.code === "ENOENT"))
            dss();
          n(R, y, _);
        }),
        g
      );
    }
    return Wnr.execFile(
      s,
      d,
      {
        cwd: c,
        maxBuffer: tYr,
        signal: r,
        timeout: m,
        killSignal: void 0,
        windowsHide: !0,
      },
      n,
    );
  }
