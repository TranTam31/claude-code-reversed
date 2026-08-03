// Module: iBu (lines 299680-299697)
  var iBu = S(() => {
    Tsr();
    Rhs = class Rhs extends rke {
      deltaY;
      deltaX;
      ctrl;
      shift;
      meta;
      constructor(e, t) {
        super("wheel", { bubbles: !0, cancelable: !0 });
        ((this.deltaY = e),
          (this.deltaX = t.deltaX ?? 0),
          (this.ctrl = t.ctrl ?? !1),
          (this.shift = t.shift ?? !1),
          (this.meta = t.meta ?? !1));
      }
    };
  });
