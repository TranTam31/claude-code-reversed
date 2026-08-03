// Module: Iwd (lines 472879-472937)
  var Iwd = S(() => {
    Vn();
    ((BOs = Se(() =>
      v.object({
        file: v
          .string()
          .describe("Repo-relative path of the file the finding is in"),
        line: v
          .number()
          .int()
          .optional()
          .describe("1-indexed line the finding anchors to"),
        summary: v.string().describe("One-sentence statement of the defect"),
        short_summary: v
          .string()
          .max(60)
          .optional()
          .describe(
            "Compressed label for compact UI (\u226460 chars): the claim alone, no rationale or consequence clause",
          ),
        failure_scenario: v
          .string()
          .describe("Concrete inputs/state \u2192 wrong output/crash"),
        category: v
          .string()
          .max(40)
          .optional()
          .describe(
            'Short kebab-case slug of the finding type, e.g. "correctness", "simplification", "efficiency", "test-coverage"',
          ),
        verdict: v
          .enum(["CONFIRMED", "PLAUSIBLE"])
          .optional()
          .describe(
            "Set when a verify pass ran; absent on inline-only reviews",
          ),
        outcome: v
          .enum(["fixed", "skipped", "no_change_needed"])
          .optional()
          .describe(
            "Set ONLY when re-reporting after applying fixes: what happened to this finding",
          ),
      }),
    )),
      (kwd = Se(() =>
        v.strictObject({
          level: v
            .enum(["low", "medium", "high", "xhigh", "max"])
            .optional()
            .describe("Effort level the review ran at"),
          findings: v
            .array(BOs())
            .max(32)
            .describe(
              "Verified findings, most-severe first; empty if none survived",
            ),
        }),
      )));
  });
