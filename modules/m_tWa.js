// Module: tWa (lines 846480-846971)
  var tWa = S(() => {
    ct();
    da();
    Xi();
    eWa();
    ((Os = x(ue(), 1)), (ekn = x(_e(), 1)));
    iO = [
      {
        id: "at-mentions",
        title: "Talk to your codebase",
        tagline: "@ files, line refs",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "Type ",
                Os.jsx(qGt, { children: "@" }),
                " anywhere in your prompt to fuzzy-find and attach a file. Claude reads it before answering \u2014 no more pasting code.",
              ],
            }),
            Os.jsx(iMe, {
              frames: [
                `> what does [suggestion:@]
#type a file name\u2026`,
                `> what does [suggestion:@src/auth.ts]
  [suggestion:\u276F src/auth.ts]
#   src/auth.test.ts`,
                `> what does [suggestion:@src/auth.ts] do?
#\u25D0 Reading src/auth.ts\u2026`,
                `> what does [suggestion:@src/auth.ts] do?
Exports validateToken() which
checks JWT expiry and signature.`,
              ],
            }),
            Os.jsxs(h, {
              children: [
                "Reference specific lines with ",
                Os.jsx(UP, { children: "src/app.ts:42" }),
                " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can click to open them in your editor.",
              ],
            }),
            Os.jsxs(h, {
              dimColor: !0,
              children: [
                "Also try: ",
                Os.jsx(UP, { children: "@folder/" }),
                " to attach a whole directory tree.",
              ],
            }),
          ],
        }),
      },
      {
        id: "modes",
        title: "Steer with modes",
        tagline: "shift+tab, plan, auto",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "Press ",
                Os.jsx(qGt, { children: "shift+tab" }),
                " to cycle permission modes. Each mode changes how much Claude asks before acting:",
              ],
            }),
            Os.jsx(Zja, {}),
            Os.jsxs(H, {
              flexDirection: "column",
              paddingLeft: 2,
              children: [
                Os.jsxs(h, {
                  children: [
                    Os.jsx(h, { color: "success", children: "default" }),
                    " \u2014 ask before every edit",
                  ],
                }),
                Os.jsxs(h, {
                  children: [
                    Os.jsx(h, {
                      color: "autoAccept",
                      children: "accept edits",
                    }),
                    " \u2014 edit freely, ask for commands",
                  ],
                }),
                Os.jsxs(h, {
                  children: [
                    Os.jsx(h, { color: "planMode", children: "plan" }),
                    " \u2014 research and propose, never touch files",
                  ],
                }),
                Os.jsxs(h, {
                  children: [
                    Os.jsx(h, { color: "warning", children: "auto" }),
                    " \u2014 Claude decides what is safe",
                  ],
                }),
              ],
            }),
            Os.jsxs(h, {
              dimColor: !0,
              children: [
                "Use ",
                Os.jsx(h, { color: "planMode", children: "plan" }),
                " for big refactors you want to review first. Use ",
                Os.jsx(h, { color: "warning", children: "auto" }),
                " for long unattended tasks. Run ",
                Os.jsx(UP, { children: "/permissions" }),
                " to pre-allow specific commands so Claude stops asking about them.",
              ],
            }),
          ],
        }),
      },
      {
        id: "undo",
        title: "Undo anything",
        tagline: "/rewind, Esc-Esc",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "Claude checkpoints your files before every edit. Press",
                " ",
                Os.jsx(qGt, { children: "Esc Esc" }),
                " (double-tap) to open ",
                Os.jsx(UP, { children: "/rewind" }),
                " and roll back to any prior state \u2014 code, conversation, or both.",
              ],
            }),
            Os.jsx(iMe, {
              frames: [
                `[success:\u2713] Updated regex in parser.ts
#[error:8 tests failing]`,
                `#press Esc Esc
Rewind to:
  [suggestion:\u276F before parser.ts edit]`,
                `#[success:\u2713] parser.ts restored
> try a simpler approach
#\u25D0 thinking\u2026`,
              ],
            }),
            Os.jsx(h, {
              children:
                "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean.",
            }),
            Os.jsxs(h, {
              dimColor: !0,
              children: [
                "Also: ",
                Os.jsx(UP, { children: "/clear" }),
                " wipes conversation but keeps files.",
                " ",
                Os.jsx(UP, { children: "/branch" }),
                " forks the conversation to try two approaches.",
              ],
            }),
          ],
        }),
      },
      {
        id: "background",
        title: "Run in the background",
        tagline: "tasks, /tasks",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "Long builds and test suites do not have to block you. Add",
                " ",
                Os.jsx(qGt, { children: "&" }),
                " to any bash command and it runs in the background \u2014 you keep chatting, Claude notifies you when it finishes.",
              ],
            }),
            Os.jsx(iMe, {
              frames: [
                `> run the test suite [claude:&]
#task started in background`,
                `> now fix the lint in app.ts
#\u25D0 Editing app.ts\u2026
#[warning:\u25D0] bun test \xB7 12s`,
                `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[warning:\u25D0] bun test \xB7 28s`,
                `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[success:\u2713] bun test \xB7 284 pass`,
              ],
            }),
            Os.jsxs(h, {
              children: [
                "Run ",
                Os.jsx(UP, { children: "/tasks" }),
                " to see everything in flight. Claude can read task output mid-run and react to failures automatically.",
              ],
            }),
            Os.jsx(h, {
              dimColor: !0,
              children:
                "Subagents also run as tasks \u2014 it is all one queue.",
            }),
          ],
        }),
      },
      {
        id: "memory",
        title: "Teach Claude your rules",
        tagline: "CLAUDE.md, /memory",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "Drop a ",
                Os.jsx(UP, { children: "CLAUDE.md" }),
                " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories.",
              ],
            }),
            Os.jsx(iMe, {
              frames: [
                `#\u2500 CLAUDE.md \u2500
#Run tests with: [suggestion:bun test]
#Never edit src/legacy/`,
                `> add tests for the cache
#\u25D0 reading CLAUDE.md\u2026`,
                `> add tests for the cache
Writing cache.test.ts,
running [suggestion:bun test] to verify.`,
              ],
            }),
            Os.jsxs(h, {
              children: [
                "Run ",
                Os.jsx(UP, { children: "/init" }),
                " to generate a starter CLAUDE.md from your codebase. Run ",
                Os.jsx(UP, { children: "/memory" }),
                " to edit it inline.",
              ],
            }),
            Os.jsx(h, {
              dimColor: !0,
              children:
                "Works at three levels: repo, your home directory (all projects), and per-directory overrides.",
            }),
          ],
        }),
      },
      {
        id: "mcp",
        title: "Extend with tools",
        tagline: "MCP, /mcp",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ",
                Os.jsx(UP, { children: "/mcp" }),
                " to browse and connect servers.",
              ],
            }),
            Os.jsx(iMe, {
              frames: [
                `> [suggestion:/mcp]
Connected servers:
  [success:\u2713] slack    [success:\u2713] github`,
                `> anything urgent in #eng?
#\u25D0 [suggestion:slack] \xB7 reading channel\u2026`,
                `Boris posted about the merge
freeze. Also 3 PRs await
your review on github.`,
              ],
            }),
            Os.jsx(h, {
              children:
                'Once connected, tools appear automatically \u2014 ask Claude to "check my calendar" or "search our Notion" and it just works.',
            }),
            Os.jsxs(h, {
              dimColor: !0,
              children: [
                "From your shell:",
                " ",
                Os.jsx(UP, {
                  children: "claude mcp add my-server -- npx some-mcp-pkg",
                }),
                " to wire one up without leaving the terminal.",
              ],
            }),
          ],
        }),
      },
      {
        id: "automate",
        title: "Automate your workflow",
        tagline: "skills, hooks",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "Save a prompt to ",
                Os.jsx(UP, { children: ".claude/skills/deploy/SKILL.md" }),
                " and it becomes ",
                Os.jsx(UP, { children: "/deploy" }),
                " \u2014 type it, Claude runs it. Run",
                " ",
                Os.jsx(UP, { children: "/skills" }),
                " to see what you have.",
              ],
            }),
            Os.jsx(iMe, {
              frames: [
                `> [suggestion:/deploy] staging
#\u25D0 skill: deploy`,
                `[success:\u2713] built
[success:\u2713] tests pass
#\u25D0 pushing to staging\u2026`,
                `[success:\u2713] deployed
#[suggestion:staging.app.com]
#PostToolUse hook ran prettier`,
              ],
            }),
            Os.jsxs(h, {
              children: [
                "Hooks run your own scripts on events: before a tool call, after a response, on session start. Use them to enforce rules, log activity, or inject context. Run ",
                Os.jsx(UP, { children: "/hooks" }),
                " to see what fires when.",
              ],
            }),
            Os.jsxs(h, {
              dimColor: !0,
              children: [
                "Run ",
                Os.jsx(UP, { children: "/install-github-app" }),
                " to let Claude review PRs when tagged.",
              ],
            }),
          ],
        }),
      },
      {
        id: "subagents",
        title: "Multiply yourself",
        tagline: "subagents, .claude/agents/",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsx(h, {
              children:
                'Claude can spawn copies of itself to work in parallel. Ask it to "use subagents to search these 5 directories" and watch the fan-out.',
            }),
            Os.jsx(iMe, {
              frames: [
                `> find any error handling bugs
#\u25D0 Spawning 3 agents\u2026`,
                `#[warning:\u25D0] agent-1 \xB7 scanning api
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[warning:\u25D0] agent-3 \xB7 scanning cli`,
                `#[success:\u2713] agent-1 \xB7 found reject
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[success:\u2713] agent-3 \xB7 no issues`,
                `Found 2 issues:
  [suggestion:api/fetch.ts:42] unhandled
  [suggestion:utils/retry.ts:18] swallowed`,
              ],
            }),
            Os.jsxs(h, {
              children: [
                "Define specialized agents in ",
                Os.jsx(UP, { children: ".claude/agents/" }),
                " \u2014 a test runner, a code reviewer, a docs writer \u2014 each with its own tools and instructions. Ask Claude to create or update them for you.",
              ],
            }),
            Os.jsxs(h, {
              dimColor: !0,
              children: [
                "Subagents run in isolated context. For true parallel sessions on separate branches, launch with ",
                Os.jsx(UP, { children: "claude --worktree" }),
                ".",
              ],
            }),
          ],
        }),
      },
      {
        id: "cross-device",
        title: "Code from anywhere",
        tagline: "/remote-control, /teleport",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "Run ",
                Os.jsx(UP, { children: "/remote-control" }),
                " to take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser. The session keeps running on this machine while your other devices act as a remote control.",
              ],
            }),
            Os.jsx(iMe, {
              frames: [
                `> [suggestion:/remote-control]
#\u25D0 connecting\u2026`,
                `[success:\u2713] connected
see this session at
[suggestion:claude.ai/code/abc123]`,
                `#\u2500 on your phone \u2500
#abc123 \xB7 running tests
[warning:\u25D0] 142 of 284`,
                `#\u2500 on your phone \u2500
#abc123 \xB7 [success:\u2713] all pass
> ship it`,
              ],
            }),
            Os.jsxs(h, {
              children: [
                "Started a session on the web and want to move it here? Run",
                " ",
                Os.jsx(UP, { children: "/teleport" }),
                " to pull it into this terminal with full history.",
              ],
            }),
            Os.jsx(h, {
              dimColor: !0,
              children:
                "Kick off a long task, close your laptop, check progress from your phone.",
            }),
          ],
        }),
      },
      {
        id: "model-dial",
        title: "Dial the model",
        tagline: "/model, /effort",
        body: Os.jsxs(H, {
          flexDirection: "column",
          gap: 1,
          children: [
            Os.jsxs(h, {
              children: [
                "Run ",
                Os.jsx(UP, { children: "/model" }),
                " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth.",
              ],
            }),
            Os.jsx(iMe, {
              frames: [
                `> [suggestion:/effort] high
#effort set to [claude:high]`,
                `> why is the list page slow?
#[claude:\u25D0 thinking deeply\u2026]`,
                `Three hypotheses, ranked:
 1. N+1 query in loader
 2. missing index on users`,
              ],
            }),
            Os.jsxs(h, {
              children: [
                Os.jsx(UP, { children: "/effort" }),
                " controls how long Claude thinks before answering.",
                " ",
                Os.jsx(qGt, { children: "high" }),
                " for tricky bugs, ",
                Os.jsx(qGt, { children: "low" }),
                " when you just need a quick edit.",
              ],
            }),
            Os.jsxs(h, {
              dimColor: !0,
              children: [
                "Also: ",
                Os.jsx(UP, { children: "/fast" }),
                " toggles fast mode \u2014 same model, faster output.",
              ],
            }),
          ],
        }),
      },
    ];
  });
