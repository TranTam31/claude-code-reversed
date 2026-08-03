// Module: RTo (lines 402715-402743)
  var RTo = S(() => {
    Vn();
    zt();
    Ge();
    MYr();
    HNy = Se(() =>
      tc.object({
        behavior: tc.enum(["allow", "deny"]),
        updatedInput: tc
          .record(tc.string(), tc.unknown())
          .optional()
          .transform((e) => (e && Object.keys(e).length === 0 ? void 0 : e)),
        updatedPermissions: tc
          .array(wlt())
          .optional()
          .catch((e) => {
            w(
              `Malformed updatedPermissions from bridge client ignored: ${e.error.issues[0]?.message ?? "unknown"}`,
              { level: "warn" },
            );
            return;
          }),
        message: tc
          .string()
          .optional()
          .catch(void 0),
      }),
    );
  });
