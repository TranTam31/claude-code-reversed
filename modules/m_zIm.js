// Module: ZIm (lines 1004788-1004847)
  var ZIm = S(() => {
    Kbl();
    bG();
    hyi();
    Qbl = class Qbl extends c8t {
      setProtectedHeader(e) {
        if (this._protectedHeader)
          throw TypeError("setProtectedHeader can only be called once");
        return ((this._protectedHeader = e), this);
      }
      setKeyManagementParameters(e) {
        if (this._keyManagementParameters)
          throw TypeError("setKeyManagementParameters can only be called once");
        return ((this._keyManagementParameters = e), this);
      }
      setContentEncryptionKey(e) {
        if (this._cek)
          throw TypeError("setContentEncryptionKey can only be called once");
        return ((this._cek = e), this);
      }
      setInitializationVector(e) {
        if (this._iv)
          throw TypeError("setInitializationVector can only be called once");
        return ((this._iv = e), this);
      }
      replicateIssuerAsHeader() {
        return ((this._replicateIssuerAsHeader = !0), this);
      }
      replicateSubjectAsHeader() {
        return ((this._replicateSubjectAsHeader = !0), this);
      }
      replicateAudienceAsHeader() {
        return ((this._replicateAudienceAsHeader = !0), this);
      }
      async encrypt(e, t) {
        let r = new H1n(TC.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader)
          this._protectedHeader = {
            ...this._protectedHeader,
            iss: this._payload.iss,
          };
        if (this._replicateSubjectAsHeader)
          this._protectedHeader = {
            ...this._protectedHeader,
            sub: this._payload.sub,
          };
        if (this._replicateAudienceAsHeader)
          this._protectedHeader = {
            ...this._protectedHeader,
            aud: this._payload.aud,
          };
        if ((r.setProtectedHeader(this._protectedHeader), this._iv))
          r.setInitializationVector(this._iv);
        if (this._cek) r.setContentEncryptionKey(this._cek);
        if (this._keyManagementParameters)
          r.setKeyManagementParameters(this._keyManagementParameters);
        return r.encrypt(e, t);
      }
    };
  });
