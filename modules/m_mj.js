// Module: mj (lines 118984-119038)
  var mj = S(() => {
    st();
    fB();
    kZh = {
      "claude-3-5-haiku": "haiku35",
      "claude-haiku-4-5": "haiku45",
      "claude-3-5-sonnet": "sonnet35",
      "claude-3-7-sonnet": "sonnet37",
      "claude-sonnet-4-0": "sonnet40",
      "claude-sonnet-4-5": "sonnet45",
      "claude-sonnet-4-6": "sonnet46",
      "claude-sonnet-5": "sonnet5",
      "claude-opus-4-0": "opus40",
      "claude-opus-4-1": "opus41",
      "claude-opus-4-5": "opus45",
      "claude-opus-4-6": "opus46",
      "claude-opus-4-7": "opus47",
      "claude-opus-4-8": "opus48",
      "claude-opus-5": "opus5",
      "claude-fable-5": "fable5",
    };
    Bl = RZh();
    ((gPv = rY(Bl.haiku35)),
      (yPv = rY(Bl.haiku45)),
      (_Pv = rY(Bl.sonnet35)),
      (bPv = rY(Bl.sonnet37)),
      (SPv = rY(Bl.sonnet40)),
      (EPv = rY(Bl.sonnet45)),
      (vPv = rY(Bl.sonnet46)),
      (APv = rY(Bl.sonnet5)),
      (wPv = rY(Bl.opus40)),
      (TPv = rY(Bl.opus41)),
      (CPv = rY(Bl.opus45)),
      (xPv = rY(Bl.opus46)),
      (HPv = rY(Bl.opus47)),
      (kPv = rY(Bl.opus48)),
      (IPv = rY(Bl.opus5)),
      (kot = rY(Bl.fable5)),
      (fbc = {
        firstParty: "claude-mythos-5",
        bedrock: "us.anthropic.claude-mythos-5",
        vertex: "claude-mythos-5",
        foundry: "claude-mythos-5",
        anthropicAws: "claude-mythos-5",
        anthropicGoogleCloud: "claude-mythos-5",
        mantle: "anthropic.claude-mythos-5",
        gateway: "claude-mythos-5",
        eagerInputStreaming: { bedrock: !0, vertex: !0 },
      }),
      (c4i = ["opus5", "opus48", "opus47", "opus46", "opus45"]),
      (mbc = Object.values(Bl).map((e) => e.firstParty)),
      (g_e = Object.fromEntries(
        Object.entries(Bl).map(([e, t]) => [t.firstParty, e]),
      )));
  });
