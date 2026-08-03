// Module: FB (lines 140391-140422)
  var FB = S(() => {
    dB();
    Zr();
    b5();
    hn();
    Ar();
    Qr();
    i_();
    fB();
    si();
    ts();
    Fcg = new Set([
      "claude-opus-4-6",
      "claude-haiku-4-5",
      "claude-opus-4-5",
      "claude-opus-4-1",
      "claude-opus-4-0",
      "claude-sonnet-4-5",
      "claude-sonnet-4-0",
      "claude-3-7-sonnet",
      "claude-3-5-sonnet",
      "claude-3-5-haiku",
    ]);
    SE = qr((e) => {
      if (!e) return !1;
      if (Yt(process.env.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !0;
      if (su(process.env.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !1;
      if (!Kcg(e)) return !0;
      if (Ke("tengu_velvet_tide", !1)) return !0;
      return Ucg(e);
    });
  });
