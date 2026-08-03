// Module: $fe (lines 597583-597667)
  var $fe = S(() => {
    dB();
    Ar();
    Qa();
    ei();
    pt();
    gRt();
    dRu();
    I$();
    MPt();
    Un();
    hn();
    UC();
    P7r();
    mh();
    Klt();
    g1();
    Rh();
    RS();
    si();
    fB();
    Jm();
    Wee();
    VM();
    ND();
    rfe();
    $ze();
    kyo();
    Xm();
    ntn();
    Qr();
    FB();
    aJn();
    aH();
    Zr();
    vt();
    oRt();
    s$();
    mct();
    Ge();
    Fan();
    ozr();
    Mon();
    ube();
    $xe();
    mmt();
    yb();
    IWn();
    ((e2t = require("os")),
      (Yep = require("path")),
      (KL_ = (A5(), en(hst)).BRIEF_PROACTIVE_SECTION),
      (b6s = (pte(), en(JEe))),
      (Xep = qr(() => {
        let e = SQ().latest_per_family;
        return `The most recent Claude models are the Claude 5 family and Haiku 4.5. Model IDs \u2014 ${Object.values(
          e,
        )
          .map(
            (r) =>
              `${Tw(r)?.display_name ?? r}: '${r === "claude-haiku-4-5" ? "claude-haiku-4-5-20251001" : r}'`,
          )
          .join(
            ", ",
          )}. When building AI applications, default to the latest and most capable Claude models.`;
      })),
      (YL_ = [V1e, IFc, DFc]));
    Kep = [
      "Do not call the AgentTool unless the user requested it",
      "Do not use workflows or deep-research unless the user requested it",
    ].join(`
`);
    Jep = qr(
      (e) => (svi(() => Jep.cache.clear?.()), ber(e) && !Ero(e) && !RFc(lo(e))),
      () => "latch",
    );
    bO_ = qr(() => {
      let e = Z.CLAUDE_CODE_ACT_DONT_REDERIVE,
        t = e ?? Ke("tengu_cedar_lantern", !0);
      if (t)
        w(
          `act_dont_rederive_arm_active source=${e !== void 0 ? "env" : "growthbook"}`,
        );
      return t;
    });
  });
