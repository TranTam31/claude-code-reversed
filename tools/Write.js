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
  function oXi(e, t) {
    if (e !== "Agent" && e !== "Task") return;
    if (
      typeof t === "object" &&
      t !== null &&
      "subagent_type" in t &&
      typeof t.subagent_type === "string"
    )
      return t.subagent_type;
    return;
  }
  function Wqr(e, t, r, n) {
    let o = {};
    if (!yg()) {
      if (n && eno(n))
        ((o.mcp_server_name = N1e(n.serverName)),
          (o.mcp_tool_name = N1e(n.toolName)));
      return o;
    }
    let i =
        e === ri &&
        t !== null &&
        typeof t === "object" &&
        "command" in t &&
        typeof t.command === "string",
      s =
        e === g7t &&
        t !== null &&
        typeof t === "object" &&
        "command" in t &&
        typeof t.command === "string";
    if (i) {
      let c = t,
        u = c.command.trim().split(/\s+/);
      if (
        ((o.bash_command = u[0] || ""),
        (o.full_command = c.command),
        c.timeout !== void 0)
      )
        o.timeout = c.timeout;
      if (c.description !== void 0) o.description = c.description;
      if ("dangerouslyDisableSandbox" in c)
        o.dangerouslyDisableSandbox = c.dangerouslyDisableSandbox;
    } else if (s) {
      let c = t,
        u = c.command.trim().split(/\s+/);
      if (
        ((o.bash_command = u[0] || ""),
        (o.full_command = c.command),
        c.timeout_ms !== void 0)
      )
        o.timeout = c.timeout_ms;
    }
    if (n && eno(n))
      ((o.mcp_server_name = N1e(n.serverName)),
        (o.mcp_tool_name = N1e(n.toolName)));
    else {
      let c = gst(e);
      if (c)
        ((o.mcp_server_name = c.serverName), (o.mcp_tool_name = c.mcpToolName));
    }
    let a = nXi(e, t, r);
    if (a) o.skill_name = a;
    let l = oXi(e, t);
    if (l) o.subagent_type = l;
    return o;
  }
