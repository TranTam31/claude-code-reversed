// Module: XJd (lines 590193-590214)
  var XJd = S(() => {
    Vu();
    ((fP_ = {
      type: "local",
      name: "heapdump",
      description: "Dump the JS heap to ~/Desktop",
      isEnabled: () => ns("allow_heap_dump"),
      isHidden: !0,
      supportsNonInteractive: !0,
      fleetHostCall: async ({ setInfo: e, setError: t }) => {
        e("Writing heap dump\u2026");
        let { performHeapDump: r } = await Promise.resolve().then(
            () => (uVs(), qJd),
          ),
          n = await r();
        if (n.success) e(`Heap dump written to ${n.heapPath}`);
        else t(`Couldn't write heap dump \u2014 ${n.error}`);
      },
      load: () => Promise.resolve().then(() => (KJd(), zJd)),
    }),
      (YJd = fP_));
  });
