// Module: ACd (lines 479211-479332)
  var ACd = S(() => {
    Vn();
    Zr();
    vt();
    Ss();
    n_();
    Ar();
    Pr();
    ECd();
    ((TKy = Se(() =>
      v.object({
        proposals: v
          .array(
            v
              .object({
                name: v.string().min(1).describe("kebab-case skill slug"),
                kind: v.enum(["new", "improvement"]),
                target: v
                  .string()
                  .optional()
                  .describe(
                    "Existing skill name to amend. Required when kind is 'improvement'; omit for 'new'.",
                  ),
                description: v.string().describe("one line shown on the card"),
                evidence: v
                  .array(v.string())
                  .optional()
                  .describe(
                    "memory file paths where this procedure was observed",
                  ),
                skillMd: v
                  .string()
                  .describe(
                    "complete SKILL.md draft (frontmatter + Trigger/Steps/Verification body)",
                  ),
              })
              .refine((e) => e.kind !== "improvement" || !!e.target, {
                message: "target is required when kind is 'improvement'",
                path: ["target"],
              }),
          )
          .min(1)
          .max(3),
      }),
    )),
      (CKy = Se(() =>
        v.object({
          proposalCount: v
            .number()
            .describe("Number of proposals shown on the review card"),
        }),
      )),
      (xKy = Ui({
        name: G8e,
        maxResultSizeChars: 1000,
        searchHint:
          "propose skills from recurring procedures for the user to review and save",
        get inputSchema() {
          return TKy();
        },
        get outputSchema() {
          return CKy();
        },
        isEnabled() {
          if (!Irt()) return !1;
          if (
            !Z.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE ||
            Z.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0
          )
            return !1;
          if (!Ke("tengu_propose_skills", !1)) return !1;
          return Z.CLAUDE_CODE_SYNC_SKILLS;
        },
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return (e.proposals ?? []).map((t) =>
            t.kind === "improvement" && t.target
              ? `${t.name ?? ""} (improves ${t.target}): ${t.description ?? ""}`
              : `${t.name ?? ""}: ${t.description ?? ""}`,
          ).join(`
`);
        },
        async description() {
          return QPu;
        },
        async prompt() {
          return ZPu;
        },
        renderToolUseMessage(e) {
          let t = (e.proposals ?? []).filter((n) => n?.name).slice(0, 3);
          if (t.length === 0) return "";
          let r = t.map((n) => {
            let o = $1s(N1s(n.name ?? ""), 80);
            return n.kind === "improvement" && n.target
              ? `${o} (improves ${$1s(N1s(n.target), 80)})`
              : o;
          });
          return `Propose ${t.length} ${Et(t.length, "skill")}: ${r.join(", ")}`;
        },
        async call({ proposals: e }, t) {
          return (
            O("tengu_propose_skills", {
              proposal_count: e.length,
              improvement_count: pr(e, (r) => r.kind === "improvement"),
            }),
            { data: { proposalCount: e.length } }
          );
        },
        mapToolResultToToolResultBlockParam({ proposalCount: e }, t) {
          return {
            tool_use_id: t,
            type: "tool_result",
            content: `Shown ${e} skill proposal(s) to the user for review. Continue with the next phase; do not wait for them to respond.`,
          };
        },
      })));
  });
