// Module: MLl (lines 35045-35079)
  var MLl = S(() => {
    II();
    k4n();
    QPl();
    RLl();
    G4n();
    M4n();
    PLl();
    IOe();
    u2r();
    Hye = E2r.validators;
    Gn.forEach(["delete", "get", "head", "options"], function (t) {
      v2r.prototype[t] = function (r, n) {
        return this.request(
          nCe(n || {}, { method: t, url: r, data: (n || {}).data }),
        );
      };
    });
    Gn.forEach(["post", "put", "patch"], function (t) {
      function r(n) {
        return function (i, s, a) {
          return this.request(
            nCe(a || {}, {
              method: t,
              headers: n ? { "Content-Type": "multipart/form-data" } : {},
              url: i,
              data: s,
            }),
          );
        };
      }
      ((v2r.prototype[t] = r()), (v2r.prototype[t + "Form"] = r(!0)));
    });
    A2r = v2r;
  });
