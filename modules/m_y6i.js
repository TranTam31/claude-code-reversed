// Module: y6i (lines 146737-146757)
  var y6i = S(() => {
    wWc();
    i6e = class i6e extends Uint8Array {
      static fromString(e, t = "utf-8") {
        switch (typeof e) {
          case "string":
            return AWc(e, t);
          default:
            throw Error(
              `Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`,
            );
        }
      }
      static mutate(e) {
        return (Object.setPrototypeOf(e, i6e.prototype), e);
      }
      transformToString(e = "utf-8") {
        return vWc(this, e);
      }
    };
  });
