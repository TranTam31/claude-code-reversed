// Module: QIm (lines 1004760-1004786)
  var QIm = S(() => {
    Ybl();
    nb();
    bG();
    hyi();
    Jbl = class Jbl extends c8t {
      setProtectedHeader(e) {
        return ((this._protectedHeader = e), this);
      }
      async sign(e, t) {
        var r;
        let n = new k1n(TC.encode(JSON.stringify(this._payload)));
        if (
          (n.setProtectedHeader(this._protectedHeader),
          Array.isArray(
            (r = this._protectedHeader) === null || r === void 0
              ? void 0
              : r.crit,
          ) &&
            this._protectedHeader.crit.includes("b64") &&
            this._protectedHeader.b64 === !1)
        )
          throw new F3("JWTs MUST NOT use unencoded payload");
        return n.sign(e, t);
      }
    };
  });
