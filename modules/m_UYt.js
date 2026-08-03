// Module: UYt (lines 62126-62232)
  var UYt = S(() => {
    vjl();
    ((SPi = Symbol.for("signal-exit emitter")),
      (EPi = globalThis),
      (oxh = Object.defineProperty.bind(Object)));
    wjl = class wjl extends APi {
      onExit() {
        return () => {};
      }
      load() {}
      unload() {}
    };
    Tjl = class Tjl extends APi {
      #e = vPi.platform === "win32" ? "SIGINT" : "SIGHUP";
      #t = new Ajl();
      #r;
      #n;
      #o;
      #l = {};
      #i = !1;
      constructor(e) {
        super();
        ((this.#r = e), (this.#l = {}));
        for (let t of c4r)
          this.#l[t] = () => {
            let r = this.#r.listeners(t),
              { count: n } = this.#t,
              o = e;
            if (
              typeof o.__signal_exit_emitter__ === "object" &&
              typeof o.__signal_exit_emitter__.count === "number"
            )
              n += o.__signal_exit_emitter__.count;
            if (r.length === n) {
              this.unload();
              let i = this.#t.emit("exit", null, t),
                s = t === "SIGHUP" ? this.#e : t;
              if (!i) e.kill(e.pid, s);
            }
          };
        ((this.#o = e.reallyExit), (this.#n = e.emit));
      }
      onExit(e, t) {
        if (!nGn(this.#r)) return () => {};
        if (this.#i === !1) this.load();
        let r = t?.alwaysLast ? "afterExit" : "exit";
        return (
          this.#t.on(r, e),
          () => {
            if (
              (this.#t.removeListener(r, e),
              this.#t.listeners.exit.length === 0 &&
                this.#t.listeners.afterExit.length === 0)
            )
              this.unload();
          }
        );
      }
      load() {
        if (this.#i) return;
        ((this.#i = !0), (this.#t.count += 1));
        for (let e of c4r)
          try {
            let t = this.#l[e];
            if (t) this.#r.on(e, t);
          } catch (t) {}
        ((this.#r.emit = (e, ...t) => this.#c(e, ...t)),
          (this.#r.reallyExit = (e) => this.#s(e)));
      }
      unload() {
        if (!this.#i) return;
        ((this.#i = !1),
          c4r.forEach((e) => {
            let t = this.#l[e];
            if (!t) throw Error("Listener not defined for signal: " + e);
            try {
              this.#r.removeListener(e, t);
            } catch (r) {}
          }),
          (this.#r.emit = this.#n),
          (this.#r.reallyExit = this.#o),
          (this.#t.count -= 1));
      }
      #s(e) {
        if (!nGn(this.#r)) return 0;
        return (
          (this.#r.exitCode = e || 0),
          this.#t.emit("exit", this.#r.exitCode, null),
          this.#o.call(this.#r, this.#r.exitCode)
        );
      }
      #c(e, ...t) {
        let r = this.#n;
        if (e === "exit" && nGn(this.#r)) {
          if (typeof t[0] === "number") this.#r.exitCode = t[0];
          let n = r.call(this.#r, e, ...t);
          return (this.#t.emit("exit", this.#r.exitCode, null), n);
        } else return r.call(this.#r, e, ...t);
      }
    };
    ((vPi = globalThis.process),
      ({
        onExit: vCe,
        load: PzE,
        unload: MzE,
      } = ixh(nGn(vPi) ? new Tjl(vPi) : new wjl())));
  });
