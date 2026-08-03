  var ri = "Bash";
  var hst = {};
  tt(hst, {
    PEWTER_OWL_TOOL_PROMPT: () => X7i,
    LEGACY_BRIEF_TOOL_NAME: () => Uqr,
    DESCRIPTION: () => K7i,
    BRIEF_TOOL_PROMPT: () => Y7i,
    BRIEF_TOOL_NAME: () => wU,
    BRIEF_PROACTIVE_SECTION: () => bHg,
    BRIEF_ENFORCE_SENTINEL: () => z7i,
  });
  var wU = "SendUserMessage",
    Uqr = "Brief",
    z7i = "You ended the turn without calling SendUserMessage.",
    K7i = "Send a message to the user",
    Y7i =
      "Send a message the user will read. Text outside this tool is visible in the detail view, but most won't open it \u2014 the answer lives here.\n\n`message` supports markdown. `attachments` accepts two forms per entry: a file path string (absolute or cwd-relative) for a file you can read here \u2014 images, diffs, logs \u2014 or the exact {file_uuid, file_name, size, is_image} object a device tool like `attach_file` returned to you. Use the path form when the file is on your working filesystem; use the object form when the user's device already uploaded the file and handed you a reference \u2014 pass that object through verbatim, don't try to path it.\n\n`status` labels intent: 'normal' when replying to what they just asked; 'proactive' when you're initiating \u2014 a scheduled task finished, a blocker surfaced during background work, you need input on something they haven't asked about. Set it honestly; downstream routing uses it.",
    X7i =
      "Send a message the user will read verbatim. Use this for content they need to see exactly as written between tool calls \u2014 a generated code snippet, a specific value, a direct reply to something they asked mid-task. Don't use it for routine narration of what you're about to do, or for your final answer \u2014 normal text reaches them for those.",
    bHg;
  var A5 = S(() => {
    bHg = `## Talking to the user

${"SendUserMessage"} is where your replies go. Text outside it is visible if the user expands the detail view, but most won't \u2014 assume unread. Anything you want them to actually see goes through ${"SendUserMessage"}. The failure mode: the real answer lives in plain text while ${"SendUserMessage"} just says "done!" \u2014 they see "done!" and miss everything.

So: every time the user says something, the reply they actually read comes through ${"SendUserMessage"}. Even for "hi". Even for "thanks".

If you can answer right away, send the answer. If you need to go look \u2014 run a command, read files, check something \u2014 ack first in one line ("On it \u2014 checking the test output"), then work, then send the result. Without the ack they're staring at a spinner.

For longer work: ack \u2192 work \u2192 result. Between those, send a checkpoint when something useful happened \u2014 a decision you made, a surprise you hit, a phase boundary. Skip the filler ("running tests...") \u2014 a checkpoint earns its place by carrying information.

Keep messages tight \u2014 the decision, the file:line, the PR number. Second person always ("your config"), never third.`;
  });
  var fl = "Edit",
    Vro = "/.claude/**",
    qro = "~/.claude/**",
    zro = "File has not been read yet. Read it first before writing to it.",
    J7i =
      "File is covered by a Read deny rule in your permission settings and cannot be edited.",
    Kro =
      "File content has changed since it was last read. This commonly happens when a linter or formatter run via Bash rewrites the file. Call Read on this file to refresh, then retry the edit.",
    HNe;
  var RS = S(() => {
    HNe = class HNe extends Error {
      constructor(e) {
        super(e);
        this.name = "FileStateError";
      }
    };
  });
  var DT = "NotebookEdit";
  var qi = "PowerShell";
  var nu = "Write";
  var Yro = {};
  tt(Yro, {
    SEND_USER_FILE_TOOL_PROMPT: () => Z7i,
    SEND_USER_FILE_TOOL_NAME: () => ibe,
    DESCRIPTION: () => Q7i,
  });
  var ibe = "SendUserFile",
    Q7i = "Send one or more files to the user",
    Z7i =
      'Send files to the user. Use this when the file *is* the deliverable \u2014 a generated diagram, a report, a screenshot, a built artifact \u2014 and you want it surfaced, not just mentioned. Paths can be absolute or relative to the current working directory.\n\nAdd a `caption` when a one-liner of context helps ("the failing case is row 42", "before vs after"). Skip it if the file speaks for itself.\n\nSet `status` on every call. Use `proactive` when you\'re initiating \u2014 the user is away and you want this to reach their phone (build artifact ready, report generated). Use `normal` when replying to something the user just said.\n\nSet `display` to choose how the file is presented. Use `\'render\'` when the user should see the content inline in the side panel right now \u2014 a chart, a rendered HTML page, a diagram, an image. Use `\'attach\'` when the file is something they\'ll save and open elsewhere \u2014 source code, a spreadsheet, a document for another app \u2014 and an inline preview would just be noise. Leave it unset to let the client decide by file type.\n\nFiles must already exist on the local filesystem \u2014 the tool sends files, it doesn\'t fetch URLs or render content. When unsure of a path, verify with ls first; absolute paths avoid ambiguity about the working directory.\n\nExample: SendUserFile({ files: ["report.md"], caption: "Here\'s the report.", status: "normal" })';
  function yg() {
    return Z.OTEL_LOG_TOOL_DETAILS;
  }
  var Xro = S(() => {
    ja();
  });
  function jqr(e) {
    return Object.hasOwn(tXi, e);
  }
  function ua(e) {
    let t = Object.hasOwn(tXi, e) ? tXi[e] : void 0;
    if (t) return Hp(t);
    if (e.startsWith("mcp__")) return Ee("mcp_tool");
    return Hp(e);
  }
  function teu(e) {
    if (e.startsWith("mcp__")) return Ee("mcp_tool");
    if (e.startsWith("skill__")) return Ee("skill_tool");
    return Ee("unknown_tool");
  }
  function reu(e, t, r) {
    if (!t) return {};
    let n = gst(e);
    if (!n) return {};
    let o = n.serverName;
    if (!r && !rno.has(o)) return {};
    if (Nqr(o)?.has(n.mcpToolName))
      return { mcpServerName: n.serverName, mcpToolName: n.mcpToolName };
    return { mcpServerName: n.serverName };
  }
  function eno(e) {
    return e?.serverType === "sdk" && jOe();
  }
  function neu(e) {
    if (!e || !eno(e)) return;
    let { serverName: t } = e;
    return t !== void 0 && Object.hasOwn(XZc, t) ? XZc[t] : void 0;
  }
  function tno(e) {
    let t = !e ? "builtin" : eno(e) ? "sdk_host_builtin_mcp" : "mcp";
    return { tool_source: fe(t) };
  }
  function TZ(e) {
    return Hp(kS(e) ?? "");
  }
  function Per() {
    return Yt(process.env.OTEL_LOG_TOOL_CONTENT);
  }
  function JZc(e, t) {
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !0;
    if (e === "claudeai-proxy") return !0;
    if (t && OZc(t)) return !0;
    if (t && YB(t)) return !0;
    return !1;
  }
  function Cj(e, t) {
    if (t === void 0) {
      if (rno.has(e)) return !0;
      return JZc(void 0, void 0);
    }
    if (qZc(e, t)) return !0;
    if ("url" in t && jZc(t.url)) return !0;
    return JZc(t.type, NIt(t));
  }
  function lie(e, t) {
    if (!t) return {};
    let r = gst(e);
    if (!r) return {};
    let n = Nqr(r.serverName);
    if (n !== void 0 && !n.has(r.mcpToolName))
      return { mcpServerName: r.serverName };
    return { mcpServerName: r.serverName, mcpToolName: r.mcpToolName };
  }
  function gst(e) {
    if (!e.startsWith("mcp__")) return;
    let t = e.split("__");
    if (t.length < 3) return;
    let r = t[1],
      n = t.slice(2).join("__");
    if (!r || !n) return;
    return { serverName: r, mcpToolName: n };
  }
  function nXi(e, t, r) {
    if (e !== "Skill") return;
    if (
      typeof t === "object" &&
      t !== null &&
      "skill" in t &&
      typeof t.skill === "string"
    )
      return t.skill;
    return;
  }
