// Module: pXe (lines 750978-751070)
  var pXe = S(() => {
    EX();
    V0();
    ct();
    vc();
    Vf();
    jct();
    Pr();
    MWp();
    p6o();
    ((dle = x(ot(), 1)),
      (GL = x(ue(), 1)),
      ($Wp = x(_e(), 1)),
      (wP = dle.memo(function ({
        code: t,
        filePath: r,
        width: n,
        dim: o = !1,
        startLine: i = 1,
      }) {
        let s = dle.useRef(null),
          [a, l] = dle.useState(n || Abb),
          [c] = is(),
          d = eg().syntaxHighlightingDisabled ?? !1,
          p = dle.useMemo(() => {
            if (d) return null;
            let _ = o2p();
            if (!_) return null;
            return new _(Xue(t), r);
          }, [t, r, d]);
        dle.useEffect(() => {
          if (!n && s.current) {
            let { width: _ } = qj(s.current);
            if (_ > 0) l(_ - 2);
          }
        }, [n]);
        let f = dle.useMemo(() => {
            if (i === 1) return null;
            let _ = OWp(t),
              E = String(i + _ - 1).length;
            return { digits: E, extraCols: Math.max(0, E - String(_).length) };
          }, [t, i]),
          m = dle.useMemo(() => {
            if (p === null) return null;
            return p.render(c, a - (f?.extraCols ?? 0), o);
          }, [p, c, a, o, f]),
          g = dle.useMemo(() => {
            if (!ds() && i === 1) return 0;
            return String(OWp(t)).length + 2;
          }, [t, i]),
          y = dle.useMemo(() => {
            if (f === null || g === 0 || m === null) return null;
            let { digits: _ } = f,
              E = i;
            return m.map((A) => {
              if (xi(WU(A, 0, g)).trim() === "") return " ".repeat(_ + 2);
              return ` ${String(E++).padStart(_)} `;
            });
          }, [f, i, g, m]);
        return GL.jsx(H, {
          ref: s,
          children: m
            ? GL.jsx(H, {
                flexDirection: "column",
                children: m.map((_, E) =>
                  g > 0
                    ? GL.jsx(
                        NWp,
                        { line: _, gutterWidth: g, displayGutter: y?.[E] },
                        E,
                      )
                    : GL.jsx(h, { children: GL.jsx(Cc, { children: _ }) }, E),
                ),
              })
            : GL.jsxs(H, {
                flexDirection: "column",
                children: [
                  i !== 1 &&
                    GL.jsxs(h, {
                      dimColor: !0,
                      children: ["\u2026 from line ", i],
                    }),
                  GL.jsx(hua, {
                    code: t,
                    filePath: r,
                    dim: o,
                    skipColoring: d,
                  }),
                ],
              }),
        });
      })));
  });
