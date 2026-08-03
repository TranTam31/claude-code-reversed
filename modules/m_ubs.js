// Module: ubs (lines 316512-316591)
  var ubs = S(() => {
    Rh();
    VM();
    ND();
    f4();
    SHe();
    zPt();
    Eo();
    rfe();
    Un();
    yb();
    P5u = {
      agentType: cbs,
      whenToUse: `Use this agent when the user asks questions ("Can Claude...", "Does Claude...", "How do I...") about: (1) Claude Code (the CLI tool) - features, hooks, slash commands, MCP servers, settings, IDE integrations, keyboard shortcuts; (2) Claude Agent SDK - building custom agents; (3) Claude API (formerly Anthropic API) - Messages API for directly passing messages to Claude, Tool Runner (\`client.beta.messages.tool_runner\`) for running an agentic loop over your own tools, manual tool-use loops, Managed Agents for server-hosted agents with a managed sandbox, prompt caching, and general Anthropic SDK usage; (4) Claude Tag (Claude in Slack) - what it is, setting it up for a Slack workspace, \`/install-slack-app\`. **IMPORTANT:** Before spawning a new agent, check if there is already a running or recently completed claude-code-guide agent that you can continue via ${ff}.`,
      get tools() {
        return cL() && Dp() ? [ri, zi, NT, n7] : [xd, bd, zi, NT, n7];
      },
      source: "built-in",
      baseDir: "built-in",
      model: "haiku",
      permissionMode: "dontAsk",
      getSystemPrompt({ toolUseContext: e }) {
        let t = e.options.commands,
          r = [],
          n = t.filter((u) => u.type === "prompt");
        if (n.length > 0) {
          let u = n.map((d) => `- /${d.name}: ${d.description}`).join(`
`);
          r.push(`**Available custom skills in this project:**
${u}`);
        }
        let o = e.options.agentDefinitions.activeAgents.filter(
          (u) => u.source !== "built-in",
        );
        if (o.length > 0) {
          let u = o.map((d) => `- ${d.agentType}: ${d.whenToUse}`).join(`
`);
          r.push(`**Available custom agents configured:**
${u}`);
        }
        let i = e.options.mcpClients;
        if (i && i.length > 0) {
          let u = i.map((d) => `- ${d.name}`).join(`
`);
          r.push(`**Configured MCP servers:**
${u}`);
        }
        let s = t.filter((u) => u.type === "prompt" && u.source === "plugin");
        if (s.length > 0) {
          let u = s.map((d) => `- /${d.name}: ${d.description}`).join(`
`);
          r.push(`**Available plugin skills:**
${u}`);
        }
        let a = Object.keys(us()).sort();
        if (a.length > 0)
          r.push(
            `**Settings keys configured (values omitted):** ${a.join(", ")}. To see values, the user can run the in-session \`/config\` command or open \`~/.claude/settings.json\`.`,
          );
        let l = vhy(),
          c = `${Ehy()}
${l}`;
        if (r.length > 0)
          return `${c}

---

# User's Current Configuration

The user has the following custom setup in their environment:

${r.join(`

`)}

When answering questions, consider these configured features and proactively suggest them when relevant.`;
        return c;
      },
    };
  });
