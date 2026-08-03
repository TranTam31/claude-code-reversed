// Module: uOs (lines 467653-467681)
  var uOs = S(() => {
    Xwo();
    yv();
    QHo = {
      name: "DreamTask",
      type: "dream",
      async kill(e, t) {
        let r;
        if (
          (t.update(e, (n) => {
            if (n.status !== "running") return n;
            return (
              n.abortController?.abort(),
              (r = n.priorMtime),
              {
                ...n,
                status: "killed",
                endTime: Date.now(),
                notified: !0,
                abortController: void 0,
              }
            );
          }),
          r !== void 0)
        )
          (Vp(e, "stopped", { skipTranscript: !0 }), await Ywo(r));
      },
    };
  });
