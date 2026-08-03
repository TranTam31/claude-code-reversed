// Module: Qrn (lines 381780-382102)
  var Qrn = S(() => {
    pt();
    Vn();
    Zr();
    Ss();
    FB();
    oRt();
    Bj();
    ((_Py = Se(() =>
      v.object({
        label: v
          .string()
          .describe(
            "The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice.",
          ),
        description: v
          .string()
          .describe(
            "Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications.",
          ),
        preview: v
          .string()
          .optional()
          .describe(
            "Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format.",
          ),
      }),
    )),
      (qod = Se(() =>
        v.object({
          question: v
            .string()
            .describe(
              'The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"',
            ),
          header: v
            .string()
            .describe(
              `Very short label displayed as a chip/tag (max ${qDu} chars). Examples: "Auth method", "Library", "Approach".`,
            ),
          options: v
            .array(_Py())
            .min(2)
            .max(4)
            .describe(
              hJi()
                ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too \u2014 group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically."
                : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically.",
            ),
          multiSelect: v
            .boolean()
            .default(!1)
            .describe(
              "Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.",
            ),
        }),
      )),
      (zod = Se(() => {
        let e = v.object({
          preview: v
            .string()
            .optional()
            .describe(
              "The preview content of the selected option, if the question used previews.",
            ),
          notes: v
            .string()
            .optional()
            .describe("Free-text notes the user added to their selection."),
        });
        return v
          .record(v.string(), e)
          .optional()
          .describe(
            "Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.",
          );
      })),
      (God = {
        check: (e) => {
          let t = e.questions.map((r) => r.question);
          if (t.length !== new Set(t).size) return !1;
          for (let r of e.questions) {
            let n = r.options.map((o) => o.label);
            if (n.length !== new Set(n).size) return !1;
          }
          return !0;
        },
        message:
          "Question texts must be unique, option labels must be unique within each question",
      }),
      (bPy = Se(() =>
        v.preprocess(
          (e) =>
            Array.isArray(e) && e.every((t) => typeof t === "string")
              ? e.join(", ")
              : e,
          v.string(),
        ),
      )),
      (SPy = Se(() => ({
        answers: v
          .record(v.string(), bPy())
          .optional()
          .describe("User answers collected by the permission component"),
        annotations: zod(),
        metadata: v
          .object({
            source: v
              .string()
              .optional()
              .describe(
                'Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.',
              ),
          })
          .optional()
          .describe(
            "Optional metadata for tracking and analytics purposes. Not displayed to user.",
          ),
      }))),
      (EPy = Se(() =>
        v
          .strictObject({
            questions: v
              .array(qod())
              .min(1)
              .max(4)
              .describe(
                hJi()
                  ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."
                  : "Questions to ask the user (1-4 questions)",
              ),
            ...SPy(),
          })
          .refine(God.check, { message: God.message }),
      )),
      (vPy = Se(() =>
        v.object({
          questions: v.array(qod()).describe("The questions that were asked"),
          answers: v
            .record(v.string(), v.string())
            .describe(
              "The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)",
            ),
          response: v
            .string()
            .optional()
            .describe(
              "Freeform text the user typed instead of selecting a structured option",
            ),
          annotations: zod(),
          afkTimeoutMs: v
            .number()
            .int()
            .positive()
            .optional()
            .describe(
              "Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path.",
            ),
        }),
      )));
    zur = Ui({
      name: Fm,
      searchHint: "prompt the user with a multiple-choice question",
      maxResultSizeChars: 1e5,
      async description() {
        return zDu;
      },
      async prompt({ model: e }) {
        let t = "";
        if (SE(e)) {
          let s = Ke("tengu_cinder_plover", "").trim();
          t = s
            ? `
${s}
`
            : YDu;
        }
        let r = Ke("tengu_cinder_wren", ""),
          n = typeof r === "string" ? r.trim() : "",
          o = n
            ? `
${n}
`
            : "",
          i = iFn();
        if (i === void 0) return dus + t + o;
        return dus + t + o + KDu[i];
      },
      get inputSchema() {
        return EPy();
      },
      get outputSchema() {
        return vPy();
      },
      userFacingName() {
        return "";
      },
      validationErrorSteer(e) {
        if (typeof e !== "object" || e === null || Array.isArray(e))
          return null;
        let t = e.questions;
        if (!Array.isArray(t)) return null;
        if (
          !t.some((n) => {
            if (typeof n !== "object" || n === null || Array.isArray(n))
              return !1;
            let o = n.options;
            return Array.isArray(o) && o.length < 2;
          })
        )
          return null;
        return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices.";
      },
      isEnabled() {
        if (IC().length > 0 && yn()) return !1;
        if (yn() && !vue()) return !1;
        return !0;
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
      },
      toAutoClassifierInput(e) {
        return e.questions.map((t) => t.question).join(" | ");
      },
      requiresUserInteraction() {
        return !0;
      },
      async validateInput({ questions: e }) {
        if (iFn() !== "html") return { result: !0 };
        for (let t of e)
          for (let r of t.options) {
            let n = APy(r.preview);
            if (n)
              return {
                result: !1,
                message: `Option "${r.label}" in question "${t.question}": ${n}`,
                errorCode: 1,
              };
          }
        return { result: !0 };
      },
      async checkPermissions(e) {
        return {
          behavior: "ask",
          message: "Answer questions?",
          updatedInput: {
            questions: e.questions,
            ...(e.metadata && { metadata: e.metadata }),
          },
        };
      },
      renderToolUseMessage() {
        return null;
      },
      async call(e, t) {
        let { questions: r, answers: n = {}, annotations: o } = e,
          { response: i, afkTimeoutMs: s } = e;
        return {
          data: {
            questions: r,
            answers: n,
            ...(i?.trim() && { response: i }),
            ...(o && { annotations: o }),
            ...(s && { afkTimeoutMs: s }),
          },
        };
      },
      mapToolResultToToolResultBlockParam(
        {
          questions: e,
          answers: t,
          response: r,
          annotations: n,
          afkTimeoutMs: o,
        },
        i,
      ) {
        let s = e
            .map(({ question: l }) => {
              let c = t[l],
                u = n?.[l],
                d = c && c !== dAo;
              if (!d && !u?.notes) return null;
              let p = [d ? `"${l}"="${c}"` : `"${l}"=(no option selected)`];
              if (u?.preview)
                p.push(`selected preview:
${u.preview}`);
              if (u?.notes) p.push(`notes: ${u.notes}`);
              return p.join(" ");
            })
            .filter((l) => l !== null)
            .join(", "),
          a;
        if (o)
          a = s
            ? `${Vod(o)}

Before going idle the user had selected: ${s}.`
            : Vod(o);
        else if (r?.trim()) a = `The user responded: ${r}`;
        else if (s)
          a = e.every(({ question: c, options: u, multiSelect: d }) => {
            if (n?.[c]?.notes) return !1;
            let f = t[c],
              m = new Set(u.map((y) => y.label));
            if (Array.isArray(f))
              return d && f.length > 0 && f.every((y) => m.has(y));
            if (!f || f === dAo) return !0;
            if (m.has(f)) return !0;
            if (!d) return !1;
            let g = f.split(", ");
            return g.length > 1 && g.every((y) => m.has(y));
          })
            ? `Your questions have been answered: ${s}. You can now continue with these answers in mind.`
            : `The user answered: ${s}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`;
        else a = "The user did not answer the questions.";
        return { type: "tool_result", content: a, tool_use_id: i };
      },
    });
  });
