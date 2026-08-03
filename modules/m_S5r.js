// Module: S5r (lines 140256-140277)
  var S5r = S(() => {
    Vn();
    i8 = a_({
      kind: "refusal_fallback_prompt",
      payload: Se(() =>
        v.object({
          originalModel: v.string(),
          fallbackModel: v.string(),
          apiRefusalCategory: v.string().nullable().optional(),
          guidanceText: v.string().optional(),
          retractedMessageUuids: v
            .array(v.string())
            .optional()
            .describe(
              "Wire uuids of the already-streamed messages this refusal concerns. Evict on RESOLUTION (your own response \u2014 any choice \u2014 or control_cancel_request retirement), never on receipt; a turn torn down mid-dialog keeps the partials. Eviction is idempotent.",
            ),
        }),
      ),
      result: Se(() => v.enum(["retry_fallback", "edit_prompt", "cancelled"])),
      default: "cancelled",
    });
  });
