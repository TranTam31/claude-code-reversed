// Module: X7u (lines 356547-356599)
  var X7u = S(() => {
    MC();
    pt();
    KC();
    Mg();
    Ge();
    Ir();
    Xze();
    HSo();
    Sdt();
    hLt();
    Jh();
    Pr();
    Ei();
    _v();
    zt();
    Qut();
    CAs = new WeakMap();
    ((zTy = Se(() =>
      Re.union([
        Re.object({ data: Re.string(), mimeType: Re.string().optional() }),
        Re.object({
          source: Re.object({
            type: Re.literal("base64"),
            data: Re.string(),
            media_type: Re.string().optional(),
          }),
        }),
        Re.object({
          resource: Re.object({
            blob: Re.string(),
            mimeType: Re.string().optional(),
          }),
        }),
      ]),
    )),
      (KTy = Se(() =>
        Re.object({
          resource: Re.object({
            uri: Re.string().optional(),
            text: Re.string(),
          }),
        }),
      )),
      (YTy = Se(() =>
        Re.object({
          type: Re.literal("resource_link"),
          name: Re.string(),
          uri: Re.string(),
          description: Re.string().optional(),
        }),
      )));
  });
