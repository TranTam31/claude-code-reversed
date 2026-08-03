  var zi = "Read";
  function dou() {
    return cou;
  }
  function pou(e) {
    return `${uou} (see "Contents of ${e}" above) and has not changed on disk. Use that content instead of re-reading.</system-reminder>`;
  }
  function Yoo(e) {
    return e.startsWith(CDg) || e.startsWith(cou) || e.startsWith(uou);
  }
  function you(e, t, r, n) {
    if (SE(e))
      return `Reads a file from the local filesystem.

- \`file_path\` must be an absolute path.
- Reads up to ${$tr} lines by default${r}.
${n}
${t}
- Reads images (PNG, JPG, \u2026) and presents them visually.${Otr() ? ' Reads PDFs via the `pages` parameter (e.g. "1-5", max 20 pages/request; required for PDFs over 10 pages).' : ""} Reads Jupyter notebooks (.ipynb) as cells with outputs.
- Reading a directory, a missing file, or an empty file returns an error or system reminder rather than content.${lou}`;
    return `Reads a file from the local filesystem. You can access any file directly by using this tool.
Assume this tool is able to read all files on the machine. If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to ${$tr} lines starting from the beginning of the file${r}
${n}
${t}
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.${
      Otr()
        ? `
- This tool can read PDF files (.pdf). For large PDFs (more than 10 pages), you MUST provide the pages parameter to read specific page ranges (e.g., pages: "1-5"). Reading a large PDF without the pages parameter will fail. Maximum 20 pages per request.`
        : ""
    }
- This tool can read Jupyter notebooks (.ipynb files) and returns all cells with their outputs, combining code, text, and visualizations.
- This tool can only read files, not directories. To list files in a directory, use the registered shell tool.
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot, ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths.
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents.${lou}`;
  }
  var lou = `
- Do NOT re-read a file you just edited to verify \u2014 Edit/Write would have errored if the change failed, and the harness tracks file state for you.`,
    Koo =
      " (file state is current in your context \u2014 no need to Read it back)",
    CDg =
      "File unchanged since last read. The content from the earlier Read tool_result in this conversation is still current \u2014 refer to that instead of re-reading.",
    cou =
      "Wasted call \u2014 file unchanged since your last Read. Refer to that earlier tool_result instead.",
    uou = "<system-reminder>This file is already in your context",
    pqe = "[Truncated: PARTIAL view \u2014 ",
    $tr = 2000,
    fou = "Read a file from the local filesystem.",
    qQi =
      "- Results are returned using cat -n format, with line numbers starting at 1",
    mou,
    hou =
      "- You can optionally specify a line offset and limit (especially handy for long files), but it's recommended to read the whole file by not providing these parameters",
    gou =
      "- When you already know which part of the file you need, only read that part. This can be important for larger files.";
  var Rh = S(() => {
    FB();
    zoo();
    mou = `${qQi}. Each line is the line number, a single separator (a tab or \`:\`), then the verbatim file content (including any leading whitespace).`;
  });
  var Vo = "Agent",
    Ij = "Task",
    _ou;
  var mh = S(() => {
    _ou = new Set(["Explore", "Plan"]);
  });
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
