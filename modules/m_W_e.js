// Module: W_e (lines 152378-152404)
  var W_e = S(() => {
    jI();
    Jqi();
    /*! @azure/msal-common v15.13.1 2025-10-29 */ ((_Zn = {
      [SVr]: "Unexpected error in authentication.",
      [EVr]:
        "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details.",
    }),
      (Qqi = {
        unexpectedError: { code: SVr, desc: _Zn[SVr] },
        postRequestFailed: { code: EVr, desc: _Zn[EVr] },
      }));
    hg = class hg extends Error {
      constructor(e, t, r) {
        let n = t ? `${e}: ${t}` : e;
        super(n);
        (Object.setPrototypeOf(this, hg.prototype),
          (this.errorCode = e || Ai.EMPTY_STRING),
          (this.errorMessage = t || Ai.EMPTY_STRING),
          (this.subError = r || Ai.EMPTY_STRING),
          (this.name = "AuthError"));
      }
      setCorrelationId(e) {
        this.correlationId = e;
      }
    };
  });
