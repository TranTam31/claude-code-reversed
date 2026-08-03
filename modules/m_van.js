// Module: Van (lines 478292-478314)
  var Van = S(() => {
    Vn();
    Ge();
    st();
    zt();
    Dy();
    iZ();
    ((v1s = Se(() =>
      v.looseObject({
        id: v.string(),
        name: v.string(),
        description: v.string().nullish(),
        enabled: v.boolean().nullish(),
      }),
    )),
      (Q9y = Se(() => v.object({ results: v.array(v1s()) }))));
    DIe = class DIe extends Error {
      constructor(e) {
        super(e);
        this.name = "PluginSkillSearchUnavailableError";
      }
    };
  });
