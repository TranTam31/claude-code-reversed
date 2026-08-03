// Module: lIe (lines 395238-395290)
  var lIe = S(() => {
    Mg();
    Zt();
    ((EOy = Se(() =>
      Re.object({
        state: Re.string().nullish(),
        detail: Re.string().nullish(),
        tempo: Re.string().nullish(),
        needs: Re.string().nullish(),
        output: Re.record(Re.string(), Re.unknown()).nullish(),
      }),
    )),
      (vOy = {
        working:
          "actively progressing on the task \u2014 narrating plans, calling tools, or writing code; no pending question for the user",
        blocked:
          'the last message ends on a direct question or explicit request for the user ("want me to\u2026?", "which do you prefer?", "approve this?", "needs input: \u2026") \u2014 nothing will happen until the user replies',
        done: 'the task the user asked for is fully delivered and there is no further work the agent plans to do \u2014 not just a progress update, not "almost done", not "let me know what you think"',
        failed:
          "the agent has given up or hit something unrecoverable \u2014 missing credential, broken build it cannot fix, wrong repo, task impossible as framed; distinct from blocked (user can unblock) and done (succeeded)",
      }),
      (AOy = {
        result:
          "one short sentence naming the finished deliverable \u2014 no sub-clauses or bullet summaries",
      }),
      (wOy = new Set(["done", "failed", "stopped"])));
    ((TOy = /(?:^|\n)\s*failed\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi),
      (COy =
        /(?:^|\n)\s*needs input\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi),
      (xOy = /(?:^|\n)\s*blocked\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi),
      (HOy = /\bI'?m blocked\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi));
    ((IOy = /\b(?:want|like) me to\b|\b(?:shall|should) I also\b/i),
      (ROy =
        /^(?:(?:Now|Next|Then|Alright|OK|Okay|Right|Good|First|Also),?\s+)?(?:Let me (?!know\b)|(?:I(?:'?ll| will) |I'?m going to |Going to )(?!need\b|require\b|wait\b|leave\b|hold\b|skip\b|stop\b)|Proceeding |Moving (?:on|to)\b|Continuing |Starting |Trying |Checking |Looking |Searching |Reading |Investigating |Running |Re-?running |Building |Rebuilding |Installing |Fetching |Applying |Fixing |Patching |Updating |Adding |Removing |Deleting |Importing |Refactoring |Rewriting |Writing |Grepping |Scanning |Wrapping |Switching |Testing |Verifying |Regenerating |Pushing |Pulling |Reviewing |Examining |Loading |Compiling |Parsing |Analyzing |Tracing |Exploring )/i),
      (DOy =
        /\b(?:once |when |after |until |as soon as )(?:you|it|the|that|this|they)\b|\bagain in\b|\bcheck back\b|\bin ~?\d+\s*(?:s(?:ec(?:ond)?s?)?|m(?:in(?:ute)?s?)?|h(?:ours?|rs?)?)\b|\bthen\.?\s*$|\bwhichever you\b|\bhold(?:ing)? for your\b|\b(?:to|and) wait for\b|\bgive it (?:more |some )?time\b|\bif (?:you(?:'d| want| prefer| need|'re)?|that(?:'s| helps| works)?|useful|needed|helpful|desired)\b|\b(?:isn'?t|not|won'?t) going to work\b/i),
      (POy =
        /^(?:(?:\*\*)?[1-9]\d* (?:agent|cron|task|fork|job|worker|PR|check)s? (?:in flight|remaining|active|still (?:running|working)|pending|running|launched)\b|(?:Continuous )?(?:[Ll]oop|[Cc]rons?|[Bb]abysit) (?:active|healthy|continuing|running|will keep|continues)\b|Waiting for (?:the )?(?:agent|cron|task|fork|worker|job|remaining|them)s?\b|Agents? will report back\b|Waiting\.?$)/),
      (MOy =
        /^(?:I will|I'll|Will) (?:check back|re-?check|poll|look again|retry|re-?run|try again) (?:(?:when|once|after|until) (?!your?\b)|in\b|again\b)/i),
      (LOy =
        /^I (?:can(?:'?t|not)|am unable to) (?:proceed|continue|make (?:any )?progress|complete|fix this)\b/i),
      (OOy =
        /^(?:Giving up|I(?:'m| am) giving up|The task is not actionable)\b/i),
      (NOy =
        /^(?:Pushed (?:to `|`[0-9a-f]{7,})|Committed as `?[0-9a-f]{7,}\b|Commit: `?[0-9a-f]{7,}\b|(?:Opened|Created) PR #?\d)/),
      ($Oy = /^Ready (?:for review|to (?:upload|merge|ship|land))\b/),
      (FOy = /^VERDICT: (?:PASS|FAIL)\b/),
      (UOy =
        /^Please (?:start|run|provide|grant|export|add|install|configure|give me|paste|point me|set (?:the |up |`?[A-Z][A-Z0-9_]+\b))/),
      (BOy =
        /^(?:Stopping here|I've stopped here|Parked (?:the|this) branch|Paused here)(?:\.|$| \u2014| -| until| pending| since| because)/i));
  });
