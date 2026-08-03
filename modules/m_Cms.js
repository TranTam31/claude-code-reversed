// Module: cMs (lines 446804-446850)
  var cMs = S(() => {
    ixo();
    Dfr();
    pPs();
    $Ps();
    _fr();
    Pr();
    ((dbd = require("crypto")), (obd = new RegExp(`^${Rfr}$`)));
    abd = new WeakMap();
    ((lbd = new Set([
      "href",
      "xlink:href",
      "src",
      "action",
      "formaction",
      "poster",
      "cite",
    ])),
      (dGy = /(^|[\t\n\f\r ])opener([\t\n\f\r ]|$)/i),
      (pGy = new Set([
        "iframe",
        "embed",
        "object",
        "base",
        "form",
        "link",
        "noscript",
        "frameset",
        "frame",
        "plaintext",
      ])),
      (fGy = new Set(["xmp", "noembed", "noframes", "plaintext", "noscript"])),
      (mGy = new Set(["animate", "set", "animatetransform", "animatecolor"])),
      (hGy = new Set(["a", "image"])));
    pbd = class pbd extends Array {
      static [Symbol.species] = Array;
      overflow = 0;
      push(...e) {
        for (let t of e)
          if (this.length < gGy) super.push(t);
          else this.overflow++;
        return this.length;
      }
    };
    SGy = new Set(["pre", "textarea", "listing"]);
    vGy = new Set(["in-progress", "ready", "started"]);
  });
