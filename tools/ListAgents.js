  var o7 = "ListAgents",
    Fdw;
  var V8e = S(() => {
    f4();
    Fdw = `Lists agents you can ${ff} to \u2014 in-process subagents you spawned, other local Claude sessions on this machine, your Claude sessions running in the cloud (when this session has cloud access), and (when Remote Control is connected) remote bridge sessions, which you can only reply to. Names are the address: send with \`${ff}({to: "<name>", message: "..."})\`, copying the name exactly as a row prints it. Append a row's \` [ref]\` only when the bare name is not enough \u2014 two rows share it, or an error asks you to disambiguate.`;
  });
  var W0 = "CronCreate",
    $U = "CronDelete",
    pct = "CronList";
  var dMu = {};
  tt(dMu, {
    isKairosCronEnabled: () => i7,
    isDurableCronEnabled: () => sFe,
    buildDurableParamDescription: () => Gus,
    buildCronListPrompt: () => Yus,
    buildCronDeletePrompt: () => zus,
    buildCronCreatePrompt: () => Vus,
    buildCronCreateDescription: () => Wus,
    DEFAULT_MAX_AGE_DAYS: () => zHe,
    CRON_LIST_TOOL_NAME: () => pct,
    CRON_LIST_DESCRIPTION: () => Kus,
    CRON_DELETE_TOOL_NAME: () => $U,
    CRON_DELETE_DESCRIPTION: () => qus,
    CRON_CREATE_TOOL_NAME: () => W0,
  });
  function i7() {
    return (
      !Yt(process.env.CLAUDE_CODE_DISABLE_CRON) &&
      pbe("tengu_kairos_cron", !0, uMu)
    );
  }
  function sFe() {
    return pbe("tengu_kairos_cron_durable", !0, uMu);
  }
  function Wus(e) {
    return e
      ? "Schedule a prompt to run at a future time \u2014 either recurring on a cron schedule, or once at a specific time. Pass durable: true to persist to .claude/scheduled_tasks.json; otherwise session-only."
      : "Schedule a prompt to run at a future time within this Claude session \u2014 either recurring on a cron schedule, or once at a specific time.";
  }
  function Gus(e) {
    return e
      ? "true = persist to .claude/scheduled_tasks.json and survive restarts. false (default) = in-memory only, dies when this Claude session ends. Use true only when the user asks the task to survive across sessions."
      : "Has no effect \u2014 durable persistence is not available. All jobs are session-only (in-memory, gone when this Claude session ends).";
  }
  function Vus(e) {
    let t = e
        ? `## Durability

By default (durable: false) the job lives only in this Claude session \u2014 nothing is written to disk, and the job is gone when Claude exits. Pass durable: true to write to .claude/scheduled_tasks.json so the job survives restarts. Only use durable: true when the user explicitly asks for the task to persist ("keep doing this every day", "set this up permanently"). Most "remind me in 5 minutes" / "check back in an hour" requests should stay session-only.`
        : `## Session-only

Jobs live only in this Claude session \u2014 nothing is written to disk, and the job is gone when Claude exits.`,
      r = e
        ? "Durable jobs persist to .claude/scheduled_tasks.json and survive session restarts \u2014 on next launch they resume automatically. One-shot durable tasks that were missed while the REPL was closed are surfaced for catch-up. Session-only jobs die with the process. "
        : "";
    return `Schedule a prompt to be enqueued at a future time. Use for both recurring schedules and one-shot reminders.

Uses standard 5-field cron in the user's local timezone: minute hour day-of-month month day-of-week. "0 9 * * *" means 9am local \u2014 no timezone conversion needed.

## One-shot tasks (recurring: false)

For "remind me at X" or "at <time>, do Y" requests \u2014 fire once then auto-delete.
Pin minute/hour/day-of-month/month to specific values:
  "remind me at 2:30pm today to check the deploy" \u2192 cron: "30 14 <today_dom> <today_month> *", recurring: false
  "tomorrow morning, run the smoke test" \u2192 cron: "57 8 <tomorrow_dom> <tomorrow_month> *", recurring: false

## Recurring jobs (recurring: true, the default)

For "every N minutes" / "every hour" / "weekdays at 9am" requests:
  "*/5 * * * *" (every 5 min), "0 * * * *" (hourly), "0 9 * * 1-5" (weekdays at 9am local)

## Avoid the :00 and :30 minute marks when the task allows it

Every user who asks for "9am" gets \`0 9\`, and every user who asks for "hourly" gets \`0 *\` \u2014 which means requests from across the planet land on the API at the same instant. When the user's request is approximate, pick a minute that is NOT 0 or 30:
  "every morning around 9" \u2192 "57 8 * * *" or "3 9 * * *" (not "0 9 * * *")
  "hourly" \u2192 "7 * * * *" (not "0 * * * *")
  "in an hour or so, remind me to..." \u2192 pick whatever minute you land on, don't round

Only use minute 0 or 30 when the user names that exact time and clearly means it ("at 9:00 sharp", "at half past", coordinating with a meeting). When in doubt, nudge a few minutes early or late \u2014 the user will not notice, and the fleet will.

${t}
${
  rse()
    ? `
## Not for live watching

${W0} re-runs a prompt at fixed wall-clock intervals. To watch a log file, process, or command output and be notified the moment something changes, use the ${cA} tool instead \u2014 ${cA} streams events as they happen; cron polls on a schedule.
`
    : ""
}
## Runtime behavior

Jobs only fire while the REPL is idle (not mid-query). ${r}The scheduler adds a small deterministic jitter on top of whatever you pick: recurring tasks fire up to 10% of their period late (max 15 min); one-shot tasks landing on :00 or :30 fire up to 90 s early. Picking an off-minute is still the bigger lever.

Recurring tasks auto-expire after ${zHe} days \u2014 they fire one final time, then are deleted. This bounds session lifetime. Tell the user about the ${zHe}-day limit when scheduling recurring jobs.

Returns a job ID you can pass to ${$U}.`;
  }
  function zus(e) {
    return e
      ? `Cancel a cron job previously scheduled with ${W0}. Removes it from .claude/scheduled_tasks.json (durable jobs) or the in-memory session store (session-only jobs).`
      : `Cancel a cron job previously scheduled with ${W0}. Removes it from the in-memory session store.`;
  }
  function Yus(e) {
    return e
      ? `List all cron jobs scheduled via ${W0}, both durable (.claude/scheduled_tasks.json) and session-only.`
      : `List all cron jobs scheduled via ${W0} in this session.`;
  }
  var uMu = 300000,
    zHe,
    qus = "Cancel a scheduled cron job by ID",
    Kus = "List scheduled cron jobs";
  var Rpe = S(() => {
    Zr();
    kpe();
    Qr();
    vSe();
    zHe = Hpe.recurringMaxAgeMs / 86400000;
  });
  function Xus() {
    return [
      "Wait for MCP servers that are still connecting and whose tools are not",
      "yet in your tool list. Pass `servers` to wait for specific ones, or omit",
      "it to wait for all pending servers.",
      "",
      "If the user's request needs tools from a still-connecting server, call this",
      "tool to wait for it. Once it connects, its tools will be added to your tool",
      "list and you can use them directly. Returns ready=true when servers are",
      "ready, ready=false if they failed to connect, need authentication, or are",
      "disabled.",
      "",
      "You do not need to ask the user for confirmation to use this tool.",
    ].join(`
`);
  }
  var fct = "WaitForMcpServers";
  var Dpe = "RefreshMcpTools",
    pMu = `Re-queries the tool list of connected MCP servers and updates the set of available tools, reporting which tools were added or removed.

MCP servers normally push a notification when their tool list changes, but that notification can be missed (connection hiccups, a device announcing while the notification stream was down). Use this tool to re-sync when the available tools may be out of date. Good triggers:
- The user says a device or app is now open or connected (e.g. "my desktop IS open", "I just started the app") after a tool call failed with device-not-connected or the expected tools are missing.
- A tool you expect an MCP server to provide is absent from your available tools.
- A server's tools look stale after its connection recovered.

The refreshed tools are available immediately \u2014 you can call them on your next step.

Usage:
- Refresh all connected servers: \`RefreshMcpTools\` with no arguments
- Refresh one server: \`RefreshMcpTools({ server: "myserver" })\`
`,
    fMu = `Re-query the tool lists of connected MCP servers and update the available tools.

