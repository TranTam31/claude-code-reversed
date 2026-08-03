// Module: wqc (lines 156369-156381)
  var wqc = S(() => {
    W_e();
    /*! @azure/msal-common v15.13.1 2025-10-29 */ qZn = class qZn extends hg {
      constructor(e, t, r) {
        super(e.errorCode, e.errorMessage, e.subError);
        (Object.setPrototypeOf(this, qZn.prototype),
          (this.name = "NetworkError"),
          (this.error = e),
          (this.httpStatus = t),
          (this.responseHeaders = r));
      }
    };
  });
