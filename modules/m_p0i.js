// Module: P0i (lines 20324-20438)
  var P0i = S(() => {
    u5e();
    E0i();
    v0i();
    pD();
    JFr();
    T0i();
    Hkl();
    D0i();
    RBn();
    E0i();
    D0i();
    RBn();
    ((Pkl = {
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
    }),
      (M8m = ["claude-mythos-preview", "claude-opus-4-6"]));
    Wtt = class Wtt extends Hh {
      constructor() {
        super(...arguments);
        this.batches = new oUr(this._client);
      }
      create(e, t) {
        let r = Mkl(e),
          { betas: n, ...o } = r;
        if (o.model in Pkl)
          console.warn(`The model '${o.model}' is deprecated and will reach end-of-life on ${Pkl[o.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
        if (
          M8m.includes(o.model) &&
          o.thinking &&
          o.thinking.type === "enabled"
        )
          console.warn(
            `Using Claude with ${o.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`,
          );
        let i = this._client._options.timeout;
        if (!o.stream && i == null) {
          let a = EBn[o.model] ?? void 0;
          i = this._client.calculateNonstreamingTimeout(o.max_tokens, a);
        }
        let s = SBn(o.tools, o.messages);
        return this._client.post("/v1/messages?beta=true", {
          body: o,
          timeout: i ?? 600000,
          ...t,
          headers: Cs([
            {
              ...(n?.toString() != null
                ? { "anthropic-beta": n?.toString() }
                : void 0),
            },
            s,
            t?.headers,
          ]),
          stream: r.stream ?? !1,
        });
      }
      parse(e, t) {
        return (
          (t = {
            ...t,
            headers: Cs([
              {
                "anthropic-beta": [
                  ...(e.betas ?? []),
                  "structured-outputs-2025-12-15",
                ].toString(),
              },
              t?.headers,
            ]),
          }),
          this.create(e, t).then((r) =>
            w0i(r, e, { logger: this._client.logger ?? console }),
          )
        );
      }
      stream(e, t) {
        return dUr.createMessage(this, e, t);
      }
      countTokens(e, t) {
        let r = Mkl(e),
          { betas: n, ...o } = r;
        return this._client.post("/v1/messages/count_tokens?beta=true", {
          body: o,
          ...t,
          headers: Cs([
            {
              "anthropic-beta": [
                ...(n ?? []),
                "token-counting-2024-11-01",
              ].toString(),
            },
            t?.headers,
          ]),
        });
      }
      toolRunner(e, t) {
        return new mUr(this._client, e, t);
      }
    };
    Wtt.Batches = oUr;
    Wtt.BetaToolRunner = mUr;
    Wtt.ToolError = D9t;
  });
