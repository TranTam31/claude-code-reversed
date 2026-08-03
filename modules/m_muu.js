// Module: muu (lines 202701-202736)
  var muu = S(() => {
    Aso();
    oA = rDt((e, t) => {
      let { required: r, validate: n = () => !0 } = e,
        o = kqe(e.theme),
        [i, s] = k8("idle"),
        [a = "", l] = k8(e.default),
        [c, u] = k8(),
        [d, p] = k8(""),
        f = eDt({ status: i, theme: o });
      tDt(async (E, A) => {
        if (i !== "idle") return;
        if (grr(E)) {
          let b = d || a;
          s("loading");
          let T = r && !b ? "You must provide a value" : await n(b);
          if (T === !0) (p(b), s("done"), t(b));
          else
            (A.write(d), u(T || "You must provide a valid value"), s("idle"));
        } else if (cso(E) && !d) l(void 0);
        else if (E.name === "tab" && !d)
          (l(void 0), A.clearLine(0), A.write(a), p(a));
        else (p(A.line), u(void 0));
      });
      let m = o.style.message(e.message, i),
        g = d;
      if (typeof e.transformer === "function")
        g = e.transformer(d, { isFinal: i === "done" });
      else if (i === "done") g = o.style.answer(d);
      let y;
      if (a && i !== "done" && !d) y = o.style.defaultAnswer(a);
      let _ = "";
      if (c) _ = o.style.error(c);
      return [[f, m, y, g].filter((E) => E !== void 0).join(" "), _];
    });
  });
