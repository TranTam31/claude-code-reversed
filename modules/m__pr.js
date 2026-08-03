// Module: $pr (lines 404980-405026)
  var $pr = S(() => {
    Mg();
    Eo();
    jq();
    hn();
    Ge();
    zt();
    Zr();
    Dy();
    XNy = Se(() =>
      Re.object({
        feature: Re.string().min(1),
        command: Re.string()
          .optional()
          .transform((e) => (e === "" ? void 0 : e)),
        startsAt: Fdd(),
        endsAt: Fdd(),
        hideCommandChip: Re.boolean().optional(),
        creditless: Re.boolean().optional(),
        titleLabel: e0o(),
        commandBlurb: e0o(),
        tipBlurb: e0o(),
        isTopPriorityAnnouncement: Re.boolean().optional(),
        announcementLines: Re.array(
          Re.object({
            text: Re.string(),
            style: Re.enum(["bold", "dim"]).optional(),
          }),
        )
          .optional()
          .transform((e) => {
            let t = e?.filter((r) => r.text !== "");
            return t?.length ? t : void 0;
          })
          .catch(void 0),
        tips: Re.array(Re.string())
          .optional()
          .transform((e) => {
            let t = e?.filter(Boolean);
            return t?.length ? t : void 0;
          })
          .catch(void 0),
        redeemBy: e0o(),
      }),
    );
    ZNy = Se(() => Re.object({ error: Re.object({ message: Re.string() }) }));
  });
