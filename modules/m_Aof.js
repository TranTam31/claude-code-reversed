// Module: Aof (lines 787782-787825)
  var Aof = S(() => {
    ct();
    Ps();
    YFo();
    Ir();
    sm();
    da();
    ((oPe = x(ot(), 1)), ($s = x(ue(), 1)), (jbt = x(_e(), 1)));
    ((vof = {
      cache_miss: {
        headline: (e) => `${e}% of your usage hit a >100k-token cache miss`,
        body: "Uncached input is expensive, and often happens when sending a message to a session that has gone idle. /compact before stepping away keeps the cold-start small.",
      },
      long_context: {
        headline: (e) => `${e}% of your usage was at >150k context`,
        body: "Longer sessions are more expensive even when cached. /compact mid-task, /clear when switching to new tasks.",
      },
      subagent_heavy: {
        headline: (e) =>
          `${e}% of your usage came from subagent-heavy sessions`,
        body: "Each subagent runs its own requests. Be deliberate about spawning them \u2014 and consider configuring a cheaper model for simpler subagents.",
      },
      high_parallel: {
        headline: (e) =>
          `${e}% of your usage was while 4+ sessions ran in parallel`,
        body: "All sessions share one limit. If you don't need them all at once, queueing uses it more evenly.",
      },
      cron: {
        headline: (e) =>
          `${e}% of your usage came from sessions active for 8+ hours`,
        body: "These are often background/loop sessions. Continuous usage can add up quickly so make sure it is intentional.",
      },
    }),
      (k7o = {
        totalCost: 0,
        requestCount: 0,
        sessionCount: 0,
        behaviors: [],
        agents: [],
        skills: [],
        plugins: [],
        mcpServers: [],
      }));
  });
