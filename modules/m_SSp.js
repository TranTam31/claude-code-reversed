// Module: SSp (lines 663160-663183)
  var SSp = S(() => {
    Tsr();
    lZs = class lZs extends rke {
      action;
      sourceEvent;
      isChordCompletion;
      origin;
      constructor(e, t) {
        super("action", { bubbles: !0, cancelable: !0 });
        ((this.action = e),
          (this.sourceEvent = t?.sourceEvent ?? null),
          (this.isChordCompletion = t?.isChordCompletion ?? !1),
          (this.origin = t?.origin ?? "single"));
      }
      consume() {
        (this.stopPropagation(),
          this.sourceEvent?.preventDefault(),
          this.sourceEvent?.stopImmediatePropagation());
      }
      get consumed() {
        return this._isPropagationStopped();
      }
    };
  });
