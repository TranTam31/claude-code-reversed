// Module: q7p (lines 771540-771624)
  var q7p = S(() => {
    mba();
    uba();
    bba();
    eHb = Object.assign(Object.create(null), {
      g: (e) => ({ next: { type: "g", count: e } }),
      r: (e) => ({ next: { type: "replace", count: e } }),
      ">": (e) => ({ next: { type: "indent", dir: ">", count: e } }),
      "<": (e) => ({ next: { type: "indent", dir: "<", count: e } }),
      "~": (e, t) => ({ execute: () => X9o(e, t) }),
      x: (e, t) => ({ execute: () => z9o(e, t) }),
      s: (e, t) => ({ execute: () => K9o(e, t) }),
      S: (e, t) => ({ execute: () => tjt("change", e, t) }),
      J: (e, t) => ({ execute: () => J9o(e, t) }),
      p: (e, t) => ({ execute: () => cAn(!0, e, t) }),
      P: (e, t) => ({ execute: () => cAn(!1, e, t) }),
      D: (e, t) => ({ execute: () => ejt("delete", "$", 1, t) }),
      C: (e, t) => ({ execute: () => ejt("change", "$", 1, t) }),
      Y: (e, t) => ({ execute: () => tjt("yank", e, t) }),
      G: (e, t) => ({
        execute: () => {
          if (e === 1) t.setOffset(t.cursor.startOfLastLine().offset);
          else t.setOffset(t.cursor.goToLine(e).offset);
        },
      }),
      ".": (e, t) => ({ execute: () => t.onDotRepeat?.() }),
      ";": (e, t) => ({ execute: () => aKo(!1, e, t) }),
      ",": (e, t) => ({ execute: () => aKo(!0, e, t) }),
      u: (e, t) => ({ execute: () => t.onUndo?.() }),
      i: (e, t) => ({ execute: () => t.enterInsert(t.cursor.offset) }),
      I: (e, t) => ({
        execute: () =>
          t.enterInsert(t.cursor.firstNonBlankInLogicalLine().offset),
      }),
      a: (e, t) => ({
        execute: () => {
          let r = t.cursor.isAtEnd()
            ? t.cursor.offset
            : t.cursor.right().offset;
          t.enterInsert(r);
        },
      }),
      A: (e, t) => ({
        execute: () => t.enterInsert(t.cursor.endOfLogicalLine().offset),
      }),
      o: (e, t) => ({ execute: () => uAn("below", t) }),
      O: (e, t) => ({ execute: () => uAn("above", t) }),
    });
    pHb = Object.assign(Object.create(null), {
      x: () => ({ exit: "operator", op: "delete" }),
      s: () => ({ exit: "operator", op: "change" }),
      X: () => ({ exit: "operator", op: "delete", forceLinewise: !0 }),
      D: () => ({ exit: "operator", op: "delete", forceLinewise: !0 }),
      C: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
      S: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
      R: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
      Y: () => ({ exit: "operator", op: "yank", forceLinewise: !0 }),
      r: () => ({ next: { type: "replace" } }),
      "~": () => ({ exit: "case", op: "toggle" }),
      u: () => ({ exit: "case", op: "lower" }),
      U: () => ({ exit: "case", op: "upper" }),
      p: () => ({ exit: "paste" }),
      P: () => ({ exit: "paste" }),
      ">": (e) => ({ exit: "indent", dir: ">", count: e }),
      "<": (e) => ({ exit: "indent", dir: "<", count: e }),
      v: () => ({ exit: "toggleKind", key: "v" }),
      V: () => ({ exit: "toggleKind", key: "V" }),
      o: () => ({ exit: "swap" }),
      J: () => ({ exit: "join" }),
      $: (e, t) => ({
        next: { type: "idle" },
        move: () => t.setOffset(t.cursor.endOfLogicalLine().offset),
      }),
      g: (e) => ({ next: { type: "g", count: e } }),
      G: (e, t) => ({
        next: { type: "idle" },
        move: () => {
          let r = e === 1 ? t.cursor.startOfLastLine() : t.cursor.goToLine(e);
          t.setOffset(r.offset);
        },
      }),
      ";": (e, t) => ({ next: { type: "idle" }, move: () => aKo(!1, e, t) }),
      ",": (e, t) => ({ next: { type: "idle" }, move: () => aKo(!0, e, t) }),
    });
  });
