// Module: IXd (lines 587815-587836)
  var IXd = S(() => {
    gd();
    pt();
    mV();
    Zr();
    N8e();
    Y5();
    Eo();
    jq();
    Ni();
    Pr();
    Npn();
    hD_ = {
      cache_miss: (e) => `${e}% of your usage hit a >100k-token cache miss`,
      long_context: (e) => `${e}% of your usage was at >150k context`,
      subagent_heavy: (e) =>
        `${e}% of your usage came from subagent-heavy sessions`,
      high_parallel: (e) =>
        `${e}% of your usage was while 4+ sessions ran in parallel`,
      cron: (e) => `${e}% of your usage came from sessions active for 8+ hours`,
    };
  });
