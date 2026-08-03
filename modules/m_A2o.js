// Module: A2o (lines 606071-606092)
  var A2o = S(() => {
    lnp();
    ((HN_ = /[\p{L}\p{M}\p{N}]+/gu),
      (bfn = String.raw`(^|[^\p{L}\p{N}]|[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])`),
      (S2o = String.raw`(?!(?![\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])[\p{L}\p{N}])`),
      (IN_ = [
        [new RegExp(bfn + String.raw`[cC]\+\+` + S2o, "gu"), " cpp "],
        [new RegExp(bfn + String.raw`[cC]#` + S2o, "gu"), " csharp "],
        [new RegExp(bfn + String.raw`[fF]#` + S2o, "gu"), " fsharp "],
        [new RegExp(bfn + String.raw`\.[nN][eE][tT]` + S2o, "gu"), " dotnet "],
      ]),
      (RN_ = new RegExp(bfn + String.raw`([vV]?\d+(?:\.\d+)+)`, "gu")),
      (DN_ =
        /^(?![\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])[\p{L}\p{N}]/u),
      (Eht =
        /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]/),
      (PN_ =
        /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]+|[^\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]+/gu),
      (LN_ = /[\uFF66-\uFF9F]/),
      (fnp = /^\p{N}+$/u),
      (mnp = /^\p{L}$/u));
  });
