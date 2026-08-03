// Module: C6l (lines 76051-76061)
  var C6l = S(() => {
    T6l = x(Kv(), 1);
    eVn = class eVn extends T6l.CredentialsProviderError {
      tryNextLink;
      name = "InstanceMetadataV1FallbackError";
      constructor(e, t = !0) {
        super(e, t);
        ((this.tryNextLink = t), Object.setPrototypeOf(this, eVn.prototype));
      }
    };
  });
