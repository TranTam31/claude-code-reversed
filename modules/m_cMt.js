// Module: cMt (lines 281078-281094)
  var cMt = S(() => {
    Ge();
    Vn();
    Zr();
    vt();
    n_();
    Vfo();
    fps = Se(() =>
      v.object({
        method: v.literal("log_event"),
        params: v.object({
          eventName: v.string(),
          eventData: v.object({}).passthrough(),
        }),
      }),
    );
  });
