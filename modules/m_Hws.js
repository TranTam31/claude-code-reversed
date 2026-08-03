// Module: Hws (lines 363906-363942)
  var Hws = S(() => {
    NQu = class NQu extends S9e {
      constructor() {
        super(...arguments);
        this.tokenize = ixy;
      }
      equals(e, t, r) {
        if (r.ignoreWhitespace) {
          if (
            !r.newlineIsToken ||
            !e.includes(`
`)
          )
            e = e.trim();
          if (
            !r.newlineIsToken ||
            !t.includes(`
`)
          )
            t = t.trim();
        } else if (r.ignoreNewlineAtEof && !r.newlineIsToken) {
          if (
            e.endsWith(`
`)
          )
            e = e.slice(0, -1);
          if (
            t.endsWith(`
`)
          )
            t = t.slice(0, -1);
        }
        return super.equals(e, t, r);
      }
    };
    $Qu = new NQu();
  });
