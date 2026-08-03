// Module: tgd (lines 425631-426093)
  var tgd = S(() => {
    Q2y = [
      "ADDRESS",
      "ARTICLE",
      "ASIDE",
      "AUDIO",
      "BLOCKQUOTE",
      "BODY",
      "CANVAS",
      "CENTER",
      "DD",
      "DIR",
      "DIV",
      "DL",
      "DT",
      "FIELDSET",
      "FIGCAPTION",
      "FIGURE",
      "FOOTER",
      "FORM",
      "FRAMESET",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "HEADER",
      "HGROUP",
      "HR",
      "HTML",
      "ISINDEX",
      "LI",
      "MAIN",
      "MENU",
      "NAV",
      "NOFRAMES",
      "NOSCRIPT",
      "OL",
      "OUTPUT",
      "P",
      "PRE",
      "SECTION",
      "TABLE",
      "TBODY",
      "TD",
      "TFOOT",
      "TH",
      "THEAD",
      "TR",
      "UL",
    ];
    qhd = [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR",
    ];
    Khd = [
      "A",
      "TABLE",
      "THEAD",
      "TBODY",
      "TFOOT",
      "TH",
      "TD",
      "IFRAME",
      "SCRIPT",
      "AUDIO",
      "VIDEO",
    ];
    W7 = {};
    W7.paragraph = {
      filter: "p",
      replacement: function (e) {
        return (
          `

` +
          e +
          `

`
        );
      },
    };
    W7.lineBreak = {
      filter: "br",
      replacement: function (e, t, r) {
        return (
          r.br +
          `
`
        );
      },
    };
    W7.heading = {
      filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
      replacement: function (e, t, r) {
        var n = Number(t.nodeName.charAt(1));
        if (r.headingStyle === "setext" && n < 3) {
          var o = LDs(n === 1 ? "=" : "-", e.length);
          return (
            `

` +
            e +
            `
` +
            o +
            `

`
          );
        } else
          return (
            `

` +
            LDs("#", n) +
            " " +
            e +
            `

`
          );
      },
    };
    W7.blockquote = {
      filter: "blockquote",
      replacement: function (e) {
        return (
          (e = e.replace(/^\n+|\n+$/g, "")),
          (e = e.replace(/^/gm, "> ")),
          `

` +
            e +
            `

`
        );
      },
    };
    W7.list = {
      filter: ["ul", "ol"],
      replacement: function (e, t) {
        var r = t.parentNode;
        if (r.nodeName === "LI" && r.lastElementChild === t)
          return (
            `
` + e
          );
        else
          return (
            `

` +
            e +
            `

`
          );
      },
    };
    W7.listItem = {
      filter: "li",
      replacement: function (e, t, r) {
        e = e
          .replace(/^\n+/, "")
          .replace(
            /\n+$/,
            `
`,
          )
          .replace(
            /\n/gm,
            `
    `,
          );
        var n = r.bulletListMarker + "   ",
          o = t.parentNode;
        if (o.nodeName === "OL") {
          var i = o.getAttribute("start"),
            s = Array.prototype.indexOf.call(o.children, t);
          n = (i ? Number(i) + s : s + 1) + ".  ";
        }
        return (
          n +
          e +
          (t.nextSibling && !/\n$/.test(e)
            ? `
`
            : "")
        );
      },
    };
    W7.indentedCodeBlock = {
      filter: function (e, t) {
        return (
          t.codeBlockStyle === "indented" &&
          e.nodeName === "PRE" &&
          e.firstChild &&
          e.firstChild.nodeName === "CODE"
        );
      },
      replacement: function (e, t, r) {
        return (
          `

    ` +
          t.firstChild.textContent.replace(
            /\n/g,
            `
    `,
          ) +
          `

`
        );
      },
    };
    W7.fencedCodeBlock = {
      filter: function (e, t) {
        return (
          t.codeBlockStyle === "fenced" &&
          e.nodeName === "PRE" &&
          e.firstChild &&
          e.firstChild.nodeName === "CODE"
        );
      },
      replacement: function (e, t, r) {
        var n = t.firstChild.getAttribute("class") || "",
          o = (n.match(/language-(\S+)/) || [null, ""])[1],
          i = t.firstChild.textContent,
          s = r.fence.charAt(0),
          a = 3,
          l = new RegExp("^" + s + "{3,}", "gm"),
          c;
        while ((c = l.exec(i))) if (c[0].length >= a) a = c[0].length + 1;
        var u = LDs(s, a);
        return (
          `

` +
          u +
          o +
          `
` +
          i.replace(/\n$/, "") +
          `
` +
          u +
          `

`
        );
      },
    };
    W7.horizontalRule = {
      filter: "hr",
      replacement: function (e, t, r) {
        return (
          `

` +
          r.hr +
          `

`
        );
      },
    };
    W7.inlineLink = {
      filter: function (e, t) {
        return (
          t.linkStyle === "inlined" &&
          e.nodeName === "A" &&
          e.getAttribute("href")
        );
      },
      replacement: function (e, t) {
        var r = t.getAttribute("href");
        if (r) r = r.replace(/([()])/g, "\\$1");
        var n = cCo(t.getAttribute("title"));
        if (n) n = ' "' + n.replace(/"/g, '\\"') + '"';
        return "[" + e + "](" + r + n + ")";
      },
    };
    W7.referenceLink = {
      filter: function (e, t) {
        return (
          t.linkStyle === "referenced" &&
          e.nodeName === "A" &&
          e.getAttribute("href")
        );
      },
      replacement: function (e, t, r) {
        var n = t.getAttribute("href"),
          o = cCo(t.getAttribute("title"));
        if (o) o = ' "' + o + '"';
        var i, s;
        switch (r.linkReferenceStyle) {
          case "collapsed":
            ((i = "[" + e + "][]"), (s = "[" + e + "]: " + n + o));
            break;
          case "shortcut":
            ((i = "[" + e + "]"), (s = "[" + e + "]: " + n + o));
            break;
          default:
            var a = this.references.length + 1;
            ((i = "[" + e + "][" + a + "]"), (s = "[" + a + "]: " + n + o));
        }
        return (this.references.push(s), i);
      },
      references: [],
      append: function (e) {
        var t = "";
        if (this.references.length)
          ((t =
            `

` +
            this.references.join(`
`) +
            `

`),
            (this.references = []));
        return t;
      },
    };
    W7.emphasis = {
      filter: ["em", "i"],
      replacement: function (e, t, r) {
        if (!e.trim()) return "";
        return r.emDelimiter + e + r.emDelimiter;
      },
    };
    W7.strong = {
      filter: ["strong", "b"],
      replacement: function (e, t, r) {
        if (!e.trim()) return "";
        return r.strongDelimiter + e + r.strongDelimiter;
      },
    };
    W7.code = {
      filter: function (e) {
        var t = e.previousSibling || e.nextSibling,
          r = e.parentNode.nodeName === "PRE" && !t;
        return e.nodeName === "CODE" && !r;
      },
      replacement: function (e) {
        if (!e) return "";
        e = e.replace(/\r?\n|\r/g, " ");
        var t = /^`|^ .*?[^ ].* $|`$/.test(e) ? " " : "",
          r = "`",
          n = e.match(/`+/gm) || [];
        while (n.indexOf(r) !== -1) r = r + "`";
        return r + t + e + t + r;
      },
    };
    W7.image = {
      filter: "img",
      replacement: function (e, t) {
        var r = cCo(t.getAttribute("alt")),
          n = t.getAttribute("src") || "",
          o = cCo(t.getAttribute("title")),
          i = o ? ' "' + o + '"' : "";
        return n ? "![" + r + "](" + n + i + ")" : "";
      },
    };
    Xhd.prototype = {
      add: function (e, t) {
        this.array.unshift(t);
      },
      keep: function (e) {
        this._keep.unshift({ filter: e, replacement: this.keepReplacement });
      },
      remove: function (e) {
        this._remove.unshift({
          filter: e,
          replacement: function () {
            return "";
          },
        });
      },
      forNode: function (e) {
        if (e.isBlank) return this.blankRule;
        var t;
        if ((t = DDs(this.array, e, this.options))) return t;
        if ((t = DDs(this._keep, e, this.options))) return t;
        if ((t = DDs(this._remove, e, this.options))) return t;
        return this.defaultRule;
      },
      forEach: function (e) {
        for (var t = 0; t < this.array.length; t++) e(this.array[t], t);
      },
    };
    Jhd = typeof window < "u" ? window : {};
    sBy = oBy() ? Jhd.DOMParser : iBy();
    ((mBy = Array.prototype.reduce),
      (hBy = [
        [/\\/g, "\\\\"],
        [/\*/g, "\\*"],
        [/^-/g, "\\-"],
        [/^\+ /g, "\\+ "],
        [/^(=+)/g, "\\$1"],
        [/^(#{1,6}) /g, "\\$1 "],
        [/`/g, "\\`"],
        [/^~~~/g, "\\~~~"],
        [/\[/g, "\\["],
        [/\]/g, "\\]"],
        [/^>/g, "\\>"],
        [/_/g, "\\_"],
        [/^(\d+)\. /g, "$1\\. "],
      ]));
    uCo.prototype = {
      turndown: function (e) {
        if (!_By(e))
          throw TypeError(
            e + " is not a string, or an element/document/fragment node.",
          );
        if (e === "") return "";
        var t = Qhd.call(this, new aBy(e, this.options));
        return gBy.call(this, t);
      },
      use: function (e) {
        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) this.use(e[t]);
        else if (typeof e === "function") e(this);
        else
          throw TypeError("plugin must be a Function or an Array of Functions");
        return this;
      },
      addRule: function (e, t) {
        return (this.rules.add(e, t), this);
      },
      keep: function (e) {
        return (this.rules.keep(e), this);
      },
      remove: function (e) {
        return (this.rules.remove(e), this);
      },
      escape: function (e) {
        return hBy.reduce(function (t, r) {
          return t.replace(r[0], r[1]);
        }, e);
      },
    };
    bBy = uCo;
  });
