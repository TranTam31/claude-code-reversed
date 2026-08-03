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
  var F8e, ley, nPu, cey, uey, oPu;
  var fus = S(() => {
    Ja();
    Qa();
    ((F8e = require("path")),
      (ley = new Set([
        "package-lock.json",
        "yarn.lock",
        "pnpm-lock.yaml",
        "bun.lockb",
        "bun.lock",
        "composer.lock",
        "gemfile.lock",
        "cargo.lock",
        "poetry.lock",
        "pipfile.lock",
        "shrinkwrap.json",
        "npm-shrinkwrap.json",
      ])),
      (nPu = new Set([
        ".lock",
        ".min.js",
        ".min.css",
        ".min.html",
        ".bundle.js",
        ".bundle.css",
        ".generated.ts",
        ".generated.js",
        ".d.ts",
      ])),
      (cey = [
        "/dist/",
        "/build/",
        "/out/",
        "/output/",
        "/node_modules/",
        "/vendor/",
        "/vendored/",
        "/third_party/",
        "/third-party/",
        "/external/",
        "/.next/",
        "/.nuxt/",
        "/.svelte-kit/",
        "/coverage/",
        "/__pycache__/",
        "/.tox/",
        "/venv/",
        "/.venv/",
        "/target/release/",
        "/target/debug/",
        ".generated/",
        "/__snapshots__/",
      ]),
      (uey = [
        /^.*\.min\.[a-z]+$/i,
        /^.*-min\.[a-z]+$/i,
        /^.*\.bundle\.[a-z]+$/i,
        /^.*\.generated\.[a-z]+$/i,
        /^.*\.gen\.[a-z]+$/i,
        /^.*\.auto\.[a-z]+$/i,
        /^.*_generated\.[a-z]+$/i,
        /^.*_gen\.[a-z]+$/i,
        /^.*\.pb\.(go|js|ts|py|rb)$/i,
        /^.*_pb2?\.py$/i,
        /^.*\.pb\.h$/i,
        /^.*\.grpc\.[a-z]+$/i,
        /^.*\.swagger\.[a-z]+$/i,
        /^.*\.openapi\.[a-z]+$/i,
        /\.snap$/i,
      ]));
    oPu = new Map();
  });
