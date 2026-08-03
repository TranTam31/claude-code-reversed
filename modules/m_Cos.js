// Module: cOs (lines 467624-467651)
  var cOs = S(() => {
    yv();
    JHo = {
      name: "AutoModeScanTask",
      type: "auto_mode_scan",
      async kill(e, t) {
        let r = !1;
        if (
          (t.update(e, (n) => {
            if (n.status !== "running") return n;
            return (
              n.abortController?.abort(),
              (r = !0),
              {
                ...n,
                status: "killed",
                endTime: Date.now(),
                notified: !0,
                abortController: void 0,
              }
            );
          }),
          r)
        )
          Vp(e, "stopped", { skipTranscript: !0 });
      },
    };
  });
