// Module: aZe (lines 869077-869115)
  var aZe = S(() => {
    kee();
    qh();
    ((cai = x(ot(), 1)),
      (xTe = FT({ open: [] })),
      (pXa = Rs()),
      (lO = {
        getState: xTe.getState,
        subscribe: xTe.subscribe,
        onClosed: pXa.subscribe,
        open(e) {
          xTe.setState((t) => {
            if (e.queueBehind && t.open.length > 0)
              return { open: [e, ...t.open] };
            let r = t.open.length > 0 ? { ...e, swappedAt: Date.now() } : e;
            return { open: [...t.open, r] };
          });
        },
        update(e, t) {
          xTe.setState((r) => {
            let n = r.open.findIndex((i) => i.id === e);
            if (n === -1) return r;
            let o = r.open.slice();
            return ((o[n] = { ...r.open[n], payload: t }), { open: o });
          });
        },
        answer(e, t) {
          if (!j4f(e)) return;
          pXa.emit({ id: e, type: "answered", result: t });
        },
        dismiss(e) {
          if (!j4f(e)) return;
          pXa.emit({ id: e, type: "dismissed" });
        },
        _resetForTests() {
          xTe.setState(() => ({ open: [] }));
        },
      }));
  });
