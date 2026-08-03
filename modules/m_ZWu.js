// Module: ZWu (lines 311401-311412)
  var ZWu = S(() => {
    m_s = class m_s extends Error {
      constructor(e, t) {
        (super(e),
          (this.name = "ParseError"),
          (this.type = t.type),
          (this.field = t.field),
          (this.value = t.value),
          (this.line = t.line));
      }
    };
  });
