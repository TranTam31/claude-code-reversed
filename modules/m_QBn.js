// Module: QBn (lines 24758-24850)
  var QBn = S(() => {
    $Ur();
    Na = wS.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite",
    ]);
    eoe = class eoe extends Error {
      get errors() {
        return this.issues;
      }
      constructor(e) {
        super();
        ((this.issues = []),
          (this.addIssue = (r) => {
            this.issues = [...this.issues, r];
          }),
          (this.addIssues = (r = []) => {
            this.issues = [...this.issues, ...r];
          }));
        let t = new.target.prototype;
        if (Object.setPrototypeOf) Object.setPrototypeOf(this, t);
        else this.__proto__ = t;
        ((this.name = "ZodError"), (this.issues = e));
      }
      format(e) {
        let t =
            e ||
            function (o) {
              return o.message;
            },
          r = { _errors: [] },
          n = (o) => {
            for (let i of o.issues)
              if (i.code === "invalid_union") i.unionErrors.map(n);
              else if (i.code === "invalid_return_type") n(i.returnTypeError);
              else if (i.code === "invalid_arguments") n(i.argumentsError);
              else if (i.path.length === 0) r._errors.push(t(i));
              else {
                let s = r,
                  a = 0;
                while (a < i.path.length) {
                  let l = i.path[a];
                  if (a !== i.path.length - 1) s[l] = s[l] || { _errors: [] };
                  else
                    ((s[l] = s[l] || { _errors: [] }), s[l]._errors.push(t(i)));
                  ((s = s[l]), a++);
                }
              }
          };
        return (n(this), r);
      }
      static assert(e) {
        if (!(e instanceof eoe)) throw Error(`Not a ZodError: ${e}`);
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, wS.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(e = (t) => t.message) {
        let t = {},
          r = [];
        for (let n of this.issues)
          if (n.path.length > 0) {
            let o = n.path[0];
            ((t[o] = t[o] || []), t[o].push(e(n)));
          } else r.push(e(n));
        return { formErrors: r, fieldErrors: t };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    eoe.create = (e) => new eoe(e);
  });
