// Module: Uue (lines 29582-29643)
  var Uue = S(() => {
    II();
    IK = class IK extends Error {
      static from(e, t, r, n, o, i) {
        let s = new IK(e.message, t || e.code, r, n, o);
        if (
          ((s.cause = e),
          (s.name = e.name),
          e.status != null && s.status == null)
        )
          s.status = e.status;
        return (i && Object.assign(s, i), s);
      }
      constructor(e, t, r, n, o) {
        super(e);
        if (
          (Object.defineProperty(this, "message", {
            value: e,
            enumerable: !0,
            writable: !0,
            configurable: !0,
          }),
          (this.name = "AxiosError"),
          (this.isAxiosError = !0),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          o)
        )
          ((this.response = o), (this.status = o.status));
      }
      toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: Gn.toJSONObject(this.config),
          code: this.code,
          status: this.status,
        };
      }
    };
    IK.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
    IK.ERR_BAD_OPTION = "ERR_BAD_OPTION";
    IK.ECONNABORTED = "ECONNABORTED";
    IK.ETIMEDOUT = "ETIMEDOUT";
    IK.ERR_NETWORK = "ERR_NETWORK";
    IK.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
    IK.ERR_DEPRECATED = "ERR_DEPRECATED";
    IK.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
    IK.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
    IK.ERR_CANCELED = "ERR_CANCELED";
    IK.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
    IK.ERR_INVALID_URL = "ERR_INVALID_URL";
    IK.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
    Pl = IK;
  });
