// Module: zCs (lines 382905-382925)
  var zCs = S(() => {
    Vn();
    snn = a_({
      kind: "permission_skill",
      payload: Se(() =>
        v.custom(
          (e) =>
            typeof e === "object" &&
            e !== null &&
            "requestId" in e &&
            "toolName" in e &&
            "permissionResult" in e &&
            "skill" in e,
        ),
      ),
      result: Se(() =>
        v.custom((e) => typeof e === "object" && e !== null && "behavior" in e),
      ),
      default: { behavior: "cancelled" },
    });
  });
