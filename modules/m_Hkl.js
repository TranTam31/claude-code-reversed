// Module: Hkl (lines 19464-19985)
  var Hkl = S(() => {
    s5e();
    C0i();
    u5e();
    ABn();
    T0i();
    dUr = class dUr {
      constructor(e, t) {
        (yye.add(this),
          (this.messages = []),
          (this.receivedMessages = []),
          Btt.set(this, void 0),
          R9t.set(this, null),
          (this.controller = new AbortController()),
          iUr.set(this, void 0),
          wBn.set(this, () => {}),
          sUr.set(this, () => {}),
          aUr.set(this, void 0),
          TBn.set(this, () => {}),
          lUr.set(this, () => {}),
          d5e.set(this, {}),
          cUr.set(this, !1),
          CBn.set(this, !1),
          xBn.set(this, !1),
          O0t.set(this, !1),
          HBn.set(this, void 0),
          kBn.set(this, void 0),
          uUr.set(this, void 0),
          IBn.set(this, (r) => {
            if ((Ec(this, CBn, !0, "f"), a5e(r))) r = new Ty();
            if (r instanceof Ty)
              return (Ec(this, xBn, !0, "f"), this._emit("abort", r));
            if (r instanceof js) return this._emit("error", r);
            if (r instanceof Error) {
              let n = new js(r.message);
              return ((n.cause = r), this._emit("error", n));
            }
            return this._emit("error", new js(String(r)));
          }),
          Ec(
            this,
            iUr,
            new Promise((r, n) => {
              (Ec(this, wBn, r, "f"), Ec(this, sUr, n, "f"));
            }),
            "f",
          ),
          Ec(
            this,
            aUr,
            new Promise((r, n) => {
              (Ec(this, TBn, r, "f"), Ec(this, lUr, n, "f"));
            }),
            "f",
          ),
          jo(this, iUr, "f").catch(() => {}),
          jo(this, aUr, "f").catch(() => {}),
          Ec(this, R9t, e, "f"),
          Ec(this, uUr, t?.logger ?? console, "f"));
      }
      get response() {
        return jo(this, HBn, "f");
      }
      get request_id() {
        return jo(this, kBn, "f");
      }
      async withResponse() {
        Ec(this, O0t, !0, "f");
        let e = await jo(this, iUr, "f");
        if (!e) throw Error("Could not resolve a `Response` object");
        return {
          data: this,
          response: e,
          request_id: e.headers.get("request-id"),
        };
      }
      static fromReadableStream(e) {
        let t = new dUr(null);
        return (t._run(() => t._fromReadableStream(e)), t);
      }
      static createMessage(e, t, r, { logger: n } = {}) {
        let o = new dUr(t, { logger: n });
        for (let i of t.messages) o._addMessageParam(i);
        return (
          Ec(o, R9t, { ...t, stream: !0 }, "f"),
          o._run(() =>
            o._createMessage(
              e,
              { ...t, stream: !0 },
              {
                ...r,
                headers: {
                  ...r?.headers,
                  "X-Stainless-Helper-Method": "stream",
                },
              },
            ),
          ),
          o
        );
      }
      _run(e) {
        e().then(
          () => {
            (this._emitFinal(), this._emit("end"));
          },
          jo(this, IBn, "f"),
        );
      }
      _addMessageParam(e) {
        this.messages.push(e);
      }
      _addMessage(e, t = !0) {
        if ((this.receivedMessages.push(e), t)) this._emit("message", e);
      }
      async _createMessage(e, t, r) {
        let n = r?.signal,
          o;
        if (n) {
          if (n.aborted) this.controller.abort();
          ((o = this.controller.abort.bind(this.controller)),
            n.addEventListener("abort", o));
        }
        try {
          jo(this, yye, "m", H0i).call(this);
          let { response: i, data: s } = await e
            .create(
              { ...t, stream: !0 },
              { ...r, signal: this.controller.signal },
            )
            .withResponse();
          this._connected(i);
          for await (let a of s) jo(this, yye, "m", k0i).call(this, a);
          if (s.controller.signal?.aborted) throw new Ty();
          jo(this, yye, "m", I0i).call(this);
        } finally {
          if (n && o) n.removeEventListener("abort", o);
        }
      }
      _connected(e) {
        if (this.ended) return;
        (Ec(this, HBn, e, "f"),
          Ec(this, kBn, e?.headers.get("request-id"), "f"),
          jo(this, wBn, "f").call(this, e),
          this._emit("connect"));
      }
      get ended() {
        return jo(this, cUr, "f");
      }
      get errored() {
        return jo(this, CBn, "f");
      }
      get aborted() {
        return jo(this, xBn, "f");
      }
      abort() {
        this.controller.abort();
      }
      on(e, t) {
        return (
          (jo(this, d5e, "f")[e] || (jo(this, d5e, "f")[e] = [])).push({
            listener: t,
          }),
          this
        );
      }
      off(e, t) {
        let r = jo(this, d5e, "f")[e];
        if (!r) return this;
        let n = r.findIndex((o) => o.listener === t);
        if (n >= 0) r.splice(n, 1);
        return this;
      }
      once(e, t) {
        return (
          (jo(this, d5e, "f")[e] || (jo(this, d5e, "f")[e] = [])).push({
            listener: t,
            once: !0,
          }),
          this
        );
      }
      emitted(e) {
        return new Promise((t, r) => {
          if ((Ec(this, O0t, !0, "f"), e !== "error")) this.once("error", r);
          this.once(e, t);
        });
      }
      async done() {
        (Ec(this, O0t, !0, "f"), await jo(this, aUr, "f"));
      }
      get currentMessage() {
        return jo(this, Btt, "f");
      }
      async finalMessage() {
        return (await this.done(), jo(this, yye, "m", x0i).call(this));
      }
      async finalText() {
        return (await this.done(), jo(this, yye, "m", Akl).call(this));
      }
      _emit(e, ...t) {
        if (jo(this, cUr, "f")) return;
        if (e === "end")
          (Ec(this, cUr, !0, "f"), jo(this, TBn, "f").call(this));
        let r = jo(this, d5e, "f")[e];
        if (r)
          ((jo(this, d5e, "f")[e] = r.filter((n) => !n.once)),
            r.forEach(({ listener: n }) => n(...t)));
        if (e === "abort") {
          let n = t[0];
          if (!jo(this, O0t, "f") && !r?.length) Promise.reject(n);
          (jo(this, sUr, "f").call(this, n),
            jo(this, lUr, "f").call(this, n),
            this._emit("end"));
          return;
        }
        if (e === "error") {
          let n = t[0];
          if (!jo(this, O0t, "f") && !r?.length) Promise.reject(n);
          (jo(this, sUr, "f").call(this, n),
            jo(this, lUr, "f").call(this, n),
            this._emit("end"));
        }
      }
      _emitFinal() {
        if (this.receivedMessages.at(-1))
          this._emit("finalMessage", jo(this, yye, "m", x0i).call(this));
      }
      async _fromReadableStream(e, t) {
        let r = t?.signal,
          n;
        if (r) {
          if (r.aborted) this.controller.abort();
          ((n = this.controller.abort.bind(this.controller)),
            r.addEventListener("abort", n));
        }
        try {
          (jo(this, yye, "m", H0i).call(this), this._connected(null));
          let o = EQ.fromReadableStream(e, this.controller);
          for await (let i of o) jo(this, yye, "m", k0i).call(this, i);
          if (o.controller.signal?.aborted) throw new Ty();
          jo(this, yye, "m", I0i).call(this);
        } finally {
          if (r && n) r.removeEventListener("abort", n);
        }
      }
      [((Btt = new WeakMap()),
      (R9t = new WeakMap()),
      (iUr = new WeakMap()),
      (wBn = new WeakMap()),
      (sUr = new WeakMap()),
      (aUr = new WeakMap()),
      (TBn = new WeakMap()),
      (lUr = new WeakMap()),
      (d5e = new WeakMap()),
      (cUr = new WeakMap()),
      (CBn = new WeakMap()),
      (xBn = new WeakMap()),
      (O0t = new WeakMap()),
      (HBn = new WeakMap()),
      (kBn = new WeakMap()),
      (uUr = new WeakMap()),
      (IBn = new WeakMap()),
      (yye = new WeakSet()),
      (x0i = function () {
        if (this.receivedMessages.length === 0)
          throw new js(
            "stream ended without producing a Message with role=assistant",
          );
        return this.receivedMessages.at(-1);
      }),
      (Akl = function () {
        if (this.receivedMessages.length === 0)
          throw new js(
            "stream ended without producing a Message with role=assistant",
          );
        let t = this.receivedMessages
          .at(-1)
          .content.filter((r) => r.type === "text")
          .map((r) => r.text);
        if (t.length === 0)
          throw new js(
            "stream ended without producing a content block with type=text",
          );
        return t.join(" ");
      }),
      (H0i = function () {
        if (this.ended) return;
        Ec(this, Btt, void 0, "f");
      }),
      (k0i = function (t) {
        if (this.ended) return;
        let r = jo(this, yye, "m", wkl).call(this, t);
        switch ((this._emit("streamEvent", t, r), t.type)) {
          case "content_block_delta": {
            let n = r.content.at(-1);
            switch (t.delta.type) {
              case "text_delta": {
                if (n.type === "text")
                  this._emit("text", t.delta.text, n.text || "");
                break;
              }
              case "citations_delta": {
                if (n.type === "text")
                  this._emit("citation", t.delta.citation, n.citations ?? []);
                break;
              }
              case "input_json_delta": {
                if (Ckl(n) && n.input)
                  this._emit("inputJson", t.delta.partial_json, n.input);
                break;
              }
              case "thinking_delta": {
                if (n.type === "thinking")
                  this._emit("thinking", t.delta.thinking, n.thinking);
                break;
              }
              case "signature_delta": {
                if (n.type === "thinking") this._emit("signature", n.signature);
                break;
              }
              case "compaction_delta": {
                if (n.type === "compaction" && n.content)
                  this._emit("compaction", n.content);
                break;
              }
              default:
                xkl(t.delta);
            }
            break;
          }
          case "message_stop": {
            (this._addMessageParam(r),
              this._addMessage(
                A0i(r, jo(this, R9t, "f"), { logger: jo(this, uUr, "f") }),
                !0,
              ));
            break;
          }
          case "content_block_stop": {
            this._emit("contentBlock", r.content.at(-1));
            break;
          }
          case "message_start": {
            Ec(this, Btt, r, "f");
            break;
          }
          case "content_block_start":
          case "message_delta":
            break;
        }
      }),
      (I0i = function () {
        if (this.ended) throw new js("stream has ended, this shouldn't happen");
        let t = jo(this, Btt, "f");
        if (!t) throw new js("request ended without sending any chunks");
        return (
          Ec(this, Btt, void 0, "f"),
          A0i(t, jo(this, R9t, "f"), { logger: jo(this, uUr, "f") })
        );
      }),
      (wkl = function (t) {
        let r = jo(this, Btt, "f");
        if (t.type === "message_start") {
          if (r)
            throw new js(
              `Unexpected event order, got ${t.type} before receiving "message_stop"`,
            );
          return t.message;
        }
        if (!r)
          throw new js(
            `Unexpected event order, got ${t.type} before "message_start"`,
          );
        switch (t.type) {
          case "message_stop":
            return r;
          case "message_delta":
            if (
              ((r.container = t.delta.container),
              (r.stop_reason = t.delta.stop_reason),
              (r.stop_sequence = t.delta.stop_sequence),
              (r.usage.output_tokens = t.usage.output_tokens),
              (r.context_management = t.context_management),
              t.usage.input_tokens != null)
            )
              r.usage.input_tokens = t.usage.input_tokens;
            if (t.usage.cache_creation_input_tokens != null)
              r.usage.cache_creation_input_tokens =
                t.usage.cache_creation_input_tokens;
            if (t.usage.cache_read_input_tokens != null)
              r.usage.cache_read_input_tokens = t.usage.cache_read_input_tokens;
            if (t.usage.server_tool_use != null)
              r.usage.server_tool_use = t.usage.server_tool_use;
            if (t.usage.iterations != null)
              r.usage.iterations = t.usage.iterations;
            return r;
          case "content_block_start":
            return (r.content.push(t.content_block), r);
          case "content_block_delta": {
            let n = r.content.at(t.index);
            switch (t.delta.type) {
              case "text_delta": {
                if (n?.type === "text")
                  r.content[t.index] = {
                    ...n,
                    text: (n.text || "") + t.delta.text,
                  };
                break;
              }
              case "citations_delta": {
                if (n?.type === "text")
                  r.content[t.index] = {
                    ...n,
                    citations: [...(n.citations ?? []), t.delta.citation],
                  };
                break;
              }
              case "input_json_delta": {
                if (n && Ckl(n)) {
                  let o = n[Tkl] || "";
                  o += t.delta.partial_json;
                  let i = { ...n };
                  if (
                    (Object.defineProperty(i, Tkl, {
                      value: o,
                      enumerable: !1,
                      writable: !0,
                    }),
                    o)
                  )
                    try {
                      i.input = vBn(o);
                    } catch (s) {
                      let a = new js(
                        `Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${s}. JSON: ${o}`,
                      );
                      jo(this, IBn, "f").call(this, a);
                    }
                  r.content[t.index] = i;
                }
                break;
              }
              case "thinking_delta": {
                if (n?.type === "thinking")
                  r.content[t.index] = {
                    ...n,
                    thinking: n.thinking + t.delta.thinking,
                  };
                break;
              }
              case "signature_delta": {
                if (n?.type === "thinking")
                  r.content[t.index] = { ...n, signature: t.delta.signature };
                break;
              }
              case "compaction_delta": {
                if (n?.type === "compaction")
                  r.content[t.index] = {
                    ...n,
                    content: (n.content || "") + t.delta.content,
                  };
                break;
              }
              default:
                xkl(t.delta);
            }
            return r;
          }
          case "content_block_stop":
            return r;
        }
      }),
      Symbol.asyncIterator)]() {
        let e = [],
          t = [],
          r = !1;
        return (
          this.on("streamEvent", (n) => {
            let o = t.shift();
            if (o) o.resolve(n);
            else e.push(n);
          }),
          this.on("end", () => {
            r = !0;
            for (let n of t) n.resolve(void 0);
            t.length = 0;
          }),
          this.on("abort", (n) => {
            r = !0;
            for (let o of t) o.reject(n);
            t.length = 0;
          }),
          this.on("error", (n) => {
            r = !0;
            for (let o of t) o.reject(n);
            t.length = 0;
          }),
          {
            next: async () => {
              if (!e.length) {
                if (r) return { value: void 0, done: !0 };
                return new Promise((o, i) =>
                  t.push({ resolve: o, reject: i }),
                ).then((o) =>
                  o ? { value: o, done: !1 } : { value: void 0, done: !0 },
                );
              }
              return { value: e.shift(), done: !1 };
            },
            return: async () => (this.abort(), { value: void 0, done: !0 }),
          }
        );
      }
      toReadableStream() {
        return new EQ(
          this[Symbol.asyncIterator].bind(this),
          this.controller,
        ).toReadableStream();
      }
    };
  });
