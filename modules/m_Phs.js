// Module: Phs (lines 299712-299732)
  var Phs = S(() => {
    PJr = class PJr extends YHe {
      col;
      row;
      localCol = 0;
      localRow = 0;
      cellIsBlank;
      hyperlinkUrl;
      defaultAllowed = !1;
      allowDefault() {
        this.defaultAllowed = !0;
      }
      constructor(e, t, r, n) {
        super();
        ((this.col = e),
          (this.row = t),
          (this.cellIsBlank = r),
          (this.hyperlinkUrl = n));
      }
    };
  });
