// Module: O4p (lines 747503-747536)
  var O4p = S(() => {
    Ku();
    ct();
    Zt();
    Nln();
    ((D4p = x(ot(), 1)), (ile = x(ue(), 1)));
    jbn = {
      renderToolResultMessage(e) {
        let t;
        try {
          t = Ie(e, null, 2);
        } catch {
          t = String(e);
        }
        return ile.jsx(xr, { children: ile.jsx(h, { children: t }) });
      },
      renderToolUseRejectedMessage() {
        return ile.jsx(xr, {
          children: ile.jsx(h, { color: "warning", children: "Rejected" }),
        });
      },
      renderToolUseErrorMessage(e, t) {
        return ile.jsx(xr, {
          children: ile.jsx(h, {
            color: "error",
            children: typeof e === "string" ? e : "Error",
          }),
        });
      },
      renderToolUseProgressMessage() {
        return null;
      },
    };
  });
