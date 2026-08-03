// Module: cAo (lines 381563-381584)
  var cAo = S(() => {
    Vn();
    lpt = a_({
      kind: "permission_file",
      payload: Se(() =>
        v.custom(
          (e) =>
            typeof e === "object" &&
            e !== null &&
            "requestId" in e &&
            "toolName" in e &&
            "permissionResult" in e &&
            "filePath" in e &&
            "operationType" in e,
        ),
      ),
      result: Se(() =>
        v.custom((e) => typeof e === "object" && e !== null && "behavior" in e),
      ),
      default: { behavior: "cancelled" },
    });
  });
