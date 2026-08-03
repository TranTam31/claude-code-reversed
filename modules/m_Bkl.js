// Module: Bkl (lines 21241-21738)
  var Bkl = S(() => {
    s5e();
    u5e();
    ABn();
    C0i();
    V0i();
    TUr = class TUr {
      constructor(e, t) {
        (_ye.add(this),
          (this.messages = []),
          (this.receivedMessages = []),
          Vtt.set(this, void 0),
          O9t.set(this, null),
          (this.controller = new AbortController()),
          bUr.set(this, void 0),
          DBn.set(this, () => {}),
          SUr.set(this, () => {}),
          EUr.set(this, void 0),
          PBn.set(this, () => {}),
          vUr.set(this, () => {}),
          f5e.set(this, {}),
          AUr.set(this, !1),
          MBn.set(this, !1),
          LBn.set(this, !1),
          F0t.set(this, !1),
          OBn.set(this, void 0),
          NBn.set(this, void 0),
          wUr.set(this, void 0),
          z0i.set(this, (r) => {
            if ((Ec(this, MBn, !0, "f"), a5e(r))) r = new Ty();
            if (r instanceof Ty)
              return (Ec(this, LBn, !0, "f"), this._emit("abort", r));
            if (r instanceof js) return this._emit("error", r);
            if (r instanceof Error) {
              let n = new js(r.message);
              return ((n.cause = r), this._emit("error", n));
            }
            return this._emit("error", new js(String(r)));
          }),
          Ec(
            this,
            bUr,
            new Promise((r, n) => {
              (Ec(this, DBn, r, "f"), Ec(this, SUr, n, "f"));
            }),
            "f",
          ),
          Ec(
            this,
            EUr,
            new Promise((r, n) => {
              (Ec(this, PBn, r, "f"), Ec(this, vUr, n, "f"));
            }),
            "f",
          ),
          jo(this, bUr, "f").catch(() => {}),
          jo(this, EUr, "f").catch(() => {}),
          Ec(this, O9t, e, "f"),
          Ec(this, wUr, t?.logger ?? console, "f"));
      }
      get response() {
        return jo(this, OBn, "f");
      }
      get request_id() {
        return jo(this, NBn, "f");
      }
      async withResponse() {
        Ec(this, F0t, !0, "f");
        let e = await jo(this, bUr, "f");
        if (!e) throw Error("Could not resolve a `Response` object");
        return {
          data: this,
          response: e,
          request_id: e.headers.get("request-id"),
        };
      }
      static fromReadableStream(e) {
        let t = new TUr(null);
        return (t._run(() => t._fromReadableStream(e)), t);
      }
      static createMessage(e, t, r, { logger: n } = {}) {
        let o = new TUr(t, { logger: n });
        for (let i of t.messages) o._addMessageParam(i);
        return (
          Ec(o, O9t, { ...t, stream: !0 }, "f"),
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
          jo(this, z0i, "f"),
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
          jo(this, _ye, "m", K0i).call(this);
          let { response: i, data: s } = await e
            .create(
              { ...t, stream: !0 },
              { ...r, signal: this.controller.signal },
            )
            .withResponse();
          this._connected(i);
          for await (let a of s) jo(this, _ye, "m", Y0i).call(this, a);
          if (s.controller.signal?.aborted) throw new Ty();
          jo(this, _ye, "m", X0i).call(this);
        } finally {
          if (n && o) n.removeEventListener("abort", o);
        }
      }
      _connected(e) {
        if (this.ended) return;
        (Ec(this, OBn, e, "f"),
          Ec(this, NBn, e?.headers.get("request-id"), "f"),
          jo(this, DBn, "f").call(this, e),
          this._emit("connect"));
      }
      get ended() {
        return jo(this, AUr, "f");
      }
      get errored() {
        return jo(this, MBn, "f");
      }
      get aborted() {
        return jo(this, LBn, "f");
      }
      abort() {
        this.controller.abort();
      }
      on(e, t) {
        return (
          (jo(this, f5e, "f")[e] || (jo(this, f5e, "f")[e] = [])).push({
            listener: t,
          }),
          this
        );
      }
      off(e, t) {
        let r = jo(this, f5e, "f")[e];
        if (!r) return this;
        let n = r.findIndex((o) => o.listener === t);
        if (n >= 0) r.splice(n, 1);
        return this;
      }
      once(e, t) {
        return (
          (jo(this, f5e, "f")[e] || (jo(this, f5e, "f")[e] = [])).push({
            listener: t,
            once: !0,
          }),
          this
        );
      }
      emitted(e) {
        return new Promise((t, r) => {
          if ((Ec(this, F0t, !0, "f"), e !== "error")) this.once("error", r);
          this.once(e, t);
        });
      }
      async done() {
        (Ec(this, F0t, !0, "f"), await jo(this, EUr, "f"));
      }
      get currentMessage() {
        return jo(this, Vtt, "f");
      }
      async finalMessage() {
        return (await this.done(), jo(this, _ye, "m", q0i).call(this));
      }
      async finalText() {
        return (await this.done(), jo(this, _ye, "m", Okl).call(this));
      }
      _emit(e, ...t) {
        if (jo(this, AUr, "f")) return;
        if (e === "end")
          (Ec(this, AUr, !0, "f"), jo(this, PBn, "f").call(this));
        let r = jo(this, f5e, "f")[e];
        if (r)
          ((jo(this, f5e, "f")[e] = r.filter((n) => !n.once)),
            r.forEach(({ listener: n }) => n(...t)));
        if (e === "abort") {
          let n = t[0];
          if (!jo(this, F0t, "f") && !r?.length) Promise.reject(n);
          (jo(this, SUr, "f").call(this, n),
            jo(this, vUr, "f").call(this, n),
            this._emit("end"));
          return;
        }
        if (e === "error") {
          let n = t[0];
          if (!jo(this, F0t, "f") && !r?.length) Promise.reject(n);
          (jo(this, SUr, "f").call(this, n),
            jo(this, vUr, "f").call(this, n),
            this._emit("end"));
        }
      }
      _emitFinal() {
        if (this.receivedMessages.at(-1))
          this._emit("finalMessage", jo(this, _ye, "m", q0i).call(this));
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
          (jo(this, _ye, "m", K0i).call(this), this._connected(null));
          let o = EQ.fromReadableStream(e, this.controller);
          for await (let i of o) jo(this, _ye, "m", Y0i).call(this, i);
          if (o.controller.signal?.aborted) throw new Ty();
          jo(this, _ye, "m", X0i).call(this);
        } finally {
          if (r && n) r.removeEventListener("abort", n);
        }
      }
      [((Vtt = new WeakMap()),
      (O9t = new WeakMap()),
      (bUr = new WeakMap()),
      (DBn = new WeakMap()),
      (SUr = new WeakMap()),
      (EUr = new WeakMap()),
      (PBn = new WeakMap()),
      (vUr = new WeakMap()),
      (f5e = new WeakMap()),
      (AUr = new WeakMap()),
      (MBn = new WeakMap()),
      (LBn = new WeakMap()),
      (F0t = new WeakMap()),
      (OBn = new WeakMap()),
      (NBn = new WeakMap()),
      (wUr = new WeakMap()),
      (z0i = new WeakMap()),
      (_ye = new WeakSet()),
      (q0i = function () {
        if (this.receivedMessages.length === 0)
          throw new js(
            "stream ended without producing a Message with role=assistant",
          );
        return this.receivedMessages.at(-1);
      }),
      (Okl = function () {
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
      (K0i = function () {
        if (this.ended) return;
        Ec(this, Vtt, void 0, "f");
      }),
      (Y0i = function (t) {
        if (this.ended) return;
        let r = jo(this, _ye, "m", Nkl).call(this, t);
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
                if (Fkl(n) && n.input)
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
              default:
                Ukl(t.delta);
            }
            break;
          }
          case "message_stop": {
            (this._addMessageParam(r),
              this._addMessage(
                W0i(r, jo(this, O9t, "f"), { logger: jo(this, wUr, "f") }),
                !0,
              ));
            break;
          }
          case "content_block_stop": {
            this._emit("contentBlock", r.content.at(-1));
            break;
          }
          case "message_start": {
            Ec(this, Vtt, r, "f");
            break;
          }
          case "content_block_start":
          case "message_delta":
            break;
        }
      }),
      (X0i = function () {
        if (this.ended) throw new js("stream has ended, this shouldn't happen");
        let t = jo(this, Vtt, "f");
        if (!t) throw new js("request ended without sending any chunks");
        return (
          Ec(this, Vtt, void 0, "f"),
          W0i(t, jo(this, O9t, "f"), { logger: jo(this, wUr, "f") })
        );
      }),
      (Nkl = function (t) {
        let r = jo(this, Vtt, "f");
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
              ((r.stop_reason = t.delta.stop_reason),
              (r.stop_sequence = t.delta.stop_sequence),
              (r.usage.output_tokens = t.usage.output_tokens),
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
            return r;
          case "content_block_start":
            return (r.content.push({ ...t.content_block }), r);
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
                if (n && Fkl(n)) {
                  let o = n[$kl] || "";
                  o += t.delta.partial_json;
                  let i = { ...n };
                  if (
                    (Object.defineProperty(i, $kl, {
                      value: o,
                      enumerable: !1,
                      writable: !0,
                    }),
                    o)
                  )
                    i.input = vBn(o);
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
              default:
                Ukl(t.delta);
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
