// Module: yUd (lines 534255-534264)
  var yUd = S(() => {
    Vn();
    gUd = Se(() =>
      v.object({
        uuid: v.string(),
        checksum: v.string(),
        settings: v.record(v.string(), v.unknown()),
      }),
    );
  });
