// Module: C7c (lines 167159-167173)
  var C7c = S(() => {
    ((w7c = x(require("child_process"))),
      (T7c = {
        execFile(e, t, r) {
          return new Promise((n, o) => {
            w7c.execFile(e, t, r, (i, s, a) => {
              if (Buffer.isBuffer(s)) s = s.toString("utf8");
              if (Buffer.isBuffer(a)) a = a.toString("utf8");
              if (a || i) o(a ? Error(a) : i);
              else n(s);
            });
          });
        },
      }));
  });
