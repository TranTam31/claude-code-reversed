// Module: CYu (lines 349776-349810)
  var CYu = S(() => {
    Qpe();
    Vn();
    st();
    Ir();
    Iy();
    Zt();
    lSo = TYu();
    f9e = class f9e extends Error {
      shouldClearIdToken;
      constructor(e, t) {
        super(e);
        ((this.name = "XaaTokenExchangeError"), (this.shouldClearIdToken = t));
      }
    };
    ywy =
      /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
    ((_wy = Se(() =>
      v.object({
        access_token: v.string().optional(),
        issued_token_type: v.string().optional(),
        expires_in: v.coerce.number().optional(),
        scope: v.string().optional(),
      }),
    )),
      (bwy = Se(() =>
        v.object({
          access_token: v.string().min(1),
          token_type: v.string().default("Bearer"),
          expires_in: v.coerce.number().optional(),
          scope: v.string().optional(),
          refresh_token: v.string().optional(),
        }),
      )));
  });
