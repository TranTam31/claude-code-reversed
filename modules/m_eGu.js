// Module: eGu (lines 311414-311438)
  var eGu = S(() => {
    ZWu();
    h_s = class h_s extends TransformStream {
      constructor({ onError: e, onRetry: t, onComment: r } = {}) {
        let n;
        super({
          start(o) {
            n = QWu({
              onEvent: (i) => {
                o.enqueue(i);
              },
              onError(i) {
                e === "terminate" ? o.error(i) : typeof e == "function" && e(i);
              },
              onRetry: t,
              onComment: r,
            });
          },
          transform(o) {
            n.feed(o);
          },
        });
      }
    };
  });
