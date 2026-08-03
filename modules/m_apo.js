// Module: apo (lines 267270-267288)
  var apo = S(() => {
    vt();
    Ni();
    Zor = class Zor extends Error {
      constructor(e, t) {
        let r,
          n = e[0];
        if (e.length === 1 && n)
          r = `Image base64 size (${pl(n.size)}) exceeds API limit (${pl(t)}). Please resize the image before sending.`;
        else
          r =
            `${e.length} images exceed the API limit (${pl(t)}): ` +
            e.map((o) => `Image ${o.index}: ${pl(o.size)}`).join(", ") +
            ". Please resize these images before sending.";
        super(r);
        this.name = "ImageSizeError";
      }
    };
  });
