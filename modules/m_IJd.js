// Module: IJd (lines 589526-589538)
  var IJd = S(() => {
    Vn();
    ((JD_ = Se(() => v.object({ entries: v.record(v.string(), v.string()) }))),
      (QD_ = Se(() =>
        v.object({
          userId: v.string(),
          version: v.number(),
          lastModified: v.string(),
          checksum: v.string(),
          content: JD_(),
        }),
      )));
  });
