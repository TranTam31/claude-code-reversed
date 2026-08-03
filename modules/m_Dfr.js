// Module: Dfr (lines 438389-438415)
  var Dfr = S(() => {
    Zt();
    Pr();
    _v();
    ((w_d = require("crypto")),
      (pWy = /(?:`{3,}|~{3,})[ \t]*decision/),
      (sxo = new RegExp(`^${Rfr}$`)),
      (fWy = [
        "id",
        "question",
        "option",
        "lean",
        "resolved",
        "custom",
        "anchor",
      ]),
      (mWy = new RegExp(`^(${fWy.join("|")}):[ \\t]?(.*)$`)),
      (v_d = new RegExp(`^(${Rfr})(?:[ \\t]*\\|[ \\t]*(.+))?$`)),
      (FPs = /^[A-Za-z0-9 ._:/@#()+-]{1,120}$/),
      (bWy =
        /[\u0000-\u001f\u007f-\u009f\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u),
      (SWy = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu));
    vWy = /^[A-Za-z0-9+/]*={0,2}$/;
    Ifr = ["get-started", "keep-iterating"];
    D_d =
      /^<!--ws-decision-[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}-\d+-->\s*$/;
  });
