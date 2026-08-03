// Module: OCs (lines 381520-381539)
  var OCs = S(() => {
    Vn();
    Xrn = a_({
      kind: "permission_enter_plan_mode",
      payload: Se(() =>
        v.custom(
          (e) =>
            typeof e === "object" &&
            e !== null &&
            "requestId" in e &&
            "toolName" in e &&
            "permissionResult" in e,
        ),
      ),
      result: Se(() =>
        v.custom((e) => typeof e === "object" && e !== null && "behavior" in e),
      ),
      default: { behavior: "cancelled" },
    });
  });
