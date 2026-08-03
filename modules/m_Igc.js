// Module: iGc (lines 147185-147269)
  var iGc = S(() => {
    uWc();
    f6i();
    ABn();
    u5e();
    hB();
    QWc();
    z5r();
    C6i();
    oGc = x(Drt(), 1);
    IQn = class IQn extends EQ {
      static fromSSEResponse(e, t, r) {
        let n = !1,
          o = r ? kQn(r) : console;
        async function* i() {
          if (!e.body)
            throw (
              t.abort(),
              new js("Attempted to iterate over a response with no body")
            );
          let a = ZWc(e.body),
            l = JWc(a, Lpg());
          for await (let c of l)
            if (c.chunk && c.chunk.bytes)
              yield { event: "chunk", data: x6i(c.chunk.bytes), raw: [] };
            else if (c.internalServerException)
              yield {
                event: "error",
                data: "InternalServerException",
                raw: [],
              };
            else if (c.modelStreamErrorException)
              yield {
                event: "error",
                data: "ModelStreamErrorException",
                raw: [],
              };
            else if (c.validationException)
              yield { event: "error", data: "ValidationException", raw: [] };
            else if (c.throttlingException)
              yield { event: "error", data: "ThrottlingException", raw: [] };
        }
        async function* s() {
          if (n)
            throw Error(
              "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
            );
          n = !0;
          let a = !1;
          try {
            for await (let l of i()) {
              if (l.event === "chunk") {
                let c;
                try {
                  c = JSON.parse(l.data);
                } catch (u) {
                  throw (
                    o.error("Could not parse message into JSON:", l.data),
                    o.error("From chunk:", l.raw),
                    u
                  );
                }
                if (c && typeof c === "object" && c.type === "error")
                  throw new hi(void 0, c, void 0, e.headers, c.error?.type);
                yield c;
              }
              if (l.event === "error") {
                let c = l.data,
                  u = eGc(c),
                  d = u ? void 0 : c;
                throw hi.generate(void 0, u, d, e.headers);
              }
            }
            a = !0;
          } catch (l) {
            if (Opg(l)) return;
            throw l;
          } finally {
            if (!a) t.abort();
          }
        }
        return new IQn(s, t);
      }
    };
  });
