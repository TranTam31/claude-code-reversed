// Module: Q0i (lines 21783-21860)
  var Q0i = S(() => {
    pD();
    JFr();
    Bkl();
    V0i();
    J0i();
    J0i();
    v0i();
    vQ = class vQ extends Hh {
      constructor() {
        super(...arguments);
        this.batches = new CUr(this._client);
      }
      create(e, t) {
        if (e.model in jkl)
          console.warn(`The model '${e.model}' is deprecated and will reach end-of-life on ${jkl[e.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
        if (
          V8m.includes(e.model) &&
          e.thinking &&
          e.thinking.type === "enabled"
        )
          console.warn(
            `Using Claude with ${e.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`,
          );
        let r = this._client._options.timeout;
        if (!e.stream && r == null) {
          let o = EBn[e.model] ?? void 0;
          r = this._client.calculateNonstreamingTimeout(e.max_tokens, o);
        }
        let n = SBn(e.tools, e.messages);
        return this._client.post("/v1/messages", {
          body: e,
          timeout: r ?? 600000,
          ...t,
          headers: Cs([n, t?.headers]),
          stream: e.stream ?? !1,
        });
      }
      parse(e, t) {
        return this.create(e, t).then((r) =>
          G0i(r, e, { logger: this._client.logger ?? console }),
        );
      }
      stream(e, t) {
        return TUr.createMessage(this, e, t, {
          logger: this._client.logger ?? console,
        });
      }
      countTokens(e, t) {
        return this._client.post("/v1/messages/count_tokens", {
          body: e,
          ...t,
        });
      }
    };
    ((jkl = {
      "claude-1.3": "November 6th, 2024",
      "claude-1.3-100k": "November 6th, 2024",
      "claude-instant-1.1": "November 6th, 2024",
      "claude-instant-1.1-100k": "November 6th, 2024",
      "claude-instant-1.2": "November 6th, 2024",
      "claude-3-sonnet-20240229": "July 21st, 2025",
      "claude-3-opus-20240229": "January 5th, 2026",
      "claude-2.1": "July 21st, 2025",
      "claude-2.0": "July 21st, 2025",
      "claude-3-7-sonnet-latest": "February 19th, 2026",
      "claude-3-7-sonnet-20250219": "February 19th, 2026",
      "claude-3-5-haiku-latest": "February 19th, 2026",
      "claude-3-5-haiku-20241022": "February 19th, 2026",
      "claude-opus-4-0": "June 15th, 2026",
      "claude-opus-4-20250514": "June 15th, 2026",
      "claude-sonnet-4-0": "June 15th, 2026",
      "claude-sonnet-4-20250514": "June 15th, 2026",
    }),
      (V8m = ["claude-mythos-preview", "claude-opus-4-6"]));
    vQ.Batches = CUr;
  });
