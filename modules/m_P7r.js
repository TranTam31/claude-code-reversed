// Module: P7r (lines 267045-267077)
  var P7r = S(() => {
    bl();
    Zr();
    Ar();
    Un();
    ((iZg = ["off", "infinite", "fixed", "countdown", "padded-countdown"]),
      (epo = new Map()),
      (qRu = new Map()),
      (Pcs = new Map()));
    ((X$e = qr(() => {
      let e = Z.CLAUDE_CODE_TOTAL_TOKENS_REMINDER;
      if (Dcs(e)) return e;
      let t = eo().totalTokensReminder;
      if (Dcs(t)) return t;
      let r = Ke("tengu_lapis_anchor", "off");
      return Dcs(r) ? r : "off";
    })),
      (tpo = qr(() => {
        let e = Z.CLAUDE_CODE_TOTAL_TOKENS_REMINDER_BUDGET;
        if (Number.isFinite(e) && e > 0) return e;
        let t = eo().totalTokensReminderBudget;
        if (Number.isFinite(t) && t > 0) return t;
        let r = Ke("tengu_lapis_anchor_budget", VRu);
        return Number.isFinite(r) && r > 0 ? r : VRu;
      })),
      (YRu = qr(() => {
        let e = Z.CLAUDE_CODE_TOTAL_TOKENS_REMINDER_AFTER_USER_TURN;
        if (e !== void 0) return e;
        let t = eo().totalTokensReminderAfterUserTurn;
        if (t !== void 0) return t;
        return Ke("tengu_lapis_anchor_user_turn", !1);
      })));
  });
