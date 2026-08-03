// Module: rhr (lines 497006-497100)
  var rhr = S(() => {
    mh();
    WC();
    ehr();
    ((zId = [jId, WId, GId, VId, qId]),
      (f$s = `If the ${Vo} tool is not available in your current tool set, do not error \u2014 perform each angle (and each verification) yourself, sequentially, in this context.`),
      (KId = `${jId}
${WId}
${GId}`),
      (TJy = `${KId}
${VId}
${qId}`),
      (YId = `### Reuse

The angles above hunt for bugs; this one and the next two hunt for cleanup in
the changed code. ${N$t}`),
      (XId = `## Phase 2 \u2014 Verify (1-vote, 3-state)

Dedup candidates that point at the same line/mechanism, keeping the one with
the most concrete failure scenario. For each remaining candidate, run **one
verifier** via the ${Vo} tool: give it the diff, the relevant
file(s), and the candidate, and have it return exactly one of:

${m$s}

Keep candidates where the vote is CONFIRMED or PLAUSIBLE.
`),
      (CJy = `## Phase 2 \u2014 Verify (1-vote, recall-biased)

Dedup near-duplicates (same defect, same location, same reason \u2192 keep one). For
each remaining candidate, run **one verifier** via the ${Vo} tool:
give it the diff, the relevant file(s), and the candidate; it returns exactly
one of **CONFIRMED / PLAUSIBLE / REFUTED**.

${h$s}

Keep **CONFIRMED and PLAUSIBLE**. Drop REFUTED.
`),
      (xJy = `## Phase 3 \u2014 Sweep for gaps

Run **one more finder** as a fresh reviewer who has the verified list. Re-read
the diff and enclosing functions looking ONLY for defects not already listed.
Do not re-derive or re-confirm anything already there \u2014 the job is gaps. Focus
on what the first pass tends to miss: ${ARo}

Surface **up to 8 additional candidates**, each naming a defect not already on
the list. If nothing new, return an empty sweep \u2014 do not pad.
`),
      (JId = `

## Publishing a shareable review (Artifact)

After the findings are produced, also publish them as an artifact so they can
be shared and iterated on outside the terminal:

1. Load the \`${xUe}\` skill (utilitarian treatment \u2014
   this is a document).
2. Write the findings to an HTML file: one section per finding with the file
   path and line, the one-line summary, the concrete failure scenario, and the
   relevant code snippet. If nothing survived verification, the page says so
   in one line.
3. Call the ${GI} tool with that file path.
4. End the page body with this line verbatim:

   > ${thr}

Skip this step if the review was invoked only to feed another tool (e.g. a
workflow step whose caller handles its own output).
`),
      (vRo = `${KId}
${YId}
${FIe}
${UIe}
${BIe}
${smt}`),
      (HJy = `The ${Vo} tool isn't available in this context, so the usual
multi-agent fan-out and subagent verify pass can't run. Work through every
angle below yourself, in this same context, in one pass \u2014 do not skip angles
for lack of fan-out. Re-check each candidate against the diff before keeping
it; drop anything you can't back up with a concrete failure scenario.
`),
      (kJy = `
State clearly in your summary that this was a single-pass review done without
the ${Vo} tool, not the full multi-agent fan-out, so whoever reads
it isn't misled about what actually ran.
`));
    ((BId = `${TJy}
${YId}
${FIe}
${UIe}
${BIe}
${smt}`),
      (iRd = oRd("xhigh")),
      (sRd = oRd("max")));
  });
