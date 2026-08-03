// Module: N8e (lines 267891-267915)
  var N8e = S(() => {
    Vn();
    Eo();
    Ge();
    qA();
    PM();
    Z$e();
    zt();
    Zr();
    Dy();
    EZg = Se(() =>
      v.array(
        v.object({
          bar: v.string(),
          text: v.string(),
          variant: v
            .custom(
              (e) => typeof e === "string" && Object.hasOwn(r7("dark"), e),
            )
            .optional()
            .catch(void 0),
        }),
      ),
    );
  });
