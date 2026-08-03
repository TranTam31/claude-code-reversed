// Module: WC (lines 180135-180198)
  var WC = S(() => {
    c_ = class c_ extends Error {
      reasonCode;
      constructor(e, t) {
        super(e);
        ((this.name = "ArtifactInputError"), (this.reasonCode = t));
      }
    };
    Fqr = new RegExp(`^${$qr}$`);
    pHg = new RegExp(
      `^https://(?:claude\\.ai|claude-ai\\.staging\\.ant\\.dev)/code/(?:artifact|frame)/${$qr}/?$`,
    );
    ((W7i = KZc * 4),
      (fHg = /&(#x[0-9a-f]+|#\d+|[a-z]+);/gi),
      (Uro = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        nbsp: "\xA0",
        ndash: "\u2013",
        mdash: "\u2014",
        minus: "\u2212",
        hellip: "\u2026",
        lsquo: "\u2018",
        rsquo: "\u2019",
        sbquo: "\u201A",
        ldquo: "\u201C",
        rdquo: "\u201D",
        bdquo: "\u201E",
        lsaquo: "\u2039",
        rsaquo: "\u203A",
        laquo: "\xAB",
        raquo: "\xBB",
        middot: "\xB7",
        bull: "\u2022",
        dagger: "\u2020",
        Dagger: "\u2021",
        prime: "\u2032",
        Prime: "\u2033",
        trade: "\u2122",
        copy: "\xA9",
        reg: "\xAE",
        deg: "\xB0",
        times: "\xD7",
      }));
    ((G7i = /[<>&"']/),
      (mHg = [
        ["'", "'"],
        ['"', '"'],
        ["\u2018", "\u2019"],
        ["\u201C", "\u201D"],
        ["`", "`"],
      ]));
    ((Gro =
      /[\u201C\u201D\u201E\u201F\uFF02\u2033\u2036\u02BA\u02DD\u02EE\u05F4\u3003\u301D-\u301F\u275D\u275E]/g),
      (V7i = /[\p{Default_Ignorable_Code_Point}\u2800]/gu));
    ((hHg =
      /<meta[^>]+name=["']description["'][^>]+content=(["'])((?:(?!\1).)*)\1/is),
      (gHg = /<title[^>]*>([\s\S]*?)<\/title>/i),
      (yHg = /<h1[^>]*>([\s\S]*?)<\/h1>/i),
      (_Hg = new Set(["", "index", "untitled", "document"])));
  });
