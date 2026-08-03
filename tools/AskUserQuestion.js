  var Fm = "AskUserQuestion",
    qDu = 12,
    zDu =
      "Asks the user multiple choice questions to gather information, clarify ambiguity, understand preferences, make decisions or offer them choices.",
    KDu,
    dus,
    YDu = `
Reserve this for decisions where the user's answer changes what you do next \u2014 not for choices with a conventional default or facts you can verify in the codebase yourself. In those cases pick the obvious option, mention it in your response, and proceed.
`;
  var Bj = S(() => {
    ((KDu = {
      markdown: `
Preview feature:
Use the optional \`preview\` field on options when presenting concrete artifacts that users need to visually compare:
- ASCII mockups of UI layouts or components
- Code snippets showing different implementations
- Diagram variations
- Configuration examples

Preview content is rendered as markdown in a monospace box. Multi-line text with newlines is supported. When any option has a preview, the UI switches to a side-by-side layout with a vertical option list on the left and preview on the right. Do not use previews for simple preference questions where labels and descriptions suffice. Note: previews are only supported for single-select questions (not multiSelect).
`,
      html: `
Preview feature:
Use the optional \`preview\` field on options when presenting concrete artifacts that users need to visually compare:
- HTML mockups of UI layouts or components
- Formatted code snippets showing different implementations
- Visual comparisons or diagrams

Preview content must be a self-contained HTML fragment (no <html>/<body> wrapper, no <script> or <style> tags \u2014 use inline style attributes instead). Do not use previews for simple preference questions where labels and descriptions suffice. Note: previews are only supported for single-select questions (not multiSelect).
`,
    }),
      (dus = `Use this tool only when you are blocked on a decision that is genuinely the user's to make: one you cannot resolve from the request, the code, or sensible defaults.

Usage notes:
- Users will always be able to select "Other" to provide custom text input
- Use multiSelect: true to allow multiple answers to be selected for a question
- If you recommend a specific option, make that the first option in the list and add "(Recommended)" at the end of the label

Plan mode note: To switch into plan mode, use ${Jie} (not this tool). Once in plan mode, use this tool to clarify requirements or choose between approaches BEFORE finalizing your plan. Do NOT use this tool to ask "Is my plan ready?", "Should I proceed?", or otherwise reference "the plan" in questions \u2014 the user cannot see the plan until you call ${b$} for approval.
`));
  });
  var bSe = "ListMcpResourcesTool",
    XDu = `
Lists available resources from configured MCP servers.
Each resource object includes a 'server' field indicating which server it's from.

Usage examples:
- List all resources from all servers: \`listMcpResources\`
- List resources from a specific server: \`listMcpResources({ server: "myserver" })\`
`,
    JDu = `
List available resources from configured MCP servers.
Each returned resource will include all standard MCP resource fields plus a 'server' field 
indicating which server the resource belongs to.

Parameters:
- server (optional): The name of a specific MCP server to get resources from. If not provided,
  resources from all servers will be returned.
`;
  var nct = "LSP",
    pus = `Interact with Language Server Protocol (LSP) servers to get code intelligence features.

Supported operations:
- goToDefinition: Find where a symbol is defined
- findReferences: Find all references to a symbol
- hover: Get hover information (documentation, type info) for a symbol
- documentSymbol: Get all symbols (functions, classes, variables) in a document
- workspaceSymbol: Search for symbols matching a query across the entire workspace
- goToImplementation: Find implementations of an interface or abstract method
- prepareCallHierarchy: Get call hierarchy item at a position (functions/methods)
- incomingCalls: Find all functions/methods that call the function at a position
- outgoingCalls: Find all functions/methods called by the function at a position

All operations require:
- filePath: The file to operate on
- line: The line number (1-based, as shown in editors)
- character: The character offset (1-based, as shown in editors)

The workspaceSymbol operation also takes:
- query: The symbol name or partial name to search for. Always provide it \u2014 most language servers return no results for an empty query.

Note: LSP servers must be configured for the file type. If no server is available, an error will be returned.`;
  var QDu = "2025-11-25",
    NU = 2048,
    oct = 16777216,
    z7r = "inode/directory";
  var Qie = "ReadMcpResourceDirTool",
    ZDu = `
List the direct children of a directory resource on an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the directory resource

Only usable against a server that has declared support for directory listing. The listing is not recursive.
`,
    ePu;
  var ict = S(() => {
    ePu = `
List the direct children of a directory resource on an MCP server (\`resources/directory/read\`).

Parameters:
- server (required): The name of the MCP server to read from
- uri (required): The URI of the directory resource

The listing is not recursive. Each entry carries its own \`uri\`; subdirectories appear with mimeType "${z7r}" \u2014 call this tool again on a subdirectory's \`uri\` to descend.

Only usable against a server that has declared support for directory listing; other servers return an error.
`;
  });
  var Zie = "ReadMcpResourceTool",
    tPu = `
Reads a specific resource from an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the resource to read

Usage examples:
- Read a resource from a server: \`readMcpResource({ server: "myserver", uri: "my-resource-uri" })\`
`,
    rPu = `
Reads a specific resource from an MCP server, identified by server name and resource URI.

Parameters:
- server (required): The name of the MCP server from which to read the resource
- uri (required): The URI of the resource to read
`;
  function iPu(e) {
    let t =
        F8e.posix.sep +
        e.split(F8e.sep).join(F8e.posix.sep).replace(/^\/+/, ""),
      r = F8e.basename(e).toLowerCase(),
      n = F8e.extname(e).toLowerCase();
    if (ley.has(r)) return !0;
    if (nPu.has(n)) return !0;
    let o = r.split(".");
    if (o.length > 2) {
      let i = "." + o.slice(-2).join(".");
      if (nPu.has(i)) return !0;
    }
    for (let i of cey) if (t.includes(i)) return !0;
    for (let i of uey) if (i.test(r)) return !0;
    return !1;
  }
  async function sPu(e, t) {
    if (iPu(e)) return !0;
    let r = `${t}\x00${e}`,
      n = oPu.get(r);
    if (n !== void 0) return n;
    let o = await Yn(fo(), ["check-attr", "linguist-generated", "--", e], {
        cwd: t,
        timeout: 5000,
      }),
      i = !1;
    if (o.code === 0) {
      let s = o.stdout.trim().split(": ").pop()?.toLowerCase();
      i = s === "set" || s === "true";
    }
    return (oPu.set(r, i), i);
  }
