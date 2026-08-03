// Module: b6r (lines 156551-156597)
  var b6r = S(() => {
    jI();
    W_e();
    YZn();
    /*! @azure/msal-common v15.13.1 2025-10-29 */ ((Tqc = [
      yzi,
      _zi,
      bzi,
      Vit,
      zZn,
    ]),
      (Jhg = [
        "message_only",
        "additional_action",
        "basic_action",
        "user_password_expired",
        "consent_required",
        "bad_token",
      ]),
      (XZn = {
        [Git]: "No refresh token found in the cache. Please sign-in.",
        [y6r]:
          "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
        [_6r]: "Refresh token has expired.",
        [Vit]:
          "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.",
        [zZn]:
          "`canShowUI` flag in Edge was set to false. User interaction required on web page. Please invoke an interactive API to resolve.",
      }),
      (Szi = {
        noTokensFoundError: { code: Git, desc: XZn[Git] },
        native_account_unavailable: { code: y6r, desc: XZn[y6r] },
        bad_token: { code: Vit, desc: XZn[Vit] },
      }));
    Ide = class Ide extends hg {
      constructor(e, t, r, n, o, i, s, a) {
        super(e, t, r);
        (Object.setPrototypeOf(this, Ide.prototype),
          (this.timestamp = n || Ai.EMPTY_STRING),
          (this.traceId = o || Ai.EMPTY_STRING),
          (this.correlationId = i || Ai.EMPTY_STRING),
          (this.claims = s || Ai.EMPTY_STRING),
          (this.name = "InteractionRequiredAuthError"),
          (this.errorNo = a));
      }
    };
  });
