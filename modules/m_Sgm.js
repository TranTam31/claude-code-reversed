// Module: Sgm (lines 959449-959481)
  var Sgm = S(() => {
    pt();
    Ge();
    st();
    Ir();
    Vn();
    zt();
    uV();
    lL();
    Jh();
    ((a0e = x(ot(), 1)), (bgm = x(_e(), 1)));
    xZS = Se(() =>
      v.object({
        method: v.literal("notifications/message"),
        params: v.object({
          prompt: v.string(),
          image: v
            .object({
              type: v.literal("base64"),
              media_type: v.enum([
                "image/jpeg",
                "image/png",
                "image/gif",
                "image/webp",
              ]),
              data: v.string(),
            })
            .optional(),
          tabId: v.number().optional(),
        }),
      }),
    );
  });
