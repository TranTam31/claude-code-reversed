// Module: fms (lines 295709-295744)
  var fms = S(() => {
    ((uUu = {
      keydown: { bubble: "onKeyDown", capture: "onKeyDownCapture" },
      focus: { bubble: "onFocus", capture: "onFocusCapture" },
      blur: { bubble: "onBlur", capture: "onBlurCapture" },
      paste: { bubble: "onPaste", capture: "onPasteCapture" },
      wheel: { bubble: "onWheel", capture: "onWheelCapture" },
      action: { bubble: "onAction", capture: "onActionCapture" },
      click: { bubble: "onClick" },
    }),
      (dms = new Set([
        "onKeyDown",
        "onKeyDownCapture",
        "onPaste",
        "onPasteCapture",
        "onWheel",
        "onWheelCapture",
      ])),
      (pms = new Set([
        "onKeyDown",
        "onKeyDownCapture",
        "onFocus",
        "onFocusCapture",
        "onBlur",
        "onBlurCapture",
        "onPaste",
        "onPasteCapture",
        "onWheel",
        "onWheelCapture",
        "onAction",
        "onActionCapture",
        "onClick",
        "onMouseEnter",
        "onMouseLeave",
      ])));
  });
