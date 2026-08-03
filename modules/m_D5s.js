// Module: D5s (lines 585868-585908)
  var D5s = S(() => {
    pt();
    Klt();
    iR_ = {
      type: "prompt",
      name: "review",
      description:
        "Review a GitHub pull request; for your working diff use /code-review",
      argumentHint: "[pr number]",
      progressMessage: "reviewing pull request",
      contentLength: 0,
      source: "builtin",
      async getPromptForCommand(e) {
        let [t = "", ...r] = e.trim().split(/\s+/),
          n = t.replaceAll("`", "").replace(/^#/, "");
        return [{ type: "text", text: n ? oR_(n, r.join(" ")) : nR_ }];
      },
    };
    ((A7d = {
      type: "local-jsx",
      name: "ultrareview",
      get description() {
        return v7d();
      },
      isEnabled: () => hee(),
    }),
      (w7d = {
        type: "local",
        name: "ultrareview",
        get description() {
          return v7d();
        },
        supportsNonInteractive: !0,
        isEnabled: () => yn() && hee(),
        get isHidden() {
          return !yn();
        },
        load: () => Promise.resolve().then(() => (E7d(), S7d)),
      }),
      (BFo = iR_));
  });
