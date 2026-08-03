// Module: vo (lines 628261-628646)
  var vo = S(() => {
    vJi();
    fQ();
    ttr();
    vt();
    Yd();
    xf();
    Wee();
    edr();
    Ocs();
    DS();
    Zr();
    OU();
    cIs();
    kyo();
    zTo();
    vTo();
    HUs();
    ax();
    ix();
    MBo();
    s$();
    $Y();
    n_();
    ja();
    ube();
    Ni();
    Nj();
    P7();
    Zt();
    $ze();
    dbs();
    Bj();
    K7();
    gdr();
    DOt();
    Rh();
    k9e();
    zfr();
    pt();
    Lm();
    EOt();
    Ss();
    Xke();
    aH();
    f4();
    mpr();
    Ge();
    pCt();
    Ni();
    em();
    Ir();
    Xx();
    Lap();
    Pr();
    F$();
    Gft();
    Bap();
    _z();
    eIe();
    gpe();
    R5();
    R5();
    ((Jz = require("crypto")), (x2t = require("path")));
    ((Ozs =
      elp +
      "If you believe this capability is essential to complete the user's request, STOP and explain to the user what you were trying to do and why you need this permission. Let the user decide how to proceed."),
      (Y2_ =
        elp +
        "First try an alternative that no rule blocks \u2014 a feature branch instead of the default branch, synthetic or sanitized data instead of real data, a narrower scope. " +
        "Otherwise hold this ask and batch it with your other outstanding asks for when all your other parallel work is done or paused on subagents mid-flight \u2014 never end your turn or declare the task done with asks still held. " +
        'Whenever you raise a consent ask \u2014 a single item or a batch \u2014 make each item a single concise sentence naming its action and, in **bold**, the item that makes it need consent; for a batch, ask the user to reply with which items they approve (or "all of them"). ' +
        'If you believe this block is wrong, ask that directly too ("auto mode blocked X because Y \u2014 is that wrong?").'));
    bmt = new Set([w8, qI, FY, Opt, pie]);
    $zs = `<${PC}>Set model to `;
    slp = new WeakMap();
    ((t4e = {
      siblingToolUseIDs: new Map(),
      progressMessagesByToolUseID: new Map(),
      inProgressHookCounts: new Map(),
      resolvedHookCounts: new Map(),
      toolResultByToolUseID: new Map(),
      firstTextBlockUuidByMessageID: new Map(),
      toolUseByToolUseID: new Map(),
      normalizedMessageCount: 0,
      resolvedToolUseIDs: new Set(),
      erroredToolUseIDs: new Set(),
    }),
      (umn = Object.freeze(new Set())));
    uB_ = new Set(["image", "document"]);
    _B_ =
      /<(commit_analysis|context|function_analysis|pr_analysis)>.*?<\/\1>\n?/gs;
    ((vB_ = new Set(["claude-in-chrome"])),
      (AB_ = new Set([
        "You used a single tool call this turn. Prefer browser_batch to execute multiple actions in one call \u2014 it is significantly faster. Batch your next sequence of clicks, types, navigations, and screenshots together.",
      ])));
    Qap = {
      directory: (e) =>
        dm([
          smn(bu.name, {
            command: `ls ${Fd([e.path])}`,
            description: `Lists files in ${e.path}`,
          }),
          imn(bu, { stdout: e.content, stderr: "", interrupted: !1 }),
        ]),
      edited_text_file: (e) =>
        dm([
          zr({
            content:
              e.snippet === ""
                ? `Note: ${e.filename} was modified, either by the user or by a linter. This change was intentional, so make sure to take it into account as you proceed (ie. don't revert it unless the user asks you to). Don't tell the user this, since they are already aware. The diff was omitted because other modified files in this turn already exceeded the snippet budget; use the Read tool if you need the current content.`
                : `Note: ${e.filename} was modified, either by the user or by a linter. This change was intentional, so make sure to take it into account as you proceed (ie. don't revert it unless the user asks you to). Don't tell the user this, since they are already aware. Here are the relevant changes (shown with line numbers):
${e.snippet}`,
            isMeta: !0,
          }),
        ]),
      compact_file_reference: (e) =>
        dm([
          zr({
            content: `Note: ${e.filename} was read before the last conversation was summarized, but the contents are too large to include. Use ${zS.name} tool if you need to access it.`,
            isMeta: !0,
          }),
        ]),
      audio_transcript: (e) =>
        dm([
          zr({
            content:
              e.error !== void 0
                ? `The user @-mentioned the audio file ${e.filename}, but Claude Code could not transcribe it.
` + Tzs({ filename: e.filename, error: e.error })
                : `The user @-mentioned the audio file ${e.filename}. Claude Code transcribed it with Anthropic's speech-to-text service before sending this message. The transcript below IS the spoken content of that file \u2014 rely on it as you would on the output of a file-read tool; you do not need a separate tool to hear the audio.
` +
                  Tzs({
                    filename: e.filename,
                    durationSec: e.durationSec,
                    transcript: e.transcript,
                  }),
            isMeta: !0,
          }),
        ]),
      pdf_reference: (e) =>
        dm([
          zr({
            content: `PDF file: ${e.filename} (${e.pageCount} pages, ${pl(e.fileSize)}). This PDF is too large to read all at once. You MUST use the ${zi} tool with the pages parameter to read specific page ranges (e.g., pages: "1-5"). Do NOT call ${zi} without the pages parameter or it will fail. Start by reading the first few pages to understand the structure, then read more as needed. Maximum 20 pages per request.`,
            isMeta: !0,
          }),
        ]),
      selected_lines_in_ide: (e) =>
        dm([
          zr({
            content: `The user selected the lines ${e.lineStart} to ${e.lineEnd} from ${e.filename}:
${Jap(e.content)}

This may or may not be related to the current task.`,
            isMeta: !0,
          }),
        ]),
      selected_lines_in_diff: (e) =>
        dm([
          zr({
            content: `The user selected the following ${e.lineCount} ${e.lineCount === 1 ? "line" : "lines"} from the diff view${e.filePath ? ` (in ${e.filePath})` : ""}:
${Jap(e.content)}

This may or may not be related to the current task.`,
            isMeta: !0,
          }),
        ]),
      opened_file_in_ide: (e) =>
        dm([
          zr({
            content: `The user opened the file ${e.filename} in the IDE. This may or may not be related to the current task.`,
            isMeta: !0,
          }),
        ]),
      plan_file_reference: (e) =>
        dm([
          zr({
            content: `A plan file exists from plan mode at: ${e.planFilePath}

Plan contents:

${e.planContent}

If this plan is relevant to the current work and not already complete, continue working on it.`,
            isMeta: !0,
          }),
        ]),
      nested_memory: (e) =>
        dm([
          zr({
            content: `Contents of ${e.content.path}:

${e.content.content}`,
            isMeta: !0,
          }),
        ]),
      read_truncation_notice: (e) =>
        dm([zr({ content: S8e(e.banner), isMeta: !0 })]),
      agent_mention: (e) =>
        dm([
          zr({
            content: `The user has expressed a desire to invoke the agent "${e.agentType}". Please invoke the agent appropriately, passing in the required context to it. `,
            isMeta: !0,
          }),
        ]),
      skill_listing: (e) => {
        if (!e.content) return [];
        return dm([
          zr({
            content: `The following skills are available for use with the Skill tool:

${e.content}`,
            isMeta: !0,
          }),
        ]);
      },
      dynamic_skill: (e) => {
        let t = Rl(),
          r = t.endsWith(x2t.sep) ? t : t + x2t.sep;
        if (
          !e.skillDir ||
          !x2t.isAbsolute(e.skillDir) ||
          !e.skillDir.startsWith(r)
        )
          return [];
        let n = x2t.relative(t, e.skillDir);
        if (xfn.test(n)) return [];
        let o = e.skillNames.filter(Spr);
        if (o.length === 0) return [];
        return dm([
          zr({
            content: `New skills discovered in ${n}, now available via the Skill tool:
${o.map((i) => `- ${i}`).join(`
`)}`,
            isMeta: !0,
          }),
        ]);
      },
      output_style: (e) => {
        let t = _fe[e.style];
        if (!t) return [];
        return dm([
          zr({
            content: `${t.name} output style is active. ${e.turnReminder ?? "Remember to follow the specific guidelines for this style."}`,
            isMeta: !0,
          }),
        ]);
      },
      critical_system_reminder: (e) =>
        dm([zr({ content: e.content, isMeta: !0 })]),
      plan_mode_exit: (e) => {
        let t = e.planExists
          ? ` The plan file is located at ${e.planFilePath} if you need to reference it.`
          : "";
        return dm([
          zr({
            content: `## Exited Plan Mode

You have exited plan mode. You can now make edits, run tools, and take actions.${t}`,
            isMeta: !0,
          }),
        ]);
      },
      auto_mode_exit: () =>
        dm([
          zr({
            content: `## Exited Auto Mode

You have exited auto mode. The user may now want to interact more directly. You should ask clarifying questions when the approach is ambiguous rather than making assumptions.`,
            isMeta: !0,
          }),
        ]),
      token_usage: (e) => [
        zr({
          content: Gw(
            `Token usage: ${e.used}/${e.total}; ${e.remaining} remaining`,
          ),
          isMeta: !0,
        }),
      ],
      total_tokens_reminder: (e) => [zr({ content: Gw(e.text), isMeta: !0 })],
      budget_usd: (e) => [
        zr({
          content: Gw(
            `USD budget: $${e.used}/$${e.total}; $${e.remaining} remaining`,
          ),
          isMeta: !0,
        }),
      ],
      output_token_usage: (e) => {
        let t =
          e.budget !== null ? `${_d(e.turn)} / ${_d(e.budget)}` : _d(e.turn);
        return [
          zr({
            content: Gw(
              `Output tokens \u2014 turn: ${t} \xB7 session: ${_d(e.session)}`,
            ),
            isMeta: !0,
          }),
        ];
      },
      hook_blocking_error: (e) => [
        zr({
          content: Gw(
            `${e.hookName} hook blocking error from command: "${e.blockingError.command}": ${e.blockingError.blockingError}`,
          ),
          isMeta: !0,
        }),
      ],
      hook_additional_context: (e) => {
        if (e.content.length === 0) return [];
        return [
          zr({
            content: Gw(
              `${e.hookName} hook additional context: ${e.content.join(`
`)}`,
            ),
            isMeta: !0,
          }),
        ];
      },
      hook_stopped_continuation: (e) => [
        zr({
          content: Gw(`${e.hookName} hook stopped continuation: ${e.message}`),
          isMeta: !0,
        }),
      ],
      date_change: (e) =>
        dm([
          zr({
            content: `The date has changed. Today's date is now ${e.newDate}. DO NOT mention this to the user explicitly because they are already aware.`,
            isMeta: !0,
          }),
        ]),
      ultrathink_effort: () =>
        dm([
          zr({
            content:
              'The user included the keyword "ultrathink", requesting deeper reasoning on this turn. Reason as thoroughly as the task warrants.',
            isMeta: !0,
          }),
        ]),
      workflow_keyword_request: () =>
        dm([
          zr({
            content:
              'The user included the keyword "ultracode", opting this turn into multi-agent orchestration \u2014 use the Workflow tool to fulfill the request.',
            isMeta: !0,
          }),
        ]),
      ultra_effort_enter: ({ reminderType: e }) =>
        dm([
          zr({
            content:
              e === "full"
                ? "Ultracode is on: optimize for the most exhaustive, correct answer \u2014 not the fastest or cheapest. Use the Workflow tool on every substantive task; token cost is not a constraint. See the Workflow tool's **Ultracode** section and quality patterns. Solo only on conversational/trivial turns."
                : "Ultracode is still on \u2014 use the Workflow tool; see its Ultracode section.",
            isMeta: !0,
          }),
        ]),
      ultra_effort_exit: () =>
        dm([
          zr({
            content:
              "Ultracode is off \u2014 the Workflow tool's standard opt-in rule applies again.",
            isMeta: !0,
          }),
        ]),
      workflow_size_guideline_change: ({ size: e }) =>
        dm([zr({ content: fEd(e), isMeta: !0 })]),
      already_read_file: () => [],
      command_permissions: () => [],
      edited_image_file: () => [],
      hook_cancelled: () => [],
      hook_error_during_execution: () => [],
      hook_non_blocking_error: () => [],
      hook_system_message: () => [],
      hook_permission_decision: () => [],
      hook_deferred_tool: () => [],
      goal_status: () => [],
      structured_output: () => [],
      max_turns_reached: () => [],
      teammate_shutdown_batch: () => [],
    };
    PB_ = { dream: "Background memory consolidation" };
  });
