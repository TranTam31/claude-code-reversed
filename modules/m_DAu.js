// Module: DAu (lines 237808-237848)
  var DAu = S(() => {
    mco = class mco {
      _name;
      _aliases;
      constructor(e = "") {
        ((this._name = e), (this._aliases = new Map()));
      }
      static ROOT = new mco();
      name() {
        return this._name;
      }
      aliases() {
        return this._aliases;
      }
      resolveCandidateNames(e) {
        if (e.startsWith(".")) {
          let o = e.substring(1),
            i = this.findAlias(o);
          if (i !== void 0) return [i];
          return [o];
        }
        let t = this.findAlias(e);
        if (t !== void 0) return [t];
        if (this.name() === "") return [e];
        let r = this.name(),
          n = [r + "." + e];
        for (let o = r.lastIndexOf("."); o >= 0; o = r.lastIndexOf("."))
          ((r = r.substring(0, o)), n.push(r + "." + e));
        return (n.push(e), n);
      }
      findAlias(e) {
        let t = e,
          r = "",
          n = e.indexOf(".");
        if (n >= 0) ((t = e.substring(0, n)), (r = e.substring(n)));
        let o = this._aliases.get(t);
        if (o === void 0) return;
        return o + r;
      }
    };
  });
