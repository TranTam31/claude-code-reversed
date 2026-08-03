// Module: oXu (lines 356997-357049)
  var oXu = S(() => {
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
    kAs = new WeakMap();
    ((a0y = Se(() =>
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
      (l0y = Se(() =>
        Re.object({
          resource: Re.object({
            uri: Re.string().optional(),
            text: Re.string(),
          }),
        }),
      )),
      (c0y = Se(() =>
        Re.object({
          type: Re.literal("resource_link"),
          name: Re.string(),
          uri: Re.string(),
          description: Re.string().optional(),
        }),
      )));
  });
