// Module: Bfi (lines 953113-953126)
  var Bfi = S(() => {
    ((Ffi = {
      minTimeBeforeFeedbackMs: 600000,
      minTimeBetweenFeedbackMs: 3600000,
      minTimeBetweenGlobalFeedbackMs: 1e8,
      minUserTurnsBeforeFeedback: 5,
      minUserTurnsBetweenFeedback: 10,
      hideThanksAfterMs: 5000,
      onForModels: ["*"],
      probability: 0.005,
    }),
      (Ufi = { probability: 0 }),
      (het = { enabled: !1, maxChars: 500, autoDismissAfterMs: 30000 }));
  });
