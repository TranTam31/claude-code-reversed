// Module: Ihs (lines 299642-299667)
  var Ihs = S(() => {
    Tsr();
    Vsr = class Vsr extends rke {
      key;
      name;
      sequence;
      ctrl;
      shift;
      meta;
      superKey;
      fn;
      soloKeypress;
      constructor(e, t) {
        super("keydown", { bubbles: !0, cancelable: !0 });
        ((this.key = Lcy(e)),
          (this.name = e.name ?? ""),
          (this.sequence = e.sequence ?? ""),
          (this.ctrl = e.ctrl),
          (this.shift = e.shift),
          (this.meta = e.meta || e.option),
          (this.superKey = e.super),
          (this.fn = e.fn),
          (this.soloKeypress = t?.soloKeypress));
      }
    };
  });
