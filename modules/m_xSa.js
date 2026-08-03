// Module: XSa (lines 775570-775601)
  var XSa = S(() => {
    Vn();
    ((wAn = a_({
      kind: "auto_mode_setup_review",
      payload: Se(() =>
        v.object({
          environment: v.array(v.string()),
          allow: v.array(v.string()),
          soft_deny: v.array(v.string()),
          hard_deny: v.array(v.string()),
          remove_from_permissions_allow: v.array(v.string()),
          notes: v.array(v.string()),
          mode: v.enum(["append", "replace"]),
        }),
      ),
      result: Se(() => v.enum(["accept", "decline", "cancelled"])),
      default: "cancelled",
    })),
      (TAn = a_({
        kind: "auto_mode_flagged_allow",
        payload: Se(() =>
          v.object({ flagged: v.array(v.string()), runId: v.string() }),
        ),
        result: Se(() =>
          v.union([
            v.object({ toRemove: v.array(v.string()) }),
            v.literal("cancelled"),
          ]),
        ),
        default: "cancelled",
      })));
  });
