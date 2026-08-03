// Module: zgo (lines 310326-310394)
  var zgo = S(() => {
    Lw = class Lw extends Error {
      constructor(e, t) {
        super(e);
        ((this.errorUri = t), (this.name = this.constructor.name));
      }
      toResponseObject() {
        let e = { error: this.errorCode, error_description: this.message };
        if (this.errorUri) e.error_uri = this.errorUri;
        return e;
      }
      get errorCode() {
        return this.constructor.errorCode;
      }
    };
    Ngo = class Ngo extends Lw {};
    Ngo.errorCode = "invalid_request";
    Mar = class Mar extends Lw {};
    Mar.errorCode = "invalid_client";
    LFe = class LFe extends Lw {};
    LFe.errorCode = "invalid_grant";
    Lar = class Lar extends Lw {};
    Lar.errorCode = "unauthorized_client";
    $go = class $go extends Lw {};
    $go.errorCode = "unsupported_grant_type";
    Fgo = class Fgo extends Lw {};
    Fgo.errorCode = "invalid_scope";
    Ugo = class Ugo extends Lw {};
    Ugo.errorCode = "access_denied";
    cEe = class cEe extends Lw {};
    cEe.errorCode = "server_error";
    Eut = class Eut extends Lw {};
    Eut.errorCode = "temporarily_unavailable";
    Bgo = class Bgo extends Lw {};
    Bgo.errorCode = "unsupported_response_type";
    jgo = class jgo extends Lw {};
    jgo.errorCode = "unsupported_token_type";
    Wgo = class Wgo extends Lw {};
    Wgo.errorCode = "invalid_token";
    Ggo = class Ggo extends Lw {};
    Ggo.errorCode = "method_not_allowed";
    vut = class vut extends Lw {};
    vut.errorCode = "too_many_requests";
    Oar = class Oar extends Lw {};
    Oar.errorCode = "invalid_client_metadata";
    Vgo = class Vgo extends Lw {};
    Vgo.errorCode = "insufficient_scope";
    qgo = class qgo extends Lw {};
    qgo.errorCode = "invalid_target";
    VWu = {
      [Ngo.errorCode]: Ngo,
      [Mar.errorCode]: Mar,
      [LFe.errorCode]: LFe,
      [Lar.errorCode]: Lar,
      [$go.errorCode]: $go,
      [Fgo.errorCode]: Fgo,
      [Ugo.errorCode]: Ugo,
      [cEe.errorCode]: cEe,
      [Eut.errorCode]: Eut,
      [Bgo.errorCode]: Bgo,
      [jgo.errorCode]: jgo,
      [Wgo.errorCode]: Wgo,
      [Ggo.errorCode]: Ggo,
      [vut.errorCode]: vut,
      [Oar.errorCode]: Oar,
      [Vgo.errorCode]: Vgo,
      [qgo.errorCode]: qgo,
    };
  });
