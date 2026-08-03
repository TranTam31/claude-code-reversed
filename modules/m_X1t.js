// Module: X1t (lines 395326-395369)
  var X1t = S(() => {
    lIe();
    qh();
    ((jOy = [
      "sandbox",
      "worker-sandbox",
      "elicitation",
      "managed-settings",
      "permission",
      "dialog",
    ]),
      (Rfe = (() => {
        let e = Rs(),
          t = {
            sandbox: null,
            permission: null,
            "worker-sandbox": null,
            elicitation: null,
            "managed-settings": null,
            dialog: null,
          },
          r = null;
        function n() {
          let o = null;
          for (let i of jOy) {
            let s = t[i];
            if (s) {
              o = s;
              break;
            }
          }
          if (o?.text === r?.text) return;
          ((r = o), e.emit(o));
        }
        return {
          subscribe: e.subscribe,
          emit(o, i = "permission") {
            let s = o === null ? null : typeof o === "string" ? { text: o } : o;
            if (t[i]?.text === s?.text) return;
            ((t[i] = s), n());
          },
        };
      })()));
  });
