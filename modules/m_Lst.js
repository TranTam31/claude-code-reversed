// Module: Lst (lines 188285-188301)
  var Lst = S(() => {
    Vn();
    Ge();
    zt();
    Dy();
    ltr();
    LY();
    P8r();
    oqe();
    fRg = Se(() =>
      v.object({
        access_token: v.string().min(1),
        expires_in_seconds: v.number().positive(),
        stores: v.unknown().optional(),
      }),
    );
  });
