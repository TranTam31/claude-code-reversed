// Module: z_p (lines 660491-660510)
  var z_p = S(() => {
    fjo = class fjo extends Map {
      first;
      last;
      constructor(e) {
        let t = [],
          r,
          n,
          o,
          i = 0;
        for (let s of e) {
          let a = { value: s.value, previous: o, next: void 0, index: i };
          if (o) o.next = a;
          ((r ||= a), (n = a), t.push([s.value, a]), i++, (o = a));
        }
        super(t);
        ((this.first = r), (this.last = n));
      }
    };
  });
