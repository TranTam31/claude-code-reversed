// Module: U3i (lines 126065-126087)
  var U3i = S(() => {
    VWr = {
      fromJSON(e) {
        return {
          seconds: vkc(e.seconds) ? globalThis.Number(e.seconds) : 0,
          nanos: vkc(e.nanos) ? globalThis.Number(e.nanos) : 0,
        };
      },
      toJSON(e) {
        let t = {};
        if (e.seconds !== void 0) t.seconds = Math.round(e.seconds);
        if (e.nanos !== void 0) t.nanos = Math.round(e.nanos);
        return t;
      },
      create(e) {
        return VWr.fromPartial(e ?? {});
      },
      fromPartial(e) {
        let t = Eog();
        return ((t.seconds = e.seconds ?? 0), (t.nanos = e.nanos ?? 0), t);
      },
    };
  });
