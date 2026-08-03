// Module: Gko (lines 477915-477935)
  var Gko = S(() => {
    Vn();
    Ge();
    st();
    zt();
    Dy();
    ((g$t = Se(() => v.looseObject({ name: v.string().optional() }))),
      ($9y = Se(() =>
        v.object({
          results: v.array(g$t()),
          opt_in_required: v.boolean().optional(),
          message: v.string().nullish(),
        }),
      )));
    y$t = class y$t extends Error {
      constructor(e) {
        super(e);
        this.name = "ConnectorRegistryUnavailableError";
      }
    };
  });
