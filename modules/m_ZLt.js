// Module: ZLt (lines 335257-335306)
  var ZLt = S(() => {
    Bv();
    bl();
    Zr();
    vc();
    Qze = class Qze extends Error {
      tokenCount;
      maxTokens;
      constructor(e, t) {
        super(
          `File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`,
        );
        this.tokenCount = e;
        this.maxTokens = t;
        this.name = "MaxFileReadTokenExceededError";
      }
    };
    Kqu = new WeakMap();
    ((Zze = qr(() => {
      let e = Ke("tengu_amber_wren", {}),
        t =
          typeof e?.maxSizeBytes === "number" &&
          Number.isFinite(e.maxSizeBytes) &&
          e.maxSizeBytes > 0
            ? e.maxSizeBytes
            : ePi,
        n =
          x_y() ??
          (typeof e?.maxTokens === "number" &&
          Number.isFinite(e.maxTokens) &&
          e.maxTokens > 0
            ? e.maxTokens
            : C_y),
        o =
          typeof e?.includeMaxSizeInPrompt === "boolean"
            ? e.includeMaxSizeInPrompt
            : void 0,
        i =
          typeof e?.targetedRangeNudge === "boolean"
            ? e.targetedRangeNudge
            : void 0;
      return {
        maxSizeBytes: t,
        maxTokens: n,
        includeMaxSizeInPrompt: o,
        targetedRangeNudge: i,
      };
    })),
      (QLt = qr(() => Ke("tengu_tab_read_sep", !1))));
  });
