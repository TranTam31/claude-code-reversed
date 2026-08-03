// Module: _uu (lines 202840-202945)
  var _uu = S(() => {
    Aso();
    hso();
    ((cts = x(mso(), 1)),
      (yuu = x(guu(), 1)),
      (f$g = {
        icon: { cursor: _rr.pointer },
        style: {
          disabled: (e) => cts.default.dim(`- ${e}`),
          description: (e) => cts.default.cyan(e),
        },
        helpMode: "auto",
      }));
    Tso = rDt((e, t) => {
      let { loop: r = !0, pageSize: n = 7 } = e,
        o = fat(!0),
        i = kqe(f$g, e.theme),
        [s, a] = k8("idle"),
        l = eDt({ status: s, theme: i }),
        c = fat(),
        u = s9r(() => m$g(e.choices), [e.choices]),
        d = s9r(() => {
          let T = u.findIndex(wrr),
            C = u.findLastIndex(wrr);
          if (T < 0)
            throw new i9r(
              "[select prompt] No selectable choices. All choices are disabled.",
            );
          return { first: T, last: C };
        }, [u]),
        p = s9r(() => {
          if (!("default" in e)) return -1;
          return u.findIndex((T) => wrr(T) && T.value === e.default);
        }, [e.default, u]),
        [f, m] = k8(p === -1 ? d.first : p),
        g = u[f];
      (tDt((T, C) => {
        if ((clearTimeout(c.current), grr(T))) (a("done"), t(g.value));
        else if (lso(T) || jes(T)) {
          if (
            (C.clearLine(0),
            r || (lso(T) && f !== d.first) || (jes(T) && f !== d.last))
          ) {
            let I = lso(T) ? -1 : 1,
              R = f;
            do R = (R + I + u.length) % u.length;
            while (!wrr(u[R]));
            m(R);
          }
        } else if (Qlu(T)) {
          C.clearLine(0);
          let I = Number(T.name) - 1,
            R = u[I];
          if (R != null && wrr(R)) m(I);
        } else if (cso(T)) C.clearLine(0);
        else {
          let I = C.line.toLowerCase(),
            R = u.findIndex((k) => {
              if (nDt.isSeparator(k) || !wrr(k)) return !1;
              return k.name.toLowerCase().startsWith(I);
            });
          if (R >= 0) m(R);
          c.current = setTimeout(() => {
            C.clearLine(0);
          }, 700);
        }
      }),
        ZRt(
          () => () => {
            clearTimeout(c.current);
          },
          [],
        ));
      let y = i.style.message(e.message, s),
        _ = "",
        E = "";
      if (i.helpMode === "always" || (i.helpMode === "auto" && o.current))
        if (((o.current = !1), u.length > n))
          E = `
${i.style.help("(Use arrow keys to reveal more choices)")}`;
        else _ = i.style.help("(Use arrow keys)");
      let A = its({
        items: u,
        active: f,
        renderItem({ item: T, isActive: C }) {
          if (nDt.isSeparator(T)) return ` ${T.separator}`;
          if (T.disabled) {
            let k = typeof T.disabled === "string" ? T.disabled : "(disabled)";
            return i.style.disabled(`${T.name} ${k}`);
          }
          let I = C ? i.style.highlight : (k) => k,
            R = C ? i.icon.cursor : " ";
          return I(`${R} ${T.name}`);
        },
        pageSize: n,
        loop: r,
      });
      if (s === "done") return `${l} ${y} ${i.style.answer(g.short)}`;
      let b = g.description
        ? `
${i.style.description(g.description)}`
        : "";
      return `${[l, y, _].filter(Boolean).join(" ")}
${A}${E}${b}${yuu.default.cursorHide}`;
    });
  });
