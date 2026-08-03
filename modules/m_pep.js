// Module: pep (lines 593371-593456)
  var pep = S(() => {
    pt();
    Zr();
    vt();
    bRo();
    Vu();
    hn();
    Ge();
    st();
    Ja();
    Qa();
    vT();
    Zt();
    cep();
    ((uep = require("fs/promises")), (OUo = require("path")));
    ((GM_ = `

**Sharing** \u2014 call the ${Aln} tool twice:

1. **Right after rendering the draft code block** (still in step 5, before the Review questions). Call with \`mode='check'\` \u2014 this uploads the draft to an existing guide (or creates a new one). Either way you get a \`share_url\` and \`short_code\`. Instead of the \`---\` / \`**Review**\` header from step 5, bridge directly from the link into the numbered questions (no horizontal rule):

   Here's a draft \u2014 a few quick questions to finish it up:

   <share URL>

   Then ask the three numbered questions from step 5 as normal. Save the \`short_code\` from the tool result \u2014 you'll need it in step 2.

2. **After the user answers the Review questions** and you've updated ONBOARDING.md, call it again with \`mode='update'\` and the \`short_code\` from step 1 to refresh the same link. Replace step 5's "drop it in your team docs" close with:

   Here's your onboarding guide: <updated URL>

   Send this to teammates and they'll get a guided walkthrough when they open it in Claude Code.

If the tool returns 'unavailable' at any point, skip that call and use the manual close from step 5 instead.`),
      (VM_ = ["Edit(ONBOARDING.md)", "Bash(ls *)", Aln]),
      (qM_ = {
        type: "prompt",
        name: "team-onboarding",
        description:
          "Help teammates ramp on Claude Code with a guide from your usage",
        allowedTools: VM_,
        contentLength: 0,
        isEnabled: () => ns("allow_team_onboarding"),
        isHidden: !1,
        progressMessage: "scanning usage data",
        effort: "low",
        requires: { workspace: !0 },
        userFacingName() {
          return "team-onboarding";
        },
        source: "builtin",
        disableModelInvocation: !0,
        async getPromptForCommand() {
          let e = Ke("tengu_flint_harbor_prompt", {}),
            t = typeof e?.prompt === "string" ? e.prompt : WM_,
            r = typeof e?.guideTemplate === "string" ? e.guideTemplate : jM_,
            n =
              typeof e?.windowDays === "number"
                ? Math.min(Math.max(Math.floor(e.windowDays), 1), 365)
                : $M_;
          (O("tengu_team_onboarding_invoked", { window_days: n }),
            await hr((c) => ({ ...c, teamOnboardingLastUsedAt: Date.now() })));
          let {
              usageData: o,
              sessionCount: i,
              slashCommandCount: s,
              mcpServerCount: a,
            } = await BM_(n),
            l =
              t
                .replaceAll("{{WINDOW_DAYS}}", String(n))
                .replaceAll("{{GUIDE_TEMPLATE}}", r)
                .replaceAll("{{USAGE_DATA}}", o) + (Qmr() ? GM_ : "");
          return (
            O("tengu_team_onboarding_generated", {
              session_count: i,
              slash_command_count: s,
              mcp_server_count: a,
              window_days: n,
            }),
            [{ type: "text", text: l }]
          );
        },
      }),
      (zM_ = qM_));
  });
