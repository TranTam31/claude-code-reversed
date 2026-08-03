// Module: Z2i (lines 113237-113246)
  var Z2i = S(() => {
    Q2i();
    umc = {
      tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
      name: "eventStreamHandlingMiddleware",
      relation: "after",
      toMiddleware: "awsAuthMiddleware",
      override: !0,
    };
  });
