// Module: s$ (lines 178474-178553)
  var s$ = S(() => {
    bl();
    Zr();
    pt();
    KCe();
    s7n();
    ZN();
    iZ();
    Eo();
    UC();
    Ge();
    ja();
    fB();
    si();
    E5r();
    ts();
    EU();
    pZc = new Set([T_e]);
    ber = qr((e) => {
      if (cY("hipaa")) return !1;
      if (Z.CLAUDE_CODE_FORCE_MID_CONVERSATION_SYSTEM) return !0;
      let t = Tde(e, "mid_conversation_system");
      if (t !== void 0) return t;
      let r = lo(e);
      if (
        r.includes("claude-3-") ||
        r === "claude-opus-4-0" ||
        r === "claude-opus-4-1" ||
        r === "claude-opus-4-5" ||
        r === "claude-opus-4-6" ||
        r === "claude-opus-4-7" ||
        r === "claude-sonnet-4-0" ||
        r === "claude-sonnet-4-5" ||
        r === "claude-sonnet-4-6" ||
        r === "claude-haiku-4-5"
      )
        return !1;
      if (NN(r, "mid_conv_system") || r === "claude-mythos-5") return !0;
      return hj(ny(e));
    });
    ((wro = qr((e) => {
      let t = [],
        r = lo(e),
        n = r.includes("haiku"),
        o = kn(),
        i = MM();
      if (!n) t.push(UHt);
      if (ii() || (i7n() && !gWr() && _k())) t.push($ot);
      if (Wb(e)) t.push(T_e);
      if (!Z.DISABLE_INTERLEAVED_THINKING && Hqr(e)) t.push(UJt);
      if (i && Hqr(e) && !yn() && !C5i()) t.push(rGr);
      if (r7n && i && Hqr(e) && kn() === "firstParty") t.push(r7n);
      let s = Z.USE_API_CONTEXT_MANAGEMENT && !1,
        a = Nxg(e);
      if (hj(ny(e)) && !x_e() && (s || a)) t.push(BHt);
      let l = Ke("tengu_tool_pear", !1);
      if (hj(ny(e)) && !x_e() && kqr(e) && l) t.push(C_e);
      if (o === "vertex" && Oxg(r)) t.push(eGr);
      if (o === "foundry") t.push(eGr);
      if (i) t.push(jJt);
      if (ber(e)) t.push(d5);
      let c = Z.ANTHROPIC_BETAS;
      if (c)
        t.push(
          ...c
            .split(",")
            .map((u) => u.trim())
            .filter(Boolean)
            .map(Aji),
        );
      return t;
    })),
      (Ude = qr((e) => {
        let t = wro(e);
        if (ny(e) === "bedrock") return t.filter((r) => !wji.has(r));
        return t;
      })),
      (A7i = qr((e) => wro(e).filter((r) => wji.has(r)))));
    hZc = new Set([UHt, UJt, T_e, BHt, C_e, eGr, BJt, tGr, mU, f5, d5]);
  });
