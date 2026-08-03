// Module: FUt (lines 587134-587199)
  var FUt = S(() => {
    pt();
    zl();
    Zr();
    vt();
    Vu();
    tko();
    CUe();
    jFo();
    Tf();
    hn();
    Ge();
    st();
    Ir();
    Jh();
    Ga();
    HV();
    nW();
    Q7d();
    Ipn();
    Rpn();
    ((N5s = {
      simple_plan: nXd(),
      visual_plan: oXd(),
      three_subagents_with_critique: iXd(),
    }),
      (zcC = Object.keys(N5s)));
    ((aXd = {
      timeEstimate: "a few minutes",
      dialogBody:
        "Interactive planning on the web where you can edit and leave targeted comments on Claude's plan.",
      dialogPipeline: "Plan \u2192 Edit \u2192 Execute",
      usageBlurb: [
        "Remote plan mode with rich web editing experience.",
        "Runs in Claude Code on the web. When the plan is ready,",
        "you can execute it in the web session or send it back here.",
        "You can continue to work while the plan is generated remotely.",
      ],
    }),
      (wR_ = {
        simple_plan: aXd,
        visual_plan: aXd,
        three_subagents_with_critique: {
          timeEstimate: "~10\u201330 min",
          dialogBody:
            "Interactive planning on the web where you can edit and leave targeted comments on Claude's plan.",
          dialogPipeline: "Scope \u2192 Critique \u2192 Edit \u2192 Execute",
          usageBlurb: [
            "Advanced multi-agent plan mode.",
            "Runs in Claude Code on the web. When the plan is ready,",
            "you can execute it in the web session or send it back here.",
            "You can continue to work while the plan is generated remotely.",
          ],
        },
      }));
    cXd = {
      type: "local-jsx",
      name: "ultraplan",
      get description() {
        return `Draft an editable plan in Claude Code on the web (${Ppn().timeEstimate}) \xB7 See ${Mve}`;
      },
      argumentHint: "<prompt>",
      isEnabled: () => dRe(),
      load: () => Promise.resolve({ call: DR_ }),
    };
  });
