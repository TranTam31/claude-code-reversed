// Module: suu (lines 202558-202571)
  var suu = S(() => {
    ats = class ats extends Promise {
      static withResolver() {
        let e, t;
        return {
          promise: new Promise((n, o) => {
            ((e = n), (t = o));
          }),
          resolve: e,
          reject: t,
        };
      }
    };
  });
