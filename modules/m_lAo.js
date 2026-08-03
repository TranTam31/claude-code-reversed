// Module: lAo (lines 381475-381496)
  var lAo = S(() => {
    Vn();
    a1t = a_({
      kind: "permission_bash",
      payload: Se(() =>
        v.custom(
          (e) =>
            typeof e === "object" &&
            e !== null &&
            "requestId" in e &&
            "toolName" in e &&
            "permissionResult" in e &&
            "command" in e &&
            "classifierState" in e,
        ),
      ),
      result: Se(() =>
        v.custom((e) => typeof e === "object" && e !== null && "behavior" in e),
      ),
      default: { behavior: "cancelled" },
    });
  });
