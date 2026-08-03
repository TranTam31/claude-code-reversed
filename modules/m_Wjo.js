// Module: wJo (lines 802276-802293)
  var wJo = S(() => {
    ESe();
    euf = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+$/;
    ((nuf = {
      is: { op: "eq", list: !1 },
      is_not: { op: "not_in", list: !1 },
      one_of: { op: "in", list: !0 },
      none_of: { op: "not_in", list: !0 },
      starts_with: { op: "starts_with", list: !1 },
      contains: { op: "contains", list: !1 },
      matches: { op: "matches", list: !1 },
      glob: { op: "glob", list: !1 },
      eq: { op: "eq", list: !1 },
      in: { op: "in", list: !0 },
      not_in: { op: "not_in", list: !0 },
    }),
      (ouf = Object.keys(nuf)));
  });
