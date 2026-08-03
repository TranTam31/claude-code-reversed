// Module: ioi (lines 851059-851282)
  var ioi = S(() => {
    aPf = Object.prototype.hasOwnProperty;
    ((EhS = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 }),
      (vhS = {
        isCaseSensitive: !1,
        includeScore: !1,
        keys: [],
        shouldSort: !0,
        sortFn: (e, t) =>
          e.score === t.score
            ? e.idx < t.idx
              ? -1
              : 1
            : e.score < t.score
              ? -1
              : 1,
      }),
      (AhS = { location: 0, threshold: 0.6, distance: 100 }),
      (whS = {
        useExtendedSearch: !1,
        getFn: ShS,
        ignoreLocation: !1,
        ignoreFieldNorm: !1,
        fieldNormWeight: 1,
      }),
      (Ig = { ...vhS, ...EhS, ...AhS, ...whS }),
      (ThS = /[^ ]+/g));
    _Pf = class _Pf extends PQe {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "exact";
      }
      static get multiRegex() {
        return /^="(.*)"$/;
      }
      static get singleRegex() {
        return /^=(.*)$/;
      }
      search(e) {
        let t = e === this.pattern;
        return {
          isMatch: t,
          score: t ? 0 : 1,
          indices: [0, this.pattern.length - 1],
        };
      }
    };
    bPf = class bPf extends PQe {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "inverse-exact";
      }
      static get multiRegex() {
        return /^!"(.*)"$/;
      }
      static get singleRegex() {
        return /^!(.*)$/;
      }
      search(e) {
        let r = e.indexOf(this.pattern) === -1;
        return { isMatch: r, score: r ? 0 : 1, indices: [0, e.length - 1] };
      }
    };
    SPf = class SPf extends PQe {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "prefix-exact";
      }
      static get multiRegex() {
        return /^\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^\^(.*)$/;
      }
      search(e) {
        let t = e.startsWith(this.pattern);
        return {
          isMatch: t,
          score: t ? 0 : 1,
          indices: [0, this.pattern.length - 1],
        };
      }
    };
    EPf = class EPf extends PQe {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "inverse-prefix-exact";
      }
      static get multiRegex() {
        return /^!\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^!\^(.*)$/;
      }
      search(e) {
        let t = !e.startsWith(this.pattern);
        return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
      }
    };
    vPf = class vPf extends PQe {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "suffix-exact";
      }
      static get multiRegex() {
        return /^"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^(.*)\$$/;
      }
      search(e) {
        let t = e.endsWith(this.pattern);
        return {
          isMatch: t,
          score: t ? 0 : 1,
          indices: [e.length - this.pattern.length, e.length - 1],
        };
      }
    };
    APf = class APf extends PQe {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "inverse-suffix-exact";
      }
      static get multiRegex() {
        return /^!"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^!(.*)\$$/;
      }
      search(e) {
        let t = !e.endsWith(this.pattern);
        return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
      }
    };
    m5a = class m5a extends PQe {
      constructor(
        e,
        {
          location: t = Ig.location,
          threshold: r = Ig.threshold,
          distance: n = Ig.distance,
          includeMatches: o = Ig.includeMatches,
          findAllMatches: i = Ig.findAllMatches,
          minMatchCharLength: s = Ig.minMatchCharLength,
          isCaseSensitive: a = Ig.isCaseSensitive,
          ignoreLocation: l = Ig.ignoreLocation,
        } = {},
      ) {
        super(e);
        this._bitapSearch = new f5a(e, {
          location: t,
          threshold: r,
          distance: n,
          includeMatches: o,
          findAllMatches: i,
          minMatchCharLength: s,
          isCaseSensitive: a,
          ignoreLocation: l,
        });
      }
      static get type() {
        return "fuzzy";
      }
      static get multiRegex() {
        return /^"(.*)"$/;
      }
      static get singleRegex() {
        return /^(.*)$/;
      }
      search(e) {
        return this._bitapSearch.searchIn(e);
      }
    };
    h5a = class h5a extends PQe {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "include";
      }
      static get multiRegex() {
        return /^'"(.*)"$/;
      }
      static get singleRegex() {
        return /^'(.*)$/;
      }
      search(e) {
        let t = 0,
          r,
          n = [],
          o = this.pattern.length;
        while ((r = e.indexOf(this.pattern, t)) > -1)
          ((t = r + o), n.push([r, t - 1]));
        let i = !!n.length;
        return { isMatch: i, score: i ? 0 : 1, indices: n };
      }
    };
    ((l5a = [_Pf, h5a, SPf, EPf, APf, vPf, bPf, m5a]),
      (uPf = l5a.length),
      (RhS = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/));
    MhS = new Set([m5a.type, h5a.type]);
    c5a = [];
    ((noi = { AND: "$and", OR: "$or" }),
      (d5a = { PATH: "$path", PATTERN: "$val" }));
    aTe.version = "7.0.0";
    aTe.createIndex = yPf;
    aTe.parseIndex = xhS;
    aTe.config = Ig;
    aTe.parseQuery = TPf;
    LhS(wPf);
  });
