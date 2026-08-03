// Module: NCs (lines 381541-381561)
  var NCs = S(() => {
    Vn();
    qur = a_({
      kind: "permission_exit_plan_mode_v2",
      payload: Se(() =>
        v.custom(
          (e) =>
            typeof e === "object" &&
            e !== null &&
            "requestId" in e &&
            "toolName" in e &&
            "permissionResult" in e &&
            "plan" in e,
        ),
      ),
      result: Se(() =>
        v.custom((e) => typeof e === "object" && e !== null && "behavior" in e),
      ),
      default: { behavior: "cancelled" },
    });
  });
