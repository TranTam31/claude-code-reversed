// Module: LIo (lines 486740-486817)
  var LIo = S(() => {
    Vn();
    Zr();
    xj();
    ((PHd = {
      init_retry_max_attempts: 3,
      init_retry_base_delay_ms: 500,
      init_retry_jitter_fraction: 0.25,
      init_retry_max_delay_ms: 4000,
      http_timeout_ms: 1e4,
      uuid_dedup_buffer_size: 2000,
      heartbeat_interval_ms: 20000,
      heartbeat_jitter_fraction: 0.1,
      token_refresh_buffer_ms: 300000,
      teardown_archive_timeout_ms: 1500,
      connect_timeout_ms: 15000,
      oauth_retry_max_attempts: 3,
      oauth_retry_base_delay_ms: 2000,
      min_version: "0.0.0",
    }),
      (_7y = Se(() =>
        v.object({
          init_retry_max_attempts: v.number().int().min(1).max(10).default(3),
          init_retry_base_delay_ms: v.number().int().min(100).default(500),
          init_retry_jitter_fraction: v.number().min(0).max(1).default(0.25),
          init_retry_max_delay_ms: v.number().int().min(500).default(4000),
          http_timeout_ms: v.number().int().min(2000).default(1e4),
          uuid_dedup_buffer_size: v
            .number()
            .int()
            .min(100)
            .max(50000)
            .default(2000),
          heartbeat_interval_ms: v
            .number()
            .int()
            .min(5000)
            .max(30000)
            .default(20000),
          heartbeat_jitter_fraction: v.number().min(0).max(0.5).default(0.1),
          token_refresh_buffer_ms: v
            .number()
            .int()
            .min(30000)
            .max(1800000)
            .default(300000),
          teardown_archive_timeout_ms: v
            .number()
            .int()
            .min(500)
            .max(2000)
            .default(1500),
          connect_timeout_ms: v
            .number()
            .int()
            .min(5000)
            .max(60000)
            .default(15000),
          oauth_retry_max_attempts: v.number().int().min(0).max(6).default(3),
          oauth_retry_base_delay_ms: v
            .number()
            .int()
            .min(100)
            .max(1e4)
            .default(2000),
          min_version: v
            .string()
            .refine((e) => {
              try {
                return (Dxe(e, "0.0.0"), !0);
              } catch {
                return !1;
              }
            })
            .default("0.0.0"),
        }),
      )));
  });
