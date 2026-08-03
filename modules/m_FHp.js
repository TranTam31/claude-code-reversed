// Module: FHp (lines 684959-684998)
  var FHp = S(() => {
    Mg();
    ct();
    Ps();
    EM();
    jS();
    Ge();
    st();
    bQt();
    Ano();
    Cv();
    cF();
    ((lvr = x(ot(), 1)),
      (Bd = x(ue(), 1)),
      (Y5o = x(_e(), 1)),
      (Qnb = new Set([
        "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
        "UNABLE_TO_GET_ISSUER_CERT",
        "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
        "DEPTH_ZERO_SELF_SIGNED_CERT",
        "SELF_SIGNED_CERT_IN_CHAIN",
        "CERT_UNTRUSTED",
      ])));
    eob = Se(() =>
      Re.object({
        device_authorization_endpoint: Re.string().optional(),
        token_endpoint: Re.string().optional(),
      }),
    );
    tob = Se(() =>
      Re.object({
        device_code: Re.string(),
        user_code: Re.string(),
        verification_uri: Re.string(),
        verification_uri_complete: Re.string().optional(),
        expires_in: Re.number(),
        interval: Re.number().optional(),
      }),
    );
  });
