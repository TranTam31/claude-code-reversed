  var Fg = "ScheduleWakeup",
    _ir = "<<autonomous-loop>>",
    cct = "<<autonomous-loop-dynamic>>",
    Uey,
    NPu =
      "Schedule when to resume work in /loop dynamic mode (always pass the `prompt` arg unless stopping). Call before ending the turn to keep the loop alive; call with `stop: true` to end the loop immediately.";
  var ASe = S(() => {
    Uey = `Schedule when to resume work in /loop dynamic mode \u2014 the user invoked /loop without an interval, asking you to self-pace iterations of a specific task.

Do NOT schedule a short-interval wakeup to poll for background work you started \u2014 when harness-tracked work finishes, you are re-invoked automatically, so polling is wasted. Instead schedule a long fallback (1200s+) so the loop survives if the work hangs or never notifies. The exception is external work the harness cannot track (a CI run, a deploy, a remote queue) \u2014 there, pick a delay matched to how fast that state actually changes.

Pass the same /loop prompt back via \`prompt\` each turn so the next firing repeats the task. For an autonomous /loop (no user prompt), pass the literal sentinel \`${"<<autonomous-loop-dynamic>>"}\` as \`prompt\` instead \u2014 the runtime resolves it back to the autonomous-loop instructions at fire time. (There is a similar \`${"<<autonomous-loop>>"}\` sentinel for CronCreate-based autonomous loops; do not confuse the two \u2014 ${"ScheduleWakeup"} always uses the \`-dynamic\` variant.) To end the loop, call this tool with \`stop: true\` (omit every other field) \u2014 the loop ends immediately and no further wakeups fire.`;
  });
  var Q5 = "TaskList";
  var y1 = "TaskStop",
    $Pu = `
- Stops a running background task by its ID
- Takes a task_id parameter identifying the task to stop
- To stop an agent-team teammate, pass its agent ID ("name@team") or bare teammate name as task_id
- To stop a background agent spawned with a name, pass that name as task_id
- Returns a success or failure status
- Use this tool when you need to terminate a long-running task
`;
  var GPt = {};
  tt(GPt, {
    resolveLoopFileFire: () => VPu,
    resolveLoopDefaultFire: () => Key,
    resolveAutonomousLoopFire: () => jPu,
    resetAutonomousLoopDelivered: () => Yey,
    readLoopFile: () => GPu,
    logAutonomousLoopActivation: () => Pus,
    isLoopPersistentPreambleEnabled: () => Wpo,
    isLoopFileSentinel: () => Nus,
    isLoopDefaultSentinel: () => zey,
    isLoopDefaultPromptEnabled: () => Lus,
    isAutonomousLoopSentinel: () => Ous,
    getAutonomousLoopPreamble: () => Dus,
    LOOP_FILE_SENTINEL: () => WPu,
    LOOP_FILE_DYNAMIC_SENTINEL: () => nXr,
    AUTONOMOUS_LOOP_PREAMBLE: () => Bey,
  });
  function Wpo() {
    if (Z.CLAUDE_CODE_LOOP_PERSISTENT) return !0;
    return Ke("tengu_kairos_loop_persistent", !1);
  }
  function Dus() {
    return Wpo() ? DPu : xus;
  }
  function Pus() {
    O("tengu_kairos_loop_persistent_activated", { variant: Wpo() });
  }
  function rXr(e = !1) {
    if (!lct()) return "";
    let r =
      !e && Wpo()
        ? "newly blocked on a decision you won't make alone, you're ending the loop"
        : "newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";
    return `

Use ${_ee} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${r}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`;
  }
  function BPu() {
    return `# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Fg} from this tick.${rXr()}`;
  }
  function jey() {
    return `# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Fg} tool (not a recurring cron). To keep the loop alive, call ${Fg} again at the end of this turn with \`prompt\` set to the literal sentinel \`${cct}\` \u2014 otherwise the loop ends after this tick.${Mus}${rXr()}`;
  }
  function Lus() {
    return Ke("tengu_kairos_loop_prompt", !1);
  }
  function Ous(e) {
    return e === _ir || e === cct;
  }
  function jPu(e) {
    if (!Ous(e)) return null;
    if (!Lus()) return null;
    Pus();
    let t = e === cct ? jey() : BPu();
    if (tXr || bir !== null) return t;
    return (
      (tXr = !0),
      `${Dus()}

---

${t}`
    );
  }
  function Wey() {
    return `# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Fg} from this tick.${rXr(!0)}`;
  }
  function Gey() {
    return `# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Fg} tool (not a recurring cron). To keep the loop alive, call ${Fg} again at the end of this turn with \`prompt\` set to the literal sentinel \`${nXr}\` \u2014 otherwise the loop ends after this tick.${Mus}${rXr(!0)}`;
  }
  function Vey() {
    return `# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Fg} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Fg} again at the end of this turn with \`prompt\` set to the literal sentinel \`${nXr}\` \u2014 otherwise the loop ends after this tick.${Mus}${rXr()}`;
  }
  function qey(e) {
    if (e.length <= jpo) return e;
    let t = e.lastIndexOf(
      `
`,
      jpo,
    );
    return `${e.slice(0, t > 0 ? t : jpo)}

> WARNING: loop.md was truncated to ${jpo} bytes. Keep the task list concise.`;
  }
  function GPu() {
    let e = [Rus.join(Rl(), ".claude", "loop.md"), Rus.join(pn(), "loop.md")];
    for (let t of e) {
      let r;
      try {
        r = UPu.readFileSync(t, "utf-8");
      } catch (o) {
        if (ti(o) || Ut(o) === "EISDIR") continue;
        throw o;
      }
      let n = r.trim();
      if (n.length === 0) continue;
      return { path: t, content: qey(n) };
    }
    return null;
  }
  function Nus(e) {
    return e === WPu || e === nXr;
  }
  function VPu(e) {
    if (!Nus(e)) return null;
    if (!Lus()) return null;
    let t = e === nXr,
      r = GPu();
    if (r) {
      let o = t ? Gey() : Wey();
      if (bir === r.content) return o;
      return (
        (bir = r.content),
        `# /loop tick \u2014 tasks from ${r.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${r.content}

---

${o}`
      );
    }
    Pus();
    let n = t ? Vey() : BPu();
    if (bir === FPu || tXr) return n;
    return (
      (bir = FPu),
      (tXr = !0),
      `${Dus()}

---

${n}`
    );
  }
