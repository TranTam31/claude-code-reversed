// Module: rRs (lines 408110-408182)
  var rRs = S(() => {
    vt();
    Lm();
    ((k$y = [xy, ort, WG, nrt, cKt]),
      (I$y = [
        {
          pattern: "settings-json",
          category: "escalation-pattern",
          re: /\.claude[\\/]+settings(?:\.local)?\.json|(?<!\w)\.claude\.json\b|(?<![\w-])managed-settings\.json\b/gi,
          action: "flag",
        },
        {
          pattern: "bypass-permissions",
          category: "escalation-pattern",
          re: /\bbypassPermissions/gi,
          action: "flag",
        },
        {
          pattern: "dangerously-skip-permissions",
          category: "escalation-pattern",
          re: /--dangerously-skip-permissions\b/gi,
          action: "flag",
        },
        {
          pattern: "permissions-allow-deny",
          category: "escalation-pattern",
          re: /(?<![\w-])permissions\s*[.[]\s*["']?(?:allow|deny)\b|(?<![\w-])permissions["']?\s*:\s*\{[^{}]{0,80}["'](?:allow|deny)["']\s*:/gi,
          action: "flag",
        },
        {
          pattern: "system-reminder-tag",
          category: "control-tag",
          re: /<(?=\/?system-reminder(?:[>\s/]|$))/gi,
          action: "neutralize",
          neutralize: y0o,
        },
        {
          pattern: "harness-envelope-tag",
          category: "control-tag",
          re: new RegExp(`<(?=/?(?:${k$y.join("|")})(?:[>\\s/]|$))`, "gi"),
          action: "neutralize",
          neutralize: y0o,
        },
        {
          pattern: "channel-source-tag",
          category: "control-tag",
          re: /<(?=channel\b[^>]{0,120}(?<![\w-])source\s*=)/gi,
          action: "neutralize",
          neutralize: y0o,
        },
        {
          pattern: "marker-prefix-forgery",
          category: "control-tag",
          re: /(^|[\r\n\u2028\u2029])[ \t]*\[[ \t]*harness[ \t]*:/gi,
          action: "neutralize",
          neutralize: (e) => e.replace("[", "[\\"),
        },
        {
          pattern: "model-layer-tag",
          category: "control-tag",
          re: new RegExp(`<(?=/?${H$y})`, "gi"),
          action: "neutralize",
          neutralize: y0o,
        },
        {
          pattern: "turn-marker",
          category: "turn-marker",
          re: /((?:^|\n)(?:Human|Assistant)):/g,
          action: "neutralize-silent",
          neutralize: (e) => e.replace(":", "\\:"),
        },
      ]));
  });
