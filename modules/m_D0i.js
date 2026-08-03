// Module: D0i (lines 20083-20313)
  var D0i = S(() => {
    s5e();
    RBn();
    $N();
    pD();
    JFr();
    mUr = class mUr {
      constructor(e, t, r) {
        (pUr.add(this),
          (this.client = e),
          P9t.set(this, !1),
          N0t.set(this, !1),
          ej.set(this, void 0),
          Jne.set(this, void 0),
          Due.set(this, void 0),
          p5e.set(this, void 0),
          jtt.set(this, void 0),
          fUr.set(this, 0),
          Ec(
            this,
            ej,
            { params: { ...t, messages: structuredClone(t.messages) } },
            "f",
          ));
        let o = ["BetaToolRunner", ...d0i(t.tools, t.messages)].join(", ");
        if (
          (Ec(
            this,
            Jne,
            { ...r, headers: Cs([{ "x-stainless-helper": o }, r?.headers]) },
            "f",
          ),
          Ec(this, jtt, Dkl(), "f"),
          t.compactionControl?.enabled)
        )
          console.warn(
            'Anthropic: The `compactionControl` parameter is deprecated and will be removed in a future version. Use server-side compaction instead by passing `edits: [{ type: "compact_20260112" }]` in the params passed to `toolRunner()`. See https://platform.claude.com/docs/en/build-with-claude/compaction',
          );
      }
      async *[((P9t = new WeakMap()),
      (N0t = new WeakMap()),
      (ej = new WeakMap()),
      (Jne = new WeakMap()),
      (Due = new WeakMap()),
      (p5e = new WeakMap()),
      (jtt = new WeakMap()),
      (fUr = new WeakMap()),
      (pUr = new WeakSet()),
      (Rkl = async function () {
        let t = jo(this, ej, "f").params.compactionControl;
        if (!t || !t.enabled) return !1;
        let r = 0;
        if (jo(this, Due, "f") !== void 0)
          try {
            let l = await jo(this, Due, "f");
            r =
              l.usage.input_tokens +
              (l.usage.cache_creation_input_tokens ?? 0) +
              (l.usage.cache_read_input_tokens ?? 0) +
              l.usage.output_tokens;
          } catch {
            return !1;
          }
        let n = t.contextTokenThreshold ?? kkl;
        if (r < n) return !1;
        let o = t.model ?? jo(this, ej, "f").params.model,
          i = t.summaryPrompt ?? Ikl,
          s = jo(this, ej, "f").params.messages;
        if (s[s.length - 1].role === "assistant") {
          let l = s[s.length - 1];
          if (Array.isArray(l.content)) {
            let c = l.content.filter((u) => u.type !== "tool_use");
            if (c.length === 0) s.pop();
            else l.content = c;
          }
        }
        let a = await this.client.beta.messages.create(
          {
            model: o,
            messages: [
              ...s,
              { role: "user", content: [{ type: "text", text: i }] },
            ],
            max_tokens: jo(this, ej, "f").params.max_tokens,
          },
          {
            signal: jo(this, Jne, "f").signal,
            headers: Cs([
              jo(this, Jne, "f").headers,
              { "x-stainless-helper": "compaction" },
            ]),
          },
        );
        if (a.content[0]?.type !== "text")
          throw new js("Expected text response for compaction");
        return (
          (jo(this, ej, "f").params.messages = [
            { role: "user", content: a.content },
          ]),
          !0
        );
      }),
      Symbol.asyncIterator)]() {
        var e;
        if (jo(this, P9t, "f"))
          throw new js("Cannot iterate over a consumed stream");
        (Ec(this, P9t, !0, "f"),
          Ec(this, N0t, !0, "f"),
          Ec(this, p5e, void 0, "f"));
        try {
          while (!0) {
            let t;
            try {
              if (
                jo(this, ej, "f").params.max_iterations &&
                jo(this, fUr, "f") >= jo(this, ej, "f").params.max_iterations
              )
                break;
              (Ec(this, N0t, !1, "f"),
                Ec(this, p5e, void 0, "f"),
                Ec(this, fUr, ((e = jo(this, fUr, "f")), e++, e), "f"),
                Ec(this, Due, void 0, "f"));
              let {
                max_iterations: r,
                compactionControl: n,
                ...o
              } = jo(this, ej, "f").params;
              if (o.stream)
                ((t = this.client.beta.messages.stream(
                  { ...o },
                  jo(this, Jne, "f"),
                )),
                  Ec(this, Due, t.finalMessage(), "f"),
                  jo(this, Due, "f").catch(() => {}),
                  yield t);
              else
                (Ec(
                  this,
                  Due,
                  this.client.beta.messages.create(
                    { ...o, stream: !1 },
                    jo(this, Jne, "f"),
                  ),
                  "f",
                ),
                  yield jo(this, Due, "f"));
              if (!(await jo(this, pUr, "m", Rkl).call(this))) {
                if (!jo(this, N0t, "f")) {
                  let { role: a, content: l } = await jo(this, Due, "f");
                  jo(this, ej, "f").params.messages.push({
                    role: a,
                    content: l,
                  });
                }
                let s = await jo(this, pUr, "m", R0i).call(
                  this,
                  jo(this, ej, "f").params.messages.at(-1),
                );
                if (s) jo(this, ej, "f").params.messages.push(s);
                else if (!jo(this, N0t, "f")) break;
              }
            } finally {
              if (t) t.abort();
            }
          }
          if (!jo(this, Due, "f"))
            throw new js(
              "ToolRunner concluded without a message from the server",
            );
          jo(this, jtt, "f").resolve(await jo(this, Due, "f"));
        } catch (t) {
          throw (
            Ec(this, P9t, !1, "f"),
            jo(this, jtt, "f").promise.catch(() => {}),
            jo(this, jtt, "f").reject(t),
            Ec(this, jtt, Dkl(), "f"),
            t
          );
        }
      }
      setMessagesParams(e) {
        if (typeof e === "function")
          jo(this, ej, "f").params = e(jo(this, ej, "f").params);
        else jo(this, ej, "f").params = e;
        (Ec(this, N0t, !0, "f"), Ec(this, p5e, void 0, "f"));
      }
      setRequestOptions(e) {
        if (typeof e === "function") Ec(this, Jne, e(jo(this, Jne, "f")), "f");
        else Ec(this, Jne, { ...jo(this, Jne, "f"), ...e }, "f");
      }
      async generateToolResponse(e = jo(this, Jne, "f").signal) {
        let t = (await jo(this, Due, "f")) ?? this.params.messages.at(-1);
        if (!t) return null;
        return jo(this, pUr, "m", R0i).call(this, t, e);
      }
      done() {
        return jo(this, jtt, "f").promise;
      }
      async runUntilDone() {
        if (!jo(this, P9t, "f")) for await (let e of this);
        return this.done();
      }
      get params() {
        return jo(this, ej, "f").params;
      }
      pushMessages(...e) {
        this.setMessagesParams((t) => ({
          ...t,
          messages: [...t.messages, ...e],
        }));
      }
      then(e, t) {
        return this.runUntilDone().then(e, t);
      }
    };
    R0i = async function (t, r = jo(this, Jne, "f").signal) {
      if (jo(this, p5e, "f") !== void 0) return jo(this, p5e, "f");
      return (
        Ec(
          this,
          p5e,
          P8m(jo(this, ej, "f").params, t, {
            ...jo(this, Jne, "f"),
            signal: r,
          }),
          "f",
        ),
        jo(this, p5e, "f")
      );
    };
  });
