// Module: ASe (lines 271886-271892)
  var ASe = S(() => {
    Uey = `Schedule when to resume work in /loop dynamic mode \u2014 the user invoked /loop without an interval, asking you to self-pace iterations of a specific task.

Do NOT schedule a short-interval wakeup to poll for background work you started \u2014 when harness-tracked work finishes, you are re-invoked automatically, so polling is wasted. Instead schedule a long fallback (1200s+) so the loop survives if the work hangs or never notifies. The exception is external work the harness cannot track (a CI run, a deploy, a remote queue) \u2014 there, pick a delay matched to how fast that state actually changes.

Pass the same /loop prompt back via \`prompt\` each turn so the next firing repeats the task. For an autonomous /loop (no user prompt), pass the literal sentinel \`${"<<autonomous-loop-dynamic>>"}\` as \`prompt\` instead \u2014 the runtime resolves it back to the autonomous-loop instructions at fire time. (There is a similar \`${"<<autonomous-loop>>"}\` sentinel for CronCreate-based autonomous loops; do not confuse the two \u2014 ${"ScheduleWakeup"} always uses the \`-dynamic\` variant.) To end the loop, call this tool with \`stop: true\` (omit every other field) \u2014 the loop ends immediately and no further wakeups fire.`;
  });
