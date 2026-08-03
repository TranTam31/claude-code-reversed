// Module: $Wu (lines 309830-310080)
  var $Wu = S(() => {
    MWu();
    Kys = class Kys extends Event {
      constructor(e, t) {
        var r, n;
        (super(e),
          (this.code = (r = t == null ? void 0 : t.code) != null ? r : void 0),
          (this.message =
            (n = t == null ? void 0 : t.message) != null ? n : void 0));
      }
      [Symbol.for("nodejs.util.inspect.custom")](e, t, r) {
        return r(LWu(this), t);
      }
      [Symbol.for("Deno.customInspect")](e, t) {
        return e(LWu(this), t);
      }
    };
    kar = class kar extends EventTarget {
      constructor(e, t) {
        var r, n;
        (super(),
          Kj(this, Ske),
          (this.CONNECTING = 0),
          (this.OPEN = 1),
          (this.CLOSED = 2),
          Kj(this, yse),
          Kj(this, aLt),
          Kj(this, war),
          Kj(this, Lgo),
          Kj(this, Ogo),
          Kj(this, vQr),
          Kj(this, xar),
          Kj(this, AQr, null),
          Kj(this, Sut),
          Kj(this, Tar),
          Kj(this, Har, null),
          Kj(this, Car, null),
          Kj(this, SQr, null),
          Kj(this, Jys, async (o) => {
            var i;
            GS(this, Tar).reset();
            let { body: s, redirected: a, status: l, headers: c } = o;
            if (l === 204) {
              (Ize(this, Ske, EQr).call(
                this,
                "Server sent HTTP 204, not reconnecting",
                204,
              ),
                this.close());
              return;
            }
            if (
              (a ? iL(this, war, new URL(o.url)) : iL(this, war, void 0),
              l !== 200)
            ) {
              Ize(this, Ske, EQr).call(this, `Non-200 status code (${l})`, l);
              return;
            }
            if (
              !(c.get("content-type") || "").startsWith("text/event-stream")
            ) {
              Ize(this, Ske, EQr).call(
                this,
                'Invalid content type, expected "text/event-stream"',
                l,
              );
              return;
            }
            if (GS(this, yse) === this.CLOSED) return;
            iL(this, yse, this.OPEN);
            let u = new Event("open");
            if (
              ((i = GS(this, SQr)) == null || i.call(this, u),
              this.dispatchEvent(u),
              typeof s != "object" || !s || !("getReader" in s))
            ) {
              (Ize(this, Ske, EQr).call(
                this,
                "Invalid response body, expected a web ReadableStream",
                l,
              ),
                this.close());
              return;
            }
            let d = new TextDecoder(),
              p = s.getReader(),
              f = !0;
            do {
              let { done: m, value: g } = await p.read();
              (g && GS(this, Tar).feed(d.decode(g, { stream: !m })),
                m &&
                  ((f = !1),
                  GS(this, Tar).reset(),
                  Ize(this, Ske, t_s).call(this)));
            } while (f);
          }),
          Kj(this, Qys, (o) => {
            (iL(this, Sut, void 0),
              !(o.name === "AbortError" || o.type === "aborted") &&
                Ize(this, Ske, t_s).call(this, Yys(o)));
          }),
          Kj(this, Zys, (o) => {
            typeof o.id == "string" && iL(this, AQr, o.id);
            let i = new MessageEvent(o.event || "message", {
              data: o.data,
              origin: GS(this, war)
                ? GS(this, war).origin
                : GS(this, aLt).origin,
              lastEventId: o.id || "",
            });
            (GS(this, Car) &&
              (!o.event || o.event === "message") &&
              GS(this, Car).call(this, i),
              this.dispatchEvent(i));
          }),
          Kj(this, e_s, (o) => {
            iL(this, vQr, o);
          }),
          Kj(this, r_s, () => {
            (iL(this, xar, void 0),
              GS(this, yse) === this.CONNECTING &&
                Ize(this, Ske, Xys).call(this));
          }));
        try {
          if (e instanceof URL) iL(this, aLt, e);
          else if (typeof e == "string") iL(this, aLt, new URL(e, Ify()));
          else throw Error("Invalid URL");
        } catch {
          throw kfy("An invalid or illegal string was specified");
        }
        (iL(this, Tar, PWu({ onEvent: GS(this, Zys), onRetry: GS(this, e_s) })),
          iL(this, yse, this.CONNECTING),
          iL(this, vQr, 3000),
          iL(
            this,
            Ogo,
            (r = t == null ? void 0 : t.fetch) != null ? r : globalThis.fetch,
          ),
          iL(
            this,
            Lgo,
            (n = t == null ? void 0 : t.withCredentials) != null ? n : !1,
          ),
          Ize(this, Ske, Xys).call(this));
      }
      get readyState() {
        return GS(this, yse);
      }
      get url() {
        return GS(this, aLt).href;
      }
      get withCredentials() {
        return GS(this, Lgo);
      }
      get onerror() {
        return GS(this, Har);
      }
      set onerror(e) {
        iL(this, Har, e);
      }
      get onmessage() {
        return GS(this, Car);
      }
      set onmessage(e) {
        iL(this, Car, e);
      }
      get onopen() {
        return GS(this, SQr);
      }
      set onopen(e) {
        iL(this, SQr, e);
      }
      addEventListener(e, t, r) {
        let n = t;
        super.addEventListener(e, n, r);
      }
      removeEventListener(e, t, r) {
        let n = t;
        super.removeEventListener(e, n, r);
      }
      close() {
        (GS(this, xar) && clearTimeout(GS(this, xar)),
          GS(this, yse) !== this.CLOSED &&
            (GS(this, Sut) && GS(this, Sut).abort(),
            iL(this, yse, this.CLOSED),
            iL(this, Sut, void 0)));
      }
    };
    ((yse = new WeakMap()),
      (aLt = new WeakMap()),
      (war = new WeakMap()),
      (Lgo = new WeakMap()),
      (Ogo = new WeakMap()),
      (vQr = new WeakMap()),
      (xar = new WeakMap()),
      (AQr = new WeakMap()),
      (Sut = new WeakMap()),
      (Tar = new WeakMap()),
      (Har = new WeakMap()),
      (Car = new WeakMap()),
      (SQr = new WeakMap()),
      (Ske = new WeakSet()),
      (Xys = function () {
        (iL(this, yse, this.CONNECTING),
          iL(this, Sut, new AbortController()),
          GS(this, Ogo)(GS(this, aLt), Ize(this, Ske, OWu).call(this))
            .then(GS(this, Jys))
            .catch(GS(this, Qys)));
      }),
      (Jys = new WeakMap()),
      (Qys = new WeakMap()),
      (OWu = function () {
        var e;
        let t = {
          mode: "cors",
          redirect: "follow",
          headers: {
            Accept: "text/event-stream",
            ...(GS(this, AQr) ? { "Last-Event-ID": GS(this, AQr) } : void 0),
          },
          cache: "no-store",
          signal: (e = GS(this, Sut)) == null ? void 0 : e.signal,
        };
        return (
          "window" in globalThis &&
            (t.credentials = this.withCredentials ? "include" : "same-origin"),
          t
        );
      }),
      (Zys = new WeakMap()),
      (e_s = new WeakMap()),
      (EQr = function (e, t) {
        var r;
        GS(this, yse) !== this.CLOSED && iL(this, yse, this.CLOSED);
        let n = new Kys("error", { code: t, message: e });
        ((r = GS(this, Har)) == null || r.call(this, n), this.dispatchEvent(n));
      }),
      (t_s = function (e, t) {
        var r;
        if (GS(this, yse) === this.CLOSED) return;
        iL(this, yse, this.CONNECTING);
        let n = new Kys("error", { code: t, message: e });
        ((r = GS(this, Har)) == null || r.call(this, n),
          this.dispatchEvent(n),
          iL(this, xar, setTimeout(GS(this, r_s), GS(this, vQr))));
      }),
      (r_s = new WeakMap()),
      (kar.CONNECTING = 0),
      (kar.OPEN = 1),
      (kar.CLOSED = 2));
  });
