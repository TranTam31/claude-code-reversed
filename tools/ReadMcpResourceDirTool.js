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
  function hus(e) {
    if (!/^https?:\/\//.test(e) && !/^ssh:\/\//.test(e) && !/^git@/.test(e))
      return !1;
    if (/[?#\\]/.test(Gi(e.replace(/^(?:https?|ssh):\/\//, ""), "/")))
      return !1;
    let t = e
      .replace(/^https?:\/\//, "")
      .replace(/^ssh:\/\//, "")
      .replace(/^[^@/]+@/, "")
      .replace(/\/$/, "");
    if (Z.CLAUDE_CODE_REMOTE && CGn(Gi(t, "/"))) {
      let r = B5e(e);
      if (r && !t.includes("@") && dey.test(r)) return aPu.includes(r);
    }
    if (t.split("/").includes("..")) return !1;
    return aPu.some((r) => {
      if (!t.startsWith(r)) return !1;
      let n = t.slice(r.length);
      return n === "" || n === ".git" || n.startsWith("/");
    });
  }
