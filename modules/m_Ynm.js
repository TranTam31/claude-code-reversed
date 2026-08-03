// Module: Ynm (lines 914093-914195)
  var Ynm = S(() => {
    Klt();
    m4();
    Zr();
    pt();
    vt();
    Ss();
    WC();
    qC();
    vY();
    jl();
    Wf();
    Ar();
    Ja();
    Qa();
    si();
    i_();
    Zt();
    b_();
    Hnm();
    ehr();
    rhr();
    Nnm();
    Fnm();
    ((Wnm = { cell: "low", modelEffort: "typed", finderBudgetHint: !1 }),
      (H6S = new Set(["claude-opus-4-8", "claude-opus-5"])),
      (k6S = { "claude-sonnet-5": "sonnet5", "claude-opus-4-8": "hc10" }),
      (I6S = {
        low: Wnm,
        medium: _ne("medium"),
        high: _ne("high"),
        xhigh: _ne("xhigh"),
        max: _ne("max"),
      }),
      (aLr = {
        default: I6S,
        "claude-sonnet-5": {
          low: {
            cell: "low-sonnet5",
            modelEffort: "medium",
            finderBudgetHint: !1,
          },
          medium: _ne("medium"),
          high: { ..._ne("high"), finderBudgetHint: !0 },
          xhigh: { ..._ne("xhigh"), finderBudgetHint: !0 },
          max: { ..._ne("max"), finderBudgetHint: !0 },
        },
        "claude-opus-4-8": {
          low: { ..._ne("o48-low-v1"), measuredExternal: !0 },
          medium: { ..._ne("o48-med-v1"), measuredExternal: !0 },
          high: { ..._ne("o48-high-v1"), measuredExternal: !0 },
          xhigh: { ..._ne("o48-xhigh-v1"), measuredExternal: !0 },
          max: _ne("max"),
        },
        "claude-opus-5": {
          low: Wnm,
          medium: {
            cell: "o5-bmin",
            modelEffort: "typed",
            finderBudgetHint: !1,
            measuredExternal: !0,
          },
          high: {
            cell: "o5-bmin",
            modelEffort: "typed",
            finderBudgetHint: !1,
            measuredExternal: !0,
          },
          xhigh: { ..._ne("o48-xhigh-v1"), measuredExternal: !0 },
          max: _ne("max"),
        },
      }));
    for (let e of Object.values(aLr)) {
      for (let t of Object.values(e)) Object.freeze(t);
      Object.freeze(e);
    }
    Object.freeze(aLr);
    ((Vnm = `call ${o2} again with the same findings, each
carrying an \`outcome\`: \`fixed\`, \`no_change_needed\` (the finding was wrong or
already handled), or \`skipped\` (real but not applied). Do not repeat the
findings as text`),
      (Bnm = `

## If findings are fixed later

Whenever reported findings get fixed later in this session - the user asks you
to fix them, or later work fixes them incidentally - you MUST ${Vnm}.
Make that call immediately after the fixes land, before any prose summary; the
host UI's per-finding status updates only from it, and without it the findings
stay marked unresolved.
`));
    l5I = `

## After the review

After the findings are reported (and applied, when --fix was passed): if \`/${Use}\` has NOT run this session and the diff has a runtime surface (not test-only or docs-only per the pre-ship exemptions), invoke \`/${Use}\` now \u2014 this review checks that the diff reads right; \`/${Use}\` checks that it runs right. State which you did.
`;
    ((xpi = CD),
      (M6S = new RegExp(
        `^(${xpi.map((e) => e.slice(0, 3)).join("|")})[a-z]*$`,
        "i",
      )));
  });
