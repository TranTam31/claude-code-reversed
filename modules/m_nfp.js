// Module: nfp (lines 641204-641215)
  var nfp = S(() => {
    qbr = {
      poll_interval_ms_not_at_capacity: 2000,
      poll_interval_ms_at_capacity: 600000,
      non_exclusive_heartbeat_interval_ms: 0,
      multisession_poll_interval_ms_not_at_capacity: 2000,
      multisession_poll_interval_ms_partial_capacity: 2000,
      multisession_poll_interval_ms_at_capacity: 600000,
      reclaim_older_than_ms: 5000,
      session_keepalive_interval_v2_ms: 120000,
    };
  });
