// Module: mYs (lines 641222-641281)
  var mYs = S(() => {
    Vn();
    Zr();
    nfp();
    ((ofp = { message: "must be 0 (disabled) or \u2265100ms" }),
      (a5_ = Se(() =>
        v
          .object({
            poll_interval_ms_not_at_capacity: v.number().int().min(100),
            poll_interval_ms_at_capacity: v
              .number()
              .int()
              .refine((e) => e === 0 || e >= 100, ofp),
            non_exclusive_heartbeat_interval_ms: v
              .number()
              .int()
              .min(0)
              .default(0),
            multisession_poll_interval_ms_not_at_capacity: v
              .number()
              .int()
              .min(100)
              .default(qbr.multisession_poll_interval_ms_not_at_capacity),
            multisession_poll_interval_ms_partial_capacity: v
              .number()
              .int()
              .min(100)
              .default(qbr.multisession_poll_interval_ms_partial_capacity),
            multisession_poll_interval_ms_at_capacity: v
              .number()
              .int()
              .refine((e) => e === 0 || e >= 100, ofp)
              .default(qbr.multisession_poll_interval_ms_at_capacity),
            reclaim_older_than_ms: v.number().int().min(1).default(5000),
            session_keepalive_interval_v2_ms: v
              .number()
              .int()
              .min(0)
              .default(120000),
          })
          .refine(
            (e) =>
              e.non_exclusive_heartbeat_interval_ms > 0 ||
              e.poll_interval_ms_at_capacity > 0,
            {
              message:
                "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or poll_interval_ms_at_capacity > 0",
            },
          )
          .refine(
            (e) =>
              e.non_exclusive_heartbeat_interval_ms > 0 ||
              e.multisession_poll_interval_ms_at_capacity > 0,
            {
              message:
                "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or multisession_poll_interval_ms_at_capacity > 0",
            },
          ),
      )));
  });
