// Module: $Ur (lines 24676-24754)
  var $Ur = S(() => {
    (function (e) {
      e.assertEqual = (o) => {};
      function t(o) {}
      e.assertIs = t;
      function r(o) {
        throw Error();
      }
      ((e.assertNever = r),
        (e.arrayToEnum = (o) => {
          let i = {};
          for (let s of o) i[s] = s;
          return i;
        }),
        (e.getValidEnumValues = (o) => {
          let i = e.objectKeys(o).filter((a) => typeof o[o[a]] !== "number"),
            s = {};
          for (let a of i) s[a] = o[a];
          return e.objectValues(s);
        }),
        (e.objectValues = (o) =>
          e.objectKeys(o).map(function (i) {
            return o[i];
          })),
        (e.objectKeys =
          typeof Object.keys === "function"
            ? (o) => Object.keys(o)
            : (o) => {
                let i = [];
                for (let s in o)
                  if (Object.prototype.hasOwnProperty.call(o, s)) i.push(s);
                return i;
              }),
        (e.find = (o, i) => {
          for (let s of o) if (i(s)) return s;
          return;
        }),
        (e.isInteger =
          typeof Number.isInteger === "function"
            ? (o) => Number.isInteger(o)
            : (o) =>
                typeof o === "number" &&
                Number.isFinite(o) &&
                Math.floor(o) === o));
      function n(o, i = " | ") {
        return o.map((s) => (typeof s === "string" ? `'${s}'` : s)).join(i);
      }
      ((e.joinValues = n),
        (e.jsonStringifyReplacer = (o, i) => {
          if (typeof i === "bigint") return i.toString();
          return i;
        }));
    })(wS || (wS = {}));
    (function (e) {
      e.mergeShapes = (t, r) => ({ ...t, ...r });
    })(wCi || (wCi = {}));
    Yl = wS.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set",
    ]);
  });
