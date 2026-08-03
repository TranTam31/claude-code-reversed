// Module: Hsa (lines 697169-697181)
  var Hsa = S(() => {
    Zt();
    xsa = class xsa {
      chunks = [];
      static encoder = new TextEncoder();
      push(e) {
        if (e.length > 0) this.chunks.push(xsa.encoder.encode(e));
      }
      toBuffer() {
        return Buffer.concat(this.chunks);
      }
    };
  });
