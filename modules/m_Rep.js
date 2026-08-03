// Module: Rep (lines 595529-595880)
  var Rep = S(() => {
    kOt();
    Vn();
    dH();
    mh();
    Yh();
    Ge();
    Qr();
    st();
    Ja();
    vDt();
    Ir();
    vo();
    si();
    OE();
    Ga();
    Zt();
    Pr();
    XC();
    _v();
    ((pme = require("fs/promises")), ($ve = require("path")));
    ((rL_ = Se(() =>
      v.object({
        session_id: v.string(),
        transcript_mtime: v.number().optional(),
        project_path: v.string(),
        start_time: v.string(),
        duration_minutes: v.number(),
        user_message_count: v.number(),
        assistant_message_count: v.number(),
        tool_counts: v.record(v.string(), v.number()).optional(),
        languages: v.record(v.string(), v.number()).optional(),
        git_commits: v.number(),
        git_pushes: v.number(),
        input_tokens: v.number(),
        output_tokens: v.number(),
        first_prompt: v.string(),
        summary: v.string().optional(),
        user_interruptions: v.number().optional(),
        user_response_times: v.array(v.number()).optional(),
        tool_errors: v.number().optional(),
        tool_error_categories: v.record(v.string(), v.number()).optional(),
        uses_task_agent: v.boolean().optional(),
        uses_mcp: v.boolean().optional(),
        uses_web_search: v.boolean().optional(),
        uses_web_fetch: v.boolean().optional(),
        lines_added: v.number().optional(),
        lines_removed: v.number().optional(),
        files_modified: v.number().optional(),
        message_hours: v.array(v.number()).optional(),
        user_message_timestamps: v.array(v.string()).optional(),
      }),
    )),
      (nL_ = {
        ".ts": "TypeScript",
        ".tsx": "TypeScript",
        ".js": "JavaScript",
        ".jsx": "JavaScript",
        ".py": "Python",
        ".rb": "Ruby",
        ".go": "Go",
        ".rs": "Rust",
        ".java": "Java",
        ".c": "C",
        ".h": "C",
        ".cpp": "C++",
        ".cc": "C++",
        ".cxx": "C++",
        ".hpp": "C++",
        ".hh": "C++",
        ".hxx": "C++",
        ".ipp": "C++",
        ".md": "Markdown",
        ".json": "JSON",
        ".yaml": "YAML",
        ".yml": "YAML",
        ".sh": "Shell",
        ".css": "CSS",
        ".html": "HTML",
      }),
      (oL_ = {
        debug_investigate: "Debug/Investigate",
        implement_feature: "Implement Feature",
        fix_bug: "Fix Bug",
        write_script_tool: "Write Script/Tool",
        refactor_code: "Refactor Code",
        configure_system: "Configure System",
        create_pr_commit: "Create PR/Commit",
        analyze_data: "Analyze Data",
        understand_codebase: "Understand Codebase",
        write_tests: "Write Tests",
        write_docs: "Write Docs",
        deploy_infra: "Deploy/Infra",
        warmup_minimal: "Cache Warmup",
        fast_accurate_search: "Fast/Accurate Search",
        correct_code_edits: "Correct Code Edits",
        good_explanations: "Good Explanations",
        proactive_help: "Proactive Help",
        multi_file_changes: "Multi-file Changes",
        handled_complexity: "Multi-file Changes",
        good_debugging: "Good Debugging",
        misunderstood_request: "Misunderstood Request",
        wrong_approach: "Wrong Approach",
        buggy_code: "Buggy Code",
        user_rejected_action: "User Rejected Action",
        claude_got_blocked: "Claude Got Blocked",
        user_stopped_early: "User Stopped Early",
        wrong_file_or_location: "Wrong File/Location",
        excessive_changes: "Excessive Changes",
        slow_or_verbose: "Slow/Verbose",
        tool_failed: "Tool Failed",
        user_unclear: "User Unclear",
        external_issue: "External Issue",
        frustrated: "Frustrated",
        dissatisfied: "Dissatisfied",
        likely_satisfied: "Likely Satisfied",
        satisfied: "Satisfied",
        happy: "Happy",
        unsure: "Unsure",
        neutral: "Neutral",
        delighted: "Delighted",
        single_task: "Single Task",
        multi_task: "Multi Task",
        iterative_refinement: "Iterative Refinement",
        exploration: "Exploration",
        quick_question: "Quick Question",
        fully_achieved: "Fully Achieved",
        mostly_achieved: "Mostly Achieved",
        partially_achieved: "Partially Achieved",
        not_achieved: "Not Achieved",
        unclear_from_transcript: "Unclear",
        unhelpful: "Unhelpful",
        slightly_helpful: "Slightly Helpful",
        moderately_helpful: "Moderately Helpful",
        very_helpful: "Very Helpful",
        essential: "Essential",
      }));
    aL_ = [
      [["exit code"], "Command Failed"],
      [["rejected", "doesn't want"], "User Rejected"],
      [["string to replace not found", "no changes"], "Edit Failed"],
      [["modified since read"], "File Changed"],
      [["exceeds maximum", "too large"], "File Too Large"],
      [["file not found", "does not exist"], "File Not Found"],
    ];
    _L_ = [
      {
        name: "project_areas",
        prompt: `Analyze this Claude Code usage data and identify project areas.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "areas": [
    {"name": "Area name", "session_count": N, "description": "2-3 sentences about what was worked on and how Claude Code was used."}
  ]
}

Include 4-5 areas. Skip internal CC operations.`,
        maxTokens: 8192,
      },
      {
        name: "interaction_style",
        prompt: `Analyze this Claude Code usage data and describe the user's interaction style.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "narrative": "2-3 paragraphs analyzing HOW the user interacts with Claude Code. Use second person 'you'. Describe patterns: iterate quickly vs detailed upfront specs? Interrupt often or let Claude run? Include specific examples. Use **bold** for key insights.",
  "key_pattern": "One sentence summary of most distinctive interaction style"
}`,
        maxTokens: 8192,
      },
      {
        name: "what_works",
        prompt: `Analyze this Claude Code usage data and identify what's working well for this user. Use second person ("you").

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence of context",
  "impressive_workflows": [
    {"title": "Short title (3-6 words)", "description": "2-3 sentences describing the impressive workflow or approach. Use 'you' not 'the user'."}
  ]
}

Include 3 impressive workflows.`,
        maxTokens: 8192,
      },
      {
        name: "friction_analysis",
        prompt: `Analyze this Claude Code usage data and identify friction points for this user. Use second person ("you").

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence summarizing friction patterns",
  "categories": [
    {"category": "Concrete category name", "description": "1-2 sentences explaining this category and what could be done differently. Use 'you' not 'the user'.", "examples": ["Specific example with consequence", "Another example"]}
  ]
}

Include 3 friction categories with 2 examples each.`,
        maxTokens: 8192,
      },
      {
        name: "suggestions",
        prompt: `Analyze this Claude Code usage data and suggest improvements.

## CC FEATURES REFERENCE (pick from these for features_to_try):
1. **MCP Servers**: Connect Claude to external tools, databases, and APIs via Model Context Protocol.
   - How to use: Run \`claude mcp add <server-name> -- <command>\`
   - Good for: database queries, Slack integration, GitHub issue lookup, connecting to internal APIs

2. **Custom Skills**: Reusable prompts you define as markdown files that run with a single /command.
   - How to use: Create \`.claude/skills/commit/SKILL.md\` with instructions. Then type \`/commit\` to run it.
   - Good for: repetitive workflows - /commit, /review, /test, /deploy, /pr, or complex multi-step workflows

3. **Hooks**: Shell commands that auto-run at specific lifecycle events.
   - How to use: Add to \`.claude/settings.json\` under "hooks" key.
   - Good for: auto-formatting code, running type checks, enforcing conventions

4. **Headless Mode**: Run Claude non-interactively from scripts and CI/CD.
   - How to use: \`claude -p "fix lint errors" --allowedTools "Edit,Read,Bash"\`
   - Good for: CI/CD integration, batch code fixes, automated reviews

5. **Task Agents**: Claude spawns focused subagents for complex exploration or parallel work.
   - How to use: Claude auto-invokes when helpful, or ask "use an agent to explore X"
   - Good for: codebase exploration, understanding complex systems

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "claude_md_additions": [
    {"addition": "A specific line or block to add to CLAUDE.md based on workflow patterns. E.g., 'Always run tests after modifying auth-related files'", "why": "1 sentence explaining why this would help based on actual sessions", "prompt_scaffold": "Instructions for where to add this in CLAUDE.md. E.g., 'Add under ## Testing section'"}
  ],
  "features_to_try": [
    {"feature": "Feature name from CC FEATURES REFERENCE above", "one_liner": "What it does", "why_for_you": "Why this would help YOU based on your sessions", "example_code": "Actual command or config to copy"}
  ],
  "usage_patterns": [
    {"title": "Short title", "suggestion": "1-2 sentence summary", "detail": "3-4 sentences explaining how this applies to YOUR work", "copyable_prompt": "A specific prompt to copy and try"}
  ]
}

IMPORTANT for claude_md_additions: PRIORITIZE instructions that appear MULTIPLE TIMES in the user data. If user told Claude the same thing in 2+ sessions (e.g., 'always run tests', 'use TypeScript'), that's a PRIME candidate - they shouldn't have to repeat themselves.

IMPORTANT for features_to_try: Pick 2-3 from the CC FEATURES REFERENCE above. Include 2-3 items for each category.`,
        maxTokens: 8192,
      },
      {
        name: "on_the_horizon",
        prompt: `Analyze this Claude Code usage data and identify future opportunities.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence about evolving AI-assisted development",
  "opportunities": [
    {"title": "Short title (4-8 words)", "whats_possible": "2-3 ambitious sentences about autonomous workflows", "how_to_try": "1-2 sentences mentioning relevant tooling", "copyable_prompt": "Detailed prompt to try"}
  ]
}

Include 3 opportunities. Think BIG - autonomous workflows, parallel agents, iterating against tests.`,
        maxTokens: 8192,
      },
      ...[],
      {
        name: "fun_ending",
        prompt: `Analyze this Claude Code usage data and find a memorable moment.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "headline": "A memorable QUALITATIVE moment from the transcripts - not a statistic. Something human, funny, or surprising.",
  "detail": "Brief context about when/where this happened"
}

Find something genuinely interesting or amusing from the session summaries.`,
        maxTokens: 8192,
      },
    ];
    ((SL_ = [
      "frustrated",
      "dissatisfied",
      "likely_satisfied",
      "satisfied",
      "happy",
      "unsure",
    ]),
      (EL_ = [
        "not_achieved",
        "partially_achieved",
        "mostly_achieved",
        "fully_achieved",
        "unclear_from_transcript",
      ]));
    kL_ = {
      type: "prompt",
      name: "insights",
      description: "Generate a report analyzing your Claude Code sessions",
      contentLength: 0,
      progressMessage: "analyzing your sessions",
      source: "builtin",
      async getPromptForCommand(e) {
        let t = !1,
          r = [],
          n = !1,
          {
            insights: o,
            htmlPath: i,
            data: s,
            remoteStats: a,
          } = await xep({ collectRemote: t }),
          l = `file://${i}`,
          u = [
            s.total_sessions_scanned &&
            s.total_sessions_scanned > s.total_sessions
              ? `${s.total_sessions_scanned.toLocaleString()} sessions total \xB7 ${s.total_sessions} analyzed`
              : `${s.total_sessions} sessions`,
            `${s.total_messages.toLocaleString()} messages`,
            `${Math.round(s.total_duration_hours)}h`,
            `${s.git_commits} commits`,
          ].join(" \xB7 "),
          d = "",
          p = o.at_a_glance,
          f = p
            ? `## At a Glance

${p.whats_working ? `**What's working:** ${p.whats_working} See _Impressive Things You Did_.` : ""}

${p.whats_hindering ? `**What's hindering you:** ${p.whats_hindering} See _Where Things Go Wrong_.` : ""}

${p.quick_wins ? `**Quick wins to try:** ${p.quick_wins} See _Features to Try_.` : ""}

${p.ambitious_workflows ? `**Ambitious workflows:** ${p.ambitious_workflows} See _On the Horizon_.` : ""}`
            : "_No insights generated_",
          m = `# Claude Code Insights

${u}
${s.date_range.start} to ${s.date_range.end}
${d}
`;
        return [
          {
            type: "text",
            text: Hep({
              insightsJson: Ie(o, null, 2),
              reportUrl: l,
              htmlPath: i,
              facetsDir: FUo(),
              header: m,
              summaryText: f,
            }),
          },
        ];
      },
    };
    IL_ = kL_;
  });
