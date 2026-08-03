// Module: nzu (lines 337624-337658)
  var nzu = S(() => {
    Qpe();
    Vn();
    st();
    Ir();
    Iy();
    Zt();
    sbo = rzu();
    t9e = class t9e extends Error {
      shouldClearIdToken;
      constructor(e, t) {
        super(e);
        ((this.name = "XaaTokenExchangeError"), (this.shouldClearIdToken = t));
      }
    };
    bSy =
      /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
    ((SSy = Se(() =>
      v.object({
        access_token: v.string().optional(),
        issued_token_type: v.string().optional(),
        expires_in: v.coerce.number().optional(),
        scope: v.string().optional(),
      }),
    )),
      (ESy = Se(() =>
        v.object({
          access_token: v.string().min(1),
          token_type: v.string().default("Bearer"),
          expires_in: v.coerce.number().optional(),
          scope: v.string().optional(),
          refresh_token: v.string().optional(),
        }),
      )));
  });
