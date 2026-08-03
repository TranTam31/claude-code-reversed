// Module: Xmc (lines 114085-114094)
  var Xmc = S(() => {
    SBi();
    Ymc = {
      name: "websocketEndpointMiddleware",
      tags: ["WEBSOCKET", "EVENT_STREAM"],
      relation: "after",
      toMiddleware: "eventStreamHeaderMiddleware",
      override: !0,
    };
  });
