  var K8 = "TaskUpdate";
  function zpo(e) {
    let t = qpo(e, 32, { remaining: 1e5 });
    if ("reason" in t) return { ok: !1, reason: t.reason };
    if (t.node.type !== "object") return { ok: !1, reason: "root_not_object" };
    return { ok: !0, schema: { ...t.node, type: "object" } };
  }
  function nMu(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
  }
  function oMu(e) {
    return (
      e === null ||
      typeof e === "string" ||
      (typeof e === "number" && Number.isFinite(e)) ||
      typeof e === "boolean"
    );
  }
  function qpo(e, t, r) {
    if (t <= 0) return { reason: "max_depth" };
    if (--r.remaining < 0) return { reason: "max_nodes" };
    if (!nMu(e)) return { reason: "not_object" };
    for (let i of Object.keys(e))
      if (!ity.has(i)) return { reason: "unsupported_keyword" };
    let n = {};
    if (e.description !== void 0) {
      if (typeof e.description !== "string")
        return { reason: "unsupported_keyword" };
      n.description = e.description;
    }
    if (e.title !== void 0) {
      if (typeof e.title !== "string") return { reason: "unsupported_keyword" };
      n.title = e.title;
    }
    if (e.anyOf !== void 0) {
      for (let s of Object.keys(e))
        if (s !== "anyOf" && !sty.has(s))
          return { reason: "unsupported_keyword" };
      if (!Array.isArray(e.anyOf) || e.anyOf.length === 0)
        return { reason: "unsupported_keyword" };
      let i = [];
      for (let s of e.anyOf) {
        let a = qpo(s, t - 1, r);
        if ("reason" in a) return a;
        i.push(a.node);
      }
      return ((n.anyOf = i), { node: n });
    }
    if (e.const !== void 0) {
      if (!oMu(e.const)) return { reason: "unsupported_const" };
      n.const = e.const;
    }
    if (e.enum !== void 0) {
      if (
        !Array.isArray(e.enum) ||
        e.enum.length === 0 ||
        !e.enum.every(oMu) ||
        new Set(e.enum).size !== e.enum.length
      )
        return { reason: "unsupported_enum" };
      n.enum = e.enum.slice();
    }
    let o = e.type;
    if (o !== void 0)
      if (typeof o === "string") {
        if (!rMu.has(o)) return { reason: "unsupported_type" };
        n.type = o;
      } else if (Array.isArray(o)) {
        if (
          o.length === 0 ||
          !o.every(
            (i) =>
              typeof i === "string" &&
              rMu.has(i) &&
              i !== "object" &&
              i !== "array",
          ) ||
          new Set(o).size !== o.length
        )
          return { reason: "unsupported_type" };
        n.type = o.slice();
      } else return { reason: "unsupported_type" };
    if (
      o !== "object" &&
      (e.properties !== void 0 ||
        e.required !== void 0 ||
        e.additionalProperties !== void 0)
    )
      return { reason: "mismatched_keywords" };
    if (o !== "array" && e.items !== void 0)
      return { reason: "mismatched_keywords" };
    if (o === "object") {
      let i = e.properties;
      if (!nMu(i)) return { reason: "no_properties" };
      if (e.additionalProperties !== void 0 && e.additionalProperties !== !1)
        return { reason: "additional_properties" };
      if (e.required !== void 0) {
        if (
          !Array.isArray(e.required) ||
          !e.required.every(
            (a) => typeof a === "string" && Object.hasOwn(i, a),
          ) ||
          new Set(e.required).size !== e.required.length
        )
          return { reason: "invalid_required" };
        n.required = e.required.slice();
      }
      let s = [];
      for (let [a, l] of Object.entries(i)) {
        let c = qpo(l, t - 1, r);
        if ("reason" in c) return c;
        s.push([a, c.node]);
      }
      ((n.properties = Object.fromEntries(s)), (n.additionalProperties = !1));
    } else if (o === "array") {
      let i = e.items;
      if (i === void 0 || Array.isArray(i))
        return { reason: "unsupported_items" };
      let s = qpo(i, t - 1, r);
      if ("reason" in s) return s;
      n.items = s.node;
    } else if (o === void 0 && n.enum === void 0 && !("const" in n))
      return { reason: "missing_type" };
    return { node: n };
  }
  var ity, sty, rMu;
  var Bus = S(() => {
    ((ity = new Set([
      "$schema",
      "type",
      "description",
      "title",
      "properties",
      "required",
      "additionalProperties",
      "items",
      "enum",
      "const",
      "anyOf",
    ])),
      (sty = new Set(["$schema", "description", "title"])),
      (rMu = new Set([
        "object",
        "array",
        "string",
        "integer",
        "number",
        "boolean",
        "null",
      ])));
  });
  function aMu(e) {
    return e.isNonInteractiveSession || e.isBgSession === !0;
  }
