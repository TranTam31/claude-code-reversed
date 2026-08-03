// Module: PLl (lines 34853-34902)
  var PLl = S(() => {
    Uue();
    Y4n = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      (e, t) => {
        Y4n[e] = function (n) {
          return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      },
    );
    DLl = {};
    Y4n.transitional = function (t, r, n) {
      function o(i, s) {
        return (
          "[Axios v" +
          ACt +
          "] Transitional option '" +
          i +
          "'" +
          s +
          (n ? ". " + n : "")
        );
      }
      return (i, s, a) => {
        if (t === !1)
          throw new Pl(
            o(s, " has been removed" + (r ? " in " + r : "")),
            Pl.ERR_DEPRECATED,
          );
        if (r && !DLl[s])
          ((DLl[s] = !0),
            console.warn(
              o(
                s,
                " has been deprecated since v" +
                  r +
                  " and will be removed in the near future",
              ),
            ));
        return t ? t(i, s, a) : !0;
      };
    };
    Y4n.spelling = function (t) {
      return (r, n) => (
        console.warn(`${n} is likely a misspelling of ${t}`),
        !0
      );
    };
    E2r = { assertOptions: TZm, validators: Y4n };
  });
