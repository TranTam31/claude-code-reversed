// Module: _an (lines 468585-468605)
  var _an = S(() => {
    Zr();
    Zt();
    c$t = class c$t extends Error {
      toolName;
      error;
      detailJson;
      constructor(e, t) {
        super(t);
        ((this.name = Fft), (this.toolName = e), (this.error = t));
        let r,
          n = t.trim();
        if (n.startsWith("{") || n.startsWith("["))
          try {
            let o = Bt(n);
            if (o !== null && typeof o === "object") r = n;
          } catch {}
        this.detailJson = r;
      }
    };
  });
